/*
 *  Document   : be_pages_generic_contact.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Contact Page in Backend
 */

var BeContact = function() {
    // Init Contact Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
    var initValidationContact = function(){
        jQuery('.js-validation-be-contact').validate({
            errorClass: 'invalid-feedback animated fadeInDown',
            errorElement: 'div',
            errorPlacement: function(error, e) {
                jQuery(e).after(error);
            },
            highlight: function(e) {
                jQuery(e).removeClass('is-invalid').addClass('is-invalid');
            },
            success: function(e) {
                jQuery(e).prev().removeClass('is-invalid');
                jQuery(e).remove();
            },
            rules: {
                'be-contact-name': {
                    required: true,
                    minlength: 2
                },
                'be-contact-email': {
                    required: true,
                    email: true
                },
                'be-contact-subject': {
                    required: true
                },
                'be-contact-message': {
                    required: true,
                    minlength: 2
                }
            },
            messages: {
                'be-contact-name': 'Please provide at least your first name',
                'be-contact-email': 'Please enter your valid email address to be able to reach you back',
                'be-contact-subject': 'Please select where woul you like to send your message',
                'be-contact-message': 'What would you like to say?'
            }
        });
    };

    // Init Contact Map, for more examples you can check out https://hpneo.github.io/gmaps/
    var initMapContact = function(){
        if ( jQuery('#js-map-be-contact').length ) {
            new GMaps({
                div: '#js-map-be-contact',
                lat: 37.840,
                lng: -122.500,
                zoom: 13,
                disableDefaultUI: true,
                scrollwheel: false
            }).addMarkers([
                {lat: 37.840, lng: -122.500, title: 'Marker #1', animation: google.maps.Animation.DROP, infoWindow: {content: 'Company LTD'}}
            ]);
        }
    };

    return {
        init: function () {
            // Init Contact Form Validation
            initValidationContact();

            // Init Contact Map
            initMapContact();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BeContact.init(); });