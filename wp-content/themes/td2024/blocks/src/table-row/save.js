import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, RichText, useInnerBlocksProps, store as blockEditorStore } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

export default function save( { attributes, clientId } ) {
	const blockProps = useBlockProps.save( {
		className: 'tdkb-alert',
	} );
	const { colorVariant, orientation, heading, displayTitleOnMobile, displayTitleOnTablet, displayTitleOnDesktop} = attributes;
	const className = blockProps.className;
	let showVSplit = orientation === 'vertical';

	const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
	}

	return (
		<>
			<tr {...useInnerBlocksProps.save()}></tr>
		</>
	);
}
