// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Crowdfunding {
  uint256 onewei = 1 wei;

  address payable public manager;
  uint256 public noOfCampaigns = 0;
  uint256 public totalContributions = 0;
  uint256 public totalTrustCoins = 1000000;
  mapping(address => uint256) managerTrust;

  struct Contributor {
    address contributorAddress;
    uint256 amtContributed;
  }

  struct Campaign {
    uint256 ID;
    string title;
    string description;
    string location;
    string category;
    uint256 minContribution;
    uint256 goal;
    uint256 pledgedAmt;
    uint256 campaignDeadline;
    uint256 noOfContributions;
    uint256 voteCount;
    bool claimed;
  }

  constructor() payable {
    manager = payable(msg.sender);
    managerTrust[msg.sender] = 500;
    totalTrustCoins -= 500;
  }

  // ALL THE FOLLOWING BS IS BECAUSE
  // THERE WERE ISSUES WITH USING A MAPPING OR ARRAY OF STRUCT INSIDE A STRUCT
  // TRY TO SOLVE I GUESS

  // mapping from total number of campaigns as campaign_id to Campaign
  mapping(uint256 => Campaign) public campaigns;
  //mapping from contributor address to (mapping from campaign id to boolean value for voted or not)
  mapping(address => mapping(uint256 => bool)) public votes;

  // // mapping from total number of contributions on platform as id to campaign id
  // mapping(uint256 => uint256) platformContributions;
  // // mapping from campaign id to ( mapping from contribution id to contributor address)
  // mapping(uint256 => mapping(uint256 => address)) campaignContributions;
  // // mapping from contributor address to (mapping from campaign id to (mapping from contribution id to amount paid))
  // mapping(address => mapping(uint256 => mapping(uint256 => uint256256))) public contributorContributions;

  // mapping from campaign id to (mapping from contribution id to contributor))
  mapping(uint256 => mapping(uint256 => Contributor)) public campaignContributions;
  // mapping from contributor address to (mapping from campaign id to amount contributed))
  mapping(address => mapping(uint256 => uint256)) public contributorContributions;

  event CampaignUploaded(
    uint256 ID,
    string title,
    string description,
    string location,
    string category,
    uint256 minContribution,
    uint256 goal,
    uint256 campaignDeadline,
    uint256 noOfContributions,
    bool claimed
  );

  event paidCampaign(uint256 id_, address contributor_, uint256 amount_);

  modifier onlyManager() {
    require(msg.sender == manager);
    _;
  }

  function uploadCampaign(
    uint256 id_,
    string memory title_,
    string memory description_,
    string memory location_,
    string memory category_,
    uint256 minContribution_,
    uint256 goal_,
    uint256 deadline_
  ) public onlyManager {
    // require(msg.sender == manager, 'Only manager can create this Campaign');
    Campaign memory campaign = Campaign(
      id_,
      title_,
      description_,
      location_,
      category_,
      minContribution_,
      goal_,
      0,
      deadline_,
      0,
      0,
      false
    );

    campaigns[id_] = campaign;

    emit CampaignUploaded(
      noOfCampaigns,
      title_,
      description_,
      // imageHash_,
      location_,
      category_,
      minContribution_,
      goal_,
      deadline_,
      0,
      false
    );

    noOfCampaigns++;
  }

  function payCampaign(uint256 id_) public payable {
    require(
      block.timestamp < campaigns[id_].campaignDeadline,
      'Deadline has passed'
    );
    require(
      msg.value >= campaigns[id_].minContribution,
      'Minimum contribution has not met'
    );

    // address payable user = payable(manager);
    // user.transfer(msg.value);

    Contributor memory contributor = Contributor(msg.sender, msg.value);

    contributorContributions[msg.sender][id_] += msg.value;
    campaignContributions[id_][campaigns[id_].noOfContributions] = contributor;

    campaigns[id_].pledgedAmt += msg.value;
    campaigns[id_].noOfContributions++;

    // platformContributions[totalContributions] = id_;
    // campaignContributions[id_][totalContributions] = msg.sender;
    // contributorContributions[msg.sender][id_][totalContributions] = msg.value;

    emit paidCampaign(id_, msg.sender, msg.value);

    // totalContributions++;
  }

  function getCampaignContributions(
    uint256 id_
  ) public view returns (address[] memory, uint256[] memory) {
    address[] memory returnAddress = new address[](
      campaigns[id_].noOfContributions
    );
    uint256[] memory returnAmount = new uint256[](campaigns[id_].noOfContributions);
    for (uint256 i = 0; i < campaigns[id_].noOfContributions; i++) {
      returnAddress[i] = campaignContributions[id_][i].contributorAddress;
      returnAmount[i] = campaignContributions[id_][i].amtContributed;
    }
    return (returnAddress, returnAmount);
  }

  function getContributorContributions(
    address contributorAddress_
  ) public view returns (uint256[] memory) {
    uint256[] memory returnAmount = new uint256[](noOfCampaigns);
    for (uint256 i = 0; i < noOfCampaigns; i++) {
      returnAmount[i] = contributorContributions[contributorAddress_][i];
    }
    return (returnAmount);
  }

  function campaignSuccess(uint256 id_) public onlyManager {
    require(
      block.timestamp > campaigns[id_].campaignDeadline &&
      campaigns[id_].pledgedAmt > campaigns[id_].goal,
      'You are not eligible to get refund right now'
    );

    // address payable user = payable(manager);
    // manager.transfer(campaigns[id_].pledgedAmt);
    (bool success, ) = msg.sender.call{ value: campaigns[id_].pledgedAmt }('');
    // if (!success) {
    //   revert();
    // }
    require(success, 'Failed to send user balance back to the user');
  }

  function refundAmt(uint256 id_) public {
    require(
      block.timestamp > campaigns[id_].campaignDeadline &&
      campaigns[id_].pledgedAmt < campaigns[id_].goal,
      'You are not eligible to get refund right now'
    );

    for (uint256 i = 0; i < campaigns[id_].noOfContributions; i++) {
      address payable user = payable(
        campaignContributions[id_][i].contributorAddress
      );
      uint256 amountPayable = campaignContributions[id_][i].amtContributed;
      // user.transfer(amountPayable);
      (bool success, ) = user.call{ value: amountPayable }('');
      // if (!success) {
      //   revert();
      // }
      require(success, 'Failed to send user balance back to the user');
      campaignContributions[id_][i].amtContributed = 0;
    }
  }

  

}
