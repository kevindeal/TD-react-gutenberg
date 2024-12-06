<?php
$className = 'cta-block-full';
if (!empty($block['className'])) {
    $className .= ' ' . $block['className'];
}
//$backgroundStyle = get_field_object('background_style')['value'];
//$previousBackground = get_field_object('previous_background')['value'];

//print_r(get_fields());
//print_r(get_field_object('previous_background'));

$backgroundStyle = get_field("background_style");
$previousBackground = get_field("previous_background");

$cta_title = get_field('cta_title');

$primary_pagelink_or_url = get_field('primary_page_link_or_url') ? get_field('primary_page_link_or_url') : 'url';
$primary_cta_link_page = get_field('cta_link_page');
$primary_cta_link_url = get_field('cta_link');
$primary_open_in_new_tab = get_field('primary_open_in_new_tab');
$primary_cta_text = get_field('cta_text');

$secondary_pagelink_or_url = get_field('secondary_primary_page_link_or_url') ? get_field('secondary_primary_page_link_or_url') : 'url_link';
$secondary_cta_link_page = get_field('secondary_cta_link_page');
$secondary_cta_link_url = get_field('secondary_cta_link');
$secondary_open_in_new_tab = get_field('secondary_open_in_new_tab');

$secondary_cta_text = get_field('secondary_cta_text');
?>
<div class="w-full bg-<?php echo $previousBackground; ?>">
    <div class="<?php echo $className ?> bg-<?php echo $backgroundStyle; ?> py-sm-vertical md:py-md-vertical lg:py-lg-vertical-cta lg:px-lg-horizontal xl:px-xl-horizontal text-white">
        <div class="<?php echo $className ?>-inner container mx-auto grid grid-cols-12">
            <div class="<?php echo $className ?>-content lg:col-span-9 xl:col-span-6 xxl:col-span-7 col-span-12">
                <h2 class="cta-block-title block text-mobile-5xl lg:text-5xl font-header font-light leading-[1.2] md:leading-[1.25] mb-[30px]"><?php echo $cta_title; ?></h2>
                <div class="cta-row block sm:flex flex-row items-center">
                    <a href="<?php echo ($primary_pagelink_or_url == 'page') ? $primary_cta_link_page : $primary_cta_link_url; ?>" class="cta-block-link btn-primary w-fit sm:mx-0 inline-block px-[20px] py-[10px] md:px-[30px] md:py-[15.5px] text-mobile-button lg:text-button mb-[30px] sm:mb-0" <?php echo $primary_open_in_new_tab ? 'target="_blank"' : ''; ?>><?php echo $primary_cta_text; ?></a>
                    <?php 
                    if (!empty($secondary_cta_link_url) || !empty($secondary_cta_link_page)) {
                        $link = ($secondary_pagelink_or_url != 'url_link') ? $secondary_cta_link_page : $secondary_cta_link_url;
                        echo '<a href="' . $link . '" class="cta-block-link btn-secondary text-mobile-secondary-button lg:text-secondary-button block w-fit sm:inline-block ml-0 sm:text-left sm:mt-0 sm:ml-3 px-[20px] py-0"' . ($secondary_open_in_new_tab ? ' target="_blank"' : '') . '>' . $secondary_cta_text . '</a>';
                    } 
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>