/*
 Blockchain Learning Group's Community Hub Template.
 Client side interface.  Primarily listening for events in order to update the
 interface in near real-time.  All data loaded intially server side.
 */

// const apiURL = 'http://localhost:8081/'

// TODO Update with current token address and compile json data
const tokenAddress = 'TODO'
// Copy the contents of ../build/contracts/Token.json
const tokenJson = {
  "contract_name": "Token",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "supply",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "remaining",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "errorString",
          "type": "string"
        }
      ],
      "name": "LogErrorString",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    }
  ],
  "unlinked_binary": "0x6060604052341561000f57600080fd5b5b6101f58061001f6000396000f3006060604052361561005c5763ffffffff60e060020a600035041663095ea7b3811461006157806318160ddd1461009757806323b872dd146100bc57806370a08231146100f8578063a9059cbb14610061578063dd62ed3e1461015f575b600080fd5b341561006c57600080fd5b610083600160a060020a0360043516602435610196565b604051901515815260200160405180910390f35b34156100a257600080fd5b6100aa61019f565b60405190815260200160405180910390f35b34156100c757600080fd5b610083600160a060020a03600435811690602435166044356101a5565b604051901515815260200160405180910390f35b341561010357600080fd5b6100aa600160a060020a03600435166101af565b60405190815260200160405180910390f35b341561006c57600080fd5b610083600160a060020a0360043516602435610196565b604051901515815260200160405180910390f35b341561016a57600080fd5b6100aa600160a060020a0360043581169060243516610196565b60405190815260200160405180910390f35b60005b92915050565b60005b90565b60005b9392505050565b60005b919050565b60005b92915050565b60005b929150505600a165627a7a723058205b5b9fe454a245037929ed7588b79d0aa2bcc4abbfabf1ef4b30dd942afa278c0029",
  "networks": {},
  "schema_version": "0.0.5",
  "updated_at": 1506691029919
}

$(document).ready(() => {
  initializeApp()
})

/**
 * Initialize the app, loading data primarily.
 */
async function initializeApp() {
  await initEtherConnection()

  if (tokenAddress !== 'TODO') {
    // Init the token contract reference object, require contract abi and address
    window.token = await web3.eth.contract(tokenJson.abi).at(tokenAddress)
    console.log(window.token)

  } else {
    console.error('Please deploy your token and update the tokenAddress at home.js#L14')
  }

  // TODO create contract listeners
}

/**
 * Initialize the connection to a local ether client.
 */
async function initEtherConnection() {
  window.web3 = new Web3(
    new Web3.providers.HttpProvider('http://localhost:8545')
  )

  // Quick check that web3 connection successful
  console.log('wbe3 Connected? ' + web3.isConnected())
}
