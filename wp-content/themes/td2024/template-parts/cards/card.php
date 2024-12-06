<?php 

$external_link = get_field('external_link');
$url = $external_link ? $external_link : trailingslashit(get_permalink());
$target = $external_link ? '_blank' : '';

echo '<div data-resource class="relative inline-table mb-[45px]">';

if (has_post_thumbnail()) {
    $thumbnail_url = get_the_post_thumbnail_url();
    echo '<a class="relative w-full mb-[30px] rounded-[20px]" href="' . $url . '" target="' . $target . '" style="background-image: url(' . $thumbnail_url . '); display: block; background-size: cover; background-position: center; padding-bottom: 100%;"></a>';
}
$terms = get_the_terms(get_the_ID(), 'category');
if ($terms && !is_wp_error($terms)) {
    $term_names = array();
    foreach ($terms as $term) {
        $term_names[] = $term->name;
    }
    echo '<span class="block text-blue-100 font-semibold mb-[10px]">' . join(", ", $term_names) . '</span>';
}

echo '<h4 class="mb-[10px] font-medium"><a class="text-3xl no-underline leading-[1.45]" href="' . $url . '" target="' . $target . '">' . get_the_title() . '</a></h4>';
echo '<p class="text-l font-normal leading-[1.45]">' . get_the_excerpt() . '</p>';

echo '</div>';

?>