$(document).ready(function() {
	
	// hey!
	var width = 14;
	var height = 14;

	_.times( Math.ceil(window.innerWidth / width), function(column) {
		
		$('<div class="column column-' + column + '"></div>').appendTo('body');

		_.times( Math.ceil(window.innerHeight / height), function(row) {
			
			$('<img src="circle.png" row="' + row + '" column="' + column + '" class="dot" />')
				.addClass('row-' + row)
				.addClass('column-' + column)
				.addClass('column-' + column + '-img')
				.appendTo('div.column-' + column);
			
		});

	});
	
	$('.column').height( Math.ceil( window.innerWidth / width ) * width );
	
});