var a = new Date().getDate()
undefined
a
7
var a = new Date().getMonth()
undefined
a
0
var a = new Date().getDay()
undefined
a
2

localStorage.setItem("token","AAAAA")
    
undefined
localStorage.getItem('token')
"AAAAA"
localStorage.removeItem('token')
undefined
localStorage.getItem('token')
null
localStorage.setItem("token",['a','b','c'])
    
undefined
localStorage.getItem('token')
"a,b,c"


/*
you need to create one luck game
total user will have 3 chance
> You have to take input as number from the user
> you have to generate one number keep range 1 - 20
> if both batch user win 
> else give 5 try
> after 5 try print you loose
*/
