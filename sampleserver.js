var http= require('http')

http.createServer(function(req,res){
    res.write('VyshnavHello')
    res.end()
}).listen(2000)

    
