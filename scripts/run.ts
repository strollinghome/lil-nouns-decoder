import * as fs from "fs";
import { ethers, waffle } from "hardhat";
import { BigNumber } from "ethers";
import { ConstructorFragment } from "ethers/lib/utils";
const { provider } = waffle;
import { SVG } from '@svgdotjs/svg.js'
import { string } from "hardhat/internal/core/params/argumentTypes";

const address: string = "0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b";
const ABI: string = '[{"inputs":[{"internalType":"address","name":"_lilnoundersDAO","type":"address"},{"internalType":"address","name":"_nounsDAO","type":"address"},{"internalType":"address","name":"_minter","type":"address"},{"internalType":"contract INounsDescriptor","name":"_descriptor","type":"address"},{"internalType":"contract INounsSeeder","name":"_seeder","type":"address"},{"internalType":"contract IProxyRegistry","name":"_proxyRegistry","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[],"name":"DescriptorLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract INounsDescriptor","name":"descriptor","type":"address"}],"name":"DescriptorUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"lilnoundersDAO","type":"address"}],"name":"LilNoundersDAOUpdated","type":"event"},{"anonymous":false,"inputs":[],"name":"MinterLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"}],"name":"MinterUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"NounBurned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"uint48","name":"background","type":"uint48"},{"internalType":"uint48","name":"body","type":"uint48"},{"internalType":"uint48","name":"accessory","type":"uint48"},{"internalType":"uint48","name":"head","type":"uint48"},{"internalType":"uint48","name":"glasses","type":"uint48"}],"indexed":false,"internalType":"struct INounsSeeder.Seed","name":"seed","type":"tuple"}],"name":"NounCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"nounsDAO","type":"address"}],"name":"NounsDAOUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"SeederLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract INounsSeeder","name":"seeder","type":"address"}],"name":"SeederUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"nounId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint96","name":"votes","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"dataURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"descriptor","outputs":[{"internalType":"contract INounsDescriptor","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isDescriptorLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isMinterLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSeederLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lilnoundersDAO","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockDescriptor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockSeeder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nounsDAO","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyRegistry","outputs":[{"internalType":"contract IProxyRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seeder","outputs":[{"internalType":"contract INounsSeeder","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"seeds","outputs":[{"internalType":"uint48","name":"background","type":"uint48"},{"internalType":"uint48","name":"body","type":"uint48"},{"internalType":"uint48","name":"accessory","type":"uint48"},{"internalType":"uint48","name":"head","type":"uint48"},{"internalType":"uint48","name":"glasses","type":"uint48"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newContractURIHash","type":"string"}],"name":"setContractURIHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract INounsDescriptor","name":"_descriptor","type":"address"}],"name":"setDescriptor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lilnoundersDAO","type":"address"}],"name":"setLilNoundersDAO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_minter","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nounsDAO","type":"address"}],"name":"setNounsDAO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract INounsSeeder","name":"_seeder","type":"address"}],"name":"setSeeder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"votesToDelegate","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"}]'

async function main() {
  const signer = (await ethers.getSigners())[0];

  const { chainId } = await provider.getNetwork();

  // Initialize LllNouns contract
  const contract = await new ethers.Contract(
    address,
    ABI,
    signer
  );

  const tokenId = 32;

  const base64TokenURI = await contract.callStatic.tokenURI(tokenId);

  const base64JSON = base64TokenURI.split(",")[1];

  let buff = Buffer.from(base64JSON, 'base64');
  const text = buff.toString('ascii');

  const tokenURIJSON = JSON.parse(text);

  const base64SVG = tokenURIJSON.image.split(",")[1];

  buff = Buffer.from(base64SVG, 'base64');
  const svg = buff.toString('ascii');

  svg.split("\n");

  const x = svg.split("<rect").slice(1);

  const regex = RegExp('fill="#[0-9a-f]{6}"');

  var colorMap = new Map<string, number>();

  for (let i = 0; i < x.length; i++) {
    const ex = regex.exec(x[i]);

    if (ex) {
      const match = ex[0];
      const hex = match.substring(6, 13);

      if (colorMap.has(hex)) {
        colorMap.set(hex, (colorMap.get(hex) || 0) + 1);
      } else {
        colorMap.set(hex, 1);
      }

    }
  }

  console.log(`Lil Noun #${tokenId}`);
  fs.writeFileSync(
    `${__dirname}/../lil-nouns/${tokenId}.svg`,
    svg
  );

  console.log(`Stored at "./lil-nouns/${tokenId}.svg`);

  console.log(colorMap);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
