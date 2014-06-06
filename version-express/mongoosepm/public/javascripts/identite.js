//Choix du style
function updateGradient() {
	$('#droppable').css("background" , "linear-gradient(to bottom, #"+color1+", #"+color2+")");
};
/*
function verifier_email(input_email){
	var utilisateur = require('../model/utilisateur.js'); // appel du modèle mongoose utilisateur
	var query = utilisateur.Inscrit.find({email: input_email});
	query.exec(function(err, emails){
		if(err) {throw err;}
		if(emails.length>0){
			input_email.style.backgroundColor = 'red';
		}else{
			input_email.style.backgroundColor = 'green';
		}
	});
}
*/
/*
var fieldalias="mot de passe"
function verifier_pass(confirm_pass, pass){
	if(pass.value=''){
		alert("Veuillez entrer votre " + fieldalias + " dans le premier champ!")
		pass.focus()
	}
	else if(confirm_pass.value==''){
		alert("Veuillez confirmer votre "+ fieldalias + " dans le second champ!")
		confirm_pass.focus()
	}
	else if
*/
/*
function verifier_pass(confirm_pass,pass)
{	
	console.log(confirm_pass + pass);
	//Par exemple, si tu veux que le pseudo ait entre 4 et 25 caractères
	if(confirm_pass.value!=pass.value){
	confirm_pass.style.backgroundColor = 'red';
	}else{
	confirm_pass.style.backgroudColor = 'none';
	}
}
*/
