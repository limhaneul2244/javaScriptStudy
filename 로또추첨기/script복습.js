const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');
/**
 * 1. 피셔예이츠 셔플을 통한 숫자 섞기
 * 2. 오름차순 정렬 후 6개를 잘라 정렬
 * 3. 일정시간 후에 순차적으로 실행하기
 */

const candidate = Array(45).fill().map((value, index) => index + 1);
console.log('candidate', candidate)

//새로운 배열에 정렬된 6개의 값을 넣어주어야 하므로
const shuffle = [];

while(candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  console.log(random)
  //45까지 나온 값을 random으로 변경한 값
  const spliceArray = candidate.splice(random, 1)
  //45까지의 값에서 splice를 통해 1개의 random값을 제거하고 제거한 값을 반환한다.
  console.log('spliceArray', spliceArray)
  const value = spliceArray[0];
  shuffle.push(value);
}

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];
console.log(winBalls, 'bonus', bonus)

const showBall = (number, $target) => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = number;
  $target.appendChild($ball);
}

for(let i = 0; i<6; i++) {
  setTimeout(() => {
    showBall(winBalls[i], $result);
  }, 1000 *(i + 1));
}
setTimeout(() => {
  showBall(bonus, $bonus);
}, 7000);