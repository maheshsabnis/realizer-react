// let arr = [1,2];
// console.log('====================================');
// console.log(arr);
// console.log('====================================');
// // Update an array with additional values
//  arr = [...arr,3,4];

//  console.log('====================================');
//  console.log(arr);
//  console.log('====================================');

//  let obj = {
//     x:10,
//     y:20
//  };

//  console.log('====================================');
//  console.log(JSON.stringify(obj));
//  console.log('====================================');

//  obj = {...obj, y:300,z:30} ;
//  console.log('====================================');
//  console.log(JSON.stringify(obj));
//  console.log('====================================');

 let o1 = {x:10};
console.log(`Original o1.x= ${o1.x}`);
let o2 = o1;
console.log(`Original o1.x= ${o1.x} and o2.x = ${o2.x}`);
// upadet o2.x=20
o2.x = 20;
console.log(`After modification o2.x to 20, o1.x= ${o1.x} and o2.x = ${o2.x}`);

let properties = Object.keys(o2);
console.log(properties);
console.log(o2[properties[0]]);


const arr = [
    {ExpenseId:101, ExpensesType:'Food'},
    {ExpenseId:102, ExpensesType:'Home'},
    {ExpenseId:102, ExpensesType:'Home', Amount:888},
];

let objKeys = Object.keys(arr[0]);

console.log(objKeys);








