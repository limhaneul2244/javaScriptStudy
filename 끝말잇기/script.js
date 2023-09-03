const number = Number(prompt("몇명이 참가하나요?"));
// console.log(number);
let $input = document.querySelector("input");
const $button = document.querySelector("button");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");
let word; //제시어
let newWord; //새로 입력한 단어

//입력버튼을 클릭했을때
const onClickButton = () => {
  if (!word) {
    //제시어가 비어있을 경우
    word = newWord;
    $word.textContent = word;
    console.log($word.textContent);
    const order = Number($order.textContent);

    if (order + 1 > number) {
      //현재 순서가 Number와 동일한가?
      $order.textContent = order + 1;
    } else {
      $order.textContent = order;
    }

    $input.value = "";
    $input.focus();
  } else {
    //제시어가 있으며 마지막 단어와 첫시작단어가 동일하다면
    if (word[word.length - 1] === newWord[0]) {
      word = newWord; //입력한 단어가 제시어가 된다.
      $word.textContent = word;
      const order = Number($order.textContent);

      //해당 단어는 제시어가 되고 word는
      if (order + 1 > number) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
      $input.value = "";
      $input.focus();
    } else {
      console.log("올바르지 않습니다.");
    }
  }
};

const onInput = (e) => {
  newWord = e.target.value;
};

$input.addEventListener("input", onInput);
$button.addEventListener("click", onClickButton);
