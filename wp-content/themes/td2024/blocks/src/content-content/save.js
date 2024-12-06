import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks, useBlockProps, } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import classnames from 'classnames';

export default function save({ attributes, clientId}) {
    const  {
        colorVariant,
        layout,
        vSplit,
        stackPreference,
        stackOrder,
        removeTopPadding,
        roundTopCorners,
        roundBottomCorners,
        eyebrow,
        showEyebrowOnMobile,
        showEyebrowOnTablet,
        showEyebrowOnDesktop,
        heading,
        showHeadingOnMobile,
        showHeadingOnTablet,
        showHeadingOnDesktop,
        subheading,
        showSubheadingOnMobile,
        showSubheadingOnTablet,
        showSubheadingOnDesktop,
        ctaText,
        ctaUrl,
        showCTAOnMobile,
        showCTAOnTablet,
        showCTAOnDesktop,
        secondCTAText,
        secondCTAUrl,
        showSecondCTAOnMobile,
        showSecondCTAOnTablet,
        showSecondCTAOnDesktop,
        showInnerBlockOnDesktop,
        showInnerBlockOnTablet,
        showInnerBlockOnMobile,
        selectedOption,
        overrideBackground,
        backgroundHorizontalAlign,
        backgroundVerticalAlign,
        backgroundFitMode,
        backgroundMedia,
        imageLoc,
        rowIndex,
        extraPadding
     } = attributes;

     const blockProps =useBlockProps.save({
    });

    let showVSplit = layout === '2 Column';

    const getVisibilityClasses = (desktop, tablet, mobile) => {

		return  `${mobile ?  'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden' }`;
	}
    const getInlineVisibilityClasses = (desktop, tablet, mobile) => {

		return  `${mobile ?  'inline-block' : 'hidden'} ${tablet ? 'md:inline-block' : 'md:hidden'} ${desktop ? 'lg:inline-block' : 'lg:hidden' }`;
	}

    const buttonClass = `button ${secondCTAText === '' ? 'arrow-only' : ''}`;

    let arrowColor;
    let eyebrowColor;
	let paddingRight = '';
	let paddingLeft = '';

	if(imageLoc == 'right') {
		if(rowIndex%2==0) {
			paddingLeft = `${extraPadding}px`;
			paddingRight = 0;
		}else{
			paddingLeft = 0;
			paddingRight = `${extraPadding}px`;
		}
	}else{
		if(rowIndex%2==0) {
			paddingLeft = 0;
			paddingRight = `${extraPadding}px`;
		}else{
			paddingLeft = `${extraPadding}px`;
			paddingRight = 0;
		}
	}

    if (colorVariant === 'DARK') {
        arrowColor = 'arrow-white';
        eyebrowColor = 'text-accentTurquoise-100';
    } else if (colorVariant === 'LIGHT') {
        arrowColor = 'arrow-dark';
        eyebrowColor = 'text-blue-100';
    }

    let leftColumnSpace = 'md:flex-1';
    let rightColumnSpace = 'md:flex-3';
    if(vSplit === '33/66'){
        rightColumnSpace = 'md:flex-2';
    } else if(vSplit === '50/50'){
        rightColumnSpace = 'md:flex-1';
    } else if(vSplit =='66/33'){
        rightColumnSpace = 'md:flex-1';
        leftColumnSpace = 'md:flex-2';
    } else if(vSplit =='75/25'){
        rightColumnSpace = 'md:flex-1';
        leftColumnSpace = 'md:flex-3';
    }

    if(blockProps && roundTopCorners){
        blockProps.className += ' rounded-t-lg';
    }
    if(blockProps && roundBottomCorners){
        blockProps.className += ' rounded-b-lg';
    }


    return (
        <>
        <div {...blockProps}>
            <div className="hidden">{JSON.stringify(attributes)}</div>
                <div className={`content-content flex`} style={ { paddingRight: paddingRight, paddingLeft: paddingLeft } }>
                    <div className={`hero-text ${showInnerBlockOnDesktop? 'lg:pb-20' : ''} ${showInnerBlockOnTablet? 'md:pb-20' : ''} ${showInnerBlockOnMobile? 'pb-20' : ''}  ${showVSplit ? leftColumnSpace : ''}`}>
                        {eyebrow && (
                            <RichText.Content
                                tagName="span"
                                className={`eyebrow text-base md:text-[22px] font-semibold font-display font-semibold ${removeTopPadding ? '' : 'mt-4 '} ${layout == 'horizontal' ? removeTopPadding ? '' : 'md:mt-24'  : removeTopPadding ? '' : 'md:mt-4'} ${eyebrowColor} mb-5 ${getVisibilityClasses(showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile)}`}
                                value={eyebrow}
                            />
                        )}
                        <RichText.Content
                            tagName="h3"
                            className={`relative leading-card-header title font-display font-semibold text-[22px] md:text-4xl mb-6 ${getVisibilityClasses(showHeadingOnDesktop, showHeadingOnTablet, showHeadingOnMobile)}`} // Add the selected option as a class
                            value={heading}
                        />
                        <RichText.Content
                            tagName="span"
                            className={`html-format content-section__subheading relative title leading-[1.45] font-display text-l mb-[50px] ${getInlineVisibilityClasses(showSubheadingOnDesktop, showSubheadingOnTablet, showSubheadingOnMobile)}`} // Add the selected option as a class
                            value={subheading}
                        />
                        { (ctaText || secondCTAText) && (
                        <div className={`cta-container flex flex-row`}>
                            {ctaText && (
                            <div className={`primary-btn-wrapper mr-8 flex-col justify-center ${getVisibilityClasses(showCTAOnDesktop, showCTAOnTablet, showCTAOnMobile)}`}>
                                <RichText.Content
                                    tagName="a" // Use an a tag here
                                    className="btn-primary text-white text-mobile-button lg:text-button"
                                    href={ ctaUrl } // Set the href attribute to the button URL
                                    value={ ctaText }
                                />
                            </div> )}
                            {secondCTAUrl && (
                            <div className={`secondary-btn-wrapper flex-col justify-center  ${getVisibilityClasses(showSecondCTAOnDesktop, showSecondCTAOnTablet, showSecondCTAOnMobile)}`}>
                                <RichText.Content
                                        tagName="a" // Use an a tag here
                                        className={`btn-secondary ${arrowColor} ${buttonClass} text-mobile-secondary-button lg:text-secondary-button`}
                                        href={secondCTAUrl} // Set the href attribute to the button URL
                                        value={secondCTAText}
                                    />
                            </div>
                            )}
                        </div> )}
                    </div>
                </div>
            </div>
        </>
    )
}