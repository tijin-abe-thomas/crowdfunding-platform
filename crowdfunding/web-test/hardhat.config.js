/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-waffle');
// require("@nomicfoundation/hardhat-toolbox");
// import '@nomiclabs/hardhat-ethers';
require('@nomiclabs/hardhat-ethers');
require('hardhat-deploy');
require('dotenv').config();
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  networks: {
    hardhat: {
      chainId: 31337,
      // url: 'http://127.0.0.1:8545',
      // accounts: ['0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266']
    },
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
   }
  },
  namedAccounts: {
    deployer: {
      default: 0
    }
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
        details: {
          yul: false
        }
      }
    }
  }
};

// 0x5fbdb2315678afecb367f032d93f642f64180aa3;
