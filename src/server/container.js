const { createContainer, asFunction } = require( 'awilix' )
const { makeCourseService, makeCourseRepo, makeCourseModel } = require( './components/course' )
const { makeUserService, makeOauth2Client } = require( './components/user' )

const makeContainer = function() {

	const container = createContainer()
	container.register( {
		courseService: asFunction( makeCourseService ).scoped(),
		courseRepo: asFunction( makeCourseRepo ).singleton(),
		CourseModel: asFunction( makeCourseModel ).singleton(),
		userService: asFunction( makeUserService ).scoped(),
		oauth2Client: asFunction( makeOauth2Client ).singleton()
	} )

	return container
}

module.exports = makeContainer