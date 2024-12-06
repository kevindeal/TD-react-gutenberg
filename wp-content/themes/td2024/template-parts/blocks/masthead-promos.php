
<?php
$className = 'global-masthead
';
if (!empty($block['className'])) {
    $className .= ' ' . $block['className'];
}
// Get the ID of the current page
$page_id = get_the_ID();

// Get the fields for the 'faq' field group
$masthead_fields = get_field('masthead_settings', 'option');
// var_dump($masthead_fields);
global $wp;

?>
<?php
// Check if the field group 'masthead_promos' exists
if (function_exists('get_field') && get_field('masthead_settings', 'option')) {
  // Get the repeater field 'promotions'
  $promotions = get_field('masthead_settings', 'option');
  $default_masthead = false;
  $current_page_masthead = false;
  // Check if there are rows in the repeater
  if ($promotions) {
    // Loop through each row of the repeater
    foreach ($promotions as $promotion) {
        $promo_page = $promotion['slug'];
        // which masthead should be seen
        if($promo_page == ''){
          $default_masthead = $promotion;
        } elseif(str_contains(home_url($wp->request), '/'.$promo_page.'/')|| str_ends_with(home_url($wp->request), '/'.$promo_page)){
          $current_page_masthead = $promotion;
        }
  }}
  $promotion;
  if($current_page_masthead){
    $promotion = $current_page_masthead;
  } else {
    $promotion = $default_masthead;
  }
  
  if($promotion){
    // Retrieve promotion fields
    $title = $promotion['masthead_title'];
    $description = $promotion['main_text'];
    $color_variant = $promotion['color_variant'];
   
    $url = $promotion['url'];

    // color variables 
    if($color_variant == 'lavender') {
      $background_color = 'bg-accentLavender-100';
    } elseif ($color_variant == ' teal') {
      $backgroung_color = 'bg-accentTurquoise-100';
    } elseif ($color_variant == 'blue') {
      $background_color = 'bg-secondaryBlue-100 text-white';
    } elseif ($color_variant == 'red') {
      $background_color = 'bg-accentRed-100';
    } elseif ($color_variant == 'green') {
      $background_color = 'bg-accentGreen-100';
    }
?>
    <div class="masthead w-full py-3 text-center <?php echo $background_color; ?> ">
      <?php if($url): ?><a href="<?php echo $url; ?>" class="flex flex-row justify-center items-center masthead-link"><?php endif ?>
        <h4 class="text-mobile-base lg:text-base font-medium pr-2 <?php echo $color_variant == 'blue' ? 'text-white' : 'text-navy-100'; ?>"><?php echo $description; ?></h4>
        <?php if($url) : ?>
          <?php if($color_variant == 'blue'): ?> 
            <img class="masthead-arrow" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/arrow-white-lg.svg" alt="arrow">
            <?php else : ?>
              <img class="masthead-arrow" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/arrow-dark-lg.svg" alt="arrow"> 
          <?php endif?> 
        <?php endif ?>
        
      </a>
    </div>
<?php
  }
    
} else {
    // Handle case when the field group 'masthead_promos' does not exist
    // echo 'Field group masthead_promos not found.';
}
?>
