const express = require( 'express' )
const { createContainer } = require( 'awilix' )
const { scopePerRequest } = require( 'awilix-express' )

const server = express()
const container = createContainer()

server.use( scopePerRequest( container ) )

const port = 3000
server.listen( port, () => console.log( `Server listening at http://localhost:${port}` ) )