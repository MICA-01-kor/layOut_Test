function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
function myFirst() {
  myDisplayer("Hello");
}
function mySecond() {
  myDisplayer("GoodBye");
}

myFirst();
mySecond();
// 함수는 순차적으로 실행은 되지만 두 함수 모두 같은 HTML 요소("demo")를 대상으로 실행이 되기때문에 이전의 HELLO를 덮어쓴다.

function myDisplayer2(some) {
  document.getElementById("demo2").innerHTML = some;
}
function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
let result = myCalculator(5, 5);
myDisplayer2(result);
// ----------------------------------------------
function myDisplayer3(some) {
  document.getElementById("demo3").innerHTML = some;
}
function myCalculator2(num1, num2) {
  let sum = num1 + num2;
  myDisplayer3(sum);
}
myCalculator2(5, 5);
//------------------------------------------------
function myDisplayer4(something) {
  document.getElementById("demo4").innerHTML = something;
}
function myCalculator3(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
myCalculator3(5, 5, myDisplayer4);
// --------------------------------------------------
setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo5").innerHTML = "S.E.S - 너를 사랑해";
}
// -------------------------------------------------
setTimeout(function () {
  myFunction2("S.E.S - 너를 사랑해");
}, 3000);

function myFunction2(value){
    document.getElementById("demo6").innerHTML = value;
}
// -------------------------------------------------
setInterval(myFunction3, 1000);

function myFunction3(){
    let d = new Date();
    document.getElementById("demo7").innerHTML =
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
}