jQuery(document).ready(function($){
    // Quote Slider

    $('.quote-container').each((i,e) => {
      const $Container = $(e);
      var sliderSpeed = $Container.data('slider-speed');
      if ($Container.find('.quotes').length > 1) {
        $Container.slick({
            dots: false,
            infinite: true,
            fade: false,
            autoplay: false,
            speed: sliderSpeed,
            cssEase: 'cubic-bezier(0.76, 0, 0.24, 1)',
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows: true,
            appendArrows : $Container.closest(".wp-block-td-quote-container").find('.arrows-box')
        });
      }
    });

    /*
    if ($('.quote-container .quotes').length > 1) {
        console.log('Slider Speed: ', sliderSpeed);
        $('.quote-container').each(
            function(i,e){

              $(this).slick({
                  dots: false,
                  infinite: true,
                  fade: true,
                  autoplay: false,
                  speed: sliderSpeed,
                  cssEase: 'linear',
                  slidesToShow: 1,
                  adaptiveHeight: true,
                  arrows: true,
                  appendArrows : '.arrows-box'
              });

            }
        );
    }
    */

    // Mega Menu
    $("#primary-menu .menu-item").hover(function() {
      $(this).closest(".menu-item").find(".main-menu-link:first").toggleClass("rotate");
      $(this).closest(".menu-item").find(".sub-menu-outer:first").toggleClass("show");
    }, function() {
      var $submenu = $(this).closest(".menu-item").find(".sub-menu-outer:first");
      setTimeout(function() {
        $submenu.removeClass("show");
      }, 300);
    });

    // Header Darken on Hover
    $('#header #site-navigation #primary-menu .menu-item-depth-0').mouseenter(function() {
        $('#header').addClass('darken');
    });

    // Header Darken on Scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $('#header').addClass('darken');
            $('#header').addClass('hide-masthead');
        } else {
            $('#header').removeClass('darken');
            $('#header').removeClass('hide-masthead');
        }
    });

    $('#header #site-navigation #primary-menu .menu-item-depth-0, #header #site-navigation #primary-menu .menu-item-depth-0 .sub-menu-outer').mouseleave(function() {
        if (!$('#header #site-navigation #primary-menu .menu-item-depth-0:hover').length && !$('#header #site-navigation #primary-menu .menu-item-depth-0 .sub-menu-outer:hover').length) {
            setTimeout(function() {
              $('#header').removeClass('darken');
            }, 300);
        }
    });
    

    // Mobile Menu
    $("#mobile-menu .menu-item").on('click',function(e) {
        $(this).closest(".menu-item-depth-0").find(".main-menu-link:first").toggleClass("rotate");
        $(this).closest(".menu-item-depth-0").find(".sub-menu-outer:first").toggleClass("show");
        

        $(this).closest(".menu-item-depth-1").find(".main-menu-link:first").toggleClass("rotate");
        $(this).closest(".menu-item-depth-1").find(".sub-menu-outer:first").toggleClass("show");
    });

    // Mobile menu toggle
    $('#mobile-menu-toggle').on('click', function() {
        $('#mobile-navigation').fadeToggle();
        $(this).toggleClass('active');
        $('body').toggleClass("menu-open");
    });

    $('#mobile-navigation .menu-item-has-children > a').on('click', function(e) {
      e.stopPropagation();
      var submenu = $(this).siblings('.sub-menu-outer');
      if (submenu.hasClass('show')) {
        // If the submenu is already visible, hide it and prevent the link from being followed
        e.preventDefault();
        submenu.removeClass('show');
      } else {
        // If the submenu is not visible, show it and prevent the link from being followed
        e.preventDefault();
        submenu.addClass('show');
      }
    });
});


// Function to maintain aspect ratio of the video
function maintainAspectRatio() {
    console.log('Maintaining aspect ratio');
var embeds = document.querySelectorAll('.wistia_embed');
embeds.forEach(function(embed) {
    var aspectRatio = 9 / 16; // Assuming 16:9 aspect ratio
    var width = embed.offsetWidth;
    embed.style.height = (width * aspectRatio) + 'px';
});
}

// Call the function initially and whenever the window is resized
window.addEventListener('resize', maintainAspectRatio);
window.addEventListener('load', maintainAspectRatio);


// Marketo Form Integrations
//document.addEventListener("clearbit-forms-marketo-enrichment-complete",function(n){console.log('clearbit enriched');const{form:a}=n.detail;a.submittable(!1)}),$(window).on("load",function(){$(window).width()>959?$(".backgroundpanel").length&&$(".backgroundpanel").css("background-image","url("+$(".backgroundpanel").attr("data-bgImage")+")"):$(".backgroundpanel").css("background-color","#2D2D2D")});
jQuery(function ($) {
  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + "; path=/";
  }

  /*if (!document.getElementById('olTANuWPznVx')) {
    setCookie('adb', '1');
  } else {
    setCookie('adb', '0');
  }*/

    var adBlockEnabled = false;
    var testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    document.body.appendChild(testAd);
    window.setTimeout(function() {
      if (testAd.offsetHeight === 0) {
        adBlockEnabled = true;
      }
      testAd.remove();
      if(adBlockEnabled == true){
        //setCookie('adb', '1');
      }else{
        //setCookie('adb', '0');
      }
    }, 100);

  function isEmailGood(email) {
    for (var i = 0; i < invalidDomains.length; i++) {
      var domain = invalidDomains[i];
      if (email.indexOf(domain) != -1) {
        return false;
      }
    }
    return true;
  }

  function isBusinessEmailGood(email) {
    for (var i = 0; i < invalidBusinessDomains.length; i++) {
      var domain = invalidBusinessDomains[i];
      if (email.indexOf(domain) != -1) {
        return false;
      }
    }
    return true;
  }

  var clearbitformfill = document.createElement("script");
  clearbitformfill.type='text/javascript';
  clearbitformfill.src='https://marketo.clearbit.com/assets/v1/marketo/forms.js';
  clearbitformfill.setAttribute("data-clearbit-publishable-key", "pk_e2cbf03c7fa526572567571be2972e9a");
  $("body").append(clearbitformfill);

  var teknklSimpleDTOlib=document.createElement('script');
  teknklSimpleDTOlib.type='text/javascript';
  teknklSimpleDTOlib.src='/wp-content/themes/td2024/js/teknkl-simpledto-1.0.2.js';
  $("body").append(teknklSimpleDTOlib);

  if (typeof MktoForms2 != 'undefined') {
    var invalidDomains = ["@gmail.", "@yahoo.", "@hotmail.", "@live.", "@aol.", "@outlook.", "@qq.", "@163.", "@127.", "@inbox.ru.", "@mail.ru.", "@list.ru.", "@bk.ru.", "@me.com", "@test.", "@tester.", "@tester.", "@123.com", "@testco.", "@att.net", "@comcast.net"];
    var invalidBusinessDomains = ["actioniq.com", "agilone.com", "ascent360.com", "blueconic.com", "ensighten.com", "hull.io", "ignitionone.com", "getlytics.com", "mparticle.com", "ngdata.com", "redpointglobal.com", "redpoint.net", "segment.com", "signal.co", "tealium.com", "umbel.com", "altiscale.com", "qubole.com", "fivetran.com", "stitchdata.com", "alooma.com", "snaplogic.com", "mulesoft.com", "informatica.com", "talend.com", "snowflake.com", "google.com", "panoply.com", "snowplow.com", "databricks.com", "oracle.com", "salesforce.com", "sap.com", "simondata.com", "firsthive.com", "microsoft.com", "adobe.com", "optimove.com", "sitecore.com", "cheetahdigital.com", "amperity.com", "bluevenn.com", "lexer.io", "exponea.com"];
    var form = document.form;

    MktoForms2.whenReady(function (form) {
      let displayThankYouBox = false;
      if ($("#mktoForm_2740").length || $("#mktoForm_2718").length) {
        var blockCookie = getCookie('adb');
        //console.log(blockCookie);
        var target = document.getElementsByName('adagent')[0];
        if (typeof target !== 'undefined') {
          target.value = blockCookie;
        }
      }

      if (!$("#mktoForm_5082").length && !$("#mktoForm_5079").length) {
				jQuery('.mktoButtonRow').prepend('<p class="mktodisclaimer">Treasure Data respects your <a href="https://www.treasuredata.com/privacy/" target="_blank">privacy</a>.</p>');
			}


      if ($('.mktoFormRow').has('#formcheck').length) $('.mktoFormRow').has('#formcheck').insertBefore('.mktoButtonRow');

      console.log('Marketo Form Ready', form);
      form.submitable(false);
      form.onValidate(function () {
        
        console.log('Form Validating');
        // Assuming 'recaptchaContainer' is the id of your container element
        var container = document.getElementById('recaptchaContainer');

        // Clear the container
        if (container && container.innerHTML !== '') {
        container.innerHTML = '';
        }

        // Now you can load the reCAPTCHA
        
        //var recaptchaSiteKey = jQuery("#recaptchaSiteKey").data("sitekey");
        // console.log('Recaptcha key: ' , recaptchaSiteKey);
        // console.log(jQuery("#recaptchaSiteKey"));
        // grecaptcha.render('recaptchaContainer', {
        //   'sitekey' : recaptchaSiteKey,
        // });

        // if (GoogleRecaptcha == "block") {
        //   form.submitable(true);
        // }


        var email = form.vals().Email;
        //console.log(GoogleRecaptcha);
        // if (email && form.getFormElem().selector != 'form#mktoForm_2732' && form.getFormElem().selector != 'form#mktoForm_7653') {
          if (!isEmailGood(email)) {
            form.submitable(false);
            var emailElem = form.getFormElem().find("#Email");
            form.showErrorMessage("Must be a work email", emailElem);
            return false;
          } 
          else if (!isBusinessEmailGood(email)) {
            form.submitable(false);
            var emailElem = form.getFormElem().find("#Email");
            form.showErrorMessage("Please provide another business email address.", emailElem);
            return false;
          } 
          else {
            
            // if (GoogleRecaptcha == "block") {
            //     form.submitable(true);
            // }
            grecaptcha.execute();
          }

        // }


				
				var clearbitFirstName = $('[name="clearbitFirstName"]').val();
				var clearbitLastName = $('[name=clearbitLastName]').val();
				var clearbitCompanyLegalName = $('[name=clearbitCompanyLegalName]').val();
				var clearbitPersonPhone = $('[name=clearbitPersonPhone]').val();
				if (clearbitFirstName) { 
					form.addHiddenFields({
						"FirstName": clearbitFirstName
					});
					$('#FirstName').val(clearbitFirstName);
					}
				if (clearbitLastName) {
					form.addHiddenFields({
						"LastName": clearbitLastName
					});
					$('#LastName').val(clearbitLastName);
					}
				if (clearbitCompanyLegalName) {
					form.addHiddenFields({
						"Company": clearbitCompanyLegalName
					});
					$('#Company').val(clearbitCompanyLegalName);
					}
				if (clearbitPersonPhone) {
					form.addHiddenFields({
						"Phone": clearbitPersonPhone
					});
					$('#Phone').val(clearbitPersonPhone);
					}
        
          return false;
      });

      form.onSubmit(function () {
        setCookie('previousUrl', window.location.href, {
          path: "/"
        });
        if (typeof Treasure !== 'undefined') {
          var td = new Treasure({
            writeKey: "10699/01d185516271490b405798df7133037244e8d83a",
            database: "td_web"
          });
          var form_vals = form.vals();
          td.trackEvent('marketo_form_submits', form_vals);
        }
        return false;
      });
      form.onSuccess(function(){
        let formID = form.getId();
        if(formID == 2735){
          // On a blog form. Do not redirect user. Hide form, edit the title.
          $('.blog-form.form-fill').addClass("hidden");
          $('.blog-form-title').text("Thank you for subscribing to our blog!");
          $('.blog-form-title').addClass("font-medium");
          return false;
        } 
      });
    });
  }
});

// Fix JS Error on Marketo Forms Pages when changing Country Select
jQuery(document).on('change', 'select#Country', function ($) {
  var optInCheckboxRow = jQuery('.mktoFormRow').has('input[name="Explicit_Opt_In__c"]');
  var optInDisclaimerRow = jQuery(optInCheckboxRow).next('.mktoFormRow');
  var ppm = jQuery(optInCheckboxRow).addClass('di_checkbox').insertBefore('.mktoButtonRow');

  jQuery.when(ppm).done(function ($) {
    jQuery(optInDisclaimerRow).insertAfter('.di_checkbox');
  });
});


//  Global Menu 
    const primaryMenu = document.querySelector("#primary-menu");
    const menuWrapper = document.querySelector("#header-inner");
    const leadingMenuItem = document.querySelector("#primary-menu > li:first-child");
    window.addEventListener("resize", e => {
      const left = leadingMenuItem.getBoundingClientRect().left
              - menuWrapper.getBoundingClientRect().left
              + parseInt(window.getComputedStyle(leadingMenuItem, null).getPropertyValue('padding-left'), 10)
              + "px";
      primaryMenu.style.setProperty("--menu-offset", left);
    });
    window.dispatchEvent(new Event('resize'));

//  Global Vars 

    const setViewWidth = () => {
      const scrollbarWidth = window.innerWidth - document.body.clientWidth;
      document.body.style.setProperty("--scrollbarWidth", `${scrollbarWidth}px`);
    }

    window.addEventListener("resize", e=>{
      setViewWidth();
    });

    setViewWidth();


//  Sub-Nav

    const setMenuHeightVar = () => {
      document.body.style.setProperty("--menu-height", jQuery("#header-inner").height() + "px");
    }

    setMenuHeightVar(); 
    window.addEventListener("resize",e=>{
      setMenuHeightVar();
    })

    const $SubNavBlocks = document.querySelectorAll(".sub_nav_container");
    $SubNavBlocks.forEach($Block=>{

      const $Links = $Block.querySelectorAll("a");
      
      $Links.forEach($Link=>{
        $Link.addEventListener("click",e=>{
          const target_id = e.currentTarget.href.indexOf("#") > -1 ? e.currentTarget.href.split("#").pop() : null;
          
          if(!target_id)
            return

          const $Target = document.querySelector(`#${target_id},a[name='${target_id}']`);
          
          if(!$Target)
            return

          e.preventDefault();
          const initialScrollBehavior = jQuery("html").css("scroll-behavior");
          jQuery("html").css("scroll-behavior", "auto");

          /*
          let anchor_offset = $Target.tagName.toLowerCase() == "a" ? window.getComputedStyle($Target, null).getPropertyValue('top') : 0;
          if(!isNaN(parseInt(anchor_offset, 10)) && parseInt(anchor_offset, 10) < 0 ) {
            $Target.style.top = 0;
          }
          */
         
          const menu_height = jQuery("#header").height();
          if($Target.tagName.toLowerCase() == "a")
            $Target.style.top = 0;

          const target_top = jQuery($Target).offset().top - menu_height;
          const distance = target_top - window.scrollY;
          const window_lengths = distance / window.innerHeight;
          const duration = 250 + (100 * window_lengths);

          jQuery("html,body").animate(
            {
              scrollTop: target_top
            },
            {
              duration: duration,
              easing: "swing",
              complete: function() {
                jQuery("html").css("scroll-behavior",initialScrollBehavior);
              }
            }
          );

        })
      })

    });


const $LogoBannerBlocks = document.querySelectorAll(".logo-banner-block");

$LogoBannerBlocks.forEach($Block => {

  const $Content = $Block.querySelector(".logo-banner__logos");
  const $Wrapper = $Block.querySelector(".logo-banner__wrapper");

  const repeat = Math.ceil(window.innerWidth / $Wrapper.offsetWidth);
  console.log(repeat);
  if($Content && $Wrapper) {
    for(let i=0; i<repeat; i++) {
      const $ContentClone = $Content.cloneNode(true);
      $ContentClone.setAttribute("aria-hidden", true);
      $Wrapper.appendChild($ContentClone);
    }
  }

  if($Block.classList.contains("logo-banner-block--animate"))
    $Block.classList.add("logo-banner--animating");

});


//  Links

const $CardsWithLinks = document.querySelectorAll(".card-vertical:has(.btn-primary),.card-vertical:has(.btn-secondary),.card-horizontal:has(.btn-primary),.card-horizontal:has(.btn-secondary)");

$CardsWithLinks.forEach($Card=>{

  const $Button = $Card.querySelector(".btn-primary,.btn-secondary");
  const url = $Button ? $Button.href : null;
  const target = $Button.hasAttribute("target") ? $Button.getAttribute("target") : "_self";

  if(url)
    $Card.dataset.href = url;

  if(target)
    $Card.dataset.target = target;

  $Card.addEventListener("click",function(e) {
    if (e.target.tagName.toLowerCase() === 'a')
        return;
    window.open(url,target);
  });
  
});


(function ($) {

  const $CardContainers = $(".card-container");

  var $headers = $('.card-title');
  if ($headers.length < 2) { return; }
  $( window ).resize(function() {
    $.fn.setHeaderHeight(0,0);   
  });

  $.fn.setHeaderHeight = function(height, idx) {

    $CardContainers.each((i,$Block)=>{

      var $headers = $($Block).find(".card-title");

      $($headers).css({ 'height': 'auto' });

      if(window.outerWidth < 640)
        return;
     
      $($headers).each(function(i, obj) {    

        if ($($headers).eq(0).offset().top !== $($headers).eq(1).offset().top  ) {
          return false;
        }
        
        height = Math.max(height, $(obj).outerHeight()) 
        
        if (i != 0 && $($headers).eq(i - 1).offset().top != $(obj).offset().top) {

          $($headers).slice(idx, i).css({ 'height': height + 'px' });
          
          height = 0;
          idx = i;
        } else if ($headers.length - 1 == i) {
          
          $($headers).slice(idx, i + 1).css({ 'height': height + 'px' });   
        }

      });    

    });
    
  }
  
  //  run at load
  $.fn.setHeaderHeight(0,0);

}(jQuery));

const $SecondaryButtons = document.querySelectorAll(".btn-secondary:not(.left)");
$SecondaryButtons.forEach($Button=>{
  const words = $Button.textContent.split(" ");
  const lastWord = words.pop();
  $Button.innerHTML = [words.join(" "), "<span>" + lastWord + "</span>"].join(" ");
});