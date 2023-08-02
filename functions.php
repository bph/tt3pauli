<?php 

/* 
    Enqueue your theme’s main stylesheet (called screen.css) on the front end of your site. 

    First, the code assigns the array returned from the screen.asset.php file to an $asset variable. 
    Then, it calls the normal wp_enqueue_style() function to enqueue the stylesheet. 
    Note how the dependencies and version are passed directly to the function.
*/

add_action( 'wp_enqueue_scripts', 'tt3pauli_assets' );

function tt3pauli_assets() {
	$asset = include get_parent_theme_file_path( 'public/css/screen.asset.php' );

	wp_enqueue_style(
		'tt3pauli-style',
		get_parent_theme_file_uri( 'public/css/screen.css' ),
		$asset['dependencies'],
		$asset['version']
	);
}

/* 
    register the same stylesheet with the editor if you want your styles 
    to work on the backend. You do this with the add_editor_style() 
    function (you cannot pass dependencies or a version to this):
*/
add_action( 'after_setup_theme', 'tt3pauli_editor_styles' );

function tt3pauli_editor_styles() {
	add_editor_style( [
		get_parent_theme_file_uri( 'public/css/screen.css' )
	] );
}

/* 
    you need to enqueue your editor script and style:
*/
add_action( 'enqueue_block_editor_assets', 'tt3pauli_editor_assets' );

function tt3pauli_editor_assets() {
	$script_asset = include get_parent_theme_file_path( 'public/js/editor.asset.php'  );
	$style_asset  = include get_parent_theme_file_path( 'public/css/editor.asset.php' );

	wp_enqueue_script(
		'tt3pauli-editor',
		get_parent_theme_file_uri( 'public/js/editor.js' ),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);

	wp_enqueue_style(
		'tt3pauli-editor',
		get_parent_theme_file_uri( 'public/css/editor.css' ),
		$style_asset['dependencies'],
		$style_asset['version']
	);
}