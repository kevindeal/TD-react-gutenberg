<?php /** Template Name:  Home*/ ?>
<?php get_header(); ?>
<div class="p-8">
    <h1>Home Page</h1>
</div>
<?php
if ( have_posts() ) : while ( have_posts() ) : the_post();
get_template_part( 'entry' );
comments_template();
endwhile; endif;
get_template_part( 'nav', 'below' );
?>


<?php get_footer(); ?>