import quic from 'node-quic'

const port    = 1234
const address = '127.0.0.1'

// Now we send the data to the server.
quic.send(port, address, { hello: 'QUIC server from QUIC client!' }).
    onData(data => {

    // This is the data that was sent right back
    const parsedData = JSON.parse(data)
    console.log(parsedData) // { hello: 'world!' }

    // now we can stop the server from listening if we want this to be a one-off
    quic.stopListening()
  })

