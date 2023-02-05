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
contract Crowdfunding {
    uint public raisedamount;
    uint public noOfContributors;
    uint public Trustcoins;
    uint public remainingTrustCoins;
    uint onewei = 1 wei;
    address public manager;
    mapping (address=>uint) public contributor;
    struct Campaign {
        string description;
        address payable recipient;
        uint goal;
        uint pledged;
        uint noofVoters;
        uint endAt;
        bool claimed;
        uint mincontribution;
    }
    mapping (uint=>Campaign) public Campaigns; 
    uint public noofCampaign;

    constructor(){
        manager=msg.sender;
    }
    Campaign requests ;

    function launch (string memory description_,address payable recipient_ ,uint target__ , uint deadline__ , uint mincontribution_) public{
        require(msg.sender==manager,"Only manager can create this Campaign");
        Campaign memory request = Campaigns[noofCampaign] ;
        noofCampaign++;
        request.goal=target__;
        request.recipient=recipient_;
        request.endAt=block.timestamp+deadline__;
        request.mincontribution=mincontribution_*onewei;
        request.description=description_;
        request.claimed= false;
        request.noofVoters=0;
    }
    function sendEth() public payable{
        require (block.timestamp < requests.endAt, "Deadline has passed");
        require (msg.value >= requests.mincontribution , "Minimum contribution has not met");
        

        if(contributor[msg.sender]==0){
            noOfContributors++;            //if first time contributing, amt contributed=0
        }
        raisedamount=raisedamount+msg.value;
        contributor[msg.sender]+=msg.value; //second,third time their contribution updated 

    }
    function balance() public view returns(uint){
        return address(this).balance;//returns balance of the contract
    }
    function refund() public {
        require(block.timestamp>requests.endAt && raisedamount<requests.goal,"You are not eligible to get refund right now");
        require(contributor[msg.sender]>0,"You haven't contributed any amount");
        address payable user = payable(msg.sender);
        user.transfer(contributor[msg.sender]);
        contributor[msg.sender]=0;
    }
  
}
