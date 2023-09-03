let person = {
  name: 'sky',
  hobby: '코딩하기',
  age: 36,
  sayHello: function() {
    console.log('hello')
  }
};

//메서드 실행
// console.log(person.name, person.hobby)
// person.sayHello();

// var now = new Date();
// console.log(now.getFullYear())
// // 월 정보를 가지고 오는 메서드 실제 월은 +_1을 해야 한다
// console.log(now.getMonth()+1)
// console.log(now.getDate())
// console.log(now.getTime())

// var christmas = new Date('2020-12-25');
// console.log(christmas)

// var ms = new Date(1000);
// console.log(ms);

let now = new Date();
let start = new Date('2020-06-30');

// 현재시간까지 흐른 시간 - 사귄날까지 흐른 시간
let timeDiff = now.getTime() - start.getTime();

//흐른 시간을 날짜로 바꿔주기(1000 * 60초 * 60분 * 24시간) + 사귄날짜첫날
let day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
$('#love').text(day + '일째');

// 발렌타인 데이 
//남은 밀리초 = 기념일.getTime() - 오늘.getTime()
//만난일 = 만난 밀리초를 일로 환산
let valentine = new Date('2024-02-14');
let timeDiff2 = valentine.getTime() - now.getTime();
let day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24) + 1);
console.log(day2)

$('#valentine').text(day2 + '일 남음');

let ms = start.getTime() + 999 * (1000 * 60 * 60 * 24);
let thousand = new Date(ms)
let thousandDate = thousand.getFullYear() + '.' + (thousand.getMonth()+1) + '.' + thousand.getDate();
console.log(thousandDate)
$('#thousand-date').text(thousandDate);

let timeDiff3 = thousand.getTime() - now.getTime();
let day3 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
$('#thousand').text(day3);



//우리 몇 일째?


//기념일까지 남은 날짜는?


//천일은 언제인가?


//기념일까지 남은 날짜는?