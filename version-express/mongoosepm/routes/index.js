/*
 * GET home page.
 */
 
var fs=require("fs");
var userSchema = require('../model/userSchema'); // appel du modèle mongoose utilisateur 
var projectSchema = require('../model/projectSchema'); // appel du modèle mongoose projet



/*	**************
	A LA CONNEXION
	**************	*/
/*	Renvoie l'accueil connecté ou pas selon les cookies	*/
exports.index = function(req, res) {
	if(req.session.loggedIn === true) {res.redirect('/index_connected');}		//S'il est loggé on renvoie index_connecté
	else {res.redirect('/index_default');}							//S'il est pas loggé on renvoie index_default
};
	
/*accueil non-connectée*/
exports.index_default = function(req, res){ // appel de la page index lorsqu'on est déconnecté
	console.log("une requete pr /");
	res.render('index', function(err,html){	// 1er rendu de l'index
		var data={
		title: 'Accueil',
		body: html
		};
	res.render('default', data); // 2nd rendu avec le layout correspondant au profil déconnecté appelé en callback
		});
};

/*accueil connecté*/
exports.index_connected = function(req, res){	// appel de la page index lorsqu'on est connecté
	console.log("une requete pr /");
	res.render('index', {user:req.session.user, userID: req.session.user._id}, function(err,html){	// on récupère les infos de l'utilisateur connecté et ouvre la page
		var data={
		title: 'Accueil',
		body: html
		};
	res.render('connected', data);	// 2nd rendu en appelant le layout correspondant au profil connecté appelé en callback
		});
};

/*	************
	LOGIN LOGOUT
	************	*/
	
/*	Se connecter	*/
exports.doLogin = function (req, res) {
	if(req.body.mail) {											//Si ce qui est dans la case est bien un email
		userSchema.User.findOne({'mail':req.body.mail},function(err, user) {	//On recherche un utilisaeur (inscrit)
			if(!err) {											//S'il n'y a pas d'erreur
				if(!user) {										//S'il n'y a pas d'utilisateur trouvé
					res.redirect('/index_default?404=user');	//On renvoie sur la page d'accueil avec une erreur
				}else{											//Si on trouve un utilisateur
					req.session.user = user;					//On met ses données dans un cookie de session
					req.session.loggedIn = true;				//On le considère connecté
					console.log(user + "s'est connecté");		
					user.update(
						{_id:user._id},							//On met à jour l'id
						{$set:{lastLogin : Date.now()} },		//On met à jour la dernière date de connexion (ne fonctionne pas)
						function(){
							res.redirect('/index');						//On retourne vers la page index_connected
						});
					}
			}else{												//S'il y a une erreur
				res.redirect('/index_default?404=error');
				}
			}
		);
	} else {													//Si ce n'est pas un email
		res.redirect('/index_default?404=error');				
	}
};

/*	Se déconnecter	*/
exports.doLogout = function (req, res) {
	console.log(req.session.user);
	req.session.loggedIn = false;
	console.log(req.session.user.mail + " s'est déconnecté");
	res.redirect('/index');
};

/*	*********
	RECHERCHE
	*********	*/
	
/* Page recherche non-connecté */
exports.recherche_default = function(req, res){	// appel du formulaire de recherche avec le rendu
	console.log("une requete pr recherche");
	res.render('recherche', function(err,html){
		var data={
		title: 'Recherche',
		body: html
		};
		res.render('default', data);
	});
};

/* Page recherche connecté */
exports.recherche_connected = function(req, res){	// appel du formulaire de recherche avec le rendu
	console.log("une requete pr recherche");
	res.render('recherche', function(err,html){
		var data={
		title: 'Recherche',
		body: html
		};
		res.render('connected', data);
	});
};

/* Fonction qui fait la recherche de projets */
exports.recherche_projet_Traitement = function(req, res){
	console.log("une requete pr traiter la recherche de projets et renvoyer les résultats");
	
};

/* Fonction qui fait la recherche de personnes */
exports.recherche_personne_Traitement = function(req, res){
	console.log("une requete pr traiter la recherche de personnes et renvoyer les résultats");
	var Users = userSchema.User.find({
		competences: req.body.competences,
		area : req.body.area,
		interests: req.body.interests
		})
};

