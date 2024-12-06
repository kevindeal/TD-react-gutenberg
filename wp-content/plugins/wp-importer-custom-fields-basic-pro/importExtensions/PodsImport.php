<?php
/******************************************************************************************
 * Copyright (C) Smackcoders. - All Rights Reserved under Smackcoders Proprietary License
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * You can contact Smackcoders at email address info@smackcoders.com.
 *******************************************************************************************/

namespace Smackcoders\CFCSV;

if ( ! defined( 'ABSPATH' ) )
    exit; // Exit if accessed directly

class PodsImport {
    private static $pods_instance = null;

    public static function getInstance() {
		
		if (PodsImport::$pods_instance == null) {
			PodsImport::$pods_instance = new PodsImport;
			return PodsImport::$pods_instance;
		}
		return PodsImport::$pods_instance;
    }
    function set_pods_values($header_array ,$value_array , $map,$maps, $post_id , $type,$hash_key,$gmode,$templatekey){	
		$post_values = [];
		$helpers_instance = ImportHelpers::getInstance();	
		$post_values = $helpers_instance->get_header_values($map , $header_array , $value_array);
		$postimg = $helpers_instance->get_meta_values($maps , $header_array , $value_array);

		$this->pods_import_function($post_values,$postimg,$type, $post_id , $header_array , $value_array,$hash_key,$gmode,$templatekey);
    }

    public function pods_import_function($data_array,$postimg, $importas,$pID , $header_array , $value_array,$hash_key,$gmode,$templatekey) {
		global $wpdb;
		$plugin = 'pods';
		$helpers_instance = ImportHelpers::getInstance();
		$media_instance = MediaHandling::getInstance();
		$list_taxonomy = get_taxonomies();

       if($importas == 'WooCommerce Product'){
			$get_import_type = 'product';
		}
		if(in_array($importas, $list_taxonomy)){
			$get_import_type = 'term';
		}
		elseif($importas == 'Users'){
			$get_import_type = 'user';
		}
		elseif($importas == 'Comments'){
			$get_import_type = 'comment';
		}
		else{
			$get_import_type = 'post';
		}	

		$podsFields = array();
		$import_type = $helpers_instance->import_post_types($importas, null);
		
		if($import_type == 'Images'){
			$import_type = 'media';

		}
        $post_id = $wpdb->get_results($wpdb->prepare("select ID from {$wpdb->prefix}posts where post_name= %s and post_type = %s", $import_type, '_pods_pod'));
        
		if(!empty($post_id)) {
			$lastId  = $post_id[0]->ID;
			$get_pods_fields = $wpdb->get_results( $wpdb->prepare( "SELECT ID, post_name FROM {$wpdb->prefix}posts where post_parent = %d AND post_type = %s", $lastId, '_pods_field' ) );
			if ( ! empty( $get_pods_fields ) ) :
				foreach ( $get_pods_fields as $pods_field ) {
					$get_pods_types = $wpdb->get_results( $wpdb->prepare( "SELECT meta_key, meta_value FROM {$wpdb->prefix}postmeta where post_id = %d AND meta_key = %s", $pods_field->ID, 'type' ) );
					$get_pods_object = $wpdb->get_results( $wpdb->prepare( "SELECT meta_key, meta_value FROM {$wpdb->prefix}postmeta where post_id = %d AND meta_key = %s", $pods_field->ID, 'pick_object' ) );
					$podsFields["PODS"][ $pods_field->post_name ]['label'] = $pods_field->post_name;
					$podsFields["PODS"][ $pods_field->post_name ]['type']  = $get_pods_types[0]->meta_value;
					if(isset($get_pods_object[0]->meta_value)){
						$podsFields["PODS"][ $pods_field->post_name ]['pick_object']=$get_pods_object[0]->meta_value;
					}
					if($podsFields["PODS"][ $pods_field->post_name ]['type'] == 'pick'){
						$get_pods_objecttype = $wpdb->get_results( $wpdb->prepare( "SELECT meta_key, meta_value FROM {$wpdb->prefix}postmeta where post_id = %d AND meta_key = %s", $pods_field->ID, 'pick_format_type' ) );
						$podsFields["PODS"][ $pods_field->post_name ]['pick_objecttype']=$get_pods_objecttype[0]->meta_value;
					}
				}
			endif;
		}

		$createdFields = array();
		foreach ($data_array as $dkey => $dvalue) {
			$createdFields[] = $dkey;
		}
		foreach ($data_array as $custom_key => $custom_value) {
			$plugin = 'pods';
			if($podsFields["PODS"][$custom_key]['type'] == 'file'){
				// $exploded_file_items = explode(',', $custom_value);
				if (strpos($custom_value, ',') !== false) {
					$file_field_name = array_search($custom_value, $data_array);
					$exploded_file_items = explode(',', $custom_value);
				}
				elseif (strpos($custom_value, '|') !== false) {
					$file_field_name = array_search($custom_value, $data_array);
					$exploded_file_items = explode('|', $custom_value);
				}
				else{
					$exploded_file_items = array();
					$exploded_file_items[] = $custom_value;
					$file_field_name = $custom_key;
				}
					$weight = 0;
					$gallery_ids = array();
					$gallery_ids = [];
						
					$update_pods_image = true;
					foreach($exploded_file_items as $file){
					if(isset($file) && $file!=''){
								// foreach($exploded_file_items as $file) {	
									$file = trim($file);
									$ext = pathinfo($file, PATHINFO_EXTENSION);	
									if(preg_match_all( '/\b(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)[-A-Z0-9+&@#\/%=~_|$?!:,.]*[A-Z0-9+&@#\/%=~_|$]/i', $file)){
										$get_file_ids = []; 
										$get_file_id = $media_instance->image_meta_table_entry($postimg, $pID, $custom_key, $file, $hash_key, 'pods', $get_import_type,$templatekey,$gmode);
										if($get_file_id != '') {
											$gallery_ids[] = intval($get_file_id);
											$file_type = $wpdb->get_var("SELECT {$wpdb->prefix}postmeta.meta_value 
											FROM {$wpdb->prefix}postmeta 
											INNER JOIN {$wpdb->prefix}posts AS p ON {$wpdb->prefix}postmeta.post_id = p.ID
											WHERE {$wpdb->prefix}postmeta.meta_key = 'file_format_type'
											AND p.post_type = '_pods_field' 
											AND p.post_title = '$custom_key'");
											if($file_type='single'){
												update_post_meta($pID, $custom_key, $gallery_ids);
												update_post_meta($pID, '_pods_' . $custom_key, $gallery_ids);	
											}
											else {
												add_post_meta($pID, $custom_key, $gallery_ids);
												add_post_meta($pID, '_pods_'.$custom_key,$gallery_ids);
											
											}
										}
										$get_existing_image_option = get_option('smack_schedule_image_exists_pods_'.$pID);
										if($get_existing_image_option){
											$media_instance->acfimageMetaImports($gallery_ids, $postimg, $plugin);
											delete_option('smack_schedule_image_exists_pods_'.$pID);
										}
									} else {
										$galleryLen = strlen($file);
										$checkgalleryid = intval($file);
										$verifiedGalleryLen = strlen($checkgalleryid);
										if($galleryLen == $verifiedGalleryLen) {
											$gallery_ids[] = $file;
											$media_instance->acfimageMetaImports($gallery_ids,$postimg,$plugin);
										}
									}
								// }
									$loading_image_check = $wpdb->get_results("SELECT ID FROM {$wpdb->prefix}posts WHERE guid LIKE '%loading-image%'");
									if(empty($loading_image_check)){
										$pod = pods($import_type);
										$field_info = $pod->fields($file_field_name);
										$field_id = $field_info['id'];
										if(!empty($gallery_ids)){
											foreach($gallery_ids as $media_id_key => $media_id_value){
												$related_file_id = $media_id_value;
													//check if row is already exists
													$check_result = $wpdb->get_results($wpdb->prepare("SELECT ID,pod_id,field_id,item_id,related_item_id FROM {$wpdb->prefix}podsrel WHERE pod_id = %d AND item_id = %d AND field_id = %d",$post_id[0]->ID,$pID,$field_id));
													if(empty($check_result) || isset($check_result)){    
														$pods_rel_table = $wpdb->prefix . "podsrel";
															if($update_pods_image){
																if(!empty($check_result)){
																	foreach($check_result as $my_delete_id){
																		$delete_status = $wpdb->delete($pods_rel_table,array('id' => $my_delete_id->ID));
																	}
																}
																$update_pods_image=false;
															}
															if($weight >= 0){
																$weight++;
															}
															$pods_rel_table = $wpdb->prefix . "podsrel";
															$my_result = $wpdb->insert($pods_rel_table, array('pod_id' => $post_id[0]->ID,'field_id' => $field_id,'item_id' => $pID,'related_pod_id' => 0,'related_field_id' =>0,'related_item_id' => $related_file_id,'weight' => $weight));
													}						
											}
										}else{ 
											$delete_result = $wpdb->get_results($wpdb->prepare("SELECT ID,pod_id,field_id,item_id FROM {$wpdb->prefix}podsrel WHERE pod_id = %d AND item_id = %d AND field_id = %d",$post_id[0]->ID,$pID,$field_id));
											if(!empty($delete_result)){
												foreach($delete_result as $delete_id){
													$pods_rel_table = $wpdb->prefix . "podsrel";
													$delete_status = $wpdb->delete($pods_rel_table,array('id' => $delete_id->ID));
												}
											}
										}
									
			
							if($get_import_type == 'term'){
								update_term_meta($pID,$custom_key, $gallery_ids);
							}
							elseif($get_import_type == 'user'){
								update_user_meta($pID, $custom_key, $gallery_ids);
							}
							elseif($get_import_type == 'comment'){
								update_comment_meta($pID, $custom_key, $gallery_ids);
							}
							// else{
							// 	// update_post_meta($pID, $custom_key, $gallery_ids);
							// 	update_post_meta($pID, $custom_key, $gallery_ids[0]);
							// 	update_post_meta($pID, '_pods_'.$custom_key,$gallery_ids);
							// }	
							}
							global $sitepress;
							if($sitepress != null) {
								$wpdb->prepare("UPDATE {$wpdb->prefix}posts SET post_parent = $pID WHERE ID = $gallery_ids[0]");
								$image_id = $gallery_ids[0];
								$meta_value = array('posts'=> array($pID));
								update_post_meta( $image_id, '_wpml_media_usage', $meta_value);               
							}
							}

						}			
			}
			
			elseif($podsFields["PODS"][$custom_key]['type'] == 'pick'){
				$pick_obj=$podsFields["PODS"][$custom_key]['pick_object'];
				$pick_objtype = $podsFields["PODS"][$custom_key]['pick_objecttype'];
				$termitem = [];
				$item = [];

				//$exploded_rel_items = explode(',', $custom_value);
				if (strpos($custom_value, ',') !== false) {
					$exploded_rel_items = explode(',', $custom_value);
				} elseif (strpos($custom_value, '|') !== false) {
					$exploded_rel_items = explode('|', $custom_value);
				}
				else{
					$exploded_rel_items[] = $custom_value;
				}

				if($pick_obj == 'taxonomy'){
					foreach($exploded_rel_items as $items){
						
						if(is_numeric($items)){
                            $termitem[]=$items;
						}
						else{
							$items = trim($items);
							$ids = $wpdb->get_results( $wpdb->prepare( "SELECT term_id FROM {$wpdb->prefix}terms where name = %s ",$items) );
							foreach($ids as $id){
								$termitem[]=$id->term_id;
							}
						}
					}
				}
				else{
					foreach($exploded_rel_items as $items){
						$items = trim($items);
						if (is_numeric($items)) {
							$item[] = $items;
						}
						else{
							$ids = $wpdb->get_results( $wpdb->prepare( "SELECT ID FROM {$wpdb->prefix}posts where post_title = %s and post_status=%s",$items,'publish') );
							foreach($ids as $id){
							$item[]=$id->ID;
							}
				
						}
					}
				}

				if(in_array($importas, $list_taxonomy)){
					update_term_meta($pID, $custom_key, $exploded_rel_items);
				}
				elseif($importas == 'Users'){
					update_user_meta($pID, $custom_key, $exploded_rel_items);
				}
				elseif($importas == 'Comments'){
					update_comment_meta($pID, $custom_key, $exploded_rel_items);
				}
				else{
					if($pick_obj=='custom-simple'){
						update_post_meta($pID, $custom_key,$exploded_rel_items);
					   }
					elseif($pick_obj=='taxonomy'){
					update_post_meta($pID, $custom_key,$termitem);
					}
					elseif($pick_obj=='user'){
						foreach($exploded_rel_items as $items){
							if(is_numeric($items)){
								$item[]=$items;
							}
							else{
								$ids = $wpdb->get_results( $wpdb->prepare( "SELECT ID FROM {$wpdb->prefix}users where user_login = %s ",$items) );
								foreach($ids as $id){
									$item[]=$id->ID;
								}
							}
						}
						if($pick_objtype == 'multi'){
							foreach($item as $key=>$value){
								add_post_meta($pID, $custom_key,$value);
							}
						}
						else{	
							 foreach($item as $key=>$value){
								$cust_key ='_pods_'. $custom_key;
								$values[]=$value;
								update_post_meta($pID, $cust_key,$values);
								update_post_meta($pID, $custom_key,$value);
							}
						}
			 	   	}
					elseif(!empty($item)){
						if($pick_objtype == 'multi'){
							foreach($item as $key=>$value){
								add_post_meta($pID, $custom_key,$value);
							}
						}
						else{
							foreach($item as $key=>$value){
								update_post_meta($pID, $custom_key,$value);
								// 	//filter for modifying pods metadata
								// 	apply_filters('smack_csvpro_modify_metadata_filter', $pID, $custom_key, $value);
							}
						}
						
					}	
				}	
			}

				
			else{
				if(in_array($importas, $list_taxonomy)){
					update_term_meta($pID, $custom_key, $custom_value);
				}
				elseif($importas == 'Users'){
					update_user_meta($pID, $custom_key, $custom_value);
				}
				elseif($importas == 'Comments'){
					update_comment_meta($pID, $custom_key, $custom_value);
				}
				else{
					update_post_meta($pID, $custom_key, $custom_value);
				}	
			}
		}
		return $createdFields;
    }    
}