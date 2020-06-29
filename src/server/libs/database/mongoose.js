const mongoose = require( 'mongoose' )

mongoose.connect( process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
} )
	.catch( e => console.error( e ) )

const conn = mongoose.connection

conn.on( 'error', e => console.error( e ) )
conn.once( 'open', () => console.log( 'Connected to database' ) )

module.exports = conn