const hello = (name: string) => {   // 编译的过程会去掉类型注释，还原成原生js
    console.log(`heelo, ${name}`)
}

hello('typeScript')   // 错误的类型会报错