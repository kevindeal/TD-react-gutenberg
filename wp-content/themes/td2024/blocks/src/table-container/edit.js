/**
 * External dependencies
 */
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	AlignmentControl,
	BlockControls,
	InspectorControls,
	InnerBlocks,
	useInnerBlocksProps,
	URLInput,
	store as blockEditorStore
} from '@wordpress/block-editor';

import { useSelect, useDispatch, AsyncModeProvider } from '@wordpress/data';

import {
	TextControl,
	ToggleControl,
	RadioControl,
	Panel,
	PanelBody,
	PanelRow,
	RangeControl,
	SelectControl,
	Button,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import { useState, useEffect } from '@wordpress/element';

import './editor.scss';
import '../../../static/output.css';

export default function Edit( { clientId, attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	const existingInnerBlocks = useSelect(
		(select) => {
			return select(blockEditorStore).getBlock(clientId).innerBlocks;
		},
		[clientId]
	);

	useEffect(()=>{
		setAttributes({blockId: clientId});
	}, [clientId]);
	// console.log("Existing Inner Blocks", existingInnerBlocks);
	// console.log("Block Props", blockProps, className);
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

	// console.log("All Attributes",  colorVariant,
	// layout,
	// heading,
	// displayTitleOnMobile,
	// displayTitleOnTablet,
	// displayTitleOnDesktop,
	// subheading,
	// displaySubheadOnMobile,
	// displaySubheadOnTablet,
	// displaySubheadOnDesktop,
	// subtitle,
	// displaySubtitleOnMobile,
	// displaySubtitleOnTablet,
	// displaySubtitleOnDesktop,
	// ctaText,
	// ctaUrl,
	// displayCTAOnMobile,
	// displayCTAOnTablet,
	// displayCTAOnDesktop,
	// tableNumColumns,
	// tableNumRows,
	// tableHeaders);

	console.log("Current Table Headers", tableHeaders);

	const onChangeColorVariant = ( newVariant ) => {
		setAttributes( { colorVariant: newVariant } );
		for(let tab of existingInnerBlocks){
			console.log("Tab Contents", tab);
			tab.attributes.colorVariant = newVariant;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	};

	const onChangeLayout = ( newVSplit ) => {
		setAttributes( { layout: newVSplit } );
		for(let tab of existingInnerBlocks){
			console.log("Tab Contents", tab.attributes.layout, newVSplit);
			tab.attributes.layout = newVSplit;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	};

	const onChangeVSplit = ( newVSplit ) => {
		setAttributes( { vSplit: newVSplit } );
		for(let tab of existingInnerBlocks){
			console.log("Tab Contents", tab);
			tab.attributes.vSplit = newVSplit;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	};

	const onChangeTitle= ( newTitle ) => {
		setAttributes( { heading: newTitle } );
	};
	const onChangeTitleMobile = ( newTitle ) => {
		setAttributes( { displayTitleOnMobile: newTitle } );
	};
	const onChangeTitleTablet = ( newTitle ) => {
		setAttributes( { displayTitleOnTablet: newTitle } );
	};
	const onChangeTitleDesktop = ( newTitle ) => {
		setAttributes( { displayTitleOnDesktop: newTitle } );
	};

	const onChangeSubhead= ( newTitle ) => {
		setAttributes( { subheading: newTitle } );
	};
	const onChangeSubheadMobile = ( newTitle ) => {
		setAttributes( { displaySubheadOnMobile: newTitle } );
	};
	const onChangeSubheadTablet = ( newTitle ) => {
		setAttributes( { displaySubheadOnTablet: newTitle } );
	};
	const onChangeSubheadDesktop = ( newTitle ) => {
		setAttributes( { displaySubheadOnDesktop: newTitle } );
	};

	const onChangeSubtitle= ( newTitle ) => {
		setAttributes( { subtitle: newTitle } );
	};
	const onChangeSubtitleMobile = ( newTitle ) => {
		setAttributes( { displaySubtitleOnMobile: newTitle } );
	};
	const onChangeSubtitleTablet = ( newTitle ) => {
		setAttributes( { displaySubtitleOnTablet: newTitle } );
	};
	const onChangeSubtitleDesktop = ( newTitle ) => {
		setAttributes( { displaySubtitleOnDesktop: newTitle } );
	};

	const onChangeCTAText = ( newTitle ) => {
		setAttributes( { ctaText: newTitle } );
	};
	const onChangeCTAUrl = ( newTitle ) => {
		setAttributes( { ctaUrl: newTitle } );
	};
	const onChangeCTAMobile = ( newTitle ) => {
		setAttributes( { displayCTAOnMobile: newTitle } );
	};
	const onChangeCTATablet = ( newTitle ) => {
		setAttributes( { displayCTAOnTablet: newTitle } );
	};
	const onChangeCTADesktop = ( newTitle ) => {
		setAttributes( { displayCTAOnDesktop: newTitle } );
	};

	const onChangeDisplayHeaders = ( newTitle ) => {
		setAttributes( { displayHeaders: newTitle } );
	};

	const onPressAddRowButton = () =>{
		let newBlocks = [...existingInnerBlocks];
		let newBlock = createBlocksFromInnerBlocksTemplate([['td/table-row', {tableHeaders: tableHeaders}]]);
		newBlocks.push(newBlock[0]);
		replaceInnerBlocks(clientId, newBlocks);
	}

	const onPressRemoveRowButton = () =>{
		let newBlocks = [...existingInnerBlocks];
		newBlocks.pop();
		replaceInnerBlocks(clientId, newBlocks);
	}

	const onPressAddColumnButton = () =>{
		let newHeaders = [...tableHeaders];
		newHeaders.push('Heading ' + (tableHeaders.length + 1));
		setAttributes({ tableHeaders: newHeaders});

		for(let block of existingInnerBlocks){
			block.attributes.tableHeaders = newHeaders;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	}

	const onPressRemoveColumnButton = () =>{
		let newHeaders = [...tableHeaders];
		newHeaders.pop();
		setAttributes({ tableHeaders: newHeaders});

		for(let block of existingInnerBlocks){
			block.attributes.tableHeaders = newHeaders;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	}

	const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
	}

	const onChangeTableHeading = (newValue, key) => {

		console.log("Table heading changed", key, newValue, tableHeaders);
		let cloneHeaders = [...tableHeaders];
		if(tableHeaders[key] && cloneHeaders[key]){
			cloneHeaders[key] = newValue;
		}
		setAttributes({ tableHeaders: cloneHeaders});

		for(let block of existingInnerBlocks){
			block.attributes.tableHeaders = cloneHeaders;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	};

	const renderTableHeadings = () =>{ 

		return (<>
		{tableHeaders.map((value, index) => {
			console.log("Key and value", index, value);
			return (<th className='px-10 py-7 text-left'>
				<RichText
				tagName="h3"
				className={`relative title font-display font-bold text-xl`} // Add the selected option as a class
				value={value}
				onChange={(newVal)=>{ onChangeTableHeading(newVal, index);}}
				placeholder={__("Heading Text Here", "gutenpride")}
				/>
			</th>);
		})}
		</>);
	}

	const wrapperClasses = '';
	let showVSplit = layout === 'horizontal';

	return (
		<>
		<InspectorControls group="styles">
			<Panel>
				<PanelBody
					title={ __( 'Visual Settings', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleGroupControl label="Color Variant" value={colorVariant} onChange={onChangeColorVariant} isBlock>
									<ToggleGroupControlOption value="DARK" label="Dark" />
									<ToggleGroupControlOption value="LIGHT" label="Light" />
								</ToggleGroupControl>
							</div>
						</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Heading Settings', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleControl label="Visible on Desktop?" checked={displayTitleOnDesktop} onChange={onChangeTitleDesktop} />
								<ToggleControl label="Visible on Tablet?" checked={displayTitleOnTablet} onChange={onChangeTitleTablet} />
								<ToggleControl label="Visible on Mobile?" checked={displayTitleOnMobile}  onChange={onChangeTitleMobile} /> 
							</div>
						</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Subheading Settings', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleControl label="Visible on Desktop?" checked={displaySubheadOnDesktop} onChange={onChangeSubheadDesktop} />
								<ToggleControl label="Visible on Tablet?" checked={displaySubheadOnTablet} onChange={onChangeSubheadTablet} />
								<ToggleControl label="Visible on Mobile?" checked={displaySubheadOnMobile}  onChange={onChangeSubheadMobile} /> 
							</div>
						</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Table Title Settings', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleControl label="Visible on Desktop?" checked={displaySubtitleOnDesktop} onChange={onChangeSubtitleDesktop} />
								<ToggleControl label="Visible on Tablet?" checked={displaySubtitleOnTablet} onChange={onChangeSubtitleTablet} />
								<ToggleControl label="Visible on Mobile?" checked={displaySubtitleOnMobile}  onChange={onChangeSubtitleMobile} /> 
							</div>
						</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'CTA Settings', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleControl label="Visible on Desktop?" checked={displayCTAOnDesktop} onChange={onChangeCTADesktop} />
								<ToggleControl label="Visible on Tablet?" checked={displayCTAOnTablet} onChange={onChangeCTATablet} />
								<ToggleControl label="Visible on Mobile?" checked={displayCTAOnMobile}  onChange={onChangeCTAMobile} /> 
							</div>
						</PanelRow>
				</PanelBody>
		</Panel>

		</InspectorControls>
			<InspectorControls>
				<Panel>
					<PanelBody
					title={__('Key Values', 'content-container')}
					style={{width: "100%"}}
					initialOpen={true}
					>
						<PanelRow style={{width: "100%"}}>
						<div style={{width:"100%"}}>
							<RadioControl
								label="Which table variant?"
								selected={ layout }
								options={ [
									{ label: 'Colored', value: 'colored' },
									{ label: 'Bordered Only', value: 'bordered' },
									{ label: 'Borderless', value: 'borderless'}
								] }
								onChange={ onChangeLayout }
							/>
							</div>
                    </PanelRow>
					<PanelRow>
						<ToggleControl label="Display Table Headers?" checked={displayHeaders} onChange={onChangeDisplayHeaders} />
					</PanelRow>
					<PanelRow>
						<Button icon="plus-alt" isPrimary text="Add Column" onClick={onPressAddColumnButton} />
						<Button icon="minus" isPrimary text="Remove Column" onClick={onPressRemoveColumnButton} />
					</PanelRow>
					<PanelRow>
						<Button icon="plus-alt" isPrimary text="Add Row" onClick={onPressAddRowButton} />
						<Button icon="minus" isPrimary text="Remove Row" onClick={onPressRemoveRowButton} />
					</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>


			<div { ...blockProps }>
				<div className={`table-outer-wrapper p-4 md:px-[110px] md:py-[60px] ${colorVariant == 'DARK' ? 'bg-primaryBlue-100 text-white' : ''}`}>
					<div className={`td-alert-heading flex-1 flex-col ${getVisibilityClasses(displayTitleOnDesktop, displayTitleOnTablet, displayTitleOnMobile)} md:mb-[60px]`}>
						<RichText
                            tagName="h2"
                            className={`relative title font-header pb-4 text-5xl leading-5 ${getVisibilityClasses(displayTitleOnDesktop, displayTitleOnTablet, displayTitleOnMobile)}`} // Add the selected option as a class
                            value={heading}
                            onChange={onChangeTitle}
                            placeholder={__("Heading Text Here", "gutenpride")}
                        />
						<RichText
                            tagName="h3"
                            className={`relative title font-display pb-4 text-l leading-6 ${getVisibilityClasses(displaySubheadOnDesktop, displaySubheadOnTablet, displaySubheadOnMobile)}`} // Add the selected option as a class
                            value={subheading}
                            onChange={onChangeSubhead}
                            placeholder={__("Subheading Text Here", "gutenpride")}
                        />
					</div>
					<div className={`table-title`}>
						<RichText
                            tagName="h4"
                            className={`relative title font-display font-medium mb-4 md:mb-[36px] pb-4 text-3xl leading-6 ${getVisibilityClasses(displaySubtitleOnDesktop, displaySubtitleOnTablet, displaySubtitleOnMobile)}`} // Add the selected option as a class
                            value={subtitle}
                            onChange={onChangeSubtitle}
                            placeholder={__("Table Title Text Here", "gutenpride")}
                        />
					</div>
					<div className={wrapperClasses}>
						<table className={`td-table  ${colorVariant == 'DARK' ? 'table-dark' :''} ${layout} ${displayHeaders ? '' : 'headerless'} border-separate w-full`} cellPadding={0} cellSpacing={0} border={0}>
							{ displayHeaders && (<thead cellPadding={0} cellSpacing={0}>
								<tr  cellPadding={0} cellSpacing={0}>
									{renderTableHeadings()}
								</tr>
							</thead>)}
							<tbody  cellPadding={0} cellSpacing={0} {...useInnerBlocksProps({}, { allowedBlocks: ['td/table-row'], template: [['td/table-row'], ['td/table-row'], ['td/table-row']]})}>
							</tbody>
						</table>
					</div>
					<div className={`cta-wrapper  ${getVisibilityClasses(displayCTAOnDesktop, displayCTAOnTablet, displayCTAOnMobile)}`}>
						<RichText
							tagName="p" // Use a p tag here
							className="btn-secondary"
							onChange={onChangeCTAText}
							value={ctaText}
							placeholder="Button text here"
						/>
						<URLInput
							value={ctaUrl}
							onChange={onChangeCTAUrl}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
