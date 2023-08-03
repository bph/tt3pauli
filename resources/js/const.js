/*
store constants that other files can import. 
An array of icon definitions named `ICONS`.
comment: probably could call it icons.js instead of const.js

This code exports a basic JavaScript array of objects. 
Each object provides a machine-readable `value` that will be used as part of the block style’s CSS class. 
Ultimately, this will create an `.is-style-icon-{value}` class.

The `icon` value is the symbol or emoji that will be used in the block style label.

*/
export const ICONS = [
	{ 
		value: 'floral-heart',   
		icon: '❦' 
	},
	{ 
		value: 'blossom',        
		icon: '🌼',
		gradient: 'luminous-vivid-amber-to-luminous-vivid-orange'
	},
	{ 
		value: 'sun',            
		icon: '☀️',
		gradient: 'luminous-vivid-amber-to-luminous-vivid-orange'
	},
	{ 
		value: 'feather',        
		icon: '🪶',
		gradient: 'cool-to-warm-spectrum'
	},
	{ 
		value: 'fire',           
		icon: '🔥',
		gradient: 'luminous-vivid-amber-to-luminous-vivid-orange'
	},
	{ 
		value: 'leaves',         
		icon: '🍃',
		gradient: 'electric-grass'
	},
	{ 
		value: 'coffee',         
		icon: '☕',
		gradient: 'cool-to-warm-spectrum'
	 },
	{ 
		value: 'beer',           
		icon: '🍻',
		gradient: 'cool-to-warm-spectrum'
	},
	{ 
		value: 'lotus',          
		icon: '🪷',
		gradient: 'luminous-dusk'
	},
	{ 
		value: 'melting-face',   
		icon: '🫠',
		gradient: 'luminous-vivid-amber-to-luminous-vivid-orange'
	},
	{ 
		value: 'guitar',         
		icon: '🎸',
		gradient: 'blush-bordeaux'
	},
	{ 
		value: 'pencil',         
		icon: '✏️',
		gradient: 'pale-ocean'
	},
	{ 
		value: 'rocket',         
		icon: '🚀',
		gradient: 'luminous-vivid-orange-to-vivid-red'
	},
	{
		value:    'clover',
		icon:     '☘️',
		gradient: 'electric-grass'
	},
	{
		value:    'star',
		icon:     '⭐',
		gradient: 'luminous-vivid-amber-to-luminous-vivid-orange'
	},
	{
		value:    'sunflower',
		icon:     '🌻',
		gradient: 'luminous-vivid-amber-to-luminous-vivid-orange'
	},
	{
		value:    'beach-umbrella',
		icon:     '⛱️',
		gradient: 'luminous-dusk'
	}
];


