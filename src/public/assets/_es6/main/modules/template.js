/*
 *  Document   : template.js
 *  Author     : pixelcave
 *  Description: UI Framework custom functionality
 *
 */

// Import global dependencies
import './../bootstrap.js';

// Import required modules
import Tools from './tools';
import Helpers from './helpers';

// Template
export default class Template {
    /*
     * Auto called when creating a new instance
     *
     */
    constructor() {
        this._uiInit();
    }

    /*
     * Init all vital functionality
     *
     */
    _uiInit() {
        // Layout variables
        this._lHtml                 = jQuery('html');
        this._lBody                 = jQuery('body');
        this._lpageLoader           = jQuery('#page-loader');
        this._lPage                 = jQuery('#page-container');
        this._lSidebar              = jQuery('#sidebar');
        this._lSideOverlay          = jQuery('#side-overlay');
        this._lHeader               = jQuery('#page-header');
        this._lHeaderSearch         = jQuery('#page-header-search');
        this._lHeaderSearchInput    = jQuery('#page-header-search-input');
        this._lHeaderLoader         = jQuery('#page-header-loader');
        this._lMain                 = jQuery('#main-container');
        this._lFooter               = jQuery('#page-footer');

        // Helper variables
        this._lSidebarScroll        = false;
        this._lSideOverlayScroll    = false;
        this._windowW               = Tools.getWidth();

        // Base UI Init
        this._uiHandleScroll('init');
        this._uiHandleMain();
        this._uiHandleHeader();
        this._uiHandleNav();
        this._uiHandleForms();
        this._uiHandleTheme();

        // API Init
        this._uiApiLayout();
        this._uiApiBlocks();

        // Core Helpers Init
        this.helpers([
            'core-tooltip',
            'core-popover',
            'core-tab',
            'core-custom-file-input',
            'core-toggle-class',
            'core-scrollTo',
            'core-year-copy',
            'core-appear',
            'core-appear-countTo',
            'core-ripple'
        ]);

        // Page Loader (hide it)
        this._uiHandlePageLoader();
    }

    /*
     * Handles sidebar and side overlay scrolling functionality/styles
     *
     */
    _uiHandleScroll() {
        let self = this;

        // If .side-scroll is added to #page-container enable custom scrolling
        if (self._lPage.hasClass('side-scroll')) {
            // Init custom scrolling on Sidebar
            if ((self._lSidebar.length > 0) && !self._lSidebarScroll) {
                self._lSidebarScroll = new SimpleBar(self._lSidebar[0]);

                // Enable scrolling lock
                jQuery('.simplebar-scroll-content', self._lSidebar).scrollLock('enable');
            }

            // Init custom scrolling on Side Overlay
            if ((self._lSideOverlay.length > 0) && !self._lSideOverlayScroll) {
                self._lSideOverlayScroll = new SimpleBar(self._lSideOverlay[0]);

                // Enable scrolling lock
                jQuery('.simplebar-scroll-content', self._lSideOverlay).scrollLock('enable');
            }
        } else {
            // If custom scrolling exists on Sidebar remove it
            if (self._lSidebar && self._lSidebarScroll) {
                // Disable scrolling lock
                jQuery('.simplebar-scroll-content', self._lSidebar).scrollLock('disable');

                // Unmount Simplebar
                self._lSidebarScroll.unMount();
                self._lSidebarScroll = null;

                // Remove Simplebar leftovers
                self._lSidebar.removeAttr('data-simplebar')
                        .html(jQuery('.simplebar-content', self._lSidebar).html());
            }

            // If custom scrolling exists on Side Overlay remove it
            if (self._lSideOverlay && self._lSideOverlayScroll) {
                // Disable scrolling lock
                jQuery('.simplebar-scroll-content', self._lSideOverlay).scrollLock('disable');

                // Unmount Simplebar
                self._lSideOverlayScroll.unMount();
                self._lSideOverlayScroll = null;

                // Remove Simplebar leftovers
                self._lSideOverlay.removeAttr('data-simplebar')
                        .html(jQuery('.simplebar-content', self._lSideOverlay).html());
            }
        }
    }

    /*
     * Resizes #main-container to fill empty space if exists (pushes footer to the bottom) + Adds transition to sidebar (small fix for IE)
     *
     */
    _uiHandleMain() {
        let self = this;
        let resizeTimeout;

        // Unbind events in case they are already binded
        jQuery(window).off('resize.cb.main orientationchange.cb.main');

        // If #main-container element exists
        if (self._lMain.length) {
            jQuery(window).on('resize.cb.main orientationchange.cb.main', e => {
                clearTimeout(resizeTimeout);

                resizeTimeout = setTimeout(e => {
                    let hWindow = jQuery(window).height();
                    let hHeader = self._lHeader.outerHeight() || 0;
                    let hFooter = self._lFooter.outerHeight() || 0;

                    // Set #main-container min height accordingly
                    if (self._lPage.hasClass('page-header-fixed') || self._lPage.hasClass('page-header-glass')) {
                        self._lMain.css('min-height', hWindow - hFooter);
                    } else {
                        self._lMain.css('min-height', hWindow - hHeader - hFooter);
                    }

                    // Show footer's content
                    self._lFooter.fadeTo(1000, 1);
                }, 150);
            }).triggerHandler('resize.cb.main');
        }

        // Add 'side-trans-enabled' class to #page-container (enables sidebar and side overlay transition on open/close)
        // Fixes IE10, IE11 and Edge bug in which animation was executed on each page load - really annoying!
        self._lPage.addClass('side-trans-enabled');
    }

    /*
     * Handles header related classes
     *
     */
    _uiHandleHeader() {
        let self = this;

        // Unbind event in case it is already enabled
        jQuery(window).off('scroll.cb.header');

        // If the header is fixed and has the glass style, add the related class on scrolling to add a background color to the header
        if (self._lPage.hasClass('page-header-glass') && self._lPage.hasClass('page-header-fixed')) {
            jQuery(window).on('scroll.cb.header', e => {
                if (jQuery(e.currentTarget).scrollTop() > 60) {
                    self._lPage.addClass('page-header-scroll');
                } else {
                    self._lPage.removeClass('page-header-scroll');
                }
            }).trigger('scroll.cb.header');
        }
    }

    /*
     * Toggle Submenu functionality
     *
     */
    _uiHandleNav() {
        let self = this;

        // Unbind event in case it is already enabled
        self._lPage.off('click.cb.menu');

        // When a submenu link is clicked
        self._lPage.on('click.cb.menu', '[data-toggle="nav-submenu"]', e => {
            // Get link
            let link = jQuery(e.currentTarget);

            // Get link's parent
            let parentLi = link.parent('li');

            if (parentLi.hasClass('open')) { // If submenu is open, close it..
                parentLi.removeClass('open');
            } else { // .. else if submenu is closed, close all other (same level) submenus first before open it
                link.closest('ul').children('li').removeClass('open');
                parentLi.addClass('open');
            }

            // Remove focus from submenu link
            if (self._lHtml.hasClass('no-focus')) {
                link.blur();
            }

            return false;
        });
    }

    /*
     * Page loading screen functionality
     *
     */
    _uiHandlePageLoader(mode = 'hide', colorClass) {
        if (mode === 'show') {
            if (this._lpageLoader.length) {
                if (colorClass) {
                    this._lpageLoader.removeClass().addClass(colorClass);
                }

                this._lpageLoader.addClass('show');
            } else {
                this._lBody.prepend(`<div id="page-loader" class="show${colorClass ? ' ' + colorClass : ''}"></div>`);
            }
        } else if (mode === 'hide') {
            if (this._lpageLoader.length) {
                this._lpageLoader.removeClass('show');
            }
        }
    }

    /*
     * Material form inputs functionality
     *
     */
    _uiHandleForms() {
        jQuery('.form-material.floating > .form-control').each((index, element) => {
            let input  = jQuery(element);
            let parent = input.parent('.form-material');

            setTimeout(e => {
                if (input.val() ) {
                    parent.addClass('open');
                }
            }, 150);

            input.off('change.cb.inputs').on('change.cb.inputs', e => {
                if (input.val()) {
                    parent.addClass('open');
                } else {
                    parent.removeClass('open');
                }
            });
        });
    }

    /*
     * Set active color theme functionality
     *
     */
    _uiHandleTheme() {
        let themeEl = jQuery('#css-theme');
        let cookies = this._lPage.hasClass('enable-cookies') ? true : false;

        // If cookies are enabled
        if (cookies) {
            let themeName  = Cookies.get('cbThemeName') || false;

            // Update color theme
            if (themeName) {
                Tools.updateTheme(themeEl, themeName);
            }

            // Update theme element
            themeEl = jQuery('#css-theme');
        }

        // Set the active color theme link as active
        jQuery('[data-toggle="theme"][data-theme="' + (themeEl.length ? themeEl.attr('href') : 'default') + '"]').parent('li').addClass('active');

        // Unbind event in case it is already enabled
        this._lPage.off('click.cb.themes');

        // When a color theme link is clicked
        this._lPage.on('click.cb.themes', '[data-toggle="theme"]', e => {
            e.preventDefault();

            // Get element and data
            let el = jQuery(e.currentTarget);
            let themeName = el.data('theme');

            // Set this color theme link as active
            jQuery('[data-toggle="theme"]').parent('li').removeClass('active');
            jQuery('[data-toggle="theme"][data-theme="' + themeName + '"]').parent('li').addClass('active');

            // Update color theme
            Tools.updateTheme(themeEl, themeName);

            // Update theme element
            themeEl = jQuery('#css-theme');

            // If cookies are enabled, save the new active color theme
            if (cookies) {
                Cookies.set('cbThemeName', themeName, { expires: 7 });
            }

            // Blur the link/button
            el.blur();
        });
    }

    /*
     * Layout API
     *
     */
    _uiApiLayout(mode = 'init') {
        let self = this;

        // Get current window width
        self._windowW = Tools.getWidth();

        // API with object literals
        let layoutAPI = {
            init: () => {
                // Unbind events in case they are already enabled
                self._lPage.off('click.cb.layout');
                self._lPage.off('click.cb.overlay');

                // Call layout API on button click
                self._lPage.on('click.cb.layout', '[data-toggle="layout"]', e => {
                    let el = jQuery(e.currentTarget);

                    self._uiApiLayout(el.data('action'));

                    el.blur();
                });

                // Prepend Page Overlay div if enabled (used when Side Overlay opens)
                if (self._lPage.hasClass('enable-page-overlay')) {
                    self._lPage.prepend('<div id="page-overlay"></div>');

                    jQuery('#page-overlay').on('click.cb.overlay', e => {
                        self._uiApiLayout('side_overlay_close');
                    });
                }
            },
            sidebar_pos_toggle: () => {
                self._lPage.toggleClass('sidebar-r');
            },
            sidebar_pos_left: () => {
                self._lPage.removeClass('sidebar-r');
            },
            sidebar_pos_right: () => {
                self._lPage.addClass('sidebar-r');
            },
            sidebar_toggle: () => {
                if (self._windowW > 991) {
                    self._lPage.toggleClass('sidebar-o');
                } else {
                    self._lPage.toggleClass('sidebar-o-xs');
                }
            },
            sidebar_open: () => {
                if (self._windowW > 991) {
                    self._lPage.addClass('sidebar-o');
                } else {
                    self._lPage.addClass('sidebar-o-xs');
                }
            },
            sidebar_close: () => {
                if (self._windowW > 991) {
                    self._lPage.removeClass('sidebar-o');
                } else {
                    self._lPage.removeClass('sidebar-o-xs');
                }
            },
            sidebar_mini_toggle: () => {
                if (self._windowW > 991) {
                    self._lPage.toggleClass('sidebar-mini');
                }
            },
            sidebar_mini_on: () => {
                if (self._windowW > 991) {
                    self._lPage.addClass('sidebar-mini');
                }
            },
            sidebar_mini_off: () => {
                if (self._windowW > 991) {
                    self._lPage.removeClass('sidebar-mini');
                }
            },
            sidebar_style_inverse_toggle: () => {
                self._lPage.toggleClass('sidebar-inverse');
            },
            sidebar_style_inverse_on: () => {
                self._lPage.addClass('sidebar-inverse');
            },
            sidebar_style_inverse_off: () => {
                self._lPage.removeClass('sidebar-inverse');
            },
            side_overlay_toggle: () => {
                if (self._lPage.hasClass('side-overlay-o')) {
                    self._uiApiLayout('side_overlay_close');
                } else {
                    self._uiApiLayout('side_overlay_open');
                }
            },
            side_overlay_open: () => {
                self._lPage.addClass('side-overlay-o');

                // When ESCAPE key is hit close the side overlay
                jQuery(document).on('keydown.cb.sideOverlay', e => {
                    if (e.which === 27) {
                        e.preventDefault();
                        self._uiApiLayout('side_overlay_close');
                    }
                });
            },
            side_overlay_close: () => {
                self._lPage.removeClass('side-overlay-o');

                // Unbind ESCAPE key
                jQuery(document).off('keydown.cb.sideOverlay');
            },
            side_overlay_hoverable_toggle: () => {
                self._lPage.toggleClass('side-overlay-hover');
            },
            side_overlay_hoverable_on: () => {
                self._lPage.addClass('side-overlay-hover');
            },
            side_overlay_hoverable_off: () => {
                self._lPage.removeClass('side-overlay-hover');
            },
            header_fixed_toggle: () => {
                self._lPage.toggleClass('page-header-fixed');
                self._uiHandleHeader();
                self._uiHandleMain();
            },
            header_fixed_on: () => {
                self._lPage.addClass('page-header-fixed');
                self._uiHandleHeader();
                self._uiHandleMain();
            },
            header_fixed_off: () => {
                self._lPage.removeClass('page-header-fixed');
                self._uiHandleHeader();
                self._uiHandleMain();
            },
            header_style_modern: () => {
                self._lPage.removeClass('page-header-glass page-header-inverse').addClass('page-header-modern');
                self._uiHandleHeader();
                self._uiHandleMain();
            },
            header_style_classic: () => {
                self._lPage.removeClass('page-header-glass page-header-modern');
                self._uiHandleHeader();
                self._uiHandleMain();
            },
            header_style_glass: () => {
                self._lPage.removeClass('page-header-modern').addClass('page-header-glass');
                self._uiHandleHeader();
                self._uiHandleMain();
            },
            header_style_inverse_toggle: () => {
                if (!self._lPage.hasClass('page-header-modern')) {
                    self._lPage.toggleClass('page-header-inverse');
                }
            },
            header_style_inverse_on: () => {
                if (!self._lPage.hasClass('page-header-modern')) {
                    self._lPage.addClass('page-header-inverse');
                }
            },
            header_style_inverse_off: () => {
                if (!self._lPage.hasClass('page-header-modern')) {
                    self._lPage.removeClass('page-header-inverse');
                }
            },
            header_search_on: () => {
                self._lHeaderSearch.addClass('show');
                self._lHeaderSearchInput.focus();

                // When ESCAPE key is hit close the search section
                jQuery(document).on('keydown.cb.header.search', e => {
                    if (e.which === 27) {
                        e.preventDefault();
                        self._uiApiLayout('header_search_off');
                    }
                });
            },
            header_search_off: () => {
                self._lHeaderSearch.removeClass('show');
                self._lHeaderSearchInput.blur();

                // Unbind ESCAPE key
                jQuery(document).off('keydown.cb.header.search');
            },
            header_loader_on: () => {
                self._lHeaderLoader.addClass('show');
            },
            header_loader_off: () => {
                self._lHeaderLoader.removeClass('show');
            },
            side_scroll_toggle: () => {
                self._lPage.toggleClass('side-scroll');
                self._uiHandleScroll();
            },
            side_scroll_on: () => {
                self._lPage.addClass('side-scroll');
                self._uiHandleScroll();
            },
            side_scroll_off: () => {
                self._lPage.removeClass('side-scroll');
                self._uiHandleScroll();
            },
            content_layout_toggle: () => {
                if (self._lPage.hasClass('main-content-boxed')) {
                    self._uiApiLayout('content_layout_narrow');
                } else if (self._lPage.hasClass('main-content-narrow')) {
                    self._uiApiLayout('content_layout_full_width');
                } else {
                    self._uiApiLayout('content_layout_boxed');
                }
            },
            content_layout_boxed: () => {
                self._lPage.removeClass('main-content-narrow').addClass('main-content-boxed');
            },
            content_layout_narrow: () => {
                self._lPage.removeClass('main-content-boxed').addClass('main-content-narrow');
            },
            content_layout_full_width: () => {
                self._lPage.removeClass('main-content-boxed main-content-narrow');
            }
        };

        // Call layout API
        if (layoutAPI[mode]) {
            layoutAPI[mode]();
        }
    }

    /*
     * Blocks API
     *
     */
    _uiApiBlocks(block = false, mode = 'init') {
        let self = this;

        // Helper variables
        let elBlock, btnFullscreen, btnContentToggle;

        // Set default icons for fullscreen and content toggle buttons
        let iconFullscreen         = 'si si-size-fullscreen';
        let iconFullscreenActive   = 'si si-size-actual';
        let iconContent            = 'si si-arrow-up';
        let iconContentActive      = 'si si-arrow-down';

        // API with object literals
        let blockAPI = {
            init: () => {
                // Auto add the default toggle icons to fullscreen and content toggle buttons
                jQuery('[data-toggle="block-option"][data-action="fullscreen_toggle"]').each((index, element) => {
                    let el = jQuery(element);

                    el.html('<i class="' + (jQuery(el).closest('.block').hasClass('block-mode-fullscreen') ? iconFullscreenActive : iconFullscreen) + '"></i>');
                });

                jQuery('[data-toggle="block-option"][data-action="content_toggle"]').each((index, element) => {
                    let el = jQuery(element);

                    el.html('<i class="' + (el.closest('.block').hasClass('block-mode-hidden') ? iconContentActive : iconContent) + '"></i>');
                });

                // Unbind event in case it is already enabled
                self._lPage.off('click.cb.blocks');

                // Call blocks API on option button click
                self._lPage.on('click.cb.blocks', '[data-toggle="block-option"]', e => {
                    this._uiApiBlocks(jQuery(e.currentTarget).closest('.block'), jQuery(e.currentTarget).data('action'));
                });
            },
            fullscreen_toggle: () => {
                elBlock.removeClass('block-mode-pinned').toggleClass('block-mode-fullscreen');

                // Enable/disable scroll lock to block
                if (elBlock.hasClass('block-mode-fullscreen')) {
                    jQuery(elBlock).scrollLock('enable');
                } else {
                    jQuery(elBlock).scrollLock('disable');
                }

                // Update block option icon
                if (btnFullscreen.length) {
                    if (elBlock.hasClass('block-mode-fullscreen')) {
                        jQuery('i', btnFullscreen)
                            .removeClass(iconFullscreen)
                            .addClass(iconFullscreenActive);
                    } else {
                        jQuery('i', btnFullscreen)
                            .removeClass(iconFullscreenActive)
                            .addClass(iconFullscreen);
                    }
                }
            },
            fullscreen_on: () => {
                elBlock.removeClass('block-mode-pinned').addClass('block-mode-fullscreen');

                // Enable scroll lock to block
                jQuery(elBlock).scrollLock('enable');

                // Update block option icon
                if (btnFullscreen.length) {
                    jQuery('i', btnFullscreen)
                        .removeClass(iconFullscreen)
                        .addClass(iconFullscreenActive);
                }
            },
            fullscreen_off: () => {
                elBlock.removeClass('block-mode-fullscreen');

                // Disable scroll lock to block
                jQuery(elBlock).scrollLock('disable');

                // Update block option icon
                if (btnFullscreen.length) {
                    jQuery('i', btnFullscreen)
                        .removeClass(iconFullscreenActive)
                        .addClass(iconFullscreen);
                }
            },
            content_toggle: () => {
                elBlock.toggleClass('block-mode-hidden');

                // Update block option icon
                if (btnContentToggle.length) {
                    if (elBlock.hasClass('block-mode-hidden')) {
                        jQuery('i', btnContentToggle)
                            .removeClass(iconContent)
                            .addClass(iconContentActive);
                    } else {
                        jQuery('i', btnContentToggle)
                            .removeClass(iconContentActive)
                            .addClass(iconContent);
                    }
                }
            },
            content_hide: () => {
                elBlock.addClass('block-mode-hidden');

                // Update block option icon
                if (btnContentToggle.length) {
                    jQuery('i', btnContentToggle)
                        .removeClass(iconContent)
                        .addClass(iconContentActive);
                }
            },
            content_show: () => {
                elBlock.removeClass('block-mode-hidden');

                // Update block option icon
                if (btnContentToggle.length) {
                    jQuery('i', btnContentToggle)
                        .removeClass(iconContentActive)
                        .addClass(iconContent);
                }
            },
            state_toggle: () => {
                elBlock.toggleClass('block-mode-loading');

                // Return block to normal state if the demostration mode is on in the refresh option button - data-action-mode="demo"
                if (jQuery('[data-toggle="block-option"][data-action="state_toggle"][data-action-mode="demo"]', elBlock).length) {
                    setTimeout(() => {
                        elBlock.removeClass('block-mode-loading');
                    }, 2000);
                }
            },
            state_loading: () => {
                elBlock.addClass('block-mode-loading');
            },
            state_normal: () => {
                elBlock.removeClass('block-mode-loading');
            },
            pinned_toggle: () => {
                elBlock.removeClass('block-mode-fullscreen').toggleClass('block-mode-pinned');
            },
            pinned_on: () => {
                elBlock.removeClass('block-mode-fullscreen').addClass('block-mode-pinned');
            },
            pinned_off: () => {
                elBlock.removeClass('block-mode-pinned');
            },
            close: () => {
                elBlock.addClass('d-none');
            },
            open: () => {
                elBlock.removeClass('d-none');
            }
        };

        if (mode === 'init') {
            // Call Block API
            blockAPI[mode]();
        } else {
            // Get block element
            elBlock = (block instanceof jQuery) ? block : jQuery(block);

            // If element exists, procceed with block functionality
            if (elBlock.length) {
                // Get block option buttons if exist (need them to update their icons)
                btnFullscreen       = jQuery('[data-toggle="block-option"][data-action="fullscreen_toggle"]', elBlock);
                btnContentToggle    = jQuery('[data-toggle="block-option"][data-action="content_toggle"]', elBlock);

                // Call Block API
                if (blockAPI[mode]) {
                    blockAPI[mode]();
                }
            }
        }
    }

    /*
     ********************************************************************************************
     *
     * Create aliases for easier/quicker access to vital methods
     *
     *********************************************************************************************
     */

    /*
     * Init base functionality
     *
     */
    init() {
        this._uiInit();
    }

    /*
     * Layout API
     *
     */
    layout(mode) {
        this._uiApiLayout(mode);
    }

    /*
     * Blocks API
     *
     */
    blocks(block, mode) {
        this._uiApiBlocks(block, mode);
    }

    /*
     * Handle Page Loader
     *
     */
    loader(mode, colorClass) {
        this._uiHandlePageLoader(mode, colorClass);
    }

    /*
     * Run Helpers
     *
     */
    helpers(helpers, options = {}) {
        Helpers.run(helpers, options);
    }

    helper(helper, options = {}) {
        Helpers.run(helper, options);
    }
}
