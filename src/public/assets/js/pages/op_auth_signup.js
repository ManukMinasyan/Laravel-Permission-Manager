/*
 *  Document   : op_auth_signup.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Sign Up Page
 */

var OpAuthSignUp = function() {
    // Init Sign Up Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
    var initValidationSignUp = function(){
        jQuery('.js-validation-signup').validate({
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
                'signup-username': {
                    required: true,
                    minlength: 3
                },
                'signup-email': {
                    required: true,
                    email: true
                },
                'signup-password': {
                    required: true,
                    minlength: 5
                },
                'signup-password-confirm': {
                    required: true,
                    equalTo: '#signup-password'
                },
                'signup-terms': {
                    required: true
                }
            },
            messages: {
                'signup-username': {
                    required: 'Please enter a username',
                    minlength: 'Your username must consist of at least 3 characters'
                },
                'signup-email': 'Please enter a valid email address',
                'signup-password': {
                    required: 'Please provide a password',
                    minlength: 'Your password must be at least 5 characters long'
                },
                'signup-password-confirm': {
                    required: 'Please provide a password',
                    minlength: 'Your password must be at least 5 characters long',
                    equalTo: 'Please enter the same password as above'
                },
                'signup-terms': 'You must agree to the service terms!'
            }
        });
    };

    return {
        init: function () {
            // Init SignUp Form Validation
            initValidationSignUp();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ OpAuthSignUp.init(); });