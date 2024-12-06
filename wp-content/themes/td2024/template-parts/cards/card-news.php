<?php 
echo '<div class="relative inline-table mb-[45px]">';
                            
$thumbnail_url = get_the_post_thumbnail_url();
$image_id = get_field('resource_logo');
$image_src_array = wp_get_attachment_image_src($image_id, 'full');

if ($image_src_array !== false) {
    $image_src = $image_src_array[0];
} else {
    $image_src = '';  // or set a default image URL
}

$external_url = get_field('external_url');
$link = !empty($external_url) ? $external_url : trailingslashit(get_permalink());
$target = !empty($external_url) ? ' target="_blank"' : '';

echo '<a class="relative w-full mb-[30px] rounded-[20px] h-[175px]" href="' . $link . '"' . $target . ' style="background-image: url(' . $thumbnail_url . '); display: block; background-size: cover; background-position: center;">
<div class="w-full h-full absolute top-0 left-0 !z-[1] rounded-[20px] flex items-center justify-center border-[1px] border-solid border-blue-100">';

if (!empty($image_src)) {
    echo '<img class="cs-logo w-full max-h-[50px]" src="' . $image_src . '">';
}

echo '</div></a>';

echo '<h4 class="mb-[10px] font-medium"><a class="text-link text-3xl no-underline leading-[1.45]" href="' . $link . '"' . $target . '>' . get_the_title() . '</a></h4>';
echo '<p class="text-l font-normal leading-[1.45]">' . get_the_date() . '</p>';

echo '</div>';
?>