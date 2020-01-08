var a = 10
var b = 10
a+b

//es5

function add(a,b){
    return a+b
}

add(1,2)
3
add(5,6)
11

//function
function isEven(userInput){
    var result;
    if(userInput%2==0){
        result = "Number is even"
    }else{
        result= "Number is odd"
    }

    return result
}

//method
var isEven = function(userInput){
    var result;
    if(userInput%2==0){
        result = "Number is even"
    }else{
        result= "Number is odd"
    }

    return result
}



///Es6
var add = (a,b) => { return a+b}





