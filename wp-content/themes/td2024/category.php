<?php
get_header();

$category = get_category( get_query_var( 'cat' ) );
$term_id = $category->cat_ID;
$resources_index = get_field("resources_index", "option");
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
echo "Paged: {$paged}";

?>

<div class="page-wrapper">

    <?php 
    if($resources_index): 
        $heroText = get_field('resources_header', $resources_index->ID);
    ?>
    <div id="resources-hero" class="hero relative pt-[220px] pb-[100px]">
        <div class="hero-content container mx-auto relative grid grid-cols-12">
            <h1 class="font-header text-mobile-6xl lg:text-6xl col-span-7 leading-[100%] md:leading-[1.1]"><?php echo $heroText; ?></h1>
            <img class="absolute -z-[1] line-star right-0 -bottom-[100px] pointer-events-none" src="<?php echo get_template_directory_uri(); ?>/assets/images/accent/line-star_green.svg" alt="" />
        </div>
    </div>

    <div id="featured-resource" class="bg-gray-100 py-[80px]">
        <div class="featured-inner container mx-auto">
            <span class="text-3xl block mb-[30px]">Featured Resource</span>
                <?php
                $ID = $resources_index->ID;

                $featured_resource = get_field('featured_resource', $ID);
                
                if ($featured_resource) {
                $featured_post_title = get_the_title($featured_resource->ID);
                ?>
				<div class="featured-post grid grid-cols-12 gap-6 items-center">
                    <div class="featured-left sm:col-span-7 sm:mb-0 mb-[30px] col-span-12">
                    <span class="eyebrow text-[22px] text-blue-100 font-semibold block mb-[10px] mb-[20px]">
                    <?php
                      $featured_resource_id = get_post_meta($ID, 'featured_resource', true);
                      $featured_resource = get_post($featured_resource_id);
                      
                      if ($featured_resource) {
                        $terms = get_the_terms($featured_resource->ID, 'category');
                        if ($terms && !is_wp_error($terms)) {
                            $term_names = array();
                            foreach ($terms as $term) {
                                $term_names[] = $term->name;
                            }
                            echo '<span>' . join(", ", $term_names) . '</span>';
                        } else {
                            if (is_wp_error($terms)) {
                                echo "Error occurred: " . $terms->get_error_message();
                            } else {
                                echo "No categories found.";
                            }
                        }
                    } else {
                        echo "Featured resource post not found.";
                    }
                    ?>
                    </span>
					<h2 class="font-header text-5xl mb-[5px]"><?php echo $featured_post_title; ?></h2>
          <div class="excerpt py-4 md:pr-4">
          <?php
            // Assuming $featured_resource_id contains the ID of the nested post
            $featured_resource = get_post($featured_resource_id);

            if ($featured_resource) {
                // Output excerpt
                echo '<p class="leading-7">' . $featured_resource->post_excerpt . '</p>';
            } else {
                echo "Featured resource post not found.";
            }
          ?>
          </div>
					<a class="btn-primary text-white inline-block" href="<?php echo get_permalink($featured_resource->ID); ?>">Read post</a>
                    </div>
                    <div class="featured-right sm:col-span-5 col-span-12 overflow-hidden rounded-[20px]">
                        <a href="<?php echo get_permalink($featured_resource->ID); ?>">
                            <?php if (has_post_thumbnail($featured_resource->ID)) : ?>
                                <?php echo get_the_post_thumbnail($featured_resource->ID, 'large', array('class' => 'rounded-[20px] w-full hover:scale-[1.05] transition-all duration-500 cursor-pointer')); ?>
                            <?php else : ?>
                                <img class="rounded-[20px] mt-0 mb-[30px] box-shadow  object-cover hover:scale-[1.05] transition-all duration-500 cursor-pointer" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/blog-fallback.png" />
                            <?php endif; ?>
                        </a>
                    </div>
					
					<?php $post = get_queried_object(); ?>
				</div>
			<?php } ?>
        </div>
    </div>
    <?php 
    endif;
    ?>

    <div class="posts-wrapper py-[85px]">
        <?php
            $args = array(
                'post_type' => array('resources'),
                'posts_per_page' => 9,
                'paged' => $paged,
                'status'    => "publish",
                'tax_query' => array(
                    array(
                        "taxonomy" => "category",
                        "terms" => $term_id
                    )
                )
            );

            $query = new WP_Query($args);

            if ($query->have_posts()) {
                ?>
                <div class="filter-sort-row container mx-auto mb-[45px] grid grid-cols-1 md:grid-cols-4 mb-4 gap-4">
                    <div class="relative">
                        <input type="search" id="resource-search" class="w-full h-[53px] border-2 border-gray-50 !rounded-[5px] py-[15px] pl-[13px] pr-[40px] text-sm" placeholder="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" class="absolute right-[10px] top-[18px]">
                            <g clip-path="url(#clip0_336_17364)">
                            <path d="M13.3034 11.8971H12.6451L12.4117 11.6721C13.2284 10.7221 13.7201 9.4888 13.7201 8.14714C13.7201 5.15547 11.2951 2.73047 8.30339 2.73047C5.31172 2.73047 2.88672 5.15547 2.88672 8.14714C2.88672 11.1388 5.31172 13.5638 8.30339 13.5638C9.64505 13.5638 10.8784 13.0721 11.8284 12.2555L12.0534 12.4888V13.1471L16.2201 17.3055L17.4617 16.0638L13.3034 11.8971ZM8.30339 11.8971C6.22839 11.8971 4.55339 10.2221 4.55339 8.14714C4.55339 6.07214 6.22839 4.39714 8.30339 4.39714C10.3784 4.39714 12.0534 6.07214 12.0534 8.14714C12.0534 10.2221 10.3784 11.8971 8.30339 11.8971Z" fill="#616161"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_336_17364">
                            <rect width="20" height="20" fill="white" transform="translate(0.386719 0.230469)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <?php get_template_part("template-parts/form/select/custom", null, array(
                        "initial"       => array("label"=>"Filter by Resource Type","value"=>"0"),
                        "taxonomy"      => "category",
                        "id"            => "category-filter",
                        "active"        => $term_id
                    )); ?>
                    
                    <?php get_template_part("template-parts/form/select/custom", null, array(
                        "initial"       => array("label"=>"Filter by Industry","value"=>"0"),
                        "taxonomy"      => "industry",
                        "id"            => "industry-filter"
                    )); ?>
                    
                    <?php get_template_part("template-parts/form/select/custom", null, array(
                        "initial"       => array("label"=>"Filter by Topic","value"=>"0"),
                        "taxonomy"      => "topic",
                        "id"            => "topic-filter"
                    )); ?>
                </div>
                <?php
                echo '<div id="resources-container" class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">';
                while ($query->have_posts()) {
                    $query->the_post();
                    echo '<div class="relative inline-table mb-[45px] overflow-hidden rounded-[20px]">';
                    
                    if (has_post_thumbnail()) {
                        $thumbnail_url = get_the_post_thumbnail_url();

                        // Wrap the anchor tag with a div for styling
                        echo '<div class="post-thumbnail-wrapper overflow-hidden rounded-[20px] mb-[30px]">';
                        echo '<a href="' . get_permalink() . '" style="background-image: url(' . $thumbnail_url . '); display: block; background-size: cover; background-position: center; padding-bottom: 100%; border-radius: 20px;
                        transition: all 0.5s; cursor: pointer;" onmouseover="this.style.transform = \'scale(1.05)\'" onmouseout="this.style.transform = \'scale(1)\'"></a>';
                        echo '</div>'; // Closing div for post-thumbnail-wrapper
                                    }
                    $terms = get_the_terms(get_the_ID(), 'category');
                    if ($terms && !is_wp_error($terms)) {
                        $term_names = array();
                        foreach ($terms as $term) {
                            $term_names[] = $term->name;
                        }
                        echo '<span class="block text-blue-100 font-semibold mb-[10px]">' . join(", ", $term_names) . '</span>';
                    }

                    echo '<h4 class="mb-[10px] font-medium"><a class="text-3xl no-underline leading-[1.45] line-clamp-2 lg:line-clamp-none" href="' . get_permalink() . '">' . get_the_title() . '</a></h4>';
                    echo '<p class="text-l font-normal leading-[1.45]">' . get_the_excerpt() . '</p>';
                    
                    echo '</div>';
                }
                echo '</div>';
                echo "<div class=\"pagination flex items-center justify-center mt-[60px]\" data-paged=\"{$paged}\">";
                $svg_path_previous = get_template_directory() . '/assets/images/icons/arrow-left-dark.svg';
                $svg_path_next = get_template_directory() . '/assets/images/icons/arrow-right-dark.svg';
                $svg_contents_previous = file_get_contents($svg_path_previous);
                $svg_contents_next = file_get_contents($svg_path_next);
                echo paginate_links(array(
                    'total' => $query->max_num_pages,
                    'prev_text' => __($svg_contents_previous),
                    'next_text' => __($svg_contents_next),
                ));
                echo '</div>';
            } else {
                echo 'No resources found.';
            }

            wp_reset_postdata(); ?>
    </div>
            <?php
            while (have_posts()) {
                the_post();
                the_content();
            }
            ?>
    
</div>

<?php get_footer(); ?>