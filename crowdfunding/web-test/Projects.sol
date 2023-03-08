// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    uint public unlockTime;
    address payable public owner;

    event Withdrawal(uint amount, uint when);

    constructor(uint _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Crowdfunding {
    uint public noOfCampaigns;
    uint public totalRaisedAmount;
    uint public totalTrustCoins=1000000;
   
    uint public deadline;
    uint onewei = 1 wei;
    address public manager;
    mapping(address=>uint) managerTrust;
    
    struct Contributor{
        address contributor;
        uint amtContributed;
    }

    struct Campaign {
        uint ID;
        string hash;
        string title;
        string description;
        string location;
        string category;
        address payable recipient;
        uint minContribution;
        uint goal;
        uint pledgedAmt;
        uint campaignDeadline;
        uint noOfContributors;
        Contributor[] contributors;
        bool claimed;
    }

    Campaign[] Campaigns;

    event CampaignUploaded(
        uint ID,
        string title,
        string description,
        string location,
        string category,
        address payable recipient,
        uint minContribution,
        uint goal,
        uint campaignDeadline,
        bool claimed
    );
    
    constructor(){
        manager=msg.sender;
        managerTrust[msg.sender]=500;
        totalTrustCoins-=500;
    }

    function uploadCampaign(
        string memory title_,
        string memory description_,
        string memory location_,
        string memory category_,
        address payable recipient_ ,
        uint minContribution_,
        uint goal_ , 
        uint deadline_ 
        ) public {
        require(msg.sender==manager,"Only manager can create this Campaign");
        Campaign memory requests;
        requests.ID=noOfCampaigns-1;
        requests.title=title_;
        requests.description=description_;
        requests.location=location_;
        requests.category=category_;
        requests.recipient=recipient_;
        requests.minContribution=minContribution_*onewei;
        requests.goal=goal_;
        requests.campaignDeadline=block.timestamp+ deadline_;
        requests.claimed= false;
        Campaigns.push(requests);
        
        // Campaigns[noOfCampaigns] = Campaign(
        //     noOfCampaigns-1,
        //     "",
        //     title_,
        //     description_,
        //     location_,
        //     category_,
        //     recipient_,
        //     minContribution_*onewei,
        //     goal_,
        //     0,
        //     block.timestamp+ deadline_,
        //     0,
        //     [],
        //     false,
        // );

        noOfCampaigns++;
        emit CampaignUploaded(
            noOfCampaigns-1,
            title_,
            description_,
            location_,
            category_,
            recipient_ ,
            minContribution_,
            goal_ , 
            deadline_,
            false
        );
    }

    function payCampaign(uint id_) public payable{
        require (block.timestamp < Campaigns[id_].campaignDeadline, "Deadline has passed");
        require (msg.value >= Campaigns[id_].minContribution , "Minimum contribution has not met");
        
        Contributor memory contributor;
        contributor.contributor=msg.sender;
        contributor.amtContributed=msg.value;

        Campaigns[id_].noOfContributors++;
        totalRaisedAmount=totalRaisedAmount+msg.value;
        Campaigns[id_].pledgedAmt+=msg.value;

        Campaigns[id_].contributors.push(contributor);
    }

    function balanceOfCampaign(uint id_) public view returns(uint){
        return Campaigns[id_].pledgedAmt;
    }

    function campaignContributors(uint id_) public view returns(Contributor[] memory){
        return Campaigns[id_].contributors;
    }

    function getAllCampaigns() public view returns (Campaign[] memory){
        return Campaigns;
    }

    function refundAmt(uint id_) public {
        require(block.timestamp>Campaigns[id_].campaignDeadline && Campaigns[id_].pledgedAmt<Campaigns[id_].goal, "You are not eligible to get refund right now");
        uint i;
        for (i = 0; i < Campaigns[id_].contributors.length; i++) {
            address payable user = payable(Campaigns[id_].contributors[i].contributor);
            user.transfer(Campaigns[id_].contributors[i].amtContributed);
            Campaigns[id_].contributors[i].amtContributed = 0;
        }
        // require(flag==1, "You are not eligible for refund :D");
        
        //     address payable user = payable(msg.sender);
        //     user.transfer(Campaigns[id_].contributors[i].amtContributed);
        //     Campaigns[id_].contributors[i].amtContributed = 0;
    }

}
