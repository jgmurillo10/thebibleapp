'use strict';
var mongoose= require('./../../db');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;


//program schema
var ResourceSchema = new Schema({ 
			_id: {type: ObjectId, unique:true},
			description: {type: String, unique: false, required:true}, 
			course_id: {type:ObjectId, unique: false, required:true},
			url: {type: String, unique: false, required:true},
			name: {type: String, unique: false, required:true}
		}, 
           
         { collection : 'resources' });
module.exports = mongoose.model('Resource', ResourceSchema);