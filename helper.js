$(document).ready(function() {
	
	$('body').css({
		'background-color': '#111'
	});
	
	total_height = Math.floor( window.innerHeight / 14 );

});

var total_height = 0;

function animateColumn( column, height, color, offset_color ) {

	var h = total_height-height;
 	var elems = document.getElementsByClassName('column-' + column + '-img');
	
	for( var i = 0; i<elems.length; i++ ) {
		elems[i].style.backgroundColor = ( i>h ? color : offset_color );
	}
	
}