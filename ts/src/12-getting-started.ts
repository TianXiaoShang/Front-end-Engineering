// class
export {};

interface Eat {
  eat(food: string): void;
}

interface Run {
  run(distance: number): void;
}

class Person implements Eat, Run {
  eat(food: string): void {
    console.log("person", food);
  }
  run(distance: number) {
    console.log("直立", distance);
  }
}

class Animal implements Eat, Run {
  eat(food: string): void {
    console.log("animal", food);
  }
  run(distance: number) {
    console.log("直立", distance);
  }
}
