const { createContainer, asFunction, asClass } = require( 'awilix' )
const { DatabaseConnection } = require( './libs/database' )
const { makeCoursesService, makeCoursesRepo, makeCourseModel } = require( './components/courses' )

const makeContainer = function() {

	const container = createContainer()
	container.register( {
		coursesService: asFunction( makeCoursesService ).scoped(),
		coursesRepo: asFunction( makeCoursesRepo ).singleton(),
		CourseModel: asFunction( makeCourseModel ).singleton(),
		databaseConnection: asClass( DatabaseConnection ).singleton()
	} )

	return container
}

module.exports = makeContainer