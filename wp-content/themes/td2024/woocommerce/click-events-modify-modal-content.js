
jQuery(window).on('load', function() {

 var modal_content_default = '';


  /***** CREATE MODALS BASED ON SUBCLASS *****/
      

  /** All Pre-built Connectors **/
  jQuery(".modal_prebuilt").click(function(e) {
    e.preventDefault();

    jQuery('.imodal').css('display', 'block');
    jQuery('body').css('overflow', 'hidden !important');


    /** change copy of description, image, titles, CTA link **/
    jQuery('.ilogo').attr("src", jQuery(this).attr("src"));


    if (!jQuery('.imodal-label').hasClass('integrationthree'))
    {
      jQuery('.imodal-label').addClass('integrationthree'); // add ease subclass
    }
    jQuery('.imodal-labeldesc').html('Integrate quickly');


    jQuery('.imodal-description').html('<p>Pre-built connectors like this one enable you to integrate Treasure Data with your tech stack quickly.</p><p>To learn more about this integration, check out our technical documentation page.</p>');


    var modal_title = jQuery(this).parent().attr('data-modal-title');
    jQuery('.imodal-h2').html(modal_title);

    jQuery('.imodal-cta').text("Technical Documentation");
    jQuery('.imodal-cta').attr({"target": "_blank", "href": "https://docs.treasuredata.com/display/public/INT/Treasure+Data+Integrations+Home?key=INT"});


    /* remove extra classes */
    if (jQuery('.imodal-label').hasClass('integrationone'))
    {
      jQuery('.imodal-label').removeClass('integrationone');
    }
    if (jQuery('.imodal-label').hasClass('integrationtwo'))
    {
      jQuery('.imodal-label').removeClass('integrationtwo');
    }


    if (jQuery('.ilogo').hasClass('logo-icon'))
    {
      jQuery('.ilogo').removeClass('logo-icon');
    }
  });



    /** SDKs and APIs **/
    jQuery(".modal_sdks_apis").click(function(e) {
      e.preventDefault();
   
      jQuery('.imodal').css('display', 'block');
      jQuery('body').css('overflow', 'hidden !important');


      /* change copy of description, image, titles, CTA link */
      jQuery('.ilogo').attr("src", "https://www.treasuredata.com/wp-content/uploads/modal-icon-sdks-apis.png");
      jQuery('.ilogo').addClass('logo-icon');
      

      if (!jQuery('.imodal-label').hasClass('integrationtwo'))
      {
        jQuery('.imodal-label').addClass('integrationtwo'); // add ease subclass
      }
      jQuery('.imodal-labeldesc').html('Build custom connections');


      jQuery('.imodal-description').html('<p>Treasure Data’s APIs & SDKs allow you to programmatically import & export data to and from the platform.</p> <p>To learn more about our SDKs and APIs, check out our API Portal.</p>');


      jQuery('.imodal-h2').html('SDKs and APIs');


      jQuery('.imodal-cta').text("API Portal");
      jQuery('.imodal-cta').attr({"target": "_blank", "href": "https://api-docs.treasuredata.com/"});


      /* remove extra classes */
      if (jQuery('.imodal-label').hasClass('integrationone'))
      {
        jQuery('.imodal-label').removeClass('integrationone');
      }
      if (jQuery('.imodal-label').hasClass('integrationthree'))
      {
        jQuery('.imodal-label').removeClass('integrationthree');
      }
    });




    /** Custom Scripts **/
    jQuery(".modal_custom_scripts").click(function(e) {
      e.preventDefault();
   
      jQuery('.imodal').css('display', 'block');
      jQuery('body').css('overflow', 'hidden !important');


      /* change copy of description, image, titles, CTA link */
      jQuery('.ilogo').attr("src", "https://www.treasuredata.com/wp-content/uploads/modal-icon-custom-scripts.png");
      jQuery('.ilogo').addClass('logo-icon');


      jQuery('.imodal-label').addClass('integrationtwo'); // add ease subclass
      jQuery('.imodal-labeldesc').html('Build custom connections');


      jQuery('.imodal-description').html('<p>When you need a completely customized integration, you can build one yourself using Treasure Data’s Custom Scripts.</p><p>To learn more about custom scripts, check out our technical documentation page.</p>');

      jQuery('.imodal-h2').html('Custom Scripts');


      jQuery('.imodal-cta').text("Technical Documentation");
      jQuery('.imodal-cta').attr({"target": "_blank", "href": "https://docs.treasuredata.com/display/public/PD/Introduction+to+Custom+Scripts"});


      /* remove extra classes */
      if (jQuery('.imodal-label').hasClass('integrationone'))
      {
        jQuery('.imodal-label').removeClass('integrationone');
      }
      if (jQuery('.imodal-label').hasClass('integrationthree'))
      {
        jQuery('.imodal-label').removeClass('integrationthree');
      }
  });



    /** Workflows **/
    jQuery(".modal_workflows").click(function(e) {
      e.preventDefault();
   
      jQuery('.imodal').css('display', 'block');
      jQuery('body').css('overflow', 'hidden !important');


      /* change copy of description, image, titles, CTA link */
      jQuery('.ilogo').attr("src", "https://www.treasuredata.com/wp-content/uploads/modal-icon-workflows.png");
      jQuery('.ilogo').addClass('logo-icon');


      jQuery('.imodal-label').addClass('integrationtwo'); // add ease subclass
      jQuery('.imodal-labeldesc').html('Build custom connections');


      jQuery('.imodal-description').html('<p>Workflows are a flexible tool for automating different types of processes, to include data import & export processes.</p><p>To learn more about Treasure Data Workflows, check out our technical documentation page</p>');

      jQuery('.imodal-h2').html('Workflows');

      jQuery('.imodal-cta').text("Technical Documentation");
      jQuery('.imodal-cta').attr({"target": "_blank", "href": "https://docs.treasuredata.com/display/public/PD/Treasure+Workflow"});


      /* remove extra classes */
      if (jQuery('.imodal-label').hasClass('integrationone'))
      {
        jQuery('.imodal-label').removeClass('integrationone');
      }
      if (jQuery('.imodal-label').hasClass('integrationthree'))
      {
        jQuery('.imodal-label').removeClass('integrationthree');
      }
  });



    /** Integrations Team **/
    jQuery(".modal_integrations_team").click(function(e) {
      e.preventDefault();
   
      jQuery('.imodal').css('display', 'block');
      jQuery('body').css('overflow', 'hidden !important');


      /* change copy of description, image, titles, CTA link */
      jQuery('.ilogo').attr("src", "https://www.treasuredata.com/wp-content/uploads/modal-icon-integrations-team.png");
      jQuery('.ilogo').addClass('logo-icon');


      jQuery('.imodal-label').addClass('integrationtwo'); // add ease subclass
      jQuery('.imodal-labeldesc').html('Build custom connections');


      jQuery('.imodal-description').html('<p>Treasure Data has a dedicated integrations team that can collaborate with you to build new integrations as you need them.</p><p>Read how the team worked with Black & Decker to build them a new Facebook connector.</p>');

      jQuery('.imodal-h2').html('Integrations Team');

      jQuery('.imodal-cta').text("Black & Decker Case Study");
      jQuery('.imodal-cta').attr({"target": "_blank", "href": "https://www.treasuredata.com/resources/case-studies/"});



      /* remove extra classes */
      if (jQuery('.imodal-label').hasClass('integrationone'))
      {
        jQuery('.imodal-label').removeClass('integrationone');
      }
      if (jQuery('.imodal-label').hasClass('integrationthree'))
      {
        jQuery('.imodal-label').removeClass('integrationthree');
      }
  });


    /** Treasure Boxes **/
    jQuery(".modal_treasure_boxes").click(function(e) {
      e.preventDefault();
   
      jQuery('.imodal').css('display', 'block');
      jQuery('body').css('overflow', 'hidden !important');


      /* change copy of description, image, titles, CTA link */
      jQuery('.ilogo').attr("src", "https://www.treasuredata.com/wp-content/uploads/modal-icon-treasure-boxes.png");
      jQuery('.ilogo').addClass('logo-icon');


      if (!jQuery('.imodal-label').hasClass('integrationthree'))
      {
        jQuery('.imodal-label').addClass('integrationthree'); // add ease subclass
      }
      jQuery('.imodal-labeldesc').html('Integrate quickly');


      jQuery('.imodal-description').html('<p>Treasure Boxes are ready-to-use snippets of code that can be leveraged to rapidly build & configure new integrations.</p><p>To learn more, check out the Treasure Boxes page.</p>');

      jQuery('.imodal-h2').html('Treasure Boxes');

      jQuery('.imodal-cta').text("Treasure Boxes");
      jQuery('.imodal-cta').attr({"target": "_blank", "href": "https://boxes.treasuredata.com/hc/en-us"});



      /* remove extra classes */
      if (jQuery('.imodal-label').hasClass('integrationone'))
      {
        jQuery('.imodal-label').removeClass('integrationone');
      }
      if (jQuery('.imodal-label').hasClass('integrationtwo'))
      {
        jQuery('.imodal-label').removeClass('integrationtwo');
      }
  });


    /** Custom Modal - Amplitude **/
    jQuery(".modal_custom_amplitude").click(function(e) {
      e.preventDefault();
   
      jQuery('.imodal').css('display', 'block');
      jQuery('body').css('overflow', 'hidden !important');


      /* change copy of description, image, titles, CTA link */
      jQuery('.ilogo').attr("src", jQuery(this).attr("src"));


      if (!jQuery('.imodal-label').hasClass('integrationthree'))
      {
        jQuery('.imodal-label').addClass('integrationthree'); // add ease subclass
      }

      jQuery('.imodal-labeldesc').html('Integrate quickly');


      jQuery('.imodal-description').html('<p>Integrate Treasure Data with Amplitude in order to understand your users, drive conversions, and increase engagement.</p><p>To learn more about this integration, check out our technical documentation page.</p>');

      jQuery('.imodal-h2').html("Amplitude");

      jQuery('.imodal-cta').text("Technical Documentation");
      jQuery('.imodal-cta').attr({"target": "_blank", "href": "https://docs.treasuredata.com/display/public/INT/Amplitude+Export+Integration"});



      /* remove extra classes */
      if (jQuery('.imodal-label').hasClass('integrationone'))
      {
        jQuery('.imodal-label').removeClass('integrationone');
      }
      if (jQuery('.imodal-label').hasClass('integrationtwo'))
      {
        jQuery('.imodal-label').removeClass('integrationtwo');
      }


      if (jQuery('.ilogo').hasClass('logo-icon'))
      {
        jQuery('.ilogo').removeClass('logo-icon');
      }
  });


      /** Custom Modal - Facebook Custom Audiences **/
      jQuery(".modal_custom_facebook_audiences").click(function(e) {
        e.preventDefault();
     
        jQuery('.imodal').css('display', 'block');
        jQuery('body').css('overflow', 'hidden !important');


        /* change copy of description, image, titles, CTA link */
        jQuery('.ilogo').attr("src", jQuery(this).attr("src"));


        if (!jQuery('.imodal-label').hasClass('integrationthree'))
        {
          jQuery('.imodal-label').addClass('integrationthree'); // add ease subclass
        }


        jQuery('.imodal-labeldesc').html('Integrate quickly');

        jQuery('.imodal-description').html('<p>Integrate Treasure Data with Facebook Custom Audiences in order to serve targeted ads to your best audiences across Meta technologies.</p><p>To learn more about this integration, check out our technical documentation page.</p>');

        jQuery('.imodal-h2').html("Facebook Custom Audiences");

        jQuery('.imodal-cta').text("Technical Documentation");
        jQuery('.imodal-cta').attr({"target": "_blank", "href": "https://docs.treasuredata.com/display/public/INT/Facebook+Custom+Audience+Export+Integration"});



        /* remove extra classes */
        if (jQuery('.imodal-label').hasClass('integrationone'))
        {
          jQuery('.imodal-label').removeClass('integrationone');
        }
        if (jQuery('.imodal-label').hasClass('integrationtwo'))
        {
          jQuery('.imodal-label').removeClass('integrationtwo');
        }


        if (jQuery('.ilogo').hasClass('logo-icon'))
        {
          jQuery('.ilogo').removeClass('logo-icon');
        }
  });


      /** Custom Modal - Zendesk **/
      jQuery(".modal_custom_zendesk").click(function(e) {
        e.preventDefault();
     
        jQuery('.imodal').css('display', 'block');
        jQuery('body').css('overflow', 'hidden !important');


        /* change copy of description, image, titles, CTA link */
        jQuery('.ilogo').attr("src", jQuery(this).attr("src"));


        if (!jQuery('.imodal-label').hasClass('integrationthree'))
        {
          jQuery('.imodal-label').addClass('integrationthree'); // add ease subclass
        }

        jQuery('.imodal-labeldesc').html('Integrate quickly');


        jQuery('.imodal-description').html('<p>Integrate Treasure Data with Zendesk in order to set your customer facing teams up for success and keep your business in sync.</p><p>To learn more about this integration, check out our technical documentation page.</p>');

        jQuery('.imodal-h2').html("Zendesk");

        jQuery('.imodal-cta').text("Technical Documentation");
        jQuery('.imodal-cta').attr({"target": "_blank", "href": "https://docs.treasuredata.com/display/public/INT/Zendesk+Export+Integration"});



        /* remove extra classes */
        if (jQuery('.imodal-label').hasClass('integrationone'))
        {
          jQuery('.imodal-label').removeClass('integrationone');
        }
        if (jQuery('.imodal-label').hasClass('integrationtwo'))
        {
          jQuery('.imodal-label').removeClass('integrationtwo');
        }


        if (jQuery('.ilogo').hasClass('logo-icon'))
        {
          jQuery('.ilogo').removeClass('logo-icon');
        }      
  });


      /** Custom Modal - Salesforce Marketing Cloud **/
      jQuery(".modal_custom_salesforce_marketing_cloud").click(function(e) {
        e.preventDefault();
     
        jQuery('.imodal').css('display', 'block');
        jQuery('body').css('overflow', 'hidden !important');


        /* change copy of description, image, titles, CTA link */
        jQuery('.ilogo').attr("src", jQuery(this).attr("src"));


        if (!jQuery('.imodal-label').hasClass('integrationthree'))
        {
          jQuery('.imodal-label').addClass('integrationthree'); // add ease subclass
        }

        jQuery('.imodal-labeldesc').html('Integrate quickly');


        jQuery('.imodal-description').html('<p>Integrate Treasure Data with Salesforce Marketing Cloud in order to optimize marketing emails, data management, and analytics.</p><p>To learn more about this integration, check out our technical documentation page.</p>');

        jQuery('.imodal-h2').html("Salesforce Marketing Cloud");

        jQuery('.imodal-cta').text("Technical Documentation");
        jQuery('.imodal-cta').attr({"target": "_blank", "href": "https://docs.treasuredata.com/display/public/INT/Salesforce+Integrations"});



        /* remove extra classes */
        if (jQuery('.imodal-label').hasClass('integrationone'))
        {
          jQuery('.imodal-label').removeClass('integrationone');
        }
        if (jQuery('.imodal-label').hasClass('integrationtwo'))
        {
          jQuery('.imodal-label').removeClass('integrationtwo');
        }


        if (jQuery('.ilogo').hasClass('logo-icon'))
        {
          jQuery('.ilogo').removeClass('logo-icon');
        }         
  });


    /** Custom Modal - Snapchat **/
      jQuery(".modal_custom_snapchat").click(function(e) {
        e.preventDefault();
     
        jQuery('.imodal').css('display', 'block');
        jQuery('body').css('overflow', 'hidden !important');


        /* change copy of description, image, titles, CTA link */
        jQuery('.ilogo').attr("src", jQuery(this).attr("src"));


        if (!jQuery('.imodal-label').hasClass('integrationthree'))
        {
          jQuery('.imodal-label').addClass('integrationthree'); // add ease subclass
        }
        jQuery('.imodal-labeldesc').html('Integrate quickly');


        jQuery('.imodal-description').html('<p>Integrate Treasure Data with Snapchat in order to reach engaged audiences and achieve your business goals.</p><p>To learn more about this integration, check out our technical documentation page.</p>');

        jQuery('.imodal-h2').html("Snapchat");

        jQuery('.imodal-cta').text("Technical Documentation");
        jQuery('.imodal-cta').attr({"target": "_blank", "href": "https://docs.treasuredata.com/display/public/INT/Snapchat+Export+Integration"});



        /* remove extra classes */
        if (jQuery('.imodal-label').hasClass('integrationone'))
        {
          jQuery('.imodal-label').removeClass('integrationone');
        }
        if (jQuery('.imodal-label').hasClass('integrationtwo'))
        {
          jQuery('.imodal-label').removeClass('integrationtwo');
        }


        if (jQuery('.ilogo').hasClass('logo-icon'))
        {
          jQuery('.ilogo').removeClass('logo-icon');
        }         
  });



  jQuery('.imodal-closebtn').click(function(){
    jQuery('.imodal').fadeOut();
  });


  /* close modal on user clicking ESC key */

  /*jQuery('.imodal-closebtn').click(function(){
    jQuery('.imodal').fadeOut();
  });*/



  jQuery(document).keyup(function(e) {
     if (e.key === "Escape") {
        jQuery('.imodal').fadeOut();
    }
});



}); // end onload