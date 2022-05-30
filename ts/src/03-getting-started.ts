const a: string = 'a';   // 三个文件的作用域相同，会报错重复定义

// 可以通过export来避免
export {
    a
}