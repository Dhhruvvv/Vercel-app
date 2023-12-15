const axios = require('axios');
const fs = require('fs');

// Your IPFS hash
const ipfsHash = 'QmRvSoppQ5MKfsT4p5Snheae1DG3Af2NhYXWpKNZBvz2Eo';

// The URL of the file on the IPFS network
const ipfsUrl = `https://azure-attractive-ladybug-812.mypinata.cloud/ipfs/QmRkMXumNY4aHVQR1owCWKHsrSwemMPHS2vDEaaDNmGv4c?_gl=1*jkkdbf*_ga*MTU5MzA4NzAxMy4xNjk1MTAwNTAw*_ga_5RMPXG14TE*MTcwMjYzNTg0NC4yOS4xLjE3MDI2MzU4NTQuNTAuMC4w`;

// Download the file
axios({
 url: ipfsUrl,
 method: 'GET',
 responseType: 'stream',
})
.then(response => {
 const writer = fs.createWriteStream('./file');
 response.data.pipe(writer);
 return new Promise((resolve, reject) => {
   writer.on('finish', resolve);
   writer.on('error', reject);
 });
})
.catch(error => console.error('Error while downloading file:', error));
