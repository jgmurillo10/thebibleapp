var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:thebible@ds161109.mlab.com:61109/thebibledb');
var Schema = mongoose.Schema;

//program schema
var ProgramSchema = new Schema({ 
			url: {type: String, unique: false, required:true}, 
			program_id: {type: Number, unique: true, required:true}, 
			_id: Number,
			description: {type: String, unique: true, required:true},
			name: {type: String, unique: true, required:true},
			courses: {required:false}
		}, 
           
         { collection : 'programs' });
module.exports = mongoose.model('Program', ProgramSchema);