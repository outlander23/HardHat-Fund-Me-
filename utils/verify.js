const { run } = require("hardhat");

async function verify(contractAddress, args) {
  console.log("Verifying contract...");
  console.log(contractAddress);
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { verify };
