/*
 *  Document   : op_auth_lock.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Lock Page
 */

// Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
class OpAuthLock {
    /*
     * Init Lock Form Validation
     *
     */
    static initValidationLock() {
        jQuery('.js-validation-lock').validate({
            errorClass: 'invalid-feedback animated fadeInDown',
            errorElement: 'div',
            errorPlacement: (error, e) => {
                jQuery(e).parents('.form-group > div').append(error);
            },
            highlight: e => {
                jQuery(e).closest('.form-group').removeClass('is-invalid').addClass('is-invalid');
            },
            success: e => {
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
    }

    /*
     * Init functionality
     *
     */
    static init() {
        this.initValidationLock();
    }
}

// Initialize when page loads
jQuery(() => { OpAuthLock.init(); });
