/*머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다.
 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 
 정수 n과 k가 매개변수로 주어졌을 때,양꼬치 n인분과 음료수 k개를 먹었다면 
 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요. */

 //10*n => k+1
 //10인분일때마다 음료수가격 k-1
 //원래가격 : 10*n,k*2000
 function solution(k,n){
    return 12000*n + k*2000 - 2000** Math.floor(n / 10);
 }

 /** 
  2-2번. 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 
        피자를 나눠먹을 사람의 수 n이 주어질 때, 
        모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 
        return 하는 solution 함수를 완성해보세요.
 */

//피자1판,7조각 피자2판,14조각 피자3판 21조각
//피자 판수 :k, 피자1판 : 1~7, 2판:8명~14명, 3판15명~21명
//          k%7~7*k

//Math.ceil = 주어진 숫자보다 크거나 같은 가장 작은정수를 반환하는 내부함수
function solution(n,k){
    var answer = 0;
    var answer = (Math.ceil(n/7));
    return answer;
}

console.log(Math.ceil(3.14));
//출력:4
console.log(Math.ceil(8.7));
//출력:9
console.log(Math.ceil(-2.5));
//출력:-2
