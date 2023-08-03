/*
// Internal dependencies.
import { ICONS } from "./const";

// WordPress dependencies.
import { registerBlockStyle } from '@wordpress/blocks';
import domReady               from '@wordpress/dom-ready';
import { __, sprintf }        from '@wordpress/i18n';
*/
/*The code below waits until the DOM is ready and 
loops through each of the icons and registers them as a block style:
*/
/*
// Register a block style for each icon.
domReady( () => {
	ICONS.forEach( ( icon ) =>
		registerBlockStyle( 'core/separator', {
			name: `icon-${ icon.value }`,
			label: sprintf( __( 'Icon: %s', 'tt3pauli' ), icon.icon )
		} )
	);
} );
Above is the code from part 2 of the series. 
In part 3 we will modify the approach
*/ 
// Internal dependencies.
import SeparatorIconControl from './control-icons';

// WordPress dependencies.
import { BlockControls } from '@wordpress/block-editor';
import { addFilter } from '@wordpress/hooks';

const withSeparatorIcons = ( BlockEdit ) => ( props ) => {
	return 'core/separator' === props.name ? (
		<>
			<BlockEdit { ...props } />
			<BlockControls group="other">
				<SeparatorIconControl
					attributes={ props.attributes }
					setAttributes={ props.setAttributes }
				/>
			</BlockControls>
		</>
	) : (
		<BlockEdit { ...props } />
	);
};

addFilter(
	'editor.BlockEdit',
	'tt3pauli/separator-icons',
	withSeparatorIcons
);

