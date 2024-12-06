<?php /** Template Name: Gated Page*/ ?>
<?php 
global $post;
$template_file = get_page_template();
$is_gated_resource = $post->post_type == "resources" && get_field("resource_access") == "gated";


if (basename($template_file) === 'page-alt.php' || $is_gated_resource ) {
    get_header('alt');
} else {
    get_header();
}

wp_head();
?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

<div class="entry-content" itemprop="mainContentOfPage">

<?php the_content(); ?>
<div class="entry-links"><?php wp_link_pages(); ?></div>
</div>
</article>
<?php if ( comments_open() && !post_password_required() ) { comments_template( '', true ); } ?>
<?php endwhile; endif; ?>
<?php 
$template_file = get_page_template();

if (basename($template_file) === 'page-alt.php' || $is_gated_resource) {
    get_footer('alt');
} else {
    get_footer();
}

?>