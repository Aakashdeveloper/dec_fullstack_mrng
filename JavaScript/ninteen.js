function calc(opt){
    var a = document.getElementById('one').value;
    var b = document.getElementById('two').value;
    var out;
    if(opt === 'add'){
        out = parseInt(a)+parseInt(b);
    }else{
        out = parseInt(a)-parseInt(b);
    }
    document.getElementsByClassName('output')[0].innerText="Output is "+out
}