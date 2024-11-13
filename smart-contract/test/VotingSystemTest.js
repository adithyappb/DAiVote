const VotingSystem = artifacts.require("VotingSystem");

contract('VotingSystem', (accounts) => {
  let votingSystem;

  before(async () => {
    votingSystem = await VotingSystem.deployed();
  });

  it('should have three candidates', async () => {
    const candidates = await votingSystem.getCandidates();
    assert.equal(candidates.length, 3);
  });

  it('should allow voting for a candidate', async () => {
    await votingSystem.voteForCandidate('Alice', { from: accounts[0] });
    const votes = await votingSystem.votes('Alice');
    assert.equal(votes.toString(), '1');
  });

  it('should not allow voting for an invalid candidate', async () => {
    try {
      await votingSystem.voteForCandidate('Invalid Candidate', { from: accounts[0] });
      assert.fail("The vote should have failed");
    } catch (error) {
      assert(error.message.includes('Candidate does not exist.'));
    }
  });
});
