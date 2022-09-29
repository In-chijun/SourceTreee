let v = 0;

const k1 = setInterval(() => v -= 1, 2000); //반복하라는 뜻
const k2 = setInterval(() => v += 1, 1000);

const promise = new Promise(
    resolve => setInterval(() => resolve(), 3500)) //resolve는 한 번만 호출될 수 있으므로, setInterval로 반복해도 의미가 없다.
.then(() => {
        clearInterval(k1); //반복을 멈추라는 뜻
        return new Promise(
            (_, reject) => setTimeout(() => reject(), 1500));
})
.then(() => v += 5)
.catch(() => clearInterval(k2))
.finally(() => v *= 2);

setTimeout(() => console.log(v), 5000);

// 프로미스 객체가 우선권을 가지고 있다.