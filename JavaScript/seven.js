for
for/in
for/of 
while
do while
--------
Map
filter 

--------------

for(i=0;i<10;i++){
    console.log(i)
}


var a = ['a','b','c','d']
for(i=0; i<a.length;i++){  
    console.log(a[i])
}

var a = "london"
for(i=0; i<a.length;i++){  
    console.log(a[i])
}

var a = [3,6,1,44,567,24,56,22,39,63]
for(i=0;i<a.length;i++){
    if(a[i]%2==0){
        console.log(`Number ${a[i]} is even`)
    }else{
        console.log(`Number ${a[i]} is odd`)
    }
}
Number 3 is odd
VM928:4 Number 6 is even
VM928:6 Number 1 is odd
VM928:4 Number 44 is even
VM928:6 Number 567 is odd
VM928:4 Number 24 is even
VM928:4 Number 56 is even
VM928:4 Number 22 is even
VM928:6 Number 39 is odd
VM928:6 Number 63 is odd



for(i=0;i<10;i++){
    console.log(i)
}

var i = 0
while(i<10){
    console.log(i);
    i++
}

var city = ['london','Newyork','Delhi']
var i =0
while(city[i]){
    console.log(city[i]);
    i++
}

var city = ['london','Newyork','Delhi']
var i =0;
do{
    console.log(city[i])
    i++
}
while(city[i])


var city = ['london','Newyork','Delhi']
for (x of city){
    console.log(x)
}
