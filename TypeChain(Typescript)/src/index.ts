class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    // 클래스가 시작할 때마다 호출되는 method
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const person = new Human("Hyun Jin", 26, "male");

const sayHello = (person: Human): string => {
  // person 오브젝트를 Human이라는 인터페이스 정의로 넣는다.
  return `Hello! ${person.name} you are ${person.age} and you are ${person.gender}!`;
};

console.log(sayHello(person));

export {}; // 위 코드들이 모듈이 된다고 알려주는 typescript 규칙
