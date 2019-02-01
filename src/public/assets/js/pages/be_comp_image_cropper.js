/*
 *  Document   : be_comp_image_cropper.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Image Cropper Page
 */

var BeCompImageCropper = function() {
    // Image Cropper, for more examples you can check out https://fengyuanchen.github.io/cropperjs/
    var initImageCropper = function(){
        // Get Image Container
        var image = document.getElementById('js-img-cropper');

        // Set Options
        Cropper.setDefaults({
            aspectRatio: 4 / 3,
            preview: '.js-img-cropper-preview'
        });

        // Init Image Cropper
        var cropper = new Cropper(image, {
            crop: function (e) {
                // e.detail contains all data required to crop the image server side
                // You will have to send it to your custom server side script and crop the image there
                // Since this event is fired each time you set the crop section, you could also use getData()
                // method on demand. Please check out https://fengyuanchen.github.io/cropperjs/ for more info
                // console.log(e.detail);
            }
        });

        // Mini Cropper API
        jQuery('[data-toggle="cropper"]').on('click', function(){
            var btn     = jQuery(this);
            var method  = btn.data('method') || false;
            var option  = btn.data('option') || false;

            // Method selection
            switch(method) {
                case 'zoom':
                    cropper.zoom(option);
                    break;
                case 'setDragMode':
                    cropper.setDragMode(option);
                    break;
                case 'rotate':
                    cropper.rotate(option);
                    break;
                case 'scaleX':
                    cropper.scaleX(option);
                    btn.data('option', -(option));
                    break;
                case 'scaleY':
                    cropper.scaleY(option);
                    btn.data('option', -(option));
                    break;
                case 'setAspectRatio':
                    cropper.setAspectRatio(option);
                    break;
                case 'crop':
                    cropper.crop();
                    break;
                case 'clear':
                    cropper.clear();
                    break;
            }
        });
    };

    return {
        init: function () {
            // Init Image Cropper
            initImageCropper();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BeCompImageCropper.init(); });