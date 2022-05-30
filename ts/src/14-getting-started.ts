// 类型声明
export {};

// lodash没有相关类型声明，可以通过npm i @types/loadsh --dev单独来声明,此时就会有类型提示
import { camelCase } from "lodash";

const res = camelCase("hello xiaowu");
