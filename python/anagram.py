def anagram(str1,str2):
    if sorted(str1)==sorted(str2):
        print("Given string are anagram")
        
    else:
        print("Not an anagram!! Try again")
while True:
    str1 = input('enter your first string\t\n')
    str2 = input('enter your second string\t')
    anagram(str1,str2)

