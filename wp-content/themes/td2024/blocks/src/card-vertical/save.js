import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function save({ attributes }) {
    const { text, listHeading, listItems, listStyle, columns, textarea, fontFamily, buttonText, buttonUrl, buttonStyle, buttonTargetBlank, colorVariant, title, showImageOnDesktop, showImageOnTablet, showImageOnMobile, showOnDesktop, showOnTablet, showOnMobile, selectedOption, customNumber, fontSize, imageOnly, imageSize, uppercase, isUppercase, showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile, showH3OnDesktop, showH3OnTablet, showH3OnMobile, showBodyTextOnDesktop, showBodyTextOnTablet, showBodyTextOnMobile, wholeCardButton, removeTopPadding } = attributes;
    const getVisibilityClasses = (desktop, tablet, mobile) => {
        return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
		//return  `${mobile ? 'grid' : 'hidden'} ${tablet ? 'md:grid' : 'md:hidden'} ${desktop ? 'lg:grid' : 'lg:hidden'}`;
	}

    const getH3VisibilityClasses = (desktop, tablet, mobile) => {
        return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
		//return  `${mobile ? 'grid' : 'hidden'} ${tablet ? 'md:grid' : 'md:hidden'} ${desktop ? 'lg:grid' : 'lg:hidden'}`;
	}

    const getBodyTextVisibilityClasses = (desktop, tablet, mobile) => {
        return  `${mobile ? 'block' : 'hidden'} ${tablet ? 'md:block' : 'md:hidden'} ${desktop ? 'lg:block' : 'lg:hidden'}`;
	}

    const getImageSizeClasses = () => {
        if(imageSize !== 'auto')
            return `max-h-icon-${imageSize}`;
        return '';
    }

    const buttonTarget = buttonTargetBlank ? "_blank" : "_self";


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

    let classesString;
    let eyebrowColor;
    let buttonColor = '';
    let buttonTextSizeClasses = "text-mobile-secondary-button lg:text-secondary-button py-[10px] lg:py-[15.5px]";

    if(buttonStyle=="primary") {
        //buttonColor = 'text-mobile-button lg:text-button ';
        buttonTextSizeClasses = "text-mobile-button lg:text-button px-[20px] py-[10px] lg:px-[30px] lg:py-[15.5px]";
    }
    
    if (colorVariant === 'DARK') {
        classesString = 'dark-card bg-cardGradient2';
        eyebrowColor = (selectedOption.toLowerCase() === 'numeric' || selectedOption.toLowerCase() === 'custom') ? 'text-white' : 'text-accentTurquoise-100';
    } else if (colorVariant === 'LIGHT') {
        classesString = 'light-card bg-gray-100 text-navy-100';
        eyebrowColor = selectedOption == 'custom' ? 'text-secondaryBlue-100' : '';
    } else if (colorVariant === 'OUTLINE') {
        classesString = 'outline-card text-navy-100 border border-blue-100 border-solid border-1';
        eyebrowColor = selectedOption == 'custom' ? 'text-secondaryBlue-100' : '';
    } else if (colorVariant === 'NOBACKGROUND') {
        classesString = 'nobackground-card text-navy-100 bg-transparent border-none';
        eyebrowColor = selectedOption == 'custom' ? 'text-secondaryBlue-100' : '';
        buttonColor = buttonStyle == 'secondary' ? 'text-secondaryBlue-100' : buttonColor;
    }

    let hasHover = buttonUrl ? "has-hover" : "no-hover";

    if(wholeCardButton && buttonUrl) {
        return (
            <>
                {!buttonTargetBlank 
                    ?
                    <a href={buttonUrl} className={`card-vertical card-outer flex flex-col items-start rounded-[20px] ${selectedOption === 'numeric' ? removeTopPadding ? "pb-[40px] px-[30px]": "py-[40px] px-[30px]" : removeTopPadding ? "pb-[60px] px-[40px]" :"py-[60px] px-[40px]"} ${classesString} ${getVisibilityClasses(showOnDesktop, showOnTablet, showOnMobile)} ${imageOnly ? 'image-only content-center justify-center items-stretch' : ''} ${hasHover}`}>
                        {/* Display the image if it exists */}
                        <div className={`${getVisibilityClasses(showImageOnDesktop, showImageOnTablet, showImageOnMobile)} ${getImageSizeClasses()} ${!imageOnly ? 'mb-[18px]' : ''}`}>
                        <InnerBlocks.Content />
                        </div>
                        {!imageOnly && (
                            <>
                                {text && (
                                    <RichText.Content
                                        tagName="span"
                                        className={`eyebrow text-mobile-eyebrow lg:text-eyebrow font-display font-semibold ${eyebrowColor} mb-4 ${isUppercase ? 'uppercase' : ''} ${getVisibilityClasses(showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile)}`}
                                        value={text}
                                    />
                                )}
                                {title && (
                                    <RichText.Content
                                        tagName="h3"
                                        className={`card-title ${selectedOption.includes("numeric") ? 'font-medium' : 'font-semibold'} leading-card-header text-mobile-4xl lg:text-4xl font-${fontFamily} ${selectedOption !== 'numeric' ? "mb-[30px]" : "mb-3"} ${selectedOption === 'list' ? `text-[${customNumber}px]` : ``} ${selectedOption === 'custom' ? `text-[${customNumber}px]` : selectedOption} ${getH3VisibilityClasses(showH3OnDesktop, showH3OnTablet, showH3OnMobile)}`}
                                        value={title}
                                    />
                                )}
                                {textarea && (
                                    <RichText.Content
                                        tagName="p"
                                        className={`card-description font-display leading-[145%] text-mobile-2xl md:text-2xl ${selectedOption === 'numeric' ? "text-secondaryBlue-100 font-medium" : "mb-[28px]"} ${fontSize ? `text-[${fontSize}px]` : 'md:text-xl'} ${getBodyTextVisibilityClasses(showBodyTextOnDesktop, showBodyTextOnTablet, showBodyTextOnMobile)}`}
                                        value={textarea}
                                    />
                                )}

                                {selectedOption === 'list' && (
                                        <div className={`card-list-wrapper mt-[15px] text-[20px] mb-[50px] mt-[20px]`}>
                                        {listHeading && (
                                        <div className={`card-list-heading font-semibold leading-card-header mb-[25px]`}>{listHeading}</div>
                                        )}
                                        <ul className={`card-list list-${listStyle=='bullet' ? 'disc' : listStyle} flex flex-col gap-4`}>
                                        {listItems.map((item,i)=>
                                            (
                                            <li key={i} className={`card-list-item gap-4 ${listStyle=='bullet' ? 'ml-3 list-item' : 'flex'} list-${listStyle}`}>
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
                                                <span className={`card-list-item-label`}>{item}</span>
                                            </li>
                                            )
                                        )}
                                        </ul>
                                    </div>
                                )}
                            </>
                        )}
                    </a>
                    : 
                    <a 
                        href={buttonUrl} 
                        target={ `_blank` }
                        rel={`noreferrer noopener`}
                        className={`card-vertical card-outer flex flex-col items-start rounded-[20px] ${selectedOption === 'numeric' ? removeTopPadding ? "pb-[40px] px-[30px]": "py-[40px] px-[30px]" : removeTopPadding ? "pb-[60px] px-[40px]" :"py-[60px] px-[40px]"} ${classesString} ${getVisibilityClasses(showOnDesktop, showOnTablet, showOnMobile)} ${imageOnly ? 'image-only content-center justify-center items-stretch' : ''} ${hasHover}`}
                    >
                        {/* Display the image if it exists */}
                        <div className={`${getVisibilityClasses(showImageOnDesktop, showImageOnTablet, showImageOnMobile)} ${getImageSizeClasses()} ${!imageOnly ? 'mb-[18px]' : ''}`}>
                        <InnerBlocks.Content />
                        </div>
                        {!imageOnly && (
                            <>
                                {text && (
                                    <RichText.Content
                                        tagName="span"
                                        className={`eyebrow text-mobile-eyebrow lg:text-eyebrow font-display font-semibold ${eyebrowColor} mb-4 ${isUppercase ? 'uppercase' : ''} ${getVisibilityClasses(showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile)}`}
                                        value={text}
                                    />
                                )}
                                {title && (
                                    <RichText.Content
                                        tagName="h3"
                                        className={`card-title ${selectedOption.includes("numeric") ? 'font-medium' : 'font-semibold'} leading-card-header text-mobile-4xl lg:text-4xl font-${fontFamily} ${selectedOption !== 'numeric' ? "mb-[30px]" : "mb-3"} ${selectedOption === 'list' ? `text-[${customNumber}px]` : ``} ${selectedOption === 'custom' ? `text-[${customNumber}px]` : selectedOption} ${getH3VisibilityClasses(showH3OnDesktop, showH3OnTablet, showH3OnMobile)}`}
                                        value={title}
                                    />
                                )}
                                {textarea && (
                                    <RichText.Content
                                        tagName="p"
                                        className={`card-description font-display leading-[145%] text-mobile-2xl md:text-2xl ${selectedOption === 'numeric' ? "text-secondaryBlue-100 font-medium" : "mb-[28px]"} ${fontSize ? `text-[${fontSize}px]` : 'md:text-xl'} ${getBodyTextVisibilityClasses(showBodyTextOnDesktop, showBodyTextOnTablet, showBodyTextOnMobile)}`}
                                        value={textarea}
                                    />
                                )}

                                {selectedOption === 'list' && (
                                        <div className={`card-list-wrapper mt-[15px] text-[20px] mb-[50px] mt-[20px]`}>
                                        {listHeading && (
                                        <div className={`card-list-heading font-semibold leading-card-header mb-[25px]`}>{listHeading}</div>
                                        )}
                                        <ul className={`card-list list-${listStyle=='bullet' ? 'disc' : listStyle} flex flex-col gap-4`}>
                                        {listItems.map((item,i)=>
                                            (
                                            <li key={i} className={`card-list-item gap-4 ${listStyle=='bullet' ? 'ml-3 list-item' : 'flex'} list-${listStyle}`}>
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
                                                <span className={`card-list-item-label`}>{item}</span>
                                            </li>
                                            )
                                        )}
                                        </ul>
                                    </div>
                                )}
                            </>
                        )}
                    </a>
                }
            </>
        );
    } else {
        return (
            <>
                <div className={`card-vertical card-outer flex flex-col items-start rounded-[20px] ${selectedOption === 'numeric' ? removeTopPadding ? "pb-[40px] px-[30px]" :   "py-[40px] px-[30px]" : removeTopPadding ? "pb-[60px] px-[40px]" : "py-[60px] px-[40px]"} ${classesString} ${getVisibilityClasses(showOnDesktop, showOnTablet, showOnMobile)} ${imageOnly ? 'image-only content-center justify-center items-stretch' : ''} ${hasHover}`}>
                    {/* Display the image if it exists */}
                    <div className={`${getVisibilityClasses(showImageOnDesktop, showImageOnTablet, showImageOnMobile)} ${getImageSizeClasses()} ${!imageOnly ? 'mb-[18px]' : ''}`}>
                    <InnerBlocks.Content />
                    </div>
                    {!imageOnly && (
                        <>
                            {text && (
                                <RichText.Content
                                    tagName="span"
                                    className={`eyebrow text-mobile-eyebrow lg:text-eyebrow font-display font-semibold ${eyebrowColor} mb-4 ${isUppercase ? 'uppercase' : ''} ${getVisibilityClasses(showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile)}`}
                                    value={text}
                                />
                            )}
                            {title && (
                                <RichText.Content
                                    tagName="h3"
                                    className={`card-title ${selectedOption.includes("numeric") ? 'font-medium' : 'font-semibold'} leading-card-header text-mobile-4xl lg:text-4xl font-${fontFamily} ${selectedOption !== 'numeric' ? "mb-[30px]" : "mb-3"} ${selectedOption === 'list' ? `text-[${customNumber}px]` : ``} ${selectedOption === 'custom' ? `text-[${customNumber}px]` : selectedOption} ${getH3VisibilityClasses(showH3OnDesktop, showH3OnTablet, showH3OnMobile)}`}
                                    value={title}
                                />
                            )}
                            {textarea && (
                                <RichText.Content
                                    tagName="p"
                                    className={`card-description font-display leading-[145%] text-mobile-2xl md:text-2xl ${selectedOption === 'numeric' ? "text-secondaryBlue-100 font-medium" : "mb-[28px]"} ${fontSize ? `text-[${fontSize}px]` : 'md:text-xl'} ${getBodyTextVisibilityClasses(showBodyTextOnDesktop, showBodyTextOnTablet, showBodyTextOnMobile)}`}
                                    value={textarea}
                                />
                            )}

                            {selectedOption === 'list' && (
                                    <div className={`card-list-wrapper mt-[15px] text-[20px] mb-[50px] mt-[20px]`}>
                                    {listHeading && (
                                    <div className={`card-list-heading font-semibold mb-[25px]`}>{listHeading}</div>
                                    )}
                                    <ul className={`card-list list-${listStyle=='bullet' ? 'disc' : listStyle} flex flex-col gap-4`}>
                                    {listItems.map((item,i)=>
                                        (
                                        <li key={i} className={`card-list-item gap-4 ${listStyle=='bullet' ? 'ml-3 list-item' : 'flex'} list-${listStyle}`}>
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
                                            <span className={`card-list-item-label`}>{item}</span>
                                        </li>
                                        )
                                    )}
                                    </ul>
                                </div>
                            )}
                            
                            {(buttonText && buttonStyle !== "hide") 
                                && (
                                buttonTargetBlank
                                    ? (
                                    <RichText.Content
                                        tagName="a"
                                        className={`btn-${buttonStyle} ${buttonTextSizeClasses} ${buttonColor} mt-auto`}
                                        href={ buttonUrl }
                                        value={ buttonText }
                                        target={ `_blank` }
                                        rel={`noreferrer noopener`}
                                    />
                                    ) : (
                                    <RichText.Content
                                        tagName="a"
                                        className={`btn-${buttonStyle} ${buttonTextSizeClasses} ${buttonColor} mt-auto`}
                                        href={buttonUrl}
                                        value={buttonText}
                                    />
                                    )
                                )
                            }
                        </>
                    )}
                </div>
            </>
        );
    }
}

