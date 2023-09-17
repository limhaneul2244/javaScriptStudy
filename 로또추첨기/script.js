const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

const candidate = Array(45).fill().map((v, i) => i + 1);
console.log('candidate', candidate)
const shuffle = [];

while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  console.log('spliceArray', spliceArray)
  const value = spliceArray[0];
  shuffle.push(value);
}
console.log(shuffle)

// for (let i = candidate.length; 0 < i; i--) {
//   const random = Math.floor(Math.random() * i);
//   const spliceArray = candidate.splice(random, 1);
//   const value = spliceArray[0];
//   shuffle.push(value);
// }
// console.log('shuffle', shuffle)

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];
console.log(winBalls,'bonus', bonus);

//공의 색깔을 넣어주는 함수
function colorize(number, $tag) {
  if(number < 10) {
    $tag.style.backgroundColor = 'red';
  } else if (number < 20) {
    $tag.style.backgroundColor = '#FFA500';
  } else if (number < 30) {
    $tag.style.backgroundColor = 'yellow';
  } else if (number < 40) {
    $tag.style.backgroundColor = 'blue';
  } else {
    $tag.style.backgroundColor = 'green';
  }
}

const showBall = (number, $target) => {
  const $ball = document.createElement('div'); //1초 뒤에 div생성
  $ball.className = 'ball';
  colorize(number, $ball);
  $ball.textContent = number;
  $target.appendChild($ball);
}

//일정 시간 후에 실행하기
for (let i = 0; i < 6; i++) {
  setTimeout(() => {
    console.log(winBalls[i], i)
    showBall(winBalls[i], $result)
  }, (i + 1) * 1000);
}
setTimeout(()=> {
  showBall(bonus, $bonus);
}, 7000)