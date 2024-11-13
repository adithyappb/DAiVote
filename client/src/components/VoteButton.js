import React from 'react';

const VoteButton = ({ candidate, vote }) => {
  return (
    <button onClick={() => vote(candidate)}>
      Vote for {candidate}
    </button>
  );
};

export default VoteButton;
