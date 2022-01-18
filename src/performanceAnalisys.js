const ELEMENTS_QUANTITY = 100000;
const arr = [...Array(ELEMENTS_QUANTITY).keys()];


// CLASSIC FOR
let sum = 0;
let start = performance.now();
const arrLen = arr.length;

for (let index = 0; index < arrLen; index++) {
  sum += arr[index];
}
let duration = performance.now() - start;
console.log("standard 'for' duration:", duration, 'miliseconds');


// FOREACH
sum = 0;
start = performance.now();

arr.forEach((value) => {
  sum += value;
})
duration = performance.now() - start;
console.log("forEach duration:", duration, 'miliseconds');


// FOR...OF
sum = 0;
start = performance.now();

for (const value of arr) {
  sum += value;
}
duration = performance.now() - start;
console.log("for...of duration:", duration, 'miliseconds');


// FOR...IN
sum = 0;
start = performance.now();

for (let index in arr) {
  sum += arr[index];
}
duration = performance.now() - start;
console.log("for...in duration:", duration, 'miliseconds');
