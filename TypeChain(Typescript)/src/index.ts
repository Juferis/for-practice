// TypeScript로 블록체인 만들기
import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string; // 이전 해쉬
  public data: string;
  public timestamp: number;

  // static이기에 Block 밖에서 사용이 가능하다.
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  // 들어온 블록의 구조가 유요한지 확인
  static validateStructure = (aBlock: Block): Boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";

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
// hyunBlock의 타입은 class Block이고 new Block로 새로운 블록을 만듦
const hyunBlock: Block = new Block(0, "asd", "", "hi", 123);

let blockchain: Block[] = [hyunBlock]; // array of block

// 블록체인의 길이를 알아야 다른 블록을 추가할 수 있다.
const getBlockchain = (): Block[] => blockchain;
// 가장 최근의 블록을 확인
const getLastBlockchain = (): Block => blockchain[blockchain.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);
// Math.floor() : 소수점 이하를 버림한다.
// Math.ceil() : 소수점 이하를 올림한다.
// Math.round() : 소수점 이하를 반올림한다.
const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLastBlockchain();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );
  addBlock(newBlock);
  return newBlock;
};

const getHashforBlock = (aBlock: Block): string =>
  Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );

const isBlockValid = (cadidateBlock: Block, previousBlock: Block): Boolean => {
  // 첫 번째의 블록이 유효한지 체크
  if (!Block.validateStructure(cadidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== cadidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== cadidateBlock.previousHash) {
    return false;
  } else if (getHashforBlock(cadidateBlock) !== cadidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLastBlockchain())) {
    blockchain.push(candidateBlock);
  }
};

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockchain);

export {};
