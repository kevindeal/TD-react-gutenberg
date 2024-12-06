<?php

if (function_exists('acf_register_block_type')) {
	add_action('acf/init', 'register_acf_block_types');

	function register_acf_block_types() {

		acf_register_block_type ( 
			array(
				'name' => 'faq',
				'title' => 'FAQ',
				'description' => 'A block for displaying a values framework tabbed content x accordion module',
				'render_template' => 'template-parts/blocks/faq-accordion.php',
				'icon' => '',
				'keywords' => array('td', 'value', 'framework'),
				'render_callback' => 'block_render',
				'supports' => array('anchor' => true),
				'example' => array(
					'attributes' => array(
						'mode' => 'preview', // Important!
						'data' => array(
							// 'image' => '<img src="' . get_template_directory_uri() . '/assets/images/module-previews/Value-framework.png' . '" style="display: block; width: 100%; margin: 0 auto;">'
						),
					),
				),
				'category' => 'td',
			)
		);
    	acf_register_block_type ( 
			array(
				'name' => 'masthead_promos',
				'title' => 'Masthead Promos',
				'description' => 'A repeater for displaying a global masthead banner on page templates depending on URL',
				'render_template' => 'template-parts/blocks/masthead-promos.php',
				'icon' => '',
				'keywords' => array('td', 'masthead', 'banner'),
				'render_callback' => 'block_render',
				'example' => array(
					'attributes' => array(
						'mode' => 'preview', // Important!
						'data' => array(
							// 'image' => '<img src="' . get_template_directory_uri() . '/assets/images/module-previews/Value-framework.png' . '" style="display: block; width: 100%; margin: 0 auto;">'
						),
					),
				),
				'category' => 'td',
			)
		);
		acf_register_block_type ( 
			array(
				'name' => 'form_fill',
				'title' => 'Form Fill',
				'description' => 'A block for displaying a form with a WYSIWYG editor for header and paragraph text.',
				'render_template' => 'template-parts/blocks/content-form-fill.php',
				'icon' => '',
				'keywords' => array('td', 'form', 'fill'),
				'render_callback' => 'block_render',
				'example' => array(
					'attributes' => array(
						'mode' => 'preview', // Important!
						'data' => array(
							// 'image' => '<img src="' . get_template_directory_uri() . '/assets/images/module-previews/Value-framework.png' . '" style="display: block; width: 100%; margin: 0 auto;">'
						),
					),
				),
				'category' => 'td',
			)
		);
		acf_register_block_type ( 
			array(
				'name' => 'open_positions',
				'title' => 'Open Positions',
				'description' => 'A block for displaying open positions from Greenhouse',
				'render_template' => 'template-parts/blocks/content-open-positions.php',
				'icon' => '',
				'keywords' => array('td', 'open', 'positions'),
				'render_callback' => 'block_render',
				'example' => array(
					'attributes' => array(
						'mode' => 'preview', // Important!
						'data' => array(
							// 'image' => '<img src="' . get_template_directory_uri() . '/assets/images/module-previews/Value-framework.png' . '" style="display: block; width: 100%; margin: 0 auto;">'
						),
					),
				),
				'category' => 'td',
			)
		);
		acf_register_block_type ( 
			array(
				'name' => 'accordion_img',
				'title' => 'Accordion Image',
				'description' => 'A block for displaying open positions from Greenhouse',
				'render_template' => 'template-parts/blocks/faq-img.php',
				'icon' => '',
				'keywords' => array('td', 'open', 'positions'),
        		'render_callback' => 'block_render',
				'supports' => array('anchor' => true),
				'example' => array(
					'attributes' => array(
						'mode' => 'preview', // Important!
						'data' => array(
							// 'image' => '<img src="' . get_template_directory_uri() . '/assets/images/module-previews/Value-framework.png' . '" style="display: block; width: 100%; margin: 0 auto;">'
						),
					),
				),
				'category' => 'td',
			)
		);
    acf_register_block_type ( 
			array(
				'name' => 'case_studies',
				'title' => 'Case Studies',
				'description' => 'A block for displaying case studies',
				'render_template' => 'template-parts/blocks/case-studies.php',
				'icon' => '',
				'keywords' => array('td', 'case', 'studies', 'study'),
				'render_callback' => 'block_render',
				'example' => array(
					'attributes' => array(
						'mode' => 'preview', // Important!
						'data' => array(
							// 'image' => '<img src="' . get_template_directory_uri() . '/assets/images/module-previews/Value-framework.png' . '" style="display: block; width: 100%; margin: 0 auto;">'
						),
					),
				),
				'category' => 'td',
			)
		);
		acf_register_block_type ( 
			array(
				'name' => 'related_resources',
				'title' => 'Related Resources',
				'description' => 'A block for displaying related resources',
				'render_template' => 'template-parts/blocks/related-resources.php',
				'icon' => '',
				'keywords' => array('td', 'resource', 'resources'),
				'render_callback' => 'block_render',
				'example' => array(
					'attributes' => array(
						'mode' => 'preview', // Important!
						'data' => array(
							// 'image' => '<img src="' . get_template_directory_uri() . '/assets/images/module-previews/Value-framework.png' . '" style="display: block; width: 100%; margin: 0 auto;">'
						),
					),
				),
				'category' => 'td',
			)
		);
		acf_register_block_type ( 
			array(
				'name' => 'logo_banner',
				'title' => 'Logo Banner',
				'description' => 'A block for displaying logos in a line.',
				'render_template' => 'template-parts/blocks/logo-banner.php',
				'icon' => '',
				'keywords' => array('td', 'logo', 'logos', 'ticker', 'animated'),
				'render_callback' => 'block_render',
				'example' => array(
					'attributes' => array(
						'mode' => 'preview', // Important!
						'data' => array(
							// 'image' => '<img src="' . get_template_directory_uri() . '/assets/images/module-previews/Value-framework.png' . '" style="display: block; width: 100%; margin: 0 auto;">'
						),
					),
				),
				'category' => 'td',
			)
		);

		acf_register_block_type ( 
			array(
				'name' => 'sub_navigation',
				'title' => 'Sub-Navigation',
				'description' => 'A block for displaying a row of links for the current page and external sources',
				'render_template' => 'template-parts/blocks/sub-navigation.php',
				'icon' => '',
				'keywords' => array('td', 'navigation', 'hashtag', 'link'),
				'render_callback' => 'block_render',
				'example' => array(
					'attributes' => array(
						'mode' => 'preview', // Important!
						'data' => array(
							// 'image' => '<img src="' . get_template_directory_uri() . '/assets/images/module-previews/Value-framework.png' . '" style="display: block; width: 100%; margin: 0 auto;">'
						),
					),
				),
				'category' => 'td',
			)
		);

		acf_register_block_type ( 
			array(
				'name' => 'videos_block',
				'title' => 'Videos Container',
				'description' => 'A block for displaying Videos',
				'render_template' => 'template-parts/blocks/videos-block.php',
				'icon' => '',
				'keywords' => array('td', 'videos', 'youtube', 'wistia'),
				'render_callback' => 'block_render',
				'example' => array(
					'attributes' => array(
						'mode' => 'preview', // Important!
						'data' => array(
							// 'image' => '<img src="' . get_template_directory_uri() . '/assets/images/module-previews/Value-framework.png' . '" style="display: block; width: 100%; margin: 0 auto;">'
						),
					),
				),
				'category' => 'td',
			)
		);

		acf_register_block_type ( 
			array(
				'name' => 'cta',
				'title' => 'CTA Block',
				'description' => 'A block for displaying a block-style CTA',
				'render_template' => 'template-parts/blocks/cta-block.php',
				'icon' => '',
				'keywords' => array('cta', 'block'),
				'render_callback' => 'block_render',
				'example' => array(
					'attributes' => array(
						'mode' => 'preview', // Important!
						'data' => array(
							// 'image' => '<img src="' . get_template_directory_uri() . '/assets/images/module-previews/Value-framework.png' . '" style="display: block; width: 100%; margin: 0 auto;">'
						),
					),
				),
				'category' => 'td',
			)
		);
	}
}
?>