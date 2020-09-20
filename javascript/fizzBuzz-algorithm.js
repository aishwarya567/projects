function fizzBuzz(num){
    for(let i = 1; i <= num; i++) {
        // To Check a Number is Divisible By 3 and 5
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if(i % 5 === 0){
            console.log("Buzz");
        }
        else if(i % 3 === 0){
            console.log("Fizz");
        }
        else console.log(i);
        }
    }
fizzBuzz(30);
  