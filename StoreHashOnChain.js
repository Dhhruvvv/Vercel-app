const { ethers } = require('ethers');
const fs = require('fs');
require('dotenv').config();
const { JsonRpcProvider } = require('ethers/providers');

// Your private key
const privateKey = `${process.env.PRIVATE_KEY}`;

// Create an account from the private key
const wallet = new ethers.Wallet(privateKey);

// Connect to the Polygon Testnet Mumbai
const provider = new JsonRpcProvider('https://rpc-mumbai.maticvigil.com');

// Set the wallet as the default signer
const connectedWallet = wallet.connect(provider);

// Read the ABI from a JSON file
const contractABI = JSON.parse(fs.readFileSync('./constants/ABI.json'));

// Replace with your contract address
const contractAddress = '0x1Eb5961b8cB6f054BdF8934D8b12153a97b71c6e';

// Create a contract instance
const contract = new ethers.Contract(contractAddress, contractABI, connectedWallet);

// Function to store a string
async function storeString(newString) {
 try {
     await contract.storeString(newString);
     console.log('String stored successfully');
 } catch (error) {
     console.error('Error while storing string:', error);
 }
}

// Function to retrieve a string
async function getString() {
 try {
     const result = await contract.getString();
     console.log('Stored string:', result);
 } catch (error) {
     console.error('Error while retrieving string:', error);
 }
}

// Usage
// storeString('QmRkMXumNY4aHVQR1owCWKHsrSwemMPHS2vDEaaDNmGv4c');

getString();
