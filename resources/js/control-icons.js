// Internal dependencies.
import { ICONS } from './const';
import { getIconFromClassName, updateIconClass } from './utils';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { starFilled } from '@wordpress/icons';

import {
	BaseControl,
	Button,
	Dropdown,
	ToolbarButton,
	__experimentalGrid as Grid
} from '@wordpress/components';

export default ( { attributes: { className }, setAttributes } ) => {
    // Get the current icon.
    const currentIcon = getIconFromClassName( className );

	// Update the icon class and gradient.
    const onIconButtonClick = ( icon ) => {
        console.log('Clicked Icon:', icon);
        console.log('Current ClassName:', className);

        setAttributes( {
	    className: updateIconClass(
            className,
            currentIcon === icon.value ? '' : icon.value,
            currentIcon
        ),
        gradient: currentIcon === icon.value || ! icon?.gradient
            ? undefined
            : icon?.gradient
    });
    
    console.log('current icon:', currentIcon);
     // Log the updated attributes after calling setAttributes.
       console.log('Updated Attributes:', {
        className: updateIconClass(
            className,
            currentIcon === icon.value ? '' : icon.value,
            currentIcon
        ),
        gradient: currentIcon === icon.value || !icon?.gradient
            ? undefined
            : icon?.gradient
    });
} 
    // Builds a menu item for an icon.
    const iconButton = ( icon, index ) => (
        <Button
            key={ index }
            isPressed={ currentIcon === icon.value }
            className="tt3pauli-sep-icons-picker__button"
            onClick={ () => onIconButtonClick( icon ) }
        >
            { icon.icon ?? icon.value }
        </Button>
    );
        // Builds an icon picker in a 6-column grid.
    const iconPicker = (
        <BaseControl
            className="tt3pauli-sep-icons-picker"
            label={ __( 'Icons', 'tt3pauli' ) }
        >
            <div className="tt3pauli-sep-icons-picker__description">
                { __( 'Pick an icon to super-charge your separator.', 'tt3pauli' ) }
            </div>
            <Grid className="tt3pauli-sep-icons-picker__grid" columns="6">
                { ICONS.map( ( icon, index ) =>
                    iconButton( icon, index )
                ) }
            </Grid>
        </BaseControl>
    );
    // Returns the dropdown menu item.
    return (
        <Dropdown
            className="tt3pauli-sep-icons-dropdown"
            contentClassName="tt3pauli-sep-icons-popover"
            popoverProps={ {
                headerTitle: __( 'Separator Icons', 'tt3pauli' ),
                variant: 'toolbar'
            } }
            renderToggle={ ( { isOpen, onToggle } ) => (
                <ToolbarButton
                    className="tt3pauli-sep-icons-dropdown__button"
                    icon={ starFilled }
                    label={ __( 'Separator Icon', 'tt3pauli' ) }
                    onClick={ onToggle }
                    aria-expanded={ isOpen }
                    isPressed={ !! currentIcon }
                />
            ) }
            renderContent={ () => iconPicker }
        />
    );
    }
