<?php
// myplugin.php

function myplugin_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'myplugin-block',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' )
	);
}
add_action( 'enqueue_block_editor_assets', 'myplugin_enqueue_block_editor_assets' );
