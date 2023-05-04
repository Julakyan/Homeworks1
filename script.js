//1

// let a = +prompt("Enter a");
// let b = +prompt('Enter b');
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

//---------------------------------------------------------------------------

//2

// let name = prompt("Enter Your Name")
// let age = +prompt("Enter Your Age")
// console.log("My Name Is "+ name+' I am '+ age)

//----------------------------------------------------------------------------

//3

//let number= +prompt('Enter Number')
//console.log(number%10)

//--------------------------------------------------------------------------------

//4

// let number = +prompt('Enter Number')
// if(number<0){
//     console.log('yes')
// } else {
//     console.log('No')
// }
//----------------------------------------------------------------------------------

//5

let number = +prompt("Enter Number");
let a = number % 10; 
let b = ((number % 100) - a) / 10; 
let c = (number - b * 10 - a) / 100; 

console.log(a + b + c);
