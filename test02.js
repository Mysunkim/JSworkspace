//products 배열을 넣었을때,가격이 60000원이상
//product객체를 담은 배열을 반환하는 함수 만들기
let allProducts=[{
    name:"핸드폰",
    description:"삼성 s22 울트라 gos논란을 밝혀라",
    price:50000,
    seller:"onof"
},{
    name:"카메라",
    description:"카메라는 캐논인가 니콘인가",
    price:70000,
    seller:"onof2"
},{
    name:"노트북",
    description:"노트북은 애플인가 삼성인가 LG인가",
    price:100000,
    seller:"onof3"
}
    
];

//1.함수문만들기 함수명:checkList
//const checkList = function(parameter){
//    return returnValue;
//};

// let product = {
//     name:,
//     description:
//     price:,
//     seller:
// };

//product객체를 담은 배열 반환하기
let checkList = function(allProducts){
    
    let newProduct = [];
    for(let i=0;i<allProducts.length;i++){
        
        if(allProducts[i].price>=60000){
            newProduct.push(allProducts[i]);
        }
    }
    return newProduct;
}

//함수가 잘 돌아가는지확인
const newItem = checkList(allProducts);
console.log(newItem);
