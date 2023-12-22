let sayHello = function(){
    console.log("Hello");
}

let getHuman = function(callback){
    callback();
}

getHuman(sayHello);

//함수를 선언하지않고 익명함수로 쓰는경우
sayHello(function(value){
    console.log(value);
})