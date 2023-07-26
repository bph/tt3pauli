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
	{ value: 'floral-heart',   icon: '❦' },
	{ value: 'blossom',        icon: '🌼' },
	{ value: 'sun',            icon: '☀️' },
	{ value: 'feather',        icon: '🪶' },
	{ value: 'fire',           icon: '🔥' },
	{ value: 'leaves',         icon: '🍃' },
	{ value: 'coffee',         icon: '☕' },
	{ value: 'beer',           icon: '🍻' },
	{ value: 'lotus',          icon: '🪷' },
	{ value: 'melting-face',   icon: '🫠' },
	{ value: 'guitar',         icon: '🎸' },
	{ value: 'pencil',         icon: '✏️' },
	{ value: 'rocket',         icon: '🚀' },
	{ value: 'clover',         icon: '☘️' },
	{ value: 'star',           icon: '⭐' },
	{ value: 'sunflower',      icon: '🌻' },
	{ value: 'beach-umbrella', icon: '⛱️' }
];


