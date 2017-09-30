/*
 Blockchain Learning Group's Community Hub Template.
 Client side interface.  Primarily listening for events in order to update the
 interface in near real-time.  All data loaded intially server side.
 */

// const apiURL = 'http://localhost:8081/'

// TODO Update with current token address and compile json data
const tokenAddress = '0x041492691706522b88254c0e8a62e0fbe33c1c32'
// Copy the contents of ../build/contracts/Token.json
const tokenJson = {
  "contract_name": "Token",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
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
          "name": "",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
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
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowed_",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply_",
      "outputs": [
        {
          "name": "",
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
      "name": "mint",
      "outputs": [
        {
          "name": "",
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
          "name": "",
          "type": "address"
        }
      ],
      "name": "balances_",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
          "name": "",
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
      "constant": true,
      "inputs": [],
      "name": "owner_",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "totalSupply",
          "type": "uint256"
        }
      ],
      "name": "LogTokensMinted",
      "type": "event"
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
  "unlinked_binary": "0x6060604052341561000f57600080fd5b5b60038054600160a060020a03191633600160a060020a03161790555b5b610d6f8061003c6000396000f300606060405236156100b45763ffffffff60e060020a60003504166306fdde0381146100b9578063095ea7b31461014457806318160ddd1461017a57806323b872dd1461019f5780632839e16a146101db578063313ce56714610212578063324536eb1461023757806340c10f191461025c5780636ca34ea21461029257806370a08231146102c357806395d89b41146102f4578063a9059cbb1461037f578063dd62ed3e146103b5578063e7663079146103ec575b600080fd5b34156100c457600080fd5b6100cc61041b565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156101095780820151818401525b6020016100f0565b50505050905090810190601f1680156101365780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014f57600080fd5b610166600160a060020a036004351660243561046a565b604051901515815260200160405180910390f35b341561018557600080fd5b61018d6105c3565b60405190815260200160405180910390f35b34156101aa57600080fd5b610166600160a060020a03600435811690602435166044356105ca565b604051901515815260200160405180910390f35b34156101e657600080fd5b61018d600160a060020a036004358116906024351661085e565b60405190815260200160405180910390f35b341561021d57600080fd5b61018d61087b565b60405190815260200160405180910390f35b341561024257600080fd5b61018d610880565b60405190815260200160405180910390f35b341561026757600080fd5b610166600160a060020a0360043516602435610886565b604051901515815260200160405180910390f35b341561029d57600080fd5b61018d600160a060020a0360043516610ab4565b60405190815260200160405180910390f35b34156102ce57600080fd5b61018d600160a060020a0360043516610ac6565b60405190815260200160405180910390f35b34156102ff57600080fd5b6100cc610ae5565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156101095780820151818401525b6020016100f0565b50505050905090810190601f1680156101365780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561038a57600080fd5b610166600160a060020a0360043516602435610b05565b604051901515815260200160405180910390f35b34156103c057600080fd5b61018d600160a060020a0360043581169060243516610c36565b60405190815260200160405180910390f35b34156103f757600080fd5b6103ff610c3f565b604051600160a060020a03909116815260200160405180910390f35b606060405190810160405280602981526020017f426c6f636b636861696e204c6561726e696e672047726f757020436f6d6d756e815260200160b960020a6834ba3c902a37b5b2b70281525081565b60008082116104d4576104cd606060405190810160405280602f81526020017f43616e206e6f7420617070726f766520616e20616d6f756e74203c3d20302c208152602001608860020a6e546f6b656e2e617070726f7665282902815250610c4e565b90506105bd565b600160a060020a03331660009081526001602052604090205482111561055d576104cd606060405190810160405280603781526020017f416d6f756e742069732067726561746572207468616e2073656e6465727320628152602001604860020a76616c616e63652c20546f6b656e2e617070726f7665282902815250610c4e565b90506105bd565b600160a060020a03338116600090815260026020908152604080832093871683529290522054610593908363ffffffff610cf216565b600160a060020a033381166000908152600260209081526040808320938816835292905220555060015b92915050565b6000545b90565b60008082116106365761062f606060405190810160405280603181526020017f43616e6e6f74207472616e7366657220616d6f756e74203c3d20302c20546f6b8152602001607860020a70656e2e7472616e7366657246726f6d282902815250610c4e565b9050610857565b600160a060020a0384166000908152600160205260409020548211156106c25761062f606060405190810160405280603e81526020017f46726f6d206163636f756e742068617320616e20696e73756666696369656e7481526020017f2062616c616e63652c20546f6b656e2e7472616e7366657246726f6d28290000815250610c4e565b9050610857565b600160a060020a038085166000908152600260209081526040808320339094168352929052205482111561075c5761062f606060405190810160405280603b81526020017f6d73672e73656e6465722068617320696e73756666696369656e7420616c6c6f81526020017f77616e63652c20546f6b656e2e7472616e7366657246726f6d28290000000000815250610c4e565b9050610857565b600160a060020a038416600090815260016020526040902054610785908363ffffffff610d0c16565b600160a060020a0380861660009081526001602052604080822093909355908516815220546107ba908363ffffffff610cf216565b600160a060020a03808516600090815260016020908152604080832094909455878316825260028152838220339093168252919091522054610802908363ffffffff610d0c16565b600160a060020a0380861660008181526002602090815260408083203386168452909152908190209390935590851691600080516020610d248339815191529085905190815260200160405180910390a35060015b9392505050565b600260209081526000928352604080842090915290825290205481565b601281565b60005481565b60035460009033600160a060020a039081169116146108f2576104cd606060405190810160405280602181526020017f6d73672e73656e64657220213d206f776e65722c20546f6b656e2e6d696e7428815260200160f860020a602902815250610c4e565b90506105bd565b60008211610955576104cd606060405190810160405280602981526020017f43616e6e6f74206d696e7420612076616c7565206f66203c3d20302c20546f6b815260200160b860020a68656e2e6d696e74282902815250610c4e565b90506105bd565b600160a060020a03831615156109c5576104cd606060405190810160405280602e81526020017f43616e6e6f74206d696e7420746f6b656e7320746f20616464726573732830298152602001609060020a6d2c20546f6b656e2e6d696e74282902815250610c4e565b90506105bd565b6000546109d8908363ffffffff610cf216565b6000908155600160a060020a038416815260016020526040902054610a03908363ffffffff610cf216565b600160a060020a038416600081815260016020526040808220939093555490917f6d69c71ef35e507286bcb03186fe9ebdbf14f6e096ce22d6564de19afd7922b7918691869190518084600160a060020a0316600160a060020a03168152602001838152602001828152602001935050505060405180910390a2600160a060020a0383166000600080516020610d248339815191528460405190815260200160405180910390a35060015b92915050565b60016020526000908152604090205481565b600160a060020a0381166000908152600160205260409020545b919050565b604080519081016040526003815260e860020a62424c4702602082015281565b600160a060020a03331660009081526001602052604081205482901015610b88576104cd606060405190810160405280603081526020017f53656e6465722062616c616e636520697320696e73756666696369656e742c208152602001608060020a6f546f6b656e2e7472616e73666572282902815250610c4e565b90506105bd565b600160a060020a033316600090815260016020526040902054610bb1908363ffffffff610d0c16565b600160a060020a033381166000908152600160205260408082209390935590851681522054610be6908363ffffffff610cf216565b600160a060020a038085166000818152600160205260409081902093909355913390911690600080516020610d248339815191529085905190815260200160405180910390a35060015b92915050565b60005b92915050565b600354600160a060020a031681565b60007f551303dd5f39cbfe6daba6b3e27754b8a7d72f519756a2cde2b92c2bbde159a78260405160208082528190810183818151815260200191508051906020019080838360005b83811015610caf5780820151818401525b602001610c96565b50505050905090810190601f168015610cdc5780820380516001836020036101000a031916815260200191505b509250505060405180910390a15060005b919050565b600082820183811015610d0157fe5b8091505b5092915050565b600082821115610d1857fe5b508082035b929150505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a72305820ff3f928b766b294ef649e0fb59a5af8add3bbf859f400921db15ac9fb5a6ff260029",
  "networks": {
    "1506795970249": {
      "events": {
        "0x6d69c71ef35e507286bcb03186fe9ebdbf14f6e096ce22d6564de19afd7922b7": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "totalSupply",
              "type": "uint256"
            }
          ],
          "name": "LogTokensMinted",
          "type": "event"
        },
        "0x551303dd5f39cbfe6daba6b3e27754b8a7d72f519756a2cde2b92c2bbde159a7": {
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
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
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
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
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
      },
      "links": {},
      "address": "0x6ff01de417192a1e28acad9f73f17196cae0efbd",
      "updated_at": 1506811080859
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1506811155016
}

const hubAddress = '0x3df1fa81d206cefbcfb4bbda4fa197725e027dff'
const hubJson = {
  "contract_name": "Hub",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "users_",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "resourceIds_",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "userData_",
      "outputs": [
        {
          "name": "userName_",
          "type": "string"
        },
        {
          "name": "position_",
          "type": "string"
        },
        {
          "name": "location_",
          "type": "string"
        },
        {
          "name": "state_",
          "type": "uint8"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "resources_",
      "outputs": [
        {
          "name": "url_",
          "type": "string"
        },
        {
          "name": "user_",
          "type": "address"
        },
        {
          "name": "reputation_",
          "type": "uint256"
        },
        {
          "name": "addedAt_",
          "type": "uint256"
        },
        {
          "name": "state_",
          "type": "uint8"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_resourceUrl",
          "type": "string"
        }
      ],
      "name": "addResource",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_userEOA",
          "type": "address"
        },
        {
          "name": "_userName",
          "type": "string"
        },
        {
          "name": "_position",
          "type": "string"
        },
        {
          "name": "_location",
          "type": "string"
        }
      ],
      "name": "addUser",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "token_",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner_",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "constructor"
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
    }
  ],
  "unlinked_binary": "0x6060604052341561000f57600080fd5b6040516020806105c6833981016040528080519150505b60018054600160a060020a03808416600160a060020a0319928316179092556000805433909316929091169190911790555b505b61055d806100696000396000f300606060405236156100725763ffffffff60e060020a6000350416630cde7b7f81146100775780630e0056b2146100a957806339fe50d4146100d15780637f031c7d146102865780638a15309b14610365578063c6361c2214610397578063d56805e1146103ee578063e76630791461041d575b600080fd5b341561008257600080fd5b61008d60043561044c565b604051600160a060020a03909116815260200160405180910390f35b34156100b457600080fd5b6100bf60043561047e565b60405190815260200160405180910390f35b34156100dc57600080fd5b6100f0600160a060020a03600435166104a1565b6040518080602001806020018060200185600381111561010c57fe5b60ff1681526020858203810185528954600260018216156101000260001901909116049082018190526040909101908990801561018a5780601f1061015f5761010080835404028352916020019161018a565b820191906000526020600020905b81548152906001019060200180831161016d57829003601f168201915b50508481038352875460026000196101006001841615020190911604808252602090910190889080156101fe5780601f106101d3576101008083540402835291602001916101fe565b820191906000526020600020905b8154815290600101906020018083116101e157829003601f168201915b50508481038252865460026000196101006001841615020190911604808252602090910190879080156102725780601f1061024757610100808354040283529160200191610272565b820191906000526020600020905b81548152906001019060200180831161025557829003601f168201915b505097505050505050505060405180910390f35b341561029157600080fd5b61029c6004356104c4565b604051808060200186600160a060020a0316600160a060020a031681526020018581526020018481526020018360038111156102d457fe5b60ff168152602083820381018352885460026001821615610100026000190190911604908201819052604090910190889080156103525780601f1061032757610100808354040283529160200191610352565b820191906000526020600020905b81548152906001019060200180831161033557829003601f168201915b5050965050505050505060405180910390f35b341561037057600080fd5b61038360048035602481019101356104fc565b604051901515815260200160405180910390f35b34156103a257600080fd5b61038360048035600160a060020a03169060248035808201929081013591604435808201929081013591606435908101910135610505565b604051901515815260200160405180910390f35b34156103f957600080fd5b61008d610513565b604051600160a060020a03909116815260200160405180910390f35b341561042857600080fd5b61008d610522565b604051600160a060020a03909116815260200160405180910390f35b600480548290811061045a57fe5b906000526020600020900160005b915054906101000a9004600160a060020a031681565b600280548290811061048c57fe5b906000526020600020900160005b5054905081565b600560205260009081526040902060038101546001820190600283019060ff1684565b6003602081905260009182526040909120600181015460028201549282015460048301549293600160a060020a039092169260ff1685565b60015b92915050565b60005b979650505050505050565b600154600160a060020a031681565b600054600160a060020a0316815600a165627a7a72305820992f56a74299c52c60e0adae8c0404b1987e25f612772005eb7773f83b8d89320029",
  "networks": {
    "1506795970249": {
      "links": {},
      "events": {
        "0x551303dd5f39cbfe6daba6b3e27754b8a7d72f519756a2cde2b92c2bbde159a7": {
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
        }
      },
      "updated_at": 1506810506047
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1506810506047
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

    // Set the total supply and symbol
    window.totalSupply = (await token.totalSupply()).toNumber()
    window.symbol = (await token.symbol()).valueOf()
    $('#totalSupply').text('Total Supply: ' + totalSupply + ' ' + symbol)

    // Create a reference to the Hub
    window.hub = await web3.eth.contract(hubJson.abi).at(hubAddress)

  } else {
    console.error('Please deploy your token and update the tokenAddress at home.js#L14')
  }

  // TODO create contract listeners

  // Listen for tokens being minted
  // Specify no filter, {}, meaning all events desired and within any block
  // starting from now, 'latest'.
  token.LogTokensMinted({}, { fromBlock: 'latest', toBlock: 'latest'})
  .watch((error, result) => {
    if (error) {
      console.error(error)

    } else {
      console.log(result)
      // Update the total supply
      totalSupply += result.args.value.toNumber()
      $('#totalSupply').text('Total Supply: ' + totalSupply + ' ' + symbol)
    }
  })
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
