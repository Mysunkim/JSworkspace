//동기적 처리(Synchronous):코드가 짜진 순차적으로 실행
console.log("Start");

function syncOperation(){
    console.log("Operation 1");
    console.log("Operation 2");
}

syncOperation();

console.log("End");