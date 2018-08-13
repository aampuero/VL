<?php
if( ! defined( 'ABSPATH' ) ) exit;

/**
 * Functions
**/

require get_template_directory() . '/inc/init.php';
require get_template_directory() . '/inc/theme-functions.php';

/**
 * Note: Do not add any custom code here.
**/
function endeos_widgets_init() {
    register_sidebar( array(
        'name'          => 'Nueva zona de widgets',
        'id'            => 'id-del-widget',
        'before_widget' => '<div class="classe-widget">',
        'after_widget'  => '</div>',
    ) );
}

add_action( 'widgets_init', 'endeos_widgets_init' );