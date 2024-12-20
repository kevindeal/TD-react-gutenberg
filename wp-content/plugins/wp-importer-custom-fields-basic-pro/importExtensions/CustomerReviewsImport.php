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

class CustomerReviewsImport {
    private static $customer_reviews_instance = null;

    public static function getInstance() {		
		if (CustomerReviewsImport::$customer_reviews_instance == null) {
			CustomerReviewsImport::$customer_reviews_instance = new CustomerReviewsImport;
			return CustomerReviewsImport::$customer_reviews_instance;
		}
		return CustomerReviewsImport::$customer_reviews_instance;
    }

    public function customer_reviews_import($data_array, $mode ,$unikey_value , $unikey_name, $line_number) {
        global $wpdb,$core_instance;
		$helpers_instance = ImportHelpers::getInstance();
		$core_instance = CoreFieldsImport::getInstance();
		$log_table_name = $wpdb->prefix ."cfimport_detail_log";
		$reviewId = '';
		$returnArray = array('MODE' => $mode);
		$mode_of_affect = 'Inserted';
		
		if(isset($data_array['review_format'])) {
            if(!array_key_exists('review_format', $data_array) && !isset($data_array['review_format']) && !empty($data_array['review_format'])) {
                $reviewFormat = 'business';
            } else {
                $reviewFormat = strtolower($data_array['review_format']);
            }
		}

		$post_id = $data_array['review_post'];
		$post_exists = $wpdb->get_row("SELECT * FROM {$wpdb->prefix}posts WHERE id = '" . $post_id . "' and post_status in ('publish','draft','future','private','pending')", 'ARRAY_A');
		$updated_row_counts = $helpers_instance->update_count($unikey_value,$unikey_name);
		if (isset($updated_row_counts['created'])) {
		$created_count = $updated_row_counts['created'];
		}
		if (isset($updated_row_counts['updated'])) {
		$updated_count = $updated_row_counts['updated'];
		}
		if (isset($updated_row_counts['skipped'])) {
		$skipped_count = $updated_row_counts['skipped'];
		}
		if($mode == 'Insert') {
			if ($post_exists) {
				update_post_meta($post_id, 'wpcr3_enable', 1);
				update_post_meta($post_id, 'wpcr3_format', $reviewFormat);
				if(is_plugin_active('wp-customer-reviews/wp-customer-reviews-3.php')){
					$review_date = current_time('mysql', 0);
					if(isset($data_array['date_time'])) {
						$review_date = date( 'Y-m-d H:i:s', strtotime( $data_array['date_time'] ) );
					}
					$review_title = $data_array['review_name'];
					$review_slug = preg_replace('/[^a-zA-Z0-9._\-\s]/', '', $review_title);
					$review_slug = wp_unique_filename('', $review_slug);
					if(isset($data_array['status'])) {
						$data_array['status'] = strtolower( $data_array['status'] );
					}
					if ($data_array['status'] != 'publish' && $data_array['status'] != 'private' && $data_array['status'] != 'draft' && $data_array['status'] != 'pending' && $data_array['status'] != 'sticky') {
						$data_array ['post_password'] = '';
						$stripPSF = strpos($data_array['status'], '{');
						if ($stripPSF === 0) {
							$poststatus = substr($data_array['status'], 1);
							$stripPSL = substr($poststatus, -1);
							if ($stripPSL == '}') {
								$postpwd = substr($poststatus, 0, -1);
								$data_array['status'] = 'publish';
								$data_array ['post_password'] = $postpwd;
							} else {
								$data_array['status'] = 'publish';
								$data_array ['post_password'] = $poststatus;
							}
						} else {
							$data_array['status'] = 'publish';
						}
					}
					$review_array = array(
						'post_author' => '1',
						'post_date' => $review_date,
						'post_content' => $data_array['review_text'],
						'post_title' => $review_title,
						'post_status' => $data_array['status'],
						'comment_status' => 'closed',
						'ping_status' => 'closed',
						'post_password' => isset($data_array['post_password']) ? $data_array['post_password'] : '',
						'post_name' => $review_slug,
						'post_parent' => 0,
						'post_type' => 'wpcr3_review',
					);
					$reviewId = wp_insert_post($review_array);
					if(is_wp_error($reviewId)) {
						
						$core_instance->detailed_log[$line_number]['Message'] = "Can't insert this Review. " . $reviewId->get_error_message();
						$wpdb->get_results("UPDATE $log_table_name SET skipped = $skipped_count WHERE $unikey_name = '$unikey_value'");
						return $returnArray;
					}
					$guId = site_url() . '/?post_type=wpcr3_review&#038;p=' . $reviewId;

					wp_update_post(array('ID' => $reviewId, 'guid' => $guId));
					// Review meta information
					$review_meta_data = array(
						'wpcr3_review_ip'       => $data_array['review_ip'],
						'wpcr3_review_post'     => $data_array['review_post'],
						'wpcr3_review_name'     => $data_array['review_name'],
						'wpcr3_review_email'    => $data_array['review_email'],
						'wpcr3_review_rating'   => $data_array['review_rating'],
						'wpcr3_review_title'    => $data_array['review_title'],
						'wpcr3_review_website'  => $data_array['review_website'],
						'wpcr3_review_admin_response' => $data_array['review_admin_response'],
						'wpcr3_f1'  => isset($data_array['custom_field1']) ? $data_array['custom_field1'] : '',
                        'wpcr3_f2'  => isset($data_array['custom_field2']) ? $data_array['custom_field2'] : '',
                        'wpcr3_f3'  => isset($data_array['custom_field3']) ? $data_array['custom_field3'] : '',

					);
					foreach($review_meta_data as $metaKey => $metaValue) {
						update_post_meta($reviewId, $metaKey, $metaValue);
					}
				} else {
					$wpdb->insert($wpdb->wpcreviews, array('date_time' => $data_array['date_time'], 'review_name' => $data_array['review_name'], 'review_email' => $data_array['review_email'], 'review_ip' => $data_array['review_ip'], 'review_title' => $data_array['review_title'], 'review_text' => $data_array['review_text'], 'review_admin_response' => $data_array['review_admin_response'], 'status' => $data_array['status'], 'review_rating' => $data_array['review_rating'], 'review_website' => $data_array['review_website'], 'page_id' => $data_array['review_post']));
					$reviewId = $wpdb->insert_id;
					if(is_wp_error($reviewId)) {

						$core_instance->detailed_log[$line_number]['Message'] = "Can't insert this Review. " . $reviewId->get_error_message();
						$wpdb->get_results("UPDATE $log_table_name SET skipped = $skipped_count WHERE $unikey_name = '$unikey_value'");
						return $returnArray;
					}
				} 

				$mode_of_affect = 'Inserted';
				$core_instance->detailed_log[$line_number]['Message'] = 'Inserted Review ID: ' . $reviewId;
				if (isset($created_count)) {
				$wpdb->get_results("UPDATE $log_table_name SET created = $created_count WHERE $unikey_name = '$unikey_value'");
				}
				
			}
		} else {
			if($post_exists) {
				if($mode == 'Update' || $mode == 'Import-Update'){
						update_post_meta($post_id, 'wpcr3_enable', 1);
						update_post_meta($post_id, 'wpcr3_format', $reviewFormat);
						if(is_plugin_active('wp-customer-reviews/wp-customer-reviews-3.php')){
							$query = "select *from {$wpdb->prefix}posts where ID = '{$data_array['review_id']}' and post_type = 'wpcr3_review'";
							$id_results = $wpdb->get_results($query);
							$reviewId = $id_results[0]->ID;
							$review_date = current_time('mysql', 0);
							if(isset($data_array['date_time'])) {
								$review_date = date( 'Y-m-d H:i:s', strtotime( $data_array['date_time'] ) );
							}
							$review_title = $data_array['review_name'];
							$review_slug = preg_replace('/[^a-zA-Z0-9._\-\s]/', '', $review_title);
							$review_slug = wp_unique_filename('', $review_slug);
							if(isset($data_array['status'])) {
								$data_array['status'] = strtolower( $data_array['status'] );
							}
							if ($data_array['status'] != 'publish' && $data_array['status'] != 'private' && $data_array['status'] != 'draft' && $data_array['status'] != 'pending' && $data_array['status'] != 'sticky') {
								$stripPSF = strpos($data_array['status'], '{');
								if ($stripPSF === 0) {
									$poststatus = substr($data_array['status'], 1);
									$stripPSL = substr($poststatus, -1);
									if ($stripPSL == '}') {
										$postpwd = substr($poststatus, 0, -1);
										$data_array['status'] = 'publish';
										$data_array ['post_password'] = $postpwd;
									} else {
										$data_array['status'] = 'publish';
										$data_array ['post_password'] = $poststatus;
									}
								} else {
									$data_array['status'] = 'publish';
								}
							}
							$review_array = array(
								'post_author' => '1',
								'post_date' => $review_date,
								'post_content' => $data_array['review_text'],
								'post_title' => $review_title,
								'post_status' => $data_array['status'],
								'comment_status' => 'closed',
								'ping_status' => 'closed',
								'post_password' => isset($data_array['post_password']) ? $data_array['post_password'] : '',
								'post_name' => $review_slug,
								'post_parent' => 0,
								'post_type' => 'wpcr3_review',
							);
							if ( $reviewId == null ) {
							//	$reviewId = wp_insert_post($review_array);
							//	if(is_wp_error($reviewId)) {
								if($mode == 'Import-Update'|| $mode == 'Update'){
									$reviewId = wp_insert_post($review_array);
									if(is_wp_error($reviewId)) {
										
										$core_instance->detailed_log[$line_number]['Message'] = "Can't insert this Review. " . $reviewId->get_error_message();
										$wpdb->get_results("UPDATE $log_table_name SET skipped = $skipped_count WHERE $unikey_name = '$unikey_value''");
										return $returnArray;
									}
									$core_instance->detailed_log[$line_number]['Message'] = 'Inserted Review ID: ' . $reviewId;
									$wpdb->get_results("UPDATE $log_table_name SET created = $created_count WHERE $unikey_name = '$unikey_value'");
								}
								else{
									$core_instance->detailed_log[$line_number]['Message'] = "Skipped. " ;
									$wpdb->get_results("UPDATE $log_table_name SET skipped = $skipped_count WHERE $unikey_name = '$unikey_value'");	
									return $returnArray;
								}
									
							//	}
								
							} else {
								$review_array['ID'] = $reviewId;
								wp_update_post($review_array);
								$mode_of_affect = 'Updated';

								$core_instance->detailed_log[$line_number]['Message'] = 'Updated Review ID: ' . $reviewId;
								if (isset($updated_count)) {
								$wpdb->get_results("UPDATE $log_table_name SET updated = $updated_count WHERE $unikey_name = '$unikey_value'");
								}
							}
							$guId = site_url() . '/?post_type=wpcr3_review&#038;p=' . $reviewId;
							wp_update_post(array('ID' => $reviewId, 'guid' => $guId));
							// Review meta information
							$review_meta_data = array(
								'wpcr3_review_ip'       => $data_array['review_ip'],
								'wpcr3_review_post'     => $data_array['review_post'],
								'wpcr3_review_name'     => $data_array['review_name'],
								'wpcr3_review_email'    => $data_array['review_email'],
								'wpcr3_review_rating'   => $data_array['review_rating'],
								'wpcr3_review_title'    => $data_array['review_title'],
								'wpcr3_review_website'  => $data_array['review_website'],
								'wpcr3_review_admin_response' => $data_array['review_admin_response'],
								'wpcr3_f1'  => isset($data_array['custom_field1']) ? $data_array['custom_field1'] : '',
                                'wpcr3_f2'  => isset($data_array['custom_field2']) ? $data_array['custom_field2'] : '',
                                'wpcr3_f3'  => isset($data_array['custom_field3']) ? $data_array['custom_field3'] : '',

							);
							foreach($review_meta_data as $metaKey => $metaValue) {
								update_post_meta($reviewId, $metaKey, $metaValue);
							}
						} else {
							$query = "select id from $wpdb->wpcreviews where (review_title = '{$data_array['review_title']}') and (page_id = '{$data_array['review_post']}') ";
							$id_results = $wpdb->get_results( $query );
							$reviewId   = $id_results[0]->id;
							if ( $reviewId == null ) {
								$core_instance->detailed_log[$line_number]['Message'] = 'Skipped. ';
								$wpdb->get_results("UPDATE $log_table_name SET created = $created_count WHERE $unikey_name = '$unikey_value'");
								return $returnArray;
							} else {
								$wpdb->update( $wpdb->wpcreviews, array(
									'date_time'       => $data_array['date_time'],
									'review_name'   => $data_array['review_name'],
									'id'              => $reviewId,
									'review_email'  => $data_array['review_email'],
									'review_ip'     => $data_array['review_ip'],
									'review_title'    => $data_array['review_title'],
									'review_text'     => $data_array['review_text'],
									'review_admin_response' => $data_array['review_admin_response'],
									'status'          => $data_array['status'],
									'review_rating'   => $data_array['review_rating'],
									'review_website'  => $data_array['review_website'],
									'page_id'     => $data_array['review_post']
								) );
								$mode_of_affect = 'Updated';

								$core_instance->detailed_log[$line_number]['Message'] = 'Updated Review ID: ' . $reviewId;
								$wpdb->get_results("UPDATE $log_table_name SET updated = $updated_count WHERE $unikey_name = '$unikey_value'");
							}
						}

				}
			}
		}
		return array('ID' => $reviewId, 'MODE' => $mode_of_affect);
    }
}