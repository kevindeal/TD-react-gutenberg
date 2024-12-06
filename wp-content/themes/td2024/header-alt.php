<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php tdnext_schema_type(); ?>>
<head>
<?php if($global_header_scripts = get_field("global_header_scripts","option")): print $global_header_scripts; endif; ?>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width">
  <link href="<?php echo get_template_directory_uri(); ?>/static/output.css" rel="stylesheet">
  <link href="<?php echo get_template_directory_uri(); ?>/css/main.css" rel="stylesheet">
  <?php wp_head(); ?>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&family=Inter:wght@100..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/js/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/js/slick/slick-theme.css"/>
</head>
<body <?php body_class("font-display"); ?>>
<?php wp_body_open(); ?>
<?php if($global_body_scripts = get_field("global_body_scripts","option")): print $global_body_scripts; endif; ?>
<div id="wrapper" class="hfeed">

  <?php if(!get_field('masthead_promos')) {

  // Get the absolute path to the template file
  $template_part_path = locate_template('template-parts/blocks/masthead-promos.php');

  $fullOpacity = get_field('full_opacity');
  if(!$fullOpacity){
    $fullOpacity = 'true';
  }

  // Check if the template file exists
  if ($template_part_path !== '') {
      // Include the template file
      $class = '';
      if(have_rows('masthead_settings', 'option')) {
          while(have_rows('masthead_settings', 'option')): the_row();
              $slug = get_sub_field('slug');
              if(empty($slug) || $slug == basename(get_permalink())) {
                  $class = 'has-masthead';
                  break;
              }
          endwhile;
      }
      echo '<header id="header" class="fixed bg-navy-100  alt-header ' . (($fullOpacity === 'true') ? 'full-opacity' : '') . ' ' . $class . '" role="banner">';
      
      

  } else {
      echo '<header id="header" role="banner" class="bg-navy-100  fixed alt-header ' . ($fullOpacity === 'true' ? 'full-opacity' : '') . '">';
  } 
  include($template_part_path);
  } ?>

  <div class="container mx-auto">
    <div class="header-inner py-8 flex justify-between items-center">
      <div class="logo">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/logos/Primary-Logo.svg" alt="td-logo">
        </a>
        
      </div>
        <?php
        $current_url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        if (strpos($current_url, '-demo') === false) {
        ?>
          <a href="/custom-demo/" class="btn-primary">Get a Demo</a>
        <?php
        }
        ?>
    </div>
  </div>
</header>
<div id="container" class="">
    <main id="content" role="main">
