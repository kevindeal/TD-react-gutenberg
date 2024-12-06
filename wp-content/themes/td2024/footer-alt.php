</main>
</div>

<footer id="footer-alt" role="contentinfo" class="w-full py-[100px] px-16 bg-navy-100 text-white ">
  <div class="container mx-auto">
<div id="copyright" class="flex flex-col text-sm">
  <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="logo mb-[40px]">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/logos/diamond-logo.svg" class="logo w-10" alt="td-logo">
  </a>
  
  <?php
if ($contact = get_field('contact', 'option')) {
    echo '<div class="flex flex-col">';
    foreach ($contact as $numberArray) {
      if (isset($numberArray['number'])) {
        $number = $numberArray['number'];
        // Format the number as a phone number
        $formattedNumber = sprintf("(%s) %s-%s", substr($number, 0, 3), substr($number, 3, 3), substr($number, 6));
        // Create a link with the tel URI scheme
        echo "<a href='tel:$number' class='mb-[15px]'>$number</a>";
      }
    }
    echo '</div>';
}
?>
  <span><a href="tel:<?php echo $phone ?>"><?php echo $phone ?></a></span>
  Copyright &copy; <?php echo date("Y"); ?> Treasure Data, Inc. (or its affiliates). All rights reserved.
  </div>
</div>

</footer>
</div>
<?php wp_footer(); ?>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/theme.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/slick/slick.min.js"></script>

<!--Marketo-->
<script src="//get.treasuredata.com/js/forms2/js/forms2.min.js"></script>
<?php if($global_footer_scripts = get_field("global_footer_scripts","option")): print $global_footer_scripts; endif; ?>
</body>
</html>