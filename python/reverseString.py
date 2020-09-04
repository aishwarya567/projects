def revSentence(sentence):
    res=sentence[::-1]
    return res
    
user_sent = input('enter your sentence to reverse:\n')
#print(type(user_sent)
print(revSentence(user_sent))