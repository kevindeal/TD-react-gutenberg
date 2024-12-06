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
	URLInput,
	store as blockEditorStore
} from '@wordpress/block-editor';

import {
	TextControl,
	ToggleControl,
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	RangeControl,
	Button,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

import './editor.scss';
import '../../../static/output.css';

import { useSelect, useDispatch, AsyncModeProvider } from '@wordpress/data';
import { createBlocksFromInnerBlocksTemplate, createBlock } from '@wordpress/blocks';

export default function Edit( { attributes, setAttributes, clientId } ) {

	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	const existingInnerBlocks = useSelect(
		(select) => {
			return select(blockEditorStore).getBlock(clientId).innerBlocks;
		},
		[clientId]
	);

	const  { referenceId,columns, buttonStyle, buttonUrl, buttonText, buttonTargetBlank, colorVariant, transparentBackground, cardType, headingText, displayOnDesktop, displayOnTablet, displayOnMobile, columnsOnDesktop, columnsOnTablet, columnsOnMobile, embedded } = attributes;

	const maxHCols_mobile = 1;
	const maxHCols_tablet = 2;
	const maxHCols_desktop = 5;

	const onChangeColumns = (newColumns) => {
		setAttributes({ columns: newColumns });
		for(let tab of existingInnerBlocks){
			
			tab.attributes.columns = newColumns;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	};

	// Add new onChange functions
	const onChangecolumnsOnDesktop = (newColumns) => {
		setAttributes({ columnsOnDesktop: newColumns });
		for(let tab of existingInnerBlocks){
			
			tab.attributes.columns = newColumns;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	};

	const onChangecolumnsOnTablet = (newColumns) => {
		setAttributes({ columnsOnTablet: newColumns });
		for(let tab of existingInnerBlocks){
			
			tab.attributes.columns = newColumns;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	};

	const onChangecolumnsOnMobile = (newColumns) => {
		setAttributes({ columnsOnMobile: newColumns });
		for(let tab of existingInnerBlocks){
			
			tab.attributes.columns = newColumns;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	};
	

	const onChangeHeadingText = (newHeadingText) => {
		setAttributes({ headingText: newHeadingText });
	};

	const onChangeCardType = (newCardType) => {
		setAttributes({ cardType: newCardType });

		if(newCardType.includes("horizontal")) {
			setAttributes({
				columnsOnDesktop: Math.min(columnsOnDesktop,maxHCols_desktop),
				columnsOnTablet: Math.min(columnsOnTablet,maxHCols_tablet),
				columnsOnMobile: Math.min(columnsOnTablet,maxHCols_mobile)
			});
		}
	
		// Update the inner blocks to reflect the new card type
		const updatedInnerBlocks = existingInnerBlocks.map(block => {
			return createBlock(newCardType, block.attributes, block.innerBlocks);
		});
		console.log(updatedInnerBlocks, 'blocks here!!!');
	
		replaceInnerBlocks(clientId, updatedInnerBlocks, false);
	};

	const onChangeColorVariant = ( newVariant ) => {
		
		setAttributes( { colorVariant: newVariant } );
		for(let tab of existingInnerBlocks){
			
			tab.attributes.colorVariant = newVariant;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
	};

	const onPressAddButton = () =>{
		
		let newBlocks = [...existingInnerBlocks];
		let newBlock = createBlocksFromInnerBlocksTemplate([['td/card-vertical', { colorVariant: colorVariant}]]);
		newBlocks.push(newBlock[0]);
		
		replaceInnerBlocks(clientId, newBlocks);
	}

	const onChangeTransparentBackground = ( newDisplay ) => {
		setAttributes( { transparentBackground: newDisplay } );
	};

	const onChange= ( newDisplay ) => {
		setAttributes( { title: newDisplay } );
	};
	const onChangeMobile = ( newDisplay ) => {
		setAttributes( { displayOnMobile: newDisplay } );
	};
	const onChangeTablet = ( newDisplay ) => {
		setAttributes( { displayOnTablet: newDisplay } );
	};
	const onChangeDesktop = ( newDisplay ) => {
		setAttributes( { displayOnDesktop: newDisplay } );
	};
	const onChangeEmbedded = ( newDisplay ) => {
		setAttributes( { embedded: newDisplay } );
	};
	const onChangeHideBackground = ( newDisplay ) => {
		setAttributes( { hideBackground: newDisplay } );
	};

	const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'grid' : 'hidden'} ${tablet ? 'md:grid' : 'md:hidden'} ${desktop ? 'lg:grid' : 'lg:hidden'}`;
	}

	const getCardTypeClass = (type) => {
		return type
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, '')
			.replace(/[\s_-]+/g, '-')
			.replace(/^-+|-+$/g, '');
	}

	const getMaxCols = (type,size) => {
		let maxCols = 5;
		switch(size) {
			case "mobile":
				maxCols = cardType.includes('horizontal') ? maxHCols_mobile : 2
				break;
			case "tablet":
				maxCols = cardType.includes('horizontal') ? maxHCols_tablet : 3
				break;
			case "desktop":
			default:
				maxCols = cardType.includes('horizontal') ? maxHCols_desktop : 5
				break;

		}
		return maxCols;//cardType.includes('horizontal') ? 3 : 5
	}

	const setMaxCols = (current,type,size) => {
		let cols = current;
		
		switch(size) {
			case "mobile":
				cols = Math.min(current,maxHCols_mobile);
				break;
			case "tablet":
				cols = Math.min(current,maxHCols_tablet);
				break;
			case "desktop":
			default:
				cols = Math.min(current,maxHCols_desktop);
				break;

		}
		return cols;
	}

	if(clientId && !referenceId){
		setAttributes( { referenceId: clientId } );
	}

	// Either go for the template route
	// (create an inner block template based on amount of columns)
	const template = Array.from(Array(columns).keys()).map((i) => [
		cardType,
		//change this to actual component for card
	]);
	
	// Or go for the allowed blocks route
	const allowedBlocks = [cardType]; //change this to actual component for card
	let wrapperClasses;
	if (colorVariant === 'DARK') {
		wrapperClasses = transparentBackground ? "bg-transparent text-white": "bg-primaryBlue-100 text-white";
	} else if (colorVariant === 'LIGHT') {
		wrapperClasses = transparentBackground ? "bg-transparent": "card-light";
	} else if (colorVariant === 'OUTLINE') {
		wrapperClasses = transparentBackground ? "bg-transparent": "card-outline";
	} else if (colorVariant === 'NOBACKGROUND') {
		wrapperClasses = transparentBackground ? "bg-transparent": "card-no-background";
	}

	return (
		<div {...useBlockProps()}>

			{/* Use RangeControl in the InspectorControls to 
				control the number of columns. */}
			<InspectorControls key="setting">
				<div class="block-editor-block-card">
						<Panel>
							<PanelBody title="Reference ID for Subnav" opened="true">
								<PanelRow>
									<div style={{width: "100%"}}>
										<span style={{backgroundColor:"#EEE"}}>card-container-{referenceId}</span>
									</div>
								</PanelRow>
							</PanelBody>
							<PanelBody>
								<PanelRow>
									<SelectControl
										label="Card Type"
										value={cardType}
										options={[
											{ label: 'Vertical Card', value: 'td/card-vertical' },
											{ label: 'Horizontal Card', value: 'td/card-horizontal' },
										]}
										onChange={onChangeCardType}
									/>
								</PanelRow>
								<PanelRow>
									<ToggleGroupControl label="Color Variant" value={colorVariant} onChange={onChangeColorVariant} isBlock>
										<ToggleGroupControlOption value="DARK" label="Dark" />
										<ToggleGroupControlOption value="LIGHT" label="Light" />
										<ToggleGroupControlOption value="OUTLINE" label="Outline" />
										<ToggleGroupControlOption value="NOBACKGROUND" label="No Background" />
									</ToggleGroupControl>
								</PanelRow>
								<PanelRow>
									<div style={{width:"100%"}}>
										<ToggleControl label="Use transparent background on container?" checked={transparentBackground} onChange={onChangeTransparentBackground} />
										<ToggleControl label="Is Container Embedded?" checked={embedded} onChange={onChangeEmbedded} />
									</div>
								</PanelRow>
								<PanelRow>
									<RangeControl
										label="Columns on Desktop"
										value={columnsOnDesktop}
										onChange={onChangecolumnsOnDesktop}
										min={1}
										max={getMaxCols(cardType,"desktop")}
									/>
								</PanelRow>
								<PanelRow>
									<RangeControl
										label={`Columns on Tablet`}
										value={columnsOnTablet}
										onChange={onChangecolumnsOnTablet}
										min={1}
										max={getMaxCols(cardType,"tablet")}
									/>
								</PanelRow>
								<PanelRow>
									<RangeControl
										label="Columns on Mobile"
										value={columnsOnMobile}
										onChange={onChangecolumnsOnMobile}
										min={1}
										max={getMaxCols(cardType,"mobile")}
									/>
								</PanelRow>
								<PanelRow>
									<div style={{width:"100%"}}>
										<ToggleControl label="Visible on Desktop?" checked={displayOnDesktop} onChange={onChangeDesktop} />
										<ToggleControl label="Visible on Tablet?" checked={displayOnTablet} onChange={onChangeTablet} />
										<ToggleControl label="Visible on Mobile?" checked={displayOnMobile}  onChange={onChangeMobile} /> 
									</div>
								</PanelRow>
							</PanelBody>
							<Button icon="plus-alt" isPrimary text="Add Card" onClick={onPressAddButton} />		

							<PanelBody>
								<PanelRow>
									<div style={{width: "100%"}}>
									<SelectControl
										label="Button Style"
										type="string"
										value={buttonStyle}
										options={[
											{ label: 'Primary', value: 'primary' },
											{ label: 'Secondary', value: 'secondary' },
											{ label: 'No CTA', value: 'hide' }
										]}
										onChange={(value) => setAttributes({ buttonStyle: value })}
									/>
									</div>
								</PanelRow>
							</PanelBody>
						</Panel>
				</div>
			</InspectorControls>
			<div className={`${wrapperClasses} ${getCardTypeClass(cardType)}`}>
				<RichText
					label="Heading"
					tagName="h2"
					value={headingText}
					className={`text-5xl font-header px-[40px] py-[40px]`}
					onChange={onChangeHeadingText}
					placeholder="Enter heading here (optional)"
				/>
				<InnerBlocks
					template={template}
					allowedBlocks={allowedBlocks}
				/>


			{buttonStyle !== "hide" && (
				<div className={`p-8 gap-4 flex flex-col`}>
					<RichText
						tagName="p" // Use a p tag here
						className={`btn-${buttonStyle} ${buttonStyle=='primary' && colorVariant=="DARK" ? 'text-white' : ''}`}
						onChange={(value)=>{ setAttributes({buttonText: value})}}
						value={buttonText}
						placeholder="Button text here"
					/>
					<div class="flex gap-4 items-center">
						<label>
							Button URL
							<br />
							<span 
								className={`inline-block`}
								style={{border: "1px solid rgba(0,0,0,0.1)", backgroundColor: "rgba(255,255,255,0.6)"}}
							>
							<URLInput
								value={ buttonUrl }
								onChange={(value)=>{ setAttributes({buttonUrl: value})}}
							/>
							</span>
						</label>
						<ToggleControl label="Open in new tab" checked={buttonTargetBlank} onChange={(value)=>{ setAttributes({buttonTargetBlank: value})}} />
					</div>
				</div>
            )}
			</div>

		</div>
	)

}
