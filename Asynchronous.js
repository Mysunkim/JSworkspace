//비동기식처리(Asynchronous)
//비동기적 처리는 작업들이 동시에 실행되거나, 
//특정 작업이 완료되기를 기다리지 않고 다음 작업을 실행하는 방식입니다.
// 비동기적 코드에서는 일반적으로 콜백 함수, Promise, async/await 등을 
//사용하여 비동기 작업을 다룹니다.

console.log("Start");

function asyncOperation(){
    setTimeout(function(){
        console.log("Async Operation");
    },1000);
}

asyncOperation();

console.log("End");