/*
 *  Document   : be_ui_animations.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Animations Page
 */

class BeUIAnimations {
    /*
     * Animation toggle functionality
     *
     */
    static animationsToggle() {
        let animationClass, animationButton, currentSection;

        // On button click
        jQuery('.js-animation-section button').on('click', e => {
            animationButton = jQuery(e.currentTarget);
            animationClass  = animationButton.data('animation-class');
            currentSection  = animationButton.parents('.js-animation-section');

            // Update class preview
            jQuery('.js-animation-preview', currentSection).html(animationClass);

            // Update animation object classes
            jQuery('.js-animation-object', currentSection)
                .removeClass()
                .addClass('js-animation-object animated ' + animationClass);
        });
    }

    /*
     * Init functionality
     *
     */
    static init() {
        this.animationsToggle();
    }
}

// Initialize when page loads
jQuery(() => { BeUIAnimations.init(); });
