                                              #---------------------------------------- ROCK PAPER SCISSOR game.py----------------------------------------------------


first_user = input("which your going to roll:\t")
second_user = input("your turn go for it:\t")
#third_user = input("next your choice")
def compare(first_user,second_user):
	if first_user == second_user:
		return ("Its a tie")
	#elif second_user == third_user:
	#	return ("you both tie ,roll again")

	elif first_user == "rock":
		if second_user == "scissor":
			return ("rock wins")
		else:
			return ("SCISSOR wins")


	elif first_user == "SCISSOR":
		 if second_user == "paper":
		 	return ("scissor wins")
		 else:
		 	return ("paper wins")

	elif first_user == "paper":
		if second_user == "rock":
			return ("rock wins")
		else:
			return ("paper wins")

	else:
		return ("Invalid roll .please make a move to continue a game")
		

print(compare(first_user,second_user))