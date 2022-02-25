const { writeFileSync } = require('fs');
const { join } = require('path');

const themeConfig = require('./theme/index.js');

try {
	writeFileSync(
		join( __dirname, './theme.json' ),
		JSON.stringify( themeConfig, null, 4 )
	);
	console.log( 'theme.json built successfully.' );
} catch ( err ) {
	console.log( 'failed to create theme.json file', err );
}