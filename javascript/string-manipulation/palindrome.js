function palindrome(string1,string2){
    if (string1.split("").reverse().join() === string2.split("").reverse().join()){
        console.log("Strings are palindrome");
    }
    else{
        console.log("strings are not palindrome");
    }
}

console.log(palindrome("madam","madam"));
console.log(palindrome("duplicate","duplicity"));


