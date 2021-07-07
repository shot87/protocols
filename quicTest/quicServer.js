import quic from 'node-quic'

const port    = 1234
const address = '127.0.0.1'

// First we listen.
quic.listen(port, address)
    .onData((data, stream, buffer) => {

        const parsedData = JSON.parse(data)
        console.log(parsedData) // { hello: 'QUIC server from QUIC client!' }

    // Once the data is received and logged, we'll send it right back
    quic.send(port, address, { hello: 'QUIC client from QUIC server!' })
 //   stream.write(parsedData)
    quic.stopListening()
  })

//quic.send(port, address, { hello: 'client!' });


