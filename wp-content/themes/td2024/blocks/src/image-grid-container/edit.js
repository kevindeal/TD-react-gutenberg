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

	const  { columns, colorVariant, transparentBackground, cardType, headingText, displayHeadingOnDesktop, displayHeadingOnTablet, displayHeadingOnMobile, displayOnDesktop, displayOnTablet, displayOnMobile, columnsOnDesktop, columnsOnTablet, columnsOnMobile } = attributes;

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

	const onChangeHeadingMobile = ( newDisplay ) => {
		setAttributes( { displayHeadingOnMobile: newDisplay } );
	};
	const onChangeHeadingTablet = ( newDisplay ) => {
		setAttributes( { displayHeadingOnTablet: newDisplay } );
	};
	const onChangeHeadingDesktop = ( newDisplay ) => {
		setAttributes( { displayHeadingOnDesktop: newDisplay } );
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
		let newBlock = createBlocksFromInnerBlocksTemplate([['td/headshot-card', { colorVariant: colorVariant}]]);
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

	const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'grid' : 'hidden'} ${tablet ? 'md:grid' : 'md:hidden'} ${desktop ? 'lg:grid' : 'lg:hidden'}`;
	}

	// Either go for the template route
	// (create an inner block template based on amount of columns)
	const template = [['td/headshot-card', {colorVariant: colorVariant}],['td/headshot-card', {colorVariant: colorVariant}],['td/headshot-card', {colorVariant: colorVariant}],['td/headshot-card', {colorVariant: colorVariant}]];
	
	// Or go for the allowed blocks route
	const allowedBlocks = ['td/headshot-card']; //change this to actual component for card
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
							<PanelBody>
								<PanelRow>
									<ToggleGroupControl label="Color Variant" value={colorVariant} onChange={onChangeColorVariant} isBlock>
										<ToggleGroupControlOption value="DARK" label="Dark" />
										<ToggleGroupControlOption value="LIGHT" label="Light" />
									</ToggleGroupControl>
								</PanelRow>
								<PanelRow>
									<div style={{width:"100%"}}>
										<ToggleControl label="Use transparent background on container?" checked={transparentBackground} onChange={onChangeTransparentBackground} />
									</div>
								</PanelRow>
								<PanelRow>
									<RangeControl
										label="Columns on Desktop"
										value={columnsOnDesktop}
										onChange={onChangecolumnsOnDesktop}
										min={1}
										max={5}
									/>
								</PanelRow>
								<PanelRow>
									<RangeControl
										label="Columns on Tablet"
										value={columnsOnTablet}
										onChange={onChangecolumnsOnTablet}
										min={1}
										max={5}
									/>
								</PanelRow>
								<PanelRow>
									<RangeControl
										label="Columns on Mobile"
										value={columnsOnMobile}
										onChange={onChangecolumnsOnMobile}
										min={1}
										max={5}
									/>
								</PanelRow>
								<PanelRow>
								<RichText
									tagName="h2"
									value={headingText}
									onChange={onChangeHeadingText}
									placeholder="Enter heading here"
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
						</Panel>

				</div>
			</InspectorControls>
			<div className={wrapperClasses}>
			<RichText
				tagName="h2"
				className={`relative title font-header text-5xl mb-4 ${getVisibilityClasses(displayHeadingOnDesktop, displayHeadingOnTablet, displayHeadingOnMobile)}`} // Add the selected option as a class
				value={headingText}
				onChange={onChangeHeadingText}
				placeholder={__("Heading Text Here", "gutenpride")}
			/>
				<div>
				<InnerBlocks
					template={template}
					allowedBlocks={allowedBlocks}
					renderAppender={()=>{ return <Button icon="plus-alt" isPrimary text="Add Card" onClick={onPressAddButton} />}}
				/>
				</div>
			</div>
		</div>
	)

}
