const makeCoursesService = function( { coursesRepo } ) {
	return {
		getCourses: async () => {
			const courses = await coursesRepo.find()
			return courses
		}
	}
}

module.exports = makeCoursesService