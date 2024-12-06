import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks, useBlockProps, } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import classnames from 'classnames';

export default function save({ attributes, clientId}) {
    const  {
        imageAlignX,
        imageAlignY,
		extraPadding,
		imageLoc,
		rowIndex
     } = attributes;

     const blockProps =useBlockProps.save({});


	let justifyClasses = '';
	let alignClasses = '';
	let paddingClasses = '';
	let paddingRight = '';
	let paddingLeft = '';

	if(imageLoc == 'right') {
		paddingClasses = rowIndex%2 == 0 ? `pl-[${extraPadding}px]` : `pl-[${extraPadding}px]`;
		if(rowIndex%2==0) {
			paddingLeft = 0;
			paddingRight = `${extraPadding}px`;
		}else{
			paddingLeft = `${extraPadding}px`;
			paddingRight = 0;
		}
	}else{
		paddingClasses = rowIndex%2 == 0 ? `pl-[${extraPadding}px]` : `pr-[${extraPadding}px]`;
		if(rowIndex%2==0) {
			paddingLeft = `${extraPadding}px`;
			paddingRight = 0;
		}else{
			paddingLeft = 0;
			paddingRight = `${extraPadding}px`;
		}
	}

	switch(imageAlignY) {
		case "top": 
			alignClasses = "items-start";
			break;
		case "bottom": 
			alignClasses = "items-end";
			break;
		case "center": 
		default:
			alignClasses = "items-center";
			break;
	}

	switch(imageAlignX) {
		case "left": 
			justifyClasses = "justify-start";
			break;
		case "right": 
			justifyClasses = "justify-end";
			break;
		case "center": 
		default:
			justifyClasses = "justify-center";
			break;
	}

    return (
        <>
        <div {...blockProps} style={ { paddingRight: paddingRight, paddingLeft: paddingLeft } } className={`content-image-wrapper row-${rowIndex} flex w-full ${justifyClasses} ${alignClasses} ${paddingClasses}`}>
            <InnerBlocks.Content />
        </div>
        </>
    )
}