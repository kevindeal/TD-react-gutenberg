/**
 * External dependencies
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import './editor.scss';

import { createBlocksFromInnerBlocksTemplate, createBlock } from '@wordpress/blocks';

import {
    InnerBlocks,
    useBlockProps,
    store as blockEditorStore,
    InspectorControls,
    MediaUpload
} from '@wordpress/block-editor';

import {
    Panel,
	PanelBody,
	PanelRow,
    __experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalNumberControl as NumberControl,
    ToggleControl
} from '@wordpress/components';

import { useSelect, useDispatch } from '@wordpress/data';

export default function Edit( { attributes, setAttributes, clientId } ) {
    console.log("Container", attributes);
    const  { 
        colorVariant, 
        sliderSpeed, 
        title, 
        overrideBackground,
        backgroundHorizontalAlign,
        backgroundVerticalAlign,
        backgroundAlignmentPair,
        backgroundFitMode,
        backgroundMedia
    } = attributes;

    const DEFAULT_TEMPLATE = [['td/quotes']];

    const { getBlockOrder } = wp.data.select('core/block-editor');
    const quotes = getBlockOrder(clientId);

    setAttributes({ numberOfQuotes: quotes.length });

    const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
    const existingInnerBlocks = useSelect(
        (select) => {
            return select(blockEditorStore).getBlock(clientId).innerBlocks;
        },
        [clientId]
    );

    const onChangeColorVariant = ( newVariant ) => {
        setAttributes( { colorVariant: newVariant } );
    
        for(let quote of existingInnerBlocks){
			console.log("Quote Contents", quote);
			quote.attributes.colorVariant = newVariant;
		}
		replaceInnerBlocks(clientId, existingInnerBlocks);
    };


    //Background Elements
    const onChangeOverride = ( newVal ) => {
		setAttributes( { overrideBackground: newVal } );
	};
    const onChangeBackgroundVerticalAlignment = ( newVal ) => {
		setAttributes( { 
            backgroundVerticalAlign: newVal,
            backgroundAlignmentPair: `${backgroundHorizontalAlign} ${newVal}`
        } );
	};
    const onChangeBackgroundHorizontalAlignment = ( newVal ) => {
        setAttributes( { 
            backgroundHorizontalAlign: newVal,
            backgroundAlignmentPair: `${newVal} ${backgroundVerticalAlign} `
        } );
	};
    const onChangeBackgroundFitMode = ( newVal ) => {
		setAttributes( { backgroundFitMode: newVal } );
	};

    const onPressAddButton = () => {
        if (existingInnerBlocks.length >= 4) {
            // Don't add a new block if there are already 4 inner blocks.
            return;
        }
    
        let newBlocks = [...existingInnerBlocks];
        let newBlock = createBlocksFromInnerBlocksTemplate([['td/quotes', { colorVariant: colorVariant}]]);
        newBlocks.push(newBlock[0]);
    
        replaceInnerBlocks(clientId, newBlocks);
    }

    let wrapperClasses;
    const allowedBlocks = ["td/quotes"];
    console.log('color variant:' , colorVariant);
    if (colorVariant === 'GRADIENT1') {
        wrapperClasses = "bg-cardGradient1";
    } else if (colorVariant === 'GRADIENT2') {
        wrapperClasses = "bg-cardGradient2";
    } else if (colorVariant === 'DARK') {
        wrapperClasses = "bg-primaryBlue-100 text-white";
    } else if (colorVariant === 'LIGHT') {
        wrapperClasses = "quote-light";
    }

    if (backgroundMedia) {
        wrapperClasses += " bg-cardGradient2";
    }
    console.log('wrapperClasses:', wrapperClasses);

    return (
        <div {...useBlockProps()}>
            <InspectorControls key="setting">
                <div class="block-editor-block-card">
                    <Panel>
                        <PanelBody>
                            <PanelRow>
                                <ToggleGroupControl label="Color Variant" value={colorVariant} onChange={onChangeColorVariant} isBlock>
                                    <ToggleGroupControlOption value="DARK" label="Dark" />
                                    <ToggleGroupControlOption value="LIGHT" label="Light" />
                                    <ToggleGroupControlOption value="GRADIENT1" label="Gradient 1" />
                                    <ToggleGroupControlOption value="GRADIENT2" label="Gradient 2" />
                                </ToggleGroupControl>
                            </PanelRow>
                        </PanelBody>
                        <PanelBody title="Slider Settings">
                            <PanelRow>
                                <NumberControl
                                    label="Slider Speed (ms ['900' = 9 seconds])"
                                    value={sliderSpeed}
                                    onChange={(value) => setAttributes({ sliderSpeed: value })}
                                    min={0}
                                    step={100}
                                />
                            </PanelRow>
                            <PanelRow>
                                <div style={{width:"100%"}}>
                                    <ToggleControl label="Override Background with Media File?" checked={overrideBackground} onChange={onChangeOverride} />
                                </div>
                            </PanelRow>
                            {overrideBackground ? (<>
                            <PanelRow>
                                <div style={{width:"100%"}}>
                                <MediaUpload
                                value={backgroundMedia.title !== '' ? backgroundMedia : null}
                                onSelect={(media) => {
                                    console.log("Media Uploaded", media);
                                    setAttributes({
                                    backgroundMedia: {
                                        ...media
                                    },
                                    });
                                }}
                                multiple={false}
                                render={({ open }) => (
                                    <>
                                     <p style={{marginBottom: '5px'}}>
                                        {backgroundMedia.title !== ''
                                        ? '(Currently Selected: ' + backgroundMedia.title + ', ' + backgroundMedia.mime + ', ' + backgroundMedia.filesizeHumanReadable + ')'
                                        : 'No Image Uploaded'}
                                    </p>
                                    <button className='components-button is-primary' onClick={open}>
                                        {backgroundMedia.title !== ''
                                        ? 'Change Media'
                                        : 'Upload or Select Media'}
                                    </button>
                                    </>
                                )}
                                />
                                </div>
                                </PanelRow>
                                <PanelRow>
                                    <div style={{width:"100%"}}>
                                        <ToggleGroupControl label="Background Vertical Alignment" value={backgroundVerticalAlign} onChange={onChangeBackgroundVerticalAlignment} isBlock>
                                            <ToggleGroupControlOption value="top" label="Top" />
                                            <ToggleGroupControlOption value="center" label="Center" />
                                            <ToggleGroupControlOption value="bottom" label="Bottom" />
                                        </ToggleGroupControl>
                                    </div>
                                </PanelRow>
                                <PanelRow>
                                    <div style={{width:"100%"}}>
                                        <ToggleGroupControl label="Background Horizontal Alignment" value={backgroundHorizontalAlign} onChange={onChangeBackgroundHorizontalAlignment} isBlock>
                                            <ToggleGroupControlOption value="left" label="Left" />
                                            <ToggleGroupControlOption value="center" label="Center" />
                                            <ToggleGroupControlOption value="right" label="Right" />
                                        </ToggleGroupControl>
                                    </div>
                                </PanelRow>
                                <PanelRow>
                                    <div style={{width:"100%"}}>
                                        <ToggleGroupControl label="Background Fit Mode" value={backgroundFitMode} onChange={onChangeBackgroundFitMode} isBlock>
                                            <ToggleGroupControlOption value="contain" label="Contain" />
                                            <ToggleGroupControlOption value="cover" label="Cover" />
                                            <ToggleGroupControlOption value="fill" label="Fill" />
                                        </ToggleGroupControl>
                                    </div>
                                </PanelRow>
                                </>
                            ) : (<></>) }
                        </PanelBody>
                        
                    </Panel>
                </div>
            </InspectorControls>
            <div className={`${wrapperClasses}`}>
                {overrideBackground ? (<>
                { backgroundMedia.type == "video" ? (<>
                    <video muted autoPlay playsInline loop className={`absolute object-${backgroundFitMode} ${backgroundHorizontalAlign == 'center' ? 'inset-x-auto' : `${backgroundHorizontalAlign}-0`} ${backgroundVerticalAlign == 'center' ? 'inset-y-auto' : `${backgroundVerticalAlign}-0`} w-[100%]  ${backgroundFitMode == 'contain' ? 'h-auto' : 'h-full'}`} width="100%">
                        <source src={backgroundMedia.url} type={backgroundMedia.mime}/>
                    </video>
                </>) : (
                <img
                        className={`element-background-image wp-image-${backgroundMedia.id} object-${backgroundFitMode} absolute ${backgroundHorizontalAlign == 'center' ? 'inset-x-auto' : `${backgroundHorizontalAlign}-0`} ${backgroundVerticalAlign == 'center' ? 'inset-y-auto' : `${backgroundVerticalAlign}-0`} w-[100%] ${backgroundFitMode == 'contain' ? 'h-auto' : 'h-full'}`}
                        style={{objectPosition:`${backgroundAlignmentPair}`}}
                        src={backgroundMedia.url}
                        alt={backgroundMedia.alt}
                    />
                )}
                </>) : (<></>)}
                <InnerBlocks
                    template={DEFAULT_TEMPLATE}
                    allowedBlocks={allowedBlocks}
                />
            </div>
        </div>
    );
}