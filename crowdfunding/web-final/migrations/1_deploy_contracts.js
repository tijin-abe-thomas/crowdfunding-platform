const User = artifacts.require("User.sol");
const Campaigns = artifacts.require("Campaigns.sol");

module.exports = function(deployer) {
 deployer.deploy(User)  
 deployer.deploy(Campaigns)
};