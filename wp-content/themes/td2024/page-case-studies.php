<?php
/*
Template Name: Case Study Library
*/
get_header();

global $wp_query;

$heroText = get_field('cs_header');
$heroSubtext = get_field('cs_subheader');

$previousBackground = get_field_object('previous_background')['value'];
$backgroundStyle = get_field_object('background_style')['value'];
$cta_title = get_field('cta_title');
$primary_cta_link = get_field('cta_link');
$primary_cta_text = get_field('cta_text');
$secondary_cta_link = get_field('secondary_cta_link');
$secondary_cta_text = get_field('secondary_cta_text');

$custom_title = get_field('custom_title');
$eyebrow_label = get_field('eyebrow_label');
$featured_secondary_cta_link = get_field('featured_secondary_cta_link');
$featured_secondary_cta_text = get_field('featured_secondary_cta_text');
$featured_secondary_new_tab = get_field('featured_secondary_new_tab');

$industry = get_query_var("industry");
$industry_term = get_term_by("slug", $industry, "industry");


?>
<div class="page-wrapper">
    <div id="casestudy-hero" class="hero relative pt-[220px] pb-[100px]">
        <div class="hero-content container mx-auto relative grid grid-cols-12">
            <div class="hero-text col-span-7">
            <h1 class="font-header text-6xl leading-[1.1] <?php echo $heroSubtext ? 'lg:mb-5' : ''; ?>"><?php echo $heroText; ?></h1>
            <span class="relative title font-display leading-hero-body text-l mb-11"><?php echo $heroSubtext; ?></span>
            </div>
            <img class="absolute -z-[1] line-star right-0 -bottom-[100px] pointer-events-none w-[308px]" src="<?php echo get_template_directory_uri(); ?>/assets/images/accent/line-star_purple.svg" alt="" />
        </div>
    </div>
    <?php
    while (have_posts()) {
        the_post();
        the_content();
    }
    ?>
    <div id="featured-casestudy" class="bg-gray-100 py-[80px]">
        <div class="featured-inner container mx-auto">
            <span class="text-3xl block mb-[50px]">Featured Customer Story</span>
                <?php
                $ID = get_queried_object_id();

                $featured_casestudy = get_field('featured_casestudy');
                
                if ($featured_casestudy) {
                $featured_post_title = get_the_title($featured_casestudy->ID);
                ?>
				<div class="featured-post grid grid-cols-12 gap-6 items-center">
                    <div class="featured-left sm:col-span-7 sm:mb-0 mb-[30px] col-span-12">
                    <span class="eyebrow block mb-[10px] text-blue-100 font-semibold text-l">
                        <?php echo $eyebrow_label; ?>
                    </span>
                    <h2 class="font-header text-5xl mb-[50px] leading-[125%]">
                        <?php 
                        if (!empty($custom_title)) {
                            echo $custom_title;
                        } else {
                            echo $featured_post_title;
                        }
                        ?>
                    </h2>
					<a class="btn-primary text-white inline-block" href="<?php echo trailingslashit(get_permalink($featured_casestudy->ID)); ?>">Read post</a>
                    
                    <?php if (!empty($featured_secondary_cta_link)) {
                        echo '<a class="btn-secondary text-blue-100 inline-block ml-[20px]" href="' . $featured_secondary_cta_link . '" target="' . ($featured_secondary_new_tab ? '_blank' : '_self') . '">' . $featured_secondary_cta_text . '</a>';
                    } ?>
                    </div>
                    <div class="featured-right sm:col-span-5 col-span-12">
                        <a class="relative" href="<?php echo trailingslashit(get_permalink($featured_casestudy->ID)); ?>">
                            <?php if (has_post_thumbnail($featured_casestudy->ID)) : ?>
                                <div style="background: linear-gradient(180deg, rgba(58, 97, 255, 0.35) 5.75%, rgba(58, 97, 255, 0.66) 68.81%);" class="w-full h-full absolute top-0 left-0 !z-[1]"></div>
                                <?php echo get_the_post_thumbnail($featured_casestudy->ID, 'large', array('class' => 'rounded-[20px] w-full relative z-0')); ?>
                            <?php else : ?>
                                <img class="rounded-[20px] mt-0 mb-[30px] box-shadow  object-cover" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/blog-fallback.png" />
                            <?php endif; ?>
                        </a>
                    </div>
					
					<?php $post = get_queried_object(); ?>
				</div>
			<?php } ?>
        </div>
    </div>
    <div class="posts-wrapper py-[85px]">
        <?php
            $args = array(
                'post_type' => 'resources',
                'posts_per_page' => 9,
                'paged' => $paged,
                'tax_query' => array(
                    array(
                        'taxonomy' => 'resource-type',
                        'field'    => 'slug',
                        'terms'    => 'case-studies',
                    ),
                )
            );

            if($industry_term) {
                $args["tax_query"][] = array(
                    'taxonomy' => 'industry',
                    'field'    => 'slug',
                    'terms'    => $industry,
                );
            }

            $query = new WP_Query($args);

            if ($query->have_posts()) {
                ?>
                <div class="filter-sort-row container mx-auto mb-[45px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-4 gap-4">
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
                    
                    <?php 
                    
                    get_template_part("template-parts/form/select/custom", null, array(
                        "initial"       => array("label"=>"Filter by Industry","value"=>"0"),
                        "taxonomy"      => "industry",
                        "type"          => "case-studies",
                        "id"            => "industry-filter",
                        "active"        => $industry_term ? $industry_term->term_id : null
                    )); ?>

                </div>
                <?php
                echo '<div id="resources-container" class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">';
                while ($query->have_posts()) {
                    $query->the_post();
                    get_template_part("template-parts/cards/card", "case-studies");
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
<?php get_footer(); ?>