const name = "Hyun",
  age = 26,
  gender = "male";

const sayHello = (name: string, age: number, gender?: string): string => {
  // ?를 달면 없어도 된다는 뜻이기에 실행이 가능해진다.
  return `Hello! ${name} you are ${age} and you are ${gender}!`;
};

console.log(sayHello(name, age, gender));

export {}; // 위 코드들이 모듈이 된다고 알려주는 typescript 규칙