/*
 *  Document   : be_ui_animations.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Animations Page
 */

var BeUIAnimations = function() {
    // Animation toggle functionality
    var initAnimationToggle = function(){
        var animationClass, animationButton, currentSection;

        // On button click
        jQuery('.js-animation-section button').on('click', function(){
            animationButton = jQuery(this);
            animationClass  = animationButton.data('animation-class');
            currentSection  = animationButton.parents('.js-animation-section');

            // Update class preview
            jQuery('.js-animation-preview', currentSection).html(animationClass);

            // Update animation object classes
            jQuery('.js-animation-object', currentSection)
                .removeClass()
                .addClass('js-animation-object animated ' + animationClass);
        });
    };

    return {
        init: function() {
            // Init animation toggle
            initAnimationToggle();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BeUIAnimations.init(); });