//기본적인 객체 생성 방법
let person = {
    name : "KMS",
    age:33,
    gender:"Male"
};

//생성자 함수를 이용한 객체 생성방법
function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("KMS",33,"Male");

//접근 방법
console.log(person1.name);
console.log(person.name);

console.log(person1.age);
console.log(person.age);

console.log(person1.gender);
console.log(person.gender);

//Object.keys():key를 가져오는 메소드
let keys = Object.keys(person);
console.log("keys=>",keys);

//Object.values():키로 값을 가져오는 메소드
let values = Object.values(person);
console.log("Values =>",values);

let values2 = Object.values(person1);
console.log("Values2 =>",values2);

//Object.entries():key와value를 묶어서 배열로 만듬(2차원 배열)
let entries = Object.entries(person);
console.log("entreis =>",entries);

//Object.assing()객체를 복사하는 메소드
//복사할 객체를 뒤에다가 적고, 복사해서 넣을객체를 앞에다 적음
let newPerson = {};
Object.assign(newPerson,person);
//배열을 복사해서 특정value?키워드만 바꿀때
Object.assign(newPerson,person,{gender:"female"});

//Object.answer():객체비교
// hongperson 별도 공간에 대한 주소
let hongperson = {
    name : "홍길동",
    age : 29,
    gender : "남성"
};

// hongperson2 별도 공간에 대한 주소
let hongperson2 = {
    name : "홍길동",
    age : 29,
    gender : "남성"
};

let str1 = "aaa";
let str2 = "aaa";

console.log("answer => ", hongperson === hongperson2); // false
console.log("answer2 => ", str1 === str2); // true

//객체 병합,키워드 ...<=
let man = {
    name:"홍길동",
    age:29
};

let genderman = {
    gender : "male"
};

let perfectman = {...man,...genderman};
console.log(perfectman);