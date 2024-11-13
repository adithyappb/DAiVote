module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 8545,
        network_id: "*",
      },
      rinkeby: {
        provider: () => new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID'),
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000,
      },
    },
    compilers: {
      solc: {
        version: "0.8.0",
      },
    },
  };
  