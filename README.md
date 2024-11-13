## DAiVote : AI-Integrated Blockchain Voting

# Description
This project is a decentralized voting system built using Ethereum smart contracts and React.js. It allows users to vote for candidates and checks predictions of the most likely winner using a machine learning model.

# Frontend
- Built using React.js
- Interacts with the Ethereum blockchain using Web3.js

# Smart Contract
- Written in Solidity
- Deployed on Ethereum (Rinkeby test network)

# AI Integration
- Trains a model to predict the winner based on input data
- Uses RandomForestClassifier for prediction

# Setup

# Install Frontend
- cd client
- npm install
- npm start

# Install Backend
- cd smart-contract
- npm install
- truffle migrate --network rinkeby

# Run
- cd ai-integration
- pip install -r requirements.txt
- python model/voting_model.py