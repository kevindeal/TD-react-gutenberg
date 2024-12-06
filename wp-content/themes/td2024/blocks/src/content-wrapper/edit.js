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
		for(let existingInnerBlock of existingInnerBlocks){
			existingInnerBlock.attributes.colorVariant = attributes.colorVariant;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	}, [attributes.colorVariant])

	useEffect(()=>{
		for(let existingInnerBlock of existingInnerBlocks){
			existingInnerBlock.attributes.layout = attributes.layout;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	}, [attributes.layout])
	
	useEffect(()=>{
		for(let existingInnerBlock of existingInnerBlocks){
			existingInnerBlock.attributes.imageAlignX = attributes.imageAlignX;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	}, [attributes.imageAlignX])

	useEffect(()=>{
		for(let existingInnerBlock of existingInnerBlocks){
			existingInnerBlock.attributes.imageLoc = attributes.imageLoc;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	}, [attributes.imageLoc])

	useEffect(()=>{
		for(let existingInnerBlock of existingInnerBlocks){
			existingInnerBlock.attributes.rowIndex = attributes.rowIndex;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	}, [attributes.rowIndex])

	/*
	useEffect(()=>{
		for(let existingInnerBlock of existingInnerBlocks){
			existingInnerBlock.attributes.rowIndex = attributes.rowIndex;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	}, [attributes.rowIndex])
	*/

	// console.log("Existing Inner Blocks", existingInnerBlocks);
	// console.log("Block Props", blockProps, className);
	const { rowIndex, imageVAlign, imageLoc, imageAlignX, imageAlignY, colorVariant, layout, vSplit, title, numTabs, displayTitleOnMobile, displayTitleOnTablet, displayTitleOnDesktop} = attributes;

	const onChangeColorVariant = ( newVariant ) => {
		setAttributes( { colorVariant: newVariant } );
		for(let tab of existingInnerBlocks){
			console.log("Tab Contents", tab);
			tab.attributes.colorVariant = newVariant;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	};

	const onChangeTitle= ( newTitle ) => {
		setAttributes( { title: newTitle } );
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

	const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
	}

	const getGridCols = ()=> {
		if(layout == 'stacked'){
			return 'grid-cols-1';
		} else {
			if(vSplit == '50/50'){
				return 'grid-cols-2';
			} else if(vSplit == '33/66' || vSplit =='66/33'){
				return 'grid-cols-3';
			} else {
				return 'grid-cols-4';
			}
		}
	}

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
		</Panel>

		</InspectorControls>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<PanelRow>
							{ layout==='horizontal' && (
							<PanelRow>
								<div style={{width:"100%"}}>
									<ToggleGroupControl label="Image Location" value={imageLoc} onChange={(value)=>{setAttributes({imageLoc:value})}} isBlock>
										<ToggleGroupControlOption value="left" label="Left" />
										<ToggleGroupControlOption value="right" label="Right" />
									</ToggleGroupControl>
								</div>
							</PanelRow>
							)}
							<SelectControl
								label="Image Vertical Align"
								value={imageVAlign}
								options={[
									{ label: 'Top', value: 'top' },
									{ label: 'Center', value: 'center' },
									{ label: 'Bottom', value: 'bottom' },
								]}
								onChange={(value)=>{setAttributes({imageVAlign:value})}}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>


			<div { ...blockProps } className={``}>
				<div style={{padding:8}}>
					<ToggleGroupControl label="Color Variant for This Content Wrapper" value={colorVariant} onChange={onChangeColorVariant} isBlock>
						<ToggleGroupControlOption value="DARK" label="Dark" />
						<ToggleGroupControlOption value="LIGHT" label="Light" />
					</ToggleGroupControl>
				</div>
				<div style={{padding:8}}>
					<ToggleGroupControl label="Layout for This Content Wrapper" value={layout} onChange={(value)=>{setAttributes({layout:value})}} isBlock>
						<ToggleGroupControlOption value="horizontal" label="Horizontal" />
						<ToggleGroupControlOption value="stacked" label="Stacked" />
					</ToggleGroupControl>
				</div>
				<div classNapme="wrapper-clickable" style={{padding:8}}>
					<ToggleGroupControl label="Image Location for this Content Wrapper" value={imageLoc} onChange={(value)=>{setAttributes({imageLoc:value})}} isBlock>
							<ToggleGroupControlOption value="left" label="Left" />
							<ToggleGroupControlOption value="right" label="Right" />
						</ToggleGroupControl>
				</div>
				<div className={``}>
				<InnerBlocks
					template={[['td/content-section', {rowIndex: rowIndex,imageLoc: imageLoc, colorVariant: colorVariant, defaultContent: 'card', layout: layout, colSpan: 1}],['td/content-section', {rowIndex: rowIndex, colorVariant: colorVariant, imageLoc: imageLoc, imageAlignX: imageAlignX, imagAlignY: imageAlignY, defaultContent: 'image', layout: layout, colSpan: 1}]]}
					allowedBlocks={['td/content-section']}
					templateLock
				/></div>
			</div>
		</>
	);
}
