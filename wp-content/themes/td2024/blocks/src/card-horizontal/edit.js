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
    URLInput
    
} from '@wordpress/block-editor';

import {
	TextControl,
	ToggleControl,
    Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	RangeControl,
    //TextareaControl,
    Button,
    CheckboxControl
} from '@wordpress/components';

import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {

    const  { columns, text, textarea } = attributes;
    

    const onChangeColumns = (newColumns) => {
        setAttributes({ columns: newColumns });
    };

    const onChangeEyebrow = (newEyebrow) => {
        setAttributes({ text: newEyebrow });
    };

    const onChangeDescription = (newDescription) => {
        setAttributes({ textarea: newDescription });
    };
    

    const template = [[
        "core/image",
    ]];
  
    const allowedBlocks = ["core/image"];

    const { buttonText, buttonUrl, buttonTargetBlank, colorVariant, displayOption, title, showOnDesktop, showOnTablet, showOnMobile, isUppercase, selectedOption, customNumber, showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile, showH3OnDesktop, showH3OnTablet, showH3OnMobile, wholeCardButton } = attributes;
    const eyebrowClass = `${colorVariant === 'DARK' ? 'bg-navy-100' : ''}`;
    const onChangeButtonText = ( newButtonText ) => {
        setAttributes( { buttonText: newButtonText } );
    };

    const onChangeButtonUrl = ( newUrl ) => {
        setAttributes( { buttonUrl: newUrl } );
    };

    const onChangeTitle = (newTitle) => {
        setAttributes({ title: newTitle });
    };

    const onChangeShowOnDesktop = (newValue) => { //, attribute name
        setAttributes({ showOnDesktop: newValue });
    };
    
    const onChangeShowOnTablet = (newValue) => {
        setAttributes({ showOnTablet: newValue });
    };
    
    const onChangeShowOnMobile = (newValue) => {
        setAttributes({ showOnMobile: newValue });
    };
    const onChangeCustomNumber = (newNumber) => {
        setAttributes({ customNumber: newNumber });
    };

    const onClickButton = () => {
        // Handle button click here
    };

    // Add this function to handle changes to the display option
    const onChangeDisplayOption = (newDisplayOption) => {
        setAttributes({ displayOption: newDisplayOption });
    };

    const onChangeIsUppercase = (newValue) => {
        setAttributes({ isUppercase: newValue });
    };

    const onChangeSelectedOption = (newOption) => {
        setAttributes({ selectedOption: newOption });
    };

    const onChangeshowEyebrowOnDesktop = (newValue) => { //, attribute name
        setAttributes({ showEyebrowOnDesktop: newValue });
    };
    
    const onChangeshowEyebrowOnTablet = (newValue) => {
        setAttributes({ showEyebrowOnTablet: newValue });
    };
    
    const onChangeshowEyebrowOnMobile = (newValue) => {
        setAttributes({ showEyebrowOnMobile: newValue });
    };

    function getVisibilityClasses(showOnDesktop, showOnTablet, showOnMobile) {
        let classes = '';
        if (!showOnDesktop) {
            classes += ' lg:hidden';
        }
        if (!showOnTablet) {
            classes += ' md:hidden';
        }
        if (!showOnMobile) {
            classes += ' sm:hidden';
        }
        return classes;
    }

    function getEyebrowVisibilityClasses(showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile) {
        let classes = '';
        if (!showEyebrowOnDesktop) {
            classes += ' lg:hidden';
        }
        if (!showEyebrowOnTablet) {
            classes += ' md:hidden';
        }
        if (!showEyebrowOnMobile) {
            classes += ' sm:hidden';
        }
        return classes;
    }

    function getH3VisibilityClasses(showH3OnDesktop, showH3OnTablet, showH3OnMobile) {
        let classes = '';
        if (!showH3OnDesktop) {
            classes += ' lg:hidden';
        }
        if (!showH3OnTablet) {
            classes += ' md:hidden';
        }
        if (!showH3OnMobile) {
            classes += ' sm:hidden';
        }
        return classes;
    }

    return (
        <div {...useBlockProps()}>
            <div className="flex px-[40px] py-[40px] gap-6 col-span-12">
            <InnerBlocks
                template={template}
                templateLock="all"
                allowedBlocks={allowedBlocks}
            />
            <span>
            <PlainText
                tagName="span"
                className={`eyebrow ${eyebrowClass} ${isUppercase ? 'uppercase' : ''} ${getVisibilityClasses(showOnDesktop, showOnTablet, showOnMobile)}`}
                value={text}
                onChange={onChangeEyebrow}
                placeholder={__("Eyebrow Text Here", "gutenpride")}
            />
            <RichText
                tagName="h3"
                className={`title ${selectedOption} card-title text-l font-display font-normal mb-[30px] leading-[145%]`} // Add the selected option and visibility classes
                value={title}
                onChange={onChangeTitle}
                placeholder={__("Title Text Here", "gutenpride")}
            />
                <span class="flex flex-col gap-4 p-8">
                    <RichText
                        tagName="p" // Use a p tag here
                        className="btn-secondary"
                        onChange={onChangeButtonText}
                        value={buttonText}
                        placeholder="Button text here"
                    />
                    <span class="flex items-center gap-4">
                        <URLInput
                            value={buttonUrl}
                            onChange={onChangeButtonUrl}
                        />
                        <ToggleControl label="Open in new tab" checked={buttonTargetBlank} onChange={(value)=>{ setAttributes({buttonTargetBlank: value})}} />
                    </span>
                </span>
            </span>
            </div>
            <InspectorControls key="setting">
                <div className="block-editor-block-card">
                    <Panel>
                        
                        <PanelBody>
                            <PanelRow>
                                <ToggleControl
                                    label="Show Module on Desktop"
                                    checked={showOnDesktop}
                                    onChange={onChangeShowOnDesktop}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Show Module on Tablet"
                                    checked={showOnTablet}
                                    onChange={onChangeShowOnTablet}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Show Module on Mobile"
                                    checked={showOnMobile}
                                    onChange={onChangeShowOnMobile}
                                />
                            </PanelRow>
                        </PanelBody>
                        <PanelBody>
                            <PanelRow>
                                <fieldset>
                                    <legend className="blocks-base-control__label">
                                        {__("Amount of columns", "gutenpride")}
                                    </legend>
                                    <SelectControl
                                        label="Display Option"
                                        value={displayOption}
                                        options={[
                                            { label: 'Image Left', value: 'image-left' },
                                            { label: 'Image Right', value: 'image-right' },
                                            { label: 'Text Only', value: 'text-only' },
                                        ]}
                                        onChange={onChangeDisplayOption}
                                    />
                                </fieldset>
                            </PanelRow>
                        </PanelBody>
                        <PanelBody title={__('CTA Settings')}>
                            <ToggleControl
                                label="Button is Whole Card"
                                checked={wholeCardButton}
                                onChange={(value) => setAttributes({ wholeCardButton: value })}
                            />
                        </PanelBody>

                        <PanelBody title={__('Eyebrow Text Visibility Settings')}>
                            <ToggleControl
                                label="Show on Desktop"
                                checked={showEyebrowOnDesktop}
                                onChange={(value) => setAttributes({ showEyebrowOnDesktop: value })}
                            />
                            <ToggleControl
                                label="Show on Tablet"
                                checked={showEyebrowOnTablet}
                                onChange={(value) => setAttributes({ showEyebrowOnTablet: value })}
                            />
                            <ToggleControl
                                label="Show on Mobile"
                                checked={showEyebrowOnMobile}
                                onChange={(value) => setAttributes({ showEyebrowOnMobile: value })}
                            />
                        </PanelBody>
                        <PanelBody>
                            <PanelRow>
                                <CheckboxControl
                                    label="Eyebrow Text Uppercase"
                                    checked={isUppercase}
                                    onChange={onChangeIsUppercase}
                                />
                            </PanelRow>
                        </PanelBody>
                        <PanelBody title={__('H3 Visibility Settings')}>
                            <ToggleControl
                                label="Show on Desktop"
                                checked={showH3OnDesktop}
                                onChange={(value) => setAttributes({ showH3OnDesktop: value })}
                            />
                            <ToggleControl
                                label="Show on Tablet"
                                checked={showH3OnTablet}
                                onChange={(value) => setAttributes({ showH3OnTablet: value })}
                            />
                            <ToggleControl
                                label="Show on Mobile"
                                checked={showH3OnMobile}
                                onChange={(value) => setAttributes({ showH3OnMobile: value })}
                            />
                        </PanelBody>
                        <PanelBody title="Card Heading (H3) Display Style">
                            <SelectControl
                                label="Option"
                                value={selectedOption}
                                options={[
                                    { label: 'Standard', value: 'standard' },
                                    { label: 'Numeric', value: 'numeric font-medium' },
                                    { label: 'Custom', value: 'custom' },
                                ]}
                                onChange={onChangeSelectedOption}
                            />
                            {selectedOption === 'custom' && (
                                <TextControl
                                    label="Custom Number"
                                    type="number"
                                    value={customNumber}
                                    onChange={onChangeCustomNumber}
                                />
                            )}
                        </PanelBody>
                    </Panel>
                </div>
            </InspectorControls>
        </div>
    );
}
