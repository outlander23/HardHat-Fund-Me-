const { network } = require("hardhat");
const {
  networkConfig,
  developmentChains,
} = require("../helper.hardhat.config");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  console.log("____________________FundMe____________________");

  let ethToUsdPriceFeedAddress;

  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  if (developmentChains.includes(network.name)) {
    const ethToUsdAggregator = await deployments.get("MockV3Aggregator");
    ethToUsdPriceFeedAddress = ethToUsdAggregator.address;
  } else {
    ethToUsdPriceFeedAddress = networkConfig[chainId]["ethToUsd"];
  }

  const args = [ethToUsdPriceFeedAddress];
  const fundMe = await deploy("FundMe", {
    from: deployer,
    args,
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_RINKEBY_API
  ) {
    await verify(fundMe.address, args);
  }
  log("_______________________________________");
};
