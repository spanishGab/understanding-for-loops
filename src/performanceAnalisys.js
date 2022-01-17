const arr = [...Array(10).keys()];

let sum = 0;
let start = performance.now();
const arrLen = arr.length;

for (let index = 0; index < arrLen; index++) {
  sum += arr[index];
}
let duration = performance.now() - start;
console.log("standard 'for' duration:", duration, 'miliseconds');


sum = 0;
start = performance.now();

arr.forEach((value) => {
  sum += value;
})
duration = performance.now() - start;
console.log("forEach duration:", duration, 'miliseconds');


sum = 0;
start = performance.now();

for (const value of arr) {
  sum += value;
}
duration = performance.now() - start;
console.log("for...of duration:", duration, 'miliseconds');


sum = 0;
start = performance.now();

for (let index in arr) {
  sum += arr[index];
}
duration = performance.now() - start;
console.log("for...in duration:", duration, 'miliseconds');

