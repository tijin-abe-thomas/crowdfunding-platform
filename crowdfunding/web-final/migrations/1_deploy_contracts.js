const User = artifacts.require("User.sol");
const Crowdfunding = artifacts.require("Crowdfunding.sol")

module.exports = function(deployer) {
 deployer.deploy(User)
 deployer.deploy(Crowdfunding)
};