const { network } = require("hardhat");
const {
  networkConfig,
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
} = require("../helper.hardhat.config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  console.log("____________________ MockV3Aggregator____________________");
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  if (developmentChains.includes(network.name)) {
    log("Local network detected! Deploying mocks...");
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_ANSWER],
    });
    log("Mocks Deployed!");
    log("________________________________________");
  }
};

module.exports.tags = ["all", "mocks"];
