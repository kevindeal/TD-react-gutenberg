import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks, Text } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { referenceId, text, columnsOnDesktop, columnsOnTablet, columnsOnMobile, transparentBackground, textarea, buttonText, buttonStyle, buttonUrl, buttonTargetBlank, colorVariant, title, cardType, headingText, displayOnDesktop, displayOnTablet, displayOnMobile, embedded } = attributes;

    const anchorId = `card-container-${referenceId}`; 

    const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'grid' : 'hidden'} ${tablet ? 'md:grid' : 'md:hidden'} ${desktop ? 'lg:grid' : 'lg:hidden'}`;
	}

    const desktopSize = "lg";//cardType.includes("horizontal") ? "lg" : "md";
    const buttonTarget = buttonTargetBlank ? "_blank" : "_self";
    const buttonRel = buttonTargetBlank ? "noreferrer noopener" : "";
	
	const blockProps = useBlockProps.save( {
		className: classnames( 
			`${cardType} tdkb-alert ${getVisibilityClasses(attributes.isVisibleDesktop, attributes.isVisibleTablet, attributes.isVisibleMobile)} grid-cols-${attributes.columns} gap-5 justify-items-stretch`
			
		),
	} );

    const containerProps = {
        className: classnames( `card-container`, {
            'card-dark bg-primaryBlue-100 text-white ': colorVariant === 'DARK',
            'card-light light-background': colorVariant !== 'DARK',
            'card-outline': colorVariant === 'OUTLINE',
            'card-no-background': colorVariant === 'NOBACKGROUND',
        } )
    };

    if(containerProps && transparentBackground){
        containerProps.className += ' bg-transparent';
    }

    return (
        <div { ...containerProps }>
            <div 
                id={anchorId}
                className={`${embedded ? 'pb-sm-vertical md:pb-md-vertical lg:pb-lg-vertical xl:pb-xl-vertical' : 'py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical'}`}
            >
                <div { ...blockProps } className={`${embedded  ? '' : 'relative container'} mx-auto ${getVisibilityClasses(displayOnDesktop, displayOnTablet, displayOnMobile)}`}>
                    { headingText && (
                        <RichText.Content
                            tagName="h2"
                            value={headingText}
                            className={`text-mobile-5xl md:text-5xl leading-header font-header ${colorVariant === 'NOBACKGROUND' ? 'pb-[20px]' : 'pb-[80px]'}`}
                        />
                    )}
                    <div className={`grid gap-5 ${desktopSize}:grid-cols-${columnsOnDesktop} sm:grid-cols-${columnsOnTablet} grid-cols-${columnsOnMobile}`}>
                    <InnerBlocks.Content />
                    </div>
                    {(buttonText && buttonStyle !== "hide") && (
                        <div 
                            className={`py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical pb-0 md:pb-0 lg:pb-0 xl:pb-0`}
                        >
                        {buttonTargetBlank ? (
                            <RichText.Content
                                tagName="a" // Use an a tag here
                                className={`btn-${buttonStyle}  mt-auto inline-block text-mobile-button lg:text-button px-[20px] py-[10px] md:px-[30px] md:py-[15.5px]`}
                                href={ buttonUrl } // Set the href attribute to the button URL
                                value={ buttonText }
                                target={`_blank`}
                                rel={`noreferrer noopener`}
                            />
                        ):(
                            <RichText.Content
                                tagName="a" // Use an a tag here
                                className={`btn-${buttonStyle}  mt-auto inline-block text-mobile-secondary-button lg:text-secondary-button px-[20px] py-[10px] md:px-[30px] md:py-[15.5px]`}
                                href={ buttonUrl } // Set the href attribute to the button URL
                                value={ buttonText }
                            />
                        )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}