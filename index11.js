//Switch Staments
function caseInSwitch(val) {
    let answer ="";
    switch(val){
        case 1:
            answer = "alpha";
            break;
            case 2:
                answer = "beta";
            break;
            case 3:
                answer = "gama";
            break;
            case 4:
                answer = "delta";
            break;
            
    }

    return answer;
}

console.log(caseInSwitch(4));