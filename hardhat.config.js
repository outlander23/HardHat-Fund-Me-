require("dotenv").config();
require("hardhat-deploy");
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const ETHERSCAN_RINKEBY_API = process.env.ETHERSCAN_RINKEBY_API;
module.exports = {
  // solidity: "0.8.9",

  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
      chainId: 31337,
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
      blockConfirmations: 6,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      4: 0,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.6.6",
      },
      {
        version: "0.8.8",
      },
    ],
  },
  etherscan: {
    apiKey: ETHERSCAN_RINKEBY_API,
  },
};
