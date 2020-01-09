//Literral notation
var country = {
    name:'India',
    capital:'Delhi',
    language:'Hindi'
}
undefined
country
{name: "India", capital: "Delhi", language: "Hindi"}
country.name
"India"
country.capital
"Delhi"
country['name']
"India"
country.continent='Asia'
"Asia"
country
{name: "India", capital: "Delhi", language: "Hindi", continent: "Asia"}
country.capital="Mumbai"
"Mumbai"
country
{name: "India", capital: "Mumbai", language: "Hindi", continent: "Asia"}
delete country.language
true
country
{name: "India", capital: "Mumbai", continent: "Asia"}
typeof(country)
"object"

//Constructor
var car = new Object()
car.brand="BMW"
car.color="Red"

var car = new Object()
car.brand="BMW"
car.color="Red"
"Red"
typeof(car)
"object"
car.color
"Red"
car.brand
"BMW"

var calc = {
    sum: function(a,b){
        return a+b
    },
    sub: function(a,b){
        return a-b
    }
}

calc.sum(6,8)
14

var city = [
    {name:'delhi', country:'India'},
    {name:'Helsinki', country:'Finland'},
    {name:'Paris', country:'France'}
]
undefined
typeof(city)
"object"
city
(3) [{…}, {…}, {…}]
city[0].name
"delhi"
city[2].country
"France"