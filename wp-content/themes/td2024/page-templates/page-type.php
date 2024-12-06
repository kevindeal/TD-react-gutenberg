<?php /** Template Name: Type*/ ?>
<?php get_header(); ?>
<div class="py-10 px-10">
    <h1>type Page</h1> 

    <div class="headers">
      <h1>headers</h1>
      <h3 class="text-grey">h1</h3>
      <h1 class="text-6xl pb-10 font-header">Illuminate Customers</h1>
      <h3 class="text-grey">h2</h3>
      <h2 class="text-5xl font-header font-light pb-10">Illuminate Customers</h2>
      <h3 class="text-grey">h3</h3>
      <h3 class="text-4xl font-display font-bold pb-10">Real-Time 2.0</h3>
      <h3 class="text-grey">h4</h3>
      <h4 class="text-3xl font-display font-medium pb-10">Real-Time 2.0</h4>
      <h3 class="text-grey ">button</h3>
      <p class="button font-display text-base pb-10">Get a demo</p>
      <h3 class="text-grey">eyebrow</h3>
      <h3 class="text-l font-display font-semibold pb-10">New</h3>
    </div>

    <div class="grid grid-cols-3">
      <div class="col-1 w-1/3">
        <h2>body XL reg</h2>
        <p class="font-display text-xl py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>body L reg</h2>
        <p class="font-display text-l py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>body M reg</h2>
        <p class="font-display text-base py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>body S reg</h2>
        <p class="font-display text-sm py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>body XS reg</h2>
        <p class="font-display text-xs py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="col-1 w-1/3">
        <h2>body XL med</h2>
        <p class="font-display font-medium text-xl py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>body L med</h2>
        <p class="font-display font-medium text-l py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>body M med</h2>
        <p class="font-display font-medium text-base py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>body S med</h2>
        <p class="font-display font-medium text-sm py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>body XS med</h2>
        <p class="font-display font-medium text-xs py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="col-1 w-1/3">
        <h2 class="bold">body XL bold</h2>
        <p class="font-display font-bold text-xl py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>body L bold</h2>
        <p class="font-display font-bold text-l py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>body M bold</h2>
        <p class="font-display font-bold text-base py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>body S bold</h2>
        <p class="font-display font-bold text-sm py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>body XS bold</h2>
        <p class="font-display font-bold text-xs py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
</div>
<?php
if ( have_posts() ) : while ( have_posts() ) : the_post();
get_template_part( 'entry' );
comments_template();
endwhile; endif;
get_template_part( 'nav', 'below' );
?>


<?php get_footer(); ?>