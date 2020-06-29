const mongoose = require( 'mongoose' )

const makeCourseModel = function() {
	const courseSchema = new mongoose.Schema( {
		name: String
	} )
	const CourseModel = mongoose.model( 'Course', courseSchema )
	return CourseModel
}

module.exports = makeCourseModel