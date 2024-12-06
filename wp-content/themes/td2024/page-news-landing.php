<?php
/*
Template Name: News & Press Releases Landing
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
</div>
<?php
$previousBackground = get_field_object('previous_background')['value'];
$backgroundStyle = get_field_object('background_style')['value'];
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

<?php get_footer(); ?>