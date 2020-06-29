const makeCoursesRepo = function( { db } ) {
	return {
		find: async () => {
			const courses = await db.collection( 'courses' )
				.find( {} )
				.toArray()
				.then( ( docs ) => docs )
			return courses
		}
	}
}

module.exports = makeCoursesRepo