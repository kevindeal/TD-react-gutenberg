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
import '../../../assets/fontawesome/css/fontawesome.css';
import '../../../assets/fontawesome/css/brands.css';



export default function Edit( { attributes, setAttributes } ) {

    const  { columns, text, title, colorVariant, showOnDesktop, showOnTablet, showOnMobile, showImageOnDesktop, showImageOnTablet, showImageOnMobile, selectedOption, customNumber, fontSize, imageOnly, uppercase, isUppercase, showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile, showH3OnDesktop, showH3OnTablet, showH3OnMobile, showBodyTextOnDesktop, showBodyTextOnTablet, showBodyTextOnMobile, linkedInUrl, githubUrl, twitterUrl, linkedInIcon, githubIcon, twitterIcon  } = attributes;
    const darkClass = `${colorVariant === 'DARK' ? 'bg-navy-100' : ''}`;

    console.log("Vertical Card attributes");
    const onChangeColumns = (newColumns) => {
        setAttributes({ columns: newColumns });
    };
    const onChangeTitle = (newTitle) => {
        setAttributes({ title: newTitle });
    };

    const onChangeSelectedOption = (newOption) => {
        setAttributes({ selectedOption: newOption });
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

    const template = [[
        "core/image",
    ]];
  
    const allowedBlocks = ["core/image"];

    const { buttonText } = attributes;

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

    const getVisibilityClasses = (desktop, tablet, mobile) => {

		return  `${mobile ?  'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden' }`;
	}

    const getSocialIcon = (social) =>{
        // if(social == 'linkedIn'){
        //     return <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 448 512"><path fill={colorVariant == 'DARK' ? '#FFFFFF' : '#000000' }  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
        // }
        // if(social == 'github'){
        //     return <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 496 512"><path fill={colorVariant == 'DARK' ? '#FFFFFF' : '#000000' }  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
        // }
        // if(social == 'twitter'){
        //     return <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px"  viewBox="0 0 512 512"><path fill={colorVariant == 'DARK' ? '#FFFFFF' : '#000000' } d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
        // }

        return <i class={`fa-brands fa-${social}`}></i>;
    }

    return (
        <div {...useBlockProps()}>
                <div className={`${getVisibilityClasses(showImageOnDesktop, showImageOnTablet, showImageOnMobile)}`}>
                    <InnerBlocks
                        template={template}
                        templateLock="all"
                        allowedBlocks={allowedBlocks}
                    />
                </div>
                <RichText
                    tagName="span"
                    className={`eyebrow ${getVisibilityClasses(showOnDesktop, showOnTablet, showOnMobile)}`}
                    value={text}
                    onChange={onChangeEyebrow}
                    placeholder={__("Name Text Here", "gutenpride")}
                />
                <RichText
                    tagName="h3"
                    className={`title ${selectedOption}`} // Add the selected option as a class
                    value={title}
                    onChange={onChangeTitle}
                    placeholder={__("Title Text Here", "gutenpride")}
                />
                <div className='flex flex-row'>
                    {(linkedInUrl != '' && linkedInIcon != '') && (<>{getSocialIcon(linkedInIcon)}</>)}
                    {(githubUrl != '' && githubIcon != '') && (<>{getSocialIcon(githubIcon)}</>)}
                    {(twitterUrl != '' && twitterIcon != '') && (<>{getSocialIcon(twitterIcon)}</>)}
                </div>
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
                                <div style={{width:"100%"}}>
                                    <ToggleControl label="Image Visible on Desktop?" checked={showImageOnDesktop} onChange={onChangeImageOnDeskktop} />
                                    <ToggleControl label="Image Visible on Tablet?" checked={showImageOnTablet} onChange={onChangeImageOnTablet} />
                                    <ToggleControl label="Image Visible on Mobile?" checked={showImageOnMobile}  onChange={onChangeImageOnMobile} />
                                </div>
                            </PanelRow>
                        </PanelBody>
                        <PanelBody title={__('Social Network URLs')}>
                            <PanelRow>
                                <URLInput
                                label="Social URL 1"
                                value={ githubUrl }
                                onChange={ (value) => { setAttributes({githubUrl: value})} }
                                />
                            </PanelRow>
                            <PanelRow>
                                <div style={{width: "100%"}}>
                                <TextControl
                                    label="Social 1 Icon Name"
                                    value={githubIcon}
                                    placeholder='square-github'
                                    help="Icon name refers to the name of the font-awesome icon. Icons can be found on the font-awesome website."
                                    onChange={ (value) => { setAttributes({githubIcon: value})} }
                                />
                                </div>
                            </PanelRow>
                            <PanelRow>
                                <URLInput
                                label="Social URL 2"
                                value={ linkedInUrl }
                                onChange={ (value) => { setAttributes({linkedInUrl: value})} }
                                />
                            </PanelRow>
                            <PanelRow>
                            <div style={{width: "100%"}}>
                            <TextControl
                                label="Social 2 Icon Name"
                                value={linkedInIcon}
                                placeholder='linkedin'
                                help="Icon name refers to the name of the font-awesome icon. Icons can be found on the font-awesome website."
                                onChange={ (value) => { setAttributes({linkedInIcon: value})} }
                                />
                                </div>
                            </PanelRow>
                            <PanelRow>
                                <URLInput
                                label="Social URL 3"
                                value={ twitterUrl }
                                onChange={ (value) => { setAttributes({twitterUrl: value})} }
                                />
                            </PanelRow>
                            <PanelRow>
                                <div style={{width: "100%"}}>
                                <TextControl
                                    label="Social 3 Icon Name"
                                    value={twitterIcon}
                                    placeholder='x-twitter'
                                    help="Icon name refers to the name of the font-awesome icon. Icons can be found on the font-awesome website."
                                    onChange={ (value) => { setAttributes({twitterIcon: value})} }
                                    />
                                </div>
                            </PanelRow>
                        </PanelBody>

                        <PanelBody title={__('Name Text Visibility Settings')}>
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
                    </Panel>
                </div>
            </InspectorControls>
        </div>
    );
}
