//콜백함수:매개변수 자리에 함수를 넣는것!

//1.foreach
let numbers = [4,2,3,1,5];

numbers.forEach(function(item){
    console.log("item입니다 =>"+item);
});

//map:항상 원본의 배열의 길이만큼이 return됨
let newNumbers = numbers.map(function(item){
    return item*2;
});

console.log(newNumbers);

//filter:배열의 길이가 조건에 따라 바뀔수있다.
let filterNumber = numbers.filter(function(item){
    return item>3;
});
console.log(filterNumber);

//find:해당하는 맨 처음 하나의 값만 반환한다.
let resultnumber = numbers.find(function(item){
    return item>1;
});
console.log(resultnumber);