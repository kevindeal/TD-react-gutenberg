import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function save({ attributes}) {
    const { text, columns, textarea, buttonText, buttonUrl, buttonTargetBlank, colorVariant, displayOption, title, showOnDesktop, showOnTablet, showOnMobile, selectedOption, customNumber, isUppercase, uppercase, showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile, showH3OnDesktop, showH3OnTablet, showH3OnMobile, wholeCardButton } = attributes;

    const getVisibilityClasses = (desktop, tablet, mobile) => {
        return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
		//return  `${mobile ? 'grid' : 'hidden'} ${tablet ? 'md:grid' : 'md:hidden'} ${desktop ? 'lg:grid' : 'lg:hidden'}`;
	}
    const getH3VisibilityClasses = (desktop, tablet, mobile) => {
        return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
		//return  `${mobile ? 'grid' : 'hidden'} ${tablet ? 'md:grid' : 'md:hidden'} ${desktop ? 'lg:grid' : 'lg:hidden'}`;
	}

    let classesString;
    let eyebrowColor;
    let arrowColor;
    const buttonTarget = buttonTargetBlank ? "_blank" : "_self";

    if (colorVariant === 'DARK') {
        classesString = 'dark-card bg-cardGradient2';
        eyebrowColor = 'text-accentTurquoise-100';
        arrowColor = 'arrow-white';
    } else if (colorVariant === 'LIGHT') {
        classesString = 'light-card bg-gray-100 text-navy-100';
        eyebrowColor = selectedOption.toLowerCase() === 'standard' ? '' : 'text-blue-100';
        arrowColor = 'arrow-dark';
    } else if (colorVariant === 'OUTLINE') {
        classesString = 'outline-card text-navy-100 border border-blue-100 border-solid border-1';
        eyebrowColor = 'text-navy';
        arrowColor = 'arrow-dark';
    } else if (colorVariant === 'NOBACKGROUND') {
        classesString = 'nobackground-card text-navy-100 bg-transparent border-none';
        eyebrowColor = 'text-blue-100';
        arrowColor = 'arrow-dark';
    }
    let hasHover = buttonUrl ? "has-hover" : "no-hover";

    function getEyebrowVisibilityClasses(showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile) {
        let classes = '';
        if (!showEyebrowOnDesktop) {
            classes += ' hide-on-desktop';
        }
        if (!showEyebrowOnTablet) {
            classes += ' hide-on-tablet';
        }
        if (!showEyebrowOnMobile) {
            classes += ' hide-on-mobile';
        }
        return classes;
    }

    // function getH3VisibilityClasses(showH3OnDesktop, showH3OnTablet, showH3OnMobile) {
    //     let classes = '';
    //     if (!showH3OnDesktop) {
    //         classes += ' hide-on-desktop';
    //     }
    //     if (!showH3OnTablet) {
    //         classes += ' hide-on-tablet';
    //     }
    //     if (!showH3OnMobile) {
    //         classes += ' hide-on-mobile';
    //     }
    //     return classes;
    // }

    const buttonClass = `button ${buttonText === '' ? 'arrow-only' : ''}`;

    let imageColumns;
    let contentColumns;
    let columnPadding;
    
    if (Number(columns) === 3) {
        
        imageColumns = 6;
        contentColumns = 6;
        columnPadding = 'py-[40px] px-[40px]';
    } else {
        
        imageColumns = 4;
        contentColumns = 8;

        //  ee -- removed padding here but I'm sure this was intended for some use case ...
        //  columnPadding = 'py-[65px] px-[88px]'; // prior padding

        columnPadding = 'py-[40px] px-[40px]';

    }

    if(wholeCardButton && buttonUrl){
        return (
            <>
                { !buttonTargetBlank 
                    ?
                    <a 
                        href={buttonUrl} 
                        className={`card-horizontal card-outer ${displayOption} flex gap-9 rounded-[20px] ${columnPadding} ${classesString} ${getVisibilityClasses(showOnDesktop, showOnTablet, showOnMobile)} ${hasHover}`}
                    >
                        {/* Display the image on the left if the display option is 'image-left' */}
                        {displayOption === 'image-left' && (
                            <div className={`card-image shrink basis-1/2 col-span-${imageColumns}`}>
                                <InnerBlocks.Content />
                            </div>
                        )}
                        <div className={`card-content flex-1 col-span-${displayOption === 'text-only' ? 12 : contentColumns}`}>
                            {text && (
                                <RichText.Content
                                    tagName="span"
                                    className={`eyebrow ${selectedOption} block text-md font-display font-semibold ${eyebrowColor} mb-4 md:mb-[15px] ${isUppercase ? 'uppercase' : ''} ${getVisibilityClasses(showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile)}`}
                                    value={text}
                                />
                            )}
                            {title && (
                                <RichText.Content
                                    tagName="h3"
                                    className={`card-title text-mobile-xl lg:text-l font-display font-normal mb-[30px] leading-[145%] ${selectedOption === 'custom' ? `text-[${customNumber}px]` : selectedOption} ${getH3VisibilityClasses(showH3OnDesktop, showH3OnTablet, showH3OnMobile)}`}
                                    value={title}
                                />
                            )}
                        </div>
                        {/* Display the image on the right if the display option is 'image-right' */}
                        {displayOption === 'image-right' && (
                            <div className={`card-image shrink basis-1/2 col-span-${imageColumns}`}>
                                <InnerBlocks.Content />
                            </div>
                        )}
                    </a>
                    :
                    <a 
                        href={buttonUrl} 
                        target={`_blank`} 
                        rel={`noreferrer noopener`}
                        className={`card-horizontal card-outer ${displayOption} flex gap-9 rounded-[20px] ${columnPadding} ${classesString} ${getVisibilityClasses(showOnDesktop, showOnTablet, showOnMobile)} ${hasHover}`}
                    >
                        {/* Display the image on the left if the display option is 'image-left' */}
                        {displayOption === 'image-left' && (
                            <div className={`card-image shrink basis-1/2 col-span-${imageColumns}`}>
                                <InnerBlocks.Content />
                            </div>
                        )}
                        <div className={`card-content flex-1 col-span-${displayOption === 'text-only' ? 12 : contentColumns}`}>
                            {text && (
                                <RichText.Content
                                    tagName="span"
                                    className={`eyebrow ${selectedOption} block text-md font-display font-semibold ${eyebrowColor} mb-4 md:mb-[15px] ${isUppercase ? 'uppercase' : ''} ${getVisibilityClasses(showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile)}`}
                                    value={text}
                                />
                            )}
                            {title && (
                                <RichText.Content
                                    tagName="h3"
                                    className={`card-title text-mobile-xl lg:text-l font-display font-normal mb-[30px] leading-[145%] ${selectedOption === 'custom' ? `text-[${customNumber}px]` : selectedOption} ${getH3VisibilityClasses(showH3OnDesktop, showH3OnTablet, showH3OnMobile)}`}
                                    value={title}
                                />
                            )}
                        </div>
                        {/* Display the image on the right if the display option is 'image-right' */}
                        {displayOption === 'image-right' && (
                            <div className={`card-image shrink basis-1/2 col-span-${imageColumns}`}>
                                <InnerBlocks.Content />
                            </div>
                        )}
                    </a>
                }
                
            </>
        );
    } else{
        return (
            <>
                <div className={`card-horizontal card-outer ${displayOption} flex gap-9 rounded-[20px] ${columnPadding} ${classesString} ${getVisibilityClasses(showOnDesktop, showOnTablet, showOnMobile)} ${hasHover}`}>
                    {/* Display the image on the left if the display option is 'image-left' */}
                    {displayOption === 'image-left' && (
                        <div className={`card-image shrink basis-1/2 col-span-${imageColumns}`}>
                            <InnerBlocks.Content />
                        </div>
                    )}
                    <div className={`card-content flex-1 col-span-${displayOption === 'text-only' ? 12 : contentColumns}`}>
                        {text && (
                            <RichText.Content
                                tagName="span"
                                className={`eyebrow ${selectedOption} block text-md font-display font-semibold ${eyebrowColor} mb-4 md:mb-[15px] ${isUppercase ? 'uppercase' : ''} ${getVisibilityClasses(showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile)}`}
                                value={text}
                            />
                        )}
                        {title && (
                            <RichText.Content
                                tagName="h3"
                                className={`card-title text-mobile-xl lg:text-l font-display font-normal mb-[30px] leading-[145%] ${selectedOption === 'custom' ? `text-[${customNumber}px]` : selectedOption} ${getH3VisibilityClasses(showH3OnDesktop, showH3OnTablet, showH3OnMobile)}`}
                                value={title}
                            />
                        )}

                        {buttonText 
                            && (
                            buttonTargetBlank
                                ? (
                                <RichText.Content
                                    tagName="a" // Use an a tag here
                                    className={`btn-secondary ${arrowColor} ${buttonClass} text-mobile-secondary-button md:text-secondary-button`}
                                    href={buttonUrl} // Set the href attribute to the button URL
                                    value={buttonText}
                                    target={ buttonTarget }
                                    rel={`noreferrer noopener`}
                                />
                                ) : (
                                <RichText.Content
                                    tagName="a" 
                                    className={`btn-secondary ${arrowColor} ${buttonClass} text-mobile-secondary-button md:text-secondary-button`}
                                    href={buttonUrl} 
                                    value={buttonText}
                                />
                                )
                            )
                        }
                    </div>
                    {/* Display the image on the right if the display option is 'image-right' */}
                    {displayOption === 'image-right' && (
                        <div className={`card-image shrink basis-1/2 col-span-${imageColumns}`}>
                            <InnerBlocks.Content />
                        </div>
                    )}
                </div>
            </>
        );
    }
}