const number = Number(prompt("몇명이 참가하나요?"));
console.log(number);

const render = () => {
  if (!number) return;
  let $input = document.querySelector("input");
  const $button = document.querySelector("button");
  const $word = document.querySelector("#word");
  const $order = document.querySelector("#order");
  let $attend = document.querySelector("#attend");
  let word; //제시어
  let newWord; //새로 입력한 단어

  //입력한 단어가 세글자가 아니면 다시 입력 요청하기
  //초반 prompt 함수로 참가인원을 선택할때 사용자가 취소를 누르면
  //다음 코드가 실행되지 않게 처리하기
  $attend.textContent = `${number}명😁`;

  //입력버튼을 클릭했을때
  const onClickButton = () => {
    //세글자이면서 제시어가 비어있지 않고, 제시어 마지막과 새로입력한 단어의 첫번째가 일치할 경우
    if (
      newWord.length === 3 &&
      (!word || word[word.length - 1] === newWord[0])
    ) {
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
    console.log(newWord);
  };
  $input.addEventListener("input", onInput);
  $button.addEventListener("click", onClickButton);
};
render();
