function anagram(str1,str2){
    return str1.split('').sort().join()===str2.split('').sort().join()

}
console.log(anagram("listen","silent"));
console.log(anagram("add","dad"));
console.log(anagram("Moment","movement"));