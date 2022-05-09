const name = 'lulu'
let age = 18
const obj = {
    num: 1
}

const log = () => {
    console.log(age)
}
const add = () => {
    console.log(age)
    age ++;
}
const logObjNum = () => {
    console.log(obj.num)
}
export {
    name as fooName,
    age as default,
    obj,
    log,
    add,
    logObjNum
}