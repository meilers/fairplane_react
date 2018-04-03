const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
	'point axis total candy actor erosion oven awkward anger release whip favorite',
	'https://rinkeby.infura.io/oS95A1ydZVHB81LesT6a'
);

const web3 = new Web3(provider);

const deploy = async () => {
	// Get list of all accounts
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account', accounts[0]);

	// Use one of those accounts to deploy the contract
	const inbox = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode, arguments: ['Hi there!']})
		.send({ gas: '1000000', from: accounts[0] });

	console.log('Contract deployed to', inbox.options.address);
};

deploy();