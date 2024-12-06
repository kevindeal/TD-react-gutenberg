<?php get_header();

$author_id = get_the_author_meta('ID');
$author_image = get_field('author_image', 'user_' . $author_id);

// Footer CTA
$backgroundStyle = get_field_object('background_style')['value'];
$cta_title = get_field('cta_title');
$primary_cta_link = get_field('cta_link');
$primary_cta_text = get_field('cta_text');
$pagelink_or_url = get_field('footer_page_link_or_url');
$secondary_cta_link = get_field('secondary_cta_link');
$secondary_cta_link_page = get_field('secondary_cta_link_page');
$secondary_cta_text = get_field('secondary_cta_text');

// Hero CTA
$headerText = get_field('hero_header');
$subheaderText = get_field('hero_subheader');
$hero_primary_cta_link = get_field('hero_primary_cta_link');
$hero_primary_new_tab = get_field('hero_primary_new_tab');
$hero_primary_cta_text = get_field('hero_primary_cta_text');
$hero_pagelink_or_url = get_field('page_link_or_url');
$hero_secondary_cta_link = get_field('hero_secondary_cta_link');
$hero_secondary_new_tab = get_field('hero_secondary_new_tab');
$hero_secondary_cta_link_page = get_field('hero_secondary_cta_link_page');
$hero_secondary_cta_text = get_field('hero_secondary_cta_text');
$isVideo = get_field('is_video');
$videoType = get_field('wistia_or_youtube');
$videoEmbed = get_field('secondary_cta_video_id');
$heroImage = get_field('hero_image');

// Customer Points
$customer_logo = get_field('customer_logo');
$customer_since = get_field('customer_since');
$region = get_field('region');
$industry = get_field('industry');
$key_use_cases = get_field('key_use_cases');

$recaptcha_site_key = get_field('google_recaptcha_site_key', 'option');
?>

<?php if ( in_category( 'case-studies' ) ) { ?>
<!-- Case Study Template -->
<div id="case-study-hero" class="bg-heroGradient-sm sm:bg-heroGradient pb-sm-vertical md:pb-md-vertical lg:pb-lg-vertical xl:pb-xl-vertical  pt-sm-vertical-hero-top md:pt-md-vertical-hero-top lg:pt-lg-vertical-hero-top xl:pt-xl-vertical-hero-top relative">
    <div class="bg-gray-100 w-full h-full absolute top-0 left-0 -z-[1]"></div>
    <div class="container mx-auto">
        <div class="case-study-hero-content grid grid-cols-12 gap-6">
            <div class="col-span-12 md:col-span-7 flex flex-col justify-center">
                <h1 class="text-mobile-6xl md:text-6xl text-white font-header mt-[15px] mb-[45px] leading-[100%] md:leading-h1"><?php echo $headerText; ?></h1>
                <span class="relative title font-display leading-hero-body text-mobile-xl lg:text-xl mb-6 lg:mb-11 text-white"><?php echo $subheaderText; ?></span>
                <div class="cta-row block sm:flex flex-row items-center">
                    <!-- Primary CTA -->
                    <a href="<?php echo $hero_primary_cta_link; ?>" <?php if ($hero_primary_new_tab != '') : ?>target="_blank"<?php endif; ?> class="cta-block-link btn-primary text-white w-fit mx-auto sm:mx-0 inline-block !mr-[15px]"><?php echo $hero_primary_cta_text; ?></a>
                    
                    <!-- Secondary CTA -->

                    <?php
                    
                    if ($isVideo === true) {
                        if ($videoType == 'youtube') { ?>
                            <a class="btn-secondary text-white mediabox" href="https://www.youtube.com/watch?v=<?php echo $videoEmbed; ?>">
                                <?php echo $hero_secondary_cta_text; ?>
                            </a>
                        <?php } elseif ($videoType == 'wistia') { ?>
                            <script src="https://fast.wistia.com/embed/medias/<?php echo $videoEmbed; ?>.jsonp" async></script>
                            <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                            <span class="!h-auto wistia_embed wistia_async_<?php echo $videoEmbed; ?> popover=true popoverContent=link" style="display:inline;position:relative;">
                                <a class="btn-secondary text-white" href="#"><?php echo $hero_secondary_cta_text; ?></a>
                            </span>
                        <?php }
                    } elseif ($isVideo === false) {
                        if (!empty($hero_secondary_cta_link)) { ?>
                            <?php if ($hero_pagelink_or_url != 'pagelink') { ?>
                                <a class="btn-secondary text-white" href="<?php echo $hero_secondary_cta_link; ?>" <?php echo $hero_primary_cta_link; ?>" <?php if ($hero_secondary_new_tab != '') : ?>target="_blank"<?php endif; ?>><?php echo $hero_secondary_cta_text; ?></a>
                            <?php } else { ?>
                                <a class="btn-secondary text-white" href="<?php echo $hero_secondary_cta_link_page; ?>"><?php echo $hero_secondary_cta_text; ?></a>
                            <?php } ?>
                        <?php }
                    }
                    
                    ?>
                    
                </div>
            </div>
            <div class="col-span-12 md:col-span-5 flex flex-col justify-center">
                <img src="<?php echo $heroImage; ?>" alt="Hero Image" class="w-full rounded-[20px]">
            </div>
        </div>
    </div>
</div>

<div id="customer-points" class="bg-gray-100 py-[60px]">
    <div class="container mx-auto md:flex justify-between md:space-x-4">
        <?php if (!empty($customer_logo)) { ?>
        <div class="info-col w-215 mb-[30px] md:mb-0">
            <h5 class="text-blue-100 text-md font-bold mb-[15px]">Customer</h5>
            <img class="max-w-[215px]" src="<?php echo $customer_logo?>" alt="Customer Logo" />
        </div>
        <?php } ?>
        <?php if (!empty($customer_since)) { ?>
        <div class="info-col mb-[30px] md:mb-0">
            <h5 class="text-blue-100 text-md font-bold mb-[15px]">Customer since</h5>
            <span class="info-text"><?php echo $customer_since ?></span>
        </div>
        <?php } ?>
        <?php if (!empty($region)) { ?>
        <div class="info-col mb-[30px] md:mb-0">
            <h5 class="text-blue-100 text-md font-bold mb-[15px]">Region</h5>
            <span class="info-text"><?php echo $region ?></span>
        </div>
        <?php } ?>
        <?php if (!empty($industry)) { ?>
        <div class="info-col mb-[30px] md:mb-0">
            <h5 class="text-blue-100 text-md font-bold mb-[15px]">Industry</h5>
            <span class="info-text"><?php echo $industry ?></span>
        </div>
        <?php } ?>
        <?php if (!empty($key_use_cases)) { ?>
        <div class="info-col mb-[30px] md:mb-0">
            <h5 class="text-blue-100 text-md font-bold mb-[15px]">Key use cases</h5>
            <span class="info-text leading-[200%]"><?php echo $key_use_cases ?></span>
        </div>
        <?php } ?>
    </div>
</div>
        
<div class="post-container container mx-auto !pt-[80px] grid grid-cols-12 gap-6">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <div class="entry-content col-span-12 lg:col-span-9" itemprop="mainEntityOfPage">
            <!-- Stat Props -->
            <?php // check if the repeater field has rows of data
                if( have_rows('stat_props') ): ?>
            <div id="stat-props" class="md:grid lg:grid-cols-3 grid-cols-2 gap-6 mb-[80px]">
                <?php
                
                    // loop through the rows of data
                    while ( have_rows('stat_props') ) : the_row();
                        // display each item as a list - with a class of 'row'
                        ?>
                        <div class="col-span-1 py-[40px] px-[30px] rounded-[20px] md:mb-0 mb-[30px]" style="border: 1px solid #3A61FF">
                            <div class="numeric-value text-5xl font-medium mb-[10px]">
                                <?php the_sub_field('numeric_value'); ?>
                            </div>
                            <div class="supporting-text text-blue-100 leading-[140%]">
                                <?php the_sub_field('supporting_text'); ?>
                            </div>
                        </div>
                        <?php endwhile; ?>
            </div>
            <?php endif; ?>
            <meta itemprop="description" content="<?php echo esc_html( wp_strip_all_tags( get_the_excerpt(), true ) ); ?>">
            <div class="post-wrapper">
                <div class="post-body">
                    <?php the_content(); ?>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-3" id="sidebar-container">
            <div class="blog-detail-sidebar lg:pl-[20px]" id="sticky-sidebar">
                <div class="share-box mb-[40px]">
                    <span class="share-title">Share this story:</span>
                    <div class="social-icons flex items-center mt-[20px]">
                        <a class="mr-[20px] social-icon" href="https://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink(); ?>&title=<?php the_title(); ?>" target="_blank">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/linkedin.svg" alt="Share on LinkedIn">
                        </a>
                        <a class="mr-[20px] social-icon" href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/facebook.svg" alt="Share on Facebook">
                        </a>
                        <a class="mr-[20px] social-icon" href="https://twitter.com/share?url=<?php the_permalink(); ?>&text=<?php the_title(); ?>" target="_blank">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/x.svg" alt="Share on Twitter">
                        </a>
                    </div>
                </div>
                <span class="blog-form-title leading-[140%] block mb-[25px]">Get Treasure Data blogs, news, use cases, and platform capabilities:</span>
                <div class="blog-form form-fill">
                    <form id="mktoForm_2735" class="mx-auto !w-full"></form>
                    <script src="//get.treasuredata.com/js/forms2/js/forms2.min.js"></script>
                    <script>
                        MktoForms2.loadForm("//get.treasuredata.com", "714-XIJ-402", 2735);
                    </script>
                    <?php include(get_template_directory() . '/template-parts/blocks/form-recaptcha.php'); ?>
                </div>
            </div>
        </div>
    <?php endwhile; endif; ?>
</div>
<!-- Related Resources -->
<?php
// Get the ID of the current page
$page_id = get_the_ID();

// Get the current category
$current_category = get_the_category($page_id);
$current_category_id = $current_category[0]->cat_ID;

// Query for the 3 most recent posts in the current category
$args = array(
    'post_type' => 'resources',
    'post_status' => 'publish',
    'cat' => $current_category_id,
    'posts_per_page' => 3,
    'orderby' => 'date',
    'order' => 'DESC',
    'post__not_in' => array($page_id),
);

$the_query = new WP_Query($args);
$resources_to_render = array();

while ($the_query->have_posts()){
    $the_query->the_post();

    array_push($resources_to_render, array(
        'title' => get_the_title(),
        'permalink' => trailingslashit(get_the_permalink()),
        'imageId' => get_post_thumbnail_id(get_the_ID(), 'full'),
        'post_ID' => get_the_ID()
    ));
}
?>
<!-- Quote Block for Case Studies Only-->
<?php
    $postId = get_queried_object_id();
?>
    <?php
    $quoteBody = get_field('quote_body', $postId);
    $quoteImage = get_field('quote_image', $postId);
    $quoteAuthor = get_field('quote_author', $postId);
    $quoteAuthorTitle = get_field('quote_author_title', $postId);
    $quoteAuthorCompany = get_field('quote_author_company', $postId);
    if (!empty($quoteBody)) { ?>
    <div class="quote-wrapper bg-navy-100 text-white py-[100px]">
        <div class="quotes relative container mx-auto md:py-[80px]">
            <div class="quote-inner relative px-[20px]">
                <span class="quote-open font-header absolute text-[50px] left-0">“</span>
                <p class="quote-body text-[50px] font-header leading-[125%] mb-[30px]"><?php echo $quoteBody; ?>”</p>
                <div class="image-author-container block md:flex mb-6">
                    <img src="<?php echo $quoteImage; ?>" alt="Quote Image" class="quote-image max-w-[200px] max-h-[70px] object-contain mb-[15px] md:mb-0 md:mr-[20px]">
                    <div class="author-box col-span-3 flex flex-col justify-start">
                        <p class="quote-author font-bold  text-mobile-l lg:text-l leading-card-header"><?php echo $quoteAuthor; ?></p>
                        <p class="quote-author-title  text-mobile-l lg:text-l leading-card-header"><?php echo $quoteAuthorTitle; ?></p>
                        <p class="quote-author-title  text-mobile-l lg:text-l leading-card-header"><?php echo $quoteAuthorCompany; ?></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php } ?>
    

<?php } else { ?>

<!-- Resource Template -->

<div class="post-container container mx-auto !pt-[200px] grid grid-cols-12 gap-6">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <div class="entry-content col-span-12 lg:col-span-9" itemprop="mainEntityOfPage">
            <meta itemprop="description" content="<?php echo esc_html( wp_strip_all_tags( get_the_excerpt(), true ) ); ?>">
            <a class="btn-secondary left medium" href="/resources/">Resources Home</a>
            <div class="post-wrapper py-[80px]">
                <span class="eyebrow text-secondaryBlue-100 text-xl font-semibold block mb-[15px]">
                    <?php
                    $categories = get_the_category();
                    if (!empty($categories)) {
                        echo esc_html($categories[0]->name);   
                    }
                    ?>
                </span>
                <h1 class="text-[55px] sm:text-5xl font-header my-[15px] leading-[100%]"><?php the_title(); ?></h1>
                <span class="posted-date text-gray-250 text-[14px] font-medium">Last updated <?php the_date(); ?></span>
                <div class="post-body mt-[50px]">
                    <?php the_content(); ?>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-3" id="sidebar-container">
            <div class="blog-detail-sidebar md:pl-[20px]" id="sticky-sidebar">
                <div class="share-box mb-[80px]">
                    <span class="share-title">Share this blog:</span>
                    <div class="social-icons flex items-center mt-[20px]">
                        <a class="mr-[20px] social-icon" href="https://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink(); ?>&title=<?php the_title(); ?>" target="_blank">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/linkedin.svg" alt="Share on LinkedIn">
                        </a>
                        <a class="mr-[20px] social-icon" href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/facebook.svg" alt="Share on Facebook">
                        </a>
                        <a class="mr-[20px] social-icon" href="https://twitter.com/share?url=<?php the_permalink(); ?>&text=<?php the_title(); ?>" target="_blank">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/x.svg" alt="Share on Twitter">
                        </a>
                    </div>
                </div>
                <span class="blog-form-title leading-[140%] block mb-[25px]">Get Treasure Data blogs, news, use cases, and platform capabilities:</span>
                <div class="blog-form form-fill">
                    <form id="mktoForm_2735" class="mx-auto !w-full"></form>
                    <script src="//get.treasuredata.com/js/forms2/js/forms2.min.js"></script>
                    <script>
                        MktoForms2.loadForm("//get.treasuredata.com", "714-XIJ-402", 2735);
                    </script>
                    <?php include(get_template_directory() . '/template-parts/blocks/form-recaptcha.php'); ?>
                </div>
            </div>
        </div>
    </div><!--added-->
    <?php endwhile; endif; ?>
</div>
<!-- Related Resources -->
<?php
// Get the ID of the current page
$page_id = get_the_ID();

// Get the current category
$current_category = get_the_category($page_id);
$current_category_id = $current_category[0]->cat_ID;

// Query for the 3 most recent posts in the current category
$args = array(
    'post_type' => 'resources',
    'post_status' => 'publish',
    'category' => $current_category_id,
    'posts_per_page' => 3,
    'orderby' => 'date',
    'order' => 'DESC',
    'post__not_in' => array($page_id),
);

$the_query = new WP_Query($args);
$resources_to_render = array();

while ($the_query->have_posts()){
    $the_query->the_post();

    array_push($resources_to_render, array(
        'title' => get_the_title(),
        'permalink' => trailingslashit(get_the_permalink()),
        'imageId' => get_post_thumbnail_id(get_the_ID(), 'full'),
        'post_ID' => get_the_ID()
    ));
}
?>

<?php } ?>
<?php wp_reset_postdata(); ?>
<?php get_template_part('template-parts/blocks/related-resources',null,array("vspace"=>"sm")); ?>
<script>
    jQuery(document).ready(function($) {
        // Youtube lightbox
        $("head").append('<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/static/mediabox/mediabox.min.css'; ?>" async />');
        $("head").append('<script src="<?php echo get_template_directory_uri().'/static/mediabox/mediabox.min.js'; ?>" async />');
        setTimeout(() => {
            MediaBox('.mediabox');
        }, 400);

        // Sticky Sidebar
        var sidebar = jQuery("#sticky-sidebar");
        var parent = sidebar.parent();
        var postContainer = jQuery(".post-container");
        var offset = sidebar.offset().top - 135;

        function stickySidebar() {
            
            var leftOffset = jQuery('#sidebar-container').offset().left;
            var bottomOffset = postContainer.offset().top + postContainer.outerHeight() - sidebar.outerHeight() - 140; // Subtract 100px

            if (jQuery(window).width() > 1024) {
                if (jQuery(window).scrollTop() >= offset && jQuery(window).scrollTop() <= bottomOffset) {
                    sidebar.css({
                        position: 'fixed',
                        top: '135px',
                        left: leftOffset + 'px',
                        width: parent.width() + 'px',
                        opacity: 1 // Fully visible
                    });
                } else if (jQuery(window).scrollTop() > bottomOffset) {
                    sidebar.css({
                        position: 'absolute',
                        top: (bottomOffset - offset + 135 - sidebar.outerHeight()) + 'px', // subtract the height of the sidebar
                        left: 'auto',
                        width: parent.width() + 'px',
                        opacity: 0 // Fully transparent
                    });
                } else {
                    sidebar.css({
                        position: 'static',
                        width: 'auto',
                        opacity: 1 // Fully visible
                    });
                }
            } else {
                sidebar.css({
                    position: 'static',
                    width: 'auto',
                    opacity: 1 // Fully visible
                });
            }
        }
        window.addEventListener('resize', function(event){
            
            stickySidebar();
        });

        // Call stickySidebar when window is scrolled or resized
        jQuery(window).scroll(stickySidebar);
        jQuery(window).resize(stickySidebar);
    });
</script>

<!-- Pre-Footer CTA -->
<div class="cta-block-full bg-<?php echo $backgroundStyle; ?> py-[50px] md:py-[150px] text-white">
    <div class="cta-block-inner container mx-auto grid grid-cols-12">
        <div class="cta-block-content lg:col-span-9 xl:col-span-7 col-span-12">
            <h2 class="cta-block-title block text-[30px] md:text-5xl font-header font-light leading-[1.2] md:leading-[1.25] mb-[30px]"><?php echo $cta_title; ?></h2>
            
            <div class="cta-row block sm:flex flex-row items-center">
                <a href="<?php echo $primary_cta_link; ?>" class="cta-block-link btn-primary w-fit sm:mx-0 inline-block px-[20px] py-[10px] md:px-[30px] md:py-[15.5px] text-mobile-button lg:text-button mb-[30px] sm:mb-0"><?php echo $primary_cta_text; ?></a>
                <!--$pagelink_or_url = get_field('footer_page_link_or_url');-->
                <?php if (!empty($secondary_cta_link) || !empty($secondary_cta_link_page)) {
                    if ($pagelink_or_url != 'pagelink') {
                    echo '<a href="' . $secondary_cta_link . '" class="cta-block-link btn-secondary block sm:inline-block ml-0 sm:text-left sm:mt-0 sm:ml-3 px-[20px] text-[16px] md:text-[20px] py-0">' . $secondary_cta_text . '</a>';
                    } else {
                    echo '<a href="' . $secondary_cta_link_page . '" class="cta-block-link btn-secondary block sm:inline-block ml-0 sm:text-left sm:mt-0 sm:ml-3 px-[20px] text-[16px] md:text-[20px] py-0">' . $secondary_cta_text . '</a>';
                    }
                } ?>
            </div>
        </div>
    </div>
</div>
    


<?php get_footer(); ?>