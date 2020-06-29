const { createContainer, asFunction, asValue } = require( 'awilix' )
const { makeDatabaseConnection } = require( './libs/database' )
const { makeCoursesService, makeCoursesRepo } = require( './components/courses' )

const makeContainer = async function() {
	const db = await makeDatabaseConnection()

	const container = createContainer()
	container.register( {
		db: asValue( db ),
		coursesService: asFunction( makeCoursesService ).scoped(),
		coursesRepo: asFunction( makeCoursesRepo ).singleton()
	} )

	return container
}

module.exports = makeContainer