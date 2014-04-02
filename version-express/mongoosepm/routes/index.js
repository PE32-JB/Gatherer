
/*
 * GET home page.
 */
 
 
var fs=require("fs");

exports.index_connected = function(req, res){
	console.log("une requete pr /");
	res.render('index.ejs', function(err,html){
		var data={
		title: 'Accueil',
		body: html
		};
	res.render('connected.ejs', data);
		});
};

exports.communCss = function(req,res){
	console.log("une requete pr le css commun");
	fs.readFile("./public/stylesheets/commun.css","utf8",function(error,file){
	if(error){
		console.log("ERREUR");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"text/css"});
		res.write(file);
		res.end();
	}
	})
};

exports.communJs = function(req,res){
	console.log("une requete pr le js de commun");
	fs.readFile("./public/javascripts/commun.js","utf8",function(error,file){
	if(error){
		console.log("ERREUR");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"text/js"});
		res.write(file);
		res.end();
	}
	})
};

exports.accueilCss = function(req,res){
	console.log("une requete pr le css d'accueil");
	fs.readFile("./public/stylesheets/accueil.css","utf8",function(error,file){
	if(error){
		console.log("ERREUR");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"text/css"});
		res.write(file);
		res.end();
	}
	})
};

exports.imagesNode = function(req,res){
	fs.readFile("./public/images/nodejs.jpg","binary",function(error,file){
	if(error){
		console.log("ERREUR pr imagesNode");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"image/jpeg"});
		res.write(file,"binary");
		res.end();
	}
	})
};


exports.jquery = function(req,res){
	console.log("une requete pr le jquery");
	fs.readFile("./public/javascripts/jquery/js/jquery.js","utf8",function(error,file){
	if(error){
		console.log("ERREUR");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"text/js"});
		res.write(file);
		res.end();
	}
	})
};

exports.jqueryui = function(req,res){
	console.log("une requete pr le jquery_ui");
	fs.readFile("./public/javascripts/jquery/js/jqueryui.js","utf8",function(error,file){
	if(error){
		console.log("ERREUR");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"text/js"});
		res.write(file);
		res.end();
	}
	})
};

exports.accueilJs = function(req,res){
	console.log("une requete pr le js d'accueil");
	fs.readFile("./public/javascripts/accueil.js","utf8",function(error,file){
	if(error){
		console.log("ERREUR");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"text/js"});
		res.write(file);
		res.end();
	}
	})
};

exports.identite = function(req, res){
	console.log("une requete pr identite");
	res.render('identite.ejs', function(err,html){
		var data={
		title: 'Page personnelle',
		body: html
		};
	res.render('default.ejs', data);
		});
};

exports.identiteCss = function(req,res){
	console.log("une requete pr le css d'identite");
	fs.readFile("./public/stylesheets/identite.css","utf8",function(error,file){
	if(error){
		console.log("ERREUR");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"text/css"});
		res.write(file);
		res.end();
	}
	})
};

exports.imagesIdentite = function(req,res){
	fs.readFile("./public/images/identite.jpg","binary",function(error,file){
	if(error){
		console.log("ERREUR pr imagesNode");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"image/jpeg"});
		res.write(file,"binary");
		res.end();
	}
	})
};

exports.jscolor = function(req,res){
	console.log("une requete pr jscolor");
	fs.readFile("./public/javascripts/jscolor/jscolor.js","utf8",function(error,file){
	if(error){
		console.log("ERREUR");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"text/js"});
		res.write(file);
		res.end();
	}
	})
};

exports.tinymce = function(req,res){
	console.log("une requete pr tinymce");
	fs.readFile("./public/javascripts/tinymce/tinymce.js","utf8",function(error,file){
	if(error){
		console.log("ERREUR");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"text/js"});
		res.write(file);
		res.end();
	}
	})
};

exports.identiteJs = function(req,res){
	console.log("une requete pr le js d'identite");
	fs.readFile("./public/javascripts/accueil.js","utf8",function(error,file){
	if(error){
		console.log("ERREUR");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"text/js"});
		res.write(file);
		res.end();
	}
	})
};

exports.identiteTraitement = function(req,res){
	console.log("une requete pr le js traitement d'identite");
	console.log("que faire ?");
};

exports.projet = function(req, res){
	console.log("une requete pr projet");
	res.render('projet.ejs', function(err,html){
		var data={
		title: 'Projet',
		body: html
		};
	res.render('default.ejs', data);
		});
};

exports.projetCss = function(req,res){
	console.log("une requete pr le css de projet");
	fs.readFile("./public/stylesheets/projet.css","utf8",function(error,file){
	if(error){
		console.log("ERREUR");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"text/css"});
		res.write(file);
		res.end();
	}
	})
};

exports.canvas = function(req,res){
	console.log("une requete pr canvas");
	fs.readFile("./public/javascripts/canvas.js","utf8",function(error,file){
	if(error){
		console.log("ERREUR");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"text/js"});
		res.write(file);
		res.end();
	}
	})
};

exports.montageMp4 = function(req,res){
	console.log("une requete pr mp4");
	fs.readFile("./public/videos/Montage.mp4","binary",function(error,file){
	if(error){
		console.log("ERREUR pr video mp4");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"video/mp4"});
		res.write(file,"binary");
		res.end();
	}
	})
};

exports.montageMov = function(req,res){
	console.log("une requete pr mov");
	fs.readFile("./public/videos/Montage.mov","binary",function(error,file){
	if(error){
		console.log("ERREUR pr video mov");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"video/mov"});
		res.write(file,"binary");
		res.end();
	}
	})
};

exports.projetJs = function(req,res){
	console.log("une requete pr projet js");
	fs.readFile("./public/javascripts/projet.js","utf8",function(error,file){
	if(error){
		console.log("ERREUR");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"text/js"});
		res.write(file);
		res.end();
	}
	})
};


exports.recherche = function(req, res){
	console.log("une requete pr recherche");
	res.render('recherche.ejs', function(err,html){
		var data={
		title: 'Recherche',
		body: html
		};
	res.render('default.ejs', data);
		});
};

exports.rechercheCss = function(req,res){
	console.log("une requete pr le css de recherche");
	fs.readFile("./public/stylesheets/recherche.css","utf8",function(error,file){
	if(error){
		console.log("ERREUR");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"text/css"});
		res.write(file);
		res.end();
	}
	})
};

exports.imgProjet = function(req,res){
	fs.readFile("./public/images/imgProjet.jpg","binary",function(error,file){
	if(error){
		console.log("ERREUR pr imgProjet");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"image/jpeg"});
		res.write(file,"binary");
		res.end();
	}
	})
};

exports.imgPersonne = function(req,res){
	fs.readFile("./public/images/imgPersonne.png","binary",function(error,file){
	if(error){
		console.log("ERREUR pr imgPersonne");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"image/png"});
		res.write(file,"binary");
		res.end();
	}
	})
};

exports.logo = function(req,res){
	fs.readFile("./public/images/logo.png","binary",function(error,file){
	if(error){
		console.log("ERREUR pr logo");
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.write("404 NOT FOUND");
		res.end();
	}
	else{
		res.writeHead(200,{"Content-Type":"image/png"});
		res.write(file,"binary");
		res.end();
	}
	})
};

exports.index_default = function(req, res){
	console.log("une requete pr /");
	res.render('index.ejs', function(err,html){
		var data={
		title: 'Accueil',
		body: html
		};
	res.render('default.ejs', data);
		});
};