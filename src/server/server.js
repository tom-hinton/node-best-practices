// Configure process.env constants
require( 'dotenv' ).config()

// Create application
const express = require( 'express' )
const server = express()

// Serve browser application
const path = require( 'path' )
server.use( express.static( path.join( __dirname, '../../dist' ) ) )

// Connect database
const { databaseConnection } = require( './libs/database' )

// Session client
const session = require( 'express-session' )
const { v4: uuid } = require( 'uuid' )
const MongoStore = require( 'connect-mongo' )( session )
const sessionStore = new MongoStore( { mongooseConnection: databaseConnection } )
server.use(
	session( {
		genid: () => uuid(),
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
		store: sessionStore
	} )
)

// Use awilix container for dependency injection
const container = require( './container.js' )()
const { loadControllers, scopePerRequest } = require( 'awilix-express' )
server.use( scopePerRequest( container ) )
server.use( loadControllers( 'components/*/*-api.js', { cwd: __dirname } ) )

// Start server
const port = 3000
server.listen( port, () => console.log( `Server listening at http://localhost:${port}` ) )

