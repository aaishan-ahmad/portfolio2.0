%#comment
%yaml is case-sensetive

%key-value pair means varibale : value

var: hello
key: "value"
name: "ahsan"
1: "my roll number"


---
{ var: "hello", key: "value" }
--- #saprate document(object)
#Lists
fruites:
  - apple
  - graps
  - mango
  - banana
# OR
---
fruites: [apple, grap, mango]
---

#String vaiables
#varibal: string value
name: ahsan
name2: "fazil"
name3: "sakir"
name4 : >
 my name is md ahsan ha
ahmad

#integer
number: 123

#float
marks: 89.8

#boolean
bool: No
bool2: Yes


#specify the type of data
# yaml auto detecd the data type we can specify


# 1. integer
mynum : !!int 789
binary : !!int 0b1101
octal : !!int 065474
hex : !!init 0x45
commanValue : !!init +500_890 #500,890

# 2. floating point 

marks : !!float 78.90
infiniet : !!float .inf
notAnumber : .nan

# 3 boolean

b : !!bool No # N , n , false , FALSE


# 4 string 

string : !!str my name is md ahsan 


# 4 null

srName : !!null Null

[link with basic](BASIC)
