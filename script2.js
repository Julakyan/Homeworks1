//1
let obj = {
    a:"1",
    b:"2",
    c:"2",
    d:"2",
    e:"3",
    t:"3"
}

function invert(object){
    let res = {}
    for(key in object){
        if(res.hasOwnProperty(object[key])){
            res[object[key]] = res[object[key]] + key    
        } else {
            res[object[key]] = key
        }
        
    }
    console.log(res);
}

invert(obj)

//----------------------------

//2

var a = {a:'1',b:"1"}
var b = {a:'1',b:"1"}

function shallowCompare(a,b){
    let result
    for(key in a){
        if(b.hasOwnProperty(key)){
            if(a[key] === b[key]){
                continue;
            } else {
                return false
            }
        } else {
            return false
        }
    }
    for(key in b){
        if(a.hasOwnProperty(key)){
            if(b[key] === a[key]){
                continue;
            } else {
                return false
            }
        } else {
            return false
        }
    }
    return true
    
}
console.log(shallowCompare(a,b));

//3

let text = "testText"

function textIsIsogram(text){
    let words = {}
    for(let i = 0; i<text.length; i++){
        if(!words.hasOwnProperty(text[i])){
            words[text[i]] = text[i]
        } else {
            return false
        }        
    } 
    return true
}

console.log(textIsIsogram(text))

