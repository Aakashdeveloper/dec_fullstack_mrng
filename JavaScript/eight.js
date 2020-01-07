Map

====
var a = [0,1,2,3,4]
a.map((data) => { console.log(data)})

var a = [0,1,2,3,4]
a.map((data) => { return data*2})


var a = [18,23,55,31]
a.filter((data) => {return data>18})
[23,55,31]
a.map((data) => {return data>18})
[false,true,true,true]

var a = [0,1,2,3,4]
a.map((data) => { return data*2})
[0, 2, 4, 6, 8]
a.filter((data) => { return data*2})
[1, 2, 3, 4]

