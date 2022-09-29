// // Promise
// const condition = true;

// const promise = new Promise((resolve, reject) => {
//     condition ? resolve('success') : reject('fail');
// });

// promise
// .then(msg => console.log(msg))
// .catch(err => console.error(err))
// .finally(() => console.log('무조건'))


// // Timer
// new Promise((resolve, reject) =>
// setTimeout(() => resolve("Success"), 3000))
// .then(msg => console.log(msg));

// console.log("Timer in action");


// Chain
// // Promise객체들은 백그라운드에서 대기하다가 전역에서의 호출 스택이 다 끝나면 실행된다.
// new Promise((resolve, reject) => {
//     resolve('a');
// }).then(msg => {
//     return new Promise((resolve, reject) => {
//         resolve(msg + 'b');
//         reject('fail');
//     });
// }).then(msg => {
//     return new Promise((resolve, reject) => {
//         resolve(msg + 'c');
//     });
// }).then(msg => {
//     return new Promise((resolve, reject) => {
//         console.log(msg);
//     });
// }).catch(err => console.error(err));

// for (let i = 0; i < 1000; i++) {
//     console.log(`loop: ${i}`);
// }




var promise1 = Promise.resolve('success1');
var promise2 = Promise.resolve('success2');

Promise.all([promise1, promise2]) // 다 끝나고 실행
.then(msg => console.log(msg))
.catch(err => console.error(err));

var promise1 = Promise.resolve('success1');
var promise2 = Promise.resolve('success2');

const f = async () => { // 순서대로 실행
    for await (msg of [promise1, promise2]) {
        console.log(msg);
    }
}

f()