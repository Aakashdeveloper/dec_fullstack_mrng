function loop(){
    for(i=0;i<10;i++){
        console.log(i)
    }
}

function * loop(){
    for(i=0;i<10;i++){
        yield i
    }
}

var data = loop()
undefined
data.next()
{value: 0, done: false}