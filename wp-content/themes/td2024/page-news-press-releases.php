<?php
/*
Template Name: News & Press Releases
*/
get_header();

$heroText = get_field('news_press_releases_header');
?>

<div class="page-wrapper">
    <div id="resources-hero" class="hero relative pt-[220px] pb-[284px] bg-navy-100">
        <div class="hero-content container mx-auto relative grid grid-cols-12">
            <h1 class="font-header text-mobile-6xl md:text-6xl col-span-9 leading-[100%] text-white"><?php echo $heroText; ?></h1>
            <img class="absolute  line-star right-0 -bottom-[284px] pointer-events-none w-[308px]" src="<?php echo get_template_directory_uri(); ?>/assets/images/accent/line-star_lightred.svg" alt="" />
        </div>
    </div>
    <?php
    while (have_posts()) {
        the_post();
        the_content();
    }
    ?>
    <div class="container mx-auto">
        <div class="posts-wrapper py-[85px]">
            <div id="press-release" class="press-releases mb-[80px]">
                    <h3 class="font-semibold text-4xl mb-[10px]">Press Releases</h3>
                    <hr class="block mb-[45px]">
                    <?php
                    $paged_press_releases = (isset($_GET['paged_press_releases'])) ? absint($_GET['paged_press_releases']) : 1;
                    $args = array(
                        'post_type' => 'press-releases',
                        'posts_per_page' => 6,
                        'paged' => $paged_press_releases
                    );
                    
                    $query = new WP_Query($args);

                    if ($query->have_posts()) {
                        echo '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-per_page="6" data-async_pages="press-releases">';
                        while ($query->have_posts()) {
                            $query->the_post();
                            echo '<div class="relative inline-table mb-[45px]">';
                            
                            echo '<h4 class="mb-[10px] font-medium"><a class="text-link text-3xl no-underline leading-[1.45]" href="' . trailingslashit(get_permalink()) . '">' . get_the_title() . '</a></h4>';
                            echo '<p class="text-l font-normal leading-[1.45]">' . get_the_date() . '</p>';
                            
                            echo '</div>';
                        }
                        echo '</div>';
                        echo '<div class="pagination flex items-center justify-center mt-[60px]">';
                        $svg_path_previous = get_template_directory() . '/assets/images/icons/arrow-left-dark.svg';
                        $svg_path_next = get_template_directory() . '/assets/images/icons/arrow-right-dark.svg';
                        $svg_contents_previous = file_get_contents($svg_path_previous);
                        $svg_contents_next = file_get_contents($svg_path_next);

                        global $wp_query;

                        // Backup the original $wp_query
                        $original_query = $wp_query;
                        $wp_query = null;
                        $wp_query = $query;
                        echo paginate_links(array(
                            'base' => add_query_arg('paged_press_releases', '%#%'),
                            'format' => '?paged_press_releases=%#%',
                            'current' => $paged_press_releases,
                            'total' => $query->max_num_pages,
                            'prev_text' => __($svg_contents_previous),
                            'next_text' => __($svg_contents_next),
                        ));

                        $wp_query = null;
                        $wp_query = $original_query;
                        echo '</div>';
                    } else {
                        echo 'No press releases found.';
                    }

                    wp_reset_postdata(); ?>
                </div>
                    <?php
                    while (have_posts()) {
                        the_post();
                        
                    }
                    ?>

            <div id="news" class="news">
                <h3 class="font-semibold text-4xl mb-[10px]">News<h3>
                <hr class="block mb-[45px]">
                <?php
                    $paged_news = (isset($_GET['paged_news'])) ? absint($_GET['paged_news']) : 1;
                    $args_news = array(
                        'post_type' => 'news',
                        'posts_per_page' => 6,
                        'paged' => $paged_news
                    );

                    $query_news = new WP_Query($args_news);

                    if ($query_news->have_posts()) {
                        echo '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-per_page="6" data-async_pages="news">';
                        while ($query_news->have_posts()) {
                            $query_news->the_post();
                            get_template_part("template-parts/cards/card","news");
                        }
                        echo '</div>';
                        echo '<div class="pagination flex items-center justify-center mt-[60px]">';
                        $svg_path_previous = get_template_directory() . '/assets/images/icons/arrow-left-dark.svg';
                        $svg_path_next = get_template_directory() . '/assets/images/icons/arrow-right-dark.svg';
                        $svg_contents_previous = file_get_contents($svg_path_previous);
                        $svg_contents_next = file_get_contents($svg_path_next);

                        global $wp_query;

                        // Backup the original $wp_query
                        $original_query = $wp_query;
                        $wp_query = null;
                        $wp_query = $query_news;
                        echo paginate_links(array(
                            'base' => add_query_arg('paged_news', '%#%'),
                            'format' => '?paged_news=%#%',
                            'current' => $paged_news,
                            'total' => $query_news->max_num_pages,
                            'prev_text' => __($svg_contents_previous),
                            'next_text' => __($svg_contents_next),
                        ));
                        
                        // Restore the original $wp_query
                        $wp_query = null;
                        $wp_query = $original_query;
                        echo '</div>';
                    } else {
                        echo 'No news found.';
                    }

                    wp_reset_postdata();
                ?>
            </div>

        </div>
    </div>
    
</div>
<?php
$previousBackground = get_field_object('previous_background') && array_key_exists("value",get_field_object('previous_background')) ? get_field_object('previous_background')['value'] : null;
$backgroundStyle = get_field_object('background_style') && array_key_exists("value",get_field_object('background_style')) ? get_field_object('background_style')['value'] : null;
$cta_title = get_field('cta_title');
$primary_cta_link = get_field('cta_link');
$primary_cta_text = get_field('cta_text');
$secondary_cta_link = get_field('secondary_cta_link');
$secondary_cta_text = get_field('secondary_cta_text');
?>
<div class="w-full bg-<?php echo $previousBackground; ?>">
    <div class="cta-block-full bg-<?php echo $backgroundStyle; ?> py-[50px] md:py-[150px] text-white">
        <div class="cta-block-inner container mx-auto grid grid-cols-12">
            <div class="cta-block-content lg:col-span-9 xl:col-span-7 col-span-12">
                <h2 class="cta-block-title block text-[30px] md:text-5xl font-header font-light leading-[1.2] md:leading-[1.25] mb-8"><?php echo $cta_title; ?></h2>
                
                <div class="cta-row block sm:flex flex-row items-center">
                    <a href="<?php echo $primary_cta_link; ?>" class="cta-block-link btn-primary block w-fit sm:mx-0 sm:inline-block px-[20px] py-[10px] md:px-[30px] md:py-[15.5px] text-mobile-button lg:text-button"><?php echo $primary_cta_text; ?></a>
                    <?php if (!empty($secondary_cta_link)) {
                        echo '<a href="' . $secondary_cta_link . '" class="cta-block-link btn-secondary block sm:inline-block mt-[15px] sm:text-left sm:mt-0 sm:ml-6 px-[20px] text-[16px] md:text-[20px]">' . $secondary_cta_text . '</a>';
                    } ?>
                </div>
            </div>
        </div>
    </div>
</div>


<script>
    /*
    jQuery(document).ready(function($) {
        $('#resource-filter').change(function() {
            console.log('filtering');
            var term_id = $(this).val();
            console.log(term_id);
            $.ajax({
                url: '<?php echo admin_url('admin-ajax.php'); ?>',
                data: {
                    'action': 'filter_resources',
                    'term_id': term_id
                },
                success: function(data) {
                    $('#resources-container').html(data);
                }
            });
        });
    });
    */
</script>
<?php get_footer(); ?>