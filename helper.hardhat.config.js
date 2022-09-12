const networkConfig = {
  4: {
    name: "rinkeby",
    ethToUsd: "0x8a753747a1fa494ec906ce90e9f37563a8af630e",
  },
  420: {
    name: "goerli",
    ethToUsd: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
  },
};

const DECIMALS = 8;
const INITIAL_ANSWER = 2000000000000;

const developmentChains = ["hardhat", "localhost"];

module.exports = { networkConfig, developmentChains, DECIMALS, INITIAL_ANSWER };
