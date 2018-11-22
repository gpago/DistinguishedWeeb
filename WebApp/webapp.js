var http = require('http');

function webapp(){

    http.createServer(onRequest).listen(8888);
    console.log('WebServer has started.');

    function onRequest(request, response){
        response.writeHead(200);
        response.write('Hello Devs!');
        response.end();
    }

}

module.exports = webapp;