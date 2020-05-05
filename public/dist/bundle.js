/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/imports/es2015.ts":
/*!*******************************!*\
  !*** ./src/imports/es2015.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./src/imports/esModules.ts":
/*!**********************************!*\
  !*** ./src/imports/esModules.ts ***!
  \**********************************/
/*! exports provided: PI, area, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PI", function() { return PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "area", function() { return area; });
var PI = 3.141592;
function area(_a) {
    var radius = _a.radius;
    return PI * Math.pow(radius, 2);
}
/* harmony default export */ __webpack_exports__["default"] = (function (a, b) { return a.radius === b.radius; });


/***/ }),

/***/ "./src/imports/typescript_hunds_on.ts":
/*!********************************************!*\
  !*** ./src/imports/typescript_hunds_on.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imports_typescript_hunds_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imports/typescript_hunds_on */ "./src/imports/typescript_hunds_on.ts");
/* harmony import */ var _imports_typescript_hunds_on__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_imports_typescript_hunds_on__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imports_es2015__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imports/es2015 */ "./src/imports/es2015.ts");
/* harmony import */ var _imports_es2015__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imports_es2015__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _imports_esModules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imports/esModules */ "./src/imports/esModules.ts");


function getPrefecture(profile) {
    return profile.residence.prefecture;
}
console.log(getPrefecture({
    residence: {
        prefecture: '東京都',
        city: '新宿区',
    }
}));
// ES Modules

var circleA = { radius: 3 };
Object(_imports_esModules__WEBPACK_IMPORTED_MODULE_2__["area"])(circleA);
function circumference(_a) {
    var radius = _a.radius;
    return 2 * _imports_esModules__WEBPACK_IMPORTED_MODULE_2__["PI"] * Math.pow(radius, 2);
}
Object(_imports_esModules__WEBPACK_IMPORTED_MODULE_2__["default"])(circleA, {
    radius: 4,
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltcG9ydHMvZXMyMDE1LnRzIiwid2VicGFjazovLy8uL3NyYy9pbXBvcnRzL2VzTW9kdWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1wb3J0cy90eXBlc2NyaXB0X2h1bmRzX29uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsb0JBQW9CO0FBQ3BCLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQixJQUFJO0FBRUosMkJBQTJCO0FBRTNCLGFBQWE7QUFDYiwwQ0FBMEM7QUFDMUMsd0NBQXdDO0FBQ3hDLDRCQUE0QjtBQUM1QixtREFBbUQ7QUFDbkQsUUFBUTtBQUNSLDREQUE0RDtBQUM1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QUFDWCw2QkFBNkI7QUFDN0IsU0FBUztBQUNULHdDQUF3QztBQUN4QyxPQUFPO0FBRVAsV0FBVztBQUVYLHdDQUF3QztBQUN4QyxzQ0FBc0M7QUFDdEMsdUJBQXVCO0FBQ3ZCLE1BQU07QUFDTix3QkFBd0I7QUFDeEIsSUFBSTtBQUVKLDhDQUE4QztBQUM5QyxxQ0FBcUM7QUFDckMsSUFBSTs7Ozs7Ozs7Ozs7OztBQy9QSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDYjtBQVMxQixTQUFTLGFBQWEsQ0FBQyxPQUFnQjtJQUNyQyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO0FBQ3RDLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUN4QixTQUFTLEVBQUU7UUFDVCxVQUFVLEVBQUUsS0FBSztRQUNqQixJQUFJLEVBQUUsS0FBSztLQUNaO0NBQ0YsQ0FBQyxDQUFDLENBQUM7QUFFSixhQUFhO0FBQ2tEO0FBRS9ELElBQU0sT0FBTyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtBQUM3QiwrREFBSSxDQUFDLE9BQU8sQ0FBQztBQUViLFNBQVMsYUFBYSxDQUFDLEVBQWtCO1FBQWhCLGtCQUFNO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLHFEQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVELGtFQUFNLENBQUMsT0FBTyxFQUFFO0lBQ2QsTUFBTSxFQUFFLENBQUM7Q0FDVixDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyAvLyBTcHJlYWRPcGVyYXRvclxuLy8gY29uc3QgZm9vID0geyBmb286IDEgfVxuLy8gY29uc3QgYmFyID0geyBiYXI6IDIgfVxuLy8gY29uc3QgbmV3T2JqZWN0ID0ge1xuLy8gICAuLi5mb28sIC4uLmJhciwgYnV6OiAzXG4vLyB9XG5cbi8vIGNvbnNvbGUubG9nKHtuZXdPYmplY3R9KVxuXG4vLyAvLyBwcm9taXNlXG4vLyBnZXQoJ2h0dHBzOi8vZXhhbXBsZS5jb20vYXBpcy9uYW1lcy8xJylcbi8vICAgLnRoZW4oKHsgc3RhdHVzLCB0ZXh0OiBuYW1lIH0pID0+IHtcbi8vICAgICBpZiAoc3RhdHVzICE9PSAyMDApIHtcbi8vICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnY2FuIG5vdCBnZXQgbmFtZScpO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gZ2V0KGBodHRwczovL2V4YW1wbGUuY29tL2FwaXMvYm9va3MvJHtuYW1lfWApO1xuLy8gICB9KVxuLy8gICAudGhlbigoeyBzdGF0dXMsIHRleHQ6IGJvb2sgfSkgPT4ge1xuLy8gICAgIGlmIChzdGF0dXMgIT09IDIwMCkge1xuLy8gICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdjYW4gbm90IGdldCBib29rJyk7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBnZXQoYGh0dHBzOi8vZXhhbXBsZS5jb20vYXBpcy9wYWdlcy8ke2Jvb2t9YCk7XG4vLyAgIH0pXG4vLyAgIC5jYXRjaChlID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhlKVxuLy8gICB9KTtcblxuLy8gZnVuY3Rpb24gZ2V0KCkge1xuLy8gICAvLyBkbyBhamF4XG4vLyAgIC8vIHJldHVybiBwcm9taXNlO1xuLy8gfVxuXG4vLyAvLyBhc3luYy9hd2FpdO+8iGVzMjAxN++8iVxuLy8gLy8g6Z2e5ZCM5pyf5Yem55CG44GZ44KL44Gq44KJ5Z+65pys44GT44Gj44Gh44Gn44CCXG5cbi8vIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4vLyAgIGNvbnN0IHtzdGF0dXMsIHRleHR9ID0gYXdhaXQgZ2V0KCdodHRwczovL2V4YW1wbGUuY29tL2FwaXMvbmFtZXMvMScpO1xuLy8gICAvLyBob2dlXG4vLyB9XG5cbiIsImV4cG9ydCBjb25zdCBQSSA9IDMuMTQxNTkyO1xuXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZSB7XG4gIHJhZGl1czogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlYSh7IHJhZGl1cyB9OiBDaXJjbGUpIHtcbiAgcmV0dXJuIFBJICogTWF0aC5wb3cocmFkaXVzLCAyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGE6IENpcmNsZSwgYjogQ2lyY2xlKSA9PiBhLnJhZGl1cyA9PT0gYi5yYWRpdXM7IiwiLy8gY29uc29sZS5sb2coJ2hvZ2UhIScpO1xuXG4vLyAvLyDwn5OL5piO56S655qE44Gq5Z6L5LuY44GRXG4vLyBsZXQgYTogbnVtYmVyO1xuLy8gYSA9IDQyO1xuLy8gYSA9ICc0Mic7XG5cbi8vIGZ1bmN0aW9uIGRvdWJsZShuOiBudW1iZXIpOiBudW1iZXIge1xuLy8gICByZXR1cm4gMiAqIG47XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVycm9yRnVuYyhuOiBudW1iZXIpOiBudW1iZXIge1xuLy8gICByZXR1cm4gbi50b1N0cmluZygpO1xuLy8gfVxuXG4vLyAvLyDwn5OL5pqX6buZ55qE44Gq5Z6L5LuY44GRXG4vLyBsZXQgYiA9IDQyO1xuLy8gYiA9ICc0Mic7XG5cbi8vIGZ1bmN0aW9uIGRvdWJsZTIobjogbnVtYmVyKSB7XG4vLyAgIHJldHVybiAyICogbjtcbi8vIH1cblxuLy8gbGV0IGMgPSBkb3VibGUyKDEpO1xuLy8gYyA9IHRydWU7XG5cbi8vIC8vIPCfk4vln7rnpI7nmoTjgarlnotcbi8vIC8vIFRPRE86IOOBqOOCiuOBguOBiOOBmuOBluOBo+OBqOiqreOCk+OBoOOBoOOBkVxuXG4vLyAvLyDwn5OL5paw44Gf44Gq5Z6L44KS5L2c5oiQ44GZ44KLXG4vLyAvLyBpbnRlcmZhY2Vcbi8vIGludGVyZmFjZSBSZWN0IHtcbi8vICAgbGVuZ3RoOiBudW1iZXI7XG4vLyAgIHdpZHRoOiBudW1iZXI7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGFyZWEocmVjdDogUmVjdCkge1xuLy8gICByZXR1cm4gcmVjdC5sZW5ndGggKiByZWN0LndpZHRoO1xuLy8gfVxuXG4vLyB2YXIgYSA9IGFyZWEoe2xlbmd0aDogMywgd2lkdGg6IDR9KTtcbi8vIHZhciBiID0gYXJlYSh7bGVuZ3RoOiAzfSk7XG4vLyB2YXIgYyA9IGFyZWEoe3dpZHRoOiA0fSk7XG4vLyB2YXIgZCA9IGFyZWEoe2xlbmd0aDogMywgd2lkdGg6IDQsIGV4dHJhOiAnZm9vJ30pO1xuXG4vLyAvLyDku7vmhI/jga7mjIflrprjgpLoqLHlj6/jgZnjgovjgIw/44CNXG4vLyBpbnRlcmZhY2UgTmV0d29ya09wdGlvbnMge1xuLy8gICB0aW1lb3V0PzogbnVtYmVyO1xuLy8gICBudW1vZlJldHJ5PzogbnVtYmVyO1xuLy8gfVxuXG4vLyB2YXIgb3B0aW9uczAxOiBOZXR3b3JrT3B0aW9ucyA9IHtcblxuLy8gfTtcblxuLy8gdmFyIG9wdGlvbnMwMjogTmV0d29ya09wdGlvbnMgPSB7XG4vLyAgIHRpbWVvdXQ6IDMwMDBcbi8vIH07XG5cbi8vIHZhciBvcHRpb25zMDM6IE5ldHdvcmtPcHRpb25zID0ge1xuLy8gICBudW1vZlJldHJ5OiAzLFxuLy8gfVxuXG4vLyB2YXIgb3B0aW9uczA0OiBOZXR3b3JrT3B0aW9ucyA9IHtcbi8vICAgdGltZW91dDogMzAwMCxcbi8vICAgbnVtb2ZSZXRyeTogMyxcbi8vIH1cblxuLy8gdmFyIG9wdGlvbnMwNTogTmV0d29ya09wdGlvbnMgPSB7XG4vLyAgIHRpbWVvdXQ6IDMwMDAsXG4vLyAgIG51bW9mUmV0cnk6IDMsXG4vLyAgIGZvbzogMVxuLy8gfVxuXG4vLyAvLyDplqLmlbDjga7lnovlrprnvqlcbi8vIGludGVyZmFjZSBOdW1lcmljYWxNYXAge1xuLy8gICAobjogbnVtYmVyKTogbnVtYmVyO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBkb3VibGVDYWxsKG46IG51bWJlciwgbnVtZXJpY2FsTWFwOiBOdW1lcmljYWxNYXApIHtcbi8vICAgcmV0dXJuIG51bWVyaWNhbE1hcChudW1lcmljYWxNYXAobikpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBkb3VibGUzKG46IG51bWJlcikge1xuLy8gICByZXR1cm4gMiAqIG47XG4vLyB9XG5cbi8vIGRvdWJsZUNhbGwoMywgZG91YmxlMyk7XG5cbi8vIGZ1bmN0aW9uIGNvbmNhdChzdHI6IHN0cmluZykge1xuLy8gICByZXR1cm4gc3RyICsgc3RyO1xuLy8gfVxuXG4vLyBkb3VibGVDYWxsKDMsIGNvbmNhdCk7XG5cbi8vIC8vIFR5cGUgQWxpYXNpbmdcbi8vIHR5cGUgSWQgPSBudW1iZXJcblxuLy8gLy8g44Oq44OG44Op44Or5Z6LXG4vLyB0eXBlIE9uZSA9IDE7XG4vLyB0eXBlIEZvbyA9ICdmb28nO1xuXG4vLyB2YXIgb25lOiBPbmUgPSAyO1xuLy8gdmFyIGZvbzogRm9vID0gJ2Jhcic7XG5cbi8vIC8vIFVuaW9uIFR5cGVz77yI6ZuG5ZCI6KuW44Gr44GK44GR44KL5ZKM6ZuG5ZCI44CN77yJXG4vLyB0eXBlIEFjdGlvbiA9IHtcbi8vICAgdHlwZTogJ2luY3JlbWVudCc7XG4vLyB9IHwge1xuLy8gICB0eXBlOiAnYWRkJztcbi8vICAgcGF5bG9hZDogbnVtYmVyO1xuLy8gfTtcblxuLy8gZnVuY3Rpb24gaW5jcmVtZW50KHN0YXRlOiBudW1iZXIsIGFjdGlvbjogQWN0aW9uKSB7XG4vLyAgIC8vIGFjdGlvbi5wYXlsb2Fk44Gu5pyJ54Sh44KS5qSc55+lXG4vLyAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbi8vICAgICBjYXNlICdpbmNyZW1lbnQnOlxuLy8gICAgICAgcmV0dXJuIHN0YXRlICsgMTtcbi8vICAgICBjYXNlICdhZGQnOlxuLy8gICAgICAgcmV0dXJuIHN0YXRlICsgYWN0aW9uLnBheWxvYWQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gLy8gRklYTUU6IEdlbmVyaWNzXG4vLyBpbnRlcmZhY2UgU2FtZVR5cGVGdW5jdGlvbjxUPiB7XG4vLyAgIChzcmM6IFQpOiBUO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBkb3VibGVDYWxsMjxUPihzcmM6IFQsIGZ1bmM6IFNhbWVUeXBlRnVuY3Rpb248VD4pIHtcbi8vICAgcmV0dXJuIGZ1bmMoZnVuYyhzcmMpKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZG91YmxlNChuOiBudW1iZXIpIHtcbi8vICAgcmV0dXJuIDIgKiBuO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBjb25jYXQyKHN0cjogc3RyaW5nKSB7XG4vLyAgIHJldHVybiBzdHIgKyBzdHI7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHRvU3RyaW5nKG46IG51bWJlcikge1xuLy8gICByZXR1cm4gbi50b1N0cmluZygpO1xuLy8gfVxuXG4vLyBkb3VibGVDYWxsMjxudW1iZXI+KDIsIGRvdWJsZSk7XG4vLyBkb3VibGVDYWxsMigyLCBkb3VibGUpO1xuXG4vLyBkb3VibGVDYWxsMignYWJjJywgY29uY2F0Mik7XG4vLyBkb3VibGVDYWxsMigyLCB0b1N0cmluZyk7XG5cbi8vIC8vIPCfk4tub1VudXNlZFBhcmFtZXRlcnPjgqrjg5fjgrfjg6fjg7PjgajjgqLjg7Pjg4Djg7zjg5Djg7xcbi8vIGZ1bmN0aW9uIGRvdWJsZTUobjogbnVtYmVyLCBleHRyYTogc3RyaW5nKSB7XG4vLyAgIHJldHVybiAyICogbjtcbi8vIH1cblxuLy8gdmFyIGV2ZW5zID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXS5maWx0ZXIoZnVuY3Rpb24gKF92YWx1ZSwgaW5kZXgpIHtcbi8vICAgcmV0dXJuIGluZGV4ICUgMiA9PT0gMDtcbi8vIH0pXG5cbi8vIC8vIPCfk4tPcHRpb25hbCBDaGFpbmluZ1xuLy8gaW50ZXJmYWNlIE9wdGlvbnMwNiB7XG4vLyAgIGFjdGlvbnM/OiB7XG4vLyAgICAgY2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gLy8gZnVuY3Rpb24gYXJlYTIocHJvcHM6IE9wdGlvbnMwNikge1xuLy8gLy8gICBpZiAocHJvcHMuYWN0aW9ucykge1xuLy8gLy8gICAgIHByb3BzLmFjdGlvbnMuY2FsbGJhY2soKVxuLy8gLy8gICB9XG4vLyAvLyB9XG5cbi8vIC8vIOKGk+KGk+KGk+KGk+KGk1xuXG4vLyBmdW5jdGlvbiBhcmVhMihwcm9wczogT3B0aW9uczA2KSB7XG4vLyAgIHByb3BzLmFjdGlvbnM/LmNhbGxiYWNrKClcbi8vIH1cblxuLy8gLy8g8J+Ti0Fzc2V0aW9uIEZ1bmN0aW9uc1xuLy8gaW50ZXJmYWNlIEl0ZW0ge1xuLy8gICBpZDogbnVtYmVyO1xuLy8gICBuYW1lOiBzdHJpbmc7XG4vLyB9XG5cbi8vIC8vIGZ1bmN0aW9uIGdldE5hbWUoaXRlbXM6IEFycmF5PEl0ZW0+LCBpZDogbnVtYmVyKSB7XG4vLyAvLyAgIGNvbnN0IHRhcmdldCA9IGl0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBpZCk7XG5cbi8vIC8vICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4vLyAvLyAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGlzIHBhdGggbXVzdCBub3QgYmUgcmVhY2hlZC4nKVxuLy8gLy8gICB9XG5cbi8vIC8vICAgcmV0dXJuIHRhcmdldC5uYW1lXG4vLyAvLyB9XG5cbi8vIGZ1bmN0aW9uIGFzc2VydElzRGVmaW5lZDxUPih2YWx1ZTogVCk6IGFzc2VydHMgdmFsdWUgaXMgTm9uTnVsbGFibGU8VD4ge1xuLy8gICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuLy8gICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgJ3ZhbHVlJyB0byBiZSBkZWZpbmVkLCBidXQgcmVjZWl2ZWQgJHt2YWx1ZX1gKTtcbi8vICAgfVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXROYW1lKGl0ZW1zOiBBcnJheTxJdGVtPiwgaWQ6IG51bWJlcikge1xuLy8gICBjb25zdCB0YXJnZXQgPSBpdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpO1xuXG4vLyAgIGFzc2VydElzRGVmaW5lZCh0YXJnZXQpO1xuXG4vLyAgIHJldHVybiB0YXJnZXQubmFtZVxuLy8gfVxuXG4vLyAvLyDjg4fjg7zjgr/jgYznibnlrprjga7mnaHku7bjgpLmuoDjgZ/jgZnlv4XopoHjgYzjgYLjgovjgZPjgajjgpLmmI7npLrjgZnjgovpmpvjgavkvb/jgYZcbi8vIGZ1bmN0aW9uIGFzc2VydChjb25kaXRpb246IGFueSwgbWVzc2FnZT86IHN0cmluZyk6IGFzc2VydHMgY29uZGl0aW9uIHtcbi8vICAgaWYgKCFjb25kaXRpb24pIHtcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4vLyAgIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gYXJlYTMobGVuZ3RoOiBudW1iZXIsIHdpZHRoOiBudW1iZXIpIHtcbi8vICAgYXNzZXJ0KDAgPCBsZW5ndGgpO1xuLy8gICBhc3NlcnQoMCA8IHdpZHRoKTtcbiAgXG4vLyAgIHJldHVybiBsZW5ndGggKiB3aWR0aDtcbi8vIH1cblxuLy8gLy8g8J+Ti+WKueeOh+eahOOBquWei+S7mOOBkVxuXG4vLyAvLyAtIOmWouaVsOOBruaIu+OCiuWApOOChOWkieaVsOOBruaWueOBr1R5cGVTY3JpcHTjgavjgojjgovmjqjmuKzjgavjgb7jgYvjgZvjgIHplqLmlbDjga7lvJXmlbDjgYrjgojjgbPjganjgYbjgZfjgabjgoLmmI7npLrnmoTjgarlnovku5jjgZHjgYzlv4XopoHjgavjgarjgovloLTlkIjjgavjga7jgb/jgIHlnovjgpLmm7jjgYTjgabjgYTjgY/jga7jgYzoia/jgYTjgIJcbi8vIC8vIC0g6Zai5pWw44Gu5oi744KK5pel44KS5piO56S655qE44Gr5Z6L5LuY44GR44GX44Gq44GR44KM44Gw44Gq44KJ44Gq44GE5aC05ZCI44CB44Gd44Gu6Zai5pWw44GM6KSH5pWw44Gu5pS/5YuZ44KS5oyB44Gj44Gm44GX44G+44Gj44Gm44GE44KL5aC05ZCI44GM5aSa44GE44CC44Gd44Gu5aC05ZCI44Gy44Go55uu44Gn5Yem55CG5YaF5a6544GM44KP44GL44KL5aSn44GN44GV44Gr5YiH44KK5YiG44GR44KL44G544GX44CCXG5cbi8vIGV4cG9ydCBpbnRlcmZhY2UgUmVhdCB7XG4vLyAgIHdpZHRoOiBudW1iZXI7XG4vLyAgIGxlbmd0aDogbnVtYmVyO1xuLy8gfVxuXG4vLyAvLyBleHBvcnQgdHlwZSBLaW5kID0gJ25hbWUnIHwgJ2FyZWEnO1xuXG4vLyAvLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRJbmZvcm1hdGlvbihyZWN0OiBSZWN0LCBraW5kOiBLaW5kKTogc3RyaW5nIHwgbnVtYmVyIHtcbi8vIC8vICAgaWYgKGtpbmQgPT09ICduYW1lJykge1xuLy8gLy8gICAgIGlmIChyZWN0LndpZHRoID09PSByZWN0Lmxlbmd0aCkge1xuLy8gLy8gICAgICAgcmV0dXJuICdzcXVhcmUnO1xuLy8gLy8gICAgIH1cbi8vIC8vICAgICByZXR1cm4gJ3JlY3RhbmdsZSc7XG4vLyAvLyAgIH1cbi8vIC8vICAgcmV0dXJuIHJlY3Qud2lkdGggKiByZWN0Lmxlbmd0aDtcbi8vIC8vIH1cblxuLy8gLy8g4oaT4oaT4oaT4oaT4oaTXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKHJlY3Q6IFJlYXQpIHtcbi8vICAgaWYgKHJlY3Qud2lkdGggPT09IHJlY3QubGVuZ2h0KSB7XG4vLyAgICAgcmV0dXJuICdzcXVhcmUnO1xuLy8gICB9XG4vLyAgIHJldHVybiAncmVjdGFuZ2xlJztcbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFyZWEocmVjdDogUmVjdCkge1xuLy8gICByZXR1cm4gcmVjdC53aWR0aCAqIHJlY3QubGVuZ3RoO1xuLy8gfVxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgJy4vaW1wb3J0cy90eXBlc2NyaXB0X2h1bmRzX29uJztcbmltcG9ydCAnLi9pbXBvcnRzL2VzMjAxNSc7XG5cbmludGVyZmFjZSBQcm9maWxlIHtcbiAgcmVzaWRlbmNlOiB7XG4gICAgcHJlZmVjdHVyZTogc3RyaW5nO1xuICAgIGNpdHk6IHN0cmluZztcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJlZmVjdHVyZShwcm9maWxlOiBQcm9maWxlKSB7XG4gIHJldHVybiBwcm9maWxlLnJlc2lkZW5jZS5wcmVmZWN0dXJlO1xufVxuXG5jb25zb2xlLmxvZyhnZXRQcmVmZWN0dXJlKHtcbiAgcmVzaWRlbmNlOiB7XG4gICAgcHJlZmVjdHVyZTogJ+adseS6rOmDvScsXG4gICAgY2l0eTogJ+aWsOWuv+WMuicsXG4gIH1cbn0pKTtcblxuLy8gRVMgTW9kdWxlc1xuaW1wb3J0IGVxdWFscywgeyBQSSwgQ2lyY2xlLCBhcmVhIH0gZnJvbSAnLi9pbXBvcnRzL2VzTW9kdWxlcyc7XG5cbmNvbnN0IGNpcmNsZUEgPSB7IHJhZGl1czogMyB9XG5hcmVhKGNpcmNsZUEpXG5cbmZ1bmN0aW9uIGNpcmN1bWZlcmVuY2UoeyByYWRpdXMgfTogQ2lyY2xlKSB7XG4gIHJldHVybiAyICogUEkgKiBNYXRoLnBvdyhyYWRpdXMsIDIpO1xufVxuXG5lcXVhbHMoY2lyY2xlQSwge1xuICByYWRpdXM6IDQsXG59KTsiXSwic291cmNlUm9vdCI6IiJ9