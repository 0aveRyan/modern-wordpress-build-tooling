<?php
/**
 * Plugin Name: WordPress Scripts Demo
 * Author: Dave Ryan
 * License: GPL 3.0
 */
namespace DaveRyan\BuildDemos;

/**
 * Register WordPress Dashboard Widget
 *
 * @return void
 */
function widget_register() {
    \wp_add_dashboard_widget(
        'demo-widget-container',
        \__('Demo Widget'),
        __NAMESPACE__ . '\\widget_render',
        null,
        null,
        'normal',
        'high'
    );
}
\add_action( 'wp_dashboard_setup', __NAMESPACE__ . '\\widget_register' );

/**
 * Render method that provides root element for React to mount onto.
 *
 * @return void
 */
function widget_render() {
    echo PHP_EOL . '<!-- START DEMO WIDGET -->' . PHP_EOL;
    echo '<main id="mbtd-wp-scripts-demo"></main>' . PHP_EOL;
    echo '<!-- END DEMO WIDGET -->';
}

/**
 * Register and enqueue generated assets with WordPress.
 *
 * @return void
 */
function assets() {
    $build_dir = \plugins_url( '1--wp-scripts/build', MWBT_FILE );
    $build_data_file = __DIR__ . '/build/index.asset.php';

    if ( ! is_readable( $build_data_file ) ) {
        return;
    }

    $build_data = include_once $build_data_file;

    \wp_register_script(
        'mbtd-wp-scripts-demo',
        $build_dir . '/index.js',
        $build_data['dependencies'],
        $build_data['version'],
        true
    );

    \wp_register_style(
        'mbtd-wp-scripts-demo',
        $build_dir . '/index.css',
        array('wp-components'),
        $build_data['version']
    );

    // NOTE: Due to scoped action hook, no need to check get_current_screen().
    \wp_enqueue_script( 'mbtd-wp-scripts-demo' );
    \wp_enqueue_style( 'mbtd-wp-scripts-demo' );
}
\add_action( 'load-index.php', __NAMESPACE__ . '\\assets' );