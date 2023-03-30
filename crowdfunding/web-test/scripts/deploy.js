// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// // will compile your contracts, add the Hardhat Runtime Environment's members to the
// // global scope, and execute the script.

const hre = require("hardhat");
const {campaigns} = require("@/exampleCampaigns.json")
const {contributorContributions} = require("@/exampleContributions.json")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;

  const [deployer] = await ethers.getSigners()
  console.log(deployer)
  const Crowdfunding = await hre.ethers.getContractFactory("Crowdfunding")
  const crowdfunding = await Crowdfunding.deploy()
  await crowdfunding.deployed()

  // const data = {
  //   address: crowdfunding.address,
  //   abi: JSON.parse(crowdfunding.interface.format("json")),
  // };
  console.log(`deployed crowdfunding contract at: ${crowdfunding.address} \n`)

  for(let i = 0 ; i <campaigns.length; i++)
  {
    const transaction = await crowdfunding.connect(deployer).uploadCampaign(
      campaigns[i].id,
      campaigns[i].title,
      campaigns[i].description,
      campaigns[i].location,
      campaigns[i].category,
      tokens(campaigns[i].minContribution),
      tokens(campaigns[i].goal),
      campaigns[i].campaignDeadline + Date.now()
    )

    await transaction.wait()
    const campaign = await crowdfunding.campaigns(1);
    console.log(`${parseInt(campaign.campaignDeadline.toString())}`);
    console.log(`${Date.now()}`)
    console.log(`listed campaign ${campaigns[i].id}: ${campaigns[i].title} with deadline ${campaigns[i].campaignDeadline}`)
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// const { network } = require('hardhat');
// const {
//   campaigns
// } = require('C:/Users/91905/Desktop/blockchain-crowdfunding/tokyo/src/exampleCampaigns.json');

// const tokens = (n) => {
//   return ethers.utils.parseUnits(n.toString(), 'ether');
// };

// module.exports = async (hre) => {
//   const { deploy } = hre.deployments;
//   const { deployer } = await hre.getNamedAccounts();
//   const chainId = network.config.chainId;

//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;

//   const crowdfunding = await deploy('Crowdfunding', {
//     from: deployer,
//     log: true,
//     args: [],
//     waitConfirmations: chainId == 31337 ? 1 : 6
//   });
//   console.log(`deployed crowdfunding contract at: ${crowdfunding.address} \n`);
//   fs.writeFileSync(
//     "../config.json",
//     JSON.stringify(
//       {
//         crowdfunding:crowdfunding.address
//       },
//       undefined,
//       2
//     )
//   );

//   for (let i = 0; i < campaigns.length; i++) {
//     const transaction = await crowdfunding
//       .connect(deployer)
//       .uploadCampaign(
//         campaigns[i].id,
//         campaigns[i].title,
//         campaigns[i].description,
//         campaigns [i].location,
//         campaigns[i].category,
//         tokens(campaigns[i].minContribution),
//         tokens(campaigns[i].goal),
//         campaigns[i].deadline
//       );

//     await transaction.wait();

//     console.log(
//       `listed campaign ${campaigns[i].id}: ${campaigns[i].title} with deadline ${campaigns[i].deadline}`
//     );
//   }
//   return crowdfunding.address;
// };

// module.exports.tags = ['Crowdfunding'];
