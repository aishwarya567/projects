var palindrome = (number) => {
    var rev = 0;
    var res = number;
    while(number>0){
        rem = number % 10;
        rev = (rev * 10 ) +  rem;
        res = number/10;
    }
    if (res === rev){
        console.log('palindrame');
    }
    else{
        console.log('not palindrome');
        }

    }
console.log(palindrome(191));