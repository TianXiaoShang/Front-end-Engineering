// 抽象类
export {};

// 只能被继承，不能通过new创建实例
abstract class Animal {
  eat(food: string): void {
    console.log("huluhulu");
  }
  abstract run(distance: number): void;
}

// 继承抽象类要实现父级定义的抽象方法
class Dog extends Animal {
  run(distance: number): void {
    console.log("distance", distance);
  }
}
