<?php
/** get modal categories for each Integrations item, then
 * assign a subclass 
 * 
 * 
 * MODAL CATEGORY OPTIONS:
 * 1) "All Pre-built Connectors"
 * 2) "SDKs and APIs"
 * 3) "Custom Scripts"
 * 4) "Workflows"
 * 5) "Integrations Team"
 * 6) "Treasure Boxes"
 *  "Custom Modal #1: Amplitude"
 *  "Custom Modal #2: Facebook Custom Audiences"
 *  "Custom Modal #3: Zendesk"
 *  "Custom Modal #4: Salesforce Marketing Cloud"
 *  "Custom Modal #5: Snapchat"
 * **/

  $product;


  if (!empty($product->get_attribute('modal-category')))
  {
    $modal_category = $product->get_attribute('modal-category');
  }
  else
  {
    $modal_category = '';
  } 
  

// assign this just in case an item has no modal_category
$thumbnail_subclasses = array( 
  'class' => 'attachment-post-thumbnail size-post-thumbnail',
        );



switch ( $modal_category ) {

  case 'All Pre-built Connectors' :
    // assign subclass to image
    $thumbnail_subclasses = array(
      'class' => 'attachment-post-thumbnail size-post-thumbnail modal_prebuilt',
    );

    break;



  case 'SDKs and APIs' :
    // assign subclass to image
    $thumbnail_subclasses = array(
      'class' => 'attachment-post-thumbnail size-post-thumbnail modal_sdks_apis',
    );

    break;



  case 'Custom Scripts' :
    // assign subclass to image
    $thumbnail_subclasses = array(
      'class' => 'attachment-post-thumbnail size-post-thumbnail modal_custom_scripts',
    );

    break;



  case 'Workflows' :
    $thumbnail_subclasses = array(
      'class' => 'attachment-post-thumbnail size-post-thumbnail modal_workflows',
    );

    break;



  case 'Integrations Team' :
    $thumbnail_subclasses = array(
      'class' => 'attachment-post-thumbnail size-post-thumbnail modal_integrations_team',
    );

    break;



  case 'Treasure Boxes' :
    $thumbnail_subclasses = array(
      'class' => 'attachment-post-thumbnail size-post-thumbnail modal_treasure_boxes',
    );

    break;



  case 'Custom - Amplitude' :
    $thumbnail_subclasses = array(
      'class' => 'attachment-post-thumbnail size-post-thumbnail modal_custom_amplitude',
    );

    break;



  case 'Custom - Facebook Custom Audiences' :
    $thumbnail_subclasses = array(
      'class' => 'attachment-post-thumbnail size-post-thumbnail modal_custom_facebook_audiences',
    );

    break;



  case 'Custom - Zendesk' :
    $thumbnail_subclasses = array(
      'class' => 'attachment-post-thumbnail size-post-thumbnail modal_custom_zendesk',
    );

    break;



  case 'Custom - Salesforce Marketing Cloud' :
    $thumbnail_subclasses = array(
      'class' => 'attachment-post-thumbnail size-post-thumbnail modal_custom_salesforce_marketing_cloud',
    );

    break;



  case 'Custom - Snapchat' :
    $thumbnail_subclasses = array(
      'class' => 'attachment-post-thumbnail size-post-thumbnail modal_custom_snapchat',
    );

    break;



  default :
    $thumbnail_subclasses = array( 
      'class' => 'attachment-post-thumbnail size-post-thumbnail modal_prebuilt',
    );

    break;
  }
?>