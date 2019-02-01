/*
 *  Document   : be_comp_chat.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Chat Pages
 */

var BeCompChat = function() {
    // Helper variables - set in initChat()
    var lWindow, lHeader, lFooter, cContainer, cHeight, cHead, cTalk, cPeople, cform, cTimeout;

    // Message Classes
    var classesMsgBase      = 'rounded font-w600 p-10 mb-10 animated fadeIn',
        classesMsgSelf      = 'ml-50 bg-primary-lighter text-primary-darker',
        classesMsgOther     = 'mr-50 bg-body-light',
        classesMsgHeader    = 'font-size-sm font-italic text-muted text-center mt-20 mb-10';

    // Init chat
    var initChat = function() {
        // Set variables
        lWindow    = jQuery(window);
        lHeader    = jQuery('#page-header');
        lFooter    = jQuery('#page-footer');
        cContainer = jQuery('.js-chat-container');
        cHeight    = cContainer.data('chat-height');
        cHead      = jQuery('.js-chat-head');
        cTalk      = jQuery('.js-chat-talk');
        cPeople    = jQuery('.js-chat-people');
        cform      = jQuery('.js-chat-form');

        // Chat height mode ('auto' for full height, number for specific height in pixels)
        switch (cHeight) {
            case 'auto':
                // Init chat windows' height to full available (also on browser resize or orientation change)
                jQuery(window).on('resize.cb.chat orientationchange.cb.chat', function(){
                    clearTimeout(cTimeout);

                    cTimeout = setTimeout(function(){
                        initChatWindows();
                    }, 150);
                }).triggerHandler('resize.cb.chat');
                break;
            default:
                // Init chat windows' height with a specific height
                initChatWindows(cHeight);
        }

        // Enable scroll lock to chat talk and people window
        cTalk.scrollLock('enable');

        if (cPeople.length) {
            cPeople.scrollLock('enable');
        }

        // Init form submission
        jQuery('form', cform).on('submit', function(e){
            // Stop form submission
            e.preventDefault();

            // Get chat input
            var chatInput  = jQuery('.js-chat-input', jQuery(this));

            // Add message
            chatAddMessage(chatInput.data('target-chat-id'), chatInput.val(), 'self', chatInput);
        });
    };

    // Init chat windows' height
    var initChatWindows = function(customHeight) {
        var cHeightFinal;

        // If height is specified
        if (customHeight) {
            cHeightFinal = parseInt(customHeight);
        } else {
            // Calculate height
            var cHeightFinal = lWindow.height() -
                    (lHeader.length ? lHeader.outerHeight() : 0) -
                    (lFooter.length ? lFooter.outerHeight() : 0) -
                    (parseInt(cContainer.css('padding-top')) + parseInt(cContainer.css('padding-bottom'))) -
                    cHead.outerHeight();
        }

        // Add a minimum height
        if (cHeightFinal < 200) {
            cHeightFinal = 200;
        }

        // Set height to chat windows (+ people window if exists)
        cTalk.css('height', cHeightFinal - cform.outerHeight());

        if (cPeople.length) {
            cPeople.css('height', cHeightFinal);
        }
    };

    // Add a header message to a chat window
    var chatAddHeader = function(chatId, chatMsg) {
        // Get chat window
        var chatWindow = jQuery('.js-chat-talk[data-chat-id="' + chatId + '"]');

        // If time header and chat window exists
        if (chatMsg && chatWindow.length) {
            chatWindow.append('<div class="' + classesMsgHeader + '">'
                    + jQuery('<div />').text(chatMsg).html()
                    + '</div>');

            // Scroll the message list to the bottom
            chatWindow.animate({ scrollTop: chatWindow[0].scrollHeight }, 150);
        }
    };

    // Add a message to a chat window
    var chatAddMessage = function(chatId, chatMsg, chatMsgLevel, chatInput) {
        // Get chat window
        var chatWindow = jQuery('.js-chat-talk[data-chat-id="' + chatId + '"]');

        // If message and chat window exists
        if (chatMsg && chatWindow.length) {
            // Post it to its related window (if message level is 'self', make it stand out)
            chatWindow.append('<div class="' + classesMsgBase + ' ' + ((chatMsgLevel === 'self') ? classesMsgSelf : classesMsgOther) + '">'
                    + jQuery('<div />').text(chatMsg).html()
                    + '</div>');

            // Scroll the message list to the bottom
            chatWindow.animate({ scrollTop: chatWindow[0].scrollHeight }, 150);

            // If input is set, reset it
            if (chatInput) {
                chatInput.val('');
            }
        }
    };

    return {
        init: function() {
            // Init chat
            initChat();
        },
        addHeader: function(chatId, chatMsg) {
            // Add time header
            chatAddHeader(chatId, chatMsg);
        },
        addMessage: function(chatId, chatMsg, chatMsgLevel) {
            // Add message
            chatAddMessage(chatId, chatMsg, chatMsgLevel, false);
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BeCompChat.init(); });