const { createController } = require( 'awilix-express' )
const { authorizationMiddleware } = require( '../user' )

const makeCourseApi = function( { courseService } ) {
	return {
		findCourses: async ( req, res ) => res.send(
			await courseService.getCourses()
		)
	}
}

module.exports = createController( makeCourseApi )
	.prefix( '/courses' )
	.before( authorizationMiddleware )
	.get( '', 'findCourses' )