function numberCheck(num){
    return num % 1 == 0;
    /* if(num % 1 == 0){
        console.log('Number is Integer');
    }
    else{
        console.log("Not a number");
    } */ 
}
console.log(numberCheck(4));
console.log(numberCheck(12));
console.log(numberCheck(4.8));
console.log(numberCheck('number'));
console.log(numberCheck('true'));


