<?php  
echo '<div class="relative inline-table mb-[45px]">';
                    
                    if (has_post_thumbnail()) {
                        $thumbnail_url = get_the_post_thumbnail_url();
                        $image_id = get_field('resource_logo');
                        $image_src_array = wp_get_attachment_image_src($image_id, 'full');
                    
                        if ($image_src_array !== false) {
                            $image_src = $image_src_array[0];
                        } else {
                            $image_src = '';  // or set a default image URL
                        }
                    
                        echo '<a class="relative w-full mb-[30px] rounded-[20px] h-[175px]" href="' . trailingslashit(get_permalink()) . '" style="background-image: url(' . $thumbnail_url . '); display: block; background-size: cover; background-position: center;">
                        <div style="background: linear-gradient(180deg, rgba(58, 97, 255, 0.35) 5.75%, rgba(58, 97, 255, 0.66) 68.81%);" class="w-full h-full absolute top-0 left-0 !z-[1] rounded-[20px] flex items-center justify-center">';
                    
                        if (!empty($image_src)) {
                            echo '<img class="cs-logo w-full max-h-[50px] max-w-[80%]" src="' . $image_src . '">';
                        }
                    
                        echo '</div></a>';
                    }
                    $terms = get_the_terms(get_the_ID(), 'category');
                    if ($terms && !is_wp_error($terms)) {
                        $term_names = array();
                        foreach ($terms as $term) {
                            $term_names[] = $term->name;
                        }
                    }

                    echo '<h4 class="mb-[10px] font-medium"><a class="text-3xl no-underline leading-[1.45]" href="' . trailingslashit(get_permalink()) . '">' . get_the_title() . '</a></h4>';
                    echo '<p class="text-l font-normal leading-[1.45]">' . get_the_excerpt() . '</p>';
                    
                    echo '</div>';
                    ?>