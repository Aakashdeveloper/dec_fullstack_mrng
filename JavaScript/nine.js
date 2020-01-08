var num = [1,2,3,4]
var a = ["a","b","c"]
var b = [true,false,false,true]


var a = [1,34,"a","df","efe",true,2,"s",4,4,true]
var a = [1,34,"a","df","efe",true,2,"s",4,4,true]
undefined
a
(11) [1, 34, "a", "df", "efe", true, 2, "s", 4, 4, true]
a.length
11
a.push("delhi")
12
a
(12) [1, 34, "a", "df", "efe", true, 2, "s", 4, 4, true, "delhi"]
a.push("helsinki")
13
a
(13) [1, 34, "a", "df", "efe", true, 2, "s", 4, 4, true, "delhi", "helsinki"]
a.pop()
"helsinki"
a
(12) [1, 34, "a", "df", "efe", true, 2, "s", 4, 4, true, "delhi"]
a.pop(2)
"delhi"
a
(11) [1, 34, "a", "df", "efe", true, 2, "s", 4, 4, true]
a.unshift("london")
12
a
(12) ["london", 1, 34, "a", "df", "efe", true, 2, "s", 4, 4, true]
a.shift()
"london"

push => add at the end
pop => takout from the end 
shift => takeout from the begining
unshift => add at the begining

var colors=["Red","yellow","green"]

var colors=["Red","yellow","green"]

colors.indexOf("red")
-1
colors.indexOf("Red")
0
colors.indexOf("green")
2
colors.indexOf("blueee")
-1
colors.indexOf("blue")
-1

var colors=["red","yellow","green","blue"]
undefined
colors.slice(1)
(3) ["yellow", "green", "blue"]
colors.slice(2,4)
(2) ["green", "blue"]
var city = ["London","Newyork","Delhi"]
undefined
city+colors
"London,Newyork,Delhired,yellow,green,blue"
city.concat(colors)
(7) ["London", "Newyork", "Delhi", "red", "yellow", "green", "blue"]


[a,b]=["Hiii","Hey"]
(2) ["Hiii", "Hey"]
a
"Hiii"
b
"Hey"


var city = ["London","Newyork","Delhi","Amsterdam"]

var city = ["London","Newyork","Delhi","Amsterdam"]
undefined
city.slice(2,3)
["Delhi"]
city.splice(2,0,'Dubai','Helsinki')
[]
city
(6) ["London", "Newyork", "Dubai", "Helsinki", "Delhi", "Amsterdam"]
city.splice(2,1)
["Dubai"]
city
(5) ["London", "Newyork", "Helsinki", "Delhi", "Amsterdam"]
city.splice(3,1,"Boston")
["Delhi"]
city
(5) ["London", "Newyork", "Helsinki", "Boston", "Amsterdam"]

you have one array of user ['John','Amay']
You have to take input from user as name
if user is part of array  console.log('allow access')
else add user to the array list 
