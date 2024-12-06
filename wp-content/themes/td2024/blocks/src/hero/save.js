import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import classnames from 'classnames';

export default function save({ attributes, clientId }) {
    const {
        colorVariant,
        headerFontSize,
        layout,
        vSplit,
        stackPreference,
        stackOrder,
        roundTopCorners,
        roundBottomCorners,
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
        backgroundMediaMobile,
        backgroundMediaTablet,
        shouldLoopOnDesktop,
        shouldLoopOnTablet,
        shouldLoopOnMobile,
        buttonTargetBlank,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames({
            'quote-dark overflow-hidden bg-primaryBlue-100 text-white hero-container relative ': colorVariant === 'DARK',
            'quote-light overflow-hidden hero-container relative': colorVariant === 'LIGHT',
            'bg-heroGradient text-white hero-container relative': colorVariant === 'GRADIENT1',
            'bg-navy-100 bg-heroGradient text-white hero-container relative': colorVariant === 'GRADIENT2'
        }),
    });

    let showVSplit = layout === '2 Column';

    const getVisibilityClasses = (desktop, tablet, mobile) => {
        return `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
    }

    const buttonClass = `button ${secondCTAText === '' ? 'arrow-only' : ''}`;

    const buttonTarget = buttonTargetBlank ? "_blank" : "_self";

    let arrowColor;

    if (colorVariant === 'DARK') {
        arrowColor = 'arrow-white';
    } else if (colorVariant === 'LIGHT') {
        arrowColor = 'arrow-dark';
    } else if (colorVariant === 'GRADIENT1') {
        arrowColor = 'arrow-white';
    }

    let leftColumnSpace = 'md:flex-1';
    let rightColumnSpace = 'md:flex-3';
    if (vSplit === '33/66') {
        rightColumnSpace = 'md:flex-2';
    } else if (vSplit === '40/60') {
        leftColumnSpace = 'md:flex-2';
        rightColumnSpace = 'md:flex-3';
    } else if (vSplit === '50/50') {
        rightColumnSpace = 'md:flex-1';
    } else if (vSplit === '60/40') {
        leftColumnSpace = 'md:flex-3';
        rightColumnSpace = 'md:flex-2';
    } else if (vSplit === '66/33') {
        rightColumnSpace = 'md:flex-1';
        leftColumnSpace = 'md:flex-2';
    } else if (vSplit === '75/25') {
        rightColumnSpace = 'md:flex-1';
        leftColumnSpace = 'md:flex-3';
    }

    if (blockProps && roundTopCorners) {
        blockProps.className += ' rounded-t-hero';
    }
    if (blockProps && roundBottomCorners) {
        blockProps.className += ' rounded-b-mobile-hero md:rounded-b-hero';
    }

    return (
        <>
            <div {...blockProps}>
                {overrideBackground ? (<>
                    {backgroundMedia?.type === "video" ? (
                        <video muted autoPlay playsInline loop={shouldLoopOnDesktop} className={`absolute object-fill max-h-full hidden md:block md:object-${backgroundFitMode} object-${backgroundHorizontalAlign}-${backgroundVerticalAlign} lg:object-lg-${backgroundHorizontalAlign}-${backgroundVerticalAlign} w-[100%]  ${backgroundFitMode === 'contain' ? 'h-auto' : 'h-full'}`} width="100%">
                            <source src={backgroundMedia.url} type={backgroundMedia.mime} />
                        </video>
                    ) : (
                        <img
                            className={`element-background-image wp-image-${backgroundMedia?.id} max-h-full hidden md:block object-${backgroundFitMode} absolute  object-${backgroundHorizontalAlign}-${backgroundVerticalAlign} lg:object-lg-${backgroundHorizontalAlign}-${backgroundVerticalAlign} w-[100%] ${backgroundFitMode === 'contain' ? 'h-auto' : 'h-full'}`}
                            src={backgroundMedia?.url}
                            alt={backgroundMedia?.alt}
                        />
                    )}
                    {backgroundMediaTablet?.type === "video" ? (
                        <video muted autoPlay playsInline loop={shouldLoopOnTablet} className={`absolute object-fill max-h-full hidden md:block lg:hidden md:object-${backgroundFitMode} object-${backgroundHorizontalAlign}-${backgroundVerticalAlign} lg:object-lg-${backgroundHorizontalAlign}-${backgroundVerticalAlign} w-[100%]  ${backgroundFitMode === 'contain' ? 'h-auto' : 'h-full'}`} width="100%">
                            <source src={backgroundMediaTablet.url} type={backgroundMediaTablet.mime} />
                        </video>
                    ) : (
                        <img
                            className={`element-background-image wp-image-${backgroundMediaTablet?.id} hidden md:block lg:hidden max-h-full object-${backgroundFitMode} absolute  object-${backgroundHorizontalAlign}-${backgroundVerticalAlign} lg:object-lg-${backgroundHorizontalAlign}-${backgroundVerticalAlign} ${backgroundVerticalAlign === 'center' ? 'inset-y-auto' : `${backgroundVerticalAlign}-0`} w-[100%] ${backgroundFitMode === 'contain' ? 'h-auto' : 'h-full'}`}
                            src={backgroundMediaTablet?.url}
                            alt={backgroundMediaTablet?.alt}
                        />
                    )}
                    {backgroundMediaMobile?.type === "video" ? (
                        <video muted autoPlay playsInline loop={shouldLoopOnMobile} className={`absolute object-fill max-h-full block m:hidden md:object-${backgroundFitMode}  object-${backgroundHorizontalAlign}-${backgroundVerticalAlign} lg:object-lg-${backgroundHorizontalAlign}-${backgroundVerticalAlign} w-[100%]  ${backgroundFitMode === 'contain' ? 'h-auto' : 'h-full'}`} width="100%">
                            <source src={backgroundMediaMobile.url} type={backgroundMediaMobile.mime} />
                        </video>
                    ) : (
                        <img
                            className={`element-background-image wp-image-${backgroundMediaMobile?.id} block md:hidden max-h-full object-${backgroundFitMode} absolute  object-${backgroundHorizontalAlign}-${backgroundVerticalAlign} lg:object-lg-${backgroundHorizontalAlign}-${backgroundVerticalAlign} w-[100%] ${backgroundFitMode === 'contain' ? 'h-auto' : 'h-full'}`}
                            src={backgroundMediaMobile?.url}
                            alt={backgroundMediaMobile?.alt}
                        />
                    )}
                </>) : (<></>)}
                <div className="container mx-auto">
                    <div className={`hero-content block lg:flex gap-8 pb-sm-vertical md:pb-md-vertical lg:pb-lg-vertical xl:pb-xl-vertical  pt-sm-vertical-hero-top md:pt-md-vertical-hero-top lg:pt-lg-vertical-hero-top xl:pt-xl-vertical-hero-top md:pb-[86px] md:pt-[140px] ${layout === "2 Column" ? 'items-start' : ''} ${showVSplit ? stackOrder === 'blocks' ? ' flex-col-reverse md:flex-row' : 'flex-col md:flex-row' : stackOrder === 'blocks' ? 'flex-col-reverse md:flex-col' : 'flex-col'}`}>
                        <div className={`hero-text md:mr-[30px] ${showInnerBlockOnDesktop ? 'lg:pb-0' : ''} ${showInnerBlockOnTablet ? 'md:pb-[45px]' : ''} ${showInnerBlockOnMobile ? 'pb-8' : ''}  ${showVSplit ? leftColumnSpace : ''}`}>
                            <RichText.Content
                                tagName="h1"
                                className={`relative title font-header leading-h1 ${headerFontSize} ${showSubheadingOnDesktop ? 'lg:mb-5' : 'lg:mb-11'} ${showSubheadingOnTablet ? 'md:mb-[15px]' : 'md:mb-11'} ${showSubheadingOnMobile ? 'mb-[15px]' : 'mb-11'} ${getVisibilityClasses(showHeadingOnDesktop, showHeadingOnTablet, showHeadingOnMobile)}`} // Add the selected option as a class
                                value={heading}
                            />
                            <RichText.Content
                                tagName="span"
                                className={`relative title font-display leading-hero-body text-mobile-xl lg:text-xl mb-6 lg:mb-11 ${getVisibilityClasses(showSubheadingOnDesktop, showSubheadingOnTablet, showSubheadingOnMobile)}`} // Add the selected option as a class
                                value={subheading}
                            />
                            {(ctaText || secondCTAText) && (
                                <div className={`cta-container flex flex-row`}>
                                    {ctaText && (
                                        <div className={`primary-btn-wrapper mr-8 flex-col justify-center ${getVisibilityClasses(showCTAOnDesktop, showCTAOnTablet, showCTAOnMobile)}`}>
                                            <RichText.Content
                                                tagName="a" // Use an a tag here
                                                className="btn-primary text-white text-mobile-button lg:text-button px-[20px] py-[10px] lg:px-[30px] lg:py-[15.5px]"
                                                href={ctaUrl} // Set the href attribute to the button URL
                                                target={buttonTargetBlank ? "_blank" : "_self"} // Add this line
                                                value={ctaText}
                                            />
                                        </div>
                                    )}
                                    {secondCTAUrl && (
                                        <div className={`secondary-btn-wrapper flex-col  justify-center  ${getVisibilityClasses(showSecondCTAOnDesktop, showSecondCTAOnTablet, showSecondCTAOnMobile)}`}>
                                            <RichText.Content
                                                tagName="a" // Use an a tag here
                                                className={`btn-secondary text-mobile-secondary-button lg:text-secondary-button ${arrowColor} ${buttonClass}`}
                                                href={secondCTAUrl} // Set the href attribute to the button URL
                                                value={secondCTAText}
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className={`hero-inner-blocks relative flex-col ${showVSplit ? rightColumnSpace : ''} ${getVisibilityClasses(showInnerBlockOnDesktop, showInnerBlockOnTablet, showInnerBlockOnMobile)}`}>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
