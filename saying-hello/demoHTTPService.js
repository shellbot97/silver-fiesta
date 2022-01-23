var http = require('http')

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'})
    response.write("Well this was just a first step")
    response.end('Thats it')
}).listen(9000)