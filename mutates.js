let arr = [1,2];
console.log('====================================');
console.log(arr);
console.log('====================================');
// Update an array with additional values
 arr = [...arr,3,4];

 console.log('====================================');
 console.log(arr);
 console.log('====================================');

 let obj = {
    x:10,
    y:20
 };

 console.log('====================================');
 console.log(JSON.stringify(obj));
 console.log('====================================');

 obj = {...obj, y:300,z:30} ;
 console.log('====================================');
 console.log(JSON.stringify(obj));
 console.log('====================================');