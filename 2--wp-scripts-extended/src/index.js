import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';

import './webpack-public-path'; // critical for React.lazy() imports!

import App from './app';

/**
 * ID of element we're targeting for React to render.
 * <main id="mbtd-wp-scripts-demo"></main> in ../bootstrap.php.
 */
const ELEMENT_ID = 'mbtd-wp-scripts-demo';

/**
 * () => {} is called arrow syntax.
 * It's (mostly) equivalent to function() {}.
 */
const renderApp = () => {
	const DOM_ELEMENT = document.getElementById( ELEMENT_ID );
	if ( null !== DOM_ELEMENT && 'undefined' !== typeof render ) {
		render( <App />, DOM_ELEMENT );
	}
};

/**
 * If you've written jQuery, the concept of $(document).ready() probably feels familiar!
 */
domReady( renderApp );
