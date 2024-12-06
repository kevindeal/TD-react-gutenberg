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
	// console.log("Existing Inner Blocks", existingInnerBlocks);
	// console.log("Block Props", blockProps, className);
	const {
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
		ctaText,
		ctaUrl,
		displayCTAOnMobile,
		displayCTAOnTablet,
		displayCTAOnDesktop,
		tableNumColumns,
		tableNumRows,
		tableHeader,
		displayHeaders
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
	// ctaText,
	// ctaUrl,
	// displayCTAOnMobile,
	// displayCTAOnTablet,
	// displayCTAOnDesktop,
	// tableNumColumns,
	// tableNumRows,
	// tableHeaders);

	console.log("Header Info", tableHeader, displayHeaders);

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

	const onPressAddButton = (checked) =>{
		let newBlocks = [...existingInnerBlocks];
		let newBlock = createBlocksFromInnerBlocksTemplate([['core/list', { ordered: false, className: checked ? 'ul-checked text-mobile-l md:text-l font-display leading-eyebrow' : ' text-mobile-l md:text-l font-display leading-eyebrow'}]]);
		newBlocks.push(newBlock[0]);
		replaceInnerBlocks(clientId, newBlocks);
	}

	const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
	}

	const wrapperClasses = '';
	let showVSplit = layout === 'horizontal';

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody
					title={__('Key Values', 'content-container')}
					style={{width: "100%"}}
					initialOpen={true}
					>
					<PanelRow style={{flexDirection: 'column'}}>
						<Button icon="plus-alt" isPrimary text="Add Bulleted List" onClick={()=>{onPressAddButton(false)}} />
					</PanelRow>
					<PanelRow style={{flexDirection: 'column'}}>
						<Button icon="plus-alt" isPrimary text="Add Checked List" onClick={()=>{onPressAddButton(true)}} />
					</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>


			<td className='px-10 py-7' data-th={tableHeader}>
				<InnerBlocks template={[['core/paragraph', {'placeholder': 'Table Cell Text', className: 'font-display text-xl font-normal'}]]} />
			</td>
		</>
	);
}
