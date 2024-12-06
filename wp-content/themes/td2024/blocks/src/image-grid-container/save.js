import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks, Text } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { text, columnsOnDesktop, columnsOnTablet, columnsOnMobile, transparentBackground, textarea, buttonText, buttonUrl, colorVariant, title, cardType, headingText, displayOnDesktop, displayOnTablet, displayOnMobile } = attributes;

    const getVisibilityClasses = (desktop, tablet, mobile) => {
		return  `${mobile ? 'grid' : 'hidden'} ${tablet ? 'md:grid' : 'md:hidden'} ${desktop ? 'lg:grid' : 'lg:hidden'}`;
	}
	
	const blockProps = useBlockProps.save( {
		className: classnames( 
			`${cardType} tdkb-alert ${getVisibilityClasses(attributes.isVisibleDesktop, attributes.isVisibleTablet, attributes.isVisibleMobile)} grid-cols-${attributes.columns} gap-5 justify-items-stretch`
			
		),
	} );
    const wrapperProps = {
        className: classnames( 'py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical', {
            'bg-primaryBlue-100': colorVariant === 'DARK',
            'light-background': colorVariant !== 'DARK'
        } ),
    };

    const containerProps = {
        className: classnames( 'image-grid card-container container mx-auto ', {
            'card-dark bg-primaryBlue-100 text-white ': colorVariant === 'DARK',
            'card-light light-background text-navy-100': colorVariant !== 'DARK',
            'card-outline text-navy-100': colorVariant === 'OUTLINE',
            'card-no-background text-navy-100': colorVariant === 'NOBACKGROUND',
        } ),
    };

    if(containerProps && transparentBackground){
        containerProps.className += ' bg-transparent';
    }

    return (
        <div {...wrapperProps}>
        <div { ...containerProps }>
            { headingText && (
				<RichText.Content
					tagName="h2"
					value={headingText}
					className="text-5xl font-header pb-sm-vertical md:pb-md-vertical lg:pb-lg-vertical xl:pb-xl-vertical"
				/>
			)}
            <div { ...blockProps } className={`grid gap-[30px] md:grid-cols-${columnsOnDesktop} sm:grid-cols-${columnsOnTablet} grid-cols-${columnsOnMobile} ${getVisibilityClasses(displayOnDesktop, displayOnTablet, displayOnMobile)}`}>
                <InnerBlocks.Content />
            </div>
        </div>
        </div>
    );
}