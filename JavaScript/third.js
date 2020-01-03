var a = "10"
undefined
var b = "20"
undefined
a+b
"1020"
parseInt(a)+parseInt(b)
30
var c = "10.09878"
undefined
parseInt(a)+parseInt(b)+parseInt(c)
40
parseInt(a)+parseInt(b)+parseFloat(c)
40.09878

var a = "london"

a.toUpperCase()
var a = "london"
undefined
a.toUpperCase()
"LONDON"
a.toLowerCase()
"london"
a[0]
"l"
a.length
6
a[5]
"n"
a[length-1]
"n"
var name= "   london . "
undefined
var name= "   london "
undefined
name.length
10
name[length-1]
" "
name.trim()
"london"
name.trim()[length-1]
"n"
var mytech = "Hi i am working on JS"
undefined
var mytech = "Hi i am working on .net"
undefined
mytech.replace('JS','javascript')
"Hi i am working on .net"
var mytech = "Hi i am working on JS"
undefined
mytech.replace('JS','javascript')
"Hi i am working on javascript"
var mytech = "Hi JS i am working on JS"
undefined
mytech.replace('JS','javascript')
"Hi javascript i am working on JS"
mytech.replace(/JS/g,'javascript')
"Hi javascript i am working on javascript"
mytech.replace(/ /g,'_')
"Hi_JS_i_am_working_on_JS"

var mytech = "Hi JS i am working on JS"
undefined
mytech.replace('JS','Javascript')
"Hi Javascript i am working on JS"
mytech.replace(/JS/g,'Javascript')
"Hi Javascript i am working on Javascript"
var city = "newyork"
undefined
city.slice(1)
"ewyork"
city.slice(22)
""
city.slice(2)
"wyork"
city.slice(2,4)
"wy"
var color="blue"
undefined
color.charAt(0)
"b"


var city = "delhi"

city.charAt(0)
var city = "delhi"

city.charAt(0)
"d"
var city = "delhi"

city.charAt(0).toUpperCase()
"D"
var city = "dElhI"


undefined
city.charAt(0).toUpperCase()
"D"
city.slice(1).toLowerCase()
"elhi"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()

Slice = ( can take length as -ve but not range)
substring = ( cannot take length as -ve but can take range)
substr(from ,length)

var city = "london"
undefined
city.substring(1)
"ondon"
city.substring(-1)
"london"
city.slice(-1)
"n"
city.substring(2,4)
"nd"
city.slice(2,4)
"nd"
city.slice(-2,-4)
""
city.substring(-2,-4)
""
city.substring(-1,2)
"lo"
city.slice(-1,2)
""
city.substr(1,3)
"ond"
city.slice(1,3)
"on"
city.substring(1,3)
"on"

var city = "london"
undefined
city.indexOf("l")
0
city.indexOf("y")
-1
city.indexOf("o")
1
a.split('')
(5) ["d", "e", "l", "h", "i"]
var url = "https://zoom.us/postattendee/id/1"
undefined
url.split('/')
(6) ["https:", "", "zoom.us", "postattendee", "id", "1"]

var a = "hi"
undefined
var b="JavaScript"
undefined
a.concat(b)
"hiJavaScript"
b.concat(a)
"JavaScripthi"
b.charCodeAt(0)
74
b.charCodeAt(1)
97
a.repeat(2)
"hihi"
a.repeat(2,'\n')
"hihi"
a.repeat(2,'hhh')
"hihi"