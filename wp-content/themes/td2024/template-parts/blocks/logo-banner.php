<?php

// Get the ID of the current page
$page_id = get_the_ID();

// Get the fields for the 'case_study_block' field group
$color_variant = get_field('color_variant');
$heading = get_field('heading');
$heading_visibility = get_field('heading_visibility');
$animate = get_field('animate');
$no_background = get_field('no_background');
$autopopulate_tag = get_field('autopopulate_tag');
$logos = get_field('logos');

$slider_speed_desktop = get_field('animation_speed_desktop');
$slider_speed_mobile = get_field('animation_speed_mobile');

$slider_speed = $slider_speed_desktop ? $slider_speed_desktop : 5000;
$slider_speed = max($slider_speed, 20000);

$slider_speed_mobile = get_field('animation_speed_mobile') ? get_field('animation_speed_mobile') : 20000;
$slider_speed_mobile = max($slider_speed_mobile, 20000);

?>
<div id="logo_banner_<?php echo $block["id"]; ?>" style="--duration: <?php print $slider_speed ?>ms; --duration-mobile: <?php print $slider_speed_mobile ?>ms" class="logo-banner-block py-4 lg:py-[50px] <?php if ($color_variant == 'DARK') {
    echo $no_background ? 'text-white case_study_dark' : 'bg-primaryBlue-100 text-white case_study_dark';
} else {
    echo $no_background ?  '' : 'bg-white';
} ?> <?php print $animate ? 'logo-banner-block--animate' : '' ?>">
        <?php if($heading) :?>
            <div class="td-alert-heading flex-1">
            <h2 class="font-display font-semibold text-mobile-logo-banner-heading lg:text-logo-banner-heading leading-eyebrow text-center mb-[15px] <?php echo ''; ?>"><?php echo $heading; ?></h2>
            </div>
        <?php endif; ?>
    <div class="case_study_slider logo-banner__wrapper flex flex-row <?php echo $animate ? '' : 'x-w-full x-flex-wrap';?> x-justify-center items-center"  data-slider-speed=<?php echo $slider_speed; ?>>
            <div class="logo-banner__logos flex flex-row  x-justify-center items-center">
        <?php
            $counter = 0;
            foreach($logos as $logo){
        ?>
                <?php if($logo['logo_image'] && $logo['logo_image']['ID']) : ?>
                   <?php if($logo['logo_link']): ?>
                    <a href="<?php echo $logo['logo_link']; ?>" target="_blank">
                    <?php endif; ?>
                    <img
                    loading="lazy"
                    height=<?php echo $logo['logo_height'] ?  $logo['logo_height'] : 56; ?>
                    width=<?php echo $logo['logo_width'] ?  $logo['logo_width'] : 160; ?>
                    class="logo-element <?php echo $animate ? '' : 'inline-block' ?> mr-[20px] md:mr-[20px] mt-[20px] md:mt-[30px] wp-image-<?php echo $logo['logo_image']['ID']; ?>"
                    src="<?php echo esc_url(wp_get_attachment_image_url($logo['logo_image']['ID'], 'medium')); ?>"
                    srcset="<?php echo esc_attr( wp_get_attachment_image_srcset($logo['logo_image']['ID'], 'medium')); ?>"
                    alt="<?php echo get_post_meta($logo['logo_image']['ID'], '_wp_attachment_image_alt', TRUE); ?>"
                    />
                    <?php if($logo['logo_link']): ?>
                    </a>
                    <?php endif; ?>
                <?php 
                endif; 
                $counter = 1;
                ?>
        <?php
            }
        ?>
        </div>
    </div>
</div>