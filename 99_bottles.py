
def bottle_song(number):
    for n in range(number, -1, -1):
	    if n == 0:
		    break
	    else:
		    print(f"{n} bottle{'s' if n > 1 else ''} of beer on the wall, {n} bottle{'s' if n > 1 else ''} of beer.\nTake one down and pass it around, {n -1 if n-1 >= 1 else 'no more'} bottle{'' if n -1 == 1 else 's'} of beer on the wall.")
    print(f"No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, {number} bottle{'s' if number > 1 else ''} of beer on the wall.")


bottle_song(3)
