import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, store as blockEditorStore } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

export default function save( { attributes, clientId } ) {
	const { colorVariant, rowIndex, orientation, colSpan, defaultContent, layout, title, displayTitleOnMobile, displayTitleOnTablet, displayTitleOnDesktop} = attributes;
	let showVSplit = orientation === 'vertical';

	const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
	}

	const alignmentClasses = () => {
		return defaultContent == 'image' ? '' : 'justify-start items-center';
	}

	return (
		<>
			<div className={ `content-section row-${rowIndex} flex flex-${colSpan} ${alignmentClasses()}` }>
					<InnerBlocks.Content />
			</div>
		</>
	);
}
