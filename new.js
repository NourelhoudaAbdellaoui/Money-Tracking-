//Enable Web3
async function loadWeb3(){
    if(window.ethereum) {
        window.web3 = new Web3(window.ethereum);
    }
}
// Load Contract
async function loadContract(){
    return await new window.web3.eth.Contract(
        [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "addPerson",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "people",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "sender_address",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
       
        
       
   
        ,'0x852CfaD83C6cC58FC0Ae9F6d0ce355b72afe819C');
}

// Read data from the contract
async function getFunction() {
    for (let i = 1; i <= 100; i++) {
        get = await window.contract.methods.people(i).call();
        if ( get[0] != 0 ){ // Continue for a loop until the ID is not equal to 0.
            document.getElementById('people' +i).innerHTML = get[1] + ": ";
            document.getElementById('price' +i).innerHTML = get[2]/1000000000000000000 + " ("; // Change wei to ETH
            document.getElementById('address' +i).innerHTML = get[3] + ") <br>";
        } else break;
    }
}
// Load all functions
async function load(){
    await loadWeb3(); //Enable Web3
    window.contract = await loadContract(); //Load Contract
    getFunction(); //Read data from the contract
}
load();
// Connect to MetaMask by clicking connect button. 
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
ethereumButton.addEventListener('click', () => {
    getAccount();
});
// Get the user's wallet address
async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    showAccount.innerHTML = accounts;
    return account = accounts[0];
}
// Donate function
async function donateFunction() {
    $name = document.getElementById('your_name').value;
    $wei = document.getElementById('your_eth').value;
    $eth = $wei * 1000000000000000000; // Change wei to ETH
    $account = await getAccount();
    set = await window.contract.methods.addPerson($name).send(
        { 
            from: $account,
            value: $eth
        }
    );
}