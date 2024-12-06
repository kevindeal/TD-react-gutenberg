<?php
add_action( 'after_setup_theme', 'tdnext_setup' );
function tdnext_setup() {
load_theme_textdomain( 'tdnext', get_template_directory() . '/languages' );
add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'responsive-embeds' );
add_theme_support( 'automatic-feed-links' );
add_theme_support( 'html5', array( 'search-form', 'navigation-widgets' ) );
add_theme_support( 'woocommerce' );
global $content_width;
if ( !isset( $content_width ) ) { $content_width = 1920; }
register_nav_menus(
	array(
	// Header Menus
	'primary' => __( 'Primary', 'primary' ),
	'utility' => __( 'Utility', 'utility' ),
	)
);
}



add_action( 'admin_notices', 'tdnext_notice' );
function tdnext_notice() {
	$user_id = get_current_user_id();
	$admin_url = ( isset( $_SERVER['HTTPS'] ) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http' ) . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	$param = ( count( $_GET ) ) ? '&' : '?';
	if ( !get_user_meta( $user_id, 'tdnext_notice_dismissed_9' ) && current_user_can( 'manage_options' ) ) {
		echo '<div class="notice notice-info"><p><a href="' . esc_url( $admin_url ), esc_html( $param ) . 'dismiss" class="alignright" style="text-decoration:none"><big>' . esc_html__( 'Ⓧ', 'tdnext' ) . '</big></a>' . wp_kses_post( __( '<big><strong>🏆 Thank you for using TDNext!</strong></big>', 'tdnext' ) ) . '<p>' . esc_html__( 'Powering over 10k websites! Buy me a sandwich! 🥪', 'tdnext' ) . '</p><a href="https://opencollective.com/tdnext" class="button-primary" style="background-color:green;border-color:green" target="_blank"><strong>' . esc_html__( 'Donate', 'tdnext' ) . '</strong> ' . esc_html__( '(New Open Collective)', 'tdnext' ) . '</a> <a href="https://wordpress.org/support/theme/tdnext/reviews/#new-post" class="button-primary" style="background-color:purple;border-color:purple" target="_blank"><strong>' . esc_html__( 'Review', 'tdnext' ) . '</strong></a> <a href="https://github.com/tidythemes/tdnext/issues" class="button-primary" style="background-color:orange;border-color:orange" target="_blank"><strong>' . esc_html__( 'Support', 'tdnext' ) . '</strong></a></p></div>';
	}
}

add_action( 'admin_init', 'tdnext_notice_dismissed' );
function tdnext_notice_dismissed() {
	$user_id = get_current_user_id();
	if ( isset( $_GET['dismiss'] ) ) {
		add_user_meta( $user_id, 'tdnext_notice_dismissed_9', 'true', true );
	}
}

add_action( 'wp_enqueue_scripts', 'tdnext_enqueue' );
function tdnext_enqueue() {
	wp_enqueue_style( 'tdnext-style', get_stylesheet_uri() );
	wp_enqueue_script( 'jquery' );
}

add_action('admin_enqueue_scripts', 'tdnext_admin_styles');
function tdnext_admin_styles() {
	wp_enqueue_style("admin-google-fonts", "//fonts.googleapis.com/css2?family=IBM+Plex+Serif&family=Inter:wght@100..900&display=swap");
	wp_enqueue_style("global-admin-styles", get_template_directory_uri() . "/css/editor.css");

}

add_action( 'wp_footer', 'tdnext_footer' );
function tdnext_footer() {
	?>
	<script>
	jQuery(document).ready(function($) {
		var deviceAgent = navigator.userAgent.toLowerCase();
		if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
			$("html").addClass("ios");
			$("html").addClass("mobile");
		}
		if (deviceAgent.match(/(Android)/)) {
			$("html").addClass("android");
			$("html").addClass("mobile");
		}
		if (navigator.userAgent.search("MSIE") >= 0) {
			$("html").addClass("ie");
		} else if (navigator.userAgent.search("Chrome") >= 0) {
			$("html").addClass("chrome");
		} else if (navigator.userAgent.search("Firefox") >= 0) {
			$("html").addClass("firefox");
		} else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
			$("html").addClass("safari");
		} else if (navigator.userAgent.search("Opera") >= 0) {
			$("html").addClass("opera");
		}
	});
	</script>
	<?php
}

add_filter( 'document_title_separator', 'tdnext_document_title_separator' );
function tdnext_document_title_separator( $sep ) {
	$sep = esc_html( '|' );
	return $sep;
}

add_filter( 'the_title', 'tdnext_title' );
function tdnext_title( $title ) {
	if ( $title == '' ) {
		return esc_html( '...' );
	} else {
		return wp_kses_post( $title );
	}
}

function tdnext_schema_type() {
	$schema = 'https://schema.org/';
	if ( is_single() ) {
		$type = "Article";
	} elseif ( is_author() ) {
		$type = 'ProfilePage';
	} elseif ( is_search() ) {
		$type = 'SearchResultsPage';
	} else {
		$type = 'WebPage';
	}
	echo 'itemscope itemtype="' . esc_url( $schema ) . esc_attr( $type ) . '"';
}

add_filter( 'nav_menu_link_attributes', 'tdnext_schema_url', 10 );
function tdnext_schema_url( $atts ) {
	$atts['itemprop'] = 'url';
	return $atts;
}

if ( !function_exists( 'tdnext_wp_body_open' ) ) {
	function tdnext_wp_body_open() {
		do_action( 'wp_body_open' );
	}
}

add_action( 'wp_body_open', 'tdnext_skip_link', 5 );
function tdnext_skip_link() {
	echo '<a href="#content" class="skip-link screen-reader-text">' . esc_html__( 'Skip to the content', 'tdnext' ) . '</a>';
}

add_filter( 'the_content_more_link', 'tdnext_read_more_link' );
function tdnext_read_more_link() {
	if ( !is_admin() ) {
		return ' <a href="' . esc_url( get_permalink() ) . '" class="more-link">' . sprintf( __( '...%s', 'tdnext' ), '<span class="screen-reader-text">  ' . esc_html( get_the_title() ) . '</span>' ) . '</a>';
	}
}

add_filter( 'excerpt_more', 'tdnext_excerpt_read_more_link' );
function tdnext_excerpt_read_more_link( $more ) {
	if ( !is_admin() ) {
		global $post;
		return ' <a href="' . esc_url( get_permalink( $post->ID ) ) . '" class="more-link">' . sprintf( __( '...%s', 'tdnext' ), '<span class="screen-reader-text">  ' . esc_html( get_the_title() ) . '</span>' ) . '</a>';
	}
}

add_filter( 'big_image_size_threshold', '__return_false' );

add_filter( 'intermediate_image_sizes_advanced', 'tdnext_image_insert_override' );
function tdnext_image_insert_override( $sizes ) {
	unset( $sizes['medium_large'] );
	unset( $sizes['1536x1536'] );
	unset( $sizes['2048x2048'] );
	return $sizes;
}

add_action( 'widgets_init', 'tdnext_widgets_init' );
function tdnext_widgets_init() {
	register_sidebar( array(
		'name' => esc_html__( 'Sidebar Widget Area', 'tdnext' ),
		'id' => 'primary-widget-area',
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );
}

add_action( 'wp_head', 'tdnext_pingback_header' );
function tdnext_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">' . "\n", esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}

add_action( 'comment_form_before', 'tdnext_enqueue_comment_reply_script' );
function tdnext_enqueue_comment_reply_script() {
	if ( get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}

function tdnext_custom_pings( $comment ) {
	?>
	<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>"><?php echo esc_url( comment_author_link() ); ?></li>
	<?php
}

add_filter( 'get_comments_number', 'tdnext_comment_count', 0 );
function tdnext_comment_count( $count ) {
	if ( !is_admin() ) {
		global $id;
		$get_comments = get_comments( 'status=approve&post_id=' . $id );
		$comments_by_type = separate_comments( $get_comments );
		return count( $comments_by_type['comment'] );
	} else {
		return $count;
	}
}

// /* Custom Block Enqueue */
// function enqueue_my_custom_block_script() {
//     wp_enqueue_script(
//       'my-custom-block-script',
//       get_template_directory_uri() . '/blocks/build/index.js',
//       array('wp-blocks', 'wp-components', 'wp-editor'),
//       filemtime(get_template_directory() . '/blocks/build/index.js'),
//       true
//     );
//   }
  
//   add_action('enqueue_block_editor_assets', 'enqueue_my_custom_block_script');
  


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function td_multiple_blocks_register_blocks() {

	// Register blocks in the format $dir => $render_callback.
	$blocks = array(
		'dynamic' => 'td_register_dynamic_block_recent_posts', // Dynamic block with a callback.
		'static'  => '', // Static block. Doesn't need a callback.
		'tabbed-content' => '',
		'tabbed-wrapper' => '',
		'card-container' => '',
		'card-vertical' => '',
		'card-horizontal' => '',
		'content-container' => '',
		'content-content' => '',
		'content-image' => '',
		'content-section' => '',
		'content-wrapper' => '',
		'cta-banner' => '',
		'hero' => '',
		'quote-container' => '',
		'quotes' => '',
		'image-grid-container' => '',
		'headshot-card' => '',
		'table-container' => '',
		'table-row' => '',
		'table-cell' => ''
	);

	foreach ( $blocks as $dir => $render_callback ) {
		$args = array();
		if ( ! empty( $render_callback ) ) {
			$args['render_callback'] = $render_callback;
		}
		register_block_type( __DIR__ . '/blocks/build/' . $dir, $args );
	}
}
add_action( 'init', 'td_multiple_blocks_register_blocks' );

// Custom Gutenberg blocks
require get_template_directory() . '/inc/acf-blocks.php';


add_action( 'enqueue_block_assets', 'td_enqueue_if_block_is_present' ); // Can only be loaded in the footer
function td_enqueue_if_block_is_present() {

	if ( has_block( 'td/tabbed-content' ) ) {
		wp_enqueue_script(
			'tabbed-content-script',
			'/wp-content/themes/td2024/blocks/scripts/tabbed-content.js',
			array(),
			'1.0.0',
			true
		);
	}
}

// Register custom post type
function register_custom_post_type() {
	$args = array(
		'public' => true,
		'label'  => 'Promotions',
		'supports' => array('title', 'editor'),
		// Add more arguments as needed
	);
	register_post_type('promotions', $args);
}
add_action('init', 'register_custom_post_type');
function custom_post_type_icon() {
	?>
	<style>
		#menu-posts-promotions .wp-menu-image::before {
			content: '\f227'; /* Change this to the Dashicon code for your desired icon */
		}
	</style>
	<?php
}
add_action('admin_head', 'custom_post_type_icon');


function create_resource_post_type() {
    register_post_type('resources',
        array(
            'labels' => array(
                'name' => __('Resources'),
                'singular_name' => __('Resource')
            ),
            'public' => true,
			'rewrite' => array('slug' => 'resources'),
            //'has_archive' => true,
			'show_in_rest' => true,
            'supports' => array('title', 'editor', 'author', 'excerpt', 'thumbnail', 'custom-fields'),
			'taxonomies' => array('category')
        )
    );

	// Add new taxonomy, NOT hierarchical (like tags)
	$labels = array(
		'name' => _x( 'Resource Tags', 'taxonomy general name' ),
		'singular_name' => _x( 'Resource Tag', 'taxonomy singular name' ),
		'search_items' =>  __( 'Search Resource Tags' ),
		'popular_items' => __( 'Popular Resource Tags' ),
		'all_items' => __( 'All Resource Tags' ),
		'parent_item' => null,
		'parent_item_colon' => null,
		'edit_item' => __( 'Edit Resource Tag' ), 
		'update_item' => __( 'Update Resource Tag' ),
		'add_new_item' => __( 'Add New Resource Tag' ),
		'new_item_name' => __( 'New Resource Tag Name' ),
		'separate_items_with_commas' => __( 'Separate resource tags with commas' ),
		'add_or_remove_items' => __( 'Add or remove resource tags' ),
		'choose_from_most_used' => __( 'Choose from the most used resource tags' ),
		'menu_name' => __( 'Resource Tags' ),
	  ); 

	  register_taxonomy('resource-tag','resources',array(
		'hierarchical' => false,
		'labels' => $labels,
		'show_ui' => true,
		'show_in_rest' => true,
		'update_count_callback' => '_update_post_term_count',
		'query_var' => true,
		'rewrite' => array( 'slug' => 'resource-tag' ),
	  ));


	  //	Add new taxonomy, NOT hierarchical (like tags)
			$labels = array(
				'name' => _x( 'Topics', 'taxonomy general name' ),
				'singular_name' => _x( 'Topic', 'taxonomy singular name' ),
				'search_items' =>  __( 'Search Topics' ),
				'popular_items' => __( 'Popular Topics' ),
				'all_items' => __( 'All Topics' ),
				'parent_item' => null,
				'parent_item_colon' => null,
				'edit_item' => __( 'Edit Topic' ), 
				'update_item' => __( 'Update Topic' ),
				'add_new_item' => __( 'Add New Topic' ),
				'new_item_name' => __( 'New Topic Name' ),
				'separate_items_with_commas' => __( 'Separate Topics with commas' ),
				'add_or_remove_items' => __( 'Add or remove Topics' ),
				'choose_from_most_used' => __( 'Choose from the most used Topics' ),
				'menu_name' => __( 'Topics' ),
			); 

			register_taxonomy('topic',array('resources'),array(
				'hierarchical' => true,
				'labels' => $labels,
				'show_ui' => true,
				'show_in_rest' => true,
				'query_var' => true,
				'rewrite' => array( 'slug' => 'topic' ),
			));

			//	Add new taxonomy, NOT hierarchical (like tags)
				$labels = array(
					'name' => _x( 'Industries', 'taxonomy general name' ),
					'singular_name' => _x( 'Industry', 'taxonomy singular name' ),
					'search_items' =>  __( 'Search Industries' ),
					'popular_items' => __( 'Popular Industries' ),
					'all_items' => __( 'All Industries' ),
					'parent_item' => null,
					'parent_item_colon' => null,
					'edit_item' => __( 'Edit Industry' ), 
					'update_item' => __( 'Update Industry' ),
					'add_new_item' => __( 'Add New Industry' ),
					'new_item_name' => __( 'New Industry Name' ),
					'separate_items_with_commas' => __( 'Separate Industries with commas' ),
					'add_or_remove_items' => __( 'Add or remove Industries' ),
					'choose_from_most_used' => __( 'Choose from the most used Industries' ),
					'menu_name' => __( 'Industries' ),
				); 
	
				register_taxonomy('industry','resources',array(
					'hierarchical' => true,
					'labels' => $labels,
					'show_ui' => true,
					'show_in_rest' => true,
					'query_var' => true,
					'rewrite' => array( 'slug' => 'industry' ),
			));


			$labels = array(
				'name' => _x( 'Resource Types', 'taxonomy general name' ),
				'singular_name' => _x( 'Resource Type', 'taxonomy singular name' ),
				'search_items' =>  __( 'Search Resource Types' ),
				'popular_items' => __( 'Popular Resource Types' ),
				'all_items' => __( 'All Resource Types' ),
				'parent_item' => null,
				'parent_item_colon' => null,
				'edit_item' => __( 'Edit Resource Type' ), 
				'update_item' => __( 'Update Resource Type' ),
				'add_new_item' => __( 'Add New Resource Type' ),
				'new_item_name' => __( 'New Resource Type Name' ),
				'separate_items_with_commas' => __( 'Separate Resource Types with commas' ),
				'add_or_remove_items' => __( 'Add or remove Resource Types' ),
				'choose_from_most_used' => __( 'Choose from the most used Resource Types' ),
				'menu_name' => __( 'Resource Types' ),
			); 
			
			register_taxonomy('resource-type','resources',array(
				'hierarchical' => true,
				'labels' => $labels,
				'show_ui' => true,
				'show_in_rest' => true,
				'query_var' => true,
				'rewrite' => array( 'slug' => 'type' ),
		));

}
add_action('init', 'create_resource_post_type');


function create_news_post_type() {
    register_post_type('news',
        array(
            'labels' => array(
                'name' => __('News'),
                'singular_name' => __('News')
            ),
            'public' => true,
            //'has_archive' => true,
            'rewrite' => array('slug' => 'news'),
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
            'show_in_menu' => true,
            'show_in_nav_menus' => true, // This line makes the post type available in the menu editor
        )
    );
}
add_action('init', 'create_news_post_type');

function create_press_release_post_type() {
    register_post_type('press-releases',
        array(
            'labels' => array(
                'name' => __('Press Releases'),
                'singular_name' => __('Press Release')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'press-releases'),
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
            'show_in_menu' => true,
            'show_in_nav_menus' => true, // This line makes the post type available in the menu editor
        )
    );
}
add_action('init', 'create_press_release_post_type');

function create_post_type() {
    register_post_type('megamenu_callout',
        array(
            'labels' => array(
                'name' => __('Megamenu Callouts'),
                'singular_name' => __('Megamenu Callout')
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'thumbnail', 'custom-fields'),
            'show_in_menu' => true,
			'show_in_nav_menus' => true, // This line makes the post type available in the menu editor
        )
    );
}
add_action('init', 'create_post_type');


// This theme uses wp_nav_menu() in two locations.
register_nav_menus(
	array(
		// Header Menus
		'primary' => __( 'Primary', 'primary' ),
		'utility' => __( 'Utility', 'utility' ),

		// Footer Menus
		'footer-1' => __( 'Footer - Column 1', 'footer-1' ),
		'footer-2' => __( 'Footer - Column 2', 'footer-2' ),
		'footer-3' => __( 'Footer - Column 3', 'footer-3' ),
		'footer-4' => __( 'Footer - Column 4', 'footer-4' ),
		'footer-5' => __( 'Sub-Footer', 'footer-5' ),
		'footer-6' => __( 'Legal', 'footer06')
	)
);

// First we check to see if acf_add_options_page is a function.
// If it is not, then we probably do not have ACF Pro installed
if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title'    => 'Global Options',
		'menu_title'    => 'Global Options',
		'menu_slug'     => 'global-options',
		'capability'    => 'edit_posts'
	));

	acf_add_options_page(array(
		'page_title'    => 'Masthead Options',
		'menu_title'    => 'Masthead Options',
		'menu_slug'     => 'masthead-options',
		'capability'    => 'edit_posts'
	));
	acf_add_options_page(array(
    'page_title'    => 'Alt Footer Options',
    'menu_title'    => 'Alt Footer Options',
    'menu_slug'     => 'alt-footer-options',
    'capability'    => 'edit_posts'
  ));
	acf_add_options_page(array(
    'page_title'    => 'Footer Options',
    'menu_title'    => 'Footer Options',
    'menu_slug'     => 'footer-options',
    'capability'    => 'edit_posts'
  ));
  acf_add_options_page(array(
    'page_title'    => 'Data Integrations',
    'menu_title'    => 'Footer Options',
    'menu_slug'     => 'footer-options',
    'capability'    => 'edit_posts'
  ));

}


// Ajax load
add_action('wp_ajax_filter_resources', 'filter_resources');
add_action('wp_ajax_nopriv_filter_resources', 'filter_resources');

function filter_resources() {

    if (!isset($_POST['term_id'])) {
        wp_die();
    }

    $taxonomy = isset($_POST['taxonomy']) ? $_POST['taxonomy'] : null;
    $term_id = isset($_POST['term_id']) ? intval($_POST['term_id']) : 0;
	$paged = isset($_POST['paged']) ? $_POST['paged'] : 1;
	$perPage = isset($_POST['posts_per_page']) ? $_POST['posts_per_page'] : 9;
	$post_type = isset($_POST["post_type"]) ? $_POST["post_type"] : "resources";
	$resource_type = isset($_POST["resource_type"]) ? $_POST["resource_type"] : null;
	if($resource_type !== "resources") {
		$url = "/{$resource_type}/";
	}

	$args = array(
        'post_type' 		=> $post_type,
        'posts_per_page' 	=> $perPage,
		"post_status"		=> array('acf-disabled','publish'),
		'paged'				=> $paged
	);

	$tax_query = array();

	if(isset($_POST["s"]))
		$args["s"] = $_POST["s"];

	if(intval($term_id) != 0):
		array_push($tax_query, array(
			'taxonomy' => $taxonomy,
			'field' => 'term_id',
			'terms' => $term_id,
		));
		$term = get_term_by("id", $term_id, $taxonomy);
		$term_ref = $term ? $term->slug : $term_id;
		$url = $resource_type && $resource_type !== "resources" ? get_home_url() . "/{$resource_type}/{$taxonomy}/{$term_ref}" : get_term_link($term_id);
	endif;

	if($_POST["resource_type"]):
		array_push($tax_query, array(
			'taxonomy' => "category",
			'field' => 'slug',
			'terms' => $_POST["resource_type"]
		));
	endif;

	if(count($tax_query))
		$args["tax_query"] = $tax_query;

	if(count($tax_query) > 1) {
		$args["tax_query"] = array(
			"relation" => 'AND',
			array($args["tax_query"])
		);
	}

    $query = new WP_Query($args);
	$url = $paged > 1 ? "{$url}page/{$paged}": $url;

    // Generate the HTML for the posts
	error_log($output);
    $output = '';
    if ($query->have_posts()) {

		ob_start();
        while ($query->have_posts()) {
            $query->the_post();
			//print_r($query);
			$card_type = $resource_type ? $resource_type : get_post_type();//$resource_type ? $resource_type : $post_type;
			get_template_part("template-parts/cards/card", $card_type);
        }
		$output = ob_get_contents();
        ob_end_clean();

		ob_start();
		$svg_path_previous = get_template_directory() . '/assets/images/icons/arrow-left-dark.svg';
		$svg_path_next = get_template_directory() . '/assets/images/icons/arrow-right-dark.svg';
		$svg_contents_previous = file_get_contents($svg_path_previous);
		$svg_contents_next = file_get_contents($svg_path_next);
		print paginate_links(array(
			'current' => $paged,
			'total' => $query->max_num_pages,
			'prev_text' => __($svg_contents_previous),
			'next_text' => __($svg_contents_next),
		));
		$pagination = ob_get_contents();
        ob_end_clean();
		
    } else {
		error_log($output);
        $output = 'No resources found.';
    }

    // Return the HTML
	error_log($output);

	$result = array(
		"query"			=> $query,
		"args"			=> $args,
		"post_type"		=> $post_type,
		"card_type"		=> $card_type,
		"resource_type"	=> $resource_type,
		"taxonomy"		=> $taxonomy,
		"term_id"		=> $term_id,
		"page"			=> $paged,
		"pages"			=> $query->max_num_pages,
		"total"			=> $query->found_posts,
		"is_first_page"	=> $paged == $paged <= 1,
		"is_last_page"	=> $paged == $query->max_num_pages,
		"markup" 		=> $output,
		"pagination"	=> $pagination,
		"url"			=> $url,
		"resources_index"	=> $resources_index
	);
	echo json_encode($result);

    wp_die();
	exit;
}


// estimated reading time
function reading_time() {
	$content = get_post_field( 'post_content' );
	$word_count = str_word_count( strip_tags( $content ) );
	$readingtime = ceil($word_count / 200);
	
	if ($readingtime == 1) {
	$timer = " Min Read";
	} else {
	$timer = " Min Read";
	}
	$totalreadingtime = $readingtime . $timer;
	
	return $totalreadingtime;
	}


function enqueue_theme_scripts() {
    // Replace 'theme-script' and '/path/to/theme.js' with the handle and path of your JavaScript file
    //wp_enqueue_script('theme-script', get_template_directory_uri() . '/js/theme.js', array(), false, true);

    // Replace 'recaptcha_site_key' with the name of your ACF
    $recaptcha_site_key = get_field('recaptcha_site_key', 'option');

    // Pass the reCAPTCHA site key to your JavaScript file
    wp_localize_script('theme-script', 'theme_vars', array(
        'recaptcha_site_key' => $recaptcha_site_key
    ));
	
	wp_enqueue_script('resource-index-script', get_template_directory_uri() . '/static/resource-index.js', array(), false, true);
	wp_localize_script("resource-index-script", "app", array( 'ajaxurl' => admin_url( 'admin-ajax.php' )));
	
}
add_action('wp_enqueue_scripts', 'enqueue_theme_scripts');

add_filter('woocommerce_resize_images', static function() {
    return false;
});

function td_get_terms( $taxonomies, $args=array() ){
	/*
	$tmp_args = $args;
    $args = wp_parse_args($args);

	$is_posts = !empty($args['post_types']) && $args["post_types"] == "post";

    if( !empty($args['post_types']) && !$is_posts ){
        $args['post_types'] = (array) $args['post_types'];
        add_filter( 'terms_clauses','td_filter_terms_by_cpt',10,3);
    }
	*/

    return get_terms($taxonomies, $args);           
}

function td_filter_terms_by_cpt( $pieces, $tax, $args){
	global $wpdb;

	$pieces['fields'] .=", COUNT(*) " ;

	$pieces['join'] .=" INNER JOIN $wpdb->term_relationships AS r ON r.term_taxonomy_id = tt.term_taxonomy_id 
						INNER JOIN $wpdb->posts AS p ON p.ID = r.object_id ";

	$post_types_str = implode(',',$args['post_types']);
	$pieces['where'].= $wpdb->prepare(" AND p.post_type IN(%s) GROUP BY t.term_id", $post_types_str);

	remove_filter( current_filter(), __FUNCTION__ );
	return $pieces;
}

add_action( 'init', 'wpse325327_add_excerpts_to_pages' );
function wpse325327_add_excerpts_to_pages() {
	add_post_type_support( 'page', 'excerpt' );
	add_post_type_support( 'press-releases', 'excerpt' );
}

function custom_blog_post_permalink( $permalink, $post, $leavename ) {
    if ( 'post' === $post->post_type ) {
        return home_url( '/blog/' . $post->post_name . '/' );
    }
    return $permalink;
}
add_filter( 'post_link', 'custom_blog_post_permalink', 10, 3 );

function custom_blog_rewrite_rules( $rules ) {
    $new_rules = array(
        'blog/([^/]+)/?$' => 'index.php?name=$matches[1]',
    );
    return $new_rules + $rules;
}
//add_filter( 'rewrite_rules_array', 'custom_blog_rewrite_rules' );


function td_resources_remove_slug( $post_link, $post, $leavename ) {
    if ( 'resources' != $post->post_type || 'publish' != $post->post_status ) {
        return $post_link;
    }
    $post_link = str_replace( '/' . $post->post_type . '/', '/', $post_link );
    return $post_link;
}
add_filter( 'post_type_link', 'td_resources_remove_slug', 10, 3 );

function td_resources_parse_request( $query ) {
    if ( ! $query->is_main_query() || 2 != count( $query->query ) || ! isset( $query->query['page'] ) ) {
        return;
    }
    if ( ! empty( $query->query['name'] ) ) {
        $query->set( 'post_type', array( 'post', 'resources', 'page' ) );
    }
}
add_action( 'pre_get_posts', 'td_resources_parse_request' );

function td_template_redirect() {
	global $post;
	if ( is_singular("resources") && get_field("resource_access", $post->ID) == "gated" && locate_template( 'page-templates/page-alt.php' )) {
        include( get_template_directory() . '/page-templates/page-alt.php' );
        exit();
    }
}
add_action( 'template_redirect', 'td_template_redirect' );

// fix for search results redirecting to single product
add_filter( 'woocommerce_redirect_single_search_result', '__return_false' );

// Change the default "Product" post type to "Integration"
function change_post_object_label() {
	global $wp_post_types;
	if(post_type_exists('product')){
		$labels = & $wp_post_types[ 'product' ]->labels;
		$labels->name = 'Integrations';
		$labels->singular_name = 'Integration';
		$labels->add_new = 'Add Integration';
		$labels->add_new_item = 'Add Integration';
		$labels->edit_item = 'Edit Integration';
		$labels->new_item = 'Integration';
		$labels->all_items = 'All Integrations';
		$labels->view_item = 'View Integration';
		$labels->search_items = 'Search Integration';
		$labels->not_found = 'No Integration found';
		$labels->not_found_in_trash = 'No Integration found in Trash';
		$labels->featured_image = 'Integration image';
		$labels->set_featured_image = 'Set integration image';
		$labels->remove_featured_image = 'Remove integration image';
	}
}
add_action( 'init', 'change_post_object_label', 999 );

function change_post_menu_label() {
	global $menu;
	//print_r($menu); 
	$menu[ 26 ][ 0 ] = 'Integrations';
}
add_action( 'admin_menu', 'change_post_menu_label' );

function add_customers_to_url($post_link, $post) {
    if (is_object($post) && $post->post_type == 'resources') {
        if (has_term('case-studies', 'resource-type', $post)) {
            return home_url('/customers/' . $post->post_name);
        }
    }
    return $post_link;
}
add_filter('post_type_link', 'add_customers_to_url', 10, 2);

function add_customers_rewrite_rule() {
    add_rewrite_rule(
        '^customers/([^/]+)/?$',
        'index.php?post_type=resources&name=$matches[1]',
        'top'
    );
}
add_action('init', 'add_customers_rewrite_rule');

function add_blog_rewrite_rule() {
    add_rewrite_rule(
        '^blog/([^/]+)/?$',
        'index.php?post_type=resources&name=$matches[1]',
        'top'
    );
}
add_action('init', 'add_blog_rewrite_rule');

function add_blog_to_url($post_link, $post) {
    if (is_object($post) && $post->post_type == 'resources') {
        if (has_term('blog',"resource-type",$post)) {
            return home_url('/blog/' . $post->post_name);
        }
    }
    return $post_link;
}
add_filter('post_type_link', 'add_blog_to_url', 10, 2);

function td_excerpt_length( $length ) {
	return 10;
	if ( is_admin() ) {
			return $length;
	}
	return 50;
}
//add_filter( 'excerpt_length', 'td_excerpt_length', 999 );

function wp59043_restore_excerpt_length() {
	global $wp_filter;

	unset( $wp_filter['excerpt_length']->callbacks[ PHP_INT_MAX ] );
}
add_action( 'init', 'wp59043_restore_excerpt_length' );

// // fallback image for Press Releases
// function get_fallback_image_url() {
//     // Replace this URL with the URL of your fallback image
//     return get_template_directory_uri() . '/assets/images/Press-Default.png';
// }

// function get_post_featured_image($post_id) {
//     if (has_post_thumbnail($post_id)) {
//         $thumbnail_id = get_post_thumbnail_id($post_id);
//         $thumbnail_url = wp_get_attachment_image_src($thumbnail_id, 'full');
//         return $thumbnail_url ? $thumbnail_url[0] : get_fallback_image_url();
//     } else {
//         return get_fallback_image_url();
//     }
// }

// //Apply the fallback image when sharing on social media
// function custom_fb_share_image() {
// 	if(is_single()) {
// 		$image_url = get_the_post_thumbnail_url(get_the_ID());
// 		if($image_url) {
// 			echo '<meta property="og:image" content="' . esc_url($image_url) . '" />';
// 		}
// 		else {
// 			$fallback_image_url = get_fallback_image_url();
// 			echo '<meta property="og:image" content="' . esc_url($fallback_image_url) . '" />';
// 		}
// 	}
// }
// add_action('wp_head', 'custom_fb_share_image');

// // Add Open Graph meta tags for social sharing
// function add_opengraph_tags() {
//     if (is_singular('press-releases')) {
//         global $post;
//         $thumbnail_url = get_post_featured_image($post->ID);
//         echo '<meta property="og:image" content="' . esc_url($thumbnail_url) . '">';
//     }
// }
// add_action('wp_head', 'add_opengraph_tags');


function td_resource_query_vars( $qvars ) {
	$qvars[] = 'td-type';
	return $qvars;
}
add_filter( 'query_vars', 'td_resource_query_vars' );


function td_type_filter_rewrites() {

    $types = get_terms("resource-type");

	foreach($types as $type):
		$page_id = null;
		switch($type->slug):
			case "case-studies":
				$index_page = get_field("case_studies_index", "option");
				$page_id = $index_page ? $index_page->ID : null;
				break;
			case "blog":
				$index_page = get_option( 'page_for_posts' );//get_field("blog_index", "option");
				$page_id = $index_page ? $index_page : null;
				break;
			default:
				$page_id = null;
				break;
		endswitch;
		if($page_id):
			add_rewrite_rule( $type->slug . '/industry/([a-z0-9 -]+)[/]?$', 'index.php?resource-type=' . $type->slug . '&page_id=' . $page_id . '&industry=$matches[1]', 'top' );
			//add_rewrite_rule( $type->slug . '[/]?$', 'index.php?resource-type=' . $type->slug . '&page_id=' . $page_id, 'top' );
			add_rewrite_rule( $type->slug . '/topic/([a-z0-9 -]+)[/]?$', 'index.php?resource-type=' . $type->slug . '&page_id=' . $page_id . '&topic=$matches[1]', 'top' );
		endif;
	endforeach;
} 

add_action( 'init',  'td_type_filter_rewrites');