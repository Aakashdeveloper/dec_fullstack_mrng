const validate = () => {
    var fname = document.getElementById('fname').value 
    if(fname == ' ' || fname == ''){
        document.getElementById('output').innerText="Please enter valid input"
        document.getElementById('output').style.color="red"
    }else{
        document.getElementById('output').innerText=""
        out = fname.toUpperCase()
        document.getElementById('fname').value = out
        //document.getElementById('output').innerText=out
        //document.getElementById('output').style.color="green"
    }
}