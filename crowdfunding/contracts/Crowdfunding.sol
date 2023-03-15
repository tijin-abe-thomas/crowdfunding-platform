// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Crowdfunding {
  uint onewei = 1 wei;

  address payable public manager;
  uint public noOfCampaigns = 0;
  uint public totalContributions = 0;
  uint public totalTrustCoins = 1000000;
  mapping(address => uint) managerTrust;

  struct Contributor {
    address contributorAddress;
    uint amtContributed;
  }

  struct Campaign {
    uint ID;
    string title;
    string description;
    string location;
    string category;
    uint minContribution;
    uint goal;
    uint pledgedAmt;
    uint campaignDeadline;
    uint noOfContributions;
    bool claimed;
  }

  constructor() payable {
    manager = payable(msg.sender);
    managerTrust[msg.sender] = 500;
    totalTrustCoins -= 500;
  }

  // mapping from total number of campaigns as campaign_id to Campaign
  mapping(uint => Campaign) public campaigns;

  // // mapping from total number of contributions on platform as id to campaign id
  // mapping(uint => uint) platformContributions;
  // // mapping from campaign id to ( mapping from contribution id to contributor address)
  // mapping(uint => mapping(uint => address)) campaignContributions;
  // // mapping from contributor address to (mapping from campaign id to (mapping from contribution id to amount paid))
  // mapping(address => mapping(uint => mapping(uint => uint256))) public contributorContributions;

  mapping(uint => mapping(uint => Contributor)) public campaignContributions;
  mapping(address => mapping(uint => uint)) public contributorContributions;

  event CampaignUploaded(
    uint ID,
    string title,
    string description,
    string location,
    string category,
    uint minContribution,
    uint goal,
    uint campaignDeadline,
    uint noOfContributions,
    bool claimed
  );

  event paidCampaign(uint id_, address contributor_, uint256 amount_);

  modifier onlyManager() {
    require(msg.sender == manager);
    _;
  }

  function uploadCampaign(
    uint id_,
    string memory title_,
    string memory description_,
    string memory location_,
    string memory category_,
    uint minContribution_,
    uint goal_,
    uint deadline_
  ) public onlyManager {
    // require(msg.sender == manager, 'Only manager can create this Campaign');
    Campaign memory campaign = Campaign(
      id_,
      title_,
      description_,
      location_,
      category_,
      minContribution_ * onewei,
      goal_,
      0,
      block.timestamp + deadline_,
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

  function payCampaign(uint id_) public payable {
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

    Contributor memory contributor = Contributor(
      msg.sender,
      msg.value * onewei
    );

    contributorContributions[msg.sender][id_] += msg.value * onewei;
    campaignContributions[id_][campaigns[id_].noOfContributions] = contributor;

    campaigns[id_].pledgedAmt += msg.value * onewei;
    campaigns[id_].noOfContributions++;

    // platformContributions[totalContributions] = id_;
    // campaignContributions[id_][totalContributions] = msg.sender;
    // contributorContributions[msg.sender][id_][totalContributions] = msg.value;

    emit paidCampaign(id_, msg.sender, msg.value * onewei);

    // totalContributions++;
  }

  function campaignSuccess(uint id_) public onlyManager {
    require(
      // block.timestamp > campaigns[id_].campaignDeadline &&
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

  function refundAmt(uint id_) public {
    require(
      // block.timestamp > campaigns[id_].campaignDeadline &&
      campaigns[id_].pledgedAmt < campaigns[id_].goal,
      'You are not eligible to get refund right now'
    );

    for (uint i = 0; i < campaigns[id_].noOfContributions; i++) {
      address payable user = payable(
        campaignContributions[id_][i].contributorAddress
      );
      uint amountPayable = campaignContributions[id_][i].amtContributed;
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
