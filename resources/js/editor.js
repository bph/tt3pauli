// Internal dependencies.
import { ICONS } from "./const";

// WordPress dependencies.
import { registerBlockStyle } from '@wordpress/blocks';
import domReady               from '@wordpress/dom-ready';
import { __, sprintf }        from '@wordpress/i18n';

/*The code below waits until the DOM is ready and 
loops through each of the icons and registers them as a block style:
*/

// Register a block style for each icon.
domReady( () => {
	ICONS.forEach( ( icon ) =>
		registerBlockStyle( 'core/separator', {
			name: `icon-${ icon.value }`,
			label: sprintf( __( 'Icon: %s', 'tt3pauli' ), icon.icon )
		} )
	);
} );
