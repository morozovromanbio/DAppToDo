console.log('loaded');

artifact = {
    "contractName": "ToDo",
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "tokenAddress",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "tokenType",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              }
            ],
            "indexed": false,
            "internalType": "struct ToDo.TokenInfo",
            "name": "",
            "type": "tuple"
          }
        ],
        "name": "PortfolioCreated",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "ToDoId",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "tokenAddress",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "tokenType",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              }
            ],
            "internalType": "struct ToDo.TokenInfo[]",
            "name": "tokenInfo",
            "type": "tuple[]"
          }
        ],
        "name": "createPortfolio",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "tokenAddress",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "tokenType",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              }
            ],
            "internalType": "struct ToDo.TokenInfo[]",
            "name": "tokenInfo",
            "type": "tuple[]"
          }
        ],
        "name": "createPortfolios",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "getTokenInfo",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.12+commit.f00d7308\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"tokenAddress\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"tokenType\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"quantity\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct ToDo.TokenInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"PortfolioCreated\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"ToDoId\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"tokenAddress\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"tokenType\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"quantity\",\"type\":\"uint256\"}],\"internalType\":\"struct ToDo.TokenInfo[]\",\"name\":\"tokenInfo\",\"type\":\"tuple[]\"}],\"name\":\"createPortfolio\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"tokenAddress\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"tokenType\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"quantity\",\"type\":\"uint256\"}],\"internalType\":\"struct ToDo.TokenInfo[]\",\"name\":\"tokenInfo\",\"type\":\"tuple[]\"}],\"name\":\"createPortfolios\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"getTokenInfo\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/ToDo.sol\":\"ToDo\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0x24e0364e503a9bbde94c715d26573a76f14cd2a202d45f96f52134ab806b67b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e12cbaa7378fd9b62280e4e1d164bedcb4399ce238f5f98fc0eefb7e50577981\",\"dweb:/ipfs/QmXRoFGUgfsaRkoPT5bxNMtSayKTQ8GZATLPXf69HcRA51\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"project:/contracts/ToDo.sol\":{\"keccak256\":\"0x7da41caafe0b45aa44216f08049a9613609a2970bbeb05a0f9a4262b842d3a3e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8113875a24d3288c002ce30dd28eb34cc39896600e53ef40d1c970f904ea0005\",\"dweb:/ipfs/QmcDfEcvYHFnq6MHKcn5ZAwMrbjphQSyvE56pEvxNDd9WN\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61135d8061010d6000396000f3fe6080604052600436106100705760003560e01c80638888be1a1161004e5780638888be1a146100bf5780638c7a63ae146100db5780638da5cb5b1461011a578063f2fde38b1461014557610070565b806317861288146100755780636af33a661461008c578063715018a6146100a8575b600080fd5b34801561008157600080fd5b5061008a61016e565b005b6100a660048036038101906100a1919061091d565b610178565b005b3480156100b457600080fd5b506100bd6102d1565b005b6100d960048036038101906100d4919061091d565b610359565b005b3480156100e757600080fd5b5061010260048036038101906100fd91906109a0565b610467565b60405161011193929190610a75565b60405180910390f35b34801561012657600080fd5b5061012f610601565b60405161013c9190610afb565b60405180910390f35b34801561015157600080fd5b5061016c60048036038101906101679190610b42565b61062a565b005b6000600181905550565b610180610722565b73ffffffffffffffffffffffffffffffffffffffff1661019e610601565b73ffffffffffffffffffffffffffffffffffffffff16146101f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101eb90610bbb565b60405180910390fd5b6001600081548092919061020790610c0a565b9190505550818160015481811061022157610220610c53565b5b90506020028101906102339190610c91565b60036000600154815260200190815260200160002081816102549190611132565b905050600260015490806001815401808255809150506001900390600052602060002001600090919091909150557f4e454a19a26ab02a64158ada86e34820bef09c70e4c6313a2dd3a39aad58cf426003600060015481526020019081526020016000206040516102c59190611273565b60405180910390a15050565b6102d9610722565b73ffffffffffffffffffffffffffffffffffffffff166102f7610601565b73ffffffffffffffffffffffffffffffffffffffff161461034d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034490610bbb565b60405180910390fd5b610357600061072a565b565b610361610722565b73ffffffffffffffffffffffffffffffffffffffff1661037f610601565b73ffffffffffffffffffffffffffffffffffffffff16146103d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103cc90610bbb565b60405180910390fd5b600460006103e391906107ee565b60005b8282905081101561046257600483838381811061040657610405610c53565b5b90506020028101906104189190610c91565b9080600181540180825580915050600190039060005260206000209060030201600090919091909150818161044d9190611132565b5050808061045a90610c0a565b9150506103e6565b505050565b6060806000600484815481106104805761047f610c53565b5b9060005260206000209060030201600001600485815481106104a5576104a4610c53565b5b9060005260206000209060030201600101600486815481106104ca576104c9610c53565b5b9060005260206000209060030201600201548280546104e890610d85565b80601f016020809104026020016040519081016040528092919081815260200182805461051490610d85565b80156105615780601f1061053657610100808354040283529160200191610561565b820191906000526020600020905b81548152906001019060200180831161054457829003601f168201915b5050505050925081805461057490610d85565b80601f01602080910402602001604051908101604052809291908181526020018280546105a090610d85565b80156105ed5780601f106105c2576101008083540402835291602001916105ed565b820191906000526020600020905b8154815290600101906020018083116105d057829003601f168201915b505050505091509250925092509193909250565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610632610722565b73ffffffffffffffffffffffffffffffffffffffff16610650610601565b73ffffffffffffffffffffffffffffffffffffffff16146106a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069d90610bbb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610716576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070d90611307565b60405180910390fd5b61071f8161072a565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b508054600082556003029060005260206000209081019061080f9190610812565b50565b5b8082111561084d576000808201600061082c9190610851565b60018201600061083c9190610851565b600282016000905550600301610813565b5090565b50805461085d90610d85565b6000825580601f1061086f575061088e565b601f01602090049060005260206000209081019061088d9190610891565b5b50565b5b808211156108aa576000816000905550600101610892565b5090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126108dd576108dc6108b8565b5b8235905067ffffffffffffffff8111156108fa576108f96108bd565b5b602083019150836020820283011115610916576109156108c2565b5b9250929050565b60008060208385031215610934576109336108ae565b5b600083013567ffffffffffffffff811115610952576109516108b3565b5b61095e858286016108c7565b92509250509250929050565b6000819050919050565b61097d8161096a565b811461098857600080fd5b50565b60008135905061099a81610974565b92915050565b6000602082840312156109b6576109b56108ae565b5b60006109c48482850161098b565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a075780820151818401526020810190506109ec565b83811115610a16576000848401525b50505050565b6000601f19601f8301169050919050565b6000610a38826109cd565b610a4281856109d8565b9350610a528185602086016109e9565b610a5b81610a1c565b840191505092915050565b610a6f8161096a565b82525050565b60006060820190508181036000830152610a8f8186610a2d565b90508181036020830152610aa38185610a2d565b9050610ab26040830184610a66565b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ae582610aba565b9050919050565b610af581610ada565b82525050565b6000602082019050610b106000830184610aec565b92915050565b610b1f81610ada565b8114610b2a57600080fd5b50565b600081359050610b3c81610b16565b92915050565b600060208284031215610b5857610b576108ae565b5b6000610b6684828501610b2d565b91505092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610ba56020836109d8565b9150610bb082610b6f565b602082019050919050565b60006020820190508181036000830152610bd481610b98565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c158261096a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610c4857610c47610bdb565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b600082356001606003833603038112610cad57610cac610c82565b5b80830191505092915050565b60008083356001602003843603038112610cd657610cd5610c82565b5b80840192508235915067ffffffffffffffff821115610cf857610cf7610c87565b5b602083019250600182023603831315610d1457610d13610c8c565b5b509250929050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610d9d57607f821691505b60208210811415610db157610db0610d56565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610e197fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610ddc565b610e238683610ddc565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610e60610e5b610e568461096a565b610e3b565b61096a565b9050919050565b6000819050919050565b610e7a83610e45565b610e8e610e8682610e67565b848454610de9565b825550505050565b600090565b610ea3610e96565b610eae818484610e71565b505050565b5b81811015610ed257610ec7600082610e9b565b600181019050610eb4565b5050565b601f821115610f1757610ee881610db7565b610ef184610dcc565b81016020851015610f00578190505b610f14610f0c85610dcc565b830182610eb3565b50505b505050565b600082821c905092915050565b6000610f3a60001984600802610f1c565b1980831691505092915050565b6000610f538383610f29565b9150826002028217905092915050565b610f6d8383610d1c565b67ffffffffffffffff811115610f8657610f85610d27565b5b610f908254610d85565b610f9b828285610ed6565b6000601f831160018114610fca5760008415610fb8578287013590505b610fc28582610f47565b86555061102a565b601f198416610fd886610db7565b60005b8281101561100057848901358255600182019150602085019450602081019050610fdb565b8683101561101d5784890135611019601f891682610f29565b8355505b6001600288020188555050505b50505050505050565b61103e838383610f63565b505050565b6000813561105081610974565b80915050919050565b60008160001b9050919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61109284611059565b9350801983169250808416831791505092915050565b6110b182610e45565b6110c46110bd82610e67565b8354611066565b8255505050565b60008101600083016110dd8185610cb9565b6110e8818386611033565b5050505060018101602083016110fe8185610cb9565b611109818386611033565b5050505060028101604083018061111f81611043565b905061112b81846110a8565b5050505050565b61113c82826110cb565b5050565b600082825260208201905092915050565b6000815461115e81610d85565b6111688186611140565b945060018216600081146111835760018114611195576111c8565b60ff19831686526020860193506111c8565b61119e85610db7565b60005b838110156111c0578154818901526001820191506020810190506111a1565b808801955050505b50505092915050565b60008160001c9050919050565b6000819050919050565b60006111fb6111f6836111d1565b6111de565b9050919050565b61120b8161096a565b82525050565b6000606083016000808401858303600087015261122e8382611151565b9250506001840185830360208701526112478382611151565b9250506002840154905061125a816111e8565b6112676040870182611202565b50819250505092915050565b6000602082019050818103600083015261128d8184611211565b905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006112f16026836109d8565b91506112fc82611295565b604082019050919050565b60006020820190508181036000830152611320816112e4565b905091905056fea2646970667358221220dee53f18542f749c473b2c9f029bea2c889fbd9713c17215c0c73c6ab438b7ab64736f6c634300080c0033",
    "deployedBytecode": "0x6080604052600436106100705760003560e01c80638888be1a1161004e5780638888be1a146100bf5780638c7a63ae146100db5780638da5cb5b1461011a578063f2fde38b1461014557610070565b806317861288146100755780636af33a661461008c578063715018a6146100a8575b600080fd5b34801561008157600080fd5b5061008a61016e565b005b6100a660048036038101906100a1919061091d565b610178565b005b3480156100b457600080fd5b506100bd6102d1565b005b6100d960048036038101906100d4919061091d565b610359565b005b3480156100e757600080fd5b5061010260048036038101906100fd91906109a0565b610467565b60405161011193929190610a75565b60405180910390f35b34801561012657600080fd5b5061012f610601565b60405161013c9190610afb565b60405180910390f35b34801561015157600080fd5b5061016c60048036038101906101679190610b42565b61062a565b005b6000600181905550565b610180610722565b73ffffffffffffffffffffffffffffffffffffffff1661019e610601565b73ffffffffffffffffffffffffffffffffffffffff16146101f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101eb90610bbb565b60405180910390fd5b6001600081548092919061020790610c0a565b9190505550818160015481811061022157610220610c53565b5b90506020028101906102339190610c91565b60036000600154815260200190815260200160002081816102549190611132565b905050600260015490806001815401808255809150506001900390600052602060002001600090919091909150557f4e454a19a26ab02a64158ada86e34820bef09c70e4c6313a2dd3a39aad58cf426003600060015481526020019081526020016000206040516102c59190611273565b60405180910390a15050565b6102d9610722565b73ffffffffffffffffffffffffffffffffffffffff166102f7610601565b73ffffffffffffffffffffffffffffffffffffffff161461034d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034490610bbb565b60405180910390fd5b610357600061072a565b565b610361610722565b73ffffffffffffffffffffffffffffffffffffffff1661037f610601565b73ffffffffffffffffffffffffffffffffffffffff16146103d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103cc90610bbb565b60405180910390fd5b600460006103e391906107ee565b60005b8282905081101561046257600483838381811061040657610405610c53565b5b90506020028101906104189190610c91565b9080600181540180825580915050600190039060005260206000209060030201600090919091909150818161044d9190611132565b5050808061045a90610c0a565b9150506103e6565b505050565b6060806000600484815481106104805761047f610c53565b5b9060005260206000209060030201600001600485815481106104a5576104a4610c53565b5b9060005260206000209060030201600101600486815481106104ca576104c9610c53565b5b9060005260206000209060030201600201548280546104e890610d85565b80601f016020809104026020016040519081016040528092919081815260200182805461051490610d85565b80156105615780601f1061053657610100808354040283529160200191610561565b820191906000526020600020905b81548152906001019060200180831161054457829003601f168201915b5050505050925081805461057490610d85565b80601f01602080910402602001604051908101604052809291908181526020018280546105a090610d85565b80156105ed5780601f106105c2576101008083540402835291602001916105ed565b820191906000526020600020905b8154815290600101906020018083116105d057829003601f168201915b505050505091509250925092509193909250565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610632610722565b73ffffffffffffffffffffffffffffffffffffffff16610650610601565b73ffffffffffffffffffffffffffffffffffffffff16146106a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069d90610bbb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610716576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070d90611307565b60405180910390fd5b61071f8161072a565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b508054600082556003029060005260206000209081019061080f9190610812565b50565b5b8082111561084d576000808201600061082c9190610851565b60018201600061083c9190610851565b600282016000905550600301610813565b5090565b50805461085d90610d85565b6000825580601f1061086f575061088e565b601f01602090049060005260206000209081019061088d9190610891565b5b50565b5b808211156108aa576000816000905550600101610892565b5090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126108dd576108dc6108b8565b5b8235905067ffffffffffffffff8111156108fa576108f96108bd565b5b602083019150836020820283011115610916576109156108c2565b5b9250929050565b60008060208385031215610934576109336108ae565b5b600083013567ffffffffffffffff811115610952576109516108b3565b5b61095e858286016108c7565b92509250509250929050565b6000819050919050565b61097d8161096a565b811461098857600080fd5b50565b60008135905061099a81610974565b92915050565b6000602082840312156109b6576109b56108ae565b5b60006109c48482850161098b565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a075780820151818401526020810190506109ec565b83811115610a16576000848401525b50505050565b6000601f19601f8301169050919050565b6000610a38826109cd565b610a4281856109d8565b9350610a528185602086016109e9565b610a5b81610a1c565b840191505092915050565b610a6f8161096a565b82525050565b60006060820190508181036000830152610a8f8186610a2d565b90508181036020830152610aa38185610a2d565b9050610ab26040830184610a66565b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ae582610aba565b9050919050565b610af581610ada565b82525050565b6000602082019050610b106000830184610aec565b92915050565b610b1f81610ada565b8114610b2a57600080fd5b50565b600081359050610b3c81610b16565b92915050565b600060208284031215610b5857610b576108ae565b5b6000610b6684828501610b2d565b91505092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610ba56020836109d8565b9150610bb082610b6f565b602082019050919050565b60006020820190508181036000830152610bd481610b98565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c158261096a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610c4857610c47610bdb565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b600082356001606003833603038112610cad57610cac610c82565b5b80830191505092915050565b60008083356001602003843603038112610cd657610cd5610c82565b5b80840192508235915067ffffffffffffffff821115610cf857610cf7610c87565b5b602083019250600182023603831315610d1457610d13610c8c565b5b509250929050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610d9d57607f821691505b60208210811415610db157610db0610d56565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610e197fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610ddc565b610e238683610ddc565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610e60610e5b610e568461096a565b610e3b565b61096a565b9050919050565b6000819050919050565b610e7a83610e45565b610e8e610e8682610e67565b848454610de9565b825550505050565b600090565b610ea3610e96565b610eae818484610e71565b505050565b5b81811015610ed257610ec7600082610e9b565b600181019050610eb4565b5050565b601f821115610f1757610ee881610db7565b610ef184610dcc565b81016020851015610f00578190505b610f14610f0c85610dcc565b830182610eb3565b50505b505050565b600082821c905092915050565b6000610f3a60001984600802610f1c565b1980831691505092915050565b6000610f538383610f29565b9150826002028217905092915050565b610f6d8383610d1c565b67ffffffffffffffff811115610f8657610f85610d27565b5b610f908254610d85565b610f9b828285610ed6565b6000601f831160018114610fca5760008415610fb8578287013590505b610fc28582610f47565b86555061102a565b601f198416610fd886610db7565b60005b8281101561100057848901358255600182019150602085019450602081019050610fdb565b8683101561101d5784890135611019601f891682610f29565b8355505b6001600288020188555050505b50505050505050565b61103e838383610f63565b505050565b6000813561105081610974565b80915050919050565b60008160001b9050919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61109284611059565b9350801983169250808416831791505092915050565b6110b182610e45565b6110c46110bd82610e67565b8354611066565b8255505050565b60008101600083016110dd8185610cb9565b6110e8818386611033565b5050505060018101602083016110fe8185610cb9565b611109818386611033565b5050505060028101604083018061111f81611043565b905061112b81846110a8565b5050505050565b61113c82826110cb565b5050565b600082825260208201905092915050565b6000815461115e81610d85565b6111688186611140565b945060018216600081146111835760018114611195576111c8565b60ff19831686526020860193506111c8565b61119e85610db7565b60005b838110156111c0578154818901526001820191506020810190506111a1565b808801955050505b50505092915050565b60008160001c9050919050565b6000819050919050565b60006111fb6111f6836111d1565b6111de565b9050919050565b61120b8161096a565b82525050565b6000606083016000808401858303600087015261122e8382611151565b9250506001840185830360208701526112478382611151565b9250506002840154905061125a816111e8565b6112676040870182611202565b50819250505092915050565b6000602082019050818103600083015261128d8184611211565b905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006112f16026836109d8565b91506112fc82611295565b604082019050919050565b60006020820190508181036000830152611320816112e4565b905091905056fea2646970667358221220dee53f18542f749c473b2c9f029bea2c889fbd9713c17215c0c73c6ab438b7ab64736f6c634300080c0033",
    "immutableReferences": {},
    "generatedSources": [],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:20531:4",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "47:35:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "57:19:4",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "73:2:4",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "67:5:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "67:9:4"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "57:6:4"
                      }
                    ]
                  }
                ]
              },
              "name": "allocate_unbounded",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "40:6:4",
                  "type": ""
                }
              ],
              "src": "7:75:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "177:28:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "194:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "197:1:4",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "187:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "187:12:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "187:12:4"
                  }
                ]
              },
              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              "nodeType": "YulFunctionDefinition",
              "src": "88:117:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "300:28:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "317:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "320:1:4",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "310:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "310:12:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "310:12:4"
                  }
                ]
              },
              "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              "nodeType": "YulFunctionDefinition",
              "src": "211:117:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "423:28:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "440:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "443:1:4",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "433:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "433:12:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "433:12:4"
                  }
                ]
              },
              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
              "nodeType": "YulFunctionDefinition",
              "src": "334:117:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "546:28:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "563:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "566:1:4",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "556:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "556:12:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "556:12:4"
                  }
                ]
              },
              "name": "revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490",
              "nodeType": "YulFunctionDefinition",
              "src": "457:117:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "669:28:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "686:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "689:1:4",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "679:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "679:12:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "679:12:4"
                  }
                ]
              },
              "name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
              "nodeType": "YulFunctionDefinition",
              "src": "580:117:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "852:478:4",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "901:83:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                              "nodeType": "YulIdentifier",
                              "src": "903:77:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "903:79:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "903:79:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "880:6:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "888:4:4",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "876:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "876:17:4"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "895:3:4"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "872:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "872:27:4"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "865:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "865:35:4"
                    },
                    "nodeType": "YulIf",
                    "src": "862:122:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "993:30:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "1016:6:4"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "1003:12:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1003:20:4"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "993:6:4"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1066:83:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490",
                              "nodeType": "YulIdentifier",
                              "src": "1068:77:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1068:79:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1068:79:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1038:6:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1046:18:4",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "1035:2:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1035:30:4"
                    },
                    "nodeType": "YulIf",
                    "src": "1032:117:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1158:29:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "1174:6:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1182:4:4",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1170:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1170:17:4"
                    },
                    "variableNames": [
                      {
                        "name": "arrayPos",
                        "nodeType": "YulIdentifier",
                        "src": "1158:8:4"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1241:83:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
                              "nodeType": "YulIdentifier",
                              "src": "1243:77:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1243:79:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1243:79:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "arrayPos",
                              "nodeType": "YulIdentifier",
                              "src": "1206:8:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "1220:6:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1228:4:4",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "1216:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1216:17:4"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1202:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1202:32:4"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "1236:3:4"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "1199:2:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1199:41:4"
                    },
                    "nodeType": "YulIf",
                    "src": "1196:128:4"
                  }
                ]
              },
              "name": "abi_decode_t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "819:6:4",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "827:3:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "arrayPos",
                  "nodeType": "YulTypedName",
                  "src": "835:8:4",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "845:6:4",
                  "type": ""
                }
              ],
              "src": "734:596:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1465:486:4",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1511:83:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "1513:77:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1513:79:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1513:79:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1486:7:4"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1495:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "1482:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1482:23:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1507:2:4",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "1478:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1478:32:4"
                    },
                    "nodeType": "YulIf",
                    "src": "1475:119:4"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "1604:340:4",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1619:45:4",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1650:9:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1661:1:4",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1646:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1646:17:4"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "1633:12:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1633:31:4"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "1623:6:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1711:83:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                  "nodeType": "YulIdentifier",
                                  "src": "1713:77:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1713:79:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1713:79:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1683:6:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1691:18:4",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1680:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1680:30:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1677:117:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1808:126:4",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1906:9:4"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "1917:6:4"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1902:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1902:22:4"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1926:7:4"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "1826:75:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1826:108:4"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1808:6:4"
                          },
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "1816:6:4"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1427:9:4",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "1438:7:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1450:6:4",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "1458:6:4",
                  "type": ""
                }
              ],
              "src": "1336:615:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2002:32:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2012:16:4",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "2023:5:4"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "2012:7:4"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1984:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "1994:7:4",
                  "type": ""
                }
              ],
              "src": "1957:77:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2083:79:4",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2140:16:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2149:1:4",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2152:1:4",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "2142:6:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2142:12:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2142:12:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2106:5:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "2131:5:4"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "2113:17:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2113:24:4"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "2103:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2103:35:4"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "2096:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2096:43:4"
                    },
                    "nodeType": "YulIf",
                    "src": "2093:63:4"
                  }
                ]
              },
              "name": "validator_revert_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2076:5:4",
                  "type": ""
                }
              ],
              "src": "2040:122:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2220:87:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2230:29:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "2252:6:4"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "2239:12:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2239:20:4"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2230:5:4"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2295:5:4"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "2268:26:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2268:33:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2268:33:4"
                  }
                ]
              },
              "name": "abi_decode_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "2198:6:4",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "2206:3:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2214:5:4",
                  "type": ""
                }
              ],
              "src": "2168:139:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2379:263:4",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2425:83:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "2427:77:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2427:79:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2427:79:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "2400:7:4"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2409:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "2396:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2396:23:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2421:2:4",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "2392:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2392:32:4"
                    },
                    "nodeType": "YulIf",
                    "src": "2389:119:4"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "2518:117:4",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2533:15:4",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2547:1:4",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "2537:6:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2562:63:4",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2597:9:4"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "2608:6:4"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2593:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2593:22:4"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "2617:7:4"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2572:20:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2572:53:4"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2562:6:4"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "2349:9:4",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "2360:7:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2372:6:4",
                  "type": ""
                }
              ],
              "src": "2313:329:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2707:40:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2718:22:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2734:5:4"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "2728:5:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2728:12:4"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2718:6:4"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2690:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "2700:6:4",
                  "type": ""
                }
              ],
              "src": "2648:99:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2849:73:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2866:3:4"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2871:6:4"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2859:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2859:19:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2859:19:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2887:29:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2906:3:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2911:4:4",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2902:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2902:14:4"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "2887:11:4"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "2821:3:4",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "2826:6:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "2837:11:4",
                  "type": ""
                }
              ],
              "src": "2753:169:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2977:258:4",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2987:10:4",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "2996:1:4",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "i",
                        "nodeType": "YulTypedName",
                        "src": "2991:1:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3056:63:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "3081:3:4"
                                  },
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "3086:1:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "3077:3:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3077:11:4"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "src",
                                        "nodeType": "YulIdentifier",
                                        "src": "3100:3:4"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "3105:1:4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "3096:3:4"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3096:11:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "3090:5:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3090:18:4"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "3070:6:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3070:39:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3070:39:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "3017:1:4"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3020:6:4"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "3014:2:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3014:13:4"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "3028:19:4",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "3030:15:4",
                          "value": {
                            "arguments": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "3039:1:4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3042:2:4",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3035:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3035:10:4"
                          },
                          "variableNames": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "3030:1:4"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "3010:3:4",
                      "statements": []
                    },
                    "src": "3006:113:4"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3153:76:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "3203:3:4"
                                  },
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "3208:6:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "3199:3:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3199:16:4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3217:1:4",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "3192:6:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3192:27:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3192:27:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "3134:1:4"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3137:6:4"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "3131:2:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3131:13:4"
                    },
                    "nodeType": "YulIf",
                    "src": "3128:101:4"
                  }
                ]
              },
              "name": "copy_memory_to_memory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "2959:3:4",
                  "type": ""
                },
                {
                  "name": "dst",
                  "nodeType": "YulTypedName",
                  "src": "2964:3:4",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "2969:6:4",
                  "type": ""
                }
              ],
              "src": "2928:307:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3289:54:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3299:38:4",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3317:5:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3324:2:4",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3313:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3313:14:4"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3333:2:4",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "3329:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3329:7:4"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "3309:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3309:28:4"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "3299:6:4"
                      }
                    ]
                  }
                ]
              },
              "name": "round_up_to_mul_of_32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3272:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "3282:6:4",
                  "type": ""
                }
              ],
              "src": "3241:102:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3441:272:4",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3451:53:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "3498:5:4"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "3465:32:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3465:39:4"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "3455:6:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3513:78:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3579:3:4"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3584:6:4"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3520:58:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3520:71:4"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3513:3:4"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3626:5:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3633:4:4",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3622:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3622:16:4"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3640:3:4"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3645:6:4"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory",
                        "nodeType": "YulIdentifier",
                        "src": "3600:21:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3600:52:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3600:52:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3661:46:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3672:3:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3699:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "3677:21:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3677:29:4"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3668:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3668:39:4"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "3661:3:4"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3422:5:4",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3429:3:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3437:3:4",
                  "type": ""
                }
              ],
              "src": "3349:364:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3784:53:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3801:3:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3824:5:4"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "3806:17:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3806:24:4"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3794:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3794:37:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3794:37:4"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3772:5:4",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3779:3:4",
                  "type": ""
                }
              ],
              "src": "3719:118:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4037:430:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4047:26:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4059:9:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4070:2:4",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4055:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4055:18:4"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4047:4:4"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4094:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4105:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4090:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4090:17:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "4113:4:4"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4119:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "4109:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4109:20:4"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4083:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4083:47:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4083:47:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4139:86:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4211:6:4"
                        },
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "4220:4:4"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4147:63:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4147:78:4"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4139:4:4"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4246:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4257:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4242:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4242:18:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "4266:4:4"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4272:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "4262:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4262:20:4"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4235:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4235:48:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4235:48:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4292:86:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "4364:6:4"
                        },
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "4373:4:4"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4300:63:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4300:78:4"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4292:4:4"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "4432:6:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4445:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4456:2:4",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4441:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4441:18:4"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4388:43:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4388:72:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4388:72:4"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_string_memory_ptr_t_string_memory_ptr_t_uint256__to_t_string_memory_ptr_t_string_memory_ptr_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "3993:9:4",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "4005:6:4",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "4013:6:4",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4021:6:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4032:4:4",
                  "type": ""
                }
              ],
              "src": "3843:624:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4518:81:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4528:65:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "4543:5:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4550:42:4",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "4539:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4539:54:4"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "4528:7:4"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint160",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4500:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "4510:7:4",
                  "type": ""
                }
              ],
              "src": "4473:126:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4650:51:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4660:35:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "4689:5:4"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "4671:17:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4671:24:4"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "4660:7:4"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4632:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "4642:7:4",
                  "type": ""
                }
              ],
              "src": "4605:96:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4772:53:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "4789:3:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "4812:5:4"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "4794:17:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4794:24:4"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4782:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4782:37:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4782:37:4"
                  }
                ]
              },
              "name": "abi_encode_t_address_to_t_address_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4760:5:4",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "4767:3:4",
                  "type": ""
                }
              ],
              "src": "4707:118:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4929:124:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4939:26:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4951:9:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4962:2:4",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4947:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4947:18:4"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4939:4:4"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5019:6:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5032:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5043:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5028:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5028:17:4"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4975:43:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4975:71:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4975:71:4"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4901:9:4",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4913:6:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4924:4:4",
                  "type": ""
                }
              ],
              "src": "4831:222:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5102:79:4",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5159:16:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5168:1:4",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5171:1:4",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "5161:6:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5161:12:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5161:12:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "5125:5:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "5150:5:4"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "5132:17:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5132:24:4"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "5122:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5122:35:4"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "5115:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5115:43:4"
                    },
                    "nodeType": "YulIf",
                    "src": "5112:63:4"
                  }
                ]
              },
              "name": "validator_revert_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5095:5:4",
                  "type": ""
                }
              ],
              "src": "5059:122:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5239:87:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5249:29:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "5271:6:4"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "5258:12:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5258:20:4"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5249:5:4"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "5314:5:4"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_address",
                        "nodeType": "YulIdentifier",
                        "src": "5287:26:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5287:33:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5287:33:4"
                  }
                ]
              },
              "name": "abi_decode_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "5217:6:4",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "5225:3:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5233:5:4",
                  "type": ""
                }
              ],
              "src": "5187:139:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5398:263:4",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5444:83:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "5446:77:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5446:79:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5446:79:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "5419:7:4"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5428:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "5415:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5415:23:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5440:2:4",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "5411:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5411:32:4"
                    },
                    "nodeType": "YulIf",
                    "src": "5408:119:4"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "5537:117:4",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "5552:15:4",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5566:1:4",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "5556:6:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5581:63:4",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "5616:9:4"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "5627:6:4"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5612:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5612:22:4"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "5636:7:4"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "5591:20:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5591:53:4"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "5581:6:4"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5368:9:4",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "5379:7:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "5391:6:4",
                  "type": ""
                }
              ],
              "src": "5332:329:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5773:76:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "5795:6:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5803:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5791:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5791:14:4"
                        },
                        {
                          "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "5807:34:4",
                          "type": "",
                          "value": "Ownable: caller is not the owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5784:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5784:58:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5784:58:4"
                  }
                ]
              },
              "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "5765:6:4",
                  "type": ""
                }
              ],
              "src": "5667:182:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6001:220:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6011:74:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "6077:3:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6082:2:4",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6018:58:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6018:67:4"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6011:3:4"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "6183:3:4"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                        "nodeType": "YulIdentifier",
                        "src": "6094:88:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6094:93:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6094:93:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6196:19:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "6207:3:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6212:2:4",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6203:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6203:12:4"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "6196:3:4"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "5989:3:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "5997:3:4",
                  "type": ""
                }
              ],
              "src": "5855:366:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6398:248:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6408:26:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6420:9:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6431:2:4",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6416:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6416:18:4"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6408:4:4"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6455:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6466:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6451:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6451:17:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "6474:4:4"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6480:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "6470:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6470:20:4"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6444:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6444:47:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6444:47:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6500:139:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "6634:4:4"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6508:124:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6508:131:4"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6500:4:4"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6378:9:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "6393:4:4",
                  "type": ""
                }
              ],
              "src": "6227:419:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6680:152:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6697:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6700:77:4",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6690:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6690:88:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6690:88:4"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6794:1:4",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6797:4:4",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6787:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6787:15:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6787:15:4"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6818:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6821:4:4",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "6811:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6811:15:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6811:15:4"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nodeType": "YulFunctionDefinition",
              "src": "6652:180:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6881:190:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6891:33:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "6918:5:4"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "6900:17:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6900:24:4"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6891:5:4"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "7014:22:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "7016:16:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7016:18:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "7016:18:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "6939:5:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6946:66:4",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "6936:2:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6936:77:4"
                    },
                    "nodeType": "YulIf",
                    "src": "6933:103:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7045:20:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "7056:5:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7063:1:4",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7052:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7052:13:4"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "7045:3:4"
                      }
                    ]
                  }
                ]
              },
              "name": "increment_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "6867:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "6877:3:4",
                  "type": ""
                }
              ],
              "src": "6838:233:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7105:152:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7122:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7125:77:4",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7115:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7115:88:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7115:88:4"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7219:1:4",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7222:4:4",
                          "type": "",
                          "value": "0x32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7212:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7212:15:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7212:15:4"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7243:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7246:4:4",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "7236:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7236:15:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7236:15:4"
                  }
                ]
              },
              "name": "panic_error_0x32",
              "nodeType": "YulFunctionDefinition",
              "src": "7077:180:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7352:28:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7369:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7372:1:4",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "7362:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7362:12:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7362:12:4"
                  }
                ]
              },
              "name": "revert_error_356d538aaf70fba12156cc466564b792649f8f3befb07b071c91142253e175ad",
              "nodeType": "YulFunctionDefinition",
              "src": "7263:117:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7475:28:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7492:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7495:1:4",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "7485:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7485:12:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7485:12:4"
                  }
                ]
              },
              "name": "revert_error_1e55d03107e9c4f1b5e21c76a16fba166a461117ab153bcce65e6a4ea8e5fc8a",
              "nodeType": "YulFunctionDefinition",
              "src": "7386:117:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7598:28:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7615:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7618:1:4",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "7608:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7608:12:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7608:12:4"
                  }
                ]
              },
              "name": "revert_error_977805620ff29572292dee35f70b0f3f3f73d3fdd0e9f4d7a901c2e43ab18a2e",
              "nodeType": "YulFunctionDefinition",
              "src": "7509:117:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7731:295:4",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "7741:51:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "ptr_to_tail",
                          "nodeType": "YulIdentifier",
                          "src": "7780:11:4"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "7767:12:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7767:25:4"
                    },
                    "variables": [
                      {
                        "name": "rel_offset_of_tail",
                        "nodeType": "YulTypedName",
                        "src": "7745:18:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "7886:83:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_356d538aaf70fba12156cc466564b792649f8f3befb07b071c91142253e175ad",
                              "nodeType": "YulIdentifier",
                              "src": "7888:77:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7888:79:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "7888:79:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "rel_offset_of_tail",
                              "nodeType": "YulIdentifier",
                              "src": "7815:18:4"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "calldatasize",
                                        "nodeType": "YulIdentifier",
                                        "src": "7843:12:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "7843:14:4"
                                    },
                                    {
                                      "name": "base_ref",
                                      "nodeType": "YulIdentifier",
                                      "src": "7859:8:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "7839:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "7839:29:4"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "7874:4:4",
                                      "type": "",
                                      "value": "0x60"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "7880:1:4",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "7870:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "7870:12:4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "7835:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7835:48:4"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "7811:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7811:73:4"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "7804:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7804:81:4"
                    },
                    "nodeType": "YulIf",
                    "src": "7801:168:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7978:41:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "base_ref",
                          "nodeType": "YulIdentifier",
                          "src": "7990:8:4"
                        },
                        {
                          "name": "rel_offset_of_tail",
                          "nodeType": "YulIdentifier",
                          "src": "8000:18:4"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7986:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7986:33:4"
                    },
                    "variableNames": [
                      {
                        "name": "addr",
                        "nodeType": "YulIdentifier",
                        "src": "7978:4:4"
                      }
                    ]
                  }
                ]
              },
              "name": "access_calldata_tail_t_struct$_TokenInfo_$171_calldata_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "base_ref",
                  "nodeType": "YulTypedName",
                  "src": "7700:8:4",
                  "type": ""
                },
                {
                  "name": "ptr_to_tail",
                  "nodeType": "YulTypedName",
                  "src": "7710:11:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "addr",
                  "nodeType": "YulTypedName",
                  "src": "7726:4:4",
                  "type": ""
                }
              ],
              "src": "7632:394:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8060:152:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8077:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8080:77:4",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8070:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8070:88:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8070:88:4"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8174:1:4",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8177:4:4",
                          "type": "",
                          "value": "0x00"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8167:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8167:15:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8167:15:4"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8198:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8201:4:4",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "8191:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8191:15:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8191:15:4"
                  }
                ]
              },
              "name": "panic_error_0x00",
              "nodeType": "YulFunctionDefinition",
              "src": "8032:180:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8309:634:4",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "8319:51:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "ptr_to_tail",
                          "nodeType": "YulIdentifier",
                          "src": "8358:11:4"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "8345:12:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8345:25:4"
                    },
                    "variables": [
                      {
                        "name": "rel_offset_of_tail",
                        "nodeType": "YulTypedName",
                        "src": "8323:18:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8464:83:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_356d538aaf70fba12156cc466564b792649f8f3befb07b071c91142253e175ad",
                              "nodeType": "YulIdentifier",
                              "src": "8466:77:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8466:79:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8466:79:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "rel_offset_of_tail",
                              "nodeType": "YulIdentifier",
                              "src": "8393:18:4"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "calldatasize",
                                        "nodeType": "YulIdentifier",
                                        "src": "8421:12:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "8421:14:4"
                                    },
                                    {
                                      "name": "base_ref",
                                      "nodeType": "YulIdentifier",
                                      "src": "8437:8:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "8417:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8417:29:4"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "8452:4:4",
                                      "type": "",
                                      "value": "0x20"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "8458:1:4",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "8448:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8448:12:4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "8413:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8413:48:4"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "8389:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8389:73:4"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "8382:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8382:81:4"
                    },
                    "nodeType": "YulIf",
                    "src": "8379:168:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8556:41:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "base_ref",
                          "nodeType": "YulIdentifier",
                          "src": "8568:8:4"
                        },
                        {
                          "name": "rel_offset_of_tail",
                          "nodeType": "YulIdentifier",
                          "src": "8578:18:4"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8564:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8564:33:4"
                    },
                    "variableNames": [
                      {
                        "name": "addr",
                        "nodeType": "YulIdentifier",
                        "src": "8556:4:4"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8607:28:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "addr",
                          "nodeType": "YulIdentifier",
                          "src": "8630:4:4"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "8617:12:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8617:18:4"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "8607:6:4"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8678:83:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_1e55d03107e9c4f1b5e21c76a16fba166a461117ab153bcce65e6a4ea8e5fc8a",
                              "nodeType": "YulIdentifier",
                              "src": "8680:77:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8680:79:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8680:79:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "8650:6:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8658:18:4",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "8647:2:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8647:30:4"
                    },
                    "nodeType": "YulIf",
                    "src": "8644:117:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8770:21:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "addr",
                          "nodeType": "YulIdentifier",
                          "src": "8782:4:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8788:2:4",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8778:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8778:13:4"
                    },
                    "variableNames": [
                      {
                        "name": "addr",
                        "nodeType": "YulIdentifier",
                        "src": "8770:4:4"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8853:83:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_977805620ff29572292dee35f70b0f3f3f73d3fdd0e9f4d7a901c2e43ab18a2e",
                              "nodeType": "YulIdentifier",
                              "src": "8855:77:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8855:79:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8855:79:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "addr",
                          "nodeType": "YulIdentifier",
                          "src": "8807:4:4"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "calldatasize",
                                "nodeType": "YulIdentifier",
                                "src": "8817:12:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8817:14:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "8837:6:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "8845:4:4",
                                  "type": "",
                                  "value": "0x01"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "8833:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8833:17:4"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "8813:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8813:38:4"
                        }
                      ],
                      "functionName": {
                        "name": "sgt",
                        "nodeType": "YulIdentifier",
                        "src": "8803:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8803:49:4"
                    },
                    "nodeType": "YulIf",
                    "src": "8800:136:4"
                  }
                ]
              },
              "name": "access_calldata_tail_t_string_calldata_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "base_ref",
                  "nodeType": "YulTypedName",
                  "src": "8270:8:4",
                  "type": ""
                },
                {
                  "name": "ptr_to_tail",
                  "nodeType": "YulTypedName",
                  "src": "8280:11:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "addr",
                  "nodeType": "YulTypedName",
                  "src": "8296:4:4",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "8302:6:4",
                  "type": ""
                }
              ],
              "src": "8218:725:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9015:31:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9026:13:4",
                    "value": {
                      "name": "len",
                      "nodeType": "YulIdentifier",
                      "src": "9036:3:4"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "9026:6:4"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_string_calldata_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "8993:5:4",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "9000:3:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "9008:6:4",
                  "type": ""
                }
              ],
              "src": "8949:97:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9080:152:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9097:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9100:77:4",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9090:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9090:88:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9090:88:4"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9194:1:4",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9197:4:4",
                          "type": "",
                          "value": "0x41"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9187:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9187:15:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9187:15:4"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9218:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9221:4:4",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "9211:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9211:15:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9211:15:4"
                  }
                ]
              },
              "name": "panic_error_0x41",
              "nodeType": "YulFunctionDefinition",
              "src": "9052:180:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9266:152:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9283:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9286:77:4",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9276:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9276:88:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9276:88:4"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9380:1:4",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9383:4:4",
                          "type": "",
                          "value": "0x22"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9373:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9373:15:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9373:15:4"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9404:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9407:4:4",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "9397:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9397:15:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9397:15:4"
                  }
                ]
              },
              "name": "panic_error_0x22",
              "nodeType": "YulFunctionDefinition",
              "src": "9238:180:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9475:269:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9485:22:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "9499:4:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9505:1:4",
                          "type": "",
                          "value": "2"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "9495:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9495:12:4"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "9485:6:4"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "9516:38:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "9546:4:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9552:1:4",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "9542:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9542:12:4"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "9520:18:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "9593:51:4",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "9607:27:4",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "9621:6:4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "9629:4:4",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "9617:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9617:17:4"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "9607:6:4"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "9573:18:4"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "9566:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9566:26:4"
                    },
                    "nodeType": "YulIf",
                    "src": "9563:81:4"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "9696:42:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x22",
                              "nodeType": "YulIdentifier",
                              "src": "9710:16:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9710:18:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "9710:18:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "9660:18:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "9683:6:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9691:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "9680:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9680:14:4"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "9657:2:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9657:38:4"
                    },
                    "nodeType": "YulIf",
                    "src": "9654:84:4"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "9459:4:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "9468:6:4",
                  "type": ""
                }
              ],
              "src": "9424:320:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9804:87:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9814:11:4",
                    "value": {
                      "name": "ptr",
                      "nodeType": "YulIdentifier",
                      "src": "9822:3:4"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "9814:4:4"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9842:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "name": "ptr",
                          "nodeType": "YulIdentifier",
                          "src": "9845:3:4"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9835:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9835:14:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9835:14:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9858:26:4",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9876:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9879:4:4",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "keccak256",
                        "nodeType": "YulIdentifier",
                        "src": "9866:9:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9866:18:4"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "9858:4:4"
                      }
                    ]
                  }
                ]
              },
              "name": "array_dataslot_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "ptr",
                  "nodeType": "YulTypedName",
                  "src": "9791:3:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "9799:4:4",
                  "type": ""
                }
              ],
              "src": "9750:141:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9941:49:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9951:33:4",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "9969:5:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9976:2:4",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9965:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9965:14:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9981:2:4",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "9961:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9961:23:4"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "9951:6:4"
                      }
                    ]
                  }
                ]
              },
              "name": "divide_by_32_ceil",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "9924:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "9934:6:4",
                  "type": ""
                }
              ],
              "src": "9897:93:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10049:54:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10059:37:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "bits",
                          "nodeType": "YulIdentifier",
                          "src": "10084:4:4"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "10090:5:4"
                        }
                      ],
                      "functionName": {
                        "name": "shl",
                        "nodeType": "YulIdentifier",
                        "src": "10080:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10080:16:4"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "10059:8:4"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_left_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "bits",
                  "nodeType": "YulTypedName",
                  "src": "10024:4:4",
                  "type": ""
                },
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "10030:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "10040:8:4",
                  "type": ""
                }
              ],
              "src": "9996:107:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10185:317:4",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "10195:35:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBytes",
                          "nodeType": "YulIdentifier",
                          "src": "10216:10:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10228:1:4",
                          "type": "",
                          "value": "8"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "10212:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10212:18:4"
                    },
                    "variables": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulTypedName",
                        "src": "10199:9:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "10239:109:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBits",
                          "nodeType": "YulIdentifier",
                          "src": "10270:9:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10281:66:4",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "shift_left_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "10251:18:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10251:97:4"
                    },
                    "variables": [
                      {
                        "name": "mask",
                        "nodeType": "YulTypedName",
                        "src": "10243:4:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10357:51:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBits",
                          "nodeType": "YulIdentifier",
                          "src": "10388:9:4"
                        },
                        {
                          "name": "toInsert",
                          "nodeType": "YulIdentifier",
                          "src": "10399:8:4"
                        }
                      ],
                      "functionName": {
                        "name": "shift_left_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "10369:18:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10369:39:4"
                    },
                    "variableNames": [
                      {
                        "name": "toInsert",
                        "nodeType": "YulIdentifier",
                        "src": "10357:8:4"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10417:30:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "10430:5:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "10441:4:4"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "10437:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10437:9:4"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "10426:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10426:21:4"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "10417:5:4"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10456:40:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "10469:5:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "toInsert",
                              "nodeType": "YulIdentifier",
                              "src": "10480:8:4"
                            },
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "10490:4:4"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "10476:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10476:19:4"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "10466:2:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10466:30:4"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "10456:6:4"
                      }
                    ]
                  }
                ]
              },
              "name": "update_byte_slice_dynamic32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "10146:5:4",
                  "type": ""
                },
                {
                  "name": "shiftBytes",
                  "nodeType": "YulTypedName",
                  "src": "10153:10:4",
                  "type": ""
                },
                {
                  "name": "toInsert",
                  "nodeType": "YulTypedName",
                  "src": "10165:8:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "10178:6:4",
                  "type": ""
                }
              ],
              "src": "10109:393:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10540:28:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10550:12:4",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "10557:5:4"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "10550:3:4"
                      }
                    ]
                  }
                ]
              },
              "name": "identity",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "10526:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "10536:3:4",
                  "type": ""
                }
              ],
              "src": "10508:60:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10634:82:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10644:66:4",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "10702:5:4"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "10684:17:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10684:24:4"
                            }
                          ],
                          "functionName": {
                            "name": "identity",
                            "nodeType": "YulIdentifier",
                            "src": "10675:8:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10675:34:4"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "10657:17:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10657:53:4"
                    },
                    "variableNames": [
                      {
                        "name": "converted",
                        "nodeType": "YulIdentifier",
                        "src": "10644:9:4"
                      }
                    ]
                  }
                ]
              },
              "name": "convert_t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "10614:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "converted",
                  "nodeType": "YulTypedName",
                  "src": "10624:9:4",
                  "type": ""
                }
              ],
              "src": "10574:142:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10769:28:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10779:12:4",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "10786:5:4"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "10779:3:4"
                      }
                    ]
                  }
                ]
              },
              "name": "prepare_store_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "10755:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "10765:3:4",
                  "type": ""
                }
              ],
              "src": "10722:75:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10879:193:4",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "10889:63:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value_0",
                          "nodeType": "YulIdentifier",
                          "src": "10944:7:4"
                        }
                      ],
                      "functionName": {
                        "name": "convert_t_uint256_to_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "10913:30:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10913:39:4"
                    },
                    "variables": [
                      {
                        "name": "convertedValue_0",
                        "nodeType": "YulTypedName",
                        "src": "10893:16:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "10968:4:4"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "11008:4:4"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nodeType": "YulIdentifier",
                                "src": "11002:5:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11002:11:4"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "11015:6:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "convertedValue_0",
                                  "nodeType": "YulIdentifier",
                                  "src": "11047:16:4"
                                }
                              ],
                              "functionName": {
                                "name": "prepare_store_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "11023:23:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11023:41:4"
                            }
                          ],
                          "functionName": {
                            "name": "update_byte_slice_dynamic32",
                            "nodeType": "YulIdentifier",
                            "src": "10974:27:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10974:91:4"
                        }
                      ],
                      "functionName": {
                        "name": "sstore",
                        "nodeType": "YulIdentifier",
                        "src": "10961:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10961:105:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10961:105:4"
                  }
                ]
              },
              "name": "update_storage_value_t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "10856:4:4",
                  "type": ""
                },
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "10862:6:4",
                  "type": ""
                },
                {
                  "name": "value_0",
                  "nodeType": "YulTypedName",
                  "src": "10870:7:4",
                  "type": ""
                }
              ],
              "src": "10803:269:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11127:24:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "11137:8:4",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "11144:1:4",
                      "type": "",
                      "value": "0"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "11137:3:4"
                      }
                    ]
                  }
                ]
              },
              "name": "zero_value_for_split_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "11123:3:4",
                  "type": ""
                }
              ],
              "src": "11078:73:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11210:136:4",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "11220:46:4",
                    "value": {
                      "arguments": [],
                      "functionName": {
                        "name": "zero_value_for_split_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "11234:30:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11234:32:4"
                    },
                    "variables": [
                      {
                        "name": "zero_0",
                        "nodeType": "YulTypedName",
                        "src": "11224:6:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "11319:4:4"
                        },
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "11325:6:4"
                        },
                        {
                          "name": "zero_0",
                          "nodeType": "YulIdentifier",
                          "src": "11333:6:4"
                        }
                      ],
                      "functionName": {
                        "name": "update_storage_value_t_uint256_to_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "11275:43:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11275:65:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11275:65:4"
                  }
                ]
              },
              "name": "storage_set_to_zero_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "11196:4:4",
                  "type": ""
                },
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "11202:6:4",
                  "type": ""
                }
              ],
              "src": "11157:189:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11402:136:4",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "11469:63:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "11513:5:4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "11520:1:4",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "storage_set_to_zero_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "11483:29:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11483:39:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "11483:39:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "start",
                          "nodeType": "YulIdentifier",
                          "src": "11422:5:4"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "11429:3:4"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "11419:2:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11419:14:4"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "11434:26:4",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "11436:22:4",
                          "value": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "11449:5:4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "11456:1:4",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "11445:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11445:13:4"
                          },
                          "variableNames": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "11436:5:4"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "11416:2:4",
                      "statements": []
                    },
                    "src": "11412:120:4"
                  }
                ]
              },
              "name": "clear_storage_range_t_bytes1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "start",
                  "nodeType": "YulTypedName",
                  "src": "11390:5:4",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "11397:3:4",
                  "type": ""
                }
              ],
              "src": "11352:186:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11623:464:4",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "11649:431:4",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "11663:54:4",
                          "value": {
                            "arguments": [
                              {
                                "name": "array",
                                "nodeType": "YulIdentifier",
                                "src": "11711:5:4"
                              }
                            ],
                            "functionName": {
                              "name": "array_dataslot_t_string_storage",
                              "nodeType": "YulIdentifier",
                              "src": "11679:31:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11679:38:4"
                          },
                          "variables": [
                            {
                              "name": "dataArea",
                              "nodeType": "YulTypedName",
                              "src": "11667:8:4",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "11730:63:4",
                          "value": {
                            "arguments": [
                              {
                                "name": "dataArea",
                                "nodeType": "YulIdentifier",
                                "src": "11753:8:4"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "startIndex",
                                    "nodeType": "YulIdentifier",
                                    "src": "11781:10:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "divide_by_32_ceil",
                                  "nodeType": "YulIdentifier",
                                  "src": "11763:17:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "11763:29:4"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "11749:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11749:44:4"
                          },
                          "variables": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulTypedName",
                              "src": "11734:11:4",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "11950:27:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "11952:23:4",
                                "value": {
                                  "name": "dataArea",
                                  "nodeType": "YulIdentifier",
                                  "src": "11967:8:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "deleteStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "11952:11:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "startIndex",
                                "nodeType": "YulIdentifier",
                                "src": "11934:10:4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "11946:2:4",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "11931:2:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11931:18:4"
                          },
                          "nodeType": "YulIf",
                          "src": "11928:49:4"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "deleteStart",
                                "nodeType": "YulIdentifier",
                                "src": "12019:11:4"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "dataArea",
                                    "nodeType": "YulIdentifier",
                                    "src": "12036:8:4"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "len",
                                        "nodeType": "YulIdentifier",
                                        "src": "12064:3:4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "divide_by_32_ceil",
                                      "nodeType": "YulIdentifier",
                                      "src": "12046:17:4"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "12046:22:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "12032:3:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "12032:37:4"
                              }
                            ],
                            "functionName": {
                              "name": "clear_storage_range_t_bytes1",
                              "nodeType": "YulIdentifier",
                              "src": "11990:28:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11990:80:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "11990:80:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "11640:3:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11645:2:4",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "11637:2:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11637:11:4"
                    },
                    "nodeType": "YulIf",
                    "src": "11634:446:4"
                  }
                ]
              },
              "name": "clean_up_bytearray_end_slots_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "11599:5:4",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "11606:3:4",
                  "type": ""
                },
                {
                  "name": "startIndex",
                  "nodeType": "YulTypedName",
                  "src": "11611:10:4",
                  "type": ""
                }
              ],
              "src": "11544:543:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12156:54:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "12166:37:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "bits",
                          "nodeType": "YulIdentifier",
                          "src": "12191:4:4"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "12197:5:4"
                        }
                      ],
                      "functionName": {
                        "name": "shr",
                        "nodeType": "YulIdentifier",
                        "src": "12187:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12187:16:4"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "12166:8:4"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_right_unsigned_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "bits",
                  "nodeType": "YulTypedName",
                  "src": "12131:4:4",
                  "type": ""
                },
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "12137:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "12147:8:4",
                  "type": ""
                }
              ],
              "src": "12093:117:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12267:118:4",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "12277:68:4",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "12326:1:4",
                                  "type": "",
                                  "value": "8"
                                },
                                {
                                  "name": "bytes",
                                  "nodeType": "YulIdentifier",
                                  "src": "12329:5:4"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "12322:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12322:13:4"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "12341:1:4",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "12337:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12337:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "shift_right_unsigned_dynamic",
                            "nodeType": "YulIdentifier",
                            "src": "12293:28:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12293:51:4"
                        }
                      ],
                      "functionName": {
                        "name": "not",
                        "nodeType": "YulIdentifier",
                        "src": "12289:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12289:56:4"
                    },
                    "variables": [
                      {
                        "name": "mask",
                        "nodeType": "YulTypedName",
                        "src": "12281:4:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "12354:25:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "12368:4:4"
                        },
                        {
                          "name": "mask",
                          "nodeType": "YulIdentifier",
                          "src": "12374:4:4"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "12364:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12364:15:4"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "12354:6:4"
                      }
                    ]
                  }
                ]
              },
              "name": "mask_bytes_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "12244:4:4",
                  "type": ""
                },
                {
                  "name": "bytes",
                  "nodeType": "YulTypedName",
                  "src": "12250:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "12260:6:4",
                  "type": ""
                }
              ],
              "src": "12216:169:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12471:214:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "12604:37:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "12631:4:4"
                        },
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "12637:3:4"
                        }
                      ],
                      "functionName": {
                        "name": "mask_bytes_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "12612:18:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12612:29:4"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "12604:4:4"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "12650:29:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "12661:4:4"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12671:1:4",
                              "type": "",
                              "value": "2"
                            },
                            {
                              "name": "len",
                              "nodeType": "YulIdentifier",
                              "src": "12674:3:4"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "12667:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12667:11:4"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "12658:2:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12658:21:4"
                    },
                    "variableNames": [
                      {
                        "name": "used",
                        "nodeType": "YulIdentifier",
                        "src": "12650:4:4"
                      }
                    ]
                  }
                ]
              },
              "name": "extract_used_part_and_set_length_of_short_byte_array",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "12452:4:4",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "12458:3:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "used",
                  "nodeType": "YulTypedName",
                  "src": "12466:4:4",
                  "type": ""
                }
              ],
              "src": "12390:295:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12789:1304:4",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "12800:58:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "12849:3:4"
                        },
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "12854:3:4"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_calldata_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "12814:34:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12814:44:4"
                    },
                    "variables": [
                      {
                        "name": "newLen",
                        "nodeType": "YulTypedName",
                        "src": "12804:6:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "12943:22:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "12945:16:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12945:18:4"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "12945:18:4"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "12915:6:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12923:18:4",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "12912:2:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12912:30:4"
                    },
                    "nodeType": "YulIf",
                    "src": "12909:56:4"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "12975:52:4",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "slot",
                              "nodeType": "YulIdentifier",
                              "src": "13021:4:4"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nodeType": "YulIdentifier",
                            "src": "13015:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13015:11:4"
                        }
                      ],
                      "functionName": {
                        "name": "extract_byte_array_length",
                        "nodeType": "YulIdentifier",
                        "src": "12989:25:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12989:38:4"
                    },
                    "variables": [
                      {
                        "name": "oldLen",
                        "nodeType": "YulTypedName",
                        "src": "12979:6:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "13120:4:4"
                        },
                        {
                          "name": "oldLen",
                          "nodeType": "YulIdentifier",
                          "src": "13126:6:4"
                        },
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "13134:6:4"
                        }
                      ],
                      "functionName": {
                        "name": "clean_up_bytearray_end_slots_t_string_storage",
                        "nodeType": "YulIdentifier",
                        "src": "13074:45:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13074:67:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13074:67:4"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "13151:18:4",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "13168:1:4",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulTypedName",
                        "src": "13155:9:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "cases": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "13216:625:4",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "13230:37:4",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "13249:6:4"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "13261:4:4",
                                        "type": "",
                                        "value": "0x1f"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "13257:3:4"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "13257:9:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "13245:3:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "13245:22:4"
                              },
                              "variables": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulTypedName",
                                  "src": "13234:7:4",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "13281:51:4",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "13327:4:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "array_dataslot_t_string_storage",
                                  "nodeType": "YulIdentifier",
                                  "src": "13295:31:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "13295:37:4"
                              },
                              "variables": [
                                {
                                  "name": "dstPtr",
                                  "nodeType": "YulTypedName",
                                  "src": "13285:6:4",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "13345:10:4",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "13354:1:4",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "i",
                                  "nodeType": "YulTypedName",
                                  "src": "13349:1:4",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "13413:170:4",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "13438:6:4"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "arguments": [
                                                {
                                                  "name": "src",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "13463:3:4"
                                                },
                                                {
                                                  "name": "srcOffset",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "13468:9:4"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "13459:3:4"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "13459:19:4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "calldataload",
                                            "nodeType": "YulIdentifier",
                                            "src": "13446:12:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "13446:33:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "13431:6:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "13431:49:4"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "13431:49:4"
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "13497:24:4",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "13511:6:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "13519:1:4",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "13507:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "13507:14:4"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "13497:6:4"
                                      }
                                    ]
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "13538:31:4",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "srcOffset",
                                          "nodeType": "YulIdentifier",
                                          "src": "13555:9:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "13566:2:4",
                                          "type": "",
                                          "value": "32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "13551:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "13551:18:4"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "13538:9:4"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "13379:1:4"
                                  },
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "13382:7:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "13376:2:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "13376:14:4"
                              },
                              "nodeType": "YulForLoop",
                              "post": {
                                "nodeType": "YulBlock",
                                "src": "13391:21:4",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "13393:17:4",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "13402:1:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "13405:4:4",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "13398:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "13398:12:4"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "13393:1:4"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "pre": {
                                "nodeType": "YulBlock",
                                "src": "13372:3:4",
                                "statements": []
                              },
                              "src": "13368:215:4"
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "13619:163:4",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "13637:50:4",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "13671:3:4"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "13676:9:4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "13667:3:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "13667:19:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "calldataload",
                                        "nodeType": "YulIdentifier",
                                        "src": "13654:12:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "13654:33:4"
                                    },
                                    "variables": [
                                      {
                                        "name": "lastValue",
                                        "nodeType": "YulTypedName",
                                        "src": "13641:9:4",
                                        "type": ""
                                      }
                                    ]
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "13711:6:4"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "lastValue",
                                              "nodeType": "YulIdentifier",
                                              "src": "13738:9:4"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "newLen",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "13753:6:4"
                                                },
                                                {
                                                  "kind": "number",
                                                  "nodeType": "YulLiteral",
                                                  "src": "13761:4:4",
                                                  "type": "",
                                                  "value": "0x1f"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "and",
                                                "nodeType": "YulIdentifier",
                                                "src": "13749:3:4"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "13749:17:4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mask_bytes_dynamic",
                                            "nodeType": "YulIdentifier",
                                            "src": "13719:18:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "13719:48:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "13704:6:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "13704:64:4"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "13704:64:4"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "13602:7:4"
                                  },
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "13611:6:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "13599:2:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "13599:19:4"
                              },
                              "nodeType": "YulIf",
                              "src": "13596:186:4"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "13802:4:4"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "newLen",
                                            "nodeType": "YulIdentifier",
                                            "src": "13816:6:4"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "13824:1:4",
                                            "type": "",
                                            "value": "2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mul",
                                          "nodeType": "YulIdentifier",
                                          "src": "13812:3:4"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "13812:14:4"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "13828:1:4",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "13808:3:4"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "13808:22:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "13795:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "13795:36:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "13795:36:4"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "13209:632:4",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13214:1:4",
                          "type": "",
                          "value": "1"
                        }
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "13858:229:4",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "13872:14:4",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "13885:1:4",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "value",
                                  "nodeType": "YulTypedName",
                                  "src": "13876:5:4",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "13909:74:4",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "13927:42:4",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "13953:3:4"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "13958:9:4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "13949:3:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "13949:19:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "calldataload",
                                        "nodeType": "YulIdentifier",
                                        "src": "13936:12:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "13936:33:4"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "13927:5:4"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "name": "newLen",
                                "nodeType": "YulIdentifier",
                                "src": "13902:6:4"
                              },
                              "nodeType": "YulIf",
                              "src": "13899:84:4"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "14003:4:4"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "14062:5:4"
                                      },
                                      {
                                        "name": "newLen",
                                        "nodeType": "YulIdentifier",
                                        "src": "14069:6:4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "extract_used_part_and_set_length_of_short_byte_array",
                                      "nodeType": "YulIdentifier",
                                      "src": "14009:52:4"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "14009:67:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "13996:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "13996:81:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "13996:81:4"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "13850:237:4",
                        "value": "default"
                      }
                    ],
                    "expression": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "13189:6:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13197:2:4",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "13186:2:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13186:14:4"
                    },
                    "nodeType": "YulSwitch",
                    "src": "13179:908:4"
                  }
                ]
              },
              "name": "copy_byte_array_to_storage_from_t_string_calldata_ptr_to_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "12773:4:4",
                  "type": ""
                },
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "12779:3:4",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "12784:3:4",
                  "type": ""
                }
              ],
              "src": "12690:1403:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14203:114:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "14288:4:4"
                        },
                        {
                          "name": "value_0",
                          "nodeType": "YulIdentifier",
                          "src": "14294:7:4"
                        },
                        {
                          "name": "value_1",
                          "nodeType": "YulIdentifier",
                          "src": "14303:7:4"
                        }
                      ],
                      "functionName": {
                        "name": "copy_byte_array_to_storage_from_t_string_calldata_ptr_to_t_string_storage",
                        "nodeType": "YulIdentifier",
                        "src": "14214:73:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14214:97:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14214:97:4"
                  }
                ]
              },
              "name": "update_storage_value_offset_0t_string_calldata_ptr_to_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "14179:4:4",
                  "type": ""
                },
                {
                  "name": "value_0",
                  "nodeType": "YulTypedName",
                  "src": "14185:7:4",
                  "type": ""
                },
                {
                  "name": "value_1",
                  "nodeType": "YulTypedName",
                  "src": "14194:7:4",
                  "type": ""
                }
              ],
              "src": "14099:218:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14380:129:4",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "14391:30:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "ptr",
                          "nodeType": "YulIdentifier",
                          "src": "14417:3:4"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "14404:12:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14404:17:4"
                    },
                    "variables": [
                      {
                        "name": "value",
                        "nodeType": "YulTypedName",
                        "src": "14395:5:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "14457:5:4"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "14430:26:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14430:33:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14430:33:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "14473:29:4",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "14497:5:4"
                    },
                    "variableNames": [
                      {
                        "name": "returnValue",
                        "nodeType": "YulIdentifier",
                        "src": "14473:11:4"
                      }
                    ]
                  }
                ]
              },
              "name": "read_from_calldatat_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "ptr",
                  "nodeType": "YulTypedName",
                  "src": "14360:3:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "returnValue",
                  "nodeType": "YulTypedName",
                  "src": "14368:11:4",
                  "type": ""
                }
              ],
              "src": "14323:186:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14556:51:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "14566:34:4",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14591:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "14594:5:4"
                        }
                      ],
                      "functionName": {
                        "name": "shl",
                        "nodeType": "YulIdentifier",
                        "src": "14587:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14587:13:4"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "14566:8:4"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_left_0",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "14537:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "14547:8:4",
                  "type": ""
                }
              ],
              "src": "14515:92:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14678:225:4",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "14688:78:4",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "14700:66:4",
                      "type": "",
                      "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                    },
                    "variables": [
                      {
                        "name": "mask",
                        "nodeType": "YulTypedName",
                        "src": "14692:4:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "14775:34:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "toInsert",
                          "nodeType": "YulIdentifier",
                          "src": "14800:8:4"
                        }
                      ],
                      "functionName": {
                        "name": "shift_left_0",
                        "nodeType": "YulIdentifier",
                        "src": "14787:12:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14787:22:4"
                    },
                    "variableNames": [
                      {
                        "name": "toInsert",
                        "nodeType": "YulIdentifier",
                        "src": "14775:8:4"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "14818:30:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "14831:5:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "14842:4:4"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "14838:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14838:9:4"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "14827:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14827:21:4"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "14818:5:4"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "14857:40:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "14870:5:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "toInsert",
                              "nodeType": "YulIdentifier",
                              "src": "14881:8:4"
                            },
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "14891:4:4"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "14877:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14877:19:4"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "14867:2:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14867:30:4"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "14857:6:4"
                      }
                    ]
                  }
                ]
              },
              "name": "update_byte_slice_32_shift_0",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "14651:5:4",
                  "type": ""
                },
                {
                  "name": "toInsert",
                  "nodeType": "YulTypedName",
                  "src": "14658:8:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "14671:6:4",
                  "type": ""
                }
              ],
              "src": "14613:290:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14985:186:4",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "14995:63:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value_0",
                          "nodeType": "YulIdentifier",
                          "src": "15050:7:4"
                        }
                      ],
                      "functionName": {
                        "name": "convert_t_uint256_to_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "15019:30:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15019:39:4"
                    },
                    "variables": [
                      {
                        "name": "convertedValue_0",
                        "nodeType": "YulTypedName",
                        "src": "14999:16:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "15074:4:4"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "15115:4:4"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nodeType": "YulIdentifier",
                                "src": "15109:5:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "15109:11:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "convertedValue_0",
                                  "nodeType": "YulIdentifier",
                                  "src": "15146:16:4"
                                }
                              ],
                              "functionName": {
                                "name": "prepare_store_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "15122:23:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "15122:41:4"
                            }
                          ],
                          "functionName": {
                            "name": "update_byte_slice_32_shift_0",
                            "nodeType": "YulIdentifier",
                            "src": "15080:28:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15080:84:4"
                        }
                      ],
                      "functionName": {
                        "name": "sstore",
                        "nodeType": "YulIdentifier",
                        "src": "15067:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15067:98:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15067:98:4"
                  }
                ]
              },
              "name": "update_storage_value_offset_0t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "14970:4:4",
                  "type": ""
                },
                {
                  "name": "value_0",
                  "nodeType": "YulTypedName",
                  "src": "14976:7:4",
                  "type": ""
                }
              ],
              "src": "14909:262:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15301:1075:4",
                "statements": [
                  {
                    "nodeType": "YulBlock",
                    "src": "15312:354:4",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "15327:30:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "slot",
                              "nodeType": "YulIdentifier",
                              "src": "15349:4:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15355:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15345:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15345:12:4"
                        },
                        "variables": [
                          {
                            "name": "memberSlot",
                            "nodeType": "YulTypedName",
                            "src": "15331:10:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "15370:33:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "15394:5:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15401:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15390:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15390:13:4"
                        },
                        "variables": [
                          {
                            "name": "memberSrcPtr",
                            "nodeType": "YulTypedName",
                            "src": "15374:12:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "15417:112:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "15509:5:4"
                            },
                            {
                              "name": "memberSrcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "15516:12:4"
                            }
                          ],
                          "functionName": {
                            "name": "access_calldata_tail_t_string_calldata_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "15466:42:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15466:63:4"
                        },
                        "variables": [
                          {
                            "name": "memberValue_0",
                            "nodeType": "YulTypedName",
                            "src": "15421:13:4",
                            "type": ""
                          },
                          {
                            "name": "memberValue_1",
                            "nodeType": "YulTypedName",
                            "src": "15436:13:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "memberSlot",
                              "nodeType": "YulIdentifier",
                              "src": "15614:10:4"
                            },
                            {
                              "name": "memberValue_0",
                              "nodeType": "YulIdentifier",
                              "src": "15626:13:4"
                            },
                            {
                              "name": "memberValue_1",
                              "nodeType": "YulIdentifier",
                              "src": "15641:13:4"
                            }
                          ],
                          "functionName": {
                            "name": "update_storage_value_offset_0t_string_calldata_ptr_to_t_string_storage",
                            "nodeType": "YulIdentifier",
                            "src": "15543:70:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15543:112:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "15543:112:4"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "15676:355:4",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "15691:30:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "slot",
                              "nodeType": "YulIdentifier",
                              "src": "15713:4:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15719:1:4",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15709:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15709:12:4"
                        },
                        "variables": [
                          {
                            "name": "memberSlot",
                            "nodeType": "YulTypedName",
                            "src": "15695:10:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "15734:34:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "15758:5:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15765:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15754:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15754:14:4"
                        },
                        "variables": [
                          {
                            "name": "memberSrcPtr",
                            "nodeType": "YulTypedName",
                            "src": "15738:12:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "15782:112:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "15874:5:4"
                            },
                            {
                              "name": "memberSrcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "15881:12:4"
                            }
                          ],
                          "functionName": {
                            "name": "access_calldata_tail_t_string_calldata_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "15831:42:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15831:63:4"
                        },
                        "variables": [
                          {
                            "name": "memberValue_0",
                            "nodeType": "YulTypedName",
                            "src": "15786:13:4",
                            "type": ""
                          },
                          {
                            "name": "memberValue_1",
                            "nodeType": "YulTypedName",
                            "src": "15801:13:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "memberSlot",
                              "nodeType": "YulIdentifier",
                              "src": "15979:10:4"
                            },
                            {
                              "name": "memberValue_0",
                              "nodeType": "YulIdentifier",
                              "src": "15991:13:4"
                            },
                            {
                              "name": "memberValue_1",
                              "nodeType": "YulIdentifier",
                              "src": "16006:13:4"
                            }
                          ],
                          "functionName": {
                            "name": "update_storage_value_offset_0t_string_calldata_ptr_to_t_string_storage",
                            "nodeType": "YulIdentifier",
                            "src": "15908:70:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15908:112:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "15908:112:4"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "16041:328:4",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "16056:30:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "slot",
                              "nodeType": "YulIdentifier",
                              "src": "16078:4:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16084:1:4",
                              "type": "",
                              "value": "2"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16074:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16074:12:4"
                        },
                        "variables": [
                          {
                            "name": "memberSlot",
                            "nodeType": "YulTypedName",
                            "src": "16060:10:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "16099:34:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "16123:5:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16130:2:4",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16119:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16119:14:4"
                        },
                        "variables": [
                          {
                            "name": "memberSrcPtr",
                            "nodeType": "YulTypedName",
                            "src": "16103:12:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "16147:46:4",
                        "value": {
                          "name": "memberSrcPtr",
                          "nodeType": "YulIdentifier",
                          "src": "16181:12:4"
                        },
                        "variables": [
                          {
                            "name": "memberValue_0",
                            "nodeType": "YulTypedName",
                            "src": "16151:13:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "16207:59:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "memberValue_0",
                              "nodeType": "YulIdentifier",
                              "src": "16252:13:4"
                            }
                          ],
                          "functionName": {
                            "name": "read_from_calldatat_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "16224:27:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16224:42:4"
                        },
                        "variableNames": [
                          {
                            "name": "memberValue_0",
                            "nodeType": "YulIdentifier",
                            "src": "16207:13:4"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "memberSlot",
                              "nodeType": "YulIdentifier",
                              "src": "16332:10:4"
                            },
                            {
                              "name": "memberValue_0",
                              "nodeType": "YulIdentifier",
                              "src": "16344:13:4"
                            }
                          ],
                          "functionName": {
                            "name": "update_storage_value_offset_0t_uint256_to_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "16280:51:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16280:78:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16280:78:4"
                      }
                    ]
                  }
                ]
              },
              "name": "copy_struct_to_storage_from_t_struct$_TokenInfo_$171_calldata_ptr_to_t_struct$_TokenInfo_$171_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "15288:4:4",
                  "type": ""
                },
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "15294:5:4",
                  "type": ""
                }
              ],
              "src": "15177:1199:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16509:133:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "16622:4:4"
                        },
                        {
                          "name": "value_0",
                          "nodeType": "YulIdentifier",
                          "src": "16628:7:4"
                        }
                      ],
                      "functionName": {
                        "name": "copy_struct_to_storage_from_t_struct$_TokenInfo_$171_calldata_ptr_to_t_struct$_TokenInfo_$171_storage",
                        "nodeType": "YulIdentifier",
                        "src": "16520:101:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16520:116:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16520:116:4"
                  }
                ]
              },
              "name": "update_storage_value_offset_0t_struct$_TokenInfo_$171_calldata_ptr_to_t_struct$_TokenInfo_$171_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "16494:4:4",
                  "type": ""
                },
                {
                  "name": "value_0",
                  "nodeType": "YulTypedName",
                  "src": "16500:7:4",
                  "type": ""
                }
              ],
              "src": "16382:260:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16734:73:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16751:3:4"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "16756:6:4"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16744:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16744:19:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16744:19:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "16772:29:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16791:3:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16796:4:4",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "16787:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16787:14:4"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "16772:11:4"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "16706:3:4",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "16711:6:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "16722:11:4",
                  "type": ""
                }
              ],
              "src": "16648:159:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16916:703:4",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "16926:29:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "16949:5:4"
                        }
                      ],
                      "functionName": {
                        "name": "sload",
                        "nodeType": "YulIdentifier",
                        "src": "16943:5:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16943:12:4"
                    },
                    "variables": [
                      {
                        "name": "slotValue",
                        "nodeType": "YulTypedName",
                        "src": "16930:9:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "16964:50:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "slotValue",
                          "nodeType": "YulIdentifier",
                          "src": "17004:9:4"
                        }
                      ],
                      "functionName": {
                        "name": "extract_byte_array_length",
                        "nodeType": "YulIdentifier",
                        "src": "16978:25:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16978:36:4"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "16968:6:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "17023:68:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "17079:3:4"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "17084:6:4"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "17030:48:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17030:61:4"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "17023:3:4"
                      }
                    ]
                  },
                  {
                    "cases": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "17140:128:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "pos",
                                    "nodeType": "YulIdentifier",
                                    "src": "17193:3:4"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "slotValue",
                                        "nodeType": "YulIdentifier",
                                        "src": "17202:9:4"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "17217:4:4",
                                            "type": "",
                                            "value": "0xff"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "not",
                                          "nodeType": "YulIdentifier",
                                          "src": "17213:3:4"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "17213:9:4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "and",
                                      "nodeType": "YulIdentifier",
                                      "src": "17198:3:4"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "17198:25:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "17186:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "17186:38:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "17186:38:4"
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "17237:21:4",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "pos",
                                    "nodeType": "YulIdentifier",
                                    "src": "17248:3:4"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "17253:4:4",
                                    "type": "",
                                    "value": "0x20"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "17244:3:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "17244:14:4"
                              },
                              "variableNames": [
                                {
                                  "name": "ret",
                                  "nodeType": "YulIdentifier",
                                  "src": "17237:3:4"
                                }
                              ]
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "17133:135:4",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17138:1:4",
                          "type": "",
                          "value": "0"
                        }
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "17284:329:4",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "17329:53:4",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "17376:5:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "array_dataslot_t_string_storage",
                                  "nodeType": "YulIdentifier",
                                  "src": "17344:31:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "17344:38:4"
                              },
                              "variables": [
                                {
                                  "name": "dataPos",
                                  "nodeType": "YulTypedName",
                                  "src": "17333:7:4",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "17395:10:4",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "17404:1:4",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "i",
                                  "nodeType": "YulTypedName",
                                  "src": "17399:1:4",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "17462:110:4",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "pos",
                                              "nodeType": "YulIdentifier",
                                              "src": "17491:3:4"
                                            },
                                            {
                                              "name": "i",
                                              "nodeType": "YulIdentifier",
                                              "src": "17496:1:4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "17487:3:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "17487:11:4"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "dataPos",
                                              "nodeType": "YulIdentifier",
                                              "src": "17506:7:4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "sload",
                                            "nodeType": "YulIdentifier",
                                            "src": "17500:5:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "17500:14:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "17480:6:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "17480:35:4"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "17480:35:4"
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "17532:26:4",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "dataPos",
                                          "nodeType": "YulIdentifier",
                                          "src": "17547:7:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "17556:1:4",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "17543:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "17543:15:4"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "dataPos",
                                        "nodeType": "YulIdentifier",
                                        "src": "17532:7:4"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "17429:1:4"
                                  },
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "17432:6:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "17426:2:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "17426:13:4"
                              },
                              "nodeType": "YulForLoop",
                              "post": {
                                "nodeType": "YulBlock",
                                "src": "17440:21:4",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "17442:17:4",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "17451:1:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "17454:4:4",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "17447:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "17447:12:4"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "17442:1:4"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "pre": {
                                "nodeType": "YulBlock",
                                "src": "17422:3:4",
                                "statements": []
                              },
                              "src": "17418:154:4"
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "17585:18:4",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "pos",
                                    "nodeType": "YulIdentifier",
                                    "src": "17596:3:4"
                                  },
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "17601:1:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "17592:3:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "17592:11:4"
                              },
                              "variableNames": [
                                {
                                  "name": "ret",
                                  "nodeType": "YulIdentifier",
                                  "src": "17585:3:4"
                                }
                              ]
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "17277:336:4",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17282:1:4",
                          "type": "",
                          "value": "1"
                        }
                      }
                    ],
                    "expression": {
                      "arguments": [
                        {
                          "name": "slotValue",
                          "nodeType": "YulIdentifier",
                          "src": "17111:9:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17122:1:4",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "17107:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17107:17:4"
                    },
                    "nodeType": "YulSwitch",
                    "src": "17100:513:4"
                  }
                ]
              },
              "name": "abi_encode_t_string_storage_to_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "16897:5:4",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "16904:3:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "16912:3:4",
                  "type": ""
                }
              ],
              "src": "16837:782:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17676:51:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "17686:34:4",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17711:1:4",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "17714:5:4"
                        }
                      ],
                      "functionName": {
                        "name": "shr",
                        "nodeType": "YulIdentifier",
                        "src": "17707:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17707:13:4"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "17686:8:4"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_right_0_unsigned",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "17657:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "17667:8:4",
                  "type": ""
                }
              ],
              "src": "17625:102:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17791:32:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "17801:16:4",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "17812:5:4"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "17801:7:4"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_from_storage_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "17773:5:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "17783:7:4",
                  "type": ""
                }
              ],
              "src": "17733:90:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17904:91:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "17914:75:4",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "slot_value",
                              "nodeType": "YulIdentifier",
                              "src": "17977:10:4"
                            }
                          ],
                          "functionName": {
                            "name": "shift_right_0_unsigned",
                            "nodeType": "YulIdentifier",
                            "src": "17954:22:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17954:34:4"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_from_storage_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "17923:30:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17923:66:4"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "17914:5:4"
                      }
                    ]
                  }
                ]
              },
              "name": "extract_from_storage_value_offset_0t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot_value",
                  "nodeType": "YulTypedName",
                  "src": "17883:10:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "17898:5:4",
                  "type": ""
                }
              ],
              "src": "17829:166:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "18056:53:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18073:3:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "18096:5:4"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "18078:17:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18078:24:4"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "18066:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18066:37:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "18066:37:4"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "18044:5:4",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "18051:3:4",
                  "type": ""
                }
              ],
              "src": "18001:108:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "18292:831:4",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "18302:26:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18318:3:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "18323:4:4",
                          "type": "",
                          "value": "0x60"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "18314:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18314:14:4"
                    },
                    "variables": [
                      {
                        "name": "tail",
                        "nodeType": "YulTypedName",
                        "src": "18306:4:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "18337:18:4",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "18354:1:4",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "slotValue",
                        "nodeType": "YulTypedName",
                        "src": "18341:9:4",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "18365:233:4",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "18408:36:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "18432:5:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18439:4:4",
                              "type": "",
                              "value": "0x00"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "18428:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18428:16:4"
                        },
                        "variables": [
                          {
                            "name": "memberValue0",
                            "nodeType": "YulTypedName",
                            "src": "18412:12:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "pos",
                                  "nodeType": "YulIdentifier",
                                  "src": "18469:3:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "18474:4:4",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "18465:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "18465:14:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "18485:4:4"
                                },
                                {
                                  "name": "pos",
                                  "nodeType": "YulIdentifier",
                                  "src": "18491:3:4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "18481:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "18481:14:4"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "18458:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18458:38:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "18458:38:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "18509:78:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "memberValue0",
                              "nodeType": "YulIdentifier",
                              "src": "18568:12:4"
                            },
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "18582:4:4"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_string_storage_to_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "18517:50:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18517:70:4"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "18509:4:4"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "18608:230:4",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "18648:36:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "18672:5:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18679:4:4",
                              "type": "",
                              "value": "0x01"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "18668:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18668:16:4"
                        },
                        "variables": [
                          {
                            "name": "memberValue0",
                            "nodeType": "YulTypedName",
                            "src": "18652:12:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "pos",
                                  "nodeType": "YulIdentifier",
                                  "src": "18709:3:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "18714:4:4",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "18705:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "18705:14:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "18725:4:4"
                                },
                                {
                                  "name": "pos",
                                  "nodeType": "YulIdentifier",
                                  "src": "18731:3:4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "18721:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "18721:14:4"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "18698:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18698:38:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "18698:38:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "18749:78:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "memberValue0",
                              "nodeType": "YulIdentifier",
                              "src": "18808:12:4"
                            },
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "18822:4:4"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_string_storage_to_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "18757:50:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18757:70:4"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "18749:4:4"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "18848:248:4",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "18886:36:4",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "18909:5:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "18916:4:4",
                                  "type": "",
                                  "value": "0x02"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "18905:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "18905:16:4"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nodeType": "YulIdentifier",
                            "src": "18899:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18899:23:4"
                        },
                        "variableNames": [
                          {
                            "name": "slotValue",
                            "nodeType": "YulIdentifier",
                            "src": "18886:9:4"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "18935:75:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "slotValue",
                              "nodeType": "YulIdentifier",
                              "src": "19000:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "extract_from_storage_value_offset_0t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "18955:44:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18955:55:4"
                        },
                        "variables": [
                          {
                            "name": "memberValue0",
                            "nodeType": "YulTypedName",
                            "src": "18939:12:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "memberValue0",
                              "nodeType": "YulIdentifier",
                              "src": "19057:12:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "pos",
                                  "nodeType": "YulIdentifier",
                                  "src": "19075:3:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "19080:4:4",
                                  "type": "",
                                  "value": "0x40"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "19071:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "19071:14:4"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_uint256_to_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "19023:33:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19023:63:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "19023:63:4"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "19106:11:4",
                    "value": {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "19113:4:4"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "19106:3:4"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_struct$_TokenInfo_$171_storage_to_t_struct$_TokenInfo_$171_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "18271:5:4",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "18278:3:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "18287:3:4",
                  "type": ""
                }
              ],
              "src": "18169:954:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "19276:224:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "19286:26:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "19298:9:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19309:2:4",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "19294:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19294:18:4"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "19286:4:4"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "19333:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19344:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19329:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19329:17:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "19352:4:4"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "19358:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "19348:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19348:20:4"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "19322:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19322:47:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19322:47:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "19378:115:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "19479:6:4"
                        },
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "19488:4:4"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_struct$_TokenInfo_$171_storage_to_t_struct$_TokenInfo_$171_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "19386:92:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19386:107:4"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "19378:4:4"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_struct$_TokenInfo_$171_storage__to_t_struct$_TokenInfo_$171_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "19248:9:4",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "19260:6:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "19271:4:4",
                  "type": ""
                }
              ],
              "src": "19129:371:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "19612:119:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "19634:6:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19642:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19630:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19630:14:4"
                        },
                        {
                          "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "19646:34:4",
                          "type": "",
                          "value": "Ownable: new owner is the zero a"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "19623:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19623:58:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19623:58:4"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "19702:6:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19710:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19698:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19698:15:4"
                        },
                        {
                          "hexValue": "646472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "19715:8:4",
                          "type": "",
                          "value": "ddress"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "19691:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19691:33:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19691:33:4"
                  }
                ]
              },
              "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "19604:6:4",
                  "type": ""
                }
              ],
              "src": "19506:225:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "19883:220:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "19893:74:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "19959:3:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19964:2:4",
                          "type": "",
                          "value": "38"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "19900:58:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19900:67:4"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "19893:3:4"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "20065:3:4"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                        "nodeType": "YulIdentifier",
                        "src": "19976:88:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19976:93:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19976:93:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "20078:19:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "20089:3:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "20094:2:4",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "20085:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20085:12:4"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "20078:3:4"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "19871:3:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "19879:3:4",
                  "type": ""
                }
              ],
              "src": "19737:366:4"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "20280:248:4",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "20290:26:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "20302:9:4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "20313:2:4",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "20298:3:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20298:18:4"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "20290:4:4"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "20337:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "20348:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "20333:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20333:17:4"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "20356:4:4"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "20362:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "20352:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20352:20:4"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "20326:6:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20326:47:4"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20326:47:4"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "20382:139:4",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "20516:4:4"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "20390:124:4"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20390:131:4"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "20382:4:4"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "20260:9:4",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "20275:4:4",
                  "type": ""
                }
              ],
              "src": "20109:419:4"
            }
          ]
        },
        "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490() {\n        revert(0, 0)\n    }\n\n    function revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef() {\n        revert(0, 0)\n    }\n\n    // struct ToDo.TokenInfo[]\n    function abi_decode_t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr(offset, end) -> arrayPos, length {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        length := calldataload(offset)\n        if gt(length, 0xffffffffffffffff) { revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490() }\n        arrayPos := add(offset, 0x20)\n        if gt(add(arrayPos, mul(length, 0x20)), end) { revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef() }\n    }\n\n    function abi_decode_tuple_t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0, value1 := abi_decode_t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr_t_string_memory_ptr_t_uint256__to_t_string_memory_ptr_t_string_memory_ptr_t_uint256__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n        mstore(add(headStart, 32), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value1,  tail)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: caller is not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function panic_error_0x32() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n\n    function revert_error_356d538aaf70fba12156cc466564b792649f8f3befb07b071c91142253e175ad() {\n        revert(0, 0)\n    }\n\n    function revert_error_1e55d03107e9c4f1b5e21c76a16fba166a461117ab153bcce65e6a4ea8e5fc8a() {\n        revert(0, 0)\n    }\n\n    function revert_error_977805620ff29572292dee35f70b0f3f3f73d3fdd0e9f4d7a901c2e43ab18a2e() {\n        revert(0, 0)\n    }\n\n    function access_calldata_tail_t_struct$_TokenInfo_$171_calldata_ptr(base_ref, ptr_to_tail) -> addr {\n        let rel_offset_of_tail := calldataload(ptr_to_tail)\n        if iszero(slt(rel_offset_of_tail, sub(sub(calldatasize(), base_ref), sub(0x60, 1)))) { revert_error_356d538aaf70fba12156cc466564b792649f8f3befb07b071c91142253e175ad() }\n        addr := add(base_ref, rel_offset_of_tail)\n\n    }\n\n    function panic_error_0x00() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x00)\n        revert(0, 0x24)\n    }\n\n    function access_calldata_tail_t_string_calldata_ptr(base_ref, ptr_to_tail) -> addr, length {\n        let rel_offset_of_tail := calldataload(ptr_to_tail)\n        if iszero(slt(rel_offset_of_tail, sub(sub(calldatasize(), base_ref), sub(0x20, 1)))) { revert_error_356d538aaf70fba12156cc466564b792649f8f3befb07b071c91142253e175ad() }\n        addr := add(base_ref, rel_offset_of_tail)\n\n        length := calldataload(addr)\n        if gt(length, 0xffffffffffffffff) { revert_error_1e55d03107e9c4f1b5e21c76a16fba166a461117ab153bcce65e6a4ea8e5fc8a() }\n        addr := add(addr, 32)\n        if sgt(addr, sub(calldatasize(), mul(length, 0x01))) { revert_error_977805620ff29572292dee35f70b0f3f3f73d3fdd0e9f4d7a901c2e43ab18a2e() }\n\n    }\n\n    function array_length_t_string_calldata_ptr(value, len) -> length {\n\n        length := len\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_calldata_ptr_to_t_string_storage(slot, src, len) {\n\n        let newLen := array_length_t_string_calldata_ptr(src, len)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, calldataload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := calldataload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := calldataload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function update_storage_value_offset_0t_string_calldata_ptr_to_t_string_storage(slot, value_0, value_1) {\n\n        copy_byte_array_to_storage_from_t_string_calldata_ptr_to_t_string_storage(slot, value_0, value_1)\n    }\n\n    function read_from_calldatat_uint256(ptr) -> returnValue {\n\n        let value := calldataload(ptr)\n        validator_revert_t_uint256(value)\n\n        returnValue :=\n\n        value\n\n    }\n\n    function shift_left_0(value) -> newValue {\n        newValue :=\n\n        shl(0, value)\n\n    }\n\n    function update_byte_slice_32_shift_0(value, toInsert) -> result {\n        let mask := 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n        toInsert := shift_left_0(toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function update_storage_value_offset_0t_uint256_to_t_uint256(slot, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_32_shift_0(sload(slot), prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function copy_struct_to_storage_from_t_struct$_TokenInfo_$171_calldata_ptr_to_t_struct$_TokenInfo_$171_storage(slot, value) {\n\n        {\n\n            let memberSlot := add(slot, 0)\n            let memberSrcPtr := add(value, 0)\n\n            let memberValue_0, memberValue_1 :=\n\n            access_calldata_tail_t_string_calldata_ptr(value, memberSrcPtr)\n\n            update_storage_value_offset_0t_string_calldata_ptr_to_t_string_storage(memberSlot, memberValue_0, memberValue_1)\n\n        }\n\n        {\n\n            let memberSlot := add(slot, 1)\n            let memberSrcPtr := add(value, 32)\n\n            let memberValue_0, memberValue_1 :=\n\n            access_calldata_tail_t_string_calldata_ptr(value, memberSrcPtr)\n\n            update_storage_value_offset_0t_string_calldata_ptr_to_t_string_storage(memberSlot, memberValue_0, memberValue_1)\n\n        }\n\n        {\n\n            let memberSlot := add(slot, 2)\n            let memberSrcPtr := add(value, 64)\n\n            let memberValue_0 :=\n\n            memberSrcPtr\n\n            memberValue_0 := read_from_calldatat_uint256(memberValue_0)\n\n            update_storage_value_offset_0t_uint256_to_t_uint256(memberSlot, memberValue_0)\n\n        }\n\n    }\n\n    function update_storage_value_offset_0t_struct$_TokenInfo_$171_calldata_ptr_to_t_struct$_TokenInfo_$171_storage(slot, value_0) {\n\n        copy_struct_to_storage_from_t_struct$_TokenInfo_$171_calldata_ptr_to_t_struct$_TokenInfo_$171_storage(slot, value_0)\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    // string -> string\n    function abi_encode_t_string_storage_to_t_string_memory_ptr(value, pos) -> ret {\n        let slotValue := sload(value)\n        let length := extract_byte_array_length(slotValue)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr(pos, length)\n        switch and(slotValue, 1)\n        case 0 {\n            // short byte array\n            mstore(pos, and(slotValue, not(0xff)))\n            ret := add(pos, 0x20)\n        }\n        case 1 {\n            // long byte array\n            let dataPos := array_dataslot_t_string_storage(value)\n            let i := 0\n            for { } lt(i, length) { i := add(i, 0x20) } {\n                mstore(add(pos, i), sload(dataPos))\n                dataPos := add(dataPos, 1)\n            }\n            ret := add(pos, i)\n        }\n    }\n\n    function shift_right_0_unsigned(value) -> newValue {\n        newValue :=\n\n        shr(0, value)\n\n    }\n\n    function cleanup_from_storage_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function extract_from_storage_value_offset_0t_uint256(slot_value) -> value {\n        value := cleanup_from_storage_t_uint256(shift_right_0_unsigned(slot_value))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    // struct ToDo.TokenInfo -> struct ToDo.TokenInfo\n    function abi_encode_t_struct$_TokenInfo_$171_storage_to_t_struct$_TokenInfo_$171_memory_ptr_fromStack(value, pos)  -> end  {\n        let tail := add(pos, 0x60)\n        let slotValue := 0\n\n        {\n            // tokenAddress\n\n            let memberValue0 := add(value, 0x00)\n\n            mstore(add(pos, 0x00), sub(tail, pos))\n            tail := abi_encode_t_string_storage_to_t_string_memory_ptr(memberValue0, tail)\n\n        }\n\n        {\n            // tokenType\n\n            let memberValue0 := add(value, 0x01)\n\n            mstore(add(pos, 0x20), sub(tail, pos))\n            tail := abi_encode_t_string_storage_to_t_string_memory_ptr(memberValue0, tail)\n\n        }\n\n        {\n            // quantity\n            slotValue := sload(add(value, 0x02))\n            let memberValue0 := extract_from_storage_value_offset_0t_uint256(slotValue)\n            abi_encode_t_uint256_to_t_uint256(memberValue0, add(pos, 0x40))\n        }\n\n        end := tail\n    }\n\n    function abi_encode_tuple_t_struct$_TokenInfo_$171_storage__to_t_struct$_TokenInfo_$171_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_struct$_TokenInfo_$171_storage_to_t_struct$_TokenInfo_$171_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: new owner is the zero a\")\n\n        mstore(add(memPtr, 32), \"ddress\")\n\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
        "id": 4,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "119:1541:3:-:0;;;;;;;;;;;;;921:32:0;940:12;:10;;;:12;;:::i;:::-;921:18;;;:32;;:::i;:::-;119:1541:3;;640:96:1;693:7;719:10;712:17;;640:96;:::o;2270:187:0:-;2343:16;2362:6;;;;;;;;;;;2343:25;;2387:8;2378:6;;:17;;;;;;;;;;;;;;;;;;2441:8;2410:40;;2431:8;2410:40;;;;;;;;;;;;2333:124;2270:187;:::o;119:1541:3:-;;;;;;;",
    "deployedSourceMap": "119:1541:3:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;404:55;;;;;;;;;;;;;:::i;:::-;;717:308;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1668:101:0;;;;;;;;;;;;;:::i;:::-;;463:250:3;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1128:246;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;1036:85:0;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1918:198;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;404:55:3;453:1;435:15;:19;;;;404:55::o;717:308::-;1259:12:0;:10;:12::i;:::-;1248:23;;:7;:5;:7::i;:::-;:23;;;1240:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;814:15:3::1;;:17;;;;;;;;;:::i;:::-;;;;;;872:9;;882:15;;872:26;;;;;;;:::i;:::-;;;;;;;;;;;;;:::i;:::-;845:7;:24;853:15;;845:24;;;;;;;;;;;:53;;;;;;:::i;:::-;;;;912:12;930:15;;912:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;965:42;982:7;:24;990:15;;982:24;;;;;;;;;;;965:42;;;;;;:::i;:::-;;;;;;;;717:308:::0;;:::o;1668:101:0:-;1259:12;:10;:12::i;:::-;1248:23;;:7;:5;:7::i;:::-;:23;;;1240:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1732:30:::1;1759:1;1732:18;:30::i;:::-;1668:101::o:0;463:250:3:-;1259:12:0;:10;:12::i;:::-;1248:23;;:7;:5;:7::i;:::-;:23;;;1240:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;562:6:3::1;;555:13;;;;:::i;:::-;583:6;578:94;599:9;;:16;;595:1;:20;578:94;;;636:6;648:9;;658:1;648:12;;;;;;;:::i;:::-;;;;;;;;;;;;;:::i;:::-;636:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;617:3;;;;;:::i;:::-;;;;578:94;;;;463:250:::0;;:::o;1128:246::-;1188:13;1209;1231:7;1279:6;1286:2;1279:10;;;;;;;;:::i;:::-;;;;;;;;;;;;:23;;1312:6;1319:2;1312:10;;;;;;;;:::i;:::-;;;;;;;;;;;;:20;;1342:6;1349:2;1342:10;;;;;;;;:::i;:::-;;;;;;;;;;;;:19;;;1263:106;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1128:246;;;;;:::o;1036:85:0:-;1082:7;1108:6;;;;;;;;;;;1101:13;;1036:85;:::o;1918:198::-;1259:12;:10;:12::i;:::-;1248:23;;:7;:5;:7::i;:::-;:23;;;1240:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;2026:1:::1;2006:22;;:8;:22;;;;1998:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2081:28;2100:8;2081:18;:28::i;:::-;1918:198:::0;:::o;640:96:1:-;693:7;719:10;712:17;;640:96;:::o;2270:187:0:-;2343:16;2362:6;;;;;;;;;;;2343:25;;2387:8;2378:6;;:17;;;;;;;;;;;;;;;;;;2441:8;2410:40;;2431:8;2410:40;;;;;;;;;;;;2333:124;2270:187;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;88:117:4:-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:117;566:1;563;556:12;580:117;689:1;686;679:12;734:596;835:8;845:6;895:3;888:4;880:6;876:17;872:27;862:122;;903:79;;:::i;:::-;862:122;1016:6;1003:20;993:30;;1046:18;1038:6;1035:30;1032:117;;;1068:79;;:::i;:::-;1032:117;1182:4;1174:6;1170:17;1158:29;;1236:3;1228:4;1220:6;1216:17;1206:8;1202:32;1199:41;1196:128;;;1243:79;;:::i;:::-;1196:128;734:596;;;;;:::o;1336:615::-;1450:6;1458;1507:2;1495:9;1486:7;1482:23;1478:32;1475:119;;;1513:79;;:::i;:::-;1475:119;1661:1;1650:9;1646:17;1633:31;1691:18;1683:6;1680:30;1677:117;;;1713:79;;:::i;:::-;1677:117;1826:108;1926:7;1917:6;1906:9;1902:22;1826:108;:::i;:::-;1808:126;;;;1604:340;1336:615;;;;;:::o;1957:77::-;1994:7;2023:5;2012:16;;1957:77;;;:::o;2040:122::-;2113:24;2131:5;2113:24;:::i;:::-;2106:5;2103:35;2093:63;;2152:1;2149;2142:12;2093:63;2040:122;:::o;2168:139::-;2214:5;2252:6;2239:20;2230:29;;2268:33;2295:5;2268:33;:::i;:::-;2168:139;;;;:::o;2313:329::-;2372:6;2421:2;2409:9;2400:7;2396:23;2392:32;2389:119;;;2427:79;;:::i;:::-;2389:119;2547:1;2572:53;2617:7;2608:6;2597:9;2593:22;2572:53;:::i;:::-;2562:63;;2518:117;2313:329;;;;:::o;2648:99::-;2700:6;2734:5;2728:12;2718:22;;2648:99;;;:::o;2753:169::-;2837:11;2871:6;2866:3;2859:19;2911:4;2906:3;2902:14;2887:29;;2753:169;;;;:::o;2928:307::-;2996:1;3006:113;3020:6;3017:1;3014:13;3006:113;;;3105:1;3100:3;3096:11;3090:18;3086:1;3081:3;3077:11;3070:39;3042:2;3039:1;3035:10;3030:15;;3006:113;;;3137:6;3134:1;3131:13;3128:101;;;3217:1;3208:6;3203:3;3199:16;3192:27;3128:101;2977:258;2928:307;;;:::o;3241:102::-;3282:6;3333:2;3329:7;3324:2;3317:5;3313:14;3309:28;3299:38;;3241:102;;;:::o;3349:364::-;3437:3;3465:39;3498:5;3465:39;:::i;:::-;3520:71;3584:6;3579:3;3520:71;:::i;:::-;3513:78;;3600:52;3645:6;3640:3;3633:4;3626:5;3622:16;3600:52;:::i;:::-;3677:29;3699:6;3677:29;:::i;:::-;3672:3;3668:39;3661:46;;3441:272;3349:364;;;;:::o;3719:118::-;3806:24;3824:5;3806:24;:::i;:::-;3801:3;3794:37;3719:118;;:::o;3843:624::-;4032:4;4070:2;4059:9;4055:18;4047:26;;4119:9;4113:4;4109:20;4105:1;4094:9;4090:17;4083:47;4147:78;4220:4;4211:6;4147:78;:::i;:::-;4139:86;;4272:9;4266:4;4262:20;4257:2;4246:9;4242:18;4235:48;4300:78;4373:4;4364:6;4300:78;:::i;:::-;4292:86;;4388:72;4456:2;4445:9;4441:18;4432:6;4388:72;:::i;:::-;3843:624;;;;;;:::o;4473:126::-;4510:7;4550:42;4543:5;4539:54;4528:65;;4473:126;;;:::o;4605:96::-;4642:7;4671:24;4689:5;4671:24;:::i;:::-;4660:35;;4605:96;;;:::o;4707:118::-;4794:24;4812:5;4794:24;:::i;:::-;4789:3;4782:37;4707:118;;:::o;4831:222::-;4924:4;4962:2;4951:9;4947:18;4939:26;;4975:71;5043:1;5032:9;5028:17;5019:6;4975:71;:::i;:::-;4831:222;;;;:::o;5059:122::-;5132:24;5150:5;5132:24;:::i;:::-;5125:5;5122:35;5112:63;;5171:1;5168;5161:12;5112:63;5059:122;:::o;5187:139::-;5233:5;5271:6;5258:20;5249:29;;5287:33;5314:5;5287:33;:::i;:::-;5187:139;;;;:::o;5332:329::-;5391:6;5440:2;5428:9;5419:7;5415:23;5411:32;5408:119;;;5446:79;;:::i;:::-;5408:119;5566:1;5591:53;5636:7;5627:6;5616:9;5612:22;5591:53;:::i;:::-;5581:63;;5537:117;5332:329;;;;:::o;5667:182::-;5807:34;5803:1;5795:6;5791:14;5784:58;5667:182;:::o;5855:366::-;5997:3;6018:67;6082:2;6077:3;6018:67;:::i;:::-;6011:74;;6094:93;6183:3;6094:93;:::i;:::-;6212:2;6207:3;6203:12;6196:19;;5855:366;;;:::o;6227:419::-;6393:4;6431:2;6420:9;6416:18;6408:26;;6480:9;6474:4;6470:20;6466:1;6455:9;6451:17;6444:47;6508:131;6634:4;6508:131;:::i;:::-;6500:139;;6227:419;;;:::o;6652:180::-;6700:77;6697:1;6690:88;6797:4;6794:1;6787:15;6821:4;6818:1;6811:15;6838:233;6877:3;6900:24;6918:5;6900:24;:::i;:::-;6891:33;;6946:66;6939:5;6936:77;6933:103;;;7016:18;;:::i;:::-;6933:103;7063:1;7056:5;7052:13;7045:20;;6838:233;;;:::o;7077:180::-;7125:77;7122:1;7115:88;7222:4;7219:1;7212:15;7246:4;7243:1;7236:15;7263:117;7372:1;7369;7362:12;7386:117;7495:1;7492;7485:12;7509:117;7618:1;7615;7608:12;7632:394;7726:4;7780:11;7767:25;7880:1;7874:4;7870:12;7859:8;7843:14;7839:29;7835:48;7815:18;7811:73;7801:168;;7888:79;;:::i;:::-;7801:168;8000:18;7990:8;7986:33;7978:41;;7731:295;7632:394;;;;:::o;8218:725::-;8296:4;8302:6;8358:11;8345:25;8458:1;8452:4;8448:12;8437:8;8421:14;8417:29;8413:48;8393:18;8389:73;8379:168;;8466:79;;:::i;:::-;8379:168;8578:18;8568:8;8564:33;8556:41;;8630:4;8617:18;8607:28;;8658:18;8650:6;8647:30;8644:117;;;8680:79;;:::i;:::-;8644:117;8788:2;8782:4;8778:13;8770:21;;8845:4;8837:6;8833:17;8817:14;8813:38;8807:4;8803:49;8800:136;;;8855:79;;:::i;:::-;8800:136;8309:634;8218:725;;;;;:::o;8949:97::-;9008:6;9036:3;9026:13;;8949:97;;;;:::o;9052:180::-;9100:77;9097:1;9090:88;9197:4;9194:1;9187:15;9221:4;9218:1;9211:15;9238:180;9286:77;9283:1;9276:88;9383:4;9380:1;9373:15;9407:4;9404:1;9397:15;9424:320;9468:6;9505:1;9499:4;9495:12;9485:22;;9552:1;9546:4;9542:12;9573:18;9563:81;;9629:4;9621:6;9617:17;9607:27;;9563:81;9691:2;9683:6;9680:14;9660:18;9657:38;9654:84;;;9710:18;;:::i;:::-;9654:84;9475:269;9424:320;;;:::o;9750:141::-;9799:4;9822:3;9814:11;;9845:3;9842:1;9835:14;9879:4;9876:1;9866:18;9858:26;;9750:141;;;:::o;9897:93::-;9934:6;9981:2;9976;9969:5;9965:14;9961:23;9951:33;;9897:93;;;:::o;9996:107::-;10040:8;10090:5;10084:4;10080:16;10059:37;;9996:107;;;;:::o;10109:393::-;10178:6;10228:1;10216:10;10212:18;10251:97;10281:66;10270:9;10251:97;:::i;:::-;10369:39;10399:8;10388:9;10369:39;:::i;:::-;10357:51;;10441:4;10437:9;10430:5;10426:21;10417:30;;10490:4;10480:8;10476:19;10469:5;10466:30;10456:40;;10185:317;;10109:393;;;;;:::o;10508:60::-;10536:3;10557:5;10550:12;;10508:60;;;:::o;10574:142::-;10624:9;10657:53;10675:34;10684:24;10702:5;10684:24;:::i;:::-;10675:34;:::i;:::-;10657:53;:::i;:::-;10644:66;;10574:142;;;:::o;10722:75::-;10765:3;10786:5;10779:12;;10722:75;;;:::o;10803:269::-;10913:39;10944:7;10913:39;:::i;:::-;10974:91;11023:41;11047:16;11023:41;:::i;:::-;11015:6;11008:4;11002:11;10974:91;:::i;:::-;10968:4;10961:105;10879:193;10803:269;;;:::o;11078:73::-;11123:3;11078:73;:::o;11157:189::-;11234:32;;:::i;:::-;11275:65;11333:6;11325;11319:4;11275:65;:::i;:::-;11210:136;11157:189;;:::o;11352:186::-;11412:120;11429:3;11422:5;11419:14;11412:120;;;11483:39;11520:1;11513:5;11483:39;:::i;:::-;11456:1;11449:5;11445:13;11436:22;;11412:120;;;11352:186;;:::o;11544:543::-;11645:2;11640:3;11637:11;11634:446;;;11679:38;11711:5;11679:38;:::i;:::-;11763:29;11781:10;11763:29;:::i;:::-;11753:8;11749:44;11946:2;11934:10;11931:18;11928:49;;;11967:8;11952:23;;11928:49;11990:80;12046:22;12064:3;12046:22;:::i;:::-;12036:8;12032:37;12019:11;11990:80;:::i;:::-;11649:431;;11634:446;11544:543;;;:::o;12093:117::-;12147:8;12197:5;12191:4;12187:16;12166:37;;12093:117;;;;:::o;12216:169::-;12260:6;12293:51;12341:1;12337:6;12329:5;12326:1;12322:13;12293:51;:::i;:::-;12289:56;12374:4;12368;12364:15;12354:25;;12267:118;12216:169;;;;:::o;12390:295::-;12466:4;12612:29;12637:3;12631:4;12612:29;:::i;:::-;12604:37;;12674:3;12671:1;12667:11;12661:4;12658:21;12650:29;;12390:295;;;;:::o;12690:1403::-;12814:44;12854:3;12849;12814:44;:::i;:::-;12923:18;12915:6;12912:30;12909:56;;;12945:18;;:::i;:::-;12909:56;12989:38;13021:4;13015:11;12989:38;:::i;:::-;13074:67;13134:6;13126;13120:4;13074:67;:::i;:::-;13168:1;13197:2;13189:6;13186:14;13214:1;13209:632;;;;13885:1;13902:6;13899:84;;;13958:9;13953:3;13949:19;13936:33;13927:42;;13899:84;14009:67;14069:6;14062:5;14009:67;:::i;:::-;14003:4;13996:81;13858:229;13179:908;;13209:632;13261:4;13257:9;13249:6;13245:22;13295:37;13327:4;13295:37;:::i;:::-;13354:1;13368:215;13382:7;13379:1;13376:14;13368:215;;;13468:9;13463:3;13459:19;13446:33;13438:6;13431:49;13519:1;13511:6;13507:14;13497:24;;13566:2;13555:9;13551:18;13538:31;;13405:4;13402:1;13398:12;13393:17;;13368:215;;;13611:6;13602:7;13599:19;13596:186;;;13676:9;13671:3;13667:19;13654:33;13719:48;13761:4;13753:6;13749:17;13738:9;13719:48;:::i;:::-;13711:6;13704:64;13619:163;13596:186;13828:1;13824;13816:6;13812:14;13808:22;13802:4;13795:36;13216:625;;;13179:908;;12789:1304;;;12690:1403;;;:::o;14099:218::-;14214:97;14303:7;14294;14288:4;14214:97;:::i;:::-;14099:218;;;:::o;14323:186::-;14368:11;14417:3;14404:17;14430:33;14457:5;14430:33;:::i;:::-;14497:5;14473:29;;14380:129;14323:186;;;:::o;14515:92::-;14547:8;14594:5;14591:1;14587:13;14566:34;;14515:92;;;:::o;14613:290::-;14671:6;14700:66;14787:22;14800:8;14787:22;:::i;:::-;14775:34;;14842:4;14838:9;14831:5;14827:21;14818:30;;14891:4;14881:8;14877:19;14870:5;14867:30;14857:40;;14678:225;14613:290;;;;:::o;14909:262::-;15019:39;15050:7;15019:39;:::i;:::-;15080:84;15122:41;15146:16;15122:41;:::i;:::-;15115:4;15109:11;15080:84;:::i;:::-;15074:4;15067:98;14985:186;14909:262;;:::o;15177:1199::-;15355:1;15349:4;15345:12;15401:1;15394:5;15390:13;15466:63;15516:12;15509:5;15466:63;:::i;:::-;15543:112;15641:13;15626;15614:10;15543:112;:::i;:::-;15312:354;;;;15719:1;15713:4;15709:12;15765:2;15758:5;15754:14;15831:63;15881:12;15874:5;15831:63;:::i;:::-;15908:112;16006:13;15991;15979:10;15908:112;:::i;:::-;15676:355;;;;16084:1;16078:4;16074:12;16130:2;16123:5;16119:14;16181:12;16224:42;16252:13;16224:42;:::i;:::-;16207:59;;16280:78;16344:13;16332:10;16280:78;:::i;:::-;16041:328;;;15177:1199;;:::o;16382:260::-;16520:116;16628:7;16622:4;16520:116;:::i;:::-;16382:260;;:::o;16648:159::-;16722:11;16756:6;16751:3;16744:19;16796:4;16791:3;16787:14;16772:29;;16648:159;;;;:::o;16837:782::-;16912:3;16949:5;16943:12;16978:36;17004:9;16978:36;:::i;:::-;17030:61;17084:6;17079:3;17030:61;:::i;:::-;17023:68;;17122:1;17111:9;17107:17;17138:1;17133:135;;;;17282:1;17277:336;;;;17100:513;;17133:135;17217:4;17213:9;17202;17198:25;17193:3;17186:38;17253:4;17248:3;17244:14;17237:21;;17133:135;;17277:336;17344:38;17376:5;17344:38;:::i;:::-;17404:1;17418:154;17432:6;17429:1;17426:13;17418:154;;;17506:7;17500:14;17496:1;17491:3;17487:11;17480:35;17556:1;17547:7;17543:15;17532:26;;17454:4;17451:1;17447:12;17442:17;;17418:154;;;17601:1;17596:3;17592:11;17585:18;;17284:329;;17100:513;;16916:703;;16837:782;;;;:::o;17625:102::-;17667:8;17714:5;17711:1;17707:13;17686:34;;17625:102;;;:::o;17733:90::-;17783:7;17812:5;17801:16;;17733:90;;;:::o;17829:166::-;17898:5;17923:66;17954:34;17977:10;17954:34;:::i;:::-;17923:66;:::i;:::-;17914:75;;17829:166;;;:::o;18001:108::-;18078:24;18096:5;18078:24;:::i;:::-;18073:3;18066:37;18001:108;;:::o;18169:954::-;18287:3;18323:4;18318:3;18314:14;18354:1;18439:4;18432:5;18428:16;18491:3;18485:4;18481:14;18474:4;18469:3;18465:14;18458:38;18517:70;18582:4;18568:12;18517:70;:::i;:::-;18509:78;;18365:233;18679:4;18672:5;18668:16;18731:3;18725:4;18721:14;18714:4;18709:3;18705:14;18698:38;18757:70;18822:4;18808:12;18757:70;:::i;:::-;18749:78;;18608:230;18916:4;18909:5;18905:16;18899:23;18886:36;;18955:55;19000:9;18955:55;:::i;:::-;19023:63;19080:4;19075:3;19071:14;19057:12;19023:63;:::i;:::-;18848:248;19113:4;19106:11;;18292:831;;18169:954;;;;:::o;19129:371::-;19271:4;19309:2;19298:9;19294:18;19286:26;;19358:9;19352:4;19348:20;19344:1;19333:9;19329:17;19322:47;19386:107;19488:4;19479:6;19386:107;:::i;:::-;19378:115;;19129:371;;;;:::o;19506:225::-;19646:34;19642:1;19634:6;19630:14;19623:58;19715:8;19710:2;19702:6;19698:15;19691:33;19506:225;:::o;19737:366::-;19879:3;19900:67;19964:2;19959:3;19900:67;:::i;:::-;19893:74;;19976:93;20065:3;19976:93;:::i;:::-;20094:2;20089:3;20085:12;20078:19;;19737:366;;;:::o;20109:419::-;20275:4;20313:2;20302:9;20298:18;20290:26;;20362:9;20356:4;20352:20;20348:1;20337:9;20333:17;20326:47;20390:131;20516:4;20390:131;:::i;:::-;20382:139;;20109:419;;;:::o",
    "source": "// SPDX-License-Identifier: MIT\npragma solidity >=0.6.0 <0.9.0;\n\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\ncontract ToDo is Ownable {\n  \n  struct TokenInfo {\n        string tokenAddress;\n        string tokenType;\n        uint256 quantity;\n  }\n\n  uint lastTokenInfoId;\n  uint[] tokenInfoIds;\n  mapping(uint => TokenInfo) assetss;\n  TokenInfo[] assets;\n\n  event PortfolioCreated(TokenInfo);\n\n  function ToDoId() public {\n    lastTokenInfoId = 0;\n  }\n\n  function createPortfolio(TokenInfo[] calldata tokenInfo) public onlyOwner payable {\n        delete assets;\n        for (uint i = 0; i < tokenInfo.length; i++) {\n            assets.push(tokenInfo[i]);\n        }\n        //emit SetPortfolio(assets);\n  }\n\n  function createPortfolios(TokenInfo[] calldata tokenInfo) public onlyOwner payable {\n            lastTokenInfoId++;\n            assetss[lastTokenInfoId] = tokenInfo[lastTokenInfoId];\n            tokenInfoIds.push(lastTokenInfoId);\n            emit PortfolioCreated(assetss[lastTokenInfoId]);\n            \n  }\n\n  // function getPortfolioIds() public view returns(uint[]) {\n  //   return tokenInfoIds;\n  // }\n\n\n  function getTokenInfo(uint id) public view\n  returns(\n      string memory,\n      string memory ,\n      uint256\n     ) { \n       \n      return(\n        assets[id].tokenAddress,\n        assets[id].tokenType,\n        assets[id].quantity\n      );\n  }\n\n  // function getPortfolio() public view returns(TokenInfo[]) {\n  //   return assets;\n  // }\n\n  modifier portfolieExists(uint id) {\n    if( keccak256(abi.encodePacked(assetss[id].tokenAddress)) == keccak256(abi.encodePacked(\"0\")) ) {\n         revert();\n       }\n       _;\n  }\n  \n\n  \n}\n",
    "sourcePath": "C:\\BlockChainProject\\eatsolidity\\step5\\contracts\\ToDo.sol",
    "ast": {
      "absolutePath": "project:/contracts/ToDo.sol",
      "exportedSymbols": {
        "Context": [
          126
        ],
        "Ownable": [
          104
        ],
        "ToDo": [
          319
        ]
      },
      "id": 320,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 161,
          "literals": [
            "solidity",
            ">=",
            "0.6",
            ".0",
            "<",
            "0.9",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:31:3"
        },
        {
          "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "id": 162,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 320,
          "sourceUnit": 105,
          "src": "65:52:3",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 163,
                "name": "Ownable",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 104,
                "src": "136:7:3"
              },
              "id": 164,
              "nodeType": "InheritanceSpecifier",
              "src": "136:7:3"
            }
          ],
          "canonicalName": "ToDo",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 319,
          "linearizedBaseContracts": [
            319,
            104,
            126
          ],
          "name": "ToDo",
          "nameLocation": "128:4:3",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "canonicalName": "ToDo.TokenInfo",
              "id": 171,
              "members": [
                {
                  "constant": false,
                  "id": 166,
                  "mutability": "mutable",
                  "name": "tokenAddress",
                  "nameLocation": "185:12:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 171,
                  "src": "178:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 165,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "178:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 168,
                  "mutability": "mutable",
                  "name": "tokenType",
                  "nameLocation": "214:9:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 171,
                  "src": "207:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 167,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "207:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 170,
                  "mutability": "mutable",
                  "name": "quantity",
                  "nameLocation": "241:8:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 171,
                  "src": "233:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 169,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "233:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "name": "TokenInfo",
              "nameLocation": "158:9:3",
              "nodeType": "StructDefinition",
              "scope": 319,
              "src": "151:103:3",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 173,
              "mutability": "mutable",
              "name": "lastTokenInfoId",
              "nameLocation": "263:15:3",
              "nodeType": "VariableDeclaration",
              "scope": 319,
              "src": "258:20:3",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 172,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "258:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 176,
              "mutability": "mutable",
              "name": "tokenInfoIds",
              "nameLocation": "289:12:3",
              "nodeType": "VariableDeclaration",
              "scope": 319,
              "src": "282:19:3",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                "typeString": "uint256[]"
              },
              "typeName": {
                "baseType": {
                  "id": 174,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "282:4:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "id": 175,
                "nodeType": "ArrayTypeName",
                "src": "282:6:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 181,
              "mutability": "mutable",
              "name": "assetss",
              "nameLocation": "332:7:3",
              "nodeType": "VariableDeclaration",
              "scope": 319,
              "src": "305:34:3",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TokenInfo_$171_storage_$",
                "typeString": "mapping(uint256 => struct ToDo.TokenInfo)"
              },
              "typeName": {
                "id": 180,
                "keyType": {
                  "id": 177,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "313:4:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "305:26:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TokenInfo_$171_storage_$",
                  "typeString": "mapping(uint256 => struct ToDo.TokenInfo)"
                },
                "valueType": {
                  "id": 179,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 178,
                    "name": "TokenInfo",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 171,
                    "src": "321:9:3"
                  },
                  "referencedDeclaration": 171,
                  "src": "321:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_TokenInfo_$171_storage_ptr",
                    "typeString": "struct ToDo.TokenInfo"
                  }
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 185,
              "mutability": "mutable",
              "name": "assets",
              "nameLocation": "355:6:3",
              "nodeType": "VariableDeclaration",
              "scope": 319,
              "src": "343:18:3",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage",
                "typeString": "struct ToDo.TokenInfo[]"
              },
              "typeName": {
                "baseType": {
                  "id": 183,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 182,
                    "name": "TokenInfo",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 171,
                    "src": "343:9:3"
                  },
                  "referencedDeclaration": 171,
                  "src": "343:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_TokenInfo_$171_storage_ptr",
                    "typeString": "struct ToDo.TokenInfo"
                  }
                },
                "id": 184,
                "nodeType": "ArrayTypeName",
                "src": "343:11:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage_ptr",
                  "typeString": "struct ToDo.TokenInfo[]"
                }
              },
              "visibility": "internal"
            },
            {
              "anonymous": false,
              "id": 190,
              "name": "PortfolioCreated",
              "nameLocation": "372:16:3",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 189,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 188,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 190,
                    "src": "389:9:3",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TokenInfo_$171_memory_ptr",
                      "typeString": "struct ToDo.TokenInfo"
                    },
                    "typeName": {
                      "id": 187,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 186,
                        "name": "TokenInfo",
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 171,
                        "src": "389:9:3"
                      },
                      "referencedDeclaration": 171,
                      "src": "389:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenInfo_$171_storage_ptr",
                        "typeString": "struct ToDo.TokenInfo"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "388:11:3"
              },
              "src": "366:34:3"
            },
            {
              "body": {
                "id": 197,
                "nodeType": "Block",
                "src": "429:30:3",
                "statements": [
                  {
                    "expression": {
                      "id": 195,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 193,
                        "name": "lastTokenInfoId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 173,
                        "src": "435:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "30",
                        "id": 194,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "453:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "435:19:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 196,
                    "nodeType": "ExpressionStatement",
                    "src": "435:19:3"
                  }
                ]
              },
              "functionSelector": "17861288",
              "id": 198,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "ToDoId",
              "nameLocation": "413:6:3",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 191,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "419:2:3"
              },
              "returnParameters": {
                "id": 192,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "429:0:3"
              },
              "scope": 319,
              "src": "404:55:3",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 231,
                "nodeType": "Block",
                "src": "545:168:3",
                "statements": [
                  {
                    "expression": {
                      "id": 208,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "delete",
                      "prefix": true,
                      "src": "555:13:3",
                      "subExpression": {
                        "id": 207,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 185,
                        "src": "562:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage",
                          "typeString": "struct ToDo.TokenInfo storage ref[] storage ref"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 209,
                    "nodeType": "ExpressionStatement",
                    "src": "555:13:3"
                  },
                  {
                    "body": {
                      "id": 229,
                      "nodeType": "Block",
                      "src": "622:50:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "baseExpression": {
                                  "id": 224,
                                  "name": "tokenInfo",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 202,
                                  "src": "648:9:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr",
                                    "typeString": "struct ToDo.TokenInfo calldata[] calldata"
                                  }
                                },
                                "id": 226,
                                "indexExpression": {
                                  "id": 225,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 211,
                                  "src": "658:1:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "648:12:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_TokenInfo_$171_calldata_ptr",
                                  "typeString": "struct ToDo.TokenInfo calldata"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_TokenInfo_$171_calldata_ptr",
                                  "typeString": "struct ToDo.TokenInfo calldata"
                                }
                              ],
                              "expression": {
                                "id": 221,
                                "name": "assets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 185,
                                "src": "636:6:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage",
                                  "typeString": "struct ToDo.TokenInfo storage ref[] storage ref"
                                }
                              },
                              "id": 223,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "push",
                              "nodeType": "MemberAccess",
                              "src": "636:11:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage_ptr_$_t_struct$_TokenInfo_$171_storage_$returns$__$bound_to$_t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage_ptr_$",
                                "typeString": "function (struct ToDo.TokenInfo storage ref[] storage pointer,struct ToDo.TokenInfo storage ref)"
                              }
                            },
                            "id": 227,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "636:25:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 228,
                          "nodeType": "ExpressionStatement",
                          "src": "636:25:3"
                        }
                      ]
                    },
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 214,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 211,
                        "src": "595:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "expression": {
                          "id": 215,
                          "name": "tokenInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 202,
                          "src": "599:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr",
                            "typeString": "struct ToDo.TokenInfo calldata[] calldata"
                          }
                        },
                        "id": 216,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "599:16:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "595:20:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 230,
                    "initializationExpression": {
                      "assignments": [
                        211
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 211,
                          "mutability": "mutable",
                          "name": "i",
                          "nameLocation": "588:1:3",
                          "nodeType": "VariableDeclaration",
                          "scope": 230,
                          "src": "583:6:3",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 210,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "583:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 213,
                      "initialValue": {
                        "hexValue": "30",
                        "id": 212,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "592:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "583:10:3"
                    },
                    "loopExpression": {
                      "expression": {
                        "id": 219,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "617:3:3",
                        "subExpression": {
                          "id": 218,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 211,
                          "src": "617:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 220,
                      "nodeType": "ExpressionStatement",
                      "src": "617:3:3"
                    },
                    "nodeType": "ForStatement",
                    "src": "578:94:3"
                  }
                ]
              },
              "functionSelector": "8888be1a",
              "id": 232,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 205,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 204,
                    "name": "onlyOwner",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 46,
                    "src": "527:9:3"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "527:9:3"
                }
              ],
              "name": "createPortfolio",
              "nameLocation": "472:15:3",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 203,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 202,
                    "mutability": "mutable",
                    "name": "tokenInfo",
                    "nameLocation": "509:9:3",
                    "nodeType": "VariableDeclaration",
                    "scope": 232,
                    "src": "488:30:3",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr",
                      "typeString": "struct ToDo.TokenInfo[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 200,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 199,
                          "name": "TokenInfo",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 171,
                          "src": "488:9:3"
                        },
                        "referencedDeclaration": 171,
                        "src": "488:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenInfo_$171_storage_ptr",
                          "typeString": "struct ToDo.TokenInfo"
                        }
                      },
                      "id": 201,
                      "nodeType": "ArrayTypeName",
                      "src": "488:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage_ptr",
                        "typeString": "struct ToDo.TokenInfo[]"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "487:32:3"
              },
              "returnParameters": {
                "id": 206,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "545:0:3"
              },
              "scope": 319,
              "src": "463:250:3",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 264,
                "nodeType": "Block",
                "src": "800:225:3",
                "statements": [
                  {
                    "expression": {
                      "id": 242,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "814:17:3",
                      "subExpression": {
                        "id": 241,
                        "name": "lastTokenInfoId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 173,
                        "src": "814:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 243,
                    "nodeType": "ExpressionStatement",
                    "src": "814:17:3"
                  },
                  {
                    "expression": {
                      "id": 250,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 244,
                          "name": "assetss",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 181,
                          "src": "845:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TokenInfo_$171_storage_$",
                            "typeString": "mapping(uint256 => struct ToDo.TokenInfo storage ref)"
                          }
                        },
                        "id": 246,
                        "indexExpression": {
                          "id": 245,
                          "name": "lastTokenInfoId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 173,
                          "src": "853:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "845:24:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                          "typeString": "struct ToDo.TokenInfo storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "baseExpression": {
                          "id": 247,
                          "name": "tokenInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 236,
                          "src": "872:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr",
                            "typeString": "struct ToDo.TokenInfo calldata[] calldata"
                          }
                        },
                        "id": 249,
                        "indexExpression": {
                          "id": 248,
                          "name": "lastTokenInfoId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 173,
                          "src": "882:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "872:26:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenInfo_$171_calldata_ptr",
                          "typeString": "struct ToDo.TokenInfo calldata"
                        }
                      },
                      "src": "845:53:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                        "typeString": "struct ToDo.TokenInfo storage ref"
                      }
                    },
                    "id": 251,
                    "nodeType": "ExpressionStatement",
                    "src": "845:53:3"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 255,
                          "name": "lastTokenInfoId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 173,
                          "src": "930:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 252,
                          "name": "tokenInfoIds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 176,
                          "src": "912:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 254,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "push",
                        "nodeType": "MemberAccess",
                        "src": "912:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_uint256_$dyn_storage_ptr_$_t_uint256_$returns$__$bound_to$_t_array$_t_uint256_$dyn_storage_ptr_$",
                          "typeString": "function (uint256[] storage pointer,uint256)"
                        }
                      },
                      "id": 256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "912:34:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 257,
                    "nodeType": "ExpressionStatement",
                    "src": "912:34:3"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "baseExpression": {
                            "id": 259,
                            "name": "assetss",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 181,
                            "src": "982:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TokenInfo_$171_storage_$",
                              "typeString": "mapping(uint256 => struct ToDo.TokenInfo storage ref)"
                            }
                          },
                          "id": 261,
                          "indexExpression": {
                            "id": 260,
                            "name": "lastTokenInfoId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 173,
                            "src": "990:15:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "982:24:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                            "typeString": "struct ToDo.TokenInfo storage ref"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                            "typeString": "struct ToDo.TokenInfo storage ref"
                          }
                        ],
                        "id": 258,
                        "name": "PortfolioCreated",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 190,
                        "src": "965:16:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_struct$_TokenInfo_$171_memory_ptr_$returns$__$",
                          "typeString": "function (struct ToDo.TokenInfo memory)"
                        }
                      },
                      "id": 262,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "965:42:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 263,
                    "nodeType": "EmitStatement",
                    "src": "960:47:3"
                  }
                ]
              },
              "functionSelector": "6af33a66",
              "id": 265,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 239,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 238,
                    "name": "onlyOwner",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 46,
                    "src": "782:9:3"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "782:9:3"
                }
              ],
              "name": "createPortfolios",
              "nameLocation": "726:16:3",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 237,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 236,
                    "mutability": "mutable",
                    "name": "tokenInfo",
                    "nameLocation": "764:9:3",
                    "nodeType": "VariableDeclaration",
                    "scope": 265,
                    "src": "743:30:3",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr",
                      "typeString": "struct ToDo.TokenInfo[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 234,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 233,
                          "name": "TokenInfo",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 171,
                          "src": "743:9:3"
                        },
                        "referencedDeclaration": 171,
                        "src": "743:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenInfo_$171_storage_ptr",
                          "typeString": "struct ToDo.TokenInfo"
                        }
                      },
                      "id": 235,
                      "nodeType": "ArrayTypeName",
                      "src": "743:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage_ptr",
                        "typeString": "struct ToDo.TokenInfo[]"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "742:32:3"
              },
              "returnParameters": {
                "id": 240,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "800:0:3"
              },
              "scope": 319,
              "src": "717:308:3",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 290,
                "nodeType": "Block",
                "src": "1246:128:3",
                "statements": [
                  {
                    "expression": {
                      "components": [
                        {
                          "expression": {
                            "baseExpression": {
                              "id": 276,
                              "name": "assets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 185,
                              "src": "1279:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage",
                                "typeString": "struct ToDo.TokenInfo storage ref[] storage ref"
                              }
                            },
                            "id": 278,
                            "indexExpression": {
                              "id": 277,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 267,
                              "src": "1286:2:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1279:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                              "typeString": "struct ToDo.TokenInfo storage ref"
                            }
                          },
                          "id": 279,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "tokenAddress",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 166,
                          "src": "1279:23:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        {
                          "expression": {
                            "baseExpression": {
                              "id": 280,
                              "name": "assets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 185,
                              "src": "1312:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage",
                                "typeString": "struct ToDo.TokenInfo storage ref[] storage ref"
                              }
                            },
                            "id": 282,
                            "indexExpression": {
                              "id": 281,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 267,
                              "src": "1319:2:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1312:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                              "typeString": "struct ToDo.TokenInfo storage ref"
                            }
                          },
                          "id": 283,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "tokenType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 168,
                          "src": "1312:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        {
                          "expression": {
                            "baseExpression": {
                              "id": 284,
                              "name": "assets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 185,
                              "src": "1342:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage",
                                "typeString": "struct ToDo.TokenInfo storage ref[] storage ref"
                              }
                            },
                            "id": 286,
                            "indexExpression": {
                              "id": 285,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 267,
                              "src": "1349:2:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1342:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                              "typeString": "struct ToDo.TokenInfo storage ref"
                            }
                          },
                          "id": 287,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "quantity",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 170,
                          "src": "1342:19:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 288,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1269:100:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_string_storage_$_t_string_storage_$_t_uint256_$",
                        "typeString": "tuple(string storage ref,string storage ref,uint256)"
                      }
                    },
                    "functionReturnParameters": 275,
                    "id": 289,
                    "nodeType": "Return",
                    "src": "1263:106:3"
                  }
                ]
              },
              "functionSelector": "8c7a63ae",
              "id": 291,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getTokenInfo",
              "nameLocation": "1137:12:3",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 268,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 267,
                    "mutability": "mutable",
                    "name": "id",
                    "nameLocation": "1155:2:3",
                    "nodeType": "VariableDeclaration",
                    "scope": 291,
                    "src": "1150:7:3",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 266,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1150:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1149:9:3"
              },
              "returnParameters": {
                "id": 275,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 270,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 291,
                    "src": "1188:13:3",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 269,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1188:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 272,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 291,
                    "src": "1209:13:3",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 271,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1209:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 274,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 291,
                    "src": "1231:7:3",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 273,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1231:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1180:65:3"
              },
              "scope": 319,
              "src": "1128:246:3",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 317,
                "nodeType": "Block",
                "src": "1506:145:3",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "id": 310,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "expression": {
                                  "baseExpression": {
                                    "id": 298,
                                    "name": "assetss",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 181,
                                    "src": "1543:7:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TokenInfo_$171_storage_$",
                                      "typeString": "mapping(uint256 => struct ToDo.TokenInfo storage ref)"
                                    }
                                  },
                                  "id": 300,
                                  "indexExpression": {
                                    "id": 299,
                                    "name": "id",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 293,
                                    "src": "1551:2:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1543:11:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                                    "typeString": "struct ToDo.TokenInfo storage ref"
                                  }
                                },
                                "id": 301,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "tokenAddress",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 166,
                                "src": "1543:24:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_storage",
                                  "typeString": "string storage ref"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_storage",
                                  "typeString": "string storage ref"
                                }
                              ],
                              "expression": {
                                "id": 296,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967295,
                                "src": "1526:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 297,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "1526:16:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 302,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1526:42:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 295,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967288,
                          "src": "1516:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 303,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1516:53:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "hexValue": "30",
                                "id": 307,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1600:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_044852b2a670ade5407e78fb2863c51de9fcb96542a07186fe3aeda6bb8a116d",
                                  "typeString": "literal_string \"0\""
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_044852b2a670ade5407e78fb2863c51de9fcb96542a07186fe3aeda6bb8a116d",
                                  "typeString": "literal_string \"0\""
                                }
                              ],
                              "expression": {
                                "id": 305,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967295,
                                "src": "1583:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 306,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "1583:16:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 308,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1583:21:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 304,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967288,
                          "src": "1573:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 309,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1573:32:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "src": "1516:89:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 315,
                    "nodeType": "IfStatement",
                    "src": "1512:125:3",
                    "trueBody": {
                      "id": 314,
                      "nodeType": "Block",
                      "src": "1608:29:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 311,
                              "name": "revert",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                4294967277,
                                4294967277
                              ],
                              "referencedDeclaration": 4294967277,
                              "src": "1619:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 312,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1619:8:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 313,
                          "nodeType": "ExpressionStatement",
                          "src": "1619:8:3"
                        }
                      ]
                    }
                  },
                  {
                    "id": 316,
                    "nodeType": "PlaceholderStatement",
                    "src": "1645:1:3"
                  }
                ]
              },
              "id": 318,
              "name": "portfolieExists",
              "nameLocation": "1481:15:3",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 294,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 293,
                    "mutability": "mutable",
                    "name": "id",
                    "nameLocation": "1502:2:3",
                    "nodeType": "VariableDeclaration",
                    "scope": 318,
                    "src": "1497:7:3",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 292,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1497:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1496:9:3"
              },
              "src": "1472:179:3",
              "virtual": false,
              "visibility": "internal"
            }
          ],
          "scope": 320,
          "src": "119:1541:3",
          "usedErrors": []
        }
      ],
      "src": "32:1629:3"
    },
    "legacyAST": {
      "absolutePath": "project:/contracts/ToDo.sol",
      "exportedSymbols": {
        "Context": [
          126
        ],
        "Ownable": [
          104
        ],
        "ToDo": [
          319
        ]
      },
      "id": 320,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 161,
          "literals": [
            "solidity",
            ">=",
            "0.6",
            ".0",
            "<",
            "0.9",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:31:3"
        },
        {
          "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "id": 162,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 320,
          "sourceUnit": 105,
          "src": "65:52:3",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 163,
                "name": "Ownable",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 104,
                "src": "136:7:3"
              },
              "id": 164,
              "nodeType": "InheritanceSpecifier",
              "src": "136:7:3"
            }
          ],
          "canonicalName": "ToDo",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 319,
          "linearizedBaseContracts": [
            319,
            104,
            126
          ],
          "name": "ToDo",
          "nameLocation": "128:4:3",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "canonicalName": "ToDo.TokenInfo",
              "id": 171,
              "members": [
                {
                  "constant": false,
                  "id": 166,
                  "mutability": "mutable",
                  "name": "tokenAddress",
                  "nameLocation": "185:12:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 171,
                  "src": "178:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 165,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "178:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 168,
                  "mutability": "mutable",
                  "name": "tokenType",
                  "nameLocation": "214:9:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 171,
                  "src": "207:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 167,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "207:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 170,
                  "mutability": "mutable",
                  "name": "quantity",
                  "nameLocation": "241:8:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 171,
                  "src": "233:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 169,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "233:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "name": "TokenInfo",
              "nameLocation": "158:9:3",
              "nodeType": "StructDefinition",
              "scope": 319,
              "src": "151:103:3",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 173,
              "mutability": "mutable",
              "name": "lastTokenInfoId",
              "nameLocation": "263:15:3",
              "nodeType": "VariableDeclaration",
              "scope": 319,
              "src": "258:20:3",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 172,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "258:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 176,
              "mutability": "mutable",
              "name": "tokenInfoIds",
              "nameLocation": "289:12:3",
              "nodeType": "VariableDeclaration",
              "scope": 319,
              "src": "282:19:3",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                "typeString": "uint256[]"
              },
              "typeName": {
                "baseType": {
                  "id": 174,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "282:4:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "id": 175,
                "nodeType": "ArrayTypeName",
                "src": "282:6:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 181,
              "mutability": "mutable",
              "name": "assetss",
              "nameLocation": "332:7:3",
              "nodeType": "VariableDeclaration",
              "scope": 319,
              "src": "305:34:3",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TokenInfo_$171_storage_$",
                "typeString": "mapping(uint256 => struct ToDo.TokenInfo)"
              },
              "typeName": {
                "id": 180,
                "keyType": {
                  "id": 177,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "313:4:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "305:26:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TokenInfo_$171_storage_$",
                  "typeString": "mapping(uint256 => struct ToDo.TokenInfo)"
                },
                "valueType": {
                  "id": 179,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 178,
                    "name": "TokenInfo",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 171,
                    "src": "321:9:3"
                  },
                  "referencedDeclaration": 171,
                  "src": "321:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_TokenInfo_$171_storage_ptr",
                    "typeString": "struct ToDo.TokenInfo"
                  }
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 185,
              "mutability": "mutable",
              "name": "assets",
              "nameLocation": "355:6:3",
              "nodeType": "VariableDeclaration",
              "scope": 319,
              "src": "343:18:3",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage",
                "typeString": "struct ToDo.TokenInfo[]"
              },
              "typeName": {
                "baseType": {
                  "id": 183,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 182,
                    "name": "TokenInfo",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 171,
                    "src": "343:9:3"
                  },
                  "referencedDeclaration": 171,
                  "src": "343:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_TokenInfo_$171_storage_ptr",
                    "typeString": "struct ToDo.TokenInfo"
                  }
                },
                "id": 184,
                "nodeType": "ArrayTypeName",
                "src": "343:11:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage_ptr",
                  "typeString": "struct ToDo.TokenInfo[]"
                }
              },
              "visibility": "internal"
            },
            {
              "anonymous": false,
              "id": 190,
              "name": "PortfolioCreated",
              "nameLocation": "372:16:3",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 189,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 188,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 190,
                    "src": "389:9:3",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TokenInfo_$171_memory_ptr",
                      "typeString": "struct ToDo.TokenInfo"
                    },
                    "typeName": {
                      "id": 187,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 186,
                        "name": "TokenInfo",
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 171,
                        "src": "389:9:3"
                      },
                      "referencedDeclaration": 171,
                      "src": "389:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenInfo_$171_storage_ptr",
                        "typeString": "struct ToDo.TokenInfo"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "388:11:3"
              },
              "src": "366:34:3"
            },
            {
              "body": {
                "id": 197,
                "nodeType": "Block",
                "src": "429:30:3",
                "statements": [
                  {
                    "expression": {
                      "id": 195,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 193,
                        "name": "lastTokenInfoId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 173,
                        "src": "435:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "30",
                        "id": 194,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "453:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "435:19:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 196,
                    "nodeType": "ExpressionStatement",
                    "src": "435:19:3"
                  }
                ]
              },
              "functionSelector": "17861288",
              "id": 198,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "ToDoId",
              "nameLocation": "413:6:3",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 191,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "419:2:3"
              },
              "returnParameters": {
                "id": 192,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "429:0:3"
              },
              "scope": 319,
              "src": "404:55:3",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 231,
                "nodeType": "Block",
                "src": "545:168:3",
                "statements": [
                  {
                    "expression": {
                      "id": 208,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "delete",
                      "prefix": true,
                      "src": "555:13:3",
                      "subExpression": {
                        "id": 207,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 185,
                        "src": "562:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage",
                          "typeString": "struct ToDo.TokenInfo storage ref[] storage ref"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 209,
                    "nodeType": "ExpressionStatement",
                    "src": "555:13:3"
                  },
                  {
                    "body": {
                      "id": 229,
                      "nodeType": "Block",
                      "src": "622:50:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "baseExpression": {
                                  "id": 224,
                                  "name": "tokenInfo",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 202,
                                  "src": "648:9:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr",
                                    "typeString": "struct ToDo.TokenInfo calldata[] calldata"
                                  }
                                },
                                "id": 226,
                                "indexExpression": {
                                  "id": 225,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 211,
                                  "src": "658:1:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "648:12:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_TokenInfo_$171_calldata_ptr",
                                  "typeString": "struct ToDo.TokenInfo calldata"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_TokenInfo_$171_calldata_ptr",
                                  "typeString": "struct ToDo.TokenInfo calldata"
                                }
                              ],
                              "expression": {
                                "id": 221,
                                "name": "assets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 185,
                                "src": "636:6:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage",
                                  "typeString": "struct ToDo.TokenInfo storage ref[] storage ref"
                                }
                              },
                              "id": 223,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "push",
                              "nodeType": "MemberAccess",
                              "src": "636:11:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage_ptr_$_t_struct$_TokenInfo_$171_storage_$returns$__$bound_to$_t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage_ptr_$",
                                "typeString": "function (struct ToDo.TokenInfo storage ref[] storage pointer,struct ToDo.TokenInfo storage ref)"
                              }
                            },
                            "id": 227,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "636:25:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 228,
                          "nodeType": "ExpressionStatement",
                          "src": "636:25:3"
                        }
                      ]
                    },
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 214,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 211,
                        "src": "595:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "expression": {
                          "id": 215,
                          "name": "tokenInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 202,
                          "src": "599:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr",
                            "typeString": "struct ToDo.TokenInfo calldata[] calldata"
                          }
                        },
                        "id": 216,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "599:16:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "595:20:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 230,
                    "initializationExpression": {
                      "assignments": [
                        211
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 211,
                          "mutability": "mutable",
                          "name": "i",
                          "nameLocation": "588:1:3",
                          "nodeType": "VariableDeclaration",
                          "scope": 230,
                          "src": "583:6:3",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 210,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "583:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 213,
                      "initialValue": {
                        "hexValue": "30",
                        "id": 212,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "592:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "583:10:3"
                    },
                    "loopExpression": {
                      "expression": {
                        "id": 219,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "617:3:3",
                        "subExpression": {
                          "id": 218,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 211,
                          "src": "617:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 220,
                      "nodeType": "ExpressionStatement",
                      "src": "617:3:3"
                    },
                    "nodeType": "ForStatement",
                    "src": "578:94:3"
                  }
                ]
              },
              "functionSelector": "8888be1a",
              "id": 232,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 205,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 204,
                    "name": "onlyOwner",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 46,
                    "src": "527:9:3"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "527:9:3"
                }
              ],
              "name": "createPortfolio",
              "nameLocation": "472:15:3",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 203,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 202,
                    "mutability": "mutable",
                    "name": "tokenInfo",
                    "nameLocation": "509:9:3",
                    "nodeType": "VariableDeclaration",
                    "scope": 232,
                    "src": "488:30:3",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr",
                      "typeString": "struct ToDo.TokenInfo[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 200,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 199,
                          "name": "TokenInfo",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 171,
                          "src": "488:9:3"
                        },
                        "referencedDeclaration": 171,
                        "src": "488:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenInfo_$171_storage_ptr",
                          "typeString": "struct ToDo.TokenInfo"
                        }
                      },
                      "id": 201,
                      "nodeType": "ArrayTypeName",
                      "src": "488:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage_ptr",
                        "typeString": "struct ToDo.TokenInfo[]"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "487:32:3"
              },
              "returnParameters": {
                "id": 206,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "545:0:3"
              },
              "scope": 319,
              "src": "463:250:3",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 264,
                "nodeType": "Block",
                "src": "800:225:3",
                "statements": [
                  {
                    "expression": {
                      "id": 242,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "814:17:3",
                      "subExpression": {
                        "id": 241,
                        "name": "lastTokenInfoId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 173,
                        "src": "814:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 243,
                    "nodeType": "ExpressionStatement",
                    "src": "814:17:3"
                  },
                  {
                    "expression": {
                      "id": 250,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 244,
                          "name": "assetss",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 181,
                          "src": "845:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TokenInfo_$171_storage_$",
                            "typeString": "mapping(uint256 => struct ToDo.TokenInfo storage ref)"
                          }
                        },
                        "id": 246,
                        "indexExpression": {
                          "id": 245,
                          "name": "lastTokenInfoId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 173,
                          "src": "853:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "845:24:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                          "typeString": "struct ToDo.TokenInfo storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "baseExpression": {
                          "id": 247,
                          "name": "tokenInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 236,
                          "src": "872:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr",
                            "typeString": "struct ToDo.TokenInfo calldata[] calldata"
                          }
                        },
                        "id": 249,
                        "indexExpression": {
                          "id": 248,
                          "name": "lastTokenInfoId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 173,
                          "src": "882:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "872:26:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenInfo_$171_calldata_ptr",
                          "typeString": "struct ToDo.TokenInfo calldata"
                        }
                      },
                      "src": "845:53:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                        "typeString": "struct ToDo.TokenInfo storage ref"
                      }
                    },
                    "id": 251,
                    "nodeType": "ExpressionStatement",
                    "src": "845:53:3"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 255,
                          "name": "lastTokenInfoId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 173,
                          "src": "930:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 252,
                          "name": "tokenInfoIds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 176,
                          "src": "912:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 254,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "push",
                        "nodeType": "MemberAccess",
                        "src": "912:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_uint256_$dyn_storage_ptr_$_t_uint256_$returns$__$bound_to$_t_array$_t_uint256_$dyn_storage_ptr_$",
                          "typeString": "function (uint256[] storage pointer,uint256)"
                        }
                      },
                      "id": 256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "912:34:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 257,
                    "nodeType": "ExpressionStatement",
                    "src": "912:34:3"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "baseExpression": {
                            "id": 259,
                            "name": "assetss",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 181,
                            "src": "982:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TokenInfo_$171_storage_$",
                              "typeString": "mapping(uint256 => struct ToDo.TokenInfo storage ref)"
                            }
                          },
                          "id": 261,
                          "indexExpression": {
                            "id": 260,
                            "name": "lastTokenInfoId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 173,
                            "src": "990:15:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "982:24:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                            "typeString": "struct ToDo.TokenInfo storage ref"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                            "typeString": "struct ToDo.TokenInfo storage ref"
                          }
                        ],
                        "id": 258,
                        "name": "PortfolioCreated",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 190,
                        "src": "965:16:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_struct$_TokenInfo_$171_memory_ptr_$returns$__$",
                          "typeString": "function (struct ToDo.TokenInfo memory)"
                        }
                      },
                      "id": 262,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "965:42:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 263,
                    "nodeType": "EmitStatement",
                    "src": "960:47:3"
                  }
                ]
              },
              "functionSelector": "6af33a66",
              "id": 265,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 239,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 238,
                    "name": "onlyOwner",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 46,
                    "src": "782:9:3"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "782:9:3"
                }
              ],
              "name": "createPortfolios",
              "nameLocation": "726:16:3",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 237,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 236,
                    "mutability": "mutable",
                    "name": "tokenInfo",
                    "nameLocation": "764:9:3",
                    "nodeType": "VariableDeclaration",
                    "scope": 265,
                    "src": "743:30:3",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_calldata_ptr_$dyn_calldata_ptr",
                      "typeString": "struct ToDo.TokenInfo[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 234,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 233,
                          "name": "TokenInfo",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 171,
                          "src": "743:9:3"
                        },
                        "referencedDeclaration": 171,
                        "src": "743:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenInfo_$171_storage_ptr",
                          "typeString": "struct ToDo.TokenInfo"
                        }
                      },
                      "id": 235,
                      "nodeType": "ArrayTypeName",
                      "src": "743:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage_ptr",
                        "typeString": "struct ToDo.TokenInfo[]"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "742:32:3"
              },
              "returnParameters": {
                "id": 240,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "800:0:3"
              },
              "scope": 319,
              "src": "717:308:3",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 290,
                "nodeType": "Block",
                "src": "1246:128:3",
                "statements": [
                  {
                    "expression": {
                      "components": [
                        {
                          "expression": {
                            "baseExpression": {
                              "id": 276,
                              "name": "assets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 185,
                              "src": "1279:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage",
                                "typeString": "struct ToDo.TokenInfo storage ref[] storage ref"
                              }
                            },
                            "id": 278,
                            "indexExpression": {
                              "id": 277,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 267,
                              "src": "1286:2:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1279:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                              "typeString": "struct ToDo.TokenInfo storage ref"
                            }
                          },
                          "id": 279,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "tokenAddress",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 166,
                          "src": "1279:23:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        {
                          "expression": {
                            "baseExpression": {
                              "id": 280,
                              "name": "assets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 185,
                              "src": "1312:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage",
                                "typeString": "struct ToDo.TokenInfo storage ref[] storage ref"
                              }
                            },
                            "id": 282,
                            "indexExpression": {
                              "id": 281,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 267,
                              "src": "1319:2:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1312:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                              "typeString": "struct ToDo.TokenInfo storage ref"
                            }
                          },
                          "id": 283,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "tokenType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 168,
                          "src": "1312:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        {
                          "expression": {
                            "baseExpression": {
                              "id": 284,
                              "name": "assets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 185,
                              "src": "1342:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_TokenInfo_$171_storage_$dyn_storage",
                                "typeString": "struct ToDo.TokenInfo storage ref[] storage ref"
                              }
                            },
                            "id": 286,
                            "indexExpression": {
                              "id": 285,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 267,
                              "src": "1349:2:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1342:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                              "typeString": "struct ToDo.TokenInfo storage ref"
                            }
                          },
                          "id": 287,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "quantity",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 170,
                          "src": "1342:19:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 288,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1269:100:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_string_storage_$_t_string_storage_$_t_uint256_$",
                        "typeString": "tuple(string storage ref,string storage ref,uint256)"
                      }
                    },
                    "functionReturnParameters": 275,
                    "id": 289,
                    "nodeType": "Return",
                    "src": "1263:106:3"
                  }
                ]
              },
              "functionSelector": "8c7a63ae",
              "id": 291,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getTokenInfo",
              "nameLocation": "1137:12:3",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 268,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 267,
                    "mutability": "mutable",
                    "name": "id",
                    "nameLocation": "1155:2:3",
                    "nodeType": "VariableDeclaration",
                    "scope": 291,
                    "src": "1150:7:3",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 266,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1150:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1149:9:3"
              },
              "returnParameters": {
                "id": 275,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 270,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 291,
                    "src": "1188:13:3",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 269,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1188:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 272,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 291,
                    "src": "1209:13:3",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 271,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1209:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 274,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 291,
                    "src": "1231:7:3",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 273,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1231:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1180:65:3"
              },
              "scope": 319,
              "src": "1128:246:3",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 317,
                "nodeType": "Block",
                "src": "1506:145:3",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "id": 310,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "expression": {
                                  "baseExpression": {
                                    "id": 298,
                                    "name": "assetss",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 181,
                                    "src": "1543:7:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TokenInfo_$171_storage_$",
                                      "typeString": "mapping(uint256 => struct ToDo.TokenInfo storage ref)"
                                    }
                                  },
                                  "id": 300,
                                  "indexExpression": {
                                    "id": 299,
                                    "name": "id",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 293,
                                    "src": "1551:2:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1543:11:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_TokenInfo_$171_storage",
                                    "typeString": "struct ToDo.TokenInfo storage ref"
                                  }
                                },
                                "id": 301,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "tokenAddress",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 166,
                                "src": "1543:24:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_storage",
                                  "typeString": "string storage ref"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_storage",
                                  "typeString": "string storage ref"
                                }
                              ],
                              "expression": {
                                "id": 296,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967295,
                                "src": "1526:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 297,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "1526:16:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 302,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1526:42:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 295,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967288,
                          "src": "1516:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 303,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1516:53:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "hexValue": "30",
                                "id": 307,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1600:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_044852b2a670ade5407e78fb2863c51de9fcb96542a07186fe3aeda6bb8a116d",
                                  "typeString": "literal_string \"0\""
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_044852b2a670ade5407e78fb2863c51de9fcb96542a07186fe3aeda6bb8a116d",
                                  "typeString": "literal_string \"0\""
                                }
                              ],
                              "expression": {
                                "id": 305,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967295,
                                "src": "1583:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 306,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "1583:16:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 308,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1583:21:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 304,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967288,
                          "src": "1573:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 309,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1573:32:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "src": "1516:89:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 315,
                    "nodeType": "IfStatement",
                    "src": "1512:125:3",
                    "trueBody": {
                      "id": 314,
                      "nodeType": "Block",
                      "src": "1608:29:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 311,
                              "name": "revert",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                4294967277,
                                4294967277
                              ],
                              "referencedDeclaration": 4294967277,
                              "src": "1619:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 312,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1619:8:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 313,
                          "nodeType": "ExpressionStatement",
                          "src": "1619:8:3"
                        }
                      ]
                    }
                  },
                  {
                    "id": 316,
                    "nodeType": "PlaceholderStatement",
                    "src": "1645:1:3"
                  }
                ]
              },
              "id": 318,
              "name": "portfolieExists",
              "nameLocation": "1481:15:3",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 294,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 293,
                    "mutability": "mutable",
                    "name": "id",
                    "nameLocation": "1502:2:3",
                    "nodeType": "VariableDeclaration",
                    "scope": 318,
                    "src": "1497:7:3",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 292,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1497:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1496:9:3"
              },
              "src": "1472:179:3",
              "virtual": false,
              "visibility": "internal"
            }
          ],
          "scope": 320,
          "src": "119:1541:3",
          "usedErrors": []
        }
      ],
      "src": "32:1629:3"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.12+commit.f00d7308.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {
          "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
          },
          "0x4e454a19a26ab02a64158ada86e34820bef09c70e4c6313a2dd3a39aad58cf42": {
            "anonymous": false,
            "inputs": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "tokenAddress",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "tokenType",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256",
                    "name": "quantity",
                    "type": "uint256"
                  }
                ],
                "indexed": false,
                "internalType": "struct ToDo.TokenInfo",
                "name": "",
                "type": "tuple"
              }
            ],
            "name": "PortfolioCreated",
            "type": "event"
          }
        },
        "links": {},
        "address": "0xe01C40B578C3fbf08683550f3c8dF3d9FeAFC7Ed",
        "transactionHash": "0x5094c3ff4d995ce740f090ff3aceb65cc7d49eaeae86c5fd842dca1d6d77f975"
      }
    },
    "schemaVersion": "3.4.6",
    "updatedAt": "2022-03-21T08:53:08.395Z",
    "networkType": "ethereum",
    "devdoc": {
      "kind": "dev",
      "methods": {
        "owner()": {
          "details": "Returns the address of the current owner."
        },
        "renounceOwnership()": {
          "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
        },
        "transferOwnership(address)": {
          "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
        }
      },
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }
//web3 = new Web3('127.0.0.1:8545')
web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:9545'));


abstraction = new TruffleContract(artifact);
abstraction.setProvider(web3.currentProvider);

network = Object.keys(artifact.networks)[0];
address = artifact.networks[network].address;

abstraction.at(address)
    .then((todo) => {
        todo.getPortfolioIds()
            .then((tokenInfoIds) => {
                console.log(tokenInfoIds);
            })
});

web3.eth.getAccounts(console.log);

