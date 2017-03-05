'use strict';
var mongoose= require('./../../db');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

//program schema
var ProgramSchema = new Schema({ 
			url: {type: String, unique: false, required:true}, 
			_id: {type: ObjectId, unique:true},
			description: {type: String, unique: true, required:true},
			name: {type: String, unique: true, required:true}
		}, 
           
         { collection : 'programs' });
module.exports = mongoose.model('Program', ProgramSchema);