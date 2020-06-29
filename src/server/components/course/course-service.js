const makeCourseService = function( { courseRepo } ) {
	return {
		getCourses: async () => await courseRepo.find()
	}
}

module.exports = makeCourseService