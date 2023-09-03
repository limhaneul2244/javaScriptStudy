//코드 최적화
const number = Number(prompt("몇명이 참가하나요?"));
let $input = document.querySelector("input");
const $button = document.querySelector("button");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");
let $attend = document.querySelector("#attend");
let word; //제시어
let newWord; //새로 입력한 단어

$attend.textContent = `${number}명😁`;

//입력버튼을 클릭했을때
const onClickButton = () => {
  //제시어가 비어있지 않고, 제시어 마지막과 새로입력한 단어의 첫번째가 일치할 경우
  if (!word || word[word.length - 1] === newWord[0]) {
    word = newWord;
    $word.textContent = word;
    console.log($word.textContent);
    const order = Number($order.textContent);
    console.log(order);
    if (order === number) {
      //참가인원과 동일하다면 그 값을 다시 1로 원위치시킨다
      $order.textContent = 1;
    } else {
      //동일하지 않다면 1을 증가시킨다.
      $order.textContent = order + 1;
    }
  } else {
    console.log("올바르지 않습니다.");
  }
  $input.value = "";
  $input.focus();
};

const onInput = (e) => {
  newWord = e.target.value;
};

$input.addEventListener("input", onInput);
$button.addEventListener("click", onClickButton);
