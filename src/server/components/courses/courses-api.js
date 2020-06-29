const { createController } = require( 'awilix-express' )

const makeCoursesApi = function( { coursesService } ) {
	return {
		findCourses: async ( req, res ) => res.send(
			await coursesService.getCourses()
		)
	}
}

module.exports = createController( makeCoursesApi )
	.prefix( '/courses' )
	.get( '', 'findCourses' )