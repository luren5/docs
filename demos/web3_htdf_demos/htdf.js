let HTDF = require("htdf_web3");

let htdf = new HTDF("http://htdf2020-test01.orientwalt.cn:1317","testchain");

let htdf_address = 'htdf1xwpsq6yqx0zy6grygy7s395e2646wggufqndml'

let address_private = '279bdcd8dccec91f9e079894da33d6888c0f9ef466c0b200921a1bf1ea7d86e8'

let htdf_to_address = 'htdf1pj9vwp226l3gsq5fzk0a58adyad9lg7hw2xjlz'

// latest block
function getBlock(){
   htdf.web.getBlock(function(result){
     console.log(result)
   })
}

// specified block information
function BlockDetail(){
   htdf.web.BlockDetail(1,function(result){
     console.log(result)
   }) 
}

// accounts
function accounts(){
   htdf.web.accounts(function(result){
     console.log(result)
   })
}

// balance
function Balances(){
   htdf.web.Balances(htdf_address,function(result){
     console.log(result)
   }) 
}

// txs
function Txs(){
   htdf.web.Txs('085F0F8A514B8BF13FF5E977FFA195F355D21595D6361944021193571425CF89',function(result){
     console.log(result)
   }) 
}

function Transfer(){
   htdf.web.Transfer({
     'from':htdf_address,
     'to':htdf_to_address,
     'gPrivateKey':address_private,
     'amount':'0.1',
     'gas':'100',
     'gaslimit':'30000',
     'remark':'普通转帐'},function(result){
         console.log(result)
     })
}

// Create a contract tx 4CB68BCDB4439EFE9CD77A9E0F7022D199267676A7240668C6F608F414CE9EAE htdf1czvzz3vj456964cay9xadcg6hzjlfx6g5ndq0f
function Transfer_contract(){
//    var data = '60606040526000600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550341561005157600080fd5b6aa49be39dc14cb8270000006003819055506003546000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610d61806100b76000396000f3006060604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100b4578063095ea7b31461014257806318160ddd1461019c57806323b872dd146101c5578063313ce5671461023e5780634d853ee51461026d57806370a08231146102c257806393c32e061461030f57806395d89b4114610348578063a9059cbb146103d6578063dd62ed3e14610430575b600080fd5b34156100bf57600080fd5b6100c761049c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101075780820151818401526020810190506100ec565b50505050905090810190601f1680156101345780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014d57600080fd5b610182600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506104d5565b604051808215151515815260200191505060405180910390f35b34156101a757600080fd5b6101af61065c565b6040518082815260200191505060405180910390f35b34156101d057600080fd5b610224600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610662565b604051808215151515815260200191505060405180910390f35b341561024957600080fd5b610251610959565b604051808260ff1660ff16815260200191505060405180910390f35b341561027857600080fd5b61028061095e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102cd57600080fd5b6102f9600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610984565b6040518082815260200191505060405180910390f35b341561031a57600080fd5b610346600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506109cc565b005b341561035357600080fd5b61035b610a6c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561039b578082015181840152602081019050610380565b50505050905090810190601f1680156103c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103e157600080fd5b610416600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610aa5565b604051808215151515815260200191505060405180910390f35b341561043b57600080fd5b610486600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c77565b6040518082815260200191505060405180910390f35b6040805190810160405280600981526020017f414a4320636861696e000000000000000000000000000000000000000000000081525081565b60008082148061056157506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054145b151561056c57600080fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60035481565b600080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561072057600080fd5b80831115151561072f57600080fd5b610780836000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610cfe90919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610813836000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d1790919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506108688382610cfe90919063ffffffff16565b600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a360019150509392505050565b601281565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a2857600080fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6040805190810160405280600381526020017f414a43000000000000000000000000000000000000000000000000000000000081525081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610ae257600080fd5b610b33826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610cfe90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610bc6826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d1790919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000828211151515610d0c57fe5b818303905092915050565b6000808284019050838110151515610d2b57fe5b80915050929150505600a165627a7a72305820ed90e18068354be04cb3ff5ad44bb13fe4dfd289e9295d44d0916fe94bf001ac0029'
   htdf.web.Transfer_contract({
     'from':htdf_address,
     'to':'',
     'gPrivateKey':address_private,
     'amount':'0',
     'gas':'100',
     'gaslimit':'5000000',
     'data':data,
     'remark':'备注'},function(result){
       console.log(result)
     })
}

// High level mining
function getMints(){
   htdf.web.getMints(1,function(result){
     console.log(result)
   })
}

// node version information
function getNode(){
   htdf.web.getNode(function(result){
     console.log(result)
   })
}

// Latest node
function getValidatorsets(){
   htdf.web.getValidatorsets(function(result){
     console.log(result)
   })
}

// all node
function validators(){
   htdf.web.validators(function(result){
     console.log(result)
   })
}

// all node address
function getnodeEntrust(){
   htdf.web.getnodeEntrust('htdfvaloper16cl6ek2m2jm3ul63tdv8hl6xs8lv8ketdw7tr3',function(result){
     console.log(result)
   })
}

// all node address profit
function getnodeEntrustmoney(){
    htdf.web.getnodeEntrustmoney({
      'address':'htdf16cl6ek2m2jm3ul63tdv8hl6xs8lv8ket8hxj56',
       'vaddress':'htdfvaloper16cl6ek2m2jm3ul63tdv8hl6xs8lv8ketdw7tr3',    
    },function(result){
      console.log(result)
    })
}

// signature
function cast(){
   htdf.web.cast('7b2274797065223a22617574682f5374645478222c2276616c7565223a7b226d7367223a5b7b2274797065223a2268746466736572766963652f73656e64222c2276616c7565223a7b2246726f6d223a226874646631706a397677703232366c3367737135667a6b306135386164796164396c6737687732786a6c7a222c22546f223a2268746466317373396a7a343667717163637a6e657239776639353538666633346c333675656c3067796339222c22416d6f756e74223a5b7b2264656e6f6d223a227361746f736869222c22616d6f756e74223a223130303030303030227d5d2c2244617461223a22222c224761735072696365223a22313030222c2247617357616e746564223a22373030303030227d7d5d2c22666565223a7b226761735f77616e746564223a22373030303030222c226761735f7072696365223a22313030227d2c227369676e617475726573223a5b7b227075625f6b6579223a7b2274797065223a2274656e6465726d696e742f5075624b6579536563703235366b31222c2276616c7565223a2241396c52496675434f7877526c444a6c38503077376d4a5543732b3277495967424942735a5941366e695a49227d2c227369676e6174757265223a22416951704334585a79456e316e4c72643455487a42486d42756c7169523343462b78594f37516977585a52454f66524c7161357366387068396b64435941412f2f2b55686c697731426f756c2f4632374a6d4d3258673d3d227d5d2c226d656d6f223a22e5a487e6b3a8227d7d',function(result){
     console.log(result)
   })
}