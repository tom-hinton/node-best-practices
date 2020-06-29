const makeCoursesRepo = function( { db } ) {
	return {
		find: async () => await db.collection( 'courses' )
			.find( {} )
			.toArray()
			.then( ( docs ) => docs )
	}
}

module.exports = makeCoursesRepo