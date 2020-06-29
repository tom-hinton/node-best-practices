const { createController } = require( 'awilix-express' )

const makeCourseApi = function( { courseService } ) {
	return {
		findCourses: async ( req, res ) => res.send(
			await courseService.getCourses()
		)
	}
}

module.exports = createController( makeCourseApi )
	.prefix( '/courses' )
	.get( '', 'findCourses' )