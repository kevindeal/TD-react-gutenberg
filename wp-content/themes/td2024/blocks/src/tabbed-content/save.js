import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, store as blockEditorStore } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

export default function save( { attributes, clientId } ) {
	const blockProps = useBlockProps.save( {
		className: 'tdkb-alert',
	} );
	const { referenceId, colorVariant, orientation, vSplit, title, numTabs, displayTitleOnMobile, displayTitleOnTablet, displayTitleOnDesktop, tabInfo} = attributes;
	const className = blockProps.className;
	let existingInnerBlocks = tabInfo;
	let showVSplit = orientation === 'vertical';

	const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'block' : 'hidden'} ${tablet ? 'md:block' : 'md:hidden'} ${desktop ? 'lg:block' : 'lg:hidden'}`;
	}


	const renderTabs = () => {
		let tabList = existingInnerBlocks.map((value, i) => {
			//${getVisibilityClasses(value.attributes.isVisibleDesktop, value.attributes.isVisibleTablet, value.attributes.isVisibleMobile)}
			//{value.attributes.tabName}
			return (
				<li data-push-state-id={value.pushStateID}
				className={`m-8 ml-2 mr-[70px] md:ml-0 flex-row items-center ${getVisibilityClasses(value.isVisibleDesktop, value.isVisibleTablet, value.isVisibleMobile)}`} >
					<h3 className={`text-nowrap ${orientation == 'horizontal' ? '' : 'md:text-wrap'} text-base md:text-l leading-eyebrow md:leading-card-header`}>{value.tabName}</h3>
				</li>
			)
		});
		let wrapperClasses = 'tab-wrapper font-display text-primaryBlue-100';
		wrapperClasses = `${wrapperClasses} ${showVSplit ? "tab-wrapper-vertical flex-col md:flex-row" : "tab-wrapper-horizontal flex-col"}`;
		wrapperClasses = `${wrapperClasses} ${colorVariant == 'DARK' ? "tab-dark" : "tab-light" }`;

		let verticalListSpace = 'md:flex-1';
		let verticalContainerSpace = 'md:flex-3';
		if(vSplit === '33/66'){
			verticalContainerSpace = 'md:flex-2';
		} else if(vSplit === '50/50'){
			verticalContainerSpace = 'md:flex-1';
		} else if(vSplit =='66/33'){
			verticalContainerSpace = 'md:flex-1';
			verticalListSpace = 'md:flex-2';
		} else if(vSplit =='75/25'){
			verticalContainerSpace = 'md:flex-1';
			verticalListSpace = 'md:flex-3';
		}

		const anchorId = `tabbed-content-${referenceId}`; 
		return (
			<div className={`${colorVariant == 'DARK' ? "tab-dark" : "tab-light"} py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical`}>
				<a name={anchorId} />
				<div class="container mx-auto">
					<div className={`td-alert-heading flex-1 mb-[18px] md:mb-16 ${getVisibilityClasses(displayTitleOnDesktop, displayTitleOnTablet, displayTitleOnMobile)}`}>
						<h2 className='font-header text-[30px] md:text-5xl'>{title}</h2>
					</div>
					<div className={wrapperClasses}>
						<div className={`link-container flex ${verticalListSpace} ${showVSplit ? `flex-col md:flex-row md:items-start`: 'flex-col'}`}>
							<ul className={`tab-links flex flex-1 font-display text-l border-solid border-b overflow-scroll md:overflow-auto ${orientation == 'horizontal' ? 'overflow-scroll' : ''} ${showVSplit ? 'flex-row md:flex-col border-b md:border-b-0 md:border-r': 'flex-row border-b'} `}>
								{tabList}
							</ul>
							<div className={`hidden absolute scroll-right-wrapper ${colorVariant == 'DARK' ? 'scroll-dark' : 'scroll-light'}`}>
								<button className={`scroll-right-arrow`}></button>
							</div>
						</div> 
						<div className={`tab-container w-full ${orientation == 'horizontal' ? 'md:pb-16 md:pt-[60px]' : ''} md:px-28 ${verticalContainerSpace}`}>
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<>
			<div { ...blockProps } className={ className }>
				{/* <InnerBlocks.Content /> */}
				{renderTabs()}
			</div>
		</>
	);
}
