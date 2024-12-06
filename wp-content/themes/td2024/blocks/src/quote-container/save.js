import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InnerBlocks
} from '@wordpress/block-editor';
import {} from '@wordpress/components';

export default function save({ attributes }) {
    const { 
        numberOfQuotes, 
        colorVariant, 
        sliderSpeed, 
        overrideBackground,
        backgroundHorizontalAlign,
        backgroundVerticalAlign,
        backgroundAlignmentPair,
        backgroundFitMode,
        backgroundMedia
     } = attributes;
    const blockProps = useBlockProps.save({
        className: classnames({
            'py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical quote-dark bg-primaryBlue-100 text-white': colorVariant === 'DARK',
            'py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical quote-light': colorVariant === 'LIGHT',
            'py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical bg-cardGradient1': colorVariant === 'GRADIENT1',
            'py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical bg-cardGradient2': colorVariant === 'GRADIENT2',
        }),
    });

    return (
        <div 
            {...blockProps} 
            data-slider-speed={sliderSpeed}
        >
            {overrideBackground ? (<>
                { backgroundMedia.type == "video" ? (<>
                        <video muted autoPlay playsInline loop className={`absolute object-fill max-h-full object-${backgroundFitMode} ${backgroundHorizontalAlign == 'center' ? 'inset-x-auto' : `${backgroundHorizontalAlign}-0`} ${backgroundVerticalAlign == 'center' ? 'inset-y-auto' : `${backgroundVerticalAlign}-0`} w-[100%]  ${backgroundFitMode == 'contain' ? 'h-auto' : 'h-full'}`} width="100%">
                            <source src={backgroundMedia.url} type={backgroundMedia.mime}/>
                        </video>
                    </>) : (
                    <img
                            className={`element-background-image wp-image-${backgroundMedia.id} max-h-full object-${backgroundFitMode} absolute ${backgroundHorizontalAlign == 'center' ? 'inset-x-auto' : `${backgroundHorizontalAlign}-0`} ${backgroundVerticalAlign == 'center' ? 'inset-y-auto' : `${backgroundVerticalAlign}-0`} w-[100%] ${backgroundFitMode == 'contain' ? 'h-auto' : 'h-full'}`}
                            style={{objectPosition:`${backgroundAlignmentPair}`}}
                            src={backgroundMedia.url}
                            alt={backgroundMedia.alt}
                        />
                    )
                } 
            </>) : (<></>)}
            <div className={`quote-outer container mx-auto pb-[35px] py-[20px]`}>
                <div className={`quote-container`} data-slider-speed={sliderSpeed}>
                    <InnerBlocks.Content />
                </div>
            </div>
            {numberOfQuotes > 1 && <div className={`container mx-auto arrows-box__wrapper xmd:px-[110px]`}><div className={`arrows-box relative mt-[15px] md:mt-[30px]`}></div></div>}
        </div>
    );
}