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
			console.log("Selecting Inner Blocks", select(blockEditorStore).getBlock(clientId).innerBlocks);
			return select(blockEditorStore).getBlock(clientId).innerBlocks;
		},
		[clientId]
	);
	useEffect(()=>{
		if(numTabs != existingInnerBlocks.length){
			for(let i = 0; i < existingInnerBlocks.length; i++){
				if(i == activeTab){
					existingInnerBlocks[i].attributes.isEditorVisible = true;
				} else {
					existingInnerBlocks[i].attributes.isEditorVisible = false;
				}
			}
		}
		setAttributes({numTabs : existingInnerBlocks.length} );
		let newTabInfo = [];
		let iter = 0;
		for(let block of existingInnerBlocks){
			let attributes = {...block.attributes};
			attributes.isEditorVisible =  iter == 0 ? true : false;
			newTabInfo.push(attributes);
			iter++;
		}
		setAttributes({ tabInfo: newTabInfo});
	}, [existingInnerBlocks]);
	// console.log("Existing Inner Blocks", existingInnerBlocks);
	// console.log("Block Props", blockProps, className);
	const { referenceId, colorVariant, orientation, vSplit, title, numTabs, displayTitleOnMobile, displayTitleOnTablet, displayTitleOnDesktop, tabInfo} = attributes;

	const onChangeColorVariant = ( newVariant ) => {
		setAttributes( { colorVariant: newVariant } );
		for(let tab of existingInnerBlocks){
			console.log("Tab Contents", tab);
			tab.attributes.colorVariant = newVariant;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	};

	const onChangeOrientation = ( newOrientation ) => {
		setAttributes( { orientation: newOrientation} );
	};

	const onChangeVSplit = ( newVSplit ) => {
		setAttributes( { vSplit: newVSplit } );
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

	// If there are no inner blocks yet, use the initial template. Else, we use
    // the name and attributes of each (immediate) child block.
    const _template = ( existingInnerBlocks.length < 1 ) ? [["td/tabbed-wrapper", { tabName: "Tab Name 1", pushStateID: "push-state-1" , colorVariant: colorVariant}], ["td/tabbed-wrapper", { tabName: "Tab Name 2", pushStateID: "push-state-2", colorVariant: colorVariant}], ["td/tabbed-wrapper", { tabName: "Tab Name 3", pushStateID: "push-state-3", colorVariant: colorVariant}]] :
			existingInnerBlocks.map( block => [ block.name, block.attributes, block.innerBlocks ] );

	// Add a state which ensures React re-renders our block when the template is
    // changed.
    const [ template, setTemplate ] = useState( _template );
	// console.log("Template", template);

	const onChangeNumTabs= (newNumTabs) => {
		setAttributes({ numTabs: newNumTabs});
		//TODO: Loop through TabInfo.
		// console.log("Current tabs: ", tabInfo);
		let diff = tabInfo.length - newNumTabs;
		// console.log("Diff", diff);
		if(diff > 0){
			// console.log(`Currently ${tabInfo.length} tabs which is more than ${newNumTabs}`);
			let newTabInfo = [...tabInfo];
			let newTemplate = [...template];
			newTabInfo.splice(newTabInfo.length - diff, diff);
			newTemplate.splice(newTemplate.length - diff, diff);
			setAttributes({ tabInfo: newTabInfo});
			setTemplate(newTemplate);
			replaceInnerBlocks(clientId, createBlocksFromInnerBlocksTemplate(newTemplate));
		} else if(diff < 0){
			// console.log(`Currently ${tabInfo.length} tabs which is fewer than ${newNumTabs}`);
			let newTabInfo = [...tabInfo];
			let newTemplate = [...template];
			for(let i = 0; i > diff; i--){
				newTabInfo.push({ name: "Tab Name", pushStateID: "Push State", colorVariant: colorVariant, isEditorVisible: false});
				newTemplate.push(['td/tabbed-wrapper', { name: `Tab Name ${tabInfo.length - i}`, pushStateID: `push-state-${tabInfo.length - i + 1}`, colorVariant: colorVariant} ]);
			}
			setAttributes({tabInfo: newTabInfo});
			setTemplate(newTemplate);
			replaceInnerBlocks(clientId, createBlocksFromInnerBlocksTemplate(newTemplate));
		}
	}

	let showVSplit = orientation === 'vertical';

	const allowedBlocks = ["td/tabbed-wrapper"];
	
	const [activeTab, setActiveTab] = useState(0);

	const onClickInactiveTab = (index) => {
		let formerTab = activeTab;
		setActiveTab(Number(index));

		console.log("OnClickInactiveTab", formerTab, index);
		for(let block of existingInnerBlocks){
			block.attributes.isEditorVisible = false;
		}
		existingInnerBlocks[index].attributes.isEditorVisible = true;
		// console.log("Existing Inner", existingInnerBlocks);
		replaceInnerBlocks(clientId, existingInnerBlocks);
	}

	const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
	}

	const removeTab = (index) => {
		if(existingInnerBlocks.length > 2){
			let newBlocks = existingInnerBlocks.splice(index, 1);
			replaceInnerBlocks(clientId, existingInnerBlocks);
		}
	}

	const renderTabRadios = () => {
		let tabList = existingInnerBlocks.map((value, i) => {
			return { label: value.attributes.tabName, value: i }
		});
		console.log("Active Tab", activeTab);
		return (<RadioControl
			label="Display Contents:"
			selected={ activeTab }
			options={ tabList }
			onChange={ (e) => { onClickInactiveTab(e); } }
		/>);
	}

	const renderTabs = () => {
		let tabList = existingInnerBlocks.map((value, i) => {

			return (
				<li 
				className={`m-8 ml-2 md:ml-0 flex-row items-center ${getVisibilityClasses(value.attributes.isVisibleDesktop, value.attributes.isVisibleTablet, value.attributes.isVisibleMobile)} ${activeTab == i ? 'text-bold underline' : 'cursor-pointer'}`} >
					<h3 className='flex-1' onClick={()=>{ onClickInactiveTab(i); }}>{value.attributes.tabName}</h3>
					{numTabs > 2 ? (<button className="remove-button flex-none mx-2" onClick={()=>{removeTab(i)}}>X</button>) : (<></>)}
				</li>
			)
		});
		let wrapperClasses = 'tab-wrapper';
		wrapperClasses = `${wrapperClasses} ${showVSplit ? "tab-wrapper-vertical flex-col md:flex-row" : "tab-wrapper-horizontal flex-column"}`;
		wrapperClasses = `${wrapperClasses} ${colorVariant == 'DARK' ? "tab-dark" : "tab-light" }`;
		return (
			<>
				<div className={wrapperClasses}>
					<div className={`link-container flex ${showVSplit ? 'flex-row md:flex-col': 'flex-row'}`}>
						<ul className={`tab-links flex font-display text-l ${showVSplit ? 'flex-row md:flex-col border-b-2 md:border-b-0 md:border-r-2': 'flex-row border-b-2'} `}>
							{tabList}
						</ul>
					</div> 
					<div className="tab-container w-full">
						<InnerBlocks
							template={template}
							allowedBlocks={allowedBlocks}
						/>
					</div>
				</div>
			</>
		);
	}

	if(clientId && !referenceId){
		setAttributes( { referenceId: clientId } );
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
							<span style={{backgroundColor:"#EEE"}}>tabbed-content-{referenceId}</span>
						</div>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Key Values', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>
					<PanelRow>
						<TextControl
						label="Tab Container Heading"
						value={title}
						placeholder='Heading goes here...'
						onChange={onChangeTitle}
						/>
					</PanelRow>
						<PanelRow style={{width: "100%"}}>
						<div style={{width:"100%"}}>
							<RadioControl
								label="Tabs Vertical or Horizontal"
								selected={ orientation }
								options={ [
									{ label: 'Horizontal', value: 'horizontal' },
									{ label: 'Vertical', value: 'vertical' },
								] }
								onChange={ onChangeOrientation }
							/>
							</div>
						</PanelRow>
						<PanelRow>
							<div style={{width:"100%"}}>
								<RangeControl
									label="Number of Tabs"
									value={ numTabs }
									onChange={ onChangeNumTabs }
									min={ 2 }
									max={ 10 }
								/>
							</div>
						</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Tabs', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>
					<PanelRow>
						{renderTabRadios()}
					</PanelRow>
				</PanelBody>
				</Panel>
			</InspectorControls>


			<div { ...blockProps }>
				<div className={`tab-outer-wrapper md:py-16 md:px-28 ${colorVariant == 'DARK' ? "tab-dark" : "tab-light"}`}>
					<div className={`td-alert-heading flex-1 ${getVisibilityClasses(displayTitleOnDesktop, displayTitleOnTablet, displayTitleOnMobile)}`}>
						<TextControl value={title} placeholder='Title goes here...' onChange={onChangeTitle} />
					</div>
					{renderTabs()}
				</div>
			</div>
		</>
	);
}
