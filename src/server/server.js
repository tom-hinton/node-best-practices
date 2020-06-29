// Configure process.env constants
require( 'dotenv' ).config()

// Create application
const express = require( 'express' )
const server = express()

// Use awilix container for dependency injection
const container = require( './container.js' )()
const { loadControllers, scopePerRequest } = require( 'awilix-express' )
server.use( scopePerRequest( container ) )
server.use( loadControllers( 'components/*/*-api.js', { cwd: __dirname } ) )

// Serve browser application
server.get( '/', ( req, res ) => res.send( 'Talking to Eddy at root' ) )

// Start server
const port = 3000
server.listen( port, () => console.log( `Server listening at http://localhost:${port}` ) )

