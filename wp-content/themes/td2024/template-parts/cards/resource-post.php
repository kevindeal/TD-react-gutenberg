<?php  
echo '<div class="relative inline-table mb-[45px]">';
                    
if (has_post_thumbnail()) {
    $thumbnail_url = get_the_post_thumbnail_url();
    echo '<a class="relative w-full h-[175px] mb-[30px] rounded-[20px]" href="' . trailingslashit(get_permalink()) . '" style="background-image: url(' . $thumbnail_url . '); display: block; background-size: cover; background-position: center;"></a>';
}
$terms = get_the_terms(get_the_ID(), 'category');
if ($terms && !is_wp_error($terms)) {
    $term_names = array();
    foreach ($terms as $term) {
        $term_names[] = $term->name;
    }
    echo '<span class="block text-blue-100 font-semibold mb-[10px]">' . join(", ", $term_names) . '</span>';
    echo reading_time();
}

echo '<h4 class="mt-[10px] font-medium"><a class="text-3xl no-underline leading-[1.45] line-clamp-2 lg:line-clamp-none" href="' . trailingslashit(get_permalink()) . '">' . get_the_title() . '</a></h4>';

echo '</div>';
?>