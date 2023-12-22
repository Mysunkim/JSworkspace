//기본생성
let fruits = ["사과","바나나","오렌지"];

//크기지정
let number = new Array(5);

//요소 접근
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//배열 메소드
//push
console.log("추가전 :",fruits);
fruits.push("배");
console.log("추가후 :",fruits);

//pop:배열의 끝이 삭제
console.log("pop전 :",fruits);
fruits.pop();
console.log("pop후 :",fruits);

//shift:가장 앞이삭제
console.log("shift전 :",fruits);
fruits.shift();
console.log("shift후 :",fruits);

//unshift:가장 앞에 추가
console.log("unshift전 :",fruits);
fruits.unshift("포도");
console.log("unshift후 :",fruits);

//splice(a,b,c):A자리부터 시작해서 B개 지우고 그 자리에 C를 끼워줘라는 말 !
console.log("splice전 :",fruits);
fruits.splice(0,2,"수박");
console.log("splice후 :",fruits);

//slice(A,B):A 자리부터 B자리 전까지만 반환해줘 라는 뜻
console.log("slice전:",fruits);
fruits.slice(1,1);
console.log("slice후:",fruits);

