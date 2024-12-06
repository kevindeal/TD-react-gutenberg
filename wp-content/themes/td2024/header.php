<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php tdnext_schema_type(); ?>>
<head>
<?php if($global_body_scripts = get_field("global_body_scripts","option")): print $global_body_scripts; endif; ?>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width">
<link href="<?php echo get_template_directory_uri(); ?>/static/output.css" rel="stylesheet">
<link href="<?php echo get_template_directory_uri(); ?>/css/main.css" rel="stylesheet">
<?php wp_head(); ?>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&family=Inter:wght@100..900&display=swap" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/js/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/js/slick/slick-theme.css"/>

<!-- OneTrust Cookies Consent Notice start for treasuredata.com -->
<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/plain" class="optanon-category-C0003" charset="UTF-8" data-domain-script="35e177e3-f435-4ced-8e90-6ee9c1bee48b" ></script>
<script type="text/plain" class="optanon-category-C0003">
function OptanonWrapper() { }
</script>
<!-- OneTrust Cookies Consent Notice end for treasuredata.com -->
<?php if($global_header_scripts = get_field("global_header_scripts","option")): print $global_header_scripts; endif; ?>
</head>
<body <?php body_class("font-display"); ?>>
<?php wp_body_open(); ?>
<div id="wrapper" class="hfeed">

<!-- <header id="header" class="fixed" role="banner"> -->
<?php if(!get_field('masthead_promos')) {

// Get the absolute path to the template file
$template_part_path = locate_template('template-parts/blocks/masthead-promos.php');

// Check if the template file exists
if ($template_part_path !== '') {
    // Include the template file
    $class = '';
    if(have_rows('masthead_settings', 'option')) {
        while(have_rows('masthead_settings', 'option')): the_row();
            $slug = get_sub_field('slug');
            if(empty($slug) || $slug == basename(get_permalink())) {
                $class = 'has-masthead';
                break;
            }
        endwhile;
    }
    echo '<header id="header" class="fixed ' . $class . '" role="banner">';
    include($template_part_path);

} else {
    echo '<header id="header" class="fixed" role="banner">';
} } ?>
    <div id="header-inner" class="container mx-auto flex items-center justify-between flex-nowrap">
		<a id="global-logo" class="navbar-brand" rel="home" href="<?php echo esc_url( home_url( '/' ) ); ?>" itemprop="url">
			<img class="site-logo pointer-events-none" src="<?php echo get_template_directory_uri(); ?>/assets/logos/Primary-Logo.svg" />
		</a>
        <a id="global-logo-alt" class="navbar-brand-alt" rel="home" href="<?php echo esc_url( home_url( '/' ) ); ?>" itemprop="url">
			<img class="site-logo-alt pointer-events-none" src="<?php echo get_template_directory_uri(); ?>/assets/logos/diamond-logo.svg" />
		</a>
        <button id="mobile-menu-toggle" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle Mobile Menu">
			<span class="menu-icon"></span>
		</button>
        <nav id="site-navigation" class="font-display" role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
            <?php
                wp_nav_menu(
                    array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'primary-menu',
                        'items_wrap'     => '<ul id="%1$s" class="%2$s" aria-label="submenu">%3$s</ul>',
                        'walker' => new WPDocs_Walker_Nav_Menu(),
                    )
                );

                class WPDocs_Walker_Nav_Menu extends Walker_Nav_Menu {

                    /**
                     * Starts the list before the elements are added.
                     *
                     * Adds classes to the unordered list sub-menus.
                     *
                     * @param string $output Passed by reference. Used to append additional content.
                     * @param int    $depth  Depth of menu item. Used for padding.
                     * @param array  $args   An array of arguments. @see wp_nav_menu()
                     */
                    function start_lvl( &$output, $depth = 0, $args = array() ) {
                        // Depth-dependent classes.
                        $indent = ( $depth > 0  ? str_repeat( "\t", $depth ) : '' ); // code indent
                        $display_depth = ( $depth + 1); // because it counts the first submenu as 0
                        $classes = array(
                            'sub-menu',
                            ( $display_depth % 2  ? 'menu-odd' : 'menu-even' ),
                            ( $display_depth >=2 ? 'sub-sub-menu' : '' ),
                            'menu-depth-' . $display_depth
                        );
                        $class_names = implode( ' ', $classes );
            
                        // Build HTML for output.
                        $output .= "\n" . $indent . '<div class="sub-menu-outer"><ul class="xl:container xl:mx-auto pt-[50px] pb-[100px] ' . $class_names . '">' . "\n";
            
                        // Insert the content-callouts div only in the first level sub-menu
                        // if ($depth === 0) {
                        //     $output .= $indent . '<div class="content-callouts">';
                            
                        //     $callouts_count = count(get_field('callouts', 'option'));
                        
                        //     if ($callouts_count > 1) {
                        //         $callout_class = 'w-[50%]';
                        //     } else {
                        //         $callout_class = 'w-100';
                        //     }
                        
                        //     if (function_exists('get_field') && have_rows('callouts', 'option')) {
                        //         while (have_rows('callouts', 'option')) {
                        //             the_row();
                        
                        //             $image = get_sub_field('image');
                        //             $title = get_sub_field('title');
                        //             $cta_link = get_sub_field('cta_link');
                        //             $cta_text = get_sub_field('cta_text');
                        
                        //             $output .= '<div class="callout ' . $callout_class . '">';
                        //             $output .= '<a href="' . esc_url($cta_link) . '">' . '<img class="max-h-[256px] object-cover mb-[30px] rounded-[10px]" src="' . esc_url($image) . '" alt="' . esc_attr($title) . '">' . '</a>';
                        //             $output .= '<span class="block semibold callout-title text-[20px] leading-[24px] mb-[10px]">' . esc_html($title) . '</span>';
                        //             $output .= '<a class="cta-link neongreen" href="' . esc_url($cta_link) . '">' . esc_html($cta_text) . '</a>';
                        //             $output .= '</div>';
                        //         }
                        //     }
                            
                        //     $output .= '</div>';
                        // }
                        
                        
                    }
                
                    /**
                     * Start the element output.
                     *
                     * Adds main/sub-classes to the list items and links.
                     *
                     * @param string $output Passed by reference. Used to append additional content.
                     * @param object $item   Menu item data object.
                     * @param int    $depth  Depth of menu item. Used for padding.
                     * @param array  $args   An array of arguments. @see wp_nav_menu()
                     * @param int    $id     Current item ID.
                     */
                    function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
                        global $wp_query;
                        $indent = ( $depth > 0 ? str_repeat( "\t", $depth ) : '' ); // code indent
                    
                        // Depth-dependent classes.
                        $depth_classes = array(
                            ( $depth == 0 ? 'main-menu-item' : 'sub-menu-item' ),
                            ( $depth >=2 ? 'sub-sub-menu-item' : '' ),
                            ( $depth % 2 ? 'menu-item-odd' : 'menu-item-even' ),
                            'menu-item-depth-' . $depth
                        );
                        $depth_class_names = esc_attr( implode( ' ', $depth_classes ) );
                    
                        // Passed classes.
                        $classes = empty( $item->classes ) ? array() : (array) $item->classes;
                        $class_names = esc_attr( implode( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) ) );
                    
                        // Build HTML.
                        $output .= $indent . '<li id="nav-menu-item-'. $item->ID . '" class="' . $depth_class_names . ' ' . $class_names . '">';
                    
                        // Link attributes.
                        $attributes  = ! empty( $item->attr_title ) ? ' title="'  . esc_attr( $item->attr_title ) .'"' : '';
                        $attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
                        $attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
                        $attributes .= ! empty( $item->url )        ? ' href="'   . esc_attr( $item->url        ) .'"' : '';
                        $attributes .= ' class="menu-link ' . ( $depth > 0 ? 'sub-menu-link' : 'main-menu-link' ) . '"';
                    
                        // Check if menu item is a megamenu_callout post type
                        if ($item->object == 'megamenu_callout') {
                            // Get the ACF fields of the post
                            $title = get_field('title', $item->object_id);
                            $page_link_or_url = get_field('page_link_or_url', $item->object_id);
                            $cta_link = get_field('link', $item->object_id);
                            $cta_link_url = get_field('link_url', $item->object_id);
                            $new_tab = get_field('new_tab', $item->object_id);
                            $cta_text = get_field('link_text', $item->object_id);
                            $image = get_the_post_thumbnail_url($item->object_id);
                            $callout_class = 'megamenu-callout'; // Replace with your actual class

                            // Add the custom fields to the menu item output
                            $link = ($page_link_or_url == 'page') ? $cta_link : $cta_link_url;
                            $item_output = '<div class="callout ' . $callout_class . '">';
                            $target = $new_tab ? ' target="_blank"' : '';
                            $item_output .= '<a href="' . esc_url($link) . '"' . $target . '>' . '<img class="max-h-[256px] object-cover mb-[30px] rounded-[10px] max-w-[450px] w-full md:w-auto" src="' . esc_url($image) . '" alt="' . esc_attr($title) . '">' . '</a>';
                            $item_output .= '<a class="btn-secondary inline-block relative" href="' . esc_url($link) . '"' . $target . '>' . '<span class="block semibold callout-title text-[16px] leading-[22px] mb-[10px]">' . esc_html($title) . '</span>' . '</a>';
                            $item_output .= '</div>';
                        } else {
                            // Build HTML output and pass through the proper filter.
                            $item_output = sprintf( '%1$s<a%2$s>%3$s%4$s%5$s</a>%6$s',
                                $args->before,
                                $attributes,
                                $args->link_before,
                                apply_filters( 'the_title', $item->title, $item->ID ),
                                $args->link_after,
                                $args->after
                            );
                        }
                    
                        $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
                    }
                    function end_lvl( &$output, $depth = 0, $args = array() ) {
                        // Close the submenu structure.
                        $output .= "</ul></div>\n";
                    }

                    // Mega Menu Callouts as Menu Items
                    
                }
            ?>
        </nav>

        <nav id="mobile-navigation" class="bg-navy-100" aria-label="<?php esc_attr_e( 'Mobile Navigation', 'td' ); ?>">
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'primary', // Replace 'menu-1' with your mobile menu location
					'menu_id'        => 'mobile-menu', // You can change this ID if needed
					'items_wrap'     => '<ul id="%1$s" class="%2$s" aria-label="mobile-submenu">%3$s</ul>',
					'walker' => new WPDocs_Walker_Nav_Menu(),
				)
			);
			?>
			<div class="mobile-demo-cta text-center">
                <button style="background: transparent !important;" class="btn-primary border-white text-white w-[100%] max-w-[360px] mx-auto mb-5" onclick="window.location.href='/';">Login</button>
				<button class="btn-primary bg-buttonGradientFill text-white w-[100%] max-w-[360px] mx-auto" onclick="window.location.href='/';">Get a demo</button>
			</div>
		</nav>

        <div id="utility-navigation">
			<?php get_template_part('template-parts/layout/utility', 'menu'); ?>
		</div>
    </div>
    <script>
        jQuery(document).ready(function($) {
            if ($('#header').hasClass('has-masthead')) {
                var paddingTop = parseInt($('.hero-content').css('padding-top').replace('px', ''));
                $('.hero-content').css('padding-top', paddingTop + 46 + 'px');
            }
        });
    </script>
</header>
<div id="container" class="">
    <main id="content" role="main">