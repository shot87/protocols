const net = require('net');

const server = net.createServer(socket => {
    socket.write('Hello from TCP server');
    socket.on('data', data => {
        console.log(data.toString())
    })
})

server.listen(8080);

/*To connect to it we need to use

 telnet 127.0.0.1 8080

*/


