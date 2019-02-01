/*
 *  Document   : be_pages_generic_scrumboard.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Scrum Board Page in Backend
 */

var BeScrumBoard = function() {
    var scrumBoard, itemList, itemInput, itemInputVal, cardInput, cardInputVal;

    // Init Scrum Board
    var initScrumBoard = function(){
        scrumBoard = jQuery('.js-scrumboard');

        // Make the main container a flex container
        jQuery('#main-container').addClass('d-flex align-items-stretch');

        // Fade in the main scrumboard content
        scrumBoard.fadeTo(1000, 1);
    };

    // Add Card
    var cardAdd = function(){
        scrumBoard.on('submit.cb.sb.card.add', 'form[data-toggle="sb-card-add"]', function(e){
            e.preventDefault();

            // Get input value
            cardInput     = jQuery(this).find('input');
            cardInputVal  = cardInput.prop('value');

            // Check if the user entered something
            if ( cardInputVal ) {
                // Add Card
                cardInput.parents('.scrumboard-col').before(
                    '<div class="scrumboard-col block block-themed">' +
                        '<div class="block-header bg-primary">' +
                            '<h3 class="block-title font-w600">' +
                                jQuery('<span />').text(cardInputVal).html() +
                            '</h3>' +
                            '<div class="block-options">' +
                                '<div class="dropdown">' +
                                    '<button type="button" class="btn-block-option" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                                        '<i class="fa fa-fw fa-ellipsis-v"></i>' +
                                    '</button>' +
                                    '<div class="dropdown-menu dropdown-menu-right">' +
                                        '<a class="dropdown-item" href="javascript:void(0)">' +
                                            '<i class="fa fa-fw fa-pencil mr-5"></i>Edit' +
                                        '</a>' +
                                        '<div class="dropdown-divider"></div>' +
                                        '<a class="dropdown-item" href="javascript:void(0)" data-toggle="block-option" data-action="close">' +
                                            '<i class="fa fa-fw fa-times text-danger mr-5"></i>Delete' +
                                        '</a>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="block-content block-content-full bg-body-light">' +
                            '<form class="w-100" method="post" data-toggle="sb-item-add">' +
                                '<div class="input-group">' +
                                    '<div class="input-group-prepend">' +
                                        '<span class="input-group-text">' +
                                            '<i class="fa fa-lightbulb-o"></i>' +
                                        '</span>' +
                                    '</div>' +
                                    '<input type="text" class="form-control" placeholder="New Idea..">' +
                                '</div>' +
                            '</form>' +
                        '</div>' +
                        '<div class="scrumboard-items block-content"></div>' +
                    '</div>'
                );

                // Clear and focus input field
                cardInput.prop('value', '');

                // Refresh sortable
                initDraggableItems('refresh');
            }
        });
    };

    // Add Item
    var itemAdd = function(){
        scrumBoard.on('submit.cb.sb.item.add', 'form[data-toggle="sb-item-add"]', function(e){
            e.preventDefault();

            // Get input value
            itemList      = jQuery(this).parents('.scrumboard-col').find('.scrumboard-items');
            itemInput     = jQuery(this).find('input');
            itemInputVal  = itemInput.prop('value');

            // Check if the user entered something
            if ( itemInputVal ) {
                // Add Item
                itemList.prepend(
                    '<div class="scrumboard-item">' +
                        '<div class="scrumboard-item-options">' +
                            '<a class="scrumboard-item-handler btn btn-sm btn-alt-warning" href="javascript:void(0)">' +
                                '<i class="fa fa-hand-grab-o"></i>' +
                            '</a> ' +
                            '<button class="btn btn-sm btn-alt-warning" data-toggle="sb-item-remove">' +
                                '<i class="fa fa-close"></i>' +
                            '</button>' +
                        '</div>' +
                        '<div class="scrumboard-item-content">' +
                            jQuery('<span />').text(itemInputVal).html() +
                        '</div>' +
                    '</div>'
                );

                // Clear and focus input field
                itemInput.prop('value', '').focus();

                // Refresh sortable
                initDraggableItems('refresh');
            }
        });
    };

    // Remove Item
    var itemRemove = function(){
        scrumBoard.on('click.cb.sb.item.remove', 'button[data-toggle="sb-item-remove"]', function(e){
            jQuery(this).parents('.scrumboard-item').remove();
        });
    };

    // Init Draggable Items
    var initDraggableItems = function( mode ){
        if ( mode === 'refresh') {
            jQuery('.scrumboard-items.js-draggable-enabled').sortable('destroy');
            initDraggableItems();
        } else {
            jQuery('.scrumboard-items').addClass('js-draggable-enabled').sortable({
                connectWith: '.scrumboard-items',
                items: '.scrumboard-item',
                dropOnEmpty: true,
                opacity: .75,
                handle: '.scrumboard-item-handler',
                placeholder: 'scrumboard-item-placeholder',
                tolerance: 'pointer',
                start: function(e, ui){
                    ui.placeholder.css({
                        'height': ui.item.outerHeight(),
                        'margin-bottom': ui.item.css('margin-bottom')
                    });
                }
            });
        }
    };

    return {
        init: function () {
            // Init Scrum Board
            initScrumBoard();

            // Init Card Add
            cardAdd();

            // Init Item Add
            itemAdd();

            // Init Item Remove
            itemRemove();

            // Init Draggable Items
            initDraggableItems();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BeScrumBoard.init(); });