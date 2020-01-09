function robot(name){
    this.name = name;
    this.legs = 2
    this.color='White'
}

function human(name){
    this.name = name
    this.hand =2
}

human.prototype = new robot()
robot.prototype = new human()


var pepper = new robot('Pepper')
undefined
pepper
robot {name: "Pepper", legs: 2, color: "White"}

var john = new human('John')
undefined
john
human {name: "John", hand: 2}name: "John"hand: 2__proto__: robotname: undefinedlegs: 2color: "White"__proto__: Object
john.legs
2
john.color
"White"