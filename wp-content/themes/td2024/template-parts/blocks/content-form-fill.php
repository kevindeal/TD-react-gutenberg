<?php
$className = 'form-fill';
if (!empty($block['className'])) {
    $className .= ' ' . $block['className'];
}

$layout_style = get_field('layout_style');

$form_id = get_field('form_id');
$formHeader = get_field('form_header');


$header = get_field('header');
$bodyText = get_field('body_text');
$bodyTextFull = get_field('body_text_wysiwyg');
$bodyText2 = get_field('body_text_2');
$videoEmbed = get_field('video_embed');
$logosHeader = get_field('logos_header');
$logos = get_field('logo_row');

$docName = get_field('resource_url');
$isVideo = get_field('is_video');
$wistiaVideoID = get_field('wistia_video_id');
$buttonLabel = get_field('button_label');

$recaptcha_site_key = get_field('google_recaptcha_site_key', 'option');
?>

    <?php if ($layout_style === 'gradient') { ?>
    <div class="<?php echo esc_attr($className); ?> gradient-bg md:pb-0 pb-[50px]">
        <div class="container mx-auto">
            <div class="grid grid-cols-12 gap-0 sm:gap-12 pt-[200px]">
                <div class="col-span-12 md:col-span-6 lg:col-span-6 content-left">
                    <h1 class="text-mobile-5xl md:text-5xl leading-h1-mobile md:leading-h1 font-medium font-header mb-[25px]"><?php echo $header; ?></h1>
                    <p class="text-lg leading-[125%]"><?php echo $bodyText; ?></p>
                    <?php if (!empty($videoEmbed)) { ?>
                    <div class="video-container mt-[50px] rounded-[20px]">
                        <script src="//fast.wistia.com/embed/medias/<?php echo $videoEmbed; ?>.jsonp" async></script>
                        <script src="//fast.wistia.com/assets/external/E-v1.js" async></script>
                        <span class="wistia_embed wistia_async_<?php echo $videoEmbed; ?> popover=true popoverAnimateThumbnail=true">&nbsp;</span>
                    </div>
                    <?php } ?>
                    <?php if( have_rows('logo_row') ): ?>
                    <div class="logos mt-[50px]">
                        <h4 class="text-l font-medium mb-[20px]"><?php echo $logosHeader; ?></h4>
                        
                        <div class="block sm:flex gap-4 align-center justify-between">
                            <?php
                                while ( have_rows('logo_row') ) : the_row();
                                    //if( the_sub_field('logo_image')  != '' ):
                                        ?>
                                        <img src="<?php echo esc_url(the_sub_field('logo_image')); ?>" class="mx-auto sm:mb-0 mb-[20px]" alt="" />
                                        <?php
                                    //endif;
                                endwhile;
                            ?>
                        </div>
                        
                    </div>
                    <?php endif; ?>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6 form-right">
                    <div class="form-box bg-formGradient border-none rounded-[20px]  p-[50px] lg:p-[100px]">
                        <h3 class="text-white text-3xl font-medium mb-[50px]"><?php echo $formHeader; ?></h3>
                        <form id="mktoForm_<?php echo $form_id; ?>" class="mx-auto !w-full"></form>
                        <script src="//get.treasuredata.com/js/forms2/js/forms2.min.js"></script>
                        <script>
                            MktoForms2.loadForm("//get.treasuredata.com", "714-XIJ-402", <?php echo $form_id; ?>, form => {
                                console.log("form", form);
                            });
                        </script>
                        <?php include('form-recaptcha.php'); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php } elseif ($layout_style === 'dark') { ?>
        <div class="<?php echo esc_attr($className); ?> dark-bg">
            <div class="container mx-auto">
                <div class="grid grid-cols-12 gap-0 sm:gap-12 pt-[100px] md:pt-[200px]">
                    <div class="col-span-12 md:col-span-6 lg:col-span-8 form-left">
                        <div class="relative form-box bg-formGradientDark border-none rounded-[20px]  p-[50px] lg:p-[50px] xl:p-[100px]">
                            <h3 class="text-white text-4xl font-medium mb-[50px]"><?php echo $formHeader; ?></h3>
                            <form id="mktoForm_<?php echo $form_id; ?>" class="mx-auto !w-full"></form>
                            <div class="wistiaDiv" style="display: none; background: #fff !important; padding: 40px !important; padding-top: 14% !important; text-align: center !important;">
								<!-- wistia script for mobile device -->
							<?php if(isset($wistiaVideoID)) { ?> 
                            <script src="https://fast.wistia.com/embed/medias/<?=$wistiaVideoID?>.jsonp" async></script>
							  <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><h6 class="videoH6">Thank you</h6><br><span class="wistia_embed wistia_async_<?=$wistiaVideoID?> popover=true popoverContent=link popoverSize=1280x720" style="display:inline;position:relative">
              <?php } ?>

							<span class="btn-container btn-inline"><a href="#" class="custom-link btn border-width-0 filled btn-default btn-flat btn-icon-left"><?=$buttonLabel?></a></span>
							</span>
							</div>
                            <script src="//get.treasuredata.com/js/forms2/js/forms2.min.js"></script>
                            <script>
                                MktoForms2.loadForm("//get.treasuredata.com", "714-XIJ-402", <?php echo $form_id; ?>, form => {
                                console.log("form", form);
                            });
                            </script>
                            <?php include('form-recaptcha.php'); ?>
                            <img class="absolute bottom-[150px] -right-[100px] hidden md:block" src="<?php echo get_template_directory_uri(); ?>/assets/images/accent/gradient-slice.svg" alt="">
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6 lg:col-span-4 content-right">
                        <h1 class="text-mobile-5xl md:text-5xl leading-h1-mobile md:leading-h1 font-medium font-header mb-[25px]"><?php echo $header; ?></h1>
                        <div class="text-lg leading-[62.5px] body-text"><?php echo $bodyTextFull; ?></div>
                    </div>
                </div>
                
            </div>
        </div>
    <?php } else { ?>
        <div class="<?php echo esc_attr($className); ?> light-bg pb-[50px] overflow-hidden">
            <div class="container mx-auto relative">
                <div class="grid grid-cols-12 gap-0 sm:gap-12 pt-[200px]">
                    <div class="col-span-12 md:col-span-6 lg:col-span-6 content-left">
                        <h1 class="text-mobile-5xl md:text-5xl leading-h1-mobile md:leading-h1 font-medium font-header mb-[25px]"><?php echo $header; ?></h1>
                        <p class="text-lg leading-[125%]"><?php echo $bodyTextFull; ?></p>
                        <div id="mobileForm" class="mb-[30px] max-w-full"></div>
                        <div class="body-text"><?php echo $bodyText2; ?></div>                    
                    </div>
                    <div class="col-span-12 md:col-span-6 lg:col-span-6 form-right">
                        <div id="desktopForm"></div>
                    </div>
                </div>
                <div class="wistiaDiv" style="display: none; padding: 40px !important; padding-top: 14% !important; text-align: center !important;">
								<!-- wistia script for mobile device -->
							<?php if(isset($wistiaVideoID)) { ?> 
                <script src="https://fast.wistia.com/embed/medias/<?=$wistiaVideoID?>.jsonp" async></script>
							  <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><h6 class="videoH6 font-header text-3xl leading-header">Thank you</h6><br><span class="wistia_embed wistia_async_<?=$wistiaVideoID?> popover=true popoverContent=link popoverSize=1280x720" style="display:inline;position:relative">
              <?php } ?>

							<span class="btn-container btn-inline btn-primary text-mobile-button lg:text-button bg-buttonGradientFill text-white mb-5"><a href="#" class="custom-link btn border-width-0 filled btn-default btn-flat btn-icon-left"><?=$buttonLabel?></a></span>
							</span>
							</div>
                <img class="absolute -bottom-[50px] -right-[100px] hidden md:block" src="<?php echo get_template_directory_uri(); ?>/assets/images/accent/line-star.svg" alt="">
            </div>
        </div>
        <?php include('form-recaptcha.php'); ?>
    <?php } ?>
<script src="https://reveal.clearbit.com/v1/companies/reveal?authorization=pk_e2cbf03c7fa526572567571be2972e9a&variable=reveal"></script>
<!-- <script>
    var recaptchav3lib=document.createElement('script');
    recaptchav3lib.type='text/javascript';
    recaptchav3lib.src='https://get.treasuredata.com/rs/714-XIJ-402/images/recaptchav3.js';
    jQuery('body').append(recaptchav3lib);
    console.log('recaptcha v3 loaded');
</script> -->
<?php

if ($layout_style !== 'gradient' && $layout_style !== 'dark') {
?>
<script>
    var formId = <?php echo $form_id; ?>;
    var formHeader = "<?php echo $formHeader; ?>";
    var formBox = document.createElement('div');
    formBox.id = 'divform';
    formBox.className = 'form-box bg-gray-100 border-none rounded-[20px]  p-[50px] lg:p-[100px]';

    if (formHeader) {
        var header = document.createElement('h3');
        header.className = 'text-3xl font-medium mb-[50px]';
        header.textContent = formHeader;
        formBox.appendChild(header);
    }

    var form = document.createElement('form');
    form.id = 'mktoForm_' + formId;
    form.className = 'mx-auto !w-full';
    formBox.appendChild(form);


    var script1 = document.createElement('script');
    script1.src = "//get.treasuredata.com/js/forms2/js/forms2.min.js";
    document.body.appendChild(script1);

    script1.onload = function() {
        MktoForms2.loadForm("//get.treasuredata.com", "714-XIJ-402", formId, function(form) {

            <?php if($buttonLabel): ?>
            const $Form = form.getFormElem();
            if($Form)
                $Form.find("button[type='submit']").text("<?php print $buttonLabel ?>");
            <?php endif ?>


            form.onSubmit(function() {
                console.log('Form submitted');
                if ("undefined" != typeof Treasure) { if( null !== typeof Treasure) {
                    var t = new Treasure({
                        writeKey: "10699/01d185516271490b405798df7133037244e8d83a",
                        database: "td_web"
                    }),
                    r = e.vals();
                    t.setSignedMode(), t.trackEvent("marketo_form_submits", r)
                }}
                return false;
            });
            form.onSuccess(function(values, followUpUrl) {
                form.getFormElem().hide();
                var formContainer;
                if (window.innerWidth <= 768) {
                    formContainer = document.getElementById('mobileForm');
                } else {
                    formContainer = document.getElementById('desktopForm');
                }

                var successBox = document.createElement('div');
                successBox.className = 'success-box mb-5';
                successBox.textContent = 'Success! Your form has been submitted.';

                var divForm = document.getElementById('divform');
                divForm.appendChild(successBox);
                if(<?php echo $isVideo ? 'false' : 'true'; ?> ){
                    //Add download button to the element.
                    $(divForm).append('<br/><span class="btn-container btn-inline btn-primary text-mobile-button lg:text-button bg-buttonGradientFill text-white mb-5"><a href="<?php echo $docName; ?>" class="custom-link btn border-width-0 filled btn-default btn-flat btn-icon-left"><?=$buttonLabel?></a></span>');
                }

                if(<?php echo $isVideo ? 'true' : 'false'; ?> == true){
                    $(".wistiaDiv").appendTo(divForm);
                    $(".wistiaDiv").css("display", "block");
                    $( ".wistiaDiv" ).after( '<span class="wistia_embed wistia_async_<?=$wistiaVideoID?> popoverShowOnLoad=true popover=true popoverContent=link popoverSize=1280x720" >&nbsp;</span>' );
                    return false;
                } else {
                    <?php if($docName): ?>
                        if($('.mktoTemplateBox').length > 0){
                            // location.href = '<?php echo $docName;?>';
                            return 0 !== '<?php echo $docName;?>'.length ? location.href = '<?php echo $docName;?>' : location.href = "https://www.treasuredata.com/resources/thankyou/", !1
                        } else {
                            location.href = 'https://www.treasuredata.com/resources/thankyou/';
                            return false;
                        }
                    <?php else: ?>
                        location.href = 'https://www.treasuredata.com/resources/thankyou/';
                        return false;
                    <?php endif; ?>
                }


                return false;

            });
        });
        moveForm();
    }

    window.addEventListener('resize', moveForm);


    function moveForm() {
        var formContainer;
        if (window.innerWidth <= 768) {
            formContainer = document.getElementById('mobileForm');
        } else {
            formContainer = document.getElementById('desktopForm');
        }
        formContainer.appendChild(formBox);

        var buttonLabelInput = document.createElement('input');
        buttonLabelInput.id = 'buttonLabel';
        buttonLabelInput.type = 'hidden';
        buttonLabelInput.value = '<?=$buttonLabel?>';
        formContainer.appendChild(buttonLabelInput);
    }

    <?php if($isVideo): ?>
		setTimeout(function() { 
			// if(!$( "div" ).hasClass( "mktoTemplateBox" )){

			// 	$(".mktoButton").html($('#buttonLabel').val());
			// }

			// if($( "div" ).hasClass( "mktoTemplateBox" )){
			// 	var formH6 = $('form h6').text();
			// 	var wistiaVideoID = '<?php echo $wistiaVideoID; ?>';
			// 	var buttonLabel = '<?php echo $buttonLabel; ?>';

			// 	$('.mktoButtonWrap.mktoSimple').replaceWith('<span class="wistia_embed wistia_async_'+wistiaVideoID+' popover=true popoverContent=link popoverSize=1280x720" style="display:inline;position:relative"><span class="btn-container btn-inline"><a href="#" class="custom-link btn border-width-0 filled btn-default btn-flat btn-icon-left">'+buttonLabel+'</a></span></span>');

			// 	$( ".wistiaDiv" ).after( '<span class="wistia_embed wistia_async_<?=$wistiaVideoID?> popoverShowOnLoad=true popover=true popoverContent=link popoverSize=1280x720" >&nbsp;</span>' );

			// 	//$("form").html('<h6 class="videoH6">' + formH6 + '</h6><br><span class="wistia_embed wistia_async_'+wistiaVideoID+' popover=true popoverContent=link popoverSize=1280x720" style="display:inline;position:relative"><span class="btn-container btn-inline"><a href="#" class="custom-link btn border-width-0 filled btn-default btn-flat btn-icon-left">'+buttonLabel+'</a></span></span><br><br><a class="mktoNotYou" data-ol-has-click-handler="">Not you?</a>');
			// }

			var url_string = window.location.href;
			var url = new URL(url_string);
			var utm_source = url.searchParams.get("utm_source");

			var mkto_par = url.searchParams.get("mkto");
			console.log(mkto_par);
			if(mkto_par && mkto_par == "true"){
				$( ".wistiaDiv" ).after( '<span class="wistia_embed wistia_async_<?=$wistiaVideoID?> popoverShowOnLoad=true popover=true popoverContent=link popoverSize=1280x720" >&nbsp;</span>' );
			}
		}, window.innerWidth <= 768 ? 1500 : 7000);
        <?php endif; ?>

</script>
<?php include('form-recaptcha.php'); ?>
<?php } ?>