var firstName='John'
var lastName = 'Ammy'

var Greet ={
    firstName:'bob',
    lastName:'Eva',
    greet: function(){
       return `hi ${this.firstName} ${this.lastName} welcome back`
    }
}

function calc(){
    this.sum = function(a,b){return a+b},
    this.sub = function(a,b){return a-b}
}


var mycalc = new calc()



function database(){
    this.select = function(table) { return `SELECT * from ${table}`}
    this.delete = function(table) { return `DELETE from ${table}`}
}

var emp = new database()
undefined
emp.select('Emp')
"SELECT * from Emp"

class database {
    constructor(){
        this.select = function(table) { return `SELECT * from ${table}`}
        this.delete = function(table) { return `DELETE from ${table}`}
    }
}