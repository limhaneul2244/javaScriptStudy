// 자소서 글자수세기

function counter () {
  var content = document.getElementById('jasoseol').value;
  var lng = content.length;
  
  // 200글자 이후는 잘라버리기
  if(content.length > 200) {
    content = content.substring(0, 200);
    console.log(content)
    // 200글자까지 잘린 문자를 textarea까지 넣어준다
    document.getElementById('jasoseol').value = content;
  }
  document.getElementById('count').innerHTML = `(${lng}/200)`;

}
counter();

// function counter() {
//   let content = document.getElementById('jasoseol').value;
//   let lng = content.length;
//   console.log(content, lng)
  
//   if(lng > 200) { //200글자를 넘을 경우 삭제
//     content = content.substring(0, 200)
//     document.getElementById('jasoseol').value=content;
//   }
//   document.getElementById('count').innerHTML = `(${lng}/200)`;

// }

// counter();