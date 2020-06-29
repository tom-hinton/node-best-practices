const makeCourseRepo = function( { CourseModel } ) {

	return {
		find: async () => await CourseModel.find()
			.then( ( docs ) => docs )
	}
}

module.exports = makeCourseRepo