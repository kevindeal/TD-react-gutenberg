<?php
/**
 * The template for displaying product search form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/product-searchform.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>
<div class="widget woocommerce widget_product_search widget-container sidebar-widgets">
	<h3 class="widget-title intcus_aapf_widget-title" style=""><span>Search Integrations</span></h3>
	<div class="search-form-wrapper">
		<form role="search" method="get" class="woocommerce-product-search"  action="<?php echo esc_url( home_url( '/data-integrations/' ) ); ?>">
			<label class="screen-reader-text" for="woocommerce-product-search-field-<?php echo isset( $index ) ? absint( $index ) : 0; ?>"><?php esc_html_e( 'Search for:', 'woocommerce' ); ?></label>
			<input type="search" id="woocommerce-product-search-field-<?php echo isset( $index ) ? absint( $index ) : 0; ?>" class="search-field" placeholder="<?php echo esc_attr__( 'Keyword', 'woocommerce' ); ?>" value="<?php echo get_search_query(); ?>" name="s" /><button type="submit" value="<?php echo esc_attr_x( '', 'submit button', 'woocommerce' ); ?>"><img class="search-mobile-icon" src="https://www.treasuredata.com/wp-content/uploads/search-icon.svg" style="width:15px; height:15px;"></button>
			<input type="reset" class="button standard reset" value="Clear" id="clear"  style="display:none;"/>
			<input type="hidden" name="post_type" value="product" />
		</form>
	</div>
</div>