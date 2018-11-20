// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets

$(document).ready(function() {

// montrer le 1 par défaut 
    $(".tab").eq(0).show();
    $(".tab").eq(1).hide();
    $(".tab").eq(2).hide();

// montrer quand click 1
	$(".cat-title button").eq(0).click(function() {
		$(".tab").eq(0).show();
		$(".tab").eq(1).hide();
		$(".tab").eq(2).hide();
	});

// montrer quand click 2
	$(".cat-title button").eq(1).click(function() {
		$(".tab").eq(0).hide();
		$(".tab").eq(1).show();
		$(".tab").eq(2).hide();
	});

// montrer quand click 3
	$(".cat-title button").eq(2).click(function() {
		$(".tab").eq(0).hide();
		$(".tab").eq(1).hide();
		$(".tab").eq(2).show();

	});

// cacher par défaut le menu déroulant de l'avatar
	$(".show_avatar").hide();

// montrer menu déroulant quand click avatar
	$(".rounded-circle").on("click", function(){
		$(".show_avatar").show();
	});

// par défaut, cacher le modal
	$("#modal").hide();

// ouvrir le modal .nav-link-log
	$("#login").on('click',function(){
		$("#modal").show();		
		$("#form_content_login").show();
		$("#form_content_signup").hide();
	});

	$("#signup").click(function(){
		$("#modal").show();
		$("#form_content_login").hide();
		$("#form_content_signup").show();
	});

	$("#buttonlogin").on('click',function(){
		$("#modal").show();		
		$("#form_content_login").show();
		$("#form_content_signup").hide();
	});

	$("#buttonsignup").on('click',function(){
		$("#modal").show();		
		$("#form_content_login").hide();
		$("#form_content_signup").show();
	});

	$(".close").click(function(){
		$("#modal").hide();
	});

// POUR LE CARROUSEL
var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
    indexImg = $img.length - 1, // on définit l'index du dernier élément
    i = 0, // on initialise un compteur
    $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

$img.css('display', 'none'); // on cache les images
$currentImg.css('display', 'block'); // on affiche seulement l'image courante

$carrousel.append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');

$('.next').click(function(){ // image suivante

    i++; // on incrémente le compteur

    if( i <= indexImg ){
        $img.css('display', 'none'); // on cache les images
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.css('display', 'block'); // puis on l'affiche
    }
    else{
        i = indexImg;
    }

});

$('.prev').click(function(){ // image précédente

    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i >= 0 ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }

});

function slideImg(){
    setTimeout(function(){ // on utilise une fonction anonyme
						
        if(i < indexImg){ // si le compteur est inférieur au dernier index
	    i++; // on l'incrémente
	}
	else{ // sinon, on le remet à 0 (première image)
	    i = 0;
	}

	$img.css('display', 'none');

	$currentImg = $img.eq(i);
	$currentImg.css('display', 'block');

	slideImg(); // on oublie pas de relancer la fonction à la fin

    }, 5000); // on définit l'intervalle à 5000 millisecondes (5s)
}

slideImg(); // enfin, on lance la fonction une première fois


});





