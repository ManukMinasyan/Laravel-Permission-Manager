/*
 *  Document   : be_comp_calendar.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Calendar Page
 */

// Full Calendar, for more examples you can check out http://fullcalendar.io/
class BeCompCalendar {
    /*
     * Add new event in the event list
     *
     */
    static addEvent() {
        let eventInput      = jQuery('.js-add-event');
        let eventInputVal   = '';

        // When the add event form is submitted
        jQuery('.js-form-add-event').on('submit', e => {
            eventInputVal = eventInput.prop('value'); // Get input value

            // Check if the user entered something
            if ( eventInputVal ) {
                // Add it to the events list
                jQuery('.js-events')
                    .prepend('<li>' +
                            jQuery('<div />').text(eventInputVal).html() +
                            '</li>');

                // Clear input field
                eventInput.prop('value', '');

                // Re-Init Events
                this.initEvents();
            }

            return false;
        });
    }

    /*
     * Init drag and drop event functionality
     *
     */
    static initEvents() {
        jQuery('.js-events')
            .find('li')
            .each((index, element) => {
                let event = jQuery(element);

                // create an Event Object
                let eventObject = {
                    title: jQuery.trim(event.text()),
                    color: event.css('background-color')
                };

                // store the Event Object in the DOM element so we can get to it later
                event.data('eventObject', eventObject);

                // make the event draggable using jQuery UI
                event.draggable({
                    zIndex: 999,
                    revert: true,
                    revertDuration: 0
                });
            });
    }

    /*
     * Init calendar demo functionality
     *
     */
    static initCalendar() {
        let date = new Date();
        let d    = date.getDate();
        let m    = date.getMonth();
        let y    = date.getFullYear();

        jQuery('.js-calendar').fullCalendar({
            firstDay: 1,
            editable: true,
            droppable: true,
            header: {
                left: 'title',
                right: 'prev,next today month,agendaWeek,agendaDay,listWeek'
            },
            drop: (date, jsEvent, ui, resourceId) => { // this function is called when something is dropped
                let event = jQuery(ui.helper);

                // retrieve the dropped element's stored Event Object
                let originalEventObject = event.data('eventObject');

                // we need to copy it, so that multiple events don't have a reference to the same object
                let copiedEventObject = jQuery.extend({}, originalEventObject);

                // assign it the date that was reported
                copiedEventObject.start = date;

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                jQuery('.js-calendar').fullCalendar('renderEvent', copiedEventObject, true);

                // remove the element from the "Draggable Events" list
                event.remove();
            },
            events: [
                {
                    title: 'Gaming Day',
                    start: new Date(y, m, 1),
                    allDay: true,
                    color: '#fcf7e6'
                },
                {
                    title: 'Skype Meeting',
                    start: new Date(y, m, 3)
                },
                {
                    title: 'Project X',
                    start: new Date(y, m, 9),
                    end: new Date(y, m, 12),
                    allDay: true,
                    color: '#fae9e8'
                },
                {
                    title: 'Work',
                    start: new Date(y, m, 17),
                    end: new Date(y, m, 19),
                    allDay: true,
                    color: '#fae9e8'
                },
                {
                    id: 999,
                    title: 'Hiking (repeated)',
                    start: new Date(y, m, d - 1, 15, 0)
                },
                {
                    id: 999,
                    title: 'Hiking (repeated)',
                    start: new Date(y, m, d + 3, 15, 0)
                },
                {
                    title: 'Landing Template',
                    start: new Date(y, m, d - 3),
                    end: new Date(y, m, d - 3),
                    allDay: true,
                    color: '#fcf7e6'
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d + 7, 15, 0),
                    color: '#ebf5df'
                },
                {
                    title: 'Coding',
                    start: new Date(y, m, d, 8, 0),
                    end: new Date(y, m, d, 14, 0),
                    color: '#fcf7e6'
                },
                {
                    title: 'Trip',
                    start: new Date(y, m, 25),
                    end: new Date(y, m, 27),
                    allDay: true,
                    color: '#fcf7e6'
                },
                {
                    title: 'Reading',
                    start: new Date(y, m, d + 8, 20, 0),
                    end: new Date(y, m, d + 8, 22, 0)
                },
                {
                    title: 'Follow me on Twitter',
                    start: new Date(y, m, 22),
                    allDay: true,
                    url: 'http://twitter.com/pixelcave'
                }
            ]
        });
    }

    /*
     * Init functionality
     *
     */
    static init() {
        this.addEvent();
        this.initEvents();
        this.initCalendar();
    }
}

// Initialize when page loads
jQuery(() => { BeCompCalendar.init(); });
