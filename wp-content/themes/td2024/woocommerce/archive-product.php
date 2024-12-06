<?php
/**
 * The Template for displaying product archives, including the main shop page which is a post type archive.
 *
 * Override this template by copying it to yourtheme/woocommerce/archive-product.php
 *
 * @author 	WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.4.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

$heroText = get_field('integrations_header', wc_get_page_id('shop'));
$hero_cta_title = get_field('hero_cta_title', wc_get_page_id('shop'));
$hero_primary_cta_link = get_field('hero_cta_link', wc_get_page_id('shop'));
$hero_primary_cta_text = get_field('hero_cta_text', wc_get_page_id('shop'));
$hero_secondary_cta_link = get_field('hero_secondary_cta_link', wc_get_page_id('shop'));
$hero_secondary_cta_text = get_field('hero_secondary_cta_text', wc_get_page_id('shop'));



get_header();
?>

<div class="page-wrapper">
    <div id="integrations-hero" class="hero relative pt-[220px] pb-[100px] bg-colorGradient1">
        <div class="hero-content container mx-auto relative">
            <h1 class="font-header text-mobile-6xl lg:text-6xl col-span-12 leading-h1 text-white font-light"><?php echo $heroText; ?></h1>
            <div class="cta-container sm:flex sm:flex-row">
                <div class="primary-btn-wrapper mr-8 flex-col justify-center flex md:flex lg:flex">
                    <a class="btn-primary block w-fit inline-block sm:mx-auto mt-[30px] text-white sm:mx-0" href="<?php echo $hero_primary_cta_link; ?>" <?php echo get_field('open_primary_in_new_tab', wc_get_page_id('shop')) ? 'target="_blank"' : ''; ?>><?php echo $hero_primary_cta_text; ?></a>
                </div>
                <?php if (!empty($hero_secondary_cta_link)) { ?>
                <div class="secondary-btn-wrapper flex-col  justify-center  flex md:flex lg:flex">
                    <?php echo '<a class="w-fit btn-secondary arrow-white text-white block sm:inline-block ml-0 sm:text-left mt-[20px] sm:mt-[28px] sm:ml-3 px-[20px] text-[16px] md:text-[20px] py-0" href="' . $hero_secondary_cta_link . '"' . (get_field('open_secondary_in_new_tab', wc_get_page_id('shop')) ? ' target="_blank"' : '') . '>' . $hero_secondary_cta_text . '</a>';
                    ?>
                </div>
                <?php } ?>
            </div>
        </div>
    </div>
    <?php
    $block_pattern_ids = get_field('block_pattern_ids', 'option');
    $reusable_block_id = $block_pattern_ids['integrations_cards'];
    $reusable_block = get_post($reusable_block_id);

    if ($reusable_block && $reusable_block->post_type === 'wp_block') {
        echo apply_filters('the_content', $reusable_block->post_content);
    }
    ?>
    <div id="integrations-section" class="container mx-auto grid grid-cols-12 !pt-[60px] gap-6">
        <div class="hidden md:block col-span-3"></div>
        <div class="hidden md:block col-span-3"></div>
        <div class="hidden md:block col-span-3"></div>
        <div class="search-form-wrapper col-span-12 lg:col-span-3">
            <form role="search" method="get" class="woocommerce-product-search relative"  action="<?php echo esc_url( home_url( '/data-integrations/#integrations-section' ) ); ?>">
                <label class="screen-reader-text" for="woocommerce-product-search-field-<?php echo isset( $index ) ? absint( $index ) : 0; ?>"><?php esc_html_e( 'Search for:', 'woocommerce' ); ?></label>
                <input type="search" id="woocommerce-product-search-field-<?php echo isset( $index ) ? absint( $index ) : 0; ?>" class="search-field w-full h-[53px] border-2 border-gray-50 !rounded-[5px] py-[15px] pl-[13px] pr-[40px] text-sm" placeholder="<?php echo esc_attr__( 'Search', 'woocommerce' ); ?>" value="<?php echo get_search_query(); ?>" name="s" />
                <button type="submit" value="<?php echo esc_attr_x( '', 'submit button', 'woocommerce' ); ?>" class="absolute right-[10px] top-[18px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <g clip-path="url(#clip0_336_17364)">
                        <path d="M13.3034 11.8971H12.6451L12.4117 11.6721C13.2284 10.7221 13.7201 9.4888 13.7201 8.14714C13.7201 5.15547 11.2951 2.73047 8.30339 2.73047C5.31172 2.73047 2.88672 5.15547 2.88672 8.14714C2.88672 11.1388 5.31172 13.5638 8.30339 13.5638C9.64505 13.5638 10.8784 13.0721 11.8284 12.2555L12.0534 12.4888V13.1471L16.2201 17.3055L17.4617 16.0638L13.3034 11.8971ZM8.30339 11.8971C6.22839 11.8971 4.55339 10.2221 4.55339 8.14714C4.55339 6.07214 6.22839 4.39714 8.30339 4.39714C10.3784 4.39714 12.0534 6.07214 12.0534 8.14714C12.0534 10.2221 10.3784 11.8971 8.30339 11.8971Z" fill="#616161"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_336_17364">
                        <rect width="20" height="20" fill="white" transform="translate(0.386719 0.230469)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </button>
                <input type="reset" class="button standard reset" value="Clear" id="clear" style="display:none;"/>
                <input type="hidden" name="post_type" value="product" />
            </form>
        </div>
        <div class="col-span-12 lg:col-span-3 border-right">
            <!-- <div class="widget woocommerce widget_product_search widget-container sidebar-widgets">
                <h3 class="widget-title intcus_aapf_widget-title" style=""><span>Search Integrations</span></h3>
            </div> -->
        <script>function getval(sel){window.location.href = sel.value;}</script>
        <div class="widget widget_intcus_aapf_single widget-container sidebar-widgets">
            <div class="intcus_aapf_widget-title_div intcus_aapf_hide_mobile disable_collapse">
                <h3 class="font-display text-l font-semibold mb-[25px]" style="">Filter by category</h3>
            </div>
            <div class="intcus_aapf_widget-wrapper brw-product_cat">
            <select onchange="getval(this);" class="lg:hidden border-2 border-gray-50 !rounded-[5px] py-[15px] pl-[13px] pr-[40px] text-sm relative">
                    <option value="<?php echo get_site_url(); ?>/data-integrations/#integrations-section">All Categories</option>
                    <?php
                    $args = array(
                        'taxonomy' => 'product_cat',
                        'orderby' => 'name',
                        'order'   => 'ASC'
                    );
                    $cats = get_categories($args);
                    foreach($cats as $cat) {
                    if($cat->slug != 'all-categories' && $cat->slug != 'private-beta'){
                        $term = get_term( $cat->term_id, 'product_cat' );
                        $term_link = get_term_link( $term );
                        $actual_link = 'http://'.$_SERVER['HTTP_HOST'].'/data-integrations';
                        $category_url = $actual_link.'/'.$cat->slug;
                        $final_url = $category_url.'/#integrations-section';
                    ?>
                        <option value="<?php echo $final_url; ?>" <?php echo (rtrim($current_url, '/') == rtrim($category_url, '/')) ? 'selected' : ''; ?>><?php echo $cat->name; ?></option>
                    <?php } } ?>
                </select>
                <ul class="integration_cat leading-[40px] hidden lg:block">
                    <a href="<?php echo get_site_url(); ?>/data-integrations/#integrations-section" class="integrationcat" data-ol-has-click-handler="">
                        <li class="intcus_term_parent_0 intcus_term_depth_0 checked">
                        <span>
                            <label class="intcus_label_widgets">All Categories</label>
                        </span>                              
                        </li>
                    </a>


                        <?php
                        $args = array(
                            'taxonomy' => 'product_cat',
                            'orderby' => 'name',
                            'order'   => 'ASC'
                        );
                        $cats = get_categories($args);
                        foreach($cats as $cat) {
                    if($cat->slug != 'all-categories' && $cat->slug != 'private-beta'){
                            $term = get_term( $cat->term_id, 'product_cat' );
                            $term_link = get_term_link( $term );
                        ?>
                            <a href="<?php echo $term_link; ?>/#integrations-section" class="integrationcat">
                                <li class="intcus_term_parent_0 intcus_term_depth_0">
                                    <span>
                                        <label class="intcus_label_widgets cursor-pointer"><?php echo $cat->name; ?></label>
                                    </span>		                           
                                </li>
                            </a>	            
                        <?php
                            }   }
                        ?>
                </ul>
            </div>
        </div>
        <script>
        jQuery(window).on('load',function(){
            elsToMatch = [jQuery('.icon-box-content > p')];
            //minWinWidth = [960];matchHeights(elsToMatch, minWinWidth);
        });
            </script>
        </div>
        <div class="col-span-12 lg:col-span-9">    
            <div class="">
                <div class="col-span-12">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <?php
                        $searchText = '';
                        if(isset($_GET['s'])){
                            $searchText = $_GET['s'];
                        }


                        // $args = array(
                        //   'post_type' => 'product',
                        //   'posts_per_page' => -1,
                        //   'order' => 'ASC',
                        //   'orderby' => 'title',
                        //   //'s' => $searchText
                        // );
                        // $loop = new WP_Query( $args );
                        // $count = $loop->post_count;

                        $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;

                        $args = array(
                            'post_type' => 'product',
                            'posts_per_page' => -1,
                            'paged' => $paged,
                            'order' => 'ASC',
                            'orderby' => 'title',
                            's' => $searchText
                        );
                        $loop = new WP_Query( $args );
                        $count = $loop->post_count;
                    
                        if ( $loop->have_posts() ) {
                          while ( $loop->have_posts() ) : $loop->the_post();

                          $proCat = get_the_terms( $post->ID, 'product_cat' );

                            $path = $_SERVER['DOCUMENT_ROOT'];

                                include $path . "/wp-content/themes/td2024/woocommerce/integrations-modals-assign-subclasses.php";
                                //include $path . "/wp-content/themes/td2024/woocommerce/click-events-modify-modal-content.js";
                                //include $path . "/wp-content/themes/td2024/woocommerce/imodal-css.css";

                                

                                $privateClass = '';
                                foreach ($proCat as $catData) {
                                if($catData->slug == 'private-beta'){
                                    $privateClass = 'product_cat-private-beta';
                                }
                                }

                                //wc_get_template_part( 'content', 'product' );
                                ?>
                                <span class="product-item relative bg-gray-100 rounded-[20px] py-[60px] px-[40px] text-center">
                                    
                                        <div class="product-image relative mb-[20px]" data-modal-title="<?php the_title(); ?>">
                                            <?php
                                            if ( has_post_thumbnail() ) {
                                                $image = wp_get_attachment_image_src( get_post_thumbnail_id( $loop->post->ID ), 'single-post-thumbnail' );
                                                if (is_array($thumbnail_subclasses) && is_array($image)) {
                                                    echo '<img class="mx-auto cursor-pointer ' . $thumbnail_subclasses['class'] . '" src="' . $image[0] . '" alt="' . get_the_title() . '" />';
                                                } else {
                                                    // Handle the error
                                                    // include $path . "/wp-content/themes/td2024/
                                                    echo '<img class="mx-auto cursor-pointer ' . $thumbnail_subclasses['class'] . ' w-[40px]" src="' . get_template_directory_uri() . '/assets/images/icons/default.svg" alt="' . get_the_title() . '" />'; // Display a default image
                                                }
                                            } else {
                                                echo '<img class="mx-auto cursor-pointer ' . $thumbnail_subclasses['class'] . '" src="' . wc_placeholder_img_src() . '" alt="Placeholder" />';
                                            }
                                            ?>
                                        </div>
                                        <span class="text-xs leading-[1.3] font-medium"><?php the_title(); ?></span>
                                        <!-- <div class="product-content mt-[20px]">
                                            <a href="#" class="btn-secondary cta-modal-trigger"></a>
                                        </div> -->
                                </span>
                                <?php
                            endwhile;
                        } else {
                            echo __( 'No products found' );
                        }
                        ?>
                    </div>
                </div>
                
                <?php
                // echo '</div>';
                // echo '<div class="pagination flex items-center justify-center mt-[60px]">';
                // $svg_path_previous = get_template_directory() . '/assets/images/icons/arrow-left-dark.svg';
                // $svg_path_next = get_template_directory() . '/assets/images/icons/arrow-right-dark.svg';
                // $svg_contents_previous = file_get_contents($svg_path_previous);
                // $svg_contents_next = file_get_contents($svg_path_next);
                // echo paginate_links(array(
                //     'total' => $loop->max_num_pages,
                //     'prev_text' => __($svg_contents_previous),
                //     'next_text' => __($svg_contents_next),
                //     'format' => '?paged=%#%#integrations-section',
                // ));
                // echo '</div>';
                ?>
                
            </div>
    </div>
        </div>
        <div class="accordion-block mt-[100px]">
        <?php
        $block_pattern_ids = get_field('block_pattern_ids', 'option');
        $reusable_block_id = $block_pattern_ids['integrations_faq'];
        $reusable_block = get_post($reusable_block_id);

        if ($reusable_block && $reusable_block->post_type === 'wp_block') {
            echo apply_filters('the_content', $reusable_block->post_content);
        }
        ?>
        </div>

        <!-- default modal content -->
        <div class="imodal">
            <div class="imodal-wrapper">
                <div class="imodal-logo"><img width="175" height="77" src="https://www.treasuredata.com/wp-content/uploads/integration-tile_apptopia.svg" class="ilogo" alt="Integration logo"></div>
                <div class="imodal-iwrapper">
                <div class="imodal-close">
                    <a class="imodal-closebtn">
                    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                    <polygon points="20 18.96 10.82 9.63 19.28 1.03 18.26 0 9.8 8.6 1.65 .32 .63 1.35 8.78 9.64 0 18.56 1.01 19.59 9.8 10.67 18.98 20 20 18.96" style="fill:gray; fill-rule:evenodd;" />
                    </svg>
                    </a>
                </div>
                <div class="imodal-hdrwrapper">
                    <div class="imodal-hdr">
                    <h2 class="imodal-h2">Cloud Display &amp; Video 360</h2>
                    <h5 class="imodal-h5"><!--Via Audience Partner API--></h5>
                    </div>
                    <div class="imodal-label">
                    <span class="imodal-labeldesc">Integrate quickly</span>
                    </div>
                </div>
                <div class="imodal-description">
                    <p>When you need a completely customized integration, you can build one yourself using Treasure Data’s Custom Scripts.</p>
                    <p>To learn more about custom scripts, check out our technical documentation page.</p>
                </div>
                <div class="imodal-ctawrapper">
                    <a class="imodal-cta btn-primary text-white" href="">Technical documentation</a>
                </div>
                </div>
            </div>
        </div>
    
<?php include get_template_directory() . '/woocommerce/includes/integrations-footer-cta.php'; ?>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/woocommerce/click-events-modify-modal-content.js"></script>
<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/woocommerce/imodal-css.css"/>
<?php get_footer(); ?>