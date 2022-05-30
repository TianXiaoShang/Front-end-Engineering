# 要点速记
## npm i typescript -D 进行typescript的安装
## npx tsc *.ts 进行typescript的编译，同时会做语法降级
## npx tsc --init 生成tsconfig.json配置文件
## npx tsc 编译整个项目，tsconfig配置文件才会生效，单独编译某个文件不会生效ni
## npx tsc --locale zh-CH 可以将编译报错改成中文,vscode中也通过设置中搜索typescript locale查找配置项为zh-CH配置中文

## 关于枚举
`
// 前面加const为常量枚举
// 正常来说枚举的值可以双向选取，作为一个双向键值对的对象存在，当使用const后，则编译后会直接替换使用枚举地方的值，不可以双向选取
const enum PostStatus {   // 数字可以自动累加
    Draft = 5,
    Unpublished,
    Published,
}
`

## 关于对象
`
const foo: object = function () {};   // (小写的o)ts中的Object不是对象类型的意思，是泛指所有非原始类型，包括对象，数组，函数；
`

## 严格模式
`
 const d: string = null;  // 非严格模式下（"strict": false），可以为空；strictNullChecks也可以专门用来检查是否可以为空

`

## 枚举
`
// 前面加const为常量枚举
// 正常来说枚举的值可以双向选取，作为一个双向键值对的对象存在，当使用const后，则编译后会直接替换使用枚举地方的值，不可以双向选取
const enum PostStatus {   // 数字可以自动累加
    Draft = 5,
    Unpublished,
    Published,
}
`


## 类型别名type与接口interface的区别
`
相同点：
都可以用来定义字段和函数类型
都可以扩展，type通过&交叉运算符扩展，interface通过extends扩展
同时，interface可以通过extends扩展type定义的类型别名，type可以通过&交叉u运算符扩展定义的接口类型
不同点：
type类型别名可以为基本类型，联合类型，元祖类型定义别名，接口只能为对象或类等
同名接口会自动合并，而类型别名不可以重复声明
`

## 函数重载
### 在不同入参情况下匹配不同返回值，（通过入参类型进行从上到下的匹配）
### 相比定义入参类型为联合类型的方式，可以更精确的定义返回值类型
`
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

// 通过函数重载，从而推断出返回值的类型
let str = greet('lulu');
let arr = greet(['lulu', 'wuwu']);
`

## 索引签名与模板字面量
`
// 不能确定具体字段时
// 动态接口，表示一个或多个由字符串键跟字符串值组成的对象
interface Cache {
  [prop: string]: string
}


const obj: Cache = {
  a: '1',
  // b: 2,   //报错，不能是number
}

// 模板字面量类型,可以实现更精确的定义
interface Changes {
  [key: `${string}Change`]: () => void
}

const handlers: Changes = {
  idChange: () => {}
}

more: 10-getting-started.ts
`