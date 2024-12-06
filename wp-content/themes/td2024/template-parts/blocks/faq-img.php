<?php
$className = 'faq-image';
if (!empty($block['className'])) {
    $className .= ' ' . $block['className'];
}
// Get the ID of the current page
$page_id = get_the_ID();

// Get the fields for the 'faq' field group
$faq_fields = get_field('faq', $page_id);

?>
<?php
$faqData = get_field('faq_group');
$layout_variant = $faqData['layout_variant'];
$layout_variant_tablet = $faqData['layout_variant_tablet'];
$layout_variant_mobile = $faqData['layout_variant_mobile'];
$column_sizing = $faqData['column_sizing'];
$column_sizing_tablet = $faqData['column_sizing_tablet'];
$column_sizing_mobile = $faqData['column_sizing_mobile'];
$color_variation = $faqData['color_variation'];
$imagesToRender = array();
$scope_id = uniqid("block-");
$block_id = $block["id"];// = array_key_exists("anchor", $block) ? $block["anchor"] : $scope_id;
?>



<div id="<?php echo $block_id ?>" data-scope="<?php print $scope_id ?>" class="<?php echo $className ?> color-variant relative py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical overflow-hidden lg:pt-20 lg:pb-[200px] <?php if ($faqData['color_variation'] == 'Dark') {
    echo 'bg-primaryBlue-100 text-white accent';
} else {
    echo 'bg-white text-black light';
} ?>">
  <div class="container mx-auto relative">
  <?php if($faqData['color_variation'] == 'Dark') : ?>
    <svg class="absolute top-[65px] -right-[1254px] opacity-35 hidden lg:block" xmlns="http://www.w3.org/2000/svg" width="1772" height="994" viewBox="0 0 1772 994" fill="none">
      <path d="M784.51 971.849L1447.29 308.931C1474.97 281.243 1474.97 236.35 1447.29 208.662L1273.23 34.5664C1251.74 13.0692 1222.6 1 1192.2 1H276.571C246.184 1 217.035 13.0784 195.542 34.5664L21.4822 208.662C-6.19979 236.35 -6.19979 281.243 21.4822 308.931L684.263 971.849C711.945 999.537 756.829 999.537 784.51 971.849ZM860.175 971.849L1522.96 308.931C1550.64 281.243 1550.64 236.35 1522.96 208.662L1348.9 34.5664C1327.4 13.0692 1298.26 1 1267.87 1H352.235C321.848 1 292.699 13.0784 271.207 34.5664L97.1468 208.662C69.4649 236.35 69.4649 281.243 97.1468 308.931L759.928 971.849C787.61 999.537 832.493 999.537 860.175 971.849ZM935.84 971.849L1598.62 308.931C1626.3 281.243 1626.3 236.35 1598.62 208.662L1424.56 34.5664C1403.07 13.0692 1373.93 1 1343.53 1H427.909C397.522 1 368.373 13.0784 346.881 34.5664L172.821 208.662C145.139 236.35 145.139 281.243 172.821 308.931L835.602 971.849C863.284 999.537 908.167 999.537 935.849 971.849H935.84ZM1011.5 971.849L1674.29 308.931C1701.97 281.243 1701.97 236.35 1674.29 208.662L1500.23 34.5664C1478.73 13.0692 1449.59 1 1419.2 1H503.565C473.178 1 444.029 13.0784 422.536 34.5664L248.476 208.662C220.794 236.35 220.794 281.243 248.476 308.931L911.257 971.849C938.939 999.537 983.823 999.537 1011.5 971.849ZM1087.18 971.849L1749.96 308.931C1777.64 281.243 1777.64 236.35 1749.96 208.662L1575.9 34.5664C1554.41 13.0692 1525.27 1 1494.87 1H579.229C548.842 1 519.693 13.0784 498.201 34.5664L324.141 208.662C296.459 236.35 296.459 281.243 324.141 308.931L986.922 971.849C1014.6 999.537 1059.49 999.537 1087.17 971.849H1087.18Z" stroke="white" stroke-miterlimit="10"/>
      <defs>
        <linearGradient id="paint0_linear_4822_12669" x1="1843.37" y1="34.9659" x2="885.721" y2="992.615" gradientUnits="userSpaceOnUse">
          <stop stop-color="#89F5F4"/>
          <stop offset="0.25" stop-color="#3A61FF"/>
          <stop offset="1" stop-color="#3140A0"/>
        </linearGradient>
      </defs>
    </svg>
    <?php else : ?>
      <svg class="absolute top-[65px] -right-[1254px] hidden lg:block" xmlns="http://www.w3.org/2000/svg" width="1772" height="994" viewBox="0 0 1772 994" fill="none">
        <path d="M784.51 971.849L1447.29 308.931C1474.97 281.243 1474.97 236.35 1447.29 208.662L1273.23 34.5664C1251.74 13.0692 1222.6 1 1192.2 1H276.571C246.184 1 217.035 13.0784 195.542 34.5664L21.4822 208.662C-6.19979 236.35 -6.19979 281.243 21.4822 308.931L684.263 971.849C711.945 999.537 756.829 999.537 784.51 971.849ZM860.175 971.849L1522.96 308.931C1550.64 281.243 1550.64 236.35 1522.96 208.662L1348.9 34.5664C1327.4 13.0692 1298.26 1 1267.87 1H352.235C321.848 1 292.699 13.0784 271.207 34.5664L97.1468 208.662C69.4649 236.35 69.4649 281.243 97.1468 308.931L759.928 971.849C787.61 999.537 832.493 999.537 860.175 971.849ZM935.84 971.849L1598.62 308.931C1626.3 281.243 1626.3 236.35 1598.62 208.662L1424.56 34.5664C1403.07 13.0692 1373.93 1 1343.53 1H427.909C397.522 1 368.373 13.0784 346.881 34.5664L172.821 208.662C145.139 236.35 145.139 281.243 172.821 308.931L835.602 971.849C863.284 999.537 908.167 999.537 935.849 971.849H935.84ZM1011.5 971.849L1674.29 308.931C1701.97 281.243 1701.97 236.35 1674.29 208.662L1500.23 34.5664C1478.73 13.0692 1449.59 1 1419.2 1H503.565C473.178 1 444.029 13.0784 422.536 34.5664L248.476 208.662C220.794 236.35 220.794 281.243 248.476 308.931L911.257 971.849C938.939 999.537 983.823 999.537 1011.5 971.849ZM1087.18 971.849L1749.96 308.931C1777.64 281.243 1777.64 236.35 1749.96 208.662L1575.9 34.5664C1554.41 13.0692 1525.27 1 1494.87 1H579.229C548.842 1 519.693 13.0784 498.201 34.5664L324.141 208.662C296.459 236.35 296.459 281.243 324.141 308.931L986.922 971.849C1014.6 999.537 1059.49 999.537 1087.17 971.849H1087.18Z" stroke="url(#paint0_linear_4822_12669)" stroke-miterlimit="10"/>
        <defs>
          <linearGradient id="paint0_linear_4822_12669" x1="1843.37" y1="34.9659" x2="885.721" y2="992.615" gradientUnits="userSpaceOnUse">
            <stop stop-color="#89F5F4"/>
            <stop offset="0.25" stop-color="#3A61FF"/>
            <stop offset="1" stop-color="#3140A0"/>
          </linearGradient>
        </defs>
      </svg>
    <?php endif; ?>  
  <h2 class="title font-header text-mobile-5xl lg:text-5xl mb-[40px] lg:mb-[0] leading-[1.2]"><?php echo $faqData['title'] ?></h2>
    <?php
    if ($faqData) {
        foreach ($faqData['sections'] as $section) {
            // Access individual fields within the repeater
            $heading = $section['heading'];
            $display = $section['display_header'];
            $display_tablet = $section['display_header_tablet'];
            $display_mobile = $section['display_header_mobile'];
            // Output or process the field value as needed
            ?>
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
              <h3 class="font-display text-3xl md:text-5xl pb-6"><?php
              if (!empty($heading)) {
                echo $heading;
              }
              ?></h3>
            </div>
            <div class="layout-variant flex md:flex-row flex-col-reverse lg:pt-[135px] <?php echo 'w-full'; ?>">
              <div class="accordion flex flex-col <?php if($column_sizing == '25/75' || $column_sizing == '33/66' || $column_sizing == '50/50') {
                echo 'flex-1';
              } elseif($column_sizing == '66/33') {
                echo 'flex-2';
              } elseif($column_sizing == '75/25') {
                echo 'flex-3';
              }?>">
                <?php
                // Access the nested repeater "section_questions"
                if (!empty($section['section_questions'])) {
                  foreach ($section['section_questions'] as $question) {
                    // Access fields within the "section_questions" repeater
                    $question_text = $question['question_text'];
                    $question_answer = $question['question_answer'];
                    $question_img = $question['question_image'];
                    // Output or process the question text as needed
                    ?>
                      <div class="accordion_content w-full md:w-[90%] border-solid border-t border-white-300 py-[32px] mr-20">
                        <div class="question_text font-bold text-mobile-4xl lg:text-4xl pb-3 lg:pb-4">
                            <?php if (!empty($question_text)) : ?>
                                <h3 class="font-display text-mobile-4xl lg:text-4xl font-medium md:font-semibold <?php if($color_variation == 'Light') {
                                  echo 'text-blue-100';
                                } else { 
                                  echo 'text-accentTurquoise-100';
                                }?>">
                                    <button id="faq-question" type="button" class="relative faq-question-button flex items-center justify-between w-full text-left" data-img="<?php echo $question_img['url']; ?>">
                                        <span class="mr-8"><?php echo $question_text; ?></span>
                                        <img class="accent chevron absolute right-0 top-0 w-[24px]" src="
                                        <?php if ($faqData['color_variation'] == 'Dark') {
                                          echo get_template_directory_uri() . '/assets/images/icons/chevron-down.svg';
                                          } else {
                                                  echo get_template_directory_uri() . '/assets/images/icons/navy-arrow.svg';
                                            } ?>" alt="<?php if ($faqData['color_variation'] == 'Dark') {
                                              echo 'Chevron Down';
                                            } else {
                                              echo 'Alternate Image';
                                            } ?>" />
                                    </button>
                                </h3>
                            <?php endif; ?>
                        </div>
                        <div id="faq-answer" role="region" class="question_answer font-display overflow-hidden hidden lg:mr-32">
                          <?php if (!empty($question_answer)) : ?>
                            <div class="font-display leading-6 md:leading-8 text-base md:text-2xl pb-5 font-normal md:font-medium">
                                  <?php echo $question_answer; ?>
                            </div>
                            <?php if (!empty($question_img)) : ?>
                              <img class="w-full h-auto relative z-10 md:hidden" src="<?php echo $question_img['url']; ?>" alt="<?php echo $question_img['alt']; ?>" />
                            <?php endif; ?>
                          <?php endif; ?>
                        </div>
                      </div>
                <?php 
                if(!empty($question_img)) {
                array_push($imagesToRender, $question_img);
                  }
                }
              }?>
              </div>
              <div class="hidden">
                <?php var_dump($imagesToRender) ?>
              </div>
              <div class="img-container hidden md:flex md:flex-col <?php if($column_sizing == '75/25' || $column_sizing == '66/33' || $column_sizing == '50/50') {
                echo 'flex-1';
              } elseif($column_sizing == '33/66') {
                echo 'flex-2';
              } elseif($column_sizing == '25/75') {
                echo 'flex-3';
              }?>">
              <?php
                $index = 0; // Initialize index
                foreach($imagesToRender as $question_img) {
                ?>
                  <div class="question_image <?php echo ($index == 0) ? '' : 'hidden' ?>" data-index="<?php echo $index; ?>">
                    <?php if (!empty($question_img)) : ?>
                      <img class="w-full h-auto relative z-10" src="<?php echo $question_img['url']; ?>" alt="<?php echo $question_img['alt']; ?>" />
                    <?php endif; ?>
                  </div>
                <?php 
                  $index++; // Increment index
                }
              ?>
              </div> 
            </div>
      <?php }
    }?>
  </div>

</div>
</div>

<script>
    jQuery(document).ready(function($) {
        const $Block = $("[data-scope='<?php print $scope_id ?>']");
        var $image = $Block.find(`.question_image img`); // Select the image element

        $Block.find(`.faq-question-button`).click(function() {
            console.log("<?php print $block_id ?>", $(this));
            var content = $(this).closest('.accordion_content').find('.question_answer');
            var chevron = $(this).find('.chevron'); // Select the chevron icon
            var imgSrc = $(this).data('img'); // Get the image URL from the data attribute

            $Block.find(`.question_answer`).not(content).slideUp(300);
            $Block.find(`.chevron`).not(chevron).removeClass('rotate-180'); // Remove rotation class from all other chevrons
            content.slideToggle(300);

            // Update the image src
            $image.attr('src', imgSrc);

            // Toggle rotation class for the clicked chevron icon
            chevron.toggleClass('rotate-180');
        });

        // Trigger a click event on the first question to default the accordion to the first question and image open
        $Block.find(`.faq-question-button`).first().click();
    });
</script>