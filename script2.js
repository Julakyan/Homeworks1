//1
let i =0
function countDigits(n){
    for(i = 0; n > 1 ;i++){
        n/=10;
    }

    return i;
} 

countDigits()




//2
function checkForZeros(number) {
    let count = 0;
    let temp = number;

    while (temp > 0) {
        const digit = temp % 10;
        temp = Math.floor(temp / 10);

        if (digit === 0) {
            count++;

            if (count === 3) {
                return 'yes';
            }
        } else {
            count = 0;
        }
    }

    return 'no';
}
checkForZeros()
//3
function checkForNines(number) {
        let count = 0;
        let temp = number;
    
        while (temp > 0) {
            const digit = temp % 10;
            temp = Math.floor(temp / 10);
    
            if (digit === 9) {
                count++;
        }
    }
    return count;
    }
    checkForNines()

