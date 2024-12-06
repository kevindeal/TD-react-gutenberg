/**
 * External dependencies
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import './editor.scss';

import {
    InnerBlocks,
    useBlockProps,
    PlainText,
    RichText,
    URLInput,
    InspectorControls
} from '@wordpress/block-editor';

import {
    Panel,
	PanelBody,
	PanelRow,
    ToggleControl,
    __experimentalNumberControl as NumberControl,
    RadioControl
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
    const allowedBlocks = ["core/image"];

    const template = [[
        "core/image",
    ]];

    console.log(">>>", attributes);

    const  {stars, maxStars, ctaUrl, ctaText, buttonTargetBlank, text, textarea, author, authorTitle, authorCompany, colorVariant, showOnDesktop, showOnTablet, showOnMobile, showBodyOnDesktop, showBodyOnTablet, showBodyOnMobile, showQuoteImageOnDesktop, showQuoteImageOnTablet, showQuoteImageOnMobile, showAuthorOnDesktop, showAuthorOnTablet, showAuthorOnMobile, showAuthorTitleOnDesktop, showAuthorTitleOnTablet, showAuthorTitleOnMobile} = attributes;

    const darkClass = `${colorVariant === 'DARK' ? 'bg-navy-100' : ''}`;

    const onChangeEyebrow = (newEyebrow) => {
        setAttributes({ text: newEyebrow });
    };

    const onChangeDescription = (newDescription) => {
        setAttributes({ textarea: newDescription });
    };
    
    const onChangeAuthor = (newAuthor) => {
        setAttributes({ author: newAuthor });
    };

    const onChangeAuthorTitle = (newAuthorTitle) => {
        setAttributes({ authorTitle: newAuthorTitle });
    }

    const onChangeAuthorCompany = (newAuthorCompany) => {
        setAttributes({ authorCompany: newAuthorCompany });
    }

    function getBodyVisibilityClasses(showBodyOnDesktop, showBodyOnTablet, showBodyOnMobile) {
        let classes = '';
        if (!showBodyOnDesktop) {
            classes += ' lg:hidden';
        }
        if (!showBodyOnTablet) {
            classes += ' md:hidden';
        }
        if (!showBodyOnMobile) {
            classes += ' sm:hidden';
        }
        return classes;
    }

    function getQuoteImageVisibilityClasses(showQuoteImageOnDesktop, showQuoteImageOnTablet, showQuoteImageOnMobile) {
        let classes = '';
        if (!showQuoteImageOnDesktop) {
            classes += ' lg:hidden';
        }
        if (!showQuoteImageOnTablet) {
            classes += ' md:hidden';
        }
        if (!showQuoteImageOnMobile) {
            classes += ' sm:hidden';
        }
        return classes;
    }

    function getAuthorVisibilityClasses(showAuthorOnDesktop, showAuthorOnTablet, showAuthorOnMobile) {
        let classes = '';
        if (!showAuthorOnDesktop) {
            classes += ' lg:hidden';
        }
        if (!showAuthorOnTablet) {
            classes += ' md:hidden';
        }
        if (!showAuthorOnMobile) {
            classes += ' sm:hidden';
        }
        return classes;
    }

    function getAuthorTitleVisibilityClasses(showAuthorTitleOnDesktop, showAuthorTitleOnTablet, showAuthorTitleOnMobile) {
        let classes = '';
        if (!showAuthorTitleOnDesktop) {
            classes += ' lg:hidden';
        }
        if (!showAuthorTitleOnTablet) {
            classes += ' md:hidden';
        }
        if (!showAuthorTitleOnMobile) {
            classes += ' sm:hidden';
        }
        return classes;
    }

    console.log()

    return (
        <div {...useBlockProps()}>
            <>
            {parseInt(stars) > 0 ? (
                <div className={`quote-rating`}>
                {Array(maxStars).keys().map((e,i)=>
                    <span className={`star ${i < parseInt(stars) ? "active" : "inactive"}`} key={i}>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.2284 17.6413L21.9696 0.328125L16.7107 17.6413H0.328125L13.7025 27.1852L8.6168 43.611L21.9696 33.4612L35.344 43.611L30.2582 27.1852L43.611 17.6413H27.2284Z" fill="#000"/>
                        </svg>
                    </span>
                )}
                </div>
                ) : (<></>)
            }
            <span className={`quote-open font-header absolute text-[50px] left-0`}>“</span>
            <RichText
                tagName="p"
                className={`quote-body inline text-[50px] font-header leading-[125%] mb-[30px]`}
                value={textarea}
                onChange={onChangeDescription}
                placeholder={__("Quote Body Text", "gutenpride")}
            />
            <span className={`font-header text-[50px]`}>”</span>
            <div className={`image-author-container flex items-center mt-5`}>
                <div class="col-span-2">
                    <InnerBlocks
                        className={`quote-image col-span-1 flex flex-col justify-center h-[90px]`}
                        template={template}
                        templateLock="all"
                        allowedBlocks={allowedBlocks}
                    />
                </div>
                <div class="col-span-4 flex flex-col gap-3">
                    <div>
                    <PlainText
                        tagName="p"
                        className={`quote-author bg-transparent font-bold text-[20px]`}
                        value={author}
                        onChange={onChangeAuthor}
                        placeholder={__("Quote Author", "gutenpride")}
                    />
                    </div>
                    <div>
                    <PlainText
                        tagName="p"
                        className={`quote-author-title bg-transparent text-[20px]`}
                        value={authorTitle}
                        onChange={onChangeAuthorTitle}
                        placeholder={__("Regional Vice President", "gutenpride")}
                    />
                    </div>
                    <div>
                    <PlainText
                        tagName="p"
                        className={`quote-author-company bg-transparent text-[20px]`}
                        value={authorCompany}
                        onChange={onChangeAuthorCompany}
                        placeholder={__("Company Name", "gutenpride")}
                    />
                    </div>
                </div>
            </div>
            <div className={`cta-links mt-[60px]`}>
                <div className={`primary-btn-wrapper mr-4 md:mr-8 flex-col flex-1`}>
                    <RichText
                        tagName="p"
                        className={`${colorVariant} btn-primary ${(colorVariant === 'DARK' || typeof(colorVariant) === 'undefined') ? 'text-white' : 'text-black'}`}
                        onChange={(value)=>{setAttributes({ctaText:value})}}
                        value={ctaText}
                        placeholder="Primary CTA text here"
                    /><br/>
                    <span class='flex items-center gap-4'>
                        <label>
                            Primary CTA URL
                            <URLInput
                                value={ ctaUrl }
                                onChange={(value)=>{setAttributes({ctaUrl:value})}}
                            />
                        </label>
                        <ToggleControl label="Open in new tab" checked={buttonTargetBlank} onChange={(value)=>{ setAttributes({buttonTargetBlank: value})}} />
                    </span>
                </div>
            </div>
            </>
            <InspectorControls key="setting">
                <div class="block-editor-block-card">
                    <Panel>
                        <PanelBody title={__('Quote Body Text Visibility')}>
                            <PanelRow>
                                <ToggleControl
                                    label="Show Quote Body Text on Desktop"
                                    checked={showBodyOnDesktop}
                                    onChange={(value) => setAttributes({ showBodyOnDesktop: value })}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Show Body Text on Tablet"
                                    checked={showBodyOnTablet}
                                    onChange={(value) => setAttributes({ showBodyOnTablet: value })}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Show Body Text on Mobile"
                                    checked={showBodyOnMobile}
                                    onChange={(value) => setAttributes({ showBodyOnMobile: value })}
                                />
                            </PanelRow>
                        </PanelBody>

                        <PanelBody title={__('Quote Image/Logo Visibility')}>
                            <PanelRow>
                                <ToggleControl
                                    label="Show Quote Image/Logo on Desktop"
                                    checked={showQuoteImageOnDesktop}
                                    onChange={(value) => setAttributes({ showQuoteImageOnDesktop: value })}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Show Image/Logo on Tablet"
                                    checked={showQuoteImageOnTablet}
                                    onChange={(value) => setAttributes({ showQuoteImageOnTablet: value })}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Show Image/Logo on Mobile"
                                    checked={showQuoteImageOnMobile}
                                    onChange={(value) => setAttributes({ showQuoteImageOnMobile: value })}
                                />
                            </PanelRow>
                        </PanelBody>

                        <PanelBody title={__('Author Visibility')}>
                            <PanelRow>
                                <ToggleControl
                                    label="Show Author on Desktop"
                                    checked={showAuthorOnDesktop}
                                    onChange={(value) => setAttributes({ showAuthorOnDesktop: value })}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Show Author on Tablet"
                                    checked={showAuthorOnTablet}
                                    onChange={(value) => setAttributes({ showAuthorOnTablet: value })}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Show Author on Mobile"
                                    checked={showAuthorOnMobile}
                                    onChange={(value) => setAttributes({ showAuthorOnMobile: value })}
                                />
                            </PanelRow>
                        </PanelBody>

                        <PanelBody title={__('Author Title Visibility')}>
                            <PanelRow>
                                <ToggleControl
                                    label="Show Author Title on Desktop"
                                    checked={showAuthorTitleOnDesktop}
                                    onChange={(value) => setAttributes({ showAuthorTitleOnDesktop: value })}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Show Author Title on Tablet"
                                    checked={showAuthorTitleOnTablet}
                                    onChange={(value) => setAttributes({ showAuthorTitleOnTablet: value })}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Show Author Title on Mobile"
                                    checked={showAuthorTitleOnMobile}
                                    onChange={(value) => setAttributes({ showAuthorTitleOnMobile: value })}
                                />
                            </PanelRow>
                        </PanelBody>

                        <PanelBody title={__('Rating')}>
                            <PanelRow>
                                <RadioControl
                                label="Stars"
                                selected={ stars }
                                options={ [
                                    { label: '★ ★ ★ ★ ★', value: "5" },
                                    { label: '★ ★ ★ ★', value: "4" },
                                    { label: '★ ★ ★', value: "3" },
                                    { label: '★ ★', value: "2" },
                                    { label: '★', value: "1" },
                                    { label: 'No rating', value: "0" },
                                ] }
                                onChange={ ( value ) => setAttributes({ stars: value })}
                            />
                            </PanelRow>
                        </PanelBody>
                    </Panel>
                </div>
            </InspectorControls>
        </div>
    );
}
