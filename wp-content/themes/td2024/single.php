<?php get_header();

$author_id = get_the_author_meta('ID');
$author_image = get_field('author_image', 'user_' . $author_id);

$backgroundStyle = get_field_object('background_style')['value'];
//$previousBackground = get_field_object('previous_background')['value'];

$cta_title = get_field('cta_title');
$primary_cta_link = get_field('cta_link');
$primary_cta_text = get_field('cta_text');
$secondary_cta_link = get_field('secondary_cta_link');
$secondary_cta_text = get_field('secondary_cta_text');

$recaptcha_site_key = get_field('google_recaptcha_site_key', 'option');
?>
<div class="post-container container mx-auto !pt-[200px] grid grid-cols-12 gap-6">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <div class="entry-content col-span-12 lg:col-span-9" itemprop="mainEntityOfPage">
        <meta itemprop="description" content="<?php echo esc_html( wp_strip_all_tags( get_the_excerpt(), true ) ); ?>">

        <a class="btn-secondary left medium" href="/blog">Blog Home</a>

        <div class="post-wrapper py-[80px]">
            <span class="eyebrow text-secondaryBlue-100 text-xl font-semibold block mb-[15px]">Blog Post</span>
            <h1 class="text-5xl font-header my-[15px] leading-[125%] font-light"><?php the_title(); ?></h1>
            <span class="posted-date text-gray-250 text-[14px] font-medium">Last updated <?php the_date(); ?></span>
            <div class="post-body mt-[50px]">
                <?php the_content(); ?>
            </div>
        </div>
    </div>
    <div class="col-span-12 lg:col-span-3" id="sidebar-container">
        <div class="blog-detail-sidebar lg:pl-[20px]" id="sticky-sidebar">
            <div class="share-box mb-[40px]">
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
</div>
    <?php endwhile; endif; ?>
    <div class="container mx-auto">
        <div class="post-author grid grid-cols-12 gap-6 py-[60px]">
            <?php 
                if(!empty($author_image)) {
                    echo '
                    <div class="author-avatar col-span-12 md:col-span-2">
                        <img src="' . $author_image . '" alt="Author Image" width="80" height="80">
                    </div>
                    <div class="author-info col-span-12 md:col-span-6 flex flex-col justify-center">';
                } else {
                    echo '<div class="author-info col-span-12 md:col-span-12 flex flex-col justify-center">';
                }
            ?>
                <span class="block author-title eyebrow sm font-semibold text-blue-100 mb-[15px]">Author</span>
                <span class="block author-name text-3xl font-medium text-navy-100 mb-[15px]">
                    <?php 
                        $first_name = get_the_author_meta('first_name');
                        $last_name = get_the_author_meta('last_name');
                        $nickname = get_the_author_meta('nickname');

                        if(!empty($first_name) && !empty($last_name)){
                            echo $first_name . ' ' . $last_name;
                        } else {
                            echo $nickname;
                        }
                    ?>
                </span>
                <p class="author-bio text-[14px] leading-[153%] max-w-[735px]"><?php the_author_meta( 'description' ); ?></p>
            </div>
        </div>
    </div>
</div>
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

<!-- Related Resources -->
<?php
// Get the ID of the current page
$page_id = get_the_ID();

// Query for the 3 most recent posts in the current category
$args = array(
    'post_type' => $post->post_type,
    'post_status' => 'publish',
    //'category' => $current_category_id,
    'posts_per_page' => 3,
    'orderby' => 'date',
    'order' => 'DESC',
    'post__not_in' => array($page_id)
);


// Get the current category
$current_category = get_the_terms($page_id, "resource-type");//get_the_category($page_id);
if($current_category) {
    $current_category_id = $current_category[0]->term_id;//$current_category[0]->cat_ID;
    $args['tax_query'] = array(
        array(
            'taxonomy'=>'resource-type',
            'terms' => $current_category_id
        )
    );
}

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
<div class="related-resources pb-[150px] pt-[50px]">
    <div class="container mx-auto">
        <div class="td-alert-heading flex-1 flex flex-row items-center py-4 mb-8 w-full justify-between border-b border-solid">
            
                <h2 class="font-display font-medium text-3xl leading-tight <?php echo $color_variant == 'DARK' ? 'text-accentTurquoise-100' : 'text-blue-100'; ?>">Related posts</h2>

                <a href="/resources/" class="leading-snug font-display font-medium text-base justify-self-end uppercase <?php echo $color_variant == 'DARK' ? 'text-white' :'text-navy-100'; ?>">View All</a>
            
        </div>
        <div class="related-resources-grid grid grid-cols-12 gap-6">
            <?php foreach ($resources_to_render as $resource) {  ?>
                <div class="related-resource col-span-12 sm:col-span-4 w-full">
                <?php 
                $image = wp_get_attachment_image_url($resource['imageId'], 'full');
                if($image):
                echo '<div class="related-resource-image w-full mb-8 rounded-[20px]" style="background-image: url(' . $image . '); display: block; background-size: cover; background-position: center; padding-bottom: 100%;"></div>'; 
                endif;
                ?>
                <?php if($current_category): ?>
                    <span class="block font-display font-semibold text-base mb-2.5 text-blue-100"><?php echo $current_category[0]->name; ?></span>
                <?php endif ?>
                    <h3 class="font-display font-medium text-3xl leading-[140%] mb-[15px]"><?php echo $resource['title']; ?></h3>
                    <?php if(has_excerpt( $resource["post_ID"])) : ?>
                        <div class="leading-[145%] mb-[30px]"><?php print get_the_excerpt( $resource["post_ID"]); ?></div>
                    <?php endif; ?>
                    <a href="<?php echo $resource['permalink']; ?>" class="btn-secondary large text-0 inline-block"></a>
                </div>
            <?php } ?>
        </div>
    </div>
</div>
<!-- Pre-Footer CTA -->
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