const Web3 = require('web3');
const fs = require('fs');
const VotingSystemABI = require('../client/src/contracts/VotingSystemABI.json');
const VotingSystemBytecode = fs.readFileSync('./build/contracts/VotingSystem.json').bytecode;

const deployContract = async () => {
  const web3 = new Web3('https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID');
  const accounts = await web3.eth.getAccounts();
  const contract = new web3.eth.Contract(VotingSystemABI);

  const result = await contract.deploy({ data: VotingSystemBytecode, arguments: [["Alice", "Bob", "Charlie"]] })
    .send({ from: accounts[0], gas: '1000000' });

  console.log('Contract deployed at address:', result.options.address);
};

deployContract();
