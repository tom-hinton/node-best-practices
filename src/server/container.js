const { createContainer, asFunction, asClass } = require( 'awilix' )
const { DatabaseConnection } = require( './libs/database' )
const { makeCourseService, makeCourseRepo, makeCourseModel } = require( './components/course' )

const makeContainer = function() {

	const container = createContainer()
	container.register( {
		courseService: asFunction( makeCourseService ).scoped(),
		courseRepo: asFunction( makeCourseRepo ).singleton(),
		CourseModel: asFunction( makeCourseModel ).singleton(),
		databaseConnection: asClass( DatabaseConnection ).singleton()
	} )

	return container
}

module.exports = makeContainer