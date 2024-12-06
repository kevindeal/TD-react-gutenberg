/**
 * External dependencies
 */
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
    PlainText,
	AlignmentControl,
	BlockControls,
	InspectorControls,
    InnerBlocks,
    URLInput,
    MediaUpload,
	store as blockEditorStore
} from '@wordpress/block-editor';

import {
	TextControl,
	ToggleControl,
    Panel,
	PanelBody,
	PanelRow,
	RadioControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

import { useSelect, useDispatch, AsyncModeProvider } from '@wordpress/data';

import './editor.scss';
import '../../../static/output.css';


export default function Edit( { attributes, setAttributes, clientId} ) {

    const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	const existingInnerBlocks = useSelect(
		(select) => {
			return select(blockEditorStore).getBlock(clientId).innerBlocks;
		},
		[clientId]
	);

    const  {
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

     const blockProps =useBlockProps.save({
        className: classnames({
            'quote-dark bg-primaryBlue-100 text-white hero-container relative ': colorVariant === 'DARK',
            'quote-light hero-container relative': colorVariant === 'LIGHT',
            'bg-heroGradient text-white hero-container relative': colorVariant === 'GRADIENT1',
            'bg-navy-100 bg-heroGradient text-white hero-container relative': colorVariant === 'GRADIENT2',
        }),
    });


     //Setters

     const onChangeColorVariant = ( newVariant ) => {
		setAttributes( { colorVariant: newVariant } );
     };
     const onChangeHeaderFontSize = ( newVariant ) => {
		setAttributes( { headerFontSize: newVariant } );
     };
     const onChangeVSplit = ( newVSplit ) => {
		setAttributes( { vSplit: newVSplit } );
	};
    const onChangeLayout = ( newLayout ) => {
		setAttributes( { layout: newLayout} );
	};
    const onChangeStackOrder = ( newTitle ) => {
		setAttributes( { stackOrder: newTitle } );
	};
    const onChangeStackPreference = ( newTitle ) => {
		setAttributes( { stackPreference: newTitle } );
	};
    const onChangeRoundTopCorners = ( newTitle ) => {
		setAttributes( { roundTopCorners: newTitle } );
	};
    const onChangeRoundBottomCorners = ( newTitle ) => {
		setAttributes( { roundBottomCorners: newTitle } );
	};
    const onChangeHeading= ( newTitle ) => {
		setAttributes( { heading: newTitle } );
	};
     const onChangeHeadingMobile = ( newTitle ) => {
		setAttributes( { showHeadingOnMobile: newTitle } );
	};
	const onChangeHeadingTablet = ( newTitle ) => {
		setAttributes( { showHeadingOnTablet: newTitle } );
	};
	const onChangeHeadingDesktop = ( newTitle ) => {
		setAttributes( { showHeadingOnDesktop: newTitle } );
	};
    const onChangeSubheading= ( newTitle ) => {
		setAttributes( { subheading: newTitle } );
	};
     const onChangeSubheadingMobile = ( newTitle ) => {
		setAttributes( { showSubheadingOnMobile: newTitle } );
	};
	const onChangeSubheadingTablet = ( newTitle ) => {
		setAttributes( { showSubheadingOnTablet: newTitle } );
	};
	const onChangeSubheadingDesktop = ( newTitle ) => {
		setAttributes( { showSubheadingOnDesktop: newTitle } );
	};
    const onChangeCTAText = ( newTitle ) => {
		setAttributes( { ctaText: newTitle } );
	};
    const onChangeCTAUrl = ( newTitle ) => {
		setAttributes( { ctaUrl: newTitle } );
	};
    const onChangeCTAMobile = ( newTitle ) => {
		setAttributes( { showCTAOnMobile: newTitle } );
	};
	const onChangeCTATablet = ( newTitle ) => {
		setAttributes( { showCTAOnTablet: newTitle } );
	};
	const onChangeCTADesktop = ( newTitle ) => {
		setAttributes( { showCTAOnDesktop: newTitle } );
	};
    const onChangeSecondCTAText = ( newTitle ) => {
		setAttributes( { secondCTAText: newTitle } );
	};
    const onChangeSecondCTAUrl = ( newTitle ) => {
		setAttributes( { secondCTAUrl: newTitle } );
	};
    const onChangeSecondCTAMobile = ( newTitle ) => {
		setAttributes( { showSecondCTAOnMobile: newTitle } );
	};
	const onChangeSecondCTATablet = ( newTitle ) => {
		setAttributes( { showSecondCTAOnTablet: newTitle } );
	};
	const onChangeSecondCTADesktop = ( newTitle ) => {
		setAttributes( { showSecondCTAOnDesktop: newTitle } );
    };
    const onChangeInnerBlocksMobile = ( newTitle ) => {
		setAttributes( { showInnerBlockOnMobile: newTitle } );
	};
	const onChangeInnerBlocksTablet = ( newTitle ) => {
		setAttributes( { showInnerBlockOnTablet: newTitle } );
	};
	const onChangeInnerBlocksDesktop = ( newTitle ) => {
		setAttributes( { showInnerBlockOnDesktop: newTitle } );
    };
    const onChangeLoopMobile = ( newTitle ) => {
		setAttributes( { shouldLoopOnMobile: newTitle } );
	};
    const onChangeLoopTablet = ( newTitle ) => {
		setAttributes( { shouldLoopOnTablet: newTitle } );
	};
    const onChangeLoopDesktop = ( newTitle ) => {
		setAttributes( { shouldLoopOnDesktop: newTitle } );
	};

    //Background Elements
    const onChangeOverride = ( newTitle ) => {
		setAttributes( { overrideBackground: newTitle } );
	};
    const onChangeBackgroundVerticalAlignment = ( newTitle ) => {
		setAttributes( { backgroundVerticalAlign: newTitle } );
	};
    const onChangeBackgroundHorizontalAlignment = ( newTitle ) => {
		setAttributes( { backgroundHorizontalAlign: newTitle } );
	};
    const onChangeBackgroundFitMode = ( newTitle ) => {
		setAttributes( { backgroundFitMode: newTitle } );
	};


    let showVSplit = layout === '2 Column';

    console.log("Current Attributes", attributes);

    const getVisibilityClasses = (desktop, tablet, mobile) => {

		return  `${mobile ?  'flex' : 'hidden'} ${tablet ? 'md:flex' : 'md:hidden'} ${desktop ? 'lg:flex' : 'lg:hidden' }`;
	}

    const template = [['core/image']];

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
        blockProps.className += ' rounded-t-hero';
    }
    if(blockProps && roundBottomCorners){
        blockProps.className += ' rounded-b-hero';
    }



    return (
        <>
        <InspectorControls group="styles">
			<Panel>
				<PanelBody
					title={ __( 'Visual Settings', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleGroupControl label="Color Variant" value={colorVariant} onChange={onChangeColorVariant} isBlock>
									<ToggleGroupControlOption value="DARK" label="Dark" />
									<ToggleGroupControlOption value="LIGHT" label="Light" />
                                    <ToggleGroupControlOption value="GRADIENT1" label="Gradient Light" />
                                    <ToggleGroupControlOption value="GRADIENT2" label="Gradient Dark" />
								</ToggleGroupControl>
							</div>
						</PanelRow>
                        <PanelRow>
							<div style={{width:"100%"}}>
								<ToggleGroupControl label="Font Size" value={headerFontSize} onChange={onChangeHeaderFontSize} isBlock>
									<ToggleGroupControlOption value="text-mobile-6xl lg:text-6xl" label="Primary" />
									<ToggleGroupControlOption value="text-mobile-secondary-header lg:text-secondary-header" label="Secondary" />
								</ToggleGroupControl>
							</div>
						</PanelRow>
                        <PanelRow>
							<div style={{width:"100%"}}>
								<ToggleControl label="Round Top Corners?" checked={roundTopCorners} onChange={onChangeRoundTopCorners} />
								<ToggleControl label="Round Bottom Corners?" checked={roundBottomCorners} onChange={onChangeRoundBottomCorners} />
							</div>
						</PanelRow>
                        <PanelRow>
                            <div style={{width:"100%"}}>
                                <ToggleGroupControl label="Mobile Stack Order?" value={stackOrder} onChange={onChangeStackOrder} isBlock>
                                    <ToggleGroupControlOption value="headings" label="Headings First" />
                                    <ToggleGroupControlOption value="blocks" label="Inner Blocks First" />
                                </ToggleGroupControl>
                            </div>
                        </PanelRow>
                        <PanelRow>
                            <div style={{width:"100%"}}>
                                <ToggleGroupControl label="Use Mobile Stack Order for Tablet?" value={stackPreference} onChange={onChangeStackPreference} isBlock>
                                    <ToggleGroupControlOption value="mobile" label="Mobile Only" />
                                    <ToggleGroupControlOption value="tablet" label="Tablet & Mobile" />
                                </ToggleGroupControl>
                            </div>
                        </PanelRow>
                        <PanelRow>
							<div style={{width:"100%"}}>
								<ToggleControl label="Override Background with Media File?" checked={overrideBackground} onChange={onChangeOverride} />
                            </div>
                        </PanelRow>
                        {overrideBackground ? (<>
                            <PanelRow>
                                <div style={{width:"100%"}}>
                                <MediaUpload
                                value={backgroundMedia.title !== '' ? backgroundMedia : null}
                                onSelect={(media) => {
                                    console.log("Media Uploaded", media);
                                    setAttributes({
                                    backgroundMedia: {
                                        ...media
                                    },
                                    });
                                }}
                                multiple={false}
                                render={({ open }) => (
                                    <>
                                     <p style={{marginBottom: '5px'}}>
                                        {backgroundMedia.title !== ''
                                        ? '(Currently Selected: ' + backgroundMedia.title + ', ' + backgroundMedia.mime + ', ' + backgroundMedia.filesizeHumanReadable + ')'
                                        : 'No Image Uploaded'}
                                    </p>
                                    <button className='components-button is-primary' onClick={open}>
                                        {backgroundMedia.title !== ''
                                        ? 'Change Media for Desktop'
                                        : 'Upload or Select Media for Desktop'}
                                    </button>
                                    </>
                                )}
                                />
                                </div>
                                </PanelRow>
                                { backgroundMedia.type == "video" && (<>
                                <PanelRow>
                                    <ToggleControl label="Loop on Desktop?" checked={shouldLoopOnDesktop} onChange={onChangeLoopDesktop} />
                                </PanelRow></>)}
                                <PanelRow>
                                    <div style={{width:"100%"}}>
                                    <MediaUpload
                                    value={backgroundMediaTablet.title !== '' ? backgroundMediaTablet : null}
                                    onSelect={(media) => {
                                        console.log("Media Uploaded for Tablet", media);
                                        setAttributes({
                                        backgroundMediaTablet: {
                                            ...media
                                        },
                                        });
                                    }}
                                    multiple={false}
                                    render={({ open }) => (
                                        <>
                                        <p style={{marginBottom: '5px'}}>
                                            {backgroundMediaTablet.title !== ''
                                            ? '(Currently Selected: ' + backgroundMediaTablet.title + ', ' + backgroundMediaTablet.mime + ', ' + backgroundMediaTablet.filesizeHumanReadable + ')'
                                            : 'No Image Uploaded'}
                                        </p>
                                        <button className='components-button is-primary' onClick={open}>
                                            {backgroundMediaTablet.title !== ''
                                            ? 'Change Media for Tablet'
                                            : 'Upload or Select Media for Tablet'}
                                        </button>
                                        </>
                                    )}
                                    />
                                    </div>
                                </PanelRow>
                                { backgroundMediaTablet.type == "video" && (<>
                                <PanelRow>
                                    <ToggleControl label="Loop on Tablet?" checked={shouldLoopOnTablet} onChange={onChangeLoopTablet} />
                                </PanelRow></>)}
                                <PanelRow>
                                    <div style={{width:"100%"}}>
                                    <MediaUpload
                                    value={backgroundMediaMobile.title !== '' ? backgroundMediaMobile : null}
                                    onSelect={(media) => {
                                        console.log("Media Uploaded for Mobile", media);
                                        setAttributes({
                                        backgroundMediaMobile: {
                                            ...media
                                        },
                                        });
                                    }}
                                    multiple={false}
                                    render={({ open }) => (
                                        <>
                                        <p style={{marginBottom: '5px'}}>
                                            {backgroundMediaMobile.title !== ''
                                            ? '(Currently Selected: ' + backgroundMediaMobile.title + ', ' + backgroundMediaMobile.mime + ', ' + backgroundMediaMobile.filesizeHumanReadable + ')'
                                            : 'No Image Uploaded'}
                                        </p>
                                        <button className='components-button is-primary' onClick={open}>
                                            {backgroundMediaMobile.title !== ''
                                            ? 'Change Media for Mobile'
                                            : 'Upload or Select Media for Mobile'}
                                        </button>
                                        </>
                                    )}
                                    />
                                    </div>
                                </PanelRow>
                                { backgroundMediaMobile.type == "video" && (<>
                                <PanelRow>
                                    <ToggleControl label="Loop on Mobile?" checked={shouldLoopOnMobile} onChange={onChangeLoopMobile} />
                                </PanelRow></>)}
                                <PanelRow>
                                    <div style={{width:"100%"}}>
                                        <ToggleGroupControl label="Background Vertical Alignment" value={backgroundVerticalAlign} onChange={onChangeBackgroundVerticalAlignment} isBlock>
                                            <ToggleGroupControlOption value="top" label="Top" />
                                            <ToggleGroupControlOption value="center" label="Center" />
                                            <ToggleGroupControlOption value="bottom" label="Bottom" />
                                        </ToggleGroupControl>
                                    </div>
                                </PanelRow>
                                <PanelRow>
                                    <div style={{width:"100%"}}>
                                        <ToggleGroupControl label="Background Horizontal Alignment" value={backgroundHorizontalAlign} onChange={onChangeBackgroundHorizontalAlignment} isBlock>
                                            <ToggleGroupControlOption value="left" label="Left" />
                                            <ToggleGroupControlOption value="center" label="Center" />
                                            <ToggleGroupControlOption value="right" label="Right" />
                                        </ToggleGroupControl>
                                    </div>
                                </PanelRow>
                                <PanelRow>
                                    <div style={{width:"100%"}}>
                                        <ToggleGroupControl label="Background Fit Mode" value={backgroundFitMode} onChange={onChangeBackgroundFitMode} isBlock>
                                            <ToggleGroupControlOption value="contain" label="Contain" />
                                            <ToggleGroupControlOption value="cover" label="Cover" />
                                            <ToggleGroupControlOption value="fill" label="Fill" />
                                        </ToggleGroupControl>
                                    </div>
                                </PanelRow>
                                </>
                            ) : (<></>) }
						{showVSplit && (
                            <PanelRow style={{width: "100%"}}>
                            <div style={{width:"100%"}}>
                                <RadioControl
                                    label="Column Sizing"
                                    selected={ vSplit }
                                    options={ [
                                        { label: '25/75', value: '25/75' },
                                        { label: '33/66', value: '33/66' },
                                        { label: '40/60', value: '40/60' },
                                        { label: '50/50', value: '50/50' },
                                        { label: '60/40', value: '60/40' },
                                        { label: '66/33', value: '66/33' },
                                        { label: '75/25', value: '75/25' },
                                    ] }
                                    onChange={ onChangeVSplit }
                                />
                                </div>
                        </PanelRow>
							)}
				</PanelBody>
				<PanelBody
					title={ __( 'Heading Settings', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleControl label="Visible on Desktop?" checked={showHeadingOnDesktop} onChange={onChangeHeadingDesktop} />
								<ToggleControl label="Visible on Tablet?" checked={showHeadingOnTablet} onChange={onChangeHeadingTablet} />
								<ToggleControl label="Visible on Mobile?" checked={showHeadingOnMobile}  onChange={onChangeHeadingMobile} /> 
							</div>
						</PanelRow>
				</PanelBody>
                <PanelBody
					title={ __( 'Subheading Settings', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ false }
				>
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleControl label="Visible on Desktop?" checked={showSubheadingOnDesktop} onChange={onChangeSubheadingDesktop} />
								<ToggleControl label="Visible on Tablet?" checked={showSubheadingOnTablet} onChange={onChangeSubheadingTablet} />
								<ToggleControl label="Visible on Mobile?" checked={showSubheadingOnMobile}  onChange={onChangeSubheadingMobile} />
							</div>
						</PanelRow>
				</PanelBody>
                <PanelBody
					title={ __( 'Primary CTA Settings', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ false }
				>
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleControl label="Visible on Desktop?" checked={showCTAOnDesktop} onChange={onChangeCTADesktop} />
								<ToggleControl label="Visible on Tablet?" checked={showCTAOnTablet} onChange={onChangeCTATablet} />
								<ToggleControl label="Visible on Mobile?" checked={showCTAOnMobile}  onChange={onChangeCTAMobile} />
							</div>
						</PanelRow>
				</PanelBody>
                <PanelBody
					title={ __( 'Secondary CTA Settings', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ false }
				>
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleControl label="Visible on Desktop?" checked={showSecondCTAOnDesktop} onChange={onChangeSecondCTADesktop} />
								<ToggleControl label="Visible on Tablet?" checked={showSecondCTAOnTablet} onChange={onChangeSecondCTATablet} />
								<ToggleControl label="Visible on Mobile?" checked={showSecondCTAOnMobile}  onChange={onChangeSecondCTAMobile} />
							</div>
						</PanelRow>
				</PanelBody>
                <PanelBody
					title={ __( 'Inner Block Settings', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ false }
				>
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleControl label="Visible on Desktop?" checked={showInnerBlockOnDesktop} onChange={onChangeInnerBlocksDesktop} />
								<ToggleControl label="Visible on Tablet?" checked={showInnerBlockOnTablet} onChange={onChangeInnerBlocksTablet} />
								<ToggleControl label="Visible on Mobile?" checked={showInnerBlockOnMobile}  onChange={onChangeInnerBlocksMobile} />
							</div>
						</PanelRow>
				</PanelBody>
		</Panel>

		</InspectorControls>
        <InspectorControls>
				<Panel>
				<PanelBody
					title={ __( 'Key Values', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>
                    <PanelRow style={{width: "100%"}}>
						<div style={{width:"100%"}}>
							<RadioControl
								label="2 Column or Stacked Layout?"
								selected={ layout }
								options={ [
									{ label: '2 Column', value: '2 Column' },
									{ label: 'Stacked', value: 'Stacked' },
								] }
								onChange={ onChangeLayout }
							/>
							</div>
                    </PanelRow>
					<PanelRow>
						<TextControl
						label="Hero Heading"
						value={heading}
						placeholder='Heading goes here...'
						onChange={onChangeHeading}
						/>
					</PanelRow>
                    <PanelRow>
						<TextControl
						label="Hero Subheading"
						value={subheading}
						placeholder='Subheading goes here...'
						onChange={onChangeSubheading}
						/>
					</PanelRow>
                    <PanelRow>
						<TextControl
						label="Hero Primary CTA Text"
						value={ctaText}
						placeholder='Primary CTA Text goes here...'
						onChange={onChangeCTAText}
						/>
					</PanelRow>
                    <PanelRow>
						<TextControl
						label="Hero Primary CTA URL"
						value={ctaUrl}
						placeholder='Primary CTA URL goes here...'
						onChange={onChangeCTAUrl}
						/>
					</PanelRow>
                    <PanelRow>
						<TextControl
						label="Hero Secondary CTA Text"
						value={secondCTAText}
						placeholder='Secondary CTA Text goes here...'
						onChange={onChangeSecondCTAText}
						/>
					</PanelRow>
                    <PanelRow>
						<TextControl
						label="Hero Secondary CTA URL"
						value={secondCTAUrl}
						placeholder='Secondary CTA URL goes here...'
						onChange={onChangeSecondCTAUrl}
						/>
					</PanelRow>
				</PanelBody>
				</Panel>
			</InspectorControls>
            <div {...blockProps}>
                {overrideBackground ? (<>
                { backgroundMedia.type == "video" ? (<>
                    <video muted autoPlay playsInline loop={shouldLoopOnDesktop} className={`absolute object-fill md:object-${backgroundFitMode} ${backgroundHorizontalAlign == 'center' ? 'inset-x-auto' : `${backgroundHorizontalAlign}-0`} ${backgroundVerticalAlign == 'center' ? 'inset-y-auto' : `${backgroundVerticalAlign}-0`} w-[100%]  ${backgroundFitMode == 'contain' ? 'h-auto' : 'h-full'}`} width="100%">
                        <source src={backgroundMedia.url} type={backgroundMedia.mime}/>
                    </video>
                </>) : (
                <img
                        className={`element-background-image wp-image-${backgroundMedia.id} object-fill md:object-${backgroundFitMode} absolute ${backgroundHorizontalAlign == 'center' ? 'inset-x-auto' : `${backgroundHorizontalAlign}-0`} ${backgroundVerticalAlign == 'center' ? 'inset-y-auto' : `${backgroundVerticalAlign}-0`} w-[100%] ${backgroundFitMode == 'contain' ? 'h-auto' : 'h-full'}`}
                        src={backgroundMedia.url}
                        alt={backgroundMedia.alt}
                    />
                )}
                </>) : (<></>)}
                <div className={`hero-content flex px-2 md:px-28 py-48 md:mr-8 ${stackOrder == 'headings' ? 'flex-col' : 'flex-col-reverse'} ${showVSplit ? `${stackPreference == 'tablet' ? 'lg:flex-row' : 'md:flex-row'}` : `md:flex-col`}`}>
                    <div className={`hero-text ${showInnerBlockOnDesktop? 'lg:pb-20' : ''} ${showInnerBlockOnTablet? 'md:pb-20' : ''} ${showInnerBlockOnMobile? 'pb-20' : ''}  ${showVSplit ? leftColumnSpace : ''}`}>
                        <RichText
                            tagName="h3"
                            className={`relative title font-header leading-h1 ${headerFontSize} ${getVisibilityClasses(showHeadingOnDesktop, showHeadingOnTablet, showHeadingOnMobile)}`} // Add the selected option as a class
                            value={heading}
                            onChange={onChangeHeading}
                            placeholder={__("Heading Text Here", "gutenpride")}
                        />
                        <RichText
                            tagName="span"
                            className={`relative title font-display leading-subheader text-l  ${getVisibilityClasses(showSubheadingOnDesktop, showSubheadingOnTablet, showSubheadingOnMobile)}`} // Add the selected option as a class
                            value={subheading}
                            onChange={onChangeSubheading}
                            placeholder={__("Subheading Text Here", "gutenpride")}
                        />
                        <div className={`cta-container flex flex-row`}>
                            <div className={`primary-btn-wrapper mr-4 md:mr-8 flex-col flex-1 ${getVisibilityClasses(showCTAOnDesktop, showCTAOnTablet, showCTAOnMobile)}`}>
                                <RichText
                                    tagName="p" // Use a p tag here
                                    className="btn-primary"
                                    onChange={onChangeCTAText}
                                    value={ctaText}
                                    placeholder="Primary CTA text here"
                                /><br/>
                                <label>
                                    Primary CTA URL
                                    <URLInput
                                        value={ ctaUrl }
                                        onChange={ onChangeCTAUrl }
                                    />
                                </label>
                                <ToggleControl label="Open in new tab" checked={buttonTargetBlank} onChange={(value)=>{ setAttributes({buttonTargetBlank: value})}} />
                            </div>
                            <div className={`secondary-btn-wrapper flex-col flex-1 ${getVisibilityClasses(showSecondCTAOnDesktop, showSecondCTAOnTablet, showSecondCTAOnMobile)}`}>
                                <RichText
                                    tagName="p" // Use a p tag here
                                    className="btn-secondary"
                                    onChange={onChangeSecondCTAText}
                                    value={secondCTAText}
                                    placeholder="Secondary CTA text here"
                                /><br/>
                                <label>
                                    Secondary CTA URL
                                    <URLInput
                                        value={ secondCTAUrl }
                                        onChange={ onChangeSecondCTAUrl }
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={`hero-inner-blocks relative ${showVSplit ? rightColumnSpace : ''} ${getVisibilityClasses(showInnerBlockOnDesktop, showInnerBlockOnTablet, showInnerBlockOnMobile)}`}>
                        <InnerBlocks
							template={template}
						/>
                    </div>
                </div>
            </div>
        </>
    );
}