var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received."); // 이 메시지가 두번 출력되는 것은 대부분의 브라우저가 favicon.ico 를 로드하려고 하기 때문

    route(pathname);

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started...");
}

exports.start = start;

// function 특징
// // 1. 무명의 리터럴로 표현이 가능하다.
// // 2. 변수나 데이터 구조(객체, 배열 ...)안에 담을 수 있다.
// var increase = function (num) {
//   return num + 1;
// };

// var decrease = function (num) {
//   return num - 1;
// };

// var obj = {
//   increase: increase,
//   decrease: decrease
// };

// // 3. 함수의 파라미터로 전달 할 수 있다.
// function cal(func, num) {
//   return func(num);
// };

// console.log(cal(increase, 1));
// console.log(cal(decrease, 1));

// // 4. 반환값(return value)으로 사용할 수 있다.
// function cal(mode) {
//   var funcs = {
//     'plus': function (left, right) { return left + right },
//     'minus': function (left, right) { return left - right }
//   };

//   return funcs[mode];
// };
// console.log(cal('plus')(2, 1));
// console.log(cal('minus')(2, 1));

