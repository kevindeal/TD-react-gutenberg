import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save( {
		className: 'tab-block',
	} );
	const { pushStateID, isVisibleDesktop, isVisibleMobile, isVisibleTablet, isEditorVisible } = attributes;

	const getVisibilityClasses = (desktop, tablet, mobile, editor) => {
		//Including editor status in order to limit to one element visible for the sake of not shifting.
		return  `${mobile ? editor ?  'flex' : 'hidden' : 'hidden'} ${tablet ? editor ? 'md:flex' : 'md:hidden' : 'md:hidden'} ${desktop ? editor ?  'lg:flex' : 'lg:hidden' : 'lg:hidden'}`;
	}

	return (
		<>
			<div { ...blockProps }>
				<div id={pushStateID} 
				data-visible-mobile={isVisibleMobile}
				data-visible-tablet={isVisibleTablet}
				data-visible-desktop={isVisibleDesktop}
				className={`tab-contents flex-1 w-full flex-col ${getVisibilityClasses(isVisibleDesktop, isVisibleMobile, isVisibleTablet, isEditorVisible)}`}>
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}
