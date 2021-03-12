// TypeScript로 블록체인 만들기
class Block {
  public index: number;
  public hash: string;
  public previousHash: string; // 이전 해쉬
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}
const hyunBlock: Block = new Block(0, "asd", "", "hi", 123);

let blockchain: [Block] = [hyunBlock]; // array of block

console.log(blockchain);

export {};
