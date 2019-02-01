/*
 *  Document   : op_auth_lock.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Lock Page
 */

var OpAuthLock = function() {
    // Init Lock Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
    var initValidationLock = function(){
        jQuery('.js-validation-lock').validate({
            errorClass: 'invalid-feedback animated fadeInDown',
            errorElement: 'div',
            errorPlacement: function(error, e) {
                jQuery(e).parents('.form-group > div').append(error);
            },
            highlight: function(e) {
                jQuery(e).closest('.form-group').removeClass('is-invalid').addClass('is-invalid');
            },
            success: function(e) {
                jQuery(e).closest('.form-group').removeClass('is-invalid');
                jQuery(e).remove();
            },
            rules: {
                'lock-password': {
                    required: true,
                    minlength: 3
                }
            },
            messages: {
                'lock-password': {
                    required: 'Please enter your valid password'
                }
            }
        });
    };

    return {
        init: function () {
            // Init Lock Form Validation
            initValidationLock();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ OpAuthLock.init(); });