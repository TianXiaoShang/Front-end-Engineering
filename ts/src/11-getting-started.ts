// class
export {};

class Person {
  name: string = "lulu";
  private age: number;
  protected gender: boolean;
  readonly like: string = 'food';

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.gender = true;
  }

  sayHi(msg: string) {
    console.log(msg, this.age);
  }
}

const tom = new Person("tom", 18);
console.log(tom.name, 'tom-name');
// console.log(tom.gender, 999)   // protected定义的受保护的属性不可以在外部访问

class Student extends Person {
  private constructor(name: string, age: number) {
    // private定义constructor后，不能直接new实例化，只能通过静态方法实例化
    super(name, age);
    console.log(this.gender); // protected定义的受保护的属性只可以在子类访问
  }

  static create(name: string, age: number) {
    return new Student(name, age);
  }
}

// const jack = new Student();
const jack = Student.create("jack", 19);


// class Test extends Student{} // private的constructor后，该类无法被继承