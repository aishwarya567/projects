def multiple(a, b):
    return a * b
def add(a,b):
    return a + b
def sub(a,b):
    return a - b
def div(a,b):
    return a / b

def choices(choice):
    if choice == 1:
        return multiple(input1,input2)
    elif choice == 2:
        return add(input1,input2)
    elif choice == 3:
        return sub(input1,input2)
    elif choice == 4:
        return div(input1,input2)
    else:
        return "Invalid Input!!"

operationToPerform = int(input('Enter your choice to perform:\t\n 1.Multiplication?  2.Addition?  3.Subtraction?  4.Division? \n'))
input1 = int(input("Enter first value:\n"))
input2 = int(input('Enter second value:\n'))
result = choices(operationToPerform)
print('The result is :',result)

    

    