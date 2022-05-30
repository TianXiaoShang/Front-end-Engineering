const a: string = 'foobar';
const b: number = 100;  // number | NaN | Infinity;
const c: boolean = true;
// const d: string = null;  // 非严格模式下（"strict": false），可以为空；strictNullChecks也可以专门用来检查是否可以为空
const e: void = undefined;    // 可以为undefined | null，严格模式下只能为undefined;
const f: null = null;
const g: undefined = undefined;
const h: symbol = Symbol();

