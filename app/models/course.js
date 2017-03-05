'use strict';
var mongoose= require('./../../db');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;


//program schema
var CourseSchema = new Schema({ 
			_id: {type: ObjectId, unique:true},
			url: {type: String, unique: false, required:true}, 
			program_id: {type:ObjectId, unique: false, required:true},
			description: {type: String, unique: false, required:true},
			name: {type: String, unique: true, required:true},
			code: {type: String, unique: true, required:true}
		}, 
           
         { collection : 'courses' });
module.exports = mongoose.model('Course', CourseSchema);