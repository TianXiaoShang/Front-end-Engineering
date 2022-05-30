// 
export {};

// 函数重载

// function greet(person: string): number;  // 这里若第一个定义，则匹配该重载，且定义返回值为number；
function greet(person: string): string;
function greet(person: string[]): string[];

function greet(person: unknown): unknown{
    if(typeof person === 'string'){
        return `hello ${person}`
    }else if(Array.isArray(person)){
        return person.map(name => `hello ${name}!`)
    }
    throw new Error('unable to greet')
}

// 通过函数重载，声明多种可能的入参与返回值，通过定义的先后顺序对入参进行匹配，匹配第一个对应入参对应类型的重载。
// 从而推断出返回值的类型
// let num = greet(89);   // 没有匹配到支持number的重载定义，报错
let str = greet('lulu');
let arr = greet(['lulu', 'wuwu']);


// 使用字符串上不存在的方法报错
// str.map


// 相比如下使用简单的联合类型定义，函数重载可用于定义更多更复杂的类型声明
function greet2(person: string | string[]): string | string[]{
    if(typeof person === 'string'){
        return `hello ${person}`
    }else if(Array.isArray(person)){
        return person.map(name => `hello ${name}!`)
    }
    throw new Error('unable to greet')
}