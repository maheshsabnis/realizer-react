// 1. Local variable declartions
 function doWork(x){
    if(x){
        // use 'let' instead of 'var'
        // var is function scope
        // let is blocked scope
        let y = 100;
        console.log(`In if condition y = ${y}`);
    }
    console.log(`Out of if Statement y = ${y}`);
 }

//  doWork(true);
//  doWork(false);

// 2. Usinf Strings
let fname="Mahesh";
let lname="Sabnis";

// concatination
let fullName = fname + ' ' + lname; // Bad avoid it
// use string interpolation
let FullName = `${fname} ${lname} ${100+400}`;
console.log(FullName);

console.log(`First Index of a in FullName is  = ${FullName.indexOf('a')}`);
console.log(`Last Index of a in FullName is  = ${FullName.lastIndexOf('a')}`);
console.log(`Substring  = ${FullName.substring(1,4)}`);

// Arrays
// Using Arrow Operator

let names = ["James Bond", "Ethan Hunt", "Indiana Jones", "Jack Reacher", "Jason Bourn", "Jack Ryan"];
// Vanilla JS
for(let i=0;i<names.length;i++){
    if(names[i].length > 11){
        console.log(names[i]);
    }
} 
// ES 3
for(let name in names){
    if(name.length > 11){
        console.log(name);
    }
}

// for..of means foreach loop
// Symbol.Iterator in ES 6
for(let n of names) {
    if(n.length > 11){
        console.log(n);
    }
}
console.log();
// passing address (reference) of prtintNames
names.forEach(prtintNames);
// explicit function
function prtintNames(name, index){
    if(name.length > 11) {
        console.log(name)
    }
}
console.log();

// passing an implementation using callback

names.forEach(function(n,i){
    if(n.length > 11){
        console.log(n);
    }
});

// using arrow operator, =>
// use arrow operator if a function is accepoting callback function as inout parameter

let result1 = names.forEach((n,i)=>{
    n = n.toUpperCase(); // convert an entry from array to upper case 
    if(n.length > 11){
        console.log(n);
    }
    console.log(`In forEach ${n}`);
});

console.log(`Original Names = ${names} and after update NAmes = ${result1}`);

console.log();
console.log('Using Map');

let result2 = names.map((n,i)=>{
   
    if(n.length > 11){
        n = n.toUpperCase(); // convert an entry from array to upper case 
        return n;
    }
    //return n;
});

console.log(`Original Names = ${names} and length of Names = ${names.length} and after updated NAmes = ${JSON.stringify(result2)} and length of upodated Names = ${result2.length}`);

console.log();
console.log('Using Filter');
let result3 = names.filter((n,i)=>{
   
    if(n.length > 11){
        n = n.toUpperCase(); // convert an entry from array to upper case 
        return n;
    }
    //return n;
});

console.log(`Original Names = ${names} and length of Names = ${names.length} and after updated NAmes = ${JSON.stringify(result3)} and length of upodated Names = ${result3.length}`);