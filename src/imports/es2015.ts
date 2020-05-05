// // SpreadOperator
// const foo = { foo: 1 }
// const bar = { bar: 2 }
// const newObject = {
//   ...foo, ...bar, buz: 3
// }

// console.log({newObject})

// // promise
// get('https://example.com/apis/names/1')
//   .then(({ status, text: name }) => {
//     if (status !== 200) {
//       return Promise.reject('can not get name');
//     }
//     return get(`https://example.com/apis/books/${name}`);
//   })
//   .then(({ status, text: book }) => {
//     if (status !== 200) {
//       return Promise.reject('can not get book');
//     }
//     return get(`https://example.com/apis/pages/${book}`);
//   })
//   .catch(e => {
//     console.log(e)
//   });

// function get() {
//   // do ajax
//   // return promise;
// }

// // async/await（es2017）
// // 非同期処理するなら基本こっちで。

// const getData = async () => {
//   const {status, text} = await get('https://example.com/apis/names/1');
//   // hoge
// }

