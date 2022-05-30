// interface
export {};

interface Post{
  readonly title: string  // 只读类型
}

// 不能确定具体字段时
// 动态接口（索引签名），表示一个或多个由字符串键跟字符串值组成的对象
interface Cache {
  [prop: string]: string,
  c: string   // 已知的字段可以精确定义，但是因为上面定义了动态字段的值为string，所以这里的字段也只能是string类型
}


const obj: Cache = {
  a: '1',
  // b: 2,   //报错，不能是number
  c: '3',
  '1': 'a'
}


// const v1 = obj[1];   // 存在隐示类型转换。所以可以通过数字访问
const v2 = obj['a'];
type N0 = keyof Cache;

const n: N0 = 1;   // 这里可以赋值，也是隐式类型转换的关系

// 模板字面量类型,可以实现更精确的定义
interface Changes {
  [key: `${string}Change`]: () => void
}

const handlers: Changes = {
  idChange: () => {}
}



// Record类型与索引签名的差异
type r =  Record<'id' | 'name', string>;
type s = {
  // [key: 'id']: string;   // 索引签名的key不能是字面量，而Record可以
  // [key: 'id' | 'name']: string;   // 索引签名的key不能是联合类型，而Record可以
}