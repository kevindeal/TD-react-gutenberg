<?php

// Get the ID of the current page
$page_id = get_the_ID();

// Get the fields for the 'resource_block' field group
$color_variant = get_field('color_variant');
$heading = get_field('heading');
$heading_visibility = get_field('heading_visibility');
$cta_button_text = get_field('cta_button_text');
$cta_visibility = get_field('cta_visibility');
$view_all_visible = get_field('view_all_visible');
$view_all_tag = get_field('view_all_tag');

$autopopulate_resources = get_field('autopopulate_resources');
$autopopulate_tag = get_field('autopopulate_tag');
$autopopulate_category = get_field('autopopulate_category');
$number_of_columns = get_field('number_of_columns');
$number_to_autopopulate = get_field('number_to_autopopulate');
$manually_selected_resources = get_field('manually_selected_resources');
$display_resource_images = get_field('display_resource_images');
$display_resource_excerpts = get_field('display_resource_excerpts');
$layout_for_resources = get_field('layout_for_resources');
$open_cta_in_new_window = get_field('open_cta_in_new_window');

$vspace = isset($args) && is_array($args) && array_key_exists("vspace",$args) ? $args["vspace"] : "md";
switch($vspace) {
    case "sm":
        $vspace_class = "py-sm-vertical xl:py-xl-vertical";
        break;
    case "md":
    default: 
        $vspace_class = "py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical";
        break;
}

$resources_to_render = array();

// var_dump($number_to_autopopulate);

if($autopopulate_resources){
    $args = array(  
        'post_type' => 'resources',
        'post_status' => 'publish',
        'posts_per_page' => $number_to_autopopulate ? $number_to_autopopulate : 1,
        'orderby' => 'title',
        'order' => 'ASC',
    );

    $tax_query = array();

    if($autopopulate_tag){
        array_push($tax_query, array(
                'taxonomy' => 'tag',
                'field' => 'slug',
                'terms' => $autopopulate_tag->slug,
            )
        );
    }
    if($autopopulate_category){
        array_push($tax_query, array(
                'taxonomy' => 'category',
                'field' => 'slug',
                'terms' => $autopopulate_category->slug,
            )
        );
    }

    $args['tax_query'] = $tax_query;


    $the_query = new WP_Query($args);
    while ($the_query->have_posts()){
        $the_query->the_post();
        // var_dump(get_the_title());
        $eyebrow_text = '';
        $categories = get_the_category(get_the_ID());
        if ( ! empty( $categories ) ) {
            $eyebrow_text = esc_html( $categories[0]->name );
        }

        $external_link = get_field('external_link', get_the_ID());


        array_push($resources_to_render, array(
            'title' => get_the_title(),
            'permalink' => $external_link ? $external_link : trailingslashit(get_the_permalink()),
            'imageId' => get_post_thumbnail_id(get_the_ID(), 'full'),
            'post_ID' => get_the_ID(),
            'eyebrow' => $eyebrow_text,
            'post_URL' => trailingslashit(get_the_permalink()),
            'excerpt' => get_the_excerpt(),
            'isExternal' => $external_link ? true : false
        ));
        // array_push($resources_to_render, $the_post);
    }
} else {
    if( have_rows('manually_selected_resources') ){
        // Loop through rows.
        while( have_rows('manually_selected_resources') ){
            the_row();
            // Load sub field value.
            $resource_post = get_sub_field('resource');
            $resource_title_override = get_sub_field('override_resource_title');
            $resource_eyebrow_override = get_sub_field('override_resource_eyebrow');
            $resource_excerpt_override = get_sub_field('override_resource_excerpt');
            $resource_url_override = get_sub_field('override_resource_url');
            $resource_image_override = get_sub_field('override_resource_featured_image');
            $external_link = get_field('external_link', $resource_post->ID);
    
            $renderPost = array();
            if($resource_title_override){
                $renderPost['title'] = $resource_title_override;
            } else {
                $renderPost['title'] = $resource_post->post_title;
            }
    
            if($resource_image_override){
                $renderPost['imageId'] = $resource_image_override['ID'];
            } else{
                if(has_post_thumbnail($resource_post->ID)) {
                    $renderPost['imageId'] = $resource_post ? get_post_thumbnail_id($resource_post->ID, 'full') : '';
                } else {
                    $fallback_image = get_field('pr_fallback_image', 'option');
                    $renderPost['imageId'] = $fallback_image; // replace 'id_of_fallback_image' with the ID of your fallback image
                }
            }
        
            if($resource_eyebrow_override){
                // var_dump($resource_image_override);
                $renderPost['eyebrow'] = $resource_eyebrow_override;
            } else{
                if($resource_post){
                    $categories = get_the_category($resource_post->ID);
                    if ( ! empty( $categories ) ) {
                        $renderPost['eyebrow'] = esc_html( $categories[0]->name );
                    } else {
                        $renderPost['eyebrow'] = '';
                    }
                } else {
                    $renderPost['eyebrow'] = '';
                }
            }

            if($resource_excerpt_override){
                $renderPost['excerpt'] = $resource_excerpt_override;
            } else {
                $renderPost['excerpt'] = $resource_post ?  get_the_excerpt($resource_post->ID) : '';
            }

            if($resource_url_override){
                $renderPost['post_URL'] = $resource_url_override;
            } else {
                $renderPost['post_URL'] = $external_link 
                                            ? $external_link 
                                            : (
                                                $resource_post 
                                                    ? trailingslashit(get_the_permalink($resource_post->ID)) 
                                                    : ''
                                            );
                $renderPost['isExternal'] = $external_link ? true : false;
            }

            if($resource_post && $resource_post->ID){
                $renderPost['post_ID'] = $resource_post->ID;
            }

            // var_dump($renderPost);

            array_push($resources_to_render, $renderPost);

            // Do something, but make sure you escape the value if outputting directly...
        // End loop.
        }
    }
}


?>

<div id="resource_<?php echo isset($block) && $block["id"] ? $block["id"] : 'in_template'; ?>" class="resources_container <?php print $vspace_class ?> <?php if ($color_variant == 'DARK') {
    echo 'bg-primaryBlue-100 text-white resource_dark';
} else {
    echo 'bg-white';
} ?>">
    <div class="container mx-auto">
        <?php if($heading || $view_all_visible): ?>
        <div class="td-alert-heading flex-1 flex flex-row items-center py-4 mb-8 w-full justify-between border-b border-solid">
            <?php if($heading) :?>
                <h2 class="font-display font-medium text-mobile-3xl lg:mobile-3xl leading-tight <?php echo $color_variant == 'DARK' ? 'text-accentTurquoise-100' : 'text-blue-100'; ?>"><?php echo $heading; ?></h2>
            <?php endif; ?>
            <?php if($view_all_visible) :?>
                <a href="/resources/" class="leading-snug font-display font-medium text-mobile-base lg:text-base justify-self-end uppercase <?php echo $color_variant == 'DARK' ? 'text-white' :'text-navy-100'; ?>">View All</a>
            <?php endif; ?>
        </div>
        <?php endif; ?>

        <div class="resource_slider mx-auto grid gap-[30px] grid-cols-1 md:grid-cols-<?php echo count($resources_to_render) >= $number_of_columns ?  $number_of_columns : count($resources_to_render) ?>">

            <?php
                foreach($resources_to_render as $resource){
            ?>
                <div class="content flex flex-1 overflow-hidden <?php echo $layout_for_resources == '1col' ? 'flex-col justify-end' : 'flex-row'; ?> ">    
                <?php if($resource['imageId'] && $display_resource_images): ?>
                <?php if($layout_for_resources == '2col'): ?>
                    <a href="<?php echo $resource['post_URL']; ?>" target="<?php echo $open_cta_in_new_window ? '_blank' : ''; ?>"  class="image-wrapper flex flex-1 mr-8">
                <?php else: ?>
                    <a href="<?php echo $resource['post_URL']; ?>" target="<?php echo $open_cta_in_new_window ? '_blank' : ''; ?>"  class="image-wrapper overflow-hidden rounded-[10px] md:rounded-[20px] mb-[30px]">
                <?php endif; ?>
                    <img
                        loading="lazy"
                        class="element-background-image md:rounded-[20px] wp-image-<?php echo $resource['imageId']; ?> object-cover w-full h-full mb-8 hover:scale-[1.05] transition-all duration-500 cursor-pointer"
                        src="<?php echo esc_url(wp_get_attachment_image_url($resource['imageId'], 'medium')); ?>"
                        srcset="<?php echo esc_attr( wp_get_attachment_image_srcset($resource['imageId'], 'medium')); ?>"
                        alt="<?php echo get_post_meta($resource['imageId'], '_wp_attachment_image_alt', TRUE); ?>"
                    />
                    <?php if($layout_for_resources == '2col'): ?>
                        </a>
                    <?php else: ?>
                        </a>
                    <?php endif; ?>
                <?php endif; ?>
                    <div class="content-wrapper flex flex-3 flex-col justify-start">
                        <h4 class="font-display text-mobile-eyebrow font-semibold text-base mb-4 <?php echo $color_variant == 'DARK' ? 'text-accentTurquoise-100' : 'text-blue-100'; ?>">
                        <?php
                            echo $resource['eyebrow'];
                        ?>
                        </h4>
                        <?php if($resource['title']): ?>
                            <h3 class='font-display font-medium text-mobile-3xl lg:text-3xl leading-[1.4] <?php echo $display_resource_excerpts ? 'mb-2.5' : 'mb-8' ?>'><?php echo $resource['title']; ?></h3>
                        <?php endif; ?>
                        <?php if($display_resource_excerpts): ?>
                            <span class='leading-[1.45] md:text-[20px]  xh-24 text-ellipsis overflow-hidden mb-5 md:mb-8'>
                                <?php echo $resource['excerpt']; ?>
                            </span>
                        <?php endif; ?>
                        <?php if(!empty($cta_button_text)): ?>
                            <a href="<?php echo $resource['post_URL']; ?>" target="<?php echo ($open_cta_in_new_window || $resource['isExternal']) ? '_blank' : ''; ?>" class="btn-primary text-mobile-button lg:text-button text-white w-5/12 cursor-pointer"><?php echo $cta_button_text; ?></a>
                        <?php else: ?>
                            <a href="<?php echo $resource['post_URL']; ?>" target="<?php echo ($open_cta_in_new_window || $resource['isExternal']) ? '_blank' : ''; ?>"><img src="<?php echo $color_variant == 'DARK' ?  get_template_directory_uri().'/assets/images/icons/arrow-right-white.svg' :  get_template_directory_uri().'/assets/images/icons/arrow-right-dark.svg'; ?>" alt="arrow" /></a>
                        <?php endif; ?>
                        </div>
                </div>
            <?php
                }
            ?>
        </div>
    </div>
</div>
