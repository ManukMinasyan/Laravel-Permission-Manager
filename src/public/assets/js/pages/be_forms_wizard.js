/*
 *  Document   : be_forms_wizard.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Form Wizard Page
 */

var BeFormWizard = function() {
    // Init Wizard defaults
    var initWizardDefaults = function(){
        jQuery.fn.bootstrapWizard.defaults.tabClass         = 'nav nav-tabs';
        jQuery.fn.bootstrapWizard.defaults.nextSelector     = '[data-wizard="next"]';
        jQuery.fn.bootstrapWizard.defaults.previousSelector = '[data-wizard="prev"]';
        jQuery.fn.bootstrapWizard.defaults.firstSelector    = '[data-wizard="first"]';
        jQuery.fn.bootstrapWizard.defaults.lastSelector     = '[data-wizard="lsat"]';
        jQuery.fn.bootstrapWizard.defaults.finishSelector   = '[data-wizard="finish"]';
        jQuery.fn.bootstrapWizard.defaults.backSelector     = '[data-wizard="back"]';
    };

    // Init simple wizard, for more examples you can check out https://github.com/VinceG/twitter-bootstrap-wizard
    var initWizardSimple = function(){
        jQuery('.js-wizard-simple').bootstrapWizard({
            onTabShow: function(tab, navigation, index) {
                var percent = ((index + 1) / navigation.find('li').length) * 100;

                // Get progress bar
                var progress = navigation.parents('.block').find('[data-wizard="progress"] > .progress-bar');

                // Update progress bar if there is one
                if (progress.length) {
                    progress.css({ width: percent + 1 + '%' });
                }
            }
        });
    };

    // Init wizards with validation, for more examples you can check out https://github.com/VinceG/twitter-bootstrap-wizard
    // and https://github.com/jzaefferer/jquery-validation
    var initWizardValidation = function(){
        // Get forms
        var formClassic     = jQuery('.js-wizard-validation-classic-form');
        var formMaterial    = jQuery('.js-wizard-validation-material-form');

        // Prevent forms from submitting on enter key press
        formClassic.add(formMaterial).on('keyup keypress', function (e) {
            var code = e.keyCode || e.which;

            if (code === 13) {
                e.preventDefault();
                return false;
            }
        });

        // Init form validation on classic wizard form
        var validatorClassic = formClassic.validate({
            errorClass: 'invalid-feedback animated fadeInDown',
            errorElement: 'div',
            errorPlacement: function(error, e) {
                jQuery(e).parents('.form-group').append(error);
            },
            highlight: function(e) {
                jQuery(e).closest('.form-group').removeClass('is-invalid').addClass('is-invalid');
            },
            success: function(e) {
                jQuery(e).closest('.form-group').removeClass('is-invalid');
                jQuery(e).remove();
            },
            rules: {
                'wizard-validation-classic-firstname': {
                    required: true,
                    minlength: 2
                },
                'wizard-validation-classic-lastname': {
                    required: true,
                    minlength: 2
                },
                'wizard-validation-classic-email': {
                    required: true,
                    email: true
                },
                'wizard-validation-classic-bio': {
                    required: true,
                    minlength: 5
                },
                'wizard-validation-classic-location': {
                    required: true
                },
                'wizard-validation-classic-skills': {
                    required: true
                },
                'wizard-validation-classic-terms': {
                    required: true
                }
            },
            messages: {
                'wizard-validation-classic-firstname': {
                    required: 'Please enter a firstname',
                    minlength: 'Your firtname must consist of at least 2 characters'
                },
                'wizard-validation-classic-lastname': {
                    required: 'Please enter a lastname',
                    minlength: 'Your lastname must consist of at least 2 characters'
                },
                'wizard-validation-classic-email': 'Please enter a valid email address',
                'wizard-validation-classic-bio': 'Let us know a few thing about yourself',
                'wizard-validation-classic-skills': 'Please select a skill!',
                'wizard-validation-classic-terms': 'You must agree to the service terms!'
            }
        });

        // Init form validation on material wizard form
        var validatorMaterial = formMaterial.validate({
            errorClass: 'invalid-feedback animated fadeInDown',
            errorElement: 'div',
            errorPlacement: function(error, e) {
                jQuery(e).parents('.form-group').append(error);
            },
            highlight: function(e) {
                jQuery(e).closest('.form-group').removeClass('is-invalid').addClass('is-invalid');
            },
            success: function(e) {
                jQuery(e).closest('.form-group').removeClass('is-invalid');
                jQuery(e).remove();
            },
            rules: {
                'wizard-validation-material-firstname': {
                    required: true,
                    minlength: 2
                },
                'wizard-validation-material-lastname': {
                    required: true,
                    minlength: 2
                },
                'wizard-validation-material-email': {
                    required: true,
                    email: true
                },
                'wizard-validation-material-bio': {
                    required: true,
                    minlength: 5
                },
                'wizard-validation-material-location': {
                    required: true
                },
                'wizard-validation-material-skills': {
                    required: true
                },
                'wizard-validation-material-terms': {
                    required: true
                }
            },
            messages: {
                'wizard-validation-material-firstname': {
                    required: 'Please enter a firstname',
                    minlength: 'Your firtname must consist of at least 2 characters'
                },
                'wizard-validation-material-lastname': {
                    required: 'Please enter a lastname',
                    minlength: 'Your lastname must consist of at least 2 characters'
                },
                'wizard-validation-material-email': 'Please enter a valid email address',
                'wizard-validation-material-bio': 'Let us know a few thing about yourself',
                'wizard-validation-material-skills': 'Please select a skill!',
                'wizard-validation-material-terms': 'You must agree to the service terms!'
            }
        });

        // Init classic wizard with validation
        jQuery('.js-wizard-validation-classic').bootstrapWizard({
            tabClass: '',
            onTabShow: function(tab, navigation, index) {
                var percent = ((index + 1) / navigation.find('li').length) * 100;

                // Get progress bar
                var progress = navigation.parents('.block').find('[data-wizard="progress"] > .progress-bar');

                // Update progress bar if there is one
                if (progress.length) {
                    progress.css({ width: percent + 1 + '%' });
                }
            },
            onNext: function(tab, navigation, index) {
                if( !formClassic.valid() ) {
                    validatorClassic.focusInvalid();
                    return false;
                }
            },
            onTabClick: function(tab, navigation, index) {
                jQuery('a', navigation).blur();
		return false;
            }
        });

        // Init wizard with validation
        jQuery('.js-wizard-validation-material').bootstrapWizard({
            tabClass: '',
            onTabShow: function(tab, navigation, index) {
                var percent = ((index + 1) / navigation.find('li').length) * 100;

                // Get progress bar
                var progress = navigation.parents('.block').find('[data-wizard="progress"] > .progress-bar');

                // Update progress bar if there is one
                if (progress.length) {
                    progress.css({ width: percent + 1 + '%' });
                }
            },
            onNext: function(tab, navigation, index) {
                if( !formMaterial.valid() ) {
                    validatorMaterial.focusInvalid();
                    return false;
                }
            },
            onTabClick: function(tab, navigation, index) {
                jQuery('a', navigation).blur();
		return false;
            }
        });
    };

    return {
        init: function () {
            // Init Wizard Defaults
            initWizardDefaults();

            // Init Form Simple Wizard
            initWizardSimple();

            // Init Form Validation Wizard
            initWizardValidation();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BeFormWizard.init(); });
