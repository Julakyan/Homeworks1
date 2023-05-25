
function test(string,a,b){
    string = string.split("")
    for(let i = 0; i<string.length;i++){
        if(string[i] === a){
            string[i] = b
        }
    }
    return string.join("")
    
}

console.log(test("Armen","A","B")); 

// ------------------------------------------------------------------------

let getCountSymbols = (text, a) =>{
    let count = 0
    let i = 0
    while(i<text.length){
        if(text[i]===a){
            count++
            } 
        i++

     } 
     return count
} 

console.log(getCountSymbols('hhhadsdfjjjj','j'))

 // ----------------------------------------------------------

 let num = 10


for(let i = 1; i<=num;i++){
    let number = ""
    for(let j = 1; j <= i;j++){
        number = number + j
    }
    console.log(number)
}

for(let i = num-1; i>=1;i--){
    let number = ""
    for(let j = 1; j <= i;j++){
        number = number + j
    }
    console.log(number)
}

// ----------------------------------------------------------------------------

function checkPalindrome(string) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }

    return 'It is a palindrome';
}



console.log(checkPalindrome("boooooooooobb"));

// ---------------------------------------------------
let num = 5
let result = ""
for(let i = 0; i<num;i++){
    for(let j = 0; j < num;j++){
        if(i === j || j === num - 1 - i){
            result+=" * "
        } else {
            result+= "   "
        }
    }
    result+= "\n"
}
console.log(result)

//-------------------------------------------
let num = 5
let result = ""
for(let i = 0; i<num;i++){
    for(let j = 0; j < num;j++){
        if(i === j){
            result+=" * "
        } else {
            result+= "   "
        }
    }
    result+= "\n"
}
console.log(result)