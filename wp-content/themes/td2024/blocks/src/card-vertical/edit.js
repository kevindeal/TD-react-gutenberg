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
    TextareaControl,
    CheckboxControl,
    Button
} from '@wordpress/components';

import './editor.scss';



export default function Edit( { attributes, setAttributes } ) {

    const  { columns, listHeading, listStyle, numListItems, listItems, fontFamily, text, textarea, colorVariant, title, buttonStyle, buttonUrl, buttonText, buttonTargetBlank, showOnDesktop, showOnTablet, showOnMobile, showImageOnDesktop, showImageOnTablet, showImageOnMobile, selectedOption, customNumber, fontSize, imageOnly, imageSize, uppercase, isUppercase, showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile, showH3OnDesktop, showH3OnTablet, showH3OnMobile, showBodyTextOnDesktop, showBodyTextOnTablet, showBodyTextOnMobile, wholeCardButton, removeTopPadding } = attributes;
    
    const darkClass = `${colorVariant === 'DARK' ? 'bg-navy-100 dark-card' : ''}`;

    const eyebrowClasses = () => {
        let className = '';
        if(colorVariant !== "DARK" && selectedOption === "custom") {
            className = `text-secondaryBlue-100`;
        }
        return className;
    };

    const onChangeColumns = (newColumns) => {
        setAttributes({ columns: newColumns });
    };
    const onChangeTitle = (newTitle) => {
        setAttributes({ title: newTitle });
    };

    const onChangeSelectedOption = (newOption) => {
        setAttributes({ 
            selectedOption: newOption,
            fontFamily: newOption !== 'numeric' ? 'display' : fontFamily
        });
    };

    const onChangeEyebrow = (newEyebrow) => {
        setAttributes({ text: newEyebrow });
    };

    const onChangeDescription = (newDescription) => {
        setAttributes({ textarea: newDescription });
    };

    const onChangeFontSize = (newFontSize) => {
        setAttributes({ fontSize: newFontSize });
    };
    
    const onChangeImageOnly = (newValue) => {
        setAttributes({ imageOnly: newValue });
    };

    const onPressAddListItem = () =>{
		let newItems = [...listItems];
		newItems.push("List item");
		setAttributes({ listItems: newItems});
	}

	const onPressRemoveListItem = () =>{
		let newItems = [...listItems];
		newItems.pop();
		setAttributes({ listItems: newItems});
	}

    const updateListItem = (val, index) => {
        let newListItems = [...listItems];
        newListItems[index] = val;
		setAttributes({ listItems: newListItems});
    }

    const template = [[
        "core/image",
    ]];
  
    const allowedBlocks = ["core/image"];

    const onChangeButtonText = ( newButtonText ) => {
        setAttributes( { buttonText: newButtonText } );
    };

    const onChangeButtonUrl = ( newUrl ) => {
        setAttributes( { buttonUrl: newUrl } );
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
    const onChangeImageOnDeskktop = (newValue) => { //, attribute name
        setAttributes({ showImageOnDesktop: newValue });
    };
    
    const onChangeImageOnTablet = (newValue) => {
        setAttributes({ showImageOnTablet: newValue });
    };
    
    const onChangeImageOnMobile = (newValue) => {
        setAttributes({ showImageOnMobile: newValue });
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

    const onClickButton = () => {
        // Handle button click here
    };

    const onChangeCustomNumber = (newNumber) => {
        setAttributes({ customNumber: newNumber });
    };

    const onChangeIsUppercase = (newValue) => {
        setAttributes({ isUppercase: newValue });
    };

    let buttonColor = '';

    if(buttonStyle=="primary") {
        buttonColor = 'text-white';
    }

    if (colorVariant === 'NOBACKGROUND') {
        buttonColor = buttonStyle == 'secondary' ? 'text-secondaryBlue-100' : buttonColor;
    }

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

    function getBodyTextVisibilityClasses(showBodyTextOnDesktop, showBodyTextOnTablet, showBodyTextOnMobile) {
        let classes = '';
        if (!showBodyTextOnDesktop) {
            classes += ' lg:hidden';
        }
        if (!showBodyTextOnTablet) {
            classes += ' md:hidden';
        }
        if (!showBodyTextOnMobile) {
            classes += ' sm:hidden';
        }
        return classes;
    }

    return (
        <div {...useBlockProps()}>
            <div className={`${getVisibilityClasses(showImageOnDesktop, showImageOnTablet, showImageOnMobile)} card-image`}>
                <InnerBlocks
                    template={template}
                    templateLock="all"
                    allowedBlocks={allowedBlocks}
                />
            </div>
            {!imageOnly && (
                <>
                <PlainText
                    tagName="span"
                    className={`eyebrow ${darkClass} ${eyebrowClasses()} ${isUppercase ? 'uppercase' : ''} ${getVisibilityClasses(showOnDesktop, showOnTablet, showOnMobile)}`}
                    value={text}
                    onChange={onChangeEyebrow}
                    placeholder={__("Eyebrow Text Here", "gutenpride")}
                />
                <RichText
                    tagName="h3"
                    className={`title ${selectedOption} card-title font-semibold text-4xl font-${fontFamily} mb-[30px] ${(selectedOption === 'list' || selectedOption === 'custom') ? `text-[${customNumber}px]` : ``}`} // Add the selected option as a class
                    value={title}
                    onChange={onChangeTitle}
                    placeholder={__("Title Text Here", "gutenpride")}
                />
                <RichText 
                    tagName="p"
                    value={textarea}
                    className={`${darkClass} ${colorVariant=="DARK" ? 'text-white' : 'text-navy-100'} ${fontSize ? `font-size-${fontSize}` : ''}`}
                    onChange={onChangeDescription}
                    placeholder={__("Description Text Here", "gutenpride")}
                />
                {buttonStyle !== "hide" && (
                <RichText
                    tagName="p" // Use a p tag here
                    className={`btn-${buttonStyle} ${colorVariant} ${buttonStyle=='primary' && colorVariant=="DARK" ? 'text-white' : 'text-navy-100'}`}
                    onChange={onChangeButtonText}
                    value={buttonText}
                    placeholder="Button text here"
                />
                )}
                {buttonStyle !== "hide" && (
                    <span class='flex flex-col items-start gap-4'>
                        <label>
                            Button URL
                            <URLInput
                                value={ buttonUrl }
                                onChange={ onChangeButtonUrl }
                            />
                        </label>
                        <ToggleControl label="Open in new tab" checked={buttonTargetBlank} onChange={(value)=>{ setAttributes({buttonTargetBlank: value})}} />
                    </span>
                )}
                {selectedOption === 'list' && (
                    <div className={`card-list-wrapper mt-[15px] mb-[50px] text-[20px] ${colorVariant === 'DARK' ? 'card-list-dark' : 'card-list-light'}`}>
                        <RichText
                            tagName="div"
                            className={`card-list-heading font-bold mb-[25px]`}
                            onChange={(value) => setAttributes({listHeading: value})}
                            value={listHeading}
                            placeholder="List heading"
                        />
                        <ul className={`card-list list-${listStyle=='bullet' ? 'disc' : listStyle} flex flex-col gap-4`}>
                            {listItems.map((item,i)=>
                            <li key={i} className={`card-list-item ${listStyle=='bullet' ? 'ml-3 list-item' : 'flex'} gap-4 list-${listStyle}`}>
                                {listStyle == 'check' && (
                                    <svg 
                                        className="card-list-item-icon"
                                        width="24" 
                                        height="20" 
                                        viewBox="0 0 24 20" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path 
                                            d="M0.857422 12.6572L5.53742 18.6743C5.69534 18.8795 5.8977 19.0463 6.12928 19.1622C6.36086 19.2779 6.61567 19.3398 6.87456 19.3429C7.12929 19.3459 7.38148 19.2919 7.61279 19.1853C7.84408 19.0785 8.04868 18.9215 8.21171 18.7257L23.1431 0.657227" 
                                            stroke="white" 
                                            stroke-linecap="round" 
                                            stroke-linejoin="round">
                                        </path>
                                    </svg>
                                )}
                                <RichText
                                    tagName="span"
                                    className={`card-list-item-label`}
                                    onChange={(value) => updateListItem(value, i)}
                                    value={item}
                                    placeholder="List item"
                                />
                            </li>
                            )}
                        </ul>
                    </div>
                )}
                </>
            )}
            <InspectorControls key="setting">
                <div class="block-editor-block-card">
                    <Panel>
                        
                        <PanelBody>
                            <PanelRow>
                                <ToggleControl
                                    label="Image Only"
                                    checked={imageOnly}
                                    onChange={onChangeImageOnly}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Remove Top Padding"
                                    checked={removeTopPadding}
                                    onChange={(value) => setAttributes({ removeTopPadding: value })}
                                />
                            </PanelRow>
                            <PanelRow>
                                <div style={{width:"100%"}}>
                                    <ToggleControl label="Image Visible on Desktop?" checked={showImageOnDesktop} onChange={onChangeImageOnDeskktop} />
                                    <ToggleControl label="Image Visible on Tablet?" checked={showImageOnTablet} onChange={onChangeImageOnTablet} />
                                    <ToggleControl label="Image Visible on Mobile?" checked={showImageOnMobile}  onChange={onChangeImageOnMobile} />
                                </div>
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Show on Desktop"
                                    checked={showOnDesktop}
                                    onChange={onChangeShowOnDesktop}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Show on Tablet"
                                    checked={showOnTablet}
                                    onChange={onChangeShowOnTablet}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Show on Mobile"
                                    checked={showOnMobile}
                                    onChange={onChangeShowOnMobile}
                                />
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
                        <PanelBody title="Card Style">
                            <SelectControl
                                label="Option"
                                value={selectedOption}
                                options={[
                                    { label: 'Standard', value: 'standard' },
                                    { label: 'Numeric', value: 'numeric' },
                                    { label: 'List', value: 'list'},
                                    { label: 'Custom', value: 'custom' },
                                ]}
                                onChange={onChangeSelectedOption}
                            />
                            {(selectedOption === 'custom' || selectedOption == 'list') && (
                                <PanelRow>
                                    <TextControl
                                        label="Heading Size"
                                        help="in pixels"
                                        type="number"
                                        value={customNumber}
                                        onChange={onChangeCustomNumber}
                                    />
                                </PanelRow>
                            )}
                            { selectedOption === 'numeric' && (
                                <SelectControl
                                    label="Font"
                                    type="string"
                                    value={fontFamily}
                                    options={[
                                        { label: 'Sans-Serif', value: 'display' },
                                        { label: 'Serif', value: 'header' }
                                    ]}
                                    onChange={(value) => setAttributes({ fontFamily: value })}
                                />
                            )}
                        </PanelBody>

                        <PanelBody title="Image Size">
                            <SelectControl
                                value={imageSize}
                                options={[
                                    { label: 'Default', value: 'default' },
                                    { label: 'Small', value: 'sm' },
                                    { label: 'Auto', value: 'auto'}
                                ]}
                                onChange={(value)=>setAttributes({imageSize: value})}
                            />
                        </PanelBody>
                        
                        { selectedOption === 'list' && (
                            <PanelBody>
                                <PanelRow>
                                    <div><legend>List Style</legend></div>
                                </PanelRow>
                                <PanelRow>
                                    <SelectControl
                                        type="string"
                                        value={listStyle}
                                        options={[
                                            { label: 'Check', value: 'check' },
                                            { label: 'Bullet', value: 'bullet' },
                                            { label: 'None', value: 'none' }
                                        ]}
                                        onChange={(value) => setAttributes({ listStyle: value })}
                                    />
                                </PanelRow>
                                <PanelRow>
                                    <Button icon="plus-alt" isPrimary text="Add List Item" onClick={onPressAddListItem} />
                                </PanelRow>
                                <PanelRow>
                                    <Button icon="minus" isPrimary text="Remove List Item" onClick={onPressRemoveListItem} />
                                </PanelRow>
                            </PanelBody>
                        )}

                        <PanelBody title={__('Body Text Visibility Settings')}>
                            <ToggleControl
                                label="Show Body Text on Desktop"
                                checked={showBodyTextOnDesktop}
                                onChange={(value) => setAttributes({ showBodyTextOnDesktop: value })}
                            />
                            <ToggleControl
                                label="Show Body Text on Tablet"
                                checked={showBodyTextOnTablet}
                                onChange={(value) => setAttributes({ showBodyTextOnTablet: value })}
                            />
                            <ToggleControl
                                label="Show Body Text on Mobile"
                                checked={showBodyTextOnMobile}
                                onChange={(value) => setAttributes({ showBodyTextOnMobile: value })}
                            />
                        </PanelBody>
                        <PanelBody title="Description Text Font Size">
                            <TextControl
                                label="Font Size"
                                help="In pixels"
                                type="number"
                                value={fontSize}
                                onChange={onChangeFontSize}
                            />
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
                        </PanelBody>
                    </Panel>
                </div>
            </InspectorControls>
        </div>
    );
}
