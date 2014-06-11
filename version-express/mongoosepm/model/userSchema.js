
var mongooseUser = require('mongoose');
	mongooseUser.createConnection('mongodb://localhost/users');
	
/*	******
	SCHEMA
	******	*/
var Schema = mongooseUser.Schema;

var userSchema = new Schema({	// Création d'un schéma userSchema (pour la création d'utilisateur)
	mail: {type: String, unique: true, required: true},
	password: {type: String, min: 8, max: 20, required: true},
	userLastName: {type: String, required: true},
	userFirstName: {type: String, required: true},
	birthDate: { type: Date, required: true},
	country: {type: String, required: true},
	area: {type: String, required: true},
	town: {type: String, required: true},
	phone: {type: String, required: true},
	group: {type: String},
	competences: {type: String},
	interests: {type: String},
	sports: {type: String},
	leisures: {type: String},
	ohterInterests: {type: String},
	profession: {type: String},
	studies: {type: String},
	diplomas: {type: String},
	ohterProfession: {type: String},
	project: [{type: mongooseUser.Schema.Types.ObjectId, ref: 'project'}],
	group: [{type: mongooseUser.Schema.Types.ObjectId, ref: 'group'}],
	createdOn: {type: Date, default: Date.now},
	modifiedOn: {type: Date, default: Date.now},
	lastLogin: {type: Date, default: Date.now}
});

/*	********
	METHODES
	********	*/
	
//Remaque: les methodes doivent absolument être déclarées après les schémas et avant les modèles

/*	Méthode pour appeler l'utilisateur sur la commande	*/
userSchema.methods.speak = function () {		// Méthode propre à inscritSchema
	var greeting = this.userFirstName
		? "Mon prénom est " + this.userFirstName
		: "Je n'ai pas de prénom."
	console.log(greeting);
};

userSchema.statics.findByName = function (tag, callback) {
	this.find({ userFirstName : tag },{sort: 'modifiedOn'}, callback);
};


/*	*****
	MODEL
	*****	*/

exports.User = mongooseUser.model('User', userSchema);	// Export du modèle Inscrit 

