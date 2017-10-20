# unicode-bug-fixer
UTF-8 encoded characters are translated to their respective special character based on this table: http://www.i18nqa.com/debug/utf8-debug.html, as well as the following table for decoding Russian alphabet:

Ð˜		:		И    Ð³		:		г    Ð¾		:		о    Ñ€		:		р    Ñœ 		:		ь    Ðš 		:		К    Ð½ 		:		н    Ñ 		 :   с    Ð° 		:		а
Ñ‚ 		:		т    Ð¸ 		:		и    Ñ…		:		х    ÑŒ  	: 	ь    Ð’ 		:		В    Ð» 		:		л    Ð´ 		:		д    Ð¼ 		: 	м
Ð² 		: 	в    Ñ‡ 		: 	ч    Ð· 		:		з    Ðµ		:		е    Ñƒ 		:		у    Ð¯ 		:		Я    Ðž 		: 	О    ÐŸ 		:		П           
Ð¥ 		:		Х    Ð     :	 Н    Ð¹    :		й    Ð±   	:		б     Ðº   	:		к    Ð•    :		Е    Ð¡    :		С     Ð™    :		Й 
Ð¿    :		п    Ð®    :		Ю    Ð§    :		Ч    Ð£    :		У     ÑŽ 		:		ю    Ð¶    :		ж    Ð“    :		Г    Ñ†    :		ц
Ð—    :		З    Ð¤    :		Ф    Ð›    :		Л    Ð¦    :		Ц    Ñ‹    :		ы     Ñˆ    :		ш    Ðœ    :		М    Ð–    :		Ж
Ñ„   	:		ф    Ñ‰    :		щ    Ð¢ 		:		Т    Ð” 		:		Д    Ð¨ 		:		Ш    Ð« 		:		Ы    Ð© 		:		Щ    Ð‘ 		:		Б
Ð 		:		Р    Ð		 :	 А    Ð­ 		:		Э    Ñ‘		:		ё

------------------------------------------------------------------------------------------------------------------------------------

# Converts Unicode Special Characters | German/Russian
From the table above the tool takes in a list in a textarea and regenerates it with the corrected unicode translation for German and Russian language. The corrected fields are highlighted in light blue background. All of the corrected fields are separately listed in an adjacent list which contains also the index of the cell computed at it's right side. 

# Removes Names With Specific Special Characters
Some names in the list provided contain digits or special characters from the below list

1. #
2. !
3. $
4. %
5. ^
6. &
7. *
8. [0-9]
9. ()
10. +
11. ~
12. =
13. `
14. {}
15. [ ]
16. ;
17. '
18. ?
19. \/

Names Like these are erased, however their field space is reserved to match the original list in the CSV file. Fields with erased names are marked in dashed red border. Other Special characters are not removed because they are found in unicode characters, these need to be converted instead.
