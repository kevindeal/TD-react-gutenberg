import { __ } from '@wordpress/i18n';
import {
    InnerBlocks,
    RichText,
    useSelect,
    PlainText
} from '@wordpress/block-editor';
import {} from '@wordpress/components';

export default function save({ attributes }) {
    const {stars, maxStars, ctaUrl, ctaText, buttonTargetBlank, text, textarea, colorVariant, showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile, author, authorTitle, authorCompany, id, sliderSpeed, showBodyOnDesktop, showBodyOnTablet, showBodyOnMobile, showQuoteImageOnDesktop, showQuoteImageOnTablet, showQuoteImageOnMobile, showAuthorOnDesktop, showAuthorOnTablet, showAuthorOnMobile, showAuthorTitleOnDesktop, showAuthorTitleOnTablet, showAuthorTitleOnMobile} = attributes;

    const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'grid' : 'hidden'} ${tablet ? 'md:grid' : 'md:hidden'} ${desktop ? 'lg:grid' : 'lg:hidden'}`;
	}
    const getBodyVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'grid' : 'hidden'} ${tablet ? 'md:grid' : 'md:hidden'} ${desktop ? 'lg:grid' : 'lg:hidden'}`;
	}

    const getQuoteImageVisibilityClasses = (desktop, tablet, mobile) => {
        return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
    }

    const getAuthorVisibilityClasses = (desktop, tablet, mobile) => {
        return  `${mobile ? 'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden'}`;
    }

    const getAuthorTitleVisibilityClasses = (desktop, tablet, mobile) => {
        return  `${mobile ? 'grid' : 'hidden'} ${tablet ? 'md:grid' : 'md:hidden'} ${desktop ? 'lg:grid' : 'lg:hidden'}`;
    }
    
    const buttonTarget = buttonTargetBlank ? "_blank" : "_self";

    const renderStars = () => {
        const a = Array(maxStars).fill(1);
        return (
            a.map((e,i)=>
            <span className={`star ${i < parseInt(stars) ? "active" : "inactive"}`} key={i}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.2284 17.6413L21.9696 0.328125L16.7107 17.6413H0.328125L13.7025 27.1852L8.6168 43.611L21.9696 33.4612L35.344 43.611L30.2582 27.1852L43.611 17.6413H27.2284Z" fill="#000"/>
                </svg>
            </span>
            )
        );
    }

    // function getBodyVisibilityClasses(showBodyOnDesktop, showBodyOnTablet, showBodyOnMobile) {
    //     let classes = '';
    //     if (!showBodyOnDesktop) {
    //         classes += ' lg:hidden';
    //     }
    //     if (!showBodyOnTablet) {
    //         classes += ' md:hidden';
    //     }
    //     if (!showBodyOnMobile) {
    //         classes += ' sm:hidden';
    //     }
    //     return classes;
    // }

    // function getQuoteImageVisibilityClasses(showQuoteImageOnDesktop, showQuoteImageOnTablet, showQuoteImageOnMobile) {
    //     let classes = '';
    //     if (!showQuoteImageOnDesktop) {
    //         classes += ' lg:hidden';
    //     }
    //     if (!showQuoteImageOnTablet) {
    //         classes += ' md:hidden';
    //     }
    //     if (!showQuoteImageOnMobile) {
    //         classes += ' sm:hidden';
    //     }
    //     return classes;
    // }

    // function getAuthorVisibilityClasses(showAuthorOnDesktop, showAuthorOnTablet, showAuthorOnMobile) {
    //     let classes = '';
    //     if (!showAuthorOnDesktop) {
    //         classes += ' lg:hidden';
    //     }
    //     if (!showAuthorOnTablet) {
    //         classes += ' md:hidden';
    //     }
    //     if (!showAuthorOnMobile) {
    //         classes += ' sm:hidden';
    //     }
    //     return classes;
    // }

    // function getAuthorTitleVisibilityClasses(showAuthorTitleOnDesktop, showAuthorTitleOnTablet, showAuthorTitleOnMobile) {
    //     let classes = '';
    //     if (!showAuthorTitleOnDesktop) {
    //         classes += ' lg:hidden';
    //     }
    //     if (!showAuthorTitleOnTablet) {
    //         classes += ' md:hidden';
    //     }
    //     if (!showAuthorTitleOnMobile) {
    //         classes += ' sm:hidden';
    //     }
    //     return classes;
    // }

    return (
        <div className={`quotes relative`}>
            <div className={`quote-inner relative`}>
                {parseInt(stars) > 0 ? (
                    <>
                    <div className={`quote-rating`}>
                    {renderStars()}
                    </div></>
                    ) : (<></>)
                }
                <span className={`quote-open font-header absolute lg:-left-[20px] text-mobile-quote lg:text-quote`}>“</span>
                <RichText.Content
                    tagName="p"
                    //className={`quote-body ${darkClass} ${getVisibilityClasses(showOnDesktop, showOnTablet, showOnMobile)}`}
                    className={`quote-body font-header text-mobile-quote lg:text-quote indent-[10px] lg:indent-0 md:-mr-[20px] md:pr-[20px] leading-[140%] md:leading-[125%] mb-[20px] md:mb-[30px] ${getBodyVisibilityClasses(showBodyOnDesktop, showBodyOnTablet, showBodyOnMobile)}`}
                    value={textarea + '”'}
                />
                {(author || authorTitle || authorCompany) && (
                <div className={`image-author-container flex`}>
                    <div className={`quote-image col-span-1 flex flex-col justify-center h-[45px] md:h-[90px] max-w-[200px] ${getQuoteImageVisibilityClasses(showQuoteImageOnDesktop, showQuoteImageOnTablet, showQuoteImageOnMobile)}`}>
                        <InnerBlocks.Content />
                    </div>
                    <div className={`author-box col-span-3 flex flex-col justify-center ${getAuthorVisibilityClasses(showAuthorOnDesktop, showAuthorOnTablet, showAuthorOnMobile)}`}>
                        { author ? (
                        <p className={`quote-author font-bold text-mobile-l lg:text-l leading-card-header`}>{author}</p>
                        ) : (<></>)}
                        { authorTitle ? (
                        <p className={`quote-author-title text-mobile-l lg:text-l leading-card-header`}>{authorTitle}</p>
                        ) : (<></>)}
                        { authorCompany ? (
                        <p className={`quote-author-title text-mobile-l lg:text-l leading-card-header`}>{authorCompany}</p>
                        ) : (<></>)}
                    </div>
                </div>
                )}
                {ctaText 
                    && (
                    <div className="quote-button mt-[70px]">

                        {buttonTargetBlank
                            ? (
                            <RichText.Content
                                tagName="a"
                                className="btn-primary inline-block text-white text-mobile-button md:text-button px-[20px] py-[10px] md:px-[30px] md:py-[15.5px]"
                                href={ ctaUrl }
                                value={ ctaText }
                                target={`_blank`}
                                rel={`noreferrer noopener`}
                            />
                            ) : (
                            <RichText.Content
                                tagName="a"
                                className="btn-primary inline-block text-white text-mobile-button md:text-button px-[20px] py-[10px] md:px-[30px] md:py-[15.5px]"
                                href={ ctaUrl }
                                value={ ctaText }
                            />
                            )
                        }

                    </div>
                    )
                }
            </div>
            
        </div>
    );
}