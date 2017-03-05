'use strict';
var mongoose= require('./../../db');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;


//program schema
var ResourceSchema = new Schema({ 
			_id: {type: ObjectId, unique:true},
			size: {type: String, unique: false, required:true}, 
			course_id: {type:ObjectId, unique: false, required:true},
			drive_url: {type: String, unique: true, required:true},
			name: {type: String, unique: true, required:true}
		}, 
           
         { collection : 'resources' });
module.exports = mongoose.model('Resource', ResourceSchema);