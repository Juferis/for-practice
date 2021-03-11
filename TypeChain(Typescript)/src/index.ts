interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Hyun Jin",
  age: 26,
  gender: "male",
};

const sayHello = (person: Human): string => {
  // person 오브젝트를 Human이라는 인터페이스 정의로 넣는다.
  return `Hello! ${person.name} you are ${person.age} and you are ${person.gender}!`;
};

console.log(sayHello(person));

export {}; // 위 코드들이 모듈이 된다고 알려주는 typescript 규칙
