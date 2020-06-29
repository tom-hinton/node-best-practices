const makeCoursesService = function( { coursesRepo } ) {
	return {
		getCourses: async () => await coursesRepo.find()
	}
}

module.exports = makeCoursesService