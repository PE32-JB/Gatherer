	var x=100;
	var rect = document.getElementById("mon_canvas");
	var ctx = rect.getContext("2d");
					ctx.beginPath();
					ctx.moveTo(10,10);    // Le tracé part du point 50,50
					ctx.lineTo(x,10);   
					ctx.lineTo(x,40);   
					ctx.lineTo(10,40); 	
					ctx.lineTo(10,10);
					ctx.closePath();      // Fermeture du chemin (facultative)
					ctx.stroke();
					ctx.fill();
					ctx.beginPath();      // Début du chemin
					ctx.moveTo(10,10);    // Le tracé part du point 50,50
	ctx.lineTo(200,10);  
	ctx.lineTo(200,40);   
	ctx.lineTo(10,40); 	
	ctx.lineTo(10,10);
	ctx.closePath();      // Fermeture du chemin (facultative)
	ctx.stroke();
