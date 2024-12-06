<?php

// Get the ID of the current page
$page_id = get_the_ID();

// Get the fields for the 'case_study_block' field group
$color_variant = get_field('color_variant');
$heading = get_field('heading');
$heading_visibility = get_field('heading_visibility');
$cta_button_text = get_field('cta_button_text');
$cta_visibility = get_field('cta_visibility');
$view_all_visible = get_field('view_all_visible');
$view_all_tag = get_field('view_all_tag');
$view_all_post = get_field("case_studies_index", "option");
$view_all_url = $view_all_post ? get_permalink($view_all_post) : "/customers";
$autopopulate_case_studies = get_field('autopopulate_case_studies');
$autopopulate_tag = get_field('autopopulate_tag');
$manually_selected_case_studies = get_field('manually_selected_case_studies');
$slider_speed = get_field('slider_speed');

$case_studies_to_render = array();

if($autopopulate_case_studies){
    $args = array(  
        'post_type' => 'resources',
        'post_status' => 'publish',
        'posts_per_page' => 8,
        'orderby' => 'title',
        'order' => 'ASC',
    );

    if($autopopulate_tag){
        $args['tax_query'] = array(
            array(
                'taxonomy' => 'category',
                'field' => 'slug',
                'terms' => 'case-studies',
            ),
            array(
                'taxonomy' => 'tag',
                'field' => 'slug',
                'terms' => $autopopulate_tag->slug,
            )
        );
    } else {
        $args['tax_query'] = array(
            array(
                'taxonomy' => 'category',
                'field' => 'slug',
                'terms' => 'case-studies',
            )
        );
    }

    $the_query = new WP_Query($args);
    while ($the_query->have_posts()){
        $the_query->the_post();
        // var_dump(get_the_title());

        array_push($case_studies_to_render, array(
            'title' => get_the_title(),
            'permalink' => trailingslashit(get_the_permalink()),
            'imageId' => get_post_thumbnail_id(get_the_ID(), 'full'),
            'logoId' => get_field('resource_logo', get_the_ID()),
            'post_ID' => get_the_ID(),
            'target' => '',
            'ctaText' => $cta_button_text ? $cta_button_text : 'Read the story'
        ));
        // array_push($case_studies_to_render, $the_post);
    }
} else {
    if( have_rows('manually_selected_case_studies') ){
        // Loop through rows.
        while( have_rows('manually_selected_case_studies') ){
            the_row();
            // Load sub field value.
            $case_study_post = get_sub_field('case_study');
            $case_study_title_override = get_sub_field('override_case_study_title');
            $case_study_image_override = get_sub_field('override_case_study_featured_image');
            $case_study_cta_override = get_sub_field('override_case_study_cta');
            $case_study_cta_text_override = get_sub_field('override_case_study_cta_text');
            $case_study_cta_target_blank = get_sub_field('override_case_study_cta_target_blank');
            $resource_logo_override = get_sub_field('override_resource_logo');
            // var_dump($case_study_post);

            $renderPost = array();
            if($case_study_title_override){
                $renderPost['title'] = $case_study_title_override;
            } else {
                $renderPost['title'] = $case_study_post->post_title;
            }

            if($case_study_image_override){
                // var_dump($case_study_image_override);
                $renderPost['imageId'] = $case_study_image_override['ID'];
            } else{
                $renderPost['imageId'] = $case_study_post ? get_post_thumbnail_id($case_study_post->ID, 'full') : '';
            }

            if($resource_logo_override){
                $renderPost['logoId'] = $resource_logo_override['ID'];
            } else {
                $renderPost['logoId'] = $case_study_post ? get_field('resource_logo', $case_study_post->ID) : '';
            }

            if($case_study_cta_override){
                $renderPost['permalink'] = $case_study_cta_override;
            } else {
                $renderPost['permalink'] = $case_study_post ? trailingslashit(get_the_permalink($case_study_post->ID)) : '';
            }

            if($case_study_cta_text_override){
                $renderPost['ctaText'] = $case_study_cta_text_override;
            } else {
                $renderPost['ctaText'] = $cta_button_text ? $cta_button_text : 'Read the story';
            }

            if($case_study_cta_target_blank){
                $renderPost['target'] = '_blank';
            } else {
                $renderPost['target'] = '';
            }

            if($case_study_post && $case_study_post->ID){
                $renderPost['post_ID'] = $case_study_post->ID;
            }

            // var_dump($renderPost);

            array_push($case_studies_to_render, $renderPost);

            // Do something, but make sure you escape the value if outputting directly...
        // End loop.
        }
    }
}

$has_carousel = count($case_studies_to_render) > 1;

?>

<div class=" <?php if ($color_variant == 'DARK') {
    echo 'bg-primaryBlue-100 text-white case_study_dark';
} else {
    echo 'bg-white';
} ?>">
    <div id="case_study_<?php echo $block["id"]; ?>" class="case_studies_container py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical <?php $has_carousel && (print 'has-carousel'); ?>">
        <div class="case_studies-content-wrapper">
            <div class="container mx-auto">
                <?php if($heading || $view_all_visible): ?>
                <div class="td-alert-heading  flex-1 flex flex-row items-center justify-between py-4 <?php echo $view_all_visible ? 'border-b border-solid' : ''; ?>">
                    <?php if($heading) :?>
                    <h2 class="font-header text-mobile-5xl lg:text-5xl leading-[1.2] md:leading-[1.25] <?php echo ''; ?>"><?php echo $heading; ?></h2>
                    <?php endif; ?>
                    <?php ?>
                    <?php if($view_all_visible) :?>
                    <a href="<?php print $view_all_url ?>" class="leading-snug font-display font-medium text-base justify-self-end uppercase <?php echo $color_variant == 'DARK' ? 'text-white' :'text-navy-100'; ?>">View All</a>
                    <?php endif; ?>
                </div>
                <?php endif; ?>

                <div class="case_study_slider" data-slider-speed=<?php echo $slider_speed; ?>>
                    <?php
                    foreach($case_studies_to_render as $case):
                    ?>
                    <div class="case_study_outer_wrapper">
                    <div class="case_study_wrapper  h-[350px] w-full md:h-[550px] md:w-[978px] <?php echo $has_carousel ? 'mr-[30px]' : 'solo mx-auto'; ?> bg-primaryBlue-25 text-white my-4 lg:my-[66px] xl:my-20 rounded-2xl relative overflow-hidden">
                        <?php if($case['imageId']): ?>
                        <img
                            loading="lazy"
                            class="element-background-image wp-image-<?php echo $case['imageId']; ?> top-0 left-0 w-full h-full object-fill absolute"
                            src="<?php echo esc_url(wp_get_attachment_image_url($case['imageId'], 'medium')); ?>"
                            srcset="<?php echo esc_attr( wp_get_attachment_image_srcset($case['imageId'], 'medium')); ?>"
                            alt="<?php echo get_post_meta($case['imageId'], '_wp_attachment_image_alt', TRUE); ?>"
                        />
                        <?php endif; ?>
                        <div class="element-underlay-gradient top-0 left-0 w-full h-full object-fill absolute bg-caseStudy"></div>
                        <div class="content absolute bottom-0 h-full w-full flex flex-col justify-center md:justify-end p-4 md:p-20">
                            <?php if($case['logoId']) : ?>
                                <img
                                loading="lazy"
                                class="!hidden md:!flex self-start wp-image-<?php echo $case['logoId']; ?> max-w-28 lg:max-w-56 h-auto max-h-10 mb-6"
                                src="<?php echo esc_url(wp_get_attachment_image_url($case['logoId'], 'medium')); ?>"
                                srcset="<?php echo esc_attr( wp_get_attachment_image_srcset($case['logoId'], 'medium')); ?>"
                                alt="<?php echo get_post_meta($case['logoId'], '_wp_attachment_image_alt', TRUE); ?>"
                                />
                            <?php endif; ?>
                            <?php if($case['title']): ?>
                                <h3 class='font-header text-mobile-case-study-heading lg:text-case-study-heading leading-[1.2] lg:leading-[1.25] hidden lg:flex w-full md:w-9/12 mb-8'><?php echo $case['title']; ?></h3>
                            <?php endif; ?>
                            <a href="<?php echo $case['permalink']; ?>" target="<?php echo $case['target']; ?>" class="btn-primary px-[20px] py-[10px] md:px-[30px] md:py-[15.5px] text-mobile-button lg:text-button hidden lg:flex text-white cursor-pointer"><?php echo $case['ctaText']; ?></a>
                        </div>
                    </div>
                    <?php if($case['title']): ?>
                                <h3 class='font-header outer-heading text-mobile-case-study-heading lg:text-case-study-heading leading-[1.2] lg:leading-[1.25] flex lg:hidden w-full md:w-9/12 mb-8'><?php echo $case['title']; ?></h3>
                            <?php endif; ?>
                            <a href="<?php echo $case['permalink']; ?>" target="<?php echo $case['target']; ?>"  class="btn-primary px-[20px] py-[10px] md:px-[30px] md:py-[15.5px] mb-sm-vertical text-mobile-button lg:text-button flex lg:hidden text-white cursor-pointer"><?php echo $case['ctaText']; ?></a>
                            </div>
                    <?php
                    endforeach;
                    ?>
                </div>

                <?php if(count($case_studies_to_render) > 1) : ?>
                <div class="arrows-wrapper flex flex-1 justify-end">
                    <div class="case-arrows relative"></div>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>

<style>
    .wp-block-td-quote-container{position:relative}.case-arrows{height:42px; width: 110px;}.case-arrows .slick-prev{left:0px !important;height:30px;width:48px}.case-arrows .slick-prev:before{content:"";background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCA1MCAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljk4ODggMjkuODA5NkwxLjU4MzMzIDE1LjE5NTRNMS41ODMzMyAxNS4xOTU0TDE1Ljk4ODggMC41ODI3OTdNMS41ODMzMyAxNS4xOTU0TDQ5LjI1IDE1LjE5NTQiIHN0cm9rZT0iIzEzMTAyMyIgc3Ryb2tlLXdpZHRoPSIxLjMxNjUyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9zdmc+Cg==);height:30px;width:48px;display:block}.case-arrows .slick-next{left:60px !important;height:30px;width:48px}.case-arrows .slick-next:before{content:"";background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCA0OSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMzLjM2NjcgMC41ODMwMDhMNDcuNzcyMSAxNS4xOTcyTTQ3Ljc3MjEgMTUuMTk3MkwzMy4zNjY3IDI5LjgwOThNNDcuNzcyMSAxNS4xOTcySDAuMTA1NDY5IiBzdHJva2U9IiMxMzEwMjMiIHN0cm9rZS13aWR0aD0iMS4zMTY1MiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+Cjwvc3ZnPgo=);height:30px;width:48px;display:block}.case_study_dark .case-arrows .slick-prev:before{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCA1MCAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljk4ODggMzAuMjk3OEwxLjU4MzMzIDE1LjY4MzdNMS41ODMzMyAxNS42ODM3TDE1Ljk4ODggMS4wNzEwOE0xLjU4MzMzIDE1LjY4MzdMNDkuMjUgMTUuNjgzNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjMxNjUyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9zdmc+Cg==)}.case_study_dark .case-arrows .slick-next:before{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCA0OSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMzLjM2NjcgMS4wNzIyN0w0Ny43NzIxIDE1LjY4NjRNNDcuNzcyMSAxNS42ODY0TDMzLjM2NjcgMzAuMjk5TTQ3Ljc3MjEgMTUuNjg2NEgwLjEwNTQ2OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjMxNjUyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9zdmc+Cg==)}
    .case_study_slider .slick-list{
        overflow: hidden;
    }
    /*
    @media (max-width: 767px) {
        .case_study_slider .slick-list{
            max-width: 98vw;
        }
    }

    @media (min-width: 768px) {
        .case_study_slider .slick-list{
            max-width: 99vw;
        }
    }
    */
</style>
<script>
jQuery(document).ready(function($){
    // Quote Slider
    var sliderSpeed = $('#case_study_<?php echo $block["id"]; ?> .case_study_slider').data('slider-speed');

    if ($('#case_study_<?php echo $block["id"]; ?> .case_study_slider .case_study_wrapper').length > 1) {
        console.log('Slider Speed: ', sliderSpeed);
        $('#case_study_<?php echo $block["id"]; ?> .case_study_slider').slick({
            dots: false,
            infinite: false,
            fade: false,
            autoplay: false,
            speed: sliderSpeed,
            //cssEase: 'linear',
            cssEase: 'cubic-bezier(0.76, 0, 0.24, 1)',
            slidesToShow: 1,
            slidesToScroll: 1,
            //centerMode: true,
            adaptiveHeight: false,
            variableWidth: true,
            arrows: true,
            appendArrows : '#case_study_<?php echo $block["id"]; ?> .case-arrows',
            responsive: [
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    //variableWidth: false,
                    centerMode: false
                }
                }
            ]
        });
    }
});
</script>