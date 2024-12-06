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
		referenceId,
        layout,
        vSplit,
        stackPreference,
        stackOrder,
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
				showImageOnDesktop,
				showImageOnTablet,
				showImageOnMobile,
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
        selectedOption,
        overrideBackground,
        backgroundHorizontalAlign,
        backgroundVerticalAlign,
        backgroundFitMode,
        backgroundMedia
     } = attributes;

     const blockProps =useBlockProps.save({
    });

	if(clientId && !referenceId){
		setAttributes( { referenceId: clientId } );
	}


     //Setters

     const onChangeColorVariant = ( newVariant ) => {
		setAttributes( { colorVariant: newVariant } );
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
		const onChangeImageOnly = (newValue) => {
			setAttributes({ imageOnly: newValue });
	};
		const onChangeImageDesktop = (newValue) => { //, attribute name
			setAttributes({ showImageOnDesktop: newValue });
	};
	const onChangeImageTablet = (newValue) => {
			setAttributes({ showImageOnTablet: newValue });
	};
	const onChangeImageMobile = (newValue) => {
			setAttributes({ showImageOnMobile: newValue });
	};
		const onChangeEyebrow= ( newTitle ) => {
		setAttributes( { eyebrow: newTitle } );
	};
		const onChangeEyebrowMobile = ( newTitle ) => {
		setAttributes( { showEyebrowOnMobile: newTitle } );
	};
	const onChangeEyebrowTablet = ( newTitle ) => {
		setAttributes( { showEyebrowOnTablet: newTitle } );
	};
	const onChangeEyebrowDesktop = ( newTitle ) => {
		setAttributes( { showEyebrowOnDesktop: newTitle } );
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
	const onChangeCTAOpenNewWindow = ( newTitle ) => {
		setAttributes( { ctaOpenNewWindow: newTitle } );
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
	const onChangeSecondCTAOpenNewWindow = ( newTitle ) => {
		setAttributes( { secondCTAOpenNewWindow: newTitle } );
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

		const allowedBlocks = ["core/image"];

    let leftColumnSpace = 'md:flex-1';


    return (
        <>
        <InspectorControls group="styles">
			<Panel>
				<PanelBody
					title={ __( 'Visual Settings', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>
					<div>
						{layout === 'Stacked' ? (
							<PanelRow>
								<div style={{width:"100%"}}>
									<ToggleGroupControl label="Color Variant" value={colorVariant} onChange={onChangeColorVariant} isBlock>
										<ToggleGroupControlOption value="DARK" label="Dark" />
										<ToggleGroupControlOption value="LIGHT" label="Light" />
										<ToggleGroupControlOption value="DARK GRADIENT" label="Dark-Gradient" />
										<ToggleGroupControlOption value="LIGHT GRADIENT" label="Light-Gradient" />
									</ToggleGroupControl>
								</div>
							</PanelRow>
						) : (
							<div>
								<PanelRow>
									<div style={{width:"100%"}}>
										<ToggleGroupControl label="Color Variant" value={colorVariant} onChange={onChangeColorVariant} isBlock>
											<ToggleGroupControlOption value="DARK" label="Dark" />
											<ToggleGroupControlOption value="LIGHT" label="Light" />
										</ToggleGroupControl>
									</div>
								</PanelRow>
							</div>
						)}
					</div>
				</PanelBody>
				{layout === '2 Column' && (<PanelBody
					title={ __( 'Eyebrow Settings', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleControl label="Visible on Desktop?" checked={showEyebrowOnDesktop} onChange={onChangeEyebrowDesktop} />
								<ToggleControl label="Visible on Tablet?" checked={showEyebrowOnTablet} onChange={onChangeEyebrowTablet} />
								<ToggleControl label="Visible on Mobile?" checked={showEyebrowOnMobile}  onChange={onChangeEyebrowMobile} /> 
							</div>
						</PanelRow>
				</PanelBody>)}
				{layout === '2 Column' && (<PanelBody
					title={ __( 'Image Settings', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleControl label="Visible on Desktop?" checked={showImageOnDesktop} onChange={onChangeImageDesktop} />
								<ToggleControl label="Visible on Tablet?" checked={showImageOnTablet} onChange={onChangeImageTablet} />
								<ToggleControl label="Visible on Mobile?" checked={showImageOnMobile}  onChange={onChangeImageMobile} /> 
							</div>
						</PanelRow>
				</PanelBody>)}
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
                {layout === '2 Column' && (<PanelBody
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
				</PanelBody> )}
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
								label="Banner shape"
								selected={ layout }
								options={ [
									{ label: 'Rectangular', value: '2 Column' },
									{ label: 'Pill', value: 'Stacked' },
								] }
								onChange={ onChangeLayout }
							/>
							</div>
                    </PanelRow>
					<PanelRow>
						<div style={{width: "100%"}}>
							<span>Reference ID for Subnav:</span><br/>
							<span style={{backgroundColor:"#EEE"}}>cta-banner-{referenceId}</span>
						</div>
					</PanelRow>
					{layout === '2 Column' && (
					<PanelRow>
						<TextControl
						label="Eyebrow Text"
						value={eyebrow}
						placeholder='Eyebrow goes here...'
						onChange={onChangeEyebrow}
						/>
					</PanelRow> 
				)}
					<PanelRow>
						<TextControl
						label="Hero Heading"
						value={heading}
						placeholder='Heading goes here...'
						onChange={onChangeHeading}
						/>
					</PanelRow>
					{layout === '2 Column' && (
                    <PanelRow>
						<TextControl
						label="Hero Subheading"
						value={subheading}
						placeholder='Subheading goes here...'
						onChange={onChangeSubheading}
						/>
					</PanelRow>
					)}
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
						<div style={{width:"100%"}}>
							<ToggleControl label="Open CTA in New Window?" checked={ctaOpenNewWindow} onChange={onChangeCTAOpenNewWindow} />
						</div>
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
					<PanelRow>
						<div style={{width:"100%"}}>
							<ToggleControl label="Open Second CTA in New Window?" checked={secondCTAOpenNewWindow} onChange={onChangeSecondCTAOpenNewWindow} />
						</div>
					</PanelRow>
				</PanelBody>
				</Panel>
			</InspectorControls>
            <div {...blockProps}>
			{layout === '2 Column' && (
			<div className={`p-6 ${getVisibilityClasses(showImageOnDesktop, showImageOnTablet, showImageOnMobile)}`}>
									<InnerBlocks
									template={template}
									templateLock="all"
									allowedBlocks={allowedBlocks}
									/>
								</div>
							)}
                <div className={`cta-banner-content flex p-3 md:px-28 md:mr-8 `}>
                    <div className={`cta-banner-text ${showVSplit ? leftColumnSpace : ''}`}>
						{layout === '2 Column' && (
							<RichText
								tagName="h4"
								className={`relative title font-display font-semibold text-l ${colorVariant === 'DARK' ? 'text-accentTurquoise-100' : 'text-eyebrow-dark'} ${getVisibilityClasses(showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile)}`} // Add the selected option as a class
								value={eyebrow}
								onChange={onChangeEyebrow}
								placeholder={__("The Eyebrow Text Here", "gutenpride")}
							/>
						)}
                        <RichText
                            tagName="h3"
                            className={`relative title font-display text-4xl ${getVisibilityClasses(showHeadingOnDesktop, showHeadingOnTablet, showHeadingOnMobile)}`} // Add the selected option as a class
                            value={heading}
                            onChange={onChangeHeading}
                            placeholder={__("Heading Text Here", "gutenpride")}
                        />
						{layout === '2 Column' && (
                        <RichText
                            tagName="span"
                            className={`relative title font-display text-l  ${getVisibilityClasses(showSubheadingOnDesktop, showSubheadingOnTablet, showSubheadingOnMobile)}`} // Add the selected option as a class
                            value={subheading}
                            onChange={onChangeSubheading}
                            placeholder={__("Subheading Text Here", "gutenpride")}
                        /> )}
                        <div className={`cta-container flex flex-row`}>
                            <div className={`primary-btn-wrapper mr-4 md:mr-8 flex-col flex-1 ${getVisibilityClasses(showCTAOnDesktop, showCTAOnTablet, showCTAOnMobile)}`}>
                                <RichText
                                    tagName="p" // Use a p tag here
                                    className={`btn-primary ${colorVariant === 'LIGHT' ? 'text-blue-100 border border-solid border-1 border-blue-100' : 'btn-primary-clear bg-primaryBlue-100 outline text-white'}`}
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
                </div>
            </div>
        </>
    );
}
