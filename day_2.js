let fs = require( "fs" );
const day_2_input = fs.readFileSync( "day_2_input.txt", "utf8" );

let calculateFirstResult = function( input ) {
	const list = input.split( "\n" ).map( ( item ) => item.split( " " ) );

	let depth = 0;
	let horizontal = 0;

	for ( let i = 0; i < list.length; i++ ) {
		switch ( list[i][0] ) {
			case 'up':
				depth = depth - parseInt( list[i][1] );
				break;
			case 'down':
				depth = depth + parseInt( list[i][1] );
				break;
			case 'forward':
				horizontal = horizontal + parseInt( list[i][1] );
				break;
		}
	}

	console.log( "First result is " + depth * horizontal + " ( depth: " + depth + " ), ( horizontal: " + horizontal + " )" );
};

calculateFirstResult( day_2_input );

let calculateSecondResult = function( input ) {
	const list = input.split( "\n" ).map( ( item ) => item.split( " " ) );

	let depth = 0;
	let horizontal = 0;
	let aim = 0;

	for ( let i = 0; i < list.length; i++ ) {
		switch ( list[i][0] ) {
			case 'up':
				aim = aim - parseInt( list[i][1] );
				break;
			case 'down':
				aim = aim + parseInt( list[i][1] );
				break;
			case 'forward':
				horizontal = horizontal + parseInt( list[i][1] );
				depth = depth + ( parseInt( list[i][1] ) * aim );
				break;
		}
	}

	console.log( "Second result is " + depth * horizontal + " ( depth: " + depth + " ), ( horizontal: " + horizontal + " )" );
};

calculateSecondResult( day_2_input );
