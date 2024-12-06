<script>
    
    var grSubmitForm = function() {
        MktoForms2.whenReady(function(form) {
            form.submittable(true);
                        form.addHiddenFields({
                "spamCheck": ""
            });
            var v = grecaptcha.getResponse();
            form.vals({
                "spamCheck": v
            });
                        form.submit();
        });
    };
    var $=jQuery.noConflict();
    setTimeout(() => {
        if (typeof MktoForms2 !== 'undefined' && $.isPlainObject(MktoForms2) === true) {
            
                console.log('Timeout has occurred');
            MktoForms2.whenReady(function(form) {
                console.log("Form is ready");
                
                $('.mktoButtonRow').before('<div id="recaptchaContainer" class="g-recaptcha" data-sitekey=' + <?php echo json_encode($recaptcha_site_key); ?> + ' data-size="invisible" data-callback="grSubmitForm">');
                form.submittable(false);
                form.onValidate(function(passed) {
                    console.log("Form was validated", passed);
                    console.log("Executing recaptcha", grecaptcha);
                    if (!passed) {
                        return;
                    }
                    else {
                        grecaptcha.execute();
                    }
                });
                $.getScript("https://www.google.com/recaptcha/api.js", function(data, textStatus, jqxhr) {
                    console.log("Recaptcha Code was loaded.");
                });
            });
        }
    }, 500);
    
</script>