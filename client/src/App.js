import React, { useEffect, useState } from 'react';
import { voteForCandidate, getCandidates } from './services/web3Service';
import VoteButton from './components/VoteButton';

const App = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const candidatesList = await getCandidates();
      setCandidates(candidatesList);
    };
    fetchCandidates();
  }, []);

  const handleVote = (candidate) => {
    voteForCandidate(candidate);
  };

  return (
    <div>
      <h1>Web3 Voting System</h1>
      <div>
        {candidates.map((candidate, index) => (
          <VoteButton key={index} candidate={candidate} vote={handleVote} />
        ))}
      </div>
    </div>
  );
};

export default App;
