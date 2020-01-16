var fs = require('fs');

/*fs.writeFile('test.txt', 'Hi from express App', function(err){
    if(err) throw err;
    console.log('data added')
});


fs.appendFile('test1.txt', 'Hi from Node App>>>\n', function(err){
    if(err) throw err;
    console.log('data added')
});

*/
fs.readFile('db.json','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
});

/*fs.rename('test1.txt','mytext.txt', function(err){
    if(err) throw err;
    console.log('file renamed')
});


fs.unlink('test.txt',function(err){
    if(err) throw err;
    console.log('file deleted')
});
*/