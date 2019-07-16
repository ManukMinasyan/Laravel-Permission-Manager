/*
 *  Document   : helpers.js
 *  Author     : pixelcave
 *  Description: Various jQuery plugins inits as well as custom helpers
 *
 */

// Import global dependencies
import './../bootstrap.js';

// Import required modules
import Tools from './tools';

// Helpers
export default class Helpers {
    /*
     * Run helpers
     *
     */
    static run(helpers, options = {}) {
        let helperList = {
            'core-tooltip': () => this.coreBootstrapTooltip(),
            'core-popover': () => this.coreBootstrapPopover(),
            'core-tab': () => this.coreBootstrapTabs(),
            'core-custom-file-input': () => this.coreBootstrapCustomFileInput(),
            'core-toggle-class': () => this.coreToggleClass(),
            'core-scrollTo': () => this.coreScrollTo(),
            'core-year-copy': () => this.coreYearCopy(),
            'core-appear': () => this.coreAppear(),
            'core-appear-countTo': () => this.coreAppearCountTo(),
            'core-ripple': () => this.coreRipple(),
            'print-page': () => this.print(),
            'table-tools': () => {
                this.tableToolsSections();
                this.tableToolsCheckable();
            },
            'content-filter': () => this.contentFilter(),
            slimscroll: () => this.slimscroll(),
            'magnific-popup': () => this.magnific(),
            summernote: () => this.summernote(),
            ckeditor: () => this.ckeditor(),
            simplemde: () => this.simpleMDE(),
            slick: () => this.slick(),
            datepicker: () => this.datepicker(),
            colorpicker: () => this.colorpicker(),
            'tags-inputs': () => this.tagsInputs(),
            'masked-inputs': () => this.maskedInputs(),
            select2: () => this.select2(),
            highlightjs: () => this.highlightjs(),
            notify: (options) => this.notify(options),
            'draggable-items': () => this.draggableItems(),
            'easy-pie-chart': () => this.easyPieChart(),
            maxlength: () => this.maxlength(),
            rangeslider: () => this.rangeslider()
        };

        if (helpers instanceof Array) {
            for (let index in helpers) {
                if (helperList[helpers[index]]) {
                    helperList[helpers[index]](options);
                }
            }
        } else {
            if (helperList[helpers]) {
                helperList[helpers](options);
            }
        }
    }

    /*
     ********************************************************************************************
     *
     * CORE HELPERS
     *
     * Third party plugin inits or various custom user interface helpers to extend functionality
     * They are called by default and can be used right away
     *
     *********************************************************************************************
     */

    /*
     * Bootstrap Tooltip, for more examples you can check out https://getbootstrap.com/docs/4.1/components/tooltips/
     *
     * Helpers.run('core-tooltip');
     *
     * Example usage:
     *
     * <button type="button" class="btn btn-primary" data-toggle="tooltip" title="Tooltip Text">Example</button> or
     * <button type="button" class="btn btn-primary js-tooltip" title="Tooltip Text">Example</button>
     *
     */
    static coreBootstrapTooltip() {
        jQuery('[data-toggle="tooltip"]:not(.js-tooltip-enabled)').add('.js-tooltip:not(.js-tooltip-enabled)').each((index, element) => {
            let el = jQuery(element);

            // Add .js-tooltip-enabled class to tag it as activated and init it
            el.addClass('js-tooltip-enabled').tooltip({
                container: el.data('container') || 'body',
                animation: el.data('animation') || false
            });
        });
    }

    /*
     * Bootstrap Popover, for more examples you can check out https://getbootstrap.com/docs/4.1/components/popovers/
     *
     * Helpers.run('core-popover');
     *
     * Example usage:
     *
     * <button type="button" class="btn btn-primary" data-toggle="popover" title="Popover Title" data-content="This is the content of the Popover">Example</button> or
     * <button type="button" class="btn btn-primary js-popover" title="Popover Title" data-content="This is the content of the Popover">Example</button>
     *
     */
    static coreBootstrapPopover() {
        jQuery('[data-toggle="popover"]:not(.js-popover-enabled)').add('.js-popover:not(.js-popover-enabled)').each((index, element) => {
            let el = jQuery(element);

            // Add .js-popover-enabled class to tag it as activated and init it
            el.addClass('js-popover-enabled').popover({
                container: el.data('container') || 'body',
                animation: el.data('animation') || false,
                trigger: el.data('trigger') || 'hover focus'
            });
        });
    }

    /*
     * Bootstrap Tab, for examples you can check out http://getbootstrap.com/docs/4.1/components/navs/#tabs
     *
     * Helpers.run('core-tab');
     *
     * Example usage:
     *
     * Please check out the Tabs page for complete markup examples
     *
     */
    static coreBootstrapTabs() {
        jQuery('[data-toggle="tabs"]:not(.js-tabs-enabled)').add('.js-tabs:not(.js-tabs-enabled)').each((index, element) => {
            // Add .js-tabs-enabled class to tag it as activated and init it
            jQuery(element).addClass('js-tabs-enabled').find('a').on('click.cb.helpers.core', e => {
                e.preventDefault();
                jQuery(e.currentTarget).tab('show');
            });
        });
    }

    /*
     * Bootstrap Custom File Input Filename
     *
     * Helpers.run('core-custom-file-input');
     *
     * Example usage:
     *
     * Please check out the Tabs page for complete markup examples
     *
     */
    static coreBootstrapCustomFileInput() {
        // Populate custom Bootstrap file inputs with selected filename
        jQuery('[data-toggle="custom-file-input"]:not(.js-custom-file-input-enabled)').each((index, element) => {
            let el = jQuery(element);

            // Add .js-custom-file-input-enabled class to tag it as activated
            el.addClass('js-custom-file-input-enabled').on('change', e => {
                let fileName = (e.target.files.length > 1) ? e.target.files.length + ' ' + (el.data('lang-files') || 'Files') : e.target.files[0].name;

                el.next('.custom-file-label').css('overflow-x', 'hidden').html(fileName);
            });
        });
    }

    /*
     * Toggle class on element click
     *
     * Helpers.run('core-toggle-class');
     *
     * Example usage (on button click, "exampleClass" class is toggled on the element with id "elementID"):
     *
     * <button type="button" class="btn btn-primary" data-toggle="class-toggle" data-target="#elementID" data-class="exampleClass">Toggle</button>
     *
     * or
     *
     * <button type="button" class="btn btn-primary js-class-toggle" data-target="#elementID" data-class="exampleClass">Toggle</button>
     *
     */
    static coreToggleClass() {
        jQuery('[data-toggle="class-toggle"]:not(.js-class-toggle-enabled)')
                .add('.js-class-toggle:not(.js-class-toggle-enabled)')
                .on('click.cb.helpers.core', e => {
            let el = jQuery(e.currentTarget);

            // Add .js-class-toggle-enabled class to tag it as activated and then blur it
            el.addClass('js-class-toggle-enabled').blur();

            // Toggle class
            jQuery(el.data('target').toString()).toggleClass(el.data('class').toString());
        });
    }

    /*
     * Scroll to element with animation
     *
     * Helpers.run('core-scrollTo');
     *
     * Example usage (on click, the page will scroll to element with id "elementID" in "500" ms):
     *
     * <a href="#elementID" data-toggle="scroll-to" data-speed="500">Go</a> or
     * <button type="button" class="btn btn-primary" data-toggle="scroll-to" data-speed="500" data-target="#elementID">Go</button>
     *
     */
    static coreScrollTo() {
        jQuery('[data-toggle="scroll-to"]:not(.js-scroll-to-enabled)').on('click.cb.helpers.core', e => {
            e.stopPropagation();

            // Set variables
            let lHeader         = jQuery('#page-header');
            let el              = jQuery(e.currentTarget);
            let elTarget        = el.data('target') || el.attr('href');
            let elSpeed         = el.data('speed') || 1000;
            let headerHeight    = (lHeader.length && jQuery('#page-container').hasClass('page-header-fixed')) ? lHeader.outerHeight() : 0;

            // Add .js-scroll-to-enabled class to tag it as activated
            el.addClass('js-scroll-to-enabled');

            // Scroll to element
            jQuery('html, body').animate({
                scrollTop: jQuery(elTarget).offset().top - headerHeight
            }, elSpeed);
        });
    }

    /*
     * Add the correct copyright year to an element
     *
     * Helpers.run('core-year-copy');
     *
     * Example usage (it will get populated with current year if empty or will append it to specified year if needed):
     *
     * <span class="js-year-copy"></span> or
     * <span class="js-year-copy">2018</span>
     *
     */
    static coreYearCopy() {
        let el = jQuery('.js-year-copy:not(.js-year-copy-enabled)');

        if (el.length > 0) {
            let date        = new Date();
            let curYear     = date.getFullYear();
            let baseYear    = (el.html().length > 0) ? el.html() : curYear;

            // Add .js-scroll-to-enabled class to tag it as activated and set the correct year
            el.addClass('js-year-copy-enabled').html(
                (parseInt(baseYear) >= curYear) ? curYear : baseYear + '-' + curYear.toString().substr(2, 2)
            );
        }
    }

    /*
     * jQuery Appear, for more examples you can check out https://github.com/bas2k/jquery.appear
     *
     * Helpers.run('core-appear');
     *
     * Example usage (the following div will appear on scrolling, remember to add the invisible class):
     *
     * <div class="invisible" data-toggle="appear">...</div>
     *
     */
    static coreAppear() {
        // Add a specific class on elements (when they become visible on scrolling)
        jQuery('[data-toggle="appear"]:not(.js-appear-enabled)').each((index, element) => {
            let windowW     = Tools.getWidth();
            let el          = jQuery(element);
            let elCssClass  = el.data('class') || 'animated fadeIn';
            let elOffset    = el.data('offset') || 0;
            let elTimeout   = (windowW < 992) ? 0 : (el.data('timeout') ? el.data('timeout') : 0);

            // Add .js-appear-enabled class to tag it as activated and init it
            el.addClass('js-appear-enabled').appear(() => {
                setTimeout(() => {
                    el.removeClass('invisible').addClass(elCssClass);
                }, elTimeout);
            }, {accY: elOffset});
        });
    }

    /*
     * jQuery Appear and CountTo, for more examples you can check out https://github.com/bas2k/jquery.appear and https://github.com/mhuggins/jquery-countTo
     *
     * Helpers.run('core-appear-countTo');
     *
     * Example usage (the following div will appear on scrolling and count to the specified number):
     *
     * <div data-toggle="countTo" data-to="1000">0</div>
     *
     */
    static coreAppearCountTo() {
        // Init counter functionality
        jQuery('[data-toggle="countTo"]:not(.js-count-to-enabled)').each((index, element) => {
            let el         = jQuery(element);
            let elAfter    = el.data('after');
            let elBefore   = el.data('before');

            // Add .js-count-to-enabled class to tag it as activated and init it
            el.addClass('js-count-to-enabled').appear(() => {
                el.countTo({
                    speed: el.data('speed') || 1500,
                    refreshInterval: el.data('refresh-interval') || 15,
                    onComplete: () => {
                        if(elAfter) {
                            el.html(el.html() + elAfter);
                        } else if (elBefore) {
                            el.html(elBefore + el.html());
                        }
                    }
                });
            });
        });
    }

    /*
     * Ripple effect fuctionality
     *
     * Helpers.run('core-ripple');
     *
     * Example usage:
     *
     * <button type="button" class="btn btn-primary" data-toggle="click-ripple">Click Me!</button>
     *
     */
    static coreRipple() {
        jQuery('[data-toggle="click-ripple"]:not(.js-click-ripple-enabled)').each((index, element) => {
            let el = jQuery(element);

            // Add .js-click-ripple-enabled class to tag it as activated and init it
            el.addClass('js-click-ripple-enabled')
                .css({
                    overflow: 'hidden',
                    position: 'relative',
                    'z-index': 1
                }).on('click.cb.helpers.core', e => {
                    let cssClass = 'click-ripple', ripple, d, x, y;

                    // If the ripple element doesn't exist in this element, add it..
                    if (el.children('.' + cssClass).length === 0) {
                        el.prepend('<span class="' + cssClass + '"></span>');
                    }
                    else { // ..else remove .animate class from ripple element
                        el.children('.' + cssClass).removeClass('animate');
                    }

                    // Get the ripple element
                    ripple = el.children('.' + cssClass);

                    // If the ripple element doesn't have dimensions, set them accordingly
                    if(!ripple.height() && !ripple.width()) {
                        d = Math.max(el.outerWidth(), el.outerHeight());
                        ripple.css({height: d, width: d});
                    }

                    // Get coordinates for our ripple element
                    x = e.pageX - el.offset().left - ripple.width()/2;
                    y = e.pageY - el.offset().top - ripple.height()/2;

                    // Position the ripple element and add the class .animate to it
                    ripple.css({top: y + 'px', left: x + 'px'}).addClass('animate');
                });
        });
    }

    /*
     ********************************************************************************************
     *
     * UI HELPERS (ON DEMAND)
     *
     * Third party plugin inits or various custom user interface helpers to extend functionality
     * They need to be called in a page to be initialized. They are included to be easy to
     * init them on demand on multiple pages (usually repeated init code in common components)
     *
     ********************************************************************************************
     */

     /*
      * Print Page functionality
      *
      * Helpers.run('print-page');
      *
      */
    static print() {
        // Store all #page-container classes
        let lPage = jQuery('#page-container');
        let pageCls = lPage.prop('class');

        // Remove all classes from #page-container
        lPage.prop('class', '');

        // Print the page
        window.print();

        // Restore all #page-container classes
        lPage.prop('class', pageCls);
    }

    /*
     * Table sections functionality
     *
     * Helpers.run('table-tools');
     *
     * Example usage:
     *
     * Please check out the Table Helpers page for complete markup examples
     *
     */
    static tableToolsSections() {
        // For each table
        jQuery('.js-table-sections:not(.js-table-sections-enabled)').each((index, element) => {
            let table = jQuery(element);

            // Add .js-table-sections-enabled class to tag it as activated
            table.addClass('js-table-sections-enabled');

            // When a row is clicked in tbody.js-table-sections-header
            jQuery('.js-table-sections-header > tr', table).on('click.cb.helpers', e => {
                if (e.target.type !== 'checkbox'
                        && e.target.type !== 'button'
                        && e.target.tagName.toLowerCase() !== 'a'
                        && !jQuery(e.target).parent('a').length
                        && !jQuery(e.target).parent('button').length
                        && !jQuery(e.target).parent('.custom-control').length
                        && !jQuery(e.target).parent('label').length) {
                    let row    = jQuery(e.currentTarget);
                    let tbody  = row.parent('tbody');

                    if (!tbody.hasClass('show')) {
                        jQuery('tbody', table).removeClass('show table-active');
                    }

                    tbody.toggleClass('show table-active');
                }
            });
        });
    }

    /*
     * Checkable table functionality
     *
     * Helpers.run('table-tools');
     *
     * Example usage:
     *
     * Please check out the Table Helpers page for complete markup examples
     *
     */
    static tableToolsCheckable() {
        // For each table
        jQuery('.js-table-checkable:not(.js-table-checkable-enabled)').each((index, element) => {
            let table = jQuery(element);

            // Add .js-table-checkable-enabled class to tag it as activated
            table.addClass('js-table-checkable-enabled');

            // When a checkbox is clicked in thead
            jQuery('thead input:checkbox', table).on('click.cb.helpers', e => {
                let checkedStatus = jQuery(e.currentTarget).prop('checked');

                // Check or uncheck all checkboxes in tbody
                jQuery('tbody input:checkbox', table).each((index, element) => {
                    let checkbox = jQuery(element);

                    checkbox.prop('checked', checkedStatus).change();
                    this.tableToolscheckRow(checkbox, checkedStatus);
                });
            });

            // When a checkbox is clicked in tbody
            jQuery('tbody input:checkbox, tbody input + label', table).on('click.cb.helpers', e => {
                let checkbox = jQuery(e.currentTarget);
                let checkedStatus  = checkbox.prop('checked');

                if (!checkedStatus) {
                    jQuery('thead input:checkbox', table).prop('checked', false);
                } else {
                    if (jQuery('tbody input:checkbox:checked', table).length === jQuery('tbody input:checkbox', table).length) {
                        jQuery('thead input:checkbox', table).prop('checked', true);
                    }
                }

                this.tableToolscheckRow(checkbox, checkbox.prop('checked'));
            });

            // When a row is clicked in tbody
            jQuery('tbody > tr', table).on('click.cb.helpers', e => {
                if (e.target.type !== 'checkbox'
                        && e.target.type !== 'button'
                        && e.target.tagName.toLowerCase() !== 'a'
                        && !jQuery(e.target).parent('a').length
                        && !jQuery(e.target).parent('button').length
                        && !jQuery(e.target).parent('.custom-control').length
                        && !jQuery(e.target).parent('label').length) {
                    let checkbox       = jQuery('input:checkbox', e.currentTarget);
                    let checkedStatus  = checkbox.prop('checked');

                    checkbox.prop('checked', !checkedStatus).change();
                    this.tableToolscheckRow(checkbox, !checkedStatus);

                    if (checkedStatus) {
                        jQuery('thead input:checkbox', table).prop('checked', false);
                    } else {
                        if (jQuery('tbody input:checkbox:checked', table).length === jQuery('tbody input:checkbox', table).length) {
                            jQuery('thead input:checkbox', table).prop('checked', true);
                        }
                    }
                }
            });
        });
    }

    // Checkable table functionality helper - Checks or unchecks table row
    static tableToolscheckRow(checkbox, checkedStatus) {
        if (checkedStatus) {
            checkbox.closest('tr').addClass('table-active');
        } else {
            checkbox.closest('tr').removeClass('table-active');
        }
    }

    /*
     * Content filtering functionality
     *
     * Helpers.run('content-filter');
     *
     * Example usage:
     *
     * Please check out the Filtering page in Components for complete markup examples
     *
     */
    static contentFilter() {
        // Content Filtering init (with .js-filter class)
        jQuery('.js-filter:not(.js-filter-enabled)').each((index, element) => {
            let el          = jQuery(element);
            let filterNav   = jQuery('.nav-pills', el);
            let filterLinks = jQuery('a[data-category-link]', el);
            let filterItems = jQuery('[data-category]', el);
            let filterSpeed = el.data('speed') || 200;

            // Add .js-filter-enabled class to tag it as activated
            el.addClass('js-filter-enabled');

            // If navigation pills are used, make them responsive (stacked on smaller screens)
            if (filterNav.length) {
                let resizeTimeout, windowW;

                jQuery(window).on('resize.cb.helpers', () => {
                    clearTimeout(resizeTimeout);

                    resizeTimeout = setTimeout(() => {
                        windowW = Tools.getWidth();

                        if (windowW < 768) {
                            filterNav.addClass('flex-column');
                        } else {
                            filterNav.removeClass('flex-column');
                        }
                    }, 150);
                }).trigger('resize.cb.helpers');
            }

            // Add number of items to the links if enabled by adding data-numbers="true" to the main element
            if (el.data('numbers')) {
                filterLinks.each((index, element) => {
                    let filterLink  = jQuery(element);
                    let filterCat   = filterLink.data('category-link');

                    // Add number of items to this category link
                    if (filterCat === 'all') {
                        filterLink.append(' (' + filterItems.length + ')');
                    } else {
                        filterLink.append(' (' + filterItems.filter('[data-category="' + filterCat + '"]').length + ')');
                    }
                });
            }

            // When a filter link is clicked
            filterLinks.on('click.cb.helpers', e => {
                let filterLink = jQuery(e.currentTarget);
                let filterCat;

                // Procceed only if the user clicked on an inactive category
                if (!filterLink.hasClass('active')) {
                    // Remove active class from all filter links
                    filterLinks.removeClass('active');

                    // Add the active class to the clicked link
                    filterLink.addClass('active');

                    // Get its data-category value
                    filterCat = filterLink.data('category-link');

                    // If the value is 'all' hide current visible items and show them all together, else hide them all and show only from the category we need
                    if (filterCat === 'all') {
                        if (filterItems.filter(':visible').length) {
                            filterItems.filter(':visible').fadeOut(filterSpeed, () => {
                                filterItems.fadeIn(filterSpeed);
                            });
                        } else {
                            filterItems.fadeIn(filterSpeed);
                        }
                    } else {
                        if (filterItems.filter(':visible').length) {
                            filterItems.filter(':visible').fadeOut(filterSpeed, () => {
                                filterItems .filter('[data-category="' + filterCat + '"]') .fadeIn(filterSpeed);
                            });
                        } else {
                            filterItems.filter('[data-category="' + filterCat + '"]').fadeIn(filterSpeed);
                        }
                    }
                }

                return false;
            });
        });
    }

    /*
     ********************************************************************************************
     *
     * All the following helpers require each plugin's resources (JS, CSS) to be included in order to work
     *
     ********************************************************************************************
     */

    /*
     * jQuery SlimScroll, for more examples you can check out http://rocha.la/jQuery-slimScroll
     *
     * Helpers.run('slimscroll');
     *
     * Example usage (it will create custom scrolling with the specified height):
     *
     * <div data-toggle="slimscroll" data-height="350px">...</div>
     *
     */
    static slimscroll() {
        // Init slimScroll functionality (with data-toggle="slimscroll" attribute)
        jQuery('[data-toggle="slimscroll"]:not(.js-slimscroll-enabled)').each((index, element) => {
            let el = jQuery(element);

            // Add .js-slimscroll-enabled class to tag it as activated and init it
            el.addClass('js-slimscroll-enabled').slimScroll({
                height: el.data('height') || '200px',
                size: el.data('size') || '5px',
                position: el.data('position') || 'right',
                color: el.data('color') || '#000',
                opacity: el.data('opacity') || '.25',
                distance: el.data('distance') || '0',
                alwaysVisible: el.data('always-visible') ? true : false,
                railVisible: el.data('rail-visible') ? true : false,
                railColor: el.data('rail-color') ||'#999',
                railOpacity: el.data('rail-opacity') || .3
            });
        });
    }

    /*
     * Magnific Popup functionality, for more examples you can check out http://dimsemenov.com/plugins/magnific-popup/
     *
     * Helpers.run('magnific-popup');
     *
     * Example usage:
     *
     * Please check out the Gallery page in Components for complete markup examples
     *
     */
    static magnific() {
        // Gallery init (with .js-gallery class)
        jQuery('.js-gallery:not(.js-gallery-enabled)').each((index, element) => {
            // Add .js-gallery-enabled class to tag it as activated and init it
            jQuery(element).addClass('js-gallery-enabled').magnificPopup({
                delegate: 'a.img-lightbox',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
    }

    /*
     * Summernote init, for more examples you can check out https://summernote.org/
     *
     * Helpers.run('summernote');
     *
     * Example usage:
     *
     * <div class="js-summernote-air"><p>Hello inline Summernote!</p></div> or
     * <div class="js-summernote">Hello Summernote!</div>
     *
     *
     */
    static summernote() {
        // Init text editor in air mode (inline)
        jQuery('.js-summernote-air:not(.js-summernote-air-enabled)').each((index, element) => {
            // Add .js-summernote-air-enabled class to tag it as activated and init it
            jQuery(element).addClass('js-summernote-air-enabled').summernote({
                airMode: true,
                tooltip: false
            });
        });

        // Init full text editor
        jQuery('.js-summernote:not(.js-summernote-enabled)').each((index, element) => {
            let el = jQuery(element);

            // Add .js-summernote-enabled class to tag it as activated and init it
            el.addClass('js-summernote-enabled').summernote({
                height: el.data('height') || 350,
                minHeight: el.data('min-height') || null,
                maxHeight: el.data('max-height') || null
            });
        });
    }

    /*
     * CKEditor init, for more examples you can check out http://ckeditor.com/
     *
     * Helpers.run('ckeditor');
     *
     * Example usage:
     *
     * <textarea id="js-ckeditor" name="ckeditor">Hello CKEditor!</textarea> or
     * <div id="js-ckeditor-inline">Hello inline CKEditor!</div>
     *
     */
    static ckeditor() {
        // Init inline text editor
        if (jQuery('#js-ckeditor-inline:not(.js-ckeditor-inline-enabled)').length) {
            jQuery('#js-ckeditor-inline').attr('contenteditable','true');
            CKEDITOR.inline('js-ckeditor-inline');

            // Add .js-ckeditor-inline-enabled class to tag it as activated
            jQuery('#js-ckeditor-inline').addClass('js-ckeditor-inline-enabled');
        }

        // Init full text editor
        if (jQuery('#js-ckeditor:not(.js-ckeditor-enabled)').length) {
            CKEDITOR.replace('js-ckeditor');

            // Add .js-ckeditor-enabled class to tag it as activated
            jQuery('#js-ckeditor').addClass('js-ckeditor-enabled');
        }
    }

    /*
     * SimpleMDE init, for more examples you can check out https://github.com/NextStepWebs/simplemde-markdown-editor
     *
     * Helpers.run('simplemde');
     *
     * Example usage:
     *
     * <textarea class="js-simplemde" id="simplemde" name="simplemde">Hello SimpleMDE!</textarea>
     *
     */
    static simpleMDE() {
        // Init markdown editor (with .js-simplemde class)
        jQuery('.js-simplemde:not(.js-simplemde-enabled)').each((index, element) => {
            let el = jQuery(element);

            // Add .js-simplemde-enabled class to tag it as activated
            el.addClass('js-simplemde-enabled');

            // Init editor
            new SimpleMDE({ element: el[0] });
        });
    }

    /*
     * Slick init, for more examples you can check out http://kenwheeler.github.io/slick/
     *
     * Helpers.run('slick');
     *
     * Example usage:
     *
     * <div class="js-slider">
     *   <div>Slide #1</div>
     *   <div>Slide #2</div>
     *   <div>Slide #3</div>
     * </div>
     *
     */
    static slick() {
        // Init slider (with .js-slider class)
        jQuery('.js-slider:not(.js-slider-enabled)').each((index, element) => {
            let el = jQuery(element);

            // Add .js-slider-enabled class to tag it as activated and init it
            el.addClass('js-slider-enabled').slick({
                arrows: el.data('arrows') || false,
                dots: el.data('dots') || false,
                slidesToShow: el.data('slides-to-show') || 1,
                slidesToScroll: el.data('slides-to-scroll') || 1,
                centerMode: el.data('center-mode') || false,
                autoplay: el.data('autoplay') || false,
                autoplaySpeed: el.data('autoplay-speed') || 3000,
                infinite: typeof el.data('infinite') === 'undefined' ? true : el.data('infinite')
            });
        });
    }

    /*
     * Bootstrap Datepicker init, for more examples you can check out https://github.com/eternicode/bootstrap-datepicker
     *
     * Helpers.run('datepicker');
     *
     * Example usage:
     *
     * <input type="text" class="js-datepicker form-control">
     *
     */
    static datepicker() {
        // Init datepicker (with .js-datepicker and .input-daterange class)
        jQuery('.js-datepicker:not(.js-datepicker-enabled)').add('.input-daterange:not(.js-datepicker-enabled)').each((index, element) => {
            let el = jQuery(element);

            // Add .js-datepicker-enabled class to tag it as activated and init it
            el.addClass('js-datepicker-enabled').datepicker({
                weekStart: el.data('week-start') || 0,
                autoclose: el.data('autoclose') || false,
                todayHighlight: el.data('today-highlight') || false,
                orientation: 'bottom' // Position issue when using BS4, set it to bottom until officially supported
            });
        });
    }

    /*
     * Bootstrap Colorpicker init, for more examples you can check out https://github.com/itsjavi/bootstrap-colorpicker/
     *
     * Helpers.run('colorpicker');
     *
     * Example usage:
     *
     * <input type="text" class="js-colorpicker form-control" value="#db4a39">
     *
     */
    static colorpicker() {
        // Init colorpicker (with .js-colorpicker class)
        jQuery('.js-colorpicker:not(.js-colorpicker-enabled)').each((index, element) => {
            // Add .js-enabled class to tag it as activated and init it
            jQuery(element).addClass('js-colorpicker-enabled').colorpicker();
        });
    }

    /*
     * Tags Inputs, for more examples you can check out https://github.com/xoxco/jQuery-Tags-Input
     *
     * Helpers.run('tags-inputs');
     *
     * Example usage:
     *
     * <input type="text" class="js-tags-input form-control" data-height="34px" value="tag1,tag2,tag3">
     *
     */
    static tagsInputs() {
        // Init Tags Inputs (with .js-tags-input class)
        jQuery('.js-tags-input:not(.js-tags-input-enabled)').each((index, element) => {
           var el = jQuery(element);

            // Add .js-tags-input-enabled class to tag it as activated and init it
            el.addClass('js-tags-input-enabled').tagsInput({
                height: el.data('height') || false,
                width: el.data('width') || '100%',
                defaultText: el.data('default-text') || 'Add tag',
                removeWithBackspace: el.data('remove-with-backspace') || true,
                delimiter: [',']
            });
        });
    }

    /*
     * Masked Inputs, for more examples you can check out https://github.com/digitalBush/jquery.maskedinput
     *
     * Helpers.run('masked-inputs');
     *
     * Example usage:
     *
     * Please check out the Form plugins page for complete markup examples
     *
     */
    static maskedInputs() {
        // Init Masked Inputs
        // a - Represents an alpha character (A-Z,a-z)
        // 9 - Represents a numeric character (0-9)
        // * - Represents an alphanumeric character (A-Z,a-z,0-9)
        jQuery('.js-masked-date:not(.js-masked-enabled)').mask('99/99/9999');
        jQuery('.js-masked-date-dash:not(.js-masked-enabled)').mask('99-99-9999');
        jQuery('.js-masked-phone:not(.js-masked-enabled)').mask('(999) 999-9999');
        jQuery('.js-masked-phone-ext:not(.js-masked-enabled)').mask('(999) 999-9999? x99999');
        jQuery('.js-masked-taxid:not(.js-masked-enabled)').mask('99-9999999');
        jQuery('.js-masked-ssn:not(.js-masked-enabled)').mask('999-99-9999');
        jQuery('.js-masked-pkey:not(.js-masked-enabled)').mask('a*-999-a999');
        jQuery('.js-masked-time:not(.js-masked-enabled)').mask('99:99');

        jQuery('.js-masked-date')
            .add('.js-masked-date-dash')
            .add('.js-masked-phone')
            .add('.js-masked-phone-ext')
            .add('.js-masked-taxid')
            .add('.js-masked-ssn')
            .add('.js-masked-pkey')
            .add('.js-masked-time')
            .addClass('js-masked-enabled');
    }

    /*
     * Select2, for more examples you can check out https://github.com/select2/select2
     *
     * Helpers.run('select2');
     *
     * Example usage:
     *
     * <select class="js-select2 form-control" style="width: 100%;" data-placeholder="Choose one..">
     *   <option></option><!-- Required for data-placeholder attribute to work with Select2 plugin -->
     *   <option value="1">HTML</option>
     *   <option value="2">CSS</option>
     *   <option value="3">Javascript</option>
     * </select>
     *
     */
    static select2() {
        // Init Select2 (with .js-select2 class)
        jQuery('.js-select2:not(.js-select2-enabled)').each((index, element) => {
            let el = jQuery(element);

            // Add .js-select2-enabled class to tag it as activated and init it
            el.addClass('js-select2-enabled').select2({
                placeholder: el.data('placeholder') || false
            });
        });
    }

    /*
     * Highlight.js, for more examples you can check out https://highlightjs.org/usage/
     *
     * Helpers.run('highlightjs');
     *
     * Example usage:
     *
     * Please check out the Syntax Highlighting page in Components for complete markup examples
     *
     */
    static highlightjs() {
        // Init Highlight.js
        if (!hljs.isHighlighted) {
            hljs.initHighlighting();
        }
    }

    /*
     * Bootstrap Notify, for more examples you can check out http://bootstrap-growl.remabledesigns.com/
     *
     * Helpers.run('notify');
     *
     * Example usage:
     *
     * Please check out the Notifications page for examples
     *
     */
    static notify(options = {}) {
        if (jQuery.isEmptyObject(options)) {
            // Init notifications (with .js-notify class)
            jQuery('.js-notify:not(.js-notify-enabled)').each((index, element) => {
                // Add .js-notify-enabled class to tag it as activated and init it
                jQuery(element).addClass('js-notify-enabled').on('click.cb.helpers', e => {
                    let el = jQuery(e.currentTarget);

                    // Create notification
                    jQuery.notify({
                            icon: el.data('icon') || '',
                            message: el.data('message'),
                            url: el.data('url') || ''
                        },
                        {
                            element: 'body',
                            type: el.data('type') || 'info',
                            placement: {
                                from: el.data('from') || 'top',
                                align: el.data('align') || 'right'
                            },
                            allow_dismiss: true,
                            newest_on_top: true,
                            showProgressbar: false,
                            offset: 20,
                            spacing: 10,
                            z_index: 1033,
                            delay: 5000,
                            timer: 1000,
                            animate: {
                                enter: 'animated fadeIn',
                                exit: 'animated fadeOutDown'
                            }
                        });
                });
            });
        } else {
            // Create notification
            jQuery.notify({
                    icon: options.icon || '',
                    message: options.message,
                    url: options.url || ''
                },
                {
                    element: options.element || 'body',
                    type: options.type || 'info',
                    placement: {
                        from: options.from || 'top',
                        align: options.align || 'right'
                    },
                    allow_dismiss: (options.allow_dismiss === false) ? false : true,
                    newest_on_top: (options.newest_on_top === false) ? false : true,
                    showProgressbar: options.show_progress_bar ? true : false,
                    offset: options.offset || 20,
                    spacing: options.spacing || 10,
                    z_index: options.z_index || 1033,
                    delay: options.delay || 5000,
                    timer: options.timer || 1000,
                    animate: {
                        enter: options.animate_enter || 'animated fadeIn',
                        exit: options.animate_exit || 'animated fadeOutDown'
                    }
                });
        }
    }

    /*
     * Draggable items with jQuery, for more examples you can check out https://jqueryui.com/sortable/
     *
     * Helpers.run('draggable-items');
     *
     * Example usage:
     *
     * Please check out the Draggable page in Blocks for examples
     *
     */
    static draggableItems() {
        // Init draggable items functionality (with .js-draggable-items class)
        jQuery('.js-draggable-items:not(.js-draggable-items-enabled)').each((index, element) => {
            var el = jQuery(element);

            // Add .js-draggable-items-enabled class to tag it as activated and init it
            el.addClass('js-draggable-items-enabled').children('.draggable-column').sortable({
                connectWith: '.draggable-column',
                items: '.draggable-item',
                dropOnEmpty: true,
                opacity: .75,
                handle: '.draggable-handler',
                placeholder: 'draggable-placeholder',
                tolerance: 'pointer',
                start: function(e, ui){
                    ui.placeholder.css({
                        'height': ui.item.outerHeight(),
                        'margin-bottom': ui.item.css('margin-bottom')
                    });
                }
            });
        });
    }

    /*
     * Easy Pie Chart, for more examples you can check out http://rendro.github.io/easy-pie-chart/
     *
     * Helpers.run('easy-pie-chart');
     *
     * Example usage:
     *
     * <div class="js-pie-chart pie-chart" data-percent="25" data-line-width="2" data-size="100">
     *   <span>..Content..</span>
     * </div>
     *
     */
    static easyPieChart() {
        // Init Easy Pie Charts (with .js-pie-chart class)
        jQuery('.js-pie-chart:not(.js-pie-chart-enabled)').each((index, element) => {
            let el = jQuery(element);

            // Add .js-pie-chart-enabled class to tag it as activated and init it
            el.addClass('js-pie-chart-enabled').easyPieChart({
                barColor: el.data('bar-color') || '#777777',
                trackColor: el.data('track-color') || '#eeeeee',
                lineWidth: el.data('line-width') || 3,
                size: el.data('size') || '80',
                animate: el.data('animate') || 750,
                scaleColor: el.data('scale-color') || false
            });
        });
    }

    /*
     * Bootstrap Maxlength, for more examples you can check out https://github.com/mimo84/bootstrap-maxlength
     *
     * Helpers.run('maxlength');
     *
     * Example usage:
     *
     * <input type="text" class="js-maxlength form-control" maxlength="20">
     *
     */
    static maxlength() {
        // Init Bootstrap Maxlength (with .js-maxlength class)
        jQuery('.js-maxlength:not(.js-maxlength-enabled)').each((index, element) => {
            let el = jQuery(element);

            // Add .js-maxlength-enabled class to tag it as activated and init it
            el.addClass('js-maxlength-enabled').maxlength({
                alwaysShow: el.data('always-show') ? true : false,
                threshold: el.data('threshold') || 10,
                warningClass: el.data('warning-class') || 'badge badge-warning',
                limitReachedClass: el.data('limit-reached-class') || 'badge badge-danger',
                placement: el.data('placement') || 'bottom',
                preText: el.data('pre-text') || '',
                separator: el.data('separator') || '/',
                postText: el.data('post-text') || ''
            });
        });
    }

    /*
     * Ion Range Slider, for more examples you can check out https://github.com/IonDen/ion.rangeSlider
     *
     * Helpers.run('rangeslider');
     *
     * Example usage:
     *
     * <input type="text" class="js-rangeslider form-control" value="50">
     *
     */
    static rangeslider() {
        // Init Ion Range Slider (with .js-rangeslider class)
        jQuery('.js-rangeslider:not(.js-rangeslider-enabled)').each((index, element) => {
            // Add .js-rangeslider-enabled class to tag it as activated and init it
            jQuery(element).addClass('js-rangeslider-enabled').ionRangeSlider({
                input_values_separator: ';'
            });
        });
    }
}
