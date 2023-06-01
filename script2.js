//1

function checkPrimeNumber(number){
    if(number === 1 || number === 2){
        return true
    } else {
        for(let i = 2; i < number; i++){
            if(number % i === 0){
                return false
            }
        }
        return true
    }

}

console.log(checkPrimeNumber())

//-------------------------------------------------------------------------

// 2  --- the first function is used here ~ RECOMMENT for work

function primeNumbersBeforeGivenNumber(number){
    const n = 100;
for (let i = 1; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j < i) {
      break;
    } else if (j === i) {
      console.log(i);
    }
  }
}
        
    }

    primeNumbersBeforeGivenNumber()


    //---------------------------------------------------------------------------

//3


function sumNumbersOfString(text){
        let temp = "0";
        let sum = 0;
   
        for (let i = 0; i < text.length; i++) {
            let ch = text[i];
   
            if (!isNaN(String(ch) * 1)){
                temp += ch;
            }
                
            else {
                sum += +temp;
                temp = "0";
            }
        }
        return sum + parseInt(temp);
}

console.log(sumNumbersOfString("fjd25dfds25jsdhf5"))


4 

    function removeWordOfString(text,word){
        let myText = text.split(" ");
        console.log(myText)
        for(let i = 0; i < myText.length; i++){
            if(myText[i] === word){
                myText = myText.slice(0,i).join(" ") + " " + myText.slice(i + 1 , myText.length).join(" ")
            }
        }
        console.log(myText)
        return myText
    }

    console.log(removeWordOfString("this is some text","is"));