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

export {};
