
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//html
app.get('/', routes.index_connected);
app.get('/index',routes.index_connected);
app.get('/index_default', routes.index_default);
app.get('/identite',routes.identite);
app.get('/projet',routes.projet);
app.get('/recherche',routes.recherche);

//css
app.get('/communCss', routes.communCss);
app.get('/accueilCss', routes.accueilCss);
app.get('/identiteCss', routes.identiteCss);
app.get('/projetCss', routes.projetCss);
app.get('/rechercheCss', routes.rechercheCss);

//js
app.get('/accueilJs', routes.accueilJs);
app.get('/jquery', routes.jquery);
app.get('/jqueryui', routes.jqueryui);
app.get('/identiteJs', routes.identiteJs);
app.get('/jscolor', routes.jscolor);
app.get('/canvas', routes.canvas);
app.get('/projetJs', routes.projetJs);
app.get('/communJs', routes.communJs);
	app.get('/tinymce', routes.tinymce);

//images
app.get('/nodejs', routes.imagesNode);
app.get('/imagesIdentite', routes.imagesIdentite);
app.get('/imgProjet', routes.imgProjet);
app.get('/imgPersonne', routes.imgPersonne);
app.get('/logo', routes.logo);

//videos
app.get('/montageMp4',routes.montageMp4);
app.get('/montageMov',routes.montageMov);

//users
app.get('/users', user.list);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
