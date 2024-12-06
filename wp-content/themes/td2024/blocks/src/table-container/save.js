import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, RichText, useInnerBlocksProps, store as blockEditorStore } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

export default function save( { attributes, clientId } ) {
	const blockProps = useBlockProps.save( {
		className: 'w-full'
	} );
	const {
		blockId,
		colorVariant,
		vSplit,
		layout,
		heading,
		displayTitleOnMobile,
		displayTitleOnTablet,
		displayTitleOnDesktop,
		subheading,
		displaySubheadOnMobile,
		displaySubheadOnTablet,
		displaySubheadOnDesktop,
		subtitle,
		displaySubtitleOnMobile,
		displaySubtitleOnTablet,
		displaySubtitleOnDesktop,
		ctaText,
		ctaUrl,
		displayCTAOnMobile,
		displayCTAOnTablet,
		displayCTAOnDesktop,
		tableNumColumns,
		tableNumRows,
		displayHeaders,
		tableHeaders
	} = attributes;
	const className = blockProps.className;

	const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
	}
	const wrapperClasses = '';

	const renderTableHeadings = () =>{ 

		return (<>
		{tableHeaders.map((value, index) => {
			return (<th className='px-10 py-7 text-left'>
				<h3 className='relative title font-display font-bold text-xl'>{value}</h3>
			</th>);
		})}
		</>);
	}

	return (
		<>
			<div id={`td-table-${blockId}`} { ...blockProps }>
				<div className={`table-outer-wrapper w-full p-4 md:px-[110px] md:py-[60px] ${colorVariant == 'DARK' ? 'bg-primaryBlue-100 text-white' : ''}`}>
					{heading && (<div className={`td-alert-heading flex-1 flex-col mb-4 md:mb-[60px] ${getVisibilityClasses(displayTitleOnDesktop, displayTitleOnTablet, displayTitleOnMobile)}`}>
						<h2 className={`relative title font-header font-light pb-4 text-5xl leading-5 mb-2.5 ${getVisibilityClasses(displayTitleOnDesktop, displayTitleOnTablet, displayTitleOnMobile)}`}>{heading}</h2>
						<h3 className={`relative title font-display font-normal pb-4 text-l leading-6 ${getVisibilityClasses(displaySubheadOnDesktop, displaySubheadOnTablet, displaySubheadOnMobile)}`}>{subheading}</h3>
					</div>)}
					{subtitle && (<div className={`table-title `}>
						<h4 className={`relative title font-display font-medium mb-4 md:mb-[36px] pb-4 text-3xl leading-6 ${getVisibilityClasses(displaySubtitleOnDesktop, displaySubtitleOnTablet, displaySubtitleOnMobile)}`}>{subtitle}</h4>
					</div>)}
					<div className={wrapperClasses}>
						<table className={`td-table  ${colorVariant == 'DARK' ? 'table-dark' :''} ${layout} ${displayHeaders ? '' : 'headerless'} border-separate w-full`} cellPadding={0} cellSpacing={0} border={0}>
							{ displayHeaders && (<thead cellPadding={0} cellSpacing={0}>
								<tr  cellPadding={0} cellSpacing={0}>
									{renderTableHeadings()}
								</tr>
							</thead>)}
							<tbody  cellPadding={0} cellSpacing={0} {...useInnerBlocksProps.save()}>
							</tbody>
						</table>
					</div>
					{(ctaText && ctaUrl) && (
						<div className='cta-holder'>
							<RichText.Content
								tagName="a" // Use an a tag here
								className={`btn-secondary font-display text-l font-medium text-blue-100 inline-flex`}
								href={ctaUrl} // Set the href attribute to the button URL
								value={ctaText}
							/>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
