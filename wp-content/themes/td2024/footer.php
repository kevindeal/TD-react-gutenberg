</main>
</div>
<?php
/**
 * Template part for displaying the footer content
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package td
 */
 
?>

<footer id="footer-main" class="py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical bg-navy-100 text-white">
	<div class="footer-top">
		<div class="footer-inner container mx-auto relative">
      <div class="subfooter-menu md:flex md:justify-between pb-10">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="logo">
					<img class="jellyfish-symbol grid-row w-[50px] pb-10 sm:mx-0" src="<?php echo get_template_directory_uri(); ?>/assets/logos/diamond-logo.svg" />
				</a>
				<div class="flex flex-row">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer-5',
							'menu_id'        => 'footer-5',
							'items_wrap'     => '<ul id="%1$s" class="%2$s sub-menu abosolute top-0 right-0 flex flex-row" aria-label="submenu">%3$s</ul>',
						)
					);
						do_action('wpml_add_language_selector');
					?>
				</div>
      
			</div>
			<div class="md:grid md:grid-cols-2 lg:flex md:gap-12 lg:gap-4 md:justify-between text-left">
				<div class="mb-[50px] sm:mb-0 md:hidden lg:block">

          <?php
            if ($contact = get_field('contact', 'option')) {
              echo '<div class="flex flex-col">';
              foreach ($contact as $numberArray) {
                if (isset($numberArray['number'])) {
									$number = $numberArray['number'];
									// Format the number as a phone number
									$formattedNumber = sprintf("(%s) %s-%s", substr($number, 0, 3), substr($number, 3, 3), substr($number, 6));
									// Create a link with the tel URI scheme
									echo "<a href='tel:$number' class='py-2.5'>$number</a>";
								}
              }
              echo '</div>';
            }
          ?>
          
				</div>
				<div>
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer-1',
							'menu_id'        => 'footer-1',
							'items_wrap'     => '<ul id="%1$s" class="%2$s" aria-label="submenu">%3$s</ul>',
						)
					);
					?>
				</div>
				<div>
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer-2',
							'menu_id'        => 'footer-2',
							'items_wrap'     => '<ul id="%1$s" class="%2$s" aria-label="submenu">%3$s</ul>',
						)
					);
					?>
				</div>
				<div>
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer-3',
							'menu_id'        => 'footer-3',
							'items_wrap'     => '<ul id="%1$s" class="%2$s" aria-label="submenu">%3$s</ul>',
						)
					);
					?>
				</div>
				<div>
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer-4',
							'menu_id'        => 'footer-4',
							'items_wrap'     => '<ul id="%1$s" class="%2$s" aria-label="submenu">%3$s</ul>',
						)
					);
					?>
				</div>
				<div class="footer-demo-cta">
					<button class="text-white btn-primary text-mobile-button lg:text-button bg-buttonGradientFill mb-sm-vertical md:mb-md-vertical lg:mb-lg-vertical xl:mb-xl-vertical px-[20px] py-[10px] md:px-[30px] md:py-[15.5px]" onclick="window.location.href='<?php echo get_field('footer_cta', 'option')['cta_link']; ?>'"><?php echo get_field('footer_cta', 'option')['cta_text']; ?></button>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom border-t-[1px] pt-[50px] container mx-auto">
		<div class="footer-inner sm:flex text-center sm:text-left justify-between">
			<div class="subfooter-menu py-8 md:py-0">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'footer-6',
						'menu_id'        => 'footer-6',
						'items_wrap'     => '<ul id="%1$s" class="%2$s legal flex flex-col gap-6 md:flex-row md:pr-6 text-left" aria-label="submenu">%3$s</ul>',
					)
				);
				?>
			</div>
			<div class="flex md:justify-center">
				<?php if( have_rows('social_icons', 'option') ): ?>
					<?php while( have_rows('social_icons', 'option') ) : the_row(); ?>
						<a class="mr-[20px] last:mr-0" href="<?php the_sub_field('link', 'option'); ?>" target="_blank"><img src="<?php the_sub_field('icon', 'option'); ?>" /></a>
					<?php endwhile; ?>
				<?php endif; ?>
			</div>
		</div>
		<div class="py-8 leading-[1.5]">
			Copyright &copy; <?php echo date("Y"); ?> Treasure Data, Inc. (or its affiliates). All rights reserved.</div>
	</div>
</footer><!-- #colophon -->
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/theme.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/slick/slick.min.js"></script>
<link href="<?php echo get_template_directory_uri(); ?>/assets/fontawesome/css/fontawesome.min.css" rel="stylesheet" />
<link href="<?php echo get_template_directory_uri(); ?>/assets/fontawesome/css/brands.min.css" rel="stylesheet" />
<!--Marketo-->
<script src="//get.treasuredata.com/js/forms2/js/forms2.min.js"></script>
<?php wp_footer(); ?>
<?php if($global_footer_scripts = get_field("global_footer_scripts","option")): print $global_footer_scripts; endif; ?>
</body>
</html>