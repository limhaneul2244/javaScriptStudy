// var num = Math.random() * 45 + 1;
// var ball01 = parseInt(num);
// document.write(ball01);

// var number = Math.random() * 45 + 1
// 45를 곱하면 45미만의 실수를 확인할 수 있다 0 제외하고 45를 포함해야 하므로 +1을 한다.
// document.write(parseInt(number))
// var newNum = number(number)

// var lotto = [];
// for(let i = 0; i < 6; i++) {
//   let num = parseInt(Math.random() * 45 + 1);

//   if(lotto.indexOf(num) === -1) {
//     lotto.push(num)
//   }
// }
// document.write(lotto, '로또의 길이', lotto.length)
//중복된 값을 제외하면 5개의 값만 나올수 있다 그러므로 특정 조건 즉 6미만까지 계속 반복하다가 종료하는 while문을 사용하는 것도 좋다.

// for문을 while문으로 변경하기
// var lotto = [];
// while(lotto.length < 6) {
//   let num = parseInt(Math.random() * 45 + 1);

//   if(lotto.indexOf(num) === -1) {
//     lotto.push(num)
//   }
// }
// lotto.sort((a, b) => (a - b))
// document.write(lotto, '로또의 길이', lotto.length)

// document.write(`<div class="ball ball1"> ${lotto[0]} </div>`)
// document.write(`<div class="ball ball1"> ${lotto[1]} </div>`)
// document.write(`<div class="ball ball1"> ${lotto[2]} </div>`)
// document.write(`<div class="ball ball1"> ${lotto[3]} </div>`)
// document.write(`<div class="ball ball1"> ${lotto[4]} </div>`)
// document.write(`<div class="ball ball1"> ${lotto[5]} </div>`)
