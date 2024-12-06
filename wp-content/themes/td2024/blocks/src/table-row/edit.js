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
	console.log("Existing Inner Blocks", existingInnerBlocks);
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
		tableHeaders,
		displayHeaders
	} = attributes;

	let [colCount, setColCount] = useState(tableHeaders.count);

	console.log("Row Attributes",
	tableHeaders, displayHeaders);

	useEffect(()=>{
		console.log('Table Headers have changed', tableHeaders);
		if(colCount !== tableHeaders.length){
			console.log('Previoust Count', colCount);
			console.log('Current Count', tableHeaders.length);
			if(tableHeaders.length > colCount){
				addColsToRow(tableHeaders);
			} else {
				removeColsFromRow(tableHeaders);
			}
			setColCount(tableHeaders.length);
		} else {
			console.log("Table Headers", tableHeaders);
			for(let i = 0; i < tableHeaders.length; i++){
				if(existingInnerBlocks.length > i){
				  let block = existingInnerBlocks[i];
				  console.log("Block Table Header", block.attributes.tableHeader, tableHeaders[i]);
				  block.attributes.tableHeader = tableHeaders[i];
				}
			}
			replaceInnerBlocks(clientId, existingInnerBlocks);
		}
	}, [tableHeaders]);

	useEffect(()=>{
		for(let tab of existingInnerBlocks){
			console.log("Tab Contents", tab);
			tab.attributes.displayHeaders = displayHeaders;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	}, displayHeaders);

	const addColsToRow = (tableHeaders) => {
		let newBlocks = [...existingInnerBlocks];
		while(newBlocks.length < tableHeaders.length){
			let newBlock = createBlocksFromInnerBlocksTemplate([['td/table-cell']]);
			newBlocks.push(newBlock[0]);
		}
		replaceInnerBlocks(clientId, newBlocks);
	}

	const removeColsFromRow = (tableHeaders) => {
		let newBlocks = [...existingInnerBlocks];
		while(newBlocks.length > tableHeaders.length){
			newBlocks.pop();
		}
		replaceInnerBlocks(clientId, newBlocks);
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

	const onPressAddButton = () =>{
		let newBlocks = [...existingInnerBlocks];
		let newBlock = createBlocksFromInnerBlocksTemplate([['td/content-wrapper', { colorVariant: colorVariant, layout: layout, vSplit: vSplit, rowIndex: existingInnerBlocks.length}]]);
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
					</PanelBody>
				</Panel>
			</InspectorControls>
			{tableHeaders && (
			<tr {...useInnerBlocksProps({},{allowedBlocks: ['td/table-cell'], template: tableHeaders.map((value, index) =>{
				console.log("Table Header for template", value);
				return ['td/table-cell', {tableHeader: value, displayHeaders: displayHeaders}];
			})})}></tr>
			)}
		</>
	);
}
