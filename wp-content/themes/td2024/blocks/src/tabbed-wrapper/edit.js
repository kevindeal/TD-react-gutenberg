/**
 * External dependencies
 */
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	AlignmentControl,
	BlockControls,
	InspectorControls,
	InnerBlocks
} from '@wordpress/block-editor';

import {
	TextControl,
	ToggleControl,
	RadioControl,
	Panel,
	PanelBody,
	PanelRow,
	RangeControl,
	SelectControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

import './editor.scss';
import '../../../static/output.css';

export default function Edit( { attributes, setAttributes, className } ) {
	// console.log("Block Props", blockProps, className);
	const { pushStateID, tabName, colorVariant, isEditorVisible, isVisibleMobile, isVisibleTablet, isVisibleDesktop } = attributes;
	const blockProps = useBlockProps({className: ''});

	const onChangepushStateID = ( newpushStateID ) => {
		setAttributes( { pushStateID: newpushStateID} );
	};
	const onChangeTabName = ( newTabName ) => {
		setAttributes( { tabName: newTabName} );
	};
	const onChangeTitleMobile = ( newTitle ) => {
		setAttributes( { isVisibleMobile: newTitle } );
	};
	const onChangeTitleTablet = ( newTitle ) => {
		setAttributes( { isVisibleTablet: newTitle } );
	};
	const onChangeTitleDesktop = ( newTitle ) => {
		setAttributes( { isVisibleDesktop: newTitle } );
	};

	const getVisibilityClasses = (desktop, tablet, mobile, editor) => {

		return  `${mobile ? editor ?  'flex' : 'hidden' : 'hidden'} ${tablet ? editor ? 'md:flex' : 'md:hidden' : 'md:hidden'} ${desktop ? editor ?  'lg:flex' : 'lg:hidden' : 'lg:hidden'}`;
	}

	// console.log("Is Editor Visible?", isEditorVisible);

	return (
		<>
			<InspectorControls>
				<Panel>
				<PanelBody
					title={ __( 'Key Values', 'tabbed-wrapper' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>
					<PanelRow>
						<TextControl
						label="Tab Name"
						value={tabName}
						placeholder='Display name for the tab.'
						onChange={onChangeTabName}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
						label="Push State"
						value={pushStateID}
						placeholder='Identifier for URL..'
						onChange={onChangepushStateID}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Display Settings', 'tabbed-content' ) }
					style={{width: "100%"}}
					initialOpen={ true }
				>
						<PanelRow>
							<div style={{width:"100%"}}>
								<ToggleControl label="Visible on Desktop?" checked={isVisibleDesktop} onChange={onChangeTitleDesktop} />
								<ToggleControl label="Visible on Tablet?" checked={isVisibleTablet} onChange={onChangeTitleTablet} />
								<ToggleControl label="Visible on Mobile?" checked={isVisibleMobile}  onChange={onChangeTitleMobile} /> 
							</div>
						</PanelRow>
				</PanelBody>
				</Panel>
			</InspectorControls>

			{/* <BlockControls group="block">
				<AlignmentControl value={ align } onChange={ onChangeAlign } />
			</BlockControls> */}

			<div { ...blockProps }>
				<div class="td-alert-heading hidden">
					{pushStateID} | {isEditorVisible ? "True" : "False"} | {colorVariant}
				</div>
				<div class={`editor-inner-blocks w-full ${getVisibilityClasses(isVisibleDesktop, isVisibleMobile, isVisibleTablet, isEditorVisible)}`}>
					<InnerBlocks 
						template={[['core/paragraph', {placeholder: 'You can add any block to this Tab\'s content! Or type here just to replace this Paragraph block\'s content.'}]]}
					/>
				</div>
			</div>
		</>
	);
}
