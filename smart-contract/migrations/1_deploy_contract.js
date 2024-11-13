const VotingSystem = artifacts.require("VotingSystem");

module.exports = async function (deployer) {
  const candidates = ["Alice", "Bob", "Charlie"];
  await deployer.deploy(VotingSystem, candidates);
};
