<?php

// Get the ID of the current page
$page_id = get_the_ID();

// Get the fields for the 'videos_block' field group
$color_variant = get_field('color_variant');
$heading = get_field('heading');
$heading_visibility = get_field('heading_visibility');
$subheading = get_field('subheading');
$subheading_visibility = get_field('subheading_visibility');
$manually_selected_videos = get_field('manually_selected_videos');
$slider_speed = get_field('slider_speed');
$cta_button_text = get_field('cta_button_text');
$cta_button_url = get_field('cta_button_url');
$cta_visibility = get_field('cta_visibility');
$align_text = get_field("align_text") ? get_field("align_text") : "video";

$videos_to_render = array();

$wisitia_count = 0;
$youtube_count = 0;

if( have_rows('manually_selected_videos') ){
    
    while( have_rows('manually_selected_videos') ){
        the_row();
        $videos_platform = get_sub_field('videos_platform');
        $videos_id = get_sub_field('videos_id');
        $videos_title = get_sub_field('videos_title');
        $videos_image = get_sub_field('videos_featured_image');

        $renderPost = array();
        if($videos_title){
            $renderPost['title'] = $videos_title;
        } else {
            $renderPost['title'] = '';
        }

        if($videos_image){
            $renderPost['imageId'] = $videos_image['ID'];
        }

        if($videos_platform){
            $renderPost['platform'] = $videos_platform;
            if($videos_platform == 'wistia'){
                $wisitia_count = $wisitia_count + 1;
            } else{
                $youtube_count = $youtube_count + 1;
            }
        }
        if($videos_id){
            $renderPost['videoID'] = $videos_id;
        } else {
            $renderPost['videoID'] = '';
        }
        array_push($videos_to_render, $renderPost);
    }
}

$has_carousel = count($videos_to_render) > 1;
?>
<?php
$rounded_bottom_corners = get_field('rounded_bottom_corners');
?>
<div id="videos_<?php echo $block["id"]; ?>" class="align-text--<?php print $align_text ?> <?php echo ($rounded_bottom_corners === 'yes') ? 'rounded-b-hero' : ''; ?> videos_container py-[50px] <?php $has_carousel && (print 'has-carousel'); ?> <?php if ($color_variant == 'DARK') {
    echo 'bg-primaryBlue-100 text-white videos_dark';
} else {
    echo 'bg-white';
} ?>">
    <div class="container mx-auto">

        <?php if($heading || $subheading): ?>
        <div class="videos-text-wrapper">
            <?php if($heading) : ?>
            <div class="td-alert-heading  flex-1 flex flex-row items-center justify-between xpy-4 videos__heading">
                <h2 class="font-header text-4xl md:text-5xl leading-tight font-light"><?php echo $heading; ?></h2>
            </div>
            <?php endif; ?>
            <?php if($subheading) : ?>
            <div class="font-display text-mobile-l md:text-l leading-[145%] videos__subheading"><?php echo $subheading; ?></div>
            <?php endif; ?>
        </div>
        <?php endif; ?>

        <div class="videos-content-wrapper">
            <div class="videos_slider"  data-slider-speed=<?php echo $slider_speed; ?>>
                <?php
                foreach($videos_to_render as $video){
                ?>
                <div class="videos_outer_wrapper">
                    <div class="rounded-[10px] lg:rounded-[20px] videos_wrapper w-full aspect-video max-w-[978px] bg-primaryBlue-25 text-white my-4 rounded-2xl relative overflow-hidden">
                        <?php if($video['imageId']): ?>
                            <img
                                loading="lazy"
                                class="element-background-image wp-image-<?php echo $video['imageId']; ?> top-0 left-0 w-full h-full object-fill absolute"
                                src="<?php echo esc_url(wp_get_attachment_image_url($video['imageId'], 'medium')); ?>"
                                srcset="<?php echo esc_attr( wp_get_attachment_image_srcset($video['imageId'], 'medium')); ?>"
                                alt="<?php echo get_post_meta($video['imageId'], '_wp_attachment_image_alt', TRUE); ?>"
                            />
                        <?php endif; ?>
                        <div class="element-underlay-gradient top-0 left-0 w-full h-full object-fill absolute bg-videoOverlay"></div>
                        <div class="content absolute bottom-0 h-full w-full flex flex-col justify-end p-4 md:p-11">
                            <?php if($video['title']): ?>
                                <h3 class='font-header hidden md:block text-mobile-5xl lg:text-5xl leading-[1.1] w-11/12'><?php echo $video['title']; ?></h3>
                            <?php endif; ?>
                        </div>
                        <?php if($video['platform'] == 'wistia'): ?>
                                <script src="https://fast.wistia.com/embed/medias/<?php echo $video['videoID']; ?>.jsonp" async></script>
                                    <span class="wistia_embed wistia_async_<?php echo $video['videoID']; ?> popover=true popoverContent=link popoverSize=1280x720" style="display:inline;">
                                    <a class="wisita-anchor" href="#"> 
                                        <div class="play-button-container">
                                            <div class="play-button-wrapper">
                                                <img class="b-lazy" src="<?php echo get_template_directory_uri().'/assets/images/icons/play-button.svg'; ?>" width="704" height="358" alt="<?php echo 'Video: '.$videos_title;?>" />
                                            </div>
                                        </div>
                                    </a></span> 
                        <?php endif; ?>
                        <?php if($video['platform'] == 'youtube'): ?>
                            <a href="https://www.youtube.com/watch?v=<?php echo $video['videoID']; ?>" class="mediabox">
                                <div class="play-button-container">
                                    <div class="play-button-wrapper">
                                        <img class="b-lazy" src="<?php echo get_template_directory_uri().'/assets/images/icons/play-button.svg'; ?>">
                                    </div>
                                </div>
                            </a>
                        <?php endif; ?>
                        
                    </div>

                    <?php if($video['title']): ?>
                        <h3 class='caption md:hidden font-header text-mobile-case-study-heading lg:text-case-study-heading leading-[1.2] lg:leading-[1.25]'><?php echo $video['title']; ?></h3>
                    <?php endif; ?>	

                </div>
                <?php
                    }
                ?>
            </div>

            <?php if(count($videos_to_render) > 1 || $cta_button_url): ?>
            <div class="bottom-controls flex flex-1 justify-between">
                <?php if($cta_button_url) : ?>
                    <a href="<?php echo $cta_button_url; ?>" class="btn-primary text-mobile-button lg:text-button text-white md:w-2/12 cursor-pointer"><?php echo $cta_button_text ? $cta_button_text : 'Get a demo' ?></a>
                <?php endif; ?>
                <?php if(count($videos_to_render) > 1) : ?>
                    <div class="arrows-wrapper flex flex-1 justify-end">
                        <div class="case-arrows relative"></div>
                    </div>
                <?php endif; ?>
            </div>
            <?php endif; ?>
            
        </div>
    </div>
    </div>
</div>
<style>
    .wp-block-td-quote-container{position:relative}.case-arrows{height:42px; width: 110px;}.case-arrows .slick-prev{left:0px !important;height:30px;width:48px}.case-arrows .slick-prev:before{content:"";background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCA1MCAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljk4ODggMjkuODA5NkwxLjU4MzMzIDE1LjE5NTRNMS41ODMzMyAxNS4xOTU0TDE1Ljk4ODggMC41ODI3OTdNMS41ODMzMyAxNS4xOTU0TDQ5LjI1IDE1LjE5NTQiIHN0cm9rZT0iIzEzMTAyMyIgc3Ryb2tlLXdpZHRoPSIxLjMxNjUyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9zdmc+Cg==);height:30px;width:48px;display:block}.case-arrows .slick-next{left:60px !important;height:30px;width:48px}.case-arrows .slick-next:before{content:"";background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCA0OSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMzLjM2NjcgMC41ODMwMDhMNDcuNzcyMSAxNS4xOTcyTTQ3Ljc3MjEgMTUuMTk3MkwzMy4zNjY3IDI5LjgwOThNNDcuNzcyMSAxNS4xOTcySDAuMTA1NDY5IiBzdHJva2U9IiMxMzEwMjMiIHN0cm9rZS13aWR0aD0iMS4zMTY1MiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+Cjwvc3ZnPgo=);height:30px;width:48px;display:block}.videos_dark .case-arrows .slick-prev:before{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCA1MCAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljk4ODggMzAuMjk3OEwxLjU4MzMzIDE1LjY4MzdNMS41ODMzMyAxNS42ODM3TDE1Ljk4ODggMS4wNzEwOE0xLjU4MzMzIDE1LjY4MzdMNDkuMjUgMTUuNjgzNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjMxNjUyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9zdmc+Cg==)}.videos_dark .case-arrows .slick-next:before{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCA0OSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMzLjM2NjcgMS4wNzIyN0w0Ny43NzIxIDE1LjY4NjRNNDcuNzcyMSAxNS42ODY0TDMzLjM2NjcgMzAuMjk5TTQ3Ljc3MjEgMTUuNjg2NEgwLjEwNTQ2OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjMxNjUyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9zdmc+Cg==)}

    .videos_slider .slick-list{
        overflow: hidden;
    }
    @media (max-width: 767px) {
        /*
        .videos_slider .slick-list{
            max-width: 98vw;
        }
        */
    }

    @media (min-width: 768px) {
        /*
        .videos_slider .slick-list{
            max-width: 99vw;
        }
        */
        .play-button-container {
        display:flex;
        width: 118px;
        height: 118px;
        border-radius: 100px;
        border: 1px solid #3A61FF;
        background: linear-gradient(98deg, #131023 6.85%, #252D6E 100.36%);
        justify-content: center;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
        box-shadow: 0px 0px 63px 0px rgba(58, 97, 255, 0.50);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }
    .mediabox:hover .play-button-container, .wisita-anchor:hover .play-button-container{ 
        box-shadow: 0px 0px 20px 0px rgba(58, 97, 255, 0.90);
    }
    .play-button-wrapper {
        width: 40px;
        height: 40px;
    }
    img.b-lazy {
        border-radius: 0 !important;
    }

    .wistia_embed{
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    }
    @media (max-width: 767px) {
        .videos_wrapper.slick-slide {
            /*height: 350px;*/
        }
        .play-button-container {
        display:flex;
        width: 59px;
        height: 59px;
        border-radius: 100px;
        border: 1px solid #3A61FF;
        background: linear-gradient(98deg, #131023 6.85%, #252D6E 100.36%);
        justify-content: center;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
        box-shadow: 0px 0px 63px 0px rgba(58, 97, 255, 0.50);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }
    .mediabox-close {
        bottom: 480px;
    }
    .mediabox-content iframe{
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .mediabox:hover .play-button-container, .wisita-anchor:hover .play-button-container{ 
        box-shadow: 0px 0px 20px 0px rgba(58, 97, 255, 0.90);
    }
    .play-button-wrapper {
        width: 20px;
        height: 20px;
    }
    img.b-lazy {
        border-radius: 0 !important;
    }

    .wistia_embed{
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    }
</style>
<script>
jQuery(document).ready(function($){
    // Quote Slider
    var sliderSpeed = $('#videos_<?php echo $block["id"]; ?> .videos_slider').data('slider-speed');

    if ($('#videos_<?php echo $block["id"]; ?> .videos_slider .videos_wrapper').length > 1) {
        console.log('Slider Speed: ', sliderSpeed);
        $('#videos_<?php echo $block["id"]; ?> .videos_slider').slick({
            dots: false,
            //infinite: true,
            infinite: false,
            fade: false,
            autoplay: false,
            speed: sliderSpeed,
            //cssEase: 'linear',
            cssEase: 'cubic-bezier(0.76, 0, 0.24, 1)',
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            variableWidth: true,
            //centerMode: true,
            arrows: true,
            appendArrows : '#videos_<?php echo $block["id"]; ?> .case-arrows',
            responsive: [
                {
                breakpoint: 1023,
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
    <?php if($wisitia_count >0): ?>
        $("head").append('<script src="https://fast.wistia.com/assets/external/E-v1.js" async />');
    <?php endif; ?>

    <?php if($youtube_count >0): ?>
        $("head").append('<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/static/mediabox/mediabox.min.css'; ?>" async />');
        $("head").append('<script src="<?php echo get_template_directory_uri().'/static/mediabox/mediabox.min.js'; ?>" async />');
        setTimeout(() => {
            MediaBox('.mediabox');
        }, 400);
    <?php endif; ?>

});
</script>