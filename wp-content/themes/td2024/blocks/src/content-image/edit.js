/**
 * External dependencies
 */
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
    PlainText,
	AlignmentControl,
	BlockControls,
	InspectorControls,
    InnerBlocks,
    URLInput,
    MediaUpload,
	store as blockEditorStore
} from '@wordpress/block-editor';

import {
	TextControl,
	ToggleControl,
    Panel,
	PanelBody,
	PanelRow,
	RadioControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

import { useSelect, useDispatch, AsyncModeProvider } from '@wordpress/data';

import './editor.scss';
import '../../../static/output.css';
import { useEffect } from 'react';


export default function Edit( { attributes, setAttributes, clientId} ) {

    const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	const existingInnerBlocks = useSelect(
		(select) => {
			return select(blockEditorStore).getBlock(clientId).innerBlocks;
		},
		[clientId]
	);

    const  {
		imageAlignX,
		imageAlignY,
		imageLoc,
		extraPadding,
		rowIndex
     } = attributes;

     const blockProps =useBlockProps.save({
    });

	let justifyClasses = '';
	let alignClasses = '';

	switch(imageAlignY) {
		case "top": 
			alignClasses = "items-start";
			break;
		case "bottom": 
			alignClasses = "items-end";
			break;
		case "center": 
		default:
			alignClasses = "items-center";
			break;
	}

	switch(imageAlignX) {
		case "top": 
			justifyClasses = "justify-start";
			break;
		case "bottom": 
			justifyClasses = "justify-end";
			break;
		case "center": 
		default:
			justifyClasses = "justify-center";
			break;
	}

	const onChangeImageAlignX = ( value ) => {
		setAttributes( { imageAlignX: value } );
		/*
		for(let tab of existingInnerBlocks){
			tab.attributes.imageAlignX = value;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
		*/
	};

	const onChangeImageAlignY = ( value ) => {
		setAttributes( { imageAlignY: value } );
		/*
		for(let tab of existingInnerBlocks){
			tab.attributes.imageAlignY = value;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
		*/
	};


    return (
        <>
        <InspectorControls>
				<Panel>
				<PanelBody
					title={ __( 'Key Values', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>

						<PanelRow>
							<div style={{width:"100%"}}>
								<TextControl
									label="Additional Padding"
									value={extraPadding}
									onChange={(value)=>{setAttributes({extraPadding: value})}}
									help="Pixel value used to optically align alternating sections"
								/>
							</div>
						</PanelRow>

                    	<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleGroupControl label="Horizontal Alignment" value={imageAlignX} onChange={onChangeImageAlignX} isBlock>
									<ToggleGroupControlOption value="left" label="Left" />
									<ToggleGroupControlOption value="center" label="Center" />
									<ToggleGroupControlOption value="right" label="Right" />
								</ToggleGroupControl>
							</div>
						</PanelRow>
						
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleGroupControl label="Vertical Alignment" value={imageAlignY} onChange={onChangeImageAlignY} isBlock>
									<ToggleGroupControlOption value="top" label="Top" />
									<ToggleGroupControlOption value="center" label="Center" />
									<ToggleGroupControlOption value="bottom" label="Bottom" />
								</ToggleGroupControl>
							</div>
						</PanelRow>
				</PanelBody>
				</Panel>
			</InspectorControls>
            <div {...blockProps}>
				<div className={`content-image flex ${justifyClasses} ${alignClasses} p--${extraPadding}`}>
				<InnerBlocks template={[['core/image']]} />
				</div>
            </div>
        </>
    );
}
