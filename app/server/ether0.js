/*
 Backend interface with Ethereum via the web3 API.
 Instantiate contract references and load all relevant data.
 Listen for all events and store locally for client side access.
 */

// Cmd line args
const argv = require('yargs')
.option('token', { description: 'Token token contract address.', type: 'string' })
.argv

// Init a web3 connection, to locally running node
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

// Truffle contract library utilized for contract abstraction
const contract = require('truffle-contract')

// Token - create truffle contract object
const tokenArtifacts = require('../../build/contracts/Token.json')
const Token = contract(tokenArtifacts)
Token.setProvider(web3.currentProvider)
let token

// Default account to send txs
const owner = web3.eth.accounts[0]

initHub()

/**
 * Create the reference objects for the token.
 * Load all token data from on-chain contract.
 * Create both token listeners.
 */
async function initHub () {
  if (!web3.isConnected()) throw 'Web3 is not connected!';

  if (argv.token) {
    token = await Token.at(argv.token)
    console.log('Token object created. Address: ' + token.address)
  }

  console.log('Server ready!')
}

module.exports = {}
