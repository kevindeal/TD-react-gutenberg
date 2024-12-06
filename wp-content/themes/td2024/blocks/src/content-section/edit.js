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


	// console.log("Existing Inner Blocks", existingInnerBlocks);
	// console.log("Block Props", blockProps, className);
	const { colorVariant, rowIndex, imageLoc, imageAlignX, imageAlignY, defaultContent, colSpan, layout, title, numTabs, displayTitleOnMobile, displayTitleOnTablet, displayTitleOnDesktop} = attributes;

	console.log("Content section Attributes", attributes);
	console.log(rowIndex);
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
				</Panel>
			</InspectorControls>


			<div { ...blockProps } className={`x-${imageAlignX} flex flex-${colSpan} ${defaultContent == 'card' ? '' : 'justify-center items-center'}`}>
				<InnerBlocks
					//template={defaultContent == 'card' ? [['td/content-content', {colorVariant: colorVariant, layout: layout}]] : [['core/image']]}
					template={defaultContent == 'card' ? [['td/content-content', {rowIndex: rowIndex, imageLoc: imageLoc,colorVariant: colorVariant, layout: layout}]] : [['td/content-image', {rowIndex: rowIndex, imageLoc: imageLoc, imageAlignX: imageAlignX, imageAlignY: imageAlignY}]]}
					templateLock={false}
				/>
			</div>
		</>
	);
}
