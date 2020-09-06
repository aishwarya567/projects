import random

while True:
    player_1 = input(['Rock, Paper, Scissor\t'])
    Computer = random.choice(['Rock','Paper','Scissor'])
    print(Computer)

    if player_1 ==  Computer:
        print('Its a Tie')
    elif player_1 == 'Rock':
        if Computer == 'Paper':
            print('You Lose!',Computer,'covers',player_1)
        else:
            print('You Win', player_1, 'smashes',Computer)
    elif player_1 == 'Paper':
        if Computer == 'Scissor':
            print('You Lose!',Computer,'cuts',player_1)
        else:
            print('You Win!',player_1,'covers',Computer)
    elif player_1 =='Scissor':
        if Computer == 'Rock':
            print('You Lose!',Computer,'breaks',player_1)
        else:
            print('You Lose!',player_1,'cuts',Computer)
    else:
        print('Please select valid play')