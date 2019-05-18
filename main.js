const Blockchain = require("./blockchain").Blockchain;
const Block = require("./blockchain").Block;

console.log("RUN BLOCKCHAIN ...");

var index = 1;
const network = new Blockchain();

while (1) {
  //
  let newBlock = new Block(
    index,
    "18/05/2019",
    "Create Blocks",
    network.getLatestBlock().calculateHash()
  );

  network.addBlock(newBlock);

  index++;

  console.log(newBlock, index - 1);
}
