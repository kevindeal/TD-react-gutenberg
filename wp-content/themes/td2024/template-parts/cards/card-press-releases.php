<?php
 
echo '<div class="relative inline-table mb-[45px]">';
                            
echo '<h4 class="mb-[10px] font-medium"><a class="text-3xl no-underline leading-[1.45]" href="' . trailingslashit(get_permalink()) . '">' . get_the_title() . '</a></h4>';
echo '<p class="text-l font-normal leading-[1.45]">' . get_the_date() . '</p>';

echo '</div>';

?>