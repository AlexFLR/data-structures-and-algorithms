regex_integer_in_range = r'^[1-9]\d{5}$'	
regex_alternating_repetitive_digit_pair = r'(\d)(?=\d\1)'	


import re
P = input()

print (bool(re.match(regex_integer_in_range, P)) 
and len(re.findall(regex_alternating_repetitive_digit_pair, P)) < 2)



# ^ - asserts the start of the string
# $ - end of the string
# /d{3} - mathces 3 digits in a row
# /d+ -  matches 1 ore more digits
# /d* - this matches an empty string, or 1-n digits
# /d - match and capture a digit in a group
# (?= - start looking
# /d - match any digit, equivalent to [1-9]
# /1 - back reference to captured group