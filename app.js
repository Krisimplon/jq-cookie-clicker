function gateau() {
$(document).ready(function(){ 
		var nbr = 0;
	$(".cake").click(function(){ //écouter les clicks sur la photo
		var total = ++nbr;
		$(".counter").html(total); //afficher le nbr de click à la place du 0 
		
		if (total%20 == 0) { //si le nombre de click est un multiple de 20
			var message = ['Attention!', 'Tu vas finir idiot', 'Changes un peu!', 'Ca suffit'];//tableau de message
			var number = Math.floor ( Math.random() * message.length ); //sélectionne de façon aléatoire les mess
			alert(message[number]);   //affiche un mess d'alerte aléatoire

};
});
});
};

gateau()
