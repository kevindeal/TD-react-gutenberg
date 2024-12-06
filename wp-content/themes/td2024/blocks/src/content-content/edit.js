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
import { useEffect } from 'react';


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
        layout,
        vSplit,
        stackPreference,
        stackOrder,
		removeTopPadding,
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
		defaultContent,
		extraPadding,
		imageLoc,
		rowIndex
     } = attributes;

     const blockProps =useBlockProps.save({
    });

    useEffect(()=>{
        console.log("Layout", attributes.layout);
    }, [attributes.layout]);

	let eyebrowColor;

    if (colorVariant === 'DARK') {
        eyebrowColor = 'text-accentTurquoise-100';
    } else if (colorVariant === 'LIGHT') {
        eyebrowColor = 'text-blue-100';
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

	const getInlineVisibilityClasses = (desktop, tablet, mobile) => {

		return  `${mobile ?  'inline-block' : 'hidden'} ${tablet ? 'md:inline-block' : 'md:hidden'} ${desktop ? 'lg:inline-block' : 'lg:hidden' }`;
	}

    const template = [['core/image']];

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
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleGroupControl label="Color Variant" value={colorVariant} onChange={onChangeColorVariant} isBlock>
									<ToggleGroupControlOption value="DARK" label="Dark" />
									<ToggleGroupControlOption value="LIGHT" label="Light" />
								</ToggleGroupControl>
							</div>
						</PanelRow>
						<PanelRow>
							<ToggleControl
                                label="Remove Top Padding"
                                checked={removeTopPadding}
                                onChange={(value) => setAttributes({ removeTopPadding: value })}
                            />
						</PanelRow>
				</PanelBody>
                <PanelBody title={__('Eyebrow Text Visibility Settings')}>
                            <ToggleControl
                                label="Visible on Desktop"
                                checked={showEyebrowOnDesktop}
                                onChange={(value) => setAttributes({ showEyebrowOnDesktop: value })}
                            />
                            <ToggleControl
                                label="Visible on Tablet"
                                checked={showEyebrowOnTablet}
                                onChange={(value) => setAttributes({ showEyebrowOnTablet: value })}
                            />
                            <ToggleControl
                                label="Visible on Mobile"
                                checked={showEyebrowOnMobile}
                                onChange={(value) => setAttributes({ showEyebrowOnMobile: value })}
                            />
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
					<PanelRow>
						<div style={{width:"100%"}}>
							<TextControl
								label="Additional Padding"
								value={extraPadding}
								onChange={(value)=>{setAttributes({extraPadding: value})}}
								help="Pixel value used to optically align alternating sections"
							/>
						</div>
					</PanelRow>

					
					<>
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
						label="Eyebrow"
						value={eyebrow}
						placeholder='Eyebrow goes here...'
						onChange={onChangeEyebrow}
						/>
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
					</>
					
				</PanelBody>
				</Panel>
			</InspectorControls>
            <div {...blockProps}>

                <div className={`hero-content flex px-2 md:mr-8 row-${rowIndex} nt-${imageLoc}`}>
                    <div className={`hero-text ${showVSplit ? leftColumnSpace : ''}`}>
                        <RichText
                            tagName="span"
                            className={`eyebrow text-[22px] mb-5 font-semibold ${eyebrowColor} ${getVisibilityClasses(showEyebrowOnDesktop, showEyebrowOnTablet, showEyebrowOnMobile)}`}
                            value={eyebrow}
                            onChange={onChangeEyebrow}
                            placeholder={__("Eyebrow Text Here", "gutenpride")}
							inlineToolbar
                        />
                        <RichText
                            tagName="h3"
                            className={`relative title leading-[1.45] font-display text-4xl mb-6 ${getVisibilityClasses(showHeadingOnDesktop, showHeadingOnTablet, showHeadingOnMobile)}`} // Add the selected option as a class
                            value={heading}
                            onChange={onChangeHeading}
                            placeholder={__("Heading Text Here", "gutenpride")}
							inlineToolbar
                        />
                        <RichText
                            tagName="span"
                            className={`relative title mb-11 leading-[1.45] font-display text-l mb-[50px] ${getInlineVisibilityClasses(showSubheadingOnDesktop, showSubheadingOnTablet, showSubheadingOnMobile)}`} // Add the selected option as a class
                            value={subheading}
                            onChange={onChangeSubheading}
                            placeholder={__("Subheading Text Here", "gutenpride")}
							inlineToolbar
                        />
                        <div className={`cta-container flex flex-row`}>
                            <div className={`primary-btn-wrapper mr-4 md:mr-8 flex-col flex-1 ${getVisibilityClasses(showCTAOnDesktop, showCTAOnTablet, showCTAOnMobile)}`}>
                                <RichText
                                    tagName="p" // Use a p tag here
                                    className="btn-primary text-white"
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
