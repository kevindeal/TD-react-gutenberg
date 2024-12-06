<?php

// Get the ID of the current page
$page_id = get_the_ID();

// Get the fields for the 'case_study_block' field group
$color_variant = get_field('color_variant');
$fill_background = get_field('fill_background');
$remove_horizontal_padding = get_field('remove_horizontal_padding');
$links = get_field('links');

?>

<div id="sub_nav_<?php echo $block["id"]; ?>" class="sub_nav_container relative flex flex-1 py-[33px] <?php if ($color_variant == 'DARK') {
    echo 'text-white case_study_dark';
    if($fill_background){
        echo ' bg-colorGradient1';
    }
} else {
    if($fill_background){
        echo ' bg-white';
    }
} ?>">
    <div class="container mx-auto">
        <div class="sub_nav_slider flex flex-row overflow-scroll">
            <?php
                $counter = 0;
                foreach($links as $link){
            ?>
                <a class="font-display font-medium mr-5 text-nowrap md:mr-20" href="<?php echo $link['link_targeturl']; ?>" target="<?php echo str_starts_with($link['link_targeturl'], 'http') ? $link['should_target_blank'] ? '_blank' : '' : ''; ?>">
                    <?php echo $link['display_text']; ?>
                </a>
            <?php
                }
            ?>
            <div class='hidden absolute subnav-scroll-right-wrapper <?php echo $color_variant == 'DARK' ? 'scroll-dark' : 'scroll-light'; ?> <?php echo $fill_background ? 'scroll-gradient' : ''; ?>'>
                <button class='scroll-right-arrow'></button>
            </div>
        </div>
    </div>
</div>

<script>
jQuery(document).ready(function($) {
    const detectScroll = ()=>{
        console.log("Detecting Subnav scroll");
        $('.subnav-scroll-right-wrapper').each((index, elem)=>{
            let tabLinks = $(elem).parent('.sub_nav_slider').eq(0);
            console.log("Elems", elem, tabLinks);
            if(tabLinks.length > 0){
                let scrollWidth = $(tabLinks).get()[0].scrollWidth;
                let innerWidth = $(tabLinks).innerWidth();
                let difference = scrollWidth - innerWidth;
                let tabCount = $(tabLinks).children().length;
    
    
                if(difference > 0) {
                    $(elem).css('display', 'flex');
                    $(elem).css('left', $(tabLinks).position().left + innerWidth - $(elem).innerWidth());
                    $(elem).off('click');
                    $(elem).on("click", ()=>{
                        let scrollLeft = $(tabLinks).scrollLeft();
                        let scrollTo = scrollLeft + innerWidth;
                        console.log("Scroll Right Button Clicked", scrollLeft);
                        if(scrollLeft + 5 > difference){
                            //Add 5 for buffer and then loop around.
                            scrollTo = 0;
                        }
                        $(tabLinks.scrollLeft(scrollTo));
                    });
                } else {
                    $(elem).css("display", "none");
                }
            }
        });
    }

   detectScroll();

   window.addEventListener('resize', function(event){
        detectScroll();
   });
});
</script>