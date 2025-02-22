def is_leap(year):
    
    # Write your logic here
   if((year% 400 ==0) or (year%100 !=0) and (year%4 ==0)):
      print(True)
   else:
      print(False)



year = int(input())
print(is_leap(year))