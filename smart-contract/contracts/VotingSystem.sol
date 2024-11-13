pragma solidity ^0.8.0;

contract VotingSystem {
    mapping(string => uint256) public votes;
    string[] public candidates;

    constructor(string[] memory _candidates) {
        candidates = _candidates;
    }

    function voteForCandidate(string memory _candidate) public {
        require(voteExists(_candidate), "Candidate does not exist.");
        votes[_candidate]++;
    }

    function getCandidates() public view returns (string[] memory) {
        return candidates;
    }

    function voteExists(string memory _candidate) internal view returns (bool) {
        for (uint256 i = 0; i < candidates.length; i++) {
            if (keccak256(bytes(candidates[i])) == keccak256(bytes(_candidate))) {
                return true;
            }
        }
        return false;
    }
}
