const MongoClient = require( 'mongodb' ).MongoClient

const makeDatabaseConnection = async function() {
	const client = new MongoClient( process.env.DATABASE_URL, {
		useUnifiedTopology: true
	} )
	const db = await client.connect()
		.then( () => console.log( 'Connected to database' ) )
		.then( () => client.db( 'eddy-local' ) )
		.catch( () => console.error( 'Error connecting to db' ) )
	return db
}

module.exports = makeDatabaseConnection