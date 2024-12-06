import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, RichText, store as blockEditorStore } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

export default function save( { attributes, clientId } ) {
	const blockProps = useBlockProps.save( {
		className: 'tdkb-alert',
	} );
	const { referenceId, colorVariant, orientation, heading, displayTitleOnMobile, displayTitleOnTablet, displayTitleOnDesktop} = attributes;
	const className = blockProps.className;
	let showVSplit = orientation === 'vertical';

	const anchorId = `content-container-${referenceId}`;

	const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
	}

	return (
		<>
			<div id={anchorId} { ...blockProps } className={`${colorVariant == 'DARK' ? 'bg-primaryBlue-100 text-white py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical' : 'py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical'}`}>
				<div className={`container mx-auto ${heading ? 'container-with-heading' : 'container-without-heading'}`}>
				{ heading && (
					<RichText.Content
						tagName="h2"
						value={heading}
						className={`text-5xl font-header pb-[10px]  ${getVisibilityClasses(displayTitleOnDesktop, displayTitleOnTablet, displayTitleOnMobile)}`}
					/>
				)}
					<div className="content-container-wrapper flex flex-col gap-8">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</>
	);
}
