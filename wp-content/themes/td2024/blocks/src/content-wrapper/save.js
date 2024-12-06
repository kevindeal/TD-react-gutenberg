import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, store as blockEditorStore } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

export default function save( { attributes, clientId } ) {
	const { colorVariant, imageLoc, orientation, rowIndex, layout, vSplit, title, displayTitleOnMobile, displayTitleOnTablet, displayTitleOnDesktop} = attributes;
	let showVSplit = orientation === 'vertical';

	const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
	}

	const getPaddingClasses = () => {
		
		if(layout !== 'horizontal') {
			return '';
		}

		if(rowIndex % 2 != 0) {
			return '';// imageLoc == 'left' ? 'md:px-28' : '';
		}else{
			return '';//imageLoc == 'left' ? '' : 'md:px-28';
		}

		return '';

	}

	const getOrderClasses = () => {

		let addClasses = '';

		if(layout !== 'horizontal') {
			return 'flex-col-reverse';
		}

		addClasses = imageLoc == 'left' ? `lg:flex-row-reverse` : `lg:flex-row`;


		return `${addClasses}`;// md:${layout == 'horizontal' ? rowIndex % 2 == 0 ? 'flex-row' : 'flex-row-reverse' : 'flex-col-reverse'}`;
	}

	return (
		<>
			<div className={`content-wrapper ${imageLoc} flex flex-col-reverse gap-8 ${getPaddingClasses()} ${getOrderClasses()} `}>
				<InnerBlocks.Content />
			</div>
		</>
	);
}
