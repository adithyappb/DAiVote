import Web3 from 'web3';
import VotingSystemABI from '../contracts/VotingSystemABI.json';

const web3 = new Web3(window.ethereum);

const getContract = async () => {
  const accounts = await web3.eth.requestAccounts();
  const networkId = await web3.eth.net.getId();
  const contractAddress = 'YOUR_CONTRACT_ADDRESS';
  const contract = new web3.eth.Contract(VotingSystemABI, contractAddress);
  return { contract, accounts };
};

const voteForCandidate = async (candidate) => {
  const { contract, accounts } = await getContract();
  await contract.methods.voteForCandidate(candidate).send({ from: accounts[0] });
};

const getCandidates = async () => {
  const { contract } = await getContract();
  const candidates = await contract.methods.getCandidates().call();
  return candidates;
};

export { voteForCandidate, getCandidates };
