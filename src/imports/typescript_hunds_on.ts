// console.log('hoge!!');

// // 📋明示的な型付け
// let a: number;
// a = 42;
// a = '42';

// function double(n: number): number {
//   return 2 * n;
// }

// function errorFunc(n: number): number {
//   return n.toString();
// }

// // 📋暗黙的な型付け
// let b = 42;
// b = '42';

// function double2(n: number) {
//   return 2 * n;
// }

// let c = double2(1);
// c = true;

// // 📋基礎的な型
// // TODO: とりあえずざっと読んだだけ

// // 📋新たな型を作成する
// // interface
// interface Rect {
//   length: number;
//   width: number;
// }

// function area(rect: Rect) {
//   return rect.length * rect.width;
// }

// var a = area({length: 3, width: 4});
// var b = area({length: 3});
// var c = area({width: 4});
// var d = area({length: 3, width: 4, extra: 'foo'});

// // 任意の指定を許可する「?」
// interface NetworkOptions {
//   timeout?: number;
//   numofRetry?: number;
// }

// var options01: NetworkOptions = {

// };

// var options02: NetworkOptions = {
//   timeout: 3000
// };

// var options03: NetworkOptions = {
//   numofRetry: 3,
// }

// var options04: NetworkOptions = {
//   timeout: 3000,
//   numofRetry: 3,
// }

// var options05: NetworkOptions = {
//   timeout: 3000,
//   numofRetry: 3,
//   foo: 1
// }

// // 関数の型定義
// interface NumericalMap {
//   (n: number): number;
// }

// function doubleCall(n: number, numericalMap: NumericalMap) {
//   return numericalMap(numericalMap(n));
// }

// function double3(n: number) {
//   return 2 * n;
// }

// doubleCall(3, double3);

// function concat(str: string) {
//   return str + str;
// }

// doubleCall(3, concat);

// // Type Aliasing
// type Id = number

// // リテラル型
// type One = 1;
// type Foo = 'foo';

// var one: One = 2;
// var foo: Foo = 'bar';

// // Union Types（集合論における和集合」）
// type Action = {
//   type: 'increment';
// } | {
//   type: 'add';
//   payload: number;
// };

// function increment(state: number, action: Action) {
//   // action.payloadの有無を検知
//   switch (action.type) {
//     case 'increment':
//       return state + 1;
//     case 'add':
//       return state + action.payload;
//   }
// }

// // FIXME: Generics
// interface SameTypeFunction<T> {
//   (src: T): T;
// }

// function doubleCall2<T>(src: T, func: SameTypeFunction<T>) {
//   return func(func(src));
// }

// function double4(n: number) {
//   return 2 * n;
// }

// function concat2(str: string) {
//   return str + str;
// }

// function toString(n: number) {
//   return n.toString();
// }

// doubleCall2<number>(2, double);
// doubleCall2(2, double);

// doubleCall2('abc', concat2);
// doubleCall2(2, toString);

// // 📋noUnusedParametersオプションとアンダーバー
// function double5(n: number, extra: string) {
//   return 2 * n;
// }

// var evens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function (_value, index) {
//   return index % 2 === 0;
// })

// // 📋Optional Chaining
// interface Options06 {
//   actions?: {
//     callback: () => void;
//   }
// }

// // function area2(props: Options06) {
// //   if (props.actions) {
// //     props.actions.callback()
// //   }
// // }

// // ↓↓↓↓↓

// function area2(props: Options06) {
//   props.actions?.callback()
// }

// // 📋Assetion Functions
// interface Item {
//   id: number;
//   name: string;
// }

// // function getName(items: Array<Item>, id: number) {
// //   const target = items.find(item => item.id === id);

// //   if (target == null) {
// //     throw new Error('this path must not be reached.')
// //   }

// //   return target.name
// // }

// function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
//   if (value === undefined || value === null) {
//     throw new Error(`Expected 'value' to be defined, but received ${value}`);
//   }
// }

// function getName(items: Array<Item>, id: number) {
//   const target = items.find(item => item.id === id);

//   assertIsDefined(target);

//   return target.name
// }

// // データが特定の条件を満たす必要があることを明示する際に使う
// function assert(condition: any, message?: string): asserts condition {
//   if (!condition) {
//     throw new Error(message);
//   }
// }

// function area3(length: number, width: number) {
//   assert(0 < length);
//   assert(0 < width);
  
//   return length * width;
// }

// // 📋効率的な型付け

// // - 関数の戻り値や変数の方はTypeScriptによる推測にまかせ、関数の引数およびどうしても明示的な型付けが必要になる場合にのみ、型を書いていくのが良い。
// // - 関数の戻り日を明示的に型付けしなければならない場合、その関数が複数の政務を持ってしまっている場合が多い。その場合ひと目で処理内容がわかる大きさに切り分けるべし。

// export interface Reat {
//   width: number;
//   length: number;
// }

// // export type Kind = 'name' | 'area';

// // export default function getInformation(rect: Rect, kind: Kind): string | number {
// //   if (kind === 'name') {
// //     if (rect.width === rect.length) {
// //       return 'square';
// //     }
// //     return 'rectangle';
// //   }
// //   return rect.width * rect.length;
// // }

// // ↓↓↓↓↓

// export function getName(rect: Reat) {
//   if (rect.width === rect.lenght) {
//     return 'square';
//   }
//   return 'rectangle';
// }

// export function calculateArea(rect: Rect) {
//   return rect.width * rect.length;
// }










