<?php 
$tax = isset($args["taxonomy"]) ? $args["taxonomy"] : null;
$type = isset($args["type"]) ? $args["type"] : null;
$post_type = isset($args["post_type"]) ? $args["post_type"] : "resources";
$terms = td_get_terms($tax,array('post_type'=>$post_type,'hide_empty'=>false));
$initial = isset($args["initial"]) ? $args["initial"] : array("label"=>"Select","value=">"");
$active = isset($args["active"]) ? $args["active"] : null;
?>
<div class="customSelect text-gray-200" data-resource_type="<?php print $type ?>" data-post_type="<?php print $post_type ?>" data-taxonomy="<?php print $tax?>" data-value="<?php print $initial['value']?>">
    <div id="announcement" aria-live="assertive" role="alert"></div>
    <button
     role="combobox"
     id="select-"
     value="Select"
     data-value='0'
     aria-controls="listbox"
     aria-haspopup="listbox"
     tabindex="0"
     aria-expanded="false"
     class="border-2 border-gray-50 !rounded-[5px] text-sm">
    <?php print $initial["label"]?></button>
  <ul role="listbox" id="listbox" class="border-2 border-gray-50 border-solid rounded-[5px]">
    <li role="option" class="customSelect__option text-sm" data-value="<?php print $initial['value'] ?>"><?php print $initial['label'] ?></li>
    <?php 
    foreach($terms as $term): 
      if($active == $term->term_id):
    ?>
    <li role="option" class="customSelect__option text-sm active" aria-selected="true" data-value="<?php print $term->term_id?>"><?php print $term->name ?></li>
    <?php else: ?>
    <li role="option" class="customSelect__option text-sm" data-value="<?php print $term->term_id?>"><?php print $term->name ?></li>
    <?php 
      endif; 
    endforeach; 
    ?>
  </ul>
</div>
