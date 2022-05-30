// 枚举类型

export {};

// enum PostStatus {
//     Draft = 0,
//     Unpublished = 1,
//     Published = 2,
// }

// 前面加const为常量枚举
// 正常来说枚举的值可以双向选取，作为一个双向键值对的对象存在，当使用const后，则编译后会直接替换使用枚举地方的值，不可以双向选取
const enum PostStatus {   // 数字可以自动累加
    Draft = 5,
    Unpublished,
    Published,
}

const obj = {
    status: PostStatus.Draft
}