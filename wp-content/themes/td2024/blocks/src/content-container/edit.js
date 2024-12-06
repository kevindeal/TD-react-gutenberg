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
		let i = 0;
		for(let existingInnerBlock of existingInnerBlocks){
			existingInnerBlock.attributes.rowIndex = i;
			i++;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	},[clientId]);

	const { referenceId, imageLoc, imageAlignX, imageAlignY, altImageLoc, colorVariant, heading, layout, vSplit, displayTitleOnMobile, displayTitleOnTablet, displayTitleOnDesktop} = attributes;

	if(clientId && !referenceId){
		setAttributes( { referenceId: clientId } );
	}

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

	const onChangeImageLoc = ( value ) => {
		setAttributes( { imageLoc: value } );
		for(let tab of existingInnerBlocks){
			tab.attributes.imageLoc = value;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	};

	const onChangeImageAlignX = ( value ) => {
		setAttributes( { imageAlignX: value } );
		for(let tab of existingInnerBlocks){
			tab.attributes.imageAlignX = value;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	};

	const onChangeImageAlignY = ( value ) => {
		setAttributes( { imageAlignY: value } );
		for(let tab of existingInnerBlocks){
			tab.attributes.imageAlignY = value;
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

	const onPressAddButton = () =>{
		let newBlocks = [...existingInnerBlocks];
		let newBlock = createBlocksFromInnerBlocksTemplate([['td/content-wrapper', { imageLoc: imageLoc, colorVariant: colorVariant, layout: layout, vSplit: vSplit, rowIndex: existingInnerBlocks.length}]]);
		newBlocks.push(newBlock[0]);
		replaceInnerBlocks(clientId, newBlocks);
	}

	const onPressRemoveButton = () =>{
		let newBlocks = [...existingInnerBlocks];
		newBlocks.pop();
		replaceInnerBlocks(clientId, newBlocks);
	}

	const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
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

						{showVSplit && (
							<PanelRow>
								<div style={{width: "100%"}}>
									<ToggleGroupControl label="Column Sizing" value={vSplit} onChange={onChangeVSplit} isBlock>
										<ToggleGroupControlOption value="25/75" label="25/75" />
										<ToggleGroupControlOption value="33/66" label="33/66" />
										<ToggleGroupControlOption value="50/50" label="50/50" />
										<ToggleGroupControlOption value="66/33" label="66/33" />
										<ToggleGroupControlOption value="75/25" label="75/25" />
									</ToggleGroupControl>
								</div>
							</PanelRow>
							)}
						
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
		</Panel>

		</InspectorControls>
			<InspectorControls>
				<Panel>

					<PanelBody title="Reference ID for Subnav" opened="true">
						<PanelRow>
							<div style={{width: "100%"}}>
								<span style={{backgroundColor:"#EEE"}}>content-container-{referenceId}</span>
							</div>
						</PanelRow>
					</PanelBody>

					<PanelBody
					title={__('Key Values', 'content-container')}
					style={{width: "100%"}}
					initialOpen={true}
					>

						<PanelRow style={{width: "100%"}}>
						<div style={{width:"100%"}}>
							<RadioControl
								label="2 Column or Stacked Layout?"
								selected={ layout }
								options={ [
									{ label: 'Horizontal', value: 'horizontal' },
									{ label: 'Stacked', value: 'stacked' },
								] }
								onChange={ onChangeLayout }
							/>
							</div>
                    </PanelRow>

					<PanelRow>
						<Button icon="plus-alt" isPrimary text="Add Content Row" onClick={onPressAddButton} />
					</PanelRow>
					{ existingInnerBlocks.length > 1 && (
					<PanelRow>
						<Button icon="minus" isPrimary text="Remove Content Row" onClick={onPressRemoveButton} />
					</PanelRow>
					)}
					</PanelBody>

					<PanelBody title="Image Positioning" opened="true">
						{ layout==='horizontal' && (
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleGroupControl label="Location" value={imageLoc} onChange={onChangeImageLoc} isBlock>
									<ToggleGroupControlOption value="left" label="Left" />
									<ToggleGroupControlOption value="right" label="Right" />
								</ToggleGroupControl>
							</div>
						</PanelRow>
						)}
					</PanelBody>
				</Panel>
			</InspectorControls>


			<div { ...blockProps }>
				<div className={`tab-outer-wrapper content-container-wrapper md:py-4 md:px-4 layout-${layout} image-${imageLoc} ${altImageLoc ? "zip" : "zip"} ${colorVariant == 'DARK' ? 'bg-primaryBlue-100 text-white' : ''}`}>
					<div className={`td-alert-heading px-[40px] flex-1 ${getVisibilityClasses(displayTitleOnDesktop, displayTitleOnTablet, displayTitleOnMobile)}`}>
						<RichText
                            tagName="h2"
                            className={`relative title font-header pb-4 text-5xl ${getVisibilityClasses(displayTitleOnDesktop, displayTitleOnTablet, displayTitleOnMobile)}`} // Add the selected option as a class
                            value={heading}
							defaultValue="Heading Text"
                            onChange={onChangeTitle}
                            placeholder={__("Heading Text Here", "gutenpride")}
                        />
					</div>
					<div className={`${wrapperClasses}`}>
						<InnerBlocks 
							template={[['td/content-wrapper', {colorVariant: colorVariant, layout: layout, vSplit: vSplit, imageLoc: imageLoc, imageAlignY: imageAlignY, imageAlignX: imageAlignX, rowIndex: 0}]]}
							allowedBlocks={['td/content-wrapper']}

						/>
					</div>
				</div>
			</div>
		</>
	);
}
