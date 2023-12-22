//js에서 조건문

let x = 10;

if(x>0){
    console.log("x = 양수");
}else{
    console.log("x= 음수");
}
let y = "Hello world";

//y의 길이가 5보다 크거나 같으면 길이를 conlose.log로출력
if(y.length>=5){
    console.log("y의 길이는"+y.length);
}

//if문 중첩
let age = 12;
let gender = "female";
if(age>=18){
    if(gender == "female"){
        console.log("This person is adult female");
    }
    else{
        console.log("This person is adult male");
    }
}else{
    console.log("This person is not adult");
}

//falsy값,truthy값
if(0){
    console.log("hello");
}
if(""){
    console.log("hello");
}
if(null){
    console.log("hello");
}
if(undefined){
    console.log("hello");
}
if(NaN){
    console.log("hello");
}
if(false){
    console.log("hello");
}