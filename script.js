function add(a , b){
    return a + b;
}
function subtract(a , b){
    return a - b;
}
function multiply(a , b){
    return a*b;
}
function divide(a , b){
    if(b === 0){
        return "Can't divide by Zero !";
    }
    return a/b;
}

let firstOperand,operator,secondOperand;

function operate(first , second , op){
    let result = 0;
    if(op === '+'){
        result = add(first , second);
    }
    else if(op === '-'){
        result = subtract(first , second);
    }
    else if(op === '*'){
        result = multiply(first , second);
    }
    else if(op === '/'){
       result = divide(first , second);
    }
    else{
        return "Operator Doesn't Exist";
    }
    return result;
}