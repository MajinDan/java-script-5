// else statements

function testElse(val){
    let result = "";
    
    if (val > 5) {
        result = "bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    
    return result;
}
console.log(testElse(3));