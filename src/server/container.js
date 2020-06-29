const { createContainer, asFunction } = require( 'awilix' )
const { makeCourseService, makeCourseRepo, makeCourseModel } = require( './components/course' )

const makeContainer = function() {

	const container = createContainer()
	container.register( {
		courseService: asFunction( makeCourseService ).scoped(),
		courseRepo: asFunction( makeCourseRepo ).singleton(),
		CourseModel: asFunction( makeCourseModel ).singleton()
	} )

	return container
}

module.exports = makeContainer