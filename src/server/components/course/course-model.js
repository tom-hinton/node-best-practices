const mongoose = require( 'mongoose' )

const makeCourseModel = function( { databaseConnection: { conn } } ) {
	const courseSchema = new mongoose.Schema( {
		name: String
	} )
	const CourseModel = conn.model( 'Course', courseSchema )
	return CourseModel
}

module.exports = makeCourseModel