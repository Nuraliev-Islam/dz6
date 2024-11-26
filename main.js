const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const timer = document.getElementById('timer');
let n = 0


const FormatNum = (num) => {
    if (num < 10) {
        return `0,${num}`
    } else {
        return num
    }
}

let inter1 = setInterval(() => {
    let now = new Date();
    let islam = new Date(2025, 6, 6);
    let difference = islam.getTime() - now.getTime();
    day.textContent = FormatNum(Math.floor(difference / 1000 / 60 / 60 / 24));
    hour.textContent = FormatNum(Math.floor((difference / 1000 / 60 / 60) % 24));
    minute.textContent = FormatNum(Math.floor((difference / 1000 / 60) % 60))
    second.textContent = FormatNum(Math.floor((difference / 1000) % 60));
    let end = [day.textContent, hour.textContent, minute.textContent, second.textContent]
}, 1000);

let b = setInterval(() => {
    if (second.textContent == '0,0' && hour.textContent == '0,0' && minute.textContent == '0,0' && day.textContent == '0,0') {
        let h = document.createElement('h1');
        h.textContent = "HAPPY BIRTHDAY!!!!";
        timer.append(h)
        n = 1;
        clearInterval(inter1)
    }
}, 1000);

setInterval(() => {
    if (n == 1) {
        clearInterval(b)
    }
}, 100);

console.log(typeof day.textContent);
