
// Internal dependencies.
import { ICONS } from './const';

// WordPress dependencies.
import TokenList from '@wordpress/token-list';

/* 
    This function creates a DOM token list of classes by 
    passing the `className` variable into `TokenList`. 
    Then, it searches for a class containing one of the icon values. 
    If found, it returns the value for the icon. 
    Else, it returns an empty string.
*/

export const getIconFromClassName = ( className ) => {
	const list = new TokenList( className );

	const style = ICONS.find( ( option ) =>
		list.contains( `is-style-icon-${ option.value }` )
	);

	return undefined !== style ? style.value : '';
};

/* 
    This function uses the `TokenList` function to create a list of class names. 
    This makes it easy to target classes related to icons, 
    removing the old icon class and adding the new.
*/

export const updateIconClass = ( className, newIcon = '', oldIcon = '' ) => {
	const list = new TokenList( className );

	if ( oldIcon ) {
		list.remove( `is-style-icon-${ oldIcon }` );
	}

	if ( newIcon ) {
		list.add( `is-style-icon-${ newIcon }` );
	}

	return list.value;
};
