let fs = require( "fs" );
const day_3_input = fs.readFileSync( "day_3_input.txt", "utf8" );

let calculateFirstResult = function( input ) {
	// filter() filters out empty strings
	const list = input.split( "\n" ).filter ( item => item ) ;

	let epsilon = '';
	let gamma = '';

	for ( let i = 0; i < list[0].length; i++ ) {
		let nthNumbers = [];
		let sum;
		let average;
		let gammaNumber;
		let epsilonNumber;
		for ( let j = 0; j < list.length; j++ ) {
			nthNumbers.push( parseInt( list[ j ][ i ]) );
		}
		sum = nthNumbers.reduce( ( a, b ) => a + b, 0);
		average = sum / nthNumbers.length;

		if ( average > 0.5 ){
			gammaNumber = '1';
			epsilonNumber = '0';
		}
		else {
			gammaNumber = '0';
			epsilonNumber = '1';
		}
		gamma = gamma + gammaNumber;
		epsilon = epsilon + epsilonNumber;
	}

	let decimalGamma = parseInt( gamma, 2 );
	let decimalEpsilon = parseInt( epsilon, 2 );

	console.log( "First result is " + decimalGamma * decimalEpsilon + " ( gamma: " + decimalGamma + " ), ( epsilon: " + decimalEpsilon + " )" );
};

calculateFirstResult( day_3_input );


