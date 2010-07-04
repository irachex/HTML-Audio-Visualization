var rgb2hex = {
	to: function( r, g, b ) {
		this.lastR = r;
		this.lastG = g;
		this.lastB = b;
		
		return this.toHex( r ) + this.toHex( g ) + this.toHex( b );
	},
	toHex: function( n ) {
		var st = '0123456789ABCDEF';
		
		if( n == null ) return '00';
		n = parseInt( n );
		if( n == 0 || isNaN( n ) ) return '00';
		n = Math.round( Math.min( Math.max( 0, n ), 255 ) );
		return st.charAt( (n-(n%16))/16 ) + st.charAt(n%16);
	},
	random: function( r, g, b ) {
		return this.to( Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256) );
	},
	inverse: function( r, g, b ) {
		if( r == null && g == null & b == null ) {
			r = this.lastR;
			g = this.lastG;
			b = this.lastB;
		}
		
		return this.to( 255-r, 255-g, 255-b );
	},
	descramble: function( text ) {
		text = text.replace('rgb(', '').replace(')', '');
		text = text.split(', ');
		
		return this.to( text[0], text[1], text[2] );
	},
	returnTotal: function( r, g, b ) {
		if( r == null && g == null & b == null ) {
			r = this.lastR;
			g = this.lastG;
			b = this.lastB;
		}
		
		return r + g + b;
	}
}