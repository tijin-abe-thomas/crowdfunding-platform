// const { EthereumClient } = require('@web3modal/ethereum');
const { expect } = require('chai');
const exp = require('constants');
const { ethers } = require('hardhat');
const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether');
};

// Global constants for uploading a campaign
const ID = 0;
const title = 'Lorem Ipsum';
const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const location = 'Mangalore';
const category = 'Child Rights';
const minContribution = tokens(40);
const goal = tokens(100);
const deadline = 3;

describe('Crowdfunding', () => {
  let crowdfunding;
  let deployer, contributor;

  beforeEach(async () => {
    // Setup accounts
    [deployer, contributor, contributor2] = await ethers.getSigners();
    console.log('deployer', await ethers.provider.getBalance(deployer.address));
    console.log(
      'contributor',
      await ethers.provider.getBalance(contributor.address)
    );
    // Deploy contract
    const Crowdfunding = await ethers.getContractFactory('Crowdfunding');
    crowdfunding = await Crowdfunding.deploy();
    await crowdfunding.deployed();
  });

  describe('Deployment', () => {
    it('Sets the owner of the smart contract', async () => {
      expect(await crowdfunding.manager()).to.equal(deployer.address);
    });
  });

  describe('Upload Campaign', () => {
    let transaction;
    beforeEach(async () => {
      transaction = await crowdfunding
        .connect(deployer)
        .uploadCampaign(
          ID,
          title,
          description,
          location,
          category,
          minContribution,
          goal,
          deadline
        );
      await transaction.wait();
    });

    it('Returns the campaign attributes', async () => {
      const campaign = await crowdfunding.campaigns(ID);

      expect(campaign.ID).to.equal(ID);
      expect(campaign.title).to.equal(title);
      expect(campaign.description).to.equal(description);
      expect(campaign.location).to.equal(location);
      expect(campaign.category).to.equal(category);
      expect(campaign.minContribution).to.equal(minContribution);
      expect(campaign.goal).to.equal(goal);
      //   expect(campaign.deadline).to.equal(deadline);
    });

    it('Emits campaign uploaded event', async () => {
      expect(transaction).to.emit(crowdfunding, 'CampaignUploaded');
    });
  });

  describe('Contributing', () => {
    let transaction;

    beforeEach(async () => {
      transaction = await crowdfunding
        .connect(deployer)
        .uploadCampaign(
          ID,
          title,
          description,
          location,
          category,
          minContribution,
          goal,
          deadline
        );
      await transaction.wait();

      transaction = await crowdfunding
        .connect(contributor)
        .payCampaign(ID, { value: tokens(100) });
      await transaction.wait();

      transaction = await crowdfunding
        .connect(contributor)
        .payCampaign(ID, { value: tokens(100) });
      await transaction.wait();
    });

    it('Updates the campaign pledged amt', async () => {
      const campaign = await crowdfunding.campaigns(ID);
      expect(campaign.pledgedAmt).to.equal(tokens(200));
    });
    
    it('Updates the campaign contributions', async () => {
      const campaign = await crowdfunding.campaignContributions(ID, 0);
      expect(campaign.amtContributed).to.equal(tokens(100));
    });

    it('updates the contributor contributions', async () => {
      const amt_ = await crowdfunding.contributorContributions(
        contributor.address,
        ID
      );
      expect(amt_).to.equal(tokens(200));
    });

    it('Updates the contract balance', async () => {
      const result = await ethers.provider.getBalance(crowdfunding.address);
      expect(result).to.equal(tokens(200));
    });

    it('Emits successfully contributed', async () => {
      expect(transaction).to.emit(crowdfunding, 'paidCampaign');
    });
  });

  describe('Campaign Success', async () => {
    let transaction;
    let balanceBefore;
    let balanceAfter;

    beforeEach(async () => {
      transaction = await crowdfunding
        .connect(deployer)
        .uploadCampaign(
          ID,
          title,
          description,
          location,
          category,
          minContribution,
          99,
          deadline
        );
      await transaction.wait();

      transaction = await crowdfunding
        .connect(contributor)
        .payCampaign(ID, { value: tokens(100) });
      await transaction.wait();

      balanceBefore = await ethers.provider.getBalance(deployer.address);

      transaction = await crowdfunding.connect(deployer).campaignSuccess(ID);
      await transaction.wait();
    });

    it('updates the owner and contract balance', async () => {
      balanceAfter = await ethers.provider.getBalance(deployer.address);
      console.log('deployer before success', balanceBefore);
      console.log('deployer aftere success', balanceAfter);
      expect(transaction).to.changeTokenBalance(
        crowdfunding,
        deployer,
        tokens(100)
      );
      const result = await ethers.provider.getBalance(crowdfunding.address);
      expect(result).to.equal(0);
    });

    it('does not allow refund', async () => {
      transaction = await crowdfunding.connect(deployer).refundAmt(id);
      await transaction.wait();
      console.log(await ethers.provider.getBalance(deployer.address));
    });
  });

  describe('Refund', async () => {
    let transaction;
    let balanceBefore;
    let balanceAfter;
    beforeEach(async () => {
      transaction = await crowdfunding
        .connect(deployer)
        .uploadCampaign(
          ID,
          title,
          description,
          location,
          category,
          minContribution,
          goal,
          deadline
        );
      await transaction.wait();

      transaction = await crowdfunding
        .connect(contributor)
        .payCampaign(ID, { value: tokens(50) });
      await transaction.wait();

      transaction = await crowdfunding
        .connect(contributor2)
        .payCampaign(ID, { value: tokens(40) });
      await transaction.wait();

      balanceBefore = await ethers.provider.getBalance(contributor.address);
      console.log('contributor before refund', balanceBefore);

      balanceBefore = await ethers.provider.getBalance(contributor2.address);
      console.log('contributor2 before refund', balanceBefore);

      transaction = await crowdfunding.connect(deployer).refundAmt(ID);
      await transaction.wait();
    });

    it('does not allow success', async () => {
      transaction = await crowdfunding.connect(deployer).campaignSuccess(ID);
      await transaction.wait();
    });
    it('refunds amount', async () => {
      balanceAfter = await ethers.provider.getBalance(contributor.address);
      console.log('contributor aftere refund', balanceAfter);
      expect(transaction).to.changeTokenBalance(
        crowdfunding,
        contributor,
        tokens(50)
      );
      balanceAfter = await ethers.provider.getBalance(contributor2.address);
      console.log('contributor2 aftere refund', balanceAfter);
      expect(transaction).to.changeTokenBalance(
        crowdfunding,
        contributor2,
        tokens(40)
      );
    });
  });

  describe('Vote for Campaign', () => {
    let transaction;
    beforeEach(async () => {
      transaction = await crowdfunding
        .connect(deployer)
        .uploadCampaign(
          ID,
          title,
          description,
          location,
          category,
          minContribution,
          goal,
          deadline
        );
      await transaction.wait();
      transaction = await crowdfunding
        .connect(contributor)
        .vote(ID);
      await transaction.wait();
      
    });

    it('Votes for the campaign', async () => {
      const campaign = await crowdfunding.campaigns(ID);

      expect(campaign.votes).to.equal(1);
      expect()
    });
  });

});
