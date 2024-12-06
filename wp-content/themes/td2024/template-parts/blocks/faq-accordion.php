<?php
$className = 'faq-accordion';
if (!empty($block['className'])) {
    $className .= ' ' . $block['className'];
}
// Get the ID of the current page
$page_id = get_the_ID();

// Get the fields for the 'faq' field group
$faq_fields = get_field('faq', $page_id);

?>
<?php
  $faqData = get_field('first_tab');
  $layout_variant = $faqData['layout_variant'];
  $layout_variant_tablet = $faqData['layout_variant_tablet'];
  $layout_variant_mobile = $faqData['layout_variant_mobile'];
  $column_sizing = $faqData['column_sizing'];
  $column_sizing_tablet = $faqData['column_sizing_tablet'];
  $column_sizing_mobile = $faqData['column_sizing_mobile'];
  $scope_id = uniqid("block-");
  $block_id = $block["id"];// array_key_exists("anchor", $block) ? $block["anchor"] : $scope_id;
?>

<div id="<?php print $block_id ?>" data-scope="<?php print $scope_id ?>" class="color-variant py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical <?php if ($faqData['color_variation'] == 'Dark') {

    echo 'bg-primaryBlue-100 text-white accent';
} else {
    echo 'bg-white light';
} ?>
">


  <div class="wrapper container mx-auto
  <?php if ($layout_variant == '2col') {
    echo ' lg:flex lg:flex-row justify-between';
  } elseif ($layout_variant_tablet == '2col') {
      echo ' md:flex md:flex-row justify-between';
  } elseif ($layout_variant_mobile == '2col') {
      echo ' flex flex-row justify-between';
  } ?>">
    <h2 class="title font-header text-mobile-5xl lg:text-5xl py-10 leading-[1.2]"><?php echo $faqData['first_tab_title'] ?></h2>
    <div class="layout-variant py-10 <?php if ($faqData['layout_variant'] == '1col') {
      echo 'w-full';
    } else {
        echo 'w-3/4';
    }

      if ($column_sizing == '33/66') {
          echo ' lg:w-2/3';
      } elseif ($column_sizing == '50/50') {
          echo ' lg:w-1/2';
      } elseif ($column_sizing == '66/33') {
          echo ' lg:w-1/3';
      } elseif ($column_sizing == '75/25') {
          echo ' lg:w-1/4';
      }

      if ($column_sizing_tablet == '33/66') {
          echo ' md:w-2/3';
      } elseif ($column_sizing_tablet == '50/50') {
          echo ' md:w-1/2';
      } elseif ($column_sizing_tablet == '66/33') {
          echo ' md:w-1/3';
      } elseif ($column_sizing_tablet == '75/25') {
          echo ' md:w-1/4';
      }

      if ($column_sizing_mobile == '33/66') {
          echo ' w-2/3';
      } elseif ($column_sizing_mobile == '50/50') {
          echo ' w-1/2';
      } elseif ($column_sizing_mobile == '66/33') {
          echo ' w-1/3';
      } elseif ($column_sizing_mobile == '75/25') {
          echo ' w-1/4';
      }
      ?>">
      <div class="content-inner">
        <div class="accordion">
        <?php
          if ($faqData) {
            foreach ($faqData['sections'] as $section) {
            // Access individual fields within the repeater
            $heading = $section['first_heading'];
            $display = $section['display_header'];
            $display_tablet = $section['display_header_tablet'];
            $display_mobile = $section['display_header_mobile'];
            // Output or process the field value as needed
            ?>
            <!-- HTML markup for section -->
            <div class="accordion_title <?php 
              if ($display === true) {
                  echo ' lg:inline-block';
              } elseif ($display_tablet === true) {
                  echo ' md:inline-block';
              } elseif ($display_mobile === true) {
                  echo ' inline-block';
              } else {
                echo 'hidden';
              }
              ?>">
              <h3 class="font-display text-3xl pb-6"><?php
              if (!empty($heading)) {
                echo $heading;
              }
              ?></h3>
            </div>
              <?php
                // Access the nested repeater "section_questions"
                if (!empty($section['section_questions'])) {
                  foreach ($section['section_questions'] as $question) {
                    // Access fields within the "section_questions" repeater
                    $question_text = $question['question_text'];
                    $question_answer = $question['question_answer'];
                    // Output or process the question text as needed
                  ?>
                  
                  <!-- HTML markup for question -->
                  <div class="accordion_content w-full md:w-[90%] border-solid border-t border-white-300 transition-all duration-300 ease-in-out py-[32px] mr-20">
                    <div class="question_text pb-3 lg:pb-4">
                      <?php if (!empty($question_text)) : ?>
                        <h4 class="font-display text-mobile-4xl lg:text-4xl font-medium md:font-semibold">
                          <button id="faq-question" type="button" class="relative faq-question-button flex items-center justify-between w-full text-left">
                            <span class="mr-8"><?php echo $question_text; ?></span>
                            <img class="accent chevron absolute right-0 top-0 w-[24px]" src="<?php if ($faqData['color_variation'] == 'Dark'): ?><?php echo get_template_directory_uri(); ?>/assets/images/icons/chevron-down.svg<?php else: ?><?php echo get_template_directory_uri(); ?>/assets/images/icons/navy-arrow.svg<?php endif; ?>" alt="<?php if ($faqData['color_variation'] == 'Dark'): ?>Chevron Down<?php else: ?>Alternate Image<?php endif; ?>" />
                          </button>
                        </h4>
                      <?php endif; ?>
                    
                    </div>
                    <div id="faq-answer" role="region" class="question_answer font-display leading-6 md:leading-8 text-base overflow-hidden hidden lg:mr-32 font-normal md:font-medium">
                    <?php if (!empty($question_answer)) : ?>
                        <?php echo $question_answer; ?>
                    </div>
                    <?php endif; ?>
                    </div>
                    <?php
                    }
                }
                ?>
                  </div>
                  <!-- HTML markup for section ends here -->
              <?php
        }
        }
        ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  jQuery(document).ready(function($) {
    const $Block = $("[data-scope='<?php print $scope_id ?>']");
    $Block.find(".faq-question-button").click(function() {
        var content = $(this).closest('.accordion_content').find('.question_answer');
        var chevron = $(this).find('.chevron'); // Select the chevron icon

        $Block.find('.question_answer').not(content).slideUp(300);
        $Block.find('.chevron').not(chevron).removeClass('rotate-180'); // Remove rotation class from all other chevrons
        content.slideToggle(300);

        // Toggle rotation class for the clicked chevron icon
        chevron.toggleClass('rotate-180');
    });
});

</script>