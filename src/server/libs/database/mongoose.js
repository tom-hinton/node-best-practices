const mongoose = require( 'mongoose' )

class DatabaseConnection {
	constructor() {
		mongoose.connect( process.env.DATABASE_URL, { useNewUrlParser: true } )
			.catch( e => console.error( e ) )

		this.conn = mongoose.connection
		this.conn.on( 'error', e => console.error( e ) )
		this.conn.once( 'open', () => console.log( 'Connected to database' ) )
	}
}

module.exports = DatabaseConnection