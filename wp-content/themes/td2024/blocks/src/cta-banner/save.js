import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks, useBlockProps, } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import classnames from 'classnames';

export default function save({ attributes, clientId}) {
    const  {
        referenceId,
        colorVariant,
        layout,
        vSplit,
        roundTopCorners,
        roundBottomCorners,
        eyebrow,
        showEyebrowOnDesktop,
        showEyebrowOnTablet,
        showEyebrowOnMobile,
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
        ctaOpenNewWindow,
        showCTAOnMobile,
        showCTAOnTablet,
        showCTAOnDesktop,
        secondCTAText,
        secondCTAUrl,
        secondCTAOpenNewWindow,
        showSecondCTAOnMobile,
        showSecondCTAOnTablet,
        showSecondCTAOnDesktop,
        showInnerBlockOnDesktop,
        showInnerBlockOnTablet,
        showInnerBlockOnMobile,
        showImageOnDesktop,
        showImageOnTablet,
        showImageOnMobile,
     } = attributes;

     const blockProps =useBlockProps.save({
    });

    console.log("Current Attributes", attributes);

    let showVSplit = layout === '2 Column';

    const getVisibilityClasses = (desktop, tablet, mobile) => {

		return  `${mobile ?  'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden' }`;
	}

    const buttonClass = `button ${secondCTAText === '' ? 'arrow-only' : ''}`;

    let arrowColor;

    if (colorVariant === 'DARK') {
        arrowColor = 'arrow-white';
    } else if (colorVariant === 'LIGHT') {
        arrowColor = 'arrow-dark';
    } else if (colorVariant === 'GRADIENT1') {
        arrowColor = 'arrow-white';
    }

    let bgColor;
  
    if (colorVariant === 'DARK') {
      bgColor = 'bg-navy';
  } else if (colorVariant === 'LIGHT') {
      bgColor = 'bg-white text-blue-100';
  } else if (colorVariant === 'GRADIENT1') {
      arrowColor = 'bg-navy';
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

    const anchorId = `cta-banner-${referenceId}`; 

    if (layout === '2 Column') {
        return (
          <>
            <div {...blockProps}>
                <div id={anchorId}  className='cta-block cta-banner--rect py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical'>
                    <div class="container mx-auto">
                        <div className={`cta-banner-content block-container mx-auto flex flex-col lg:flex-row items-start md:items-center ${colorVariant === "DARK" ? 'bg-colorGradient1 text-white' : 'border border-solid border-navy'} rounded-[20px]`}>
                            <div className={`xrounded-[20px] cta-img ${getVisibilityClasses(showImageOnDesktop, showImageOnTablet, showImageOnMobile)}`}>
                                <InnerBlocks.Content/>
                            </div>
                            <div className='cta-right-column flex-col justify-center md:flex-1'>
                            <div className={`cta-banner-text mb-8 lg:mb-0 ${showInnerBlockOnDesktop? '' : ''} ${showInnerBlockOnTablet? '' : ''} ${showInnerBlockOnMobile? '' : ''}  ${showVSplit ? leftColumnSpace : ''}`}>
                                <RichText.Content
                                    tagName="h4"
                                    className={`text-eyebrow relative title font-display font-semibold leading-eyebrow  ${colorVariant === 'DARK' ? 'text-accentTurquoise-100' : 'text-eyebrow-dark'} ${getVisibilityClasses(showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile)}`} // Add the selected option as a class
                                    value={eyebrow}
                                />
                                <RichText.Content
                                    tagName="h3"
                                    className={`text-heading relative title font-header font-light xtext-5xl xpy-4 leading-[1.3] tracking-wide pr-[40px] ${getVisibilityClasses(showHeadingOnDesktop, showHeadingOnTablet, showHeadingOnMobile)}`} // Add the selected option as a class
                                    value={heading}
                                />
                                <RichText.Content
                                    tagName="span"
                                    className={`text-subheading relative title font-display text-l mb-10 leading-[1.5] ${getVisibilityClasses(showSubheadingOnDesktop, showSubheadingOnTablet, showSubheadingOnMobile)}`} // Add the selected option as a class
                                    value={subheading}
                                />
                            </div>
                            { (ctaText || secondCTAText) && (
                                <div className={`cta-container block sm:flex flex-row`}>
                                    {ctaText && (
                                    <div className={`flex-col justify-center ${getVisibilityClasses(showCTAOnDesktop, showCTAOnTablet, showCTAOnMobile)}`}>
                                        <RichText.Content
                                            tagName="a" // Use an a tag here
                                            className={`btn-primary-clear text-header w-fit mx-auto text-mobile-button lg:text-button ${colorVariant === 'LIGHT' ? 'text-blue-100 border border-solid border-1 border-blue-100' : 'btn-primary-clear outline text-white'}`}
                                            href={ ctaUrl } // Set the href attribute to the button URL
                                            value={ ctaText }
                                            target={ctaOpenNewWindow ? '_blank' : ''}
                                            rel="noopener"
                                        />
                                    </div> )}
                                    {secondCTAUrl && (
                                    <div className={`secondary-btn-wrapper flex-col  justify-center  ${getVisibilityClasses(showSecondCTAOnDesktop, showSecondCTAOnTablet, showSecondCTAOnMobile)}`}>
                                        <RichText.Content
                                                tagName="a" // Use an a tag here
                                                className={`btn-secondary mt-[15px] text-center sm:text-left sm:mt-0 sm:ml-6 ${arrowColor} ${buttonClass} text-mobile-secondary-button lg:text-secondary-button`}
                                                href={secondCTAUrl} // Set the href attribute to the button URL
                                                value={secondCTAText}
                                                target={secondCTAOpenNewWindow ? '_blank' : ''}
                                                rel="noopener"
                                            />
                                    </div>
                                    )}
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </>
        )
    } else {
        return (
          <>
            <div {...blockProps}>
                <div id={anchorId} className={`cta-block cta-banner--pill py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical ${colorVariant === 'LIGHT' ? 'bg-white-100' : colorVariant === 'LIGHT GRADIENT' ? 'bg-white' : 'x--full-width bg-navy-100'}`}>
                    <div class="container mx-auto">
                        <div className={`cta-banner-content block-container mx-auto md:py-[40px] lg:py-[80px] md:px-[100px] justify-between md:items-center lg:flex ${colorVariant === 'DARK' ? 'bg-navy-100 text-white gradient-border' : colorVariant === 'LIGHT' ? 'bg-white text-blue-100 border border-solid border-blue-100' : colorVariant === 'DARK GRADIENT' ? 'bg-darkVertical text-white' : 'bg-colorGradient1 text-white'} p-6`}>
                            <div className={`cta-banner-text ${showInnerBlockOnDesktop? '' : ''} ${showInnerBlockOnTablet? '' : ''} ${showInnerBlockOnMobile? '' : ''}  ${showVSplit ? leftColumnSpace : ''}`}>
                                <RichText.Content
                                    tagName="h3"
                                    className={`text-heading relative title font-header font-light xtext-5xl xpy-4 leading-[1.3] tracking-wide pr-[40px] ${getVisibilityClasses(showHeadingOnDesktop, showHeadingOnTablet, showHeadingOnMobile)}`} // Add the selected option as a class
                                    value={heading}
                                />
                            </div>
                            { (ctaText || secondCTAText) && (
                                <div className={`cta-container block sm:flex flex-row`}>
                                    {ctaText && (
                                    <div className={`flex-col justify-center ${getVisibilityClasses(showCTAOnDesktop, showCTAOnTablet, showCTAOnMobile)}`}>
                                        <RichText.Content
                                            tagName="a" // Use an a tag here
                                            className={`btn-primary-clear text-mobile-button lg:text-button w-fit ${colorVariant === 'LIGHT' ? 'text-blue-100 border border-solid border-1 border-blue-100' : 'btn-primary-clear outline text-white'}`}
                                            href={ ctaUrl } // Set the href attribute to the button URL
                                            value={ ctaText }
                                        />
                                    </div> )}
                                    {secondCTAUrl && (
                                    <div className={`secondary-btn-wrapper flex-col  justify-center  ${getVisibilityClasses(showSecondCTAOnDesktop, showSecondCTAOnTablet, showSecondCTAOnMobile)}`}>
                                        <RichText.Content
                                                tagName="a" // Use an a tag here
                                                className={`btn-secondary text-mobile-secondary-button lg:text-secondary-button mt-[15px] text-center sm:text-left sm:mt-0 sm:ml-6 ${arrowColor} ${buttonClass}`}
                                                href={secondCTAUrl} // Set the href attribute to the button URL
                                                value={secondCTAText}
                                            />
                                    </div>
                                    )}
                                </div> )}
                        </div>
                    </div>
                </div>
            </div>
          </>
        )

    }
    
}