//equality opertator

// function testEqual(val){
//     if (val == 12 ) {
//         return "Equal";
//     }
//     return "Not Equal";
// }
// console.log(testEqual(10)); 

//comparison with equality operators

// function testStrict(val) {
//     if(val === 7) {
//         return "Equal"
//     }
//     return "Not Equal"
// }
// console.log(testStrict(10));

//comparing values

// function compareEquality(a, b) {
//     if (a == b) {
//       return "Equal";  
//     }
//     return "Not Equal";
//  }
//  console.log(compareEquality(10,"10"));

// inequality operators

// function testNotEqual(val){
//     if (val != 99){
//         return "Not Equal"
//     }
//     return "Equal";
// }
// console.log(testNotEqual(10));

//strict inequality operator//

// function testStrictNotEqual(val) {
//     if (val !== 17) {
//         return "Not Equal";
//     }
//     return "Equal";
// }

// console.log(testStrictNotEqual(10));

//logical and operator

// function testGreaterThan(val) {
//     if (val > 100) {
//         return "Over 100";
//     }
//     if (val > 10) {
//         return "over 10";
//     }

//     return "10 or Under";
// }

// console.log(testGreaterThan(10));

// function testGreaterOrEqual(val) {
//     if (val >= 20) {
//         return "20 or Over";
//     }
//     if (val >= 10) {
//         return "10 or over";
//     }

//     return "less than 10";
// }

// console.log(testGreaterOrEqual(10));

// function testLessThan(val){
//     if(val < 25) {
//         return "Under 25";
//     }
//     if (val < 55) {
//         return "Under 55";
//     }

//     return "55 or over";
// }

// console.log(testLessThan(10));

function testLessOrEqual(val){
    if(val <=12) {
        return "Smaller Than or Equal to 12";
    }

    if(val <= 24) {
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

console.log(testLessOrEqual(10));