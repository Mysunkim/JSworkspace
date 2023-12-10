for(let i = 0;i<10;i++){
    console.log("i =",i);
}

//배열for문에 집어넣는것
const arr = ["one","two","three","four","five"];

for(let i=0;i<arr.length;i++){
    console.log("arr :",arr[i]);
}

//0~10까지 수중 2의 배수만 출력하기
for(let i=0;i<=10;i++){
    if(i%2==0){
        console.log(i,"는짝수입니다");
    }else{
        console.log(i,"는 홀수입니다.");
    }
}

//for ~in문:객체의 속성을 출력하는 문법
let person = {
    name:"John",
    age:30,
    gender:"male"
};

for(let key in person){
    console.log(key,":",person[key]);
}

