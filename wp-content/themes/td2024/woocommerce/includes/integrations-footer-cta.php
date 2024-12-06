<?php
$backgroundStyle = get_field_object('background_style', wc_get_page_id('shop'))['value'];
//$previousBackground = get_field_object('previous_background', wc_get_page_id('shop'))['value'];
$cta_title = get_field('cta_title', wc_get_page_id('shop'));

$primary_pagelink_or_url = get_field('primary_page_link_or_url', wc_get_page_id('shop')) ? get_field('primary_page_link_or_url', wc_get_page_id('shop')) : 'url';
$primary_cta_link = get_field('cta_link', wc_get_page_id('shop'));
$primary_cta_link_url = get_field('cta_link_url', wc_get_page_id('shop'));
$open_new_tab = get_field('footer_open_in_new_tab', wc_get_page_id('shop'));
$primary_cta_text = get_field('cta_text', wc_get_page_id('shop'));

$secondary_pagelink_or_url = get_field('secondary_page_link_or_url', wc_get_page_id('shop')) ? get_field('secondary_page_link_or_url', wc_get_page_id('shop')) : 'url';
$secondary_cta_link = get_field('secondary_cta_link', wc_get_page_id('shop'));
$secondary_cta_link_url = get_field('secondary_cta_link_url', wc_get_page_id('shop'));
$open_secondary_new_tab = get_field('footer_secondary_open_in_new_tab', wc_get_page_id('shop'));
$secondary_cta_text = get_field('secondary_cta_text', wc_get_page_id('shop'));
?>
<div class="w-full bg-<?php echo $previousBackground; ?>">
    <div class="cta-block-full bg-<?php echo $backgroundStyle; ?> py-[150px] text-white">
        <div class="cta-block-inner container mx-auto grid grid-cols-12">
            <div class="cta-block-content md:col-span-6 col-span-12">
                <h2 class="cta-block-title block text-5xl font-header leading-[1.25] mb-8"><?php echo $cta_title; ?></h2>
                
                <div class="cta-row block sm:flex flex-row items-center">
                    <a href="<?php echo ($primary_pagelink_or_url == 'pagelink') ? $primary_cta_link : $primary_cta_link_url; ?>" class="cta-block-link btn-primary block w-fit mx-auto sm:mx-0 inline-block" <?php echo $open_new_tab ? 'target="_blank"' : ''; ?>><?php echo $primary_cta_text; ?></a>
                    <?php if (!empty($secondary_cta_link) || !empty($secondary_cta_link_url)) {
                        echo '<a href="' . ($secondary_pagelink_or_url == 'pagelink' ? $secondary_cta_link : $secondary_cta_link_url) . '" class="w-fit cta-block-link btn-secondary block sm:inline-block ml-0 sm:text-left mt-[20px] sm:mt-0 sm:ml-3 px-[20px] text-[16px] md:text-[20px] py-0"' . ($open_secondary_new_tab ? ' target="_blank"' : '') . '>' . $secondary_cta_text . '</a>';
                    } ?>
                </div>
            </div>
        </div>
    </div>
</div>