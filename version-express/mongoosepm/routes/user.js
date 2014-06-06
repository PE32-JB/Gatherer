
/*
 * GET users listing.
 */
exports.list = function(req, res){
  res.send("respond with a resource");
};

/*	********
	REQUIERE
	********	*/
var fs=require("fs");
var userSchema = require('../model/userSchema');
var crypto = require("crypto");
	
/*	***************
	CREER UN COMPTE
	***************	*/

/*	Accès au Formulaire	*/
exports.identite_formulaire = function(req, res){	// Génération du formulaire
	res.render('identite_formulaire', function(err,html){
		var data={
		title: 'Mon Profil',
		body: html
		};
		res.render('default', data);
	});
};

/*	Créer un utilisateur	*/
exports.doCreateUser = function(req,res){	// fonction de traitement du formulaire d'inscription
	userSchema.User.create({ 				// Création d'un nouvel utilisateur (récupère données et les enregistre)
		mail: req.body.mail,					// Récupération des différentes données
		password: req.body.password,
		userLastName: req.body.userLastName,	
		userFirstName: req.body.userFirstName,
		birthDate: req.body.birthDate,
		country: req.body.country,
		area: req.body.area,
		town: req.body.town,
		phone: req.body.phone,
		competences: req.body.competences,
		interests: req.body.interests,
		sports: req.body.sports,
		leisures: req.body.leisures,
		otherInterests: req.body.otherInterests,
		profession: req.body.profession,
		studies: req.body.studies,
		diplomas: req.body.diplomas,
		otherProfession: req.body.otherProfession
	}, function(err, user){ 					// Sauvegarde de l'utilisateur et des données dans Inscrit
		if(err){
			console.log(err);
			res.redirect('/identite_formulaire');	// Renvoie au formulaire
		}else{
			user.speak();						// méthode pour demander le prénom de l'utilisateur dans la fenêtre de commande
			console.log(user);
			req.session.user = user;			//Enregistre les informations sur l'utilisateur dans un coockie session
			req.session.loggedIn = true;		//Considère la session ouverte
			res.redirect('/identite_statique');	//Redirige directement vers la page
		}
	});
};

/*	Accès à son compte	*/
exports.identite_statique = function(req, res) {
	console.log("une requete pour personne");
	res.render('identite_statique', {user: req.session.user}, function(err, html){	//Les données de user sont dans la session
		var data = {
				title: "Mon Profil",
				body: html
			};
			res.render('connected', data);	// 2nd rendu en appelant le layout (ici connecté)
		});
};

/*	******************
	MODIFIER UN COMPTE
	******************	*/
	
/*	Modifier un utilisateur	*/
exports.identite_modification = function(req, res){	// fonction de modification -> ne va pas être conservée, on se contentera de faire des updates un peu comme la page projet, à voir comment on mettra ça en oeuvre
};

/*	supprimer un utilisateur	*/
exports.identite_suppression = function(req, res){	// fonction de suppression du compte -> à relier au bouton supprimer mon compte de la page identite
};



/* ******************************* 
   SUPPRIMER TOUS LES UTILISATEURS
   ******************************* */

/* Fonction pour effacer la bdd contenant les utilisateurs */
exports.doDeleteAllUsers = function(req, res){
	userSchema.User.find({}, function(err, gens){
		console.log(gens);
		userSchema.User.remove({}, function(err){
			if(err) return console.error(err);
			console.log("base de donnees utilisateurs effacee");
			userSchema.User.find({}, function(err, insc){
				if(err) return console.error(err);
				console.log(insc);
				setTimeout(function(){res.redirect('index_default');},1000);
			});
		});
	});
};
