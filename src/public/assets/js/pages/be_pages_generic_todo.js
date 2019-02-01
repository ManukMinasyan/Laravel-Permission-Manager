/*
 *  Document   : be_pages_generic_todo.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Todo Page in Backend
 */

var BeTasks = function() {
    // Helper variables - set in initTasks()
    var taskIdNext, tasks, taskForm, taskInput, taskInputVal,
        taskList, taskListStarred, taskListCompleted,
        taskBadge, taskBadgeStarred, taskBadgeCompleted;

    // Set variables and default functionality
    var initTasks = function(){
        tasks                  = jQuery('.js-tasks');
        taskForm               = jQuery('#js-task-form');
        taskInput              = jQuery('#js-task-input');

        taskList               = jQuery('.js-task-list');
        taskListStarred        = jQuery('.js-task-list-starred');
        taskListCompleted      = jQuery('.js-task-list-completed');

        taskBadge              = jQuery('.js-task-badge');
        taskBadgeStarred       = jQuery('.js-task-badge-starred');
        taskBadgeCompleted     = jQuery('.js-task-badge-completed');

        // Set your own next new task id based on your database setup
        taskIdNext = 10;

        // Update badges
        badgesUpdate();

        // New task form submission
        taskForm.on('submit', function(e){
            e.preventDefault();

            // Get input value
            taskInputVal = taskInput.prop('value');

            // Check if the user entered something
            if ( taskInputVal ) {
                // Add Task
                taskAdd(taskInputVal);

                // Clear and focus input field
                taskInput.prop('value', '').focus();
            }
        });

        // Task status update on checkbox click
        var stask, staskId;

        tasks.on('click', '.js-task-status', function(e){
            e.preventDefault();

            stask   = jQuery(this).closest('.js-task');
            staskId = stask.attr('data-task-id');

            // Check task status and toggle it
            if ( stask.attr('data-task-completed') === 'true' ) {
                taskSetActive( staskId );
            } else {
                taskSetCompleted( staskId );
            }
        });

        // Task starred status update on star click
        var ftask, ftaskId;

        tasks.on('click', '.js-task-star', function(){
            ftask   = jQuery(this).closest('.js-task');
            ftaskId = ftask.attr('data-task-id');

            // Check task starred status and toggle it
            if ( ftask.attr('data-task-starred') === 'true' ) {
                taskStarRemove( ftaskId );
            } else {
                taskStarAdd( ftaskId );
            }
        });

        // Remove task on remove button click
        tasks.on('click', '.js-task-remove', function(){
            ftask   = jQuery(this).closest('.js-task');
            ftaskId = ftask.attr('data-task-id');

            // Remove task
            taskRemove( ftaskId );
        });
    };

    // Update badges
    var badgesUpdate = function() {
        taskBadge.text( taskList.children().length || '' );
        taskBadgeStarred.text( taskListStarred.children().length || '' );
        taskBadgeCompleted.text( taskListCompleted.children().length || '' );
    };

    // Add a task
    var taskAdd = function( taskContent ){
        // Add it to the task list
        taskList
            .prepend(
            '<div class="js-task block block-rounded mb-5 animated fadeIn" data-task-id="' +
                taskIdNext +
                '" data-task-completed="false" data-task-starred="false">' +
                '<table class="table table-borderless table-vcenter mb-0">' +
                    '<tr>' +
                        '<td class="text-center" style="width: 50px;">' +
                            '<label class="js-task-status css-control css-control-primary css-checkbox py-0">' +
                                '<input type="checkbox" class="css-control-input">' +
                                '<span class="css-control-indicator"></span>' +
                            '</label>' +
                        '</td>' +
                        '<td class="js-task-content font-w600">' +
                            jQuery('<span />').text(taskContent).html() +
                        '</td>' +
                        '<td class="text-right" style="width: 100px;">' +
                            '<button class="js-task-star btn btn-sm btn-alt-warning" type="button">' +
                                '<i class="fa fa-star-o"></i>' +
                            '</button> ' +
                            '<button class="js-task-remove btn btn-sm btn-alt-danger" type="button">' +
                                '<i class="fa fa-times"></i>' +
                            '</button>' +
                        '</td>' +
                    '</tr>' +
                '</table>' +
            '</div>'
            );

        // Update badges
        badgesUpdate();

        // Save the task based on your database setup
        // ..

        // Update task next id
        taskIdNext++;
    };

    // Remove a task
    var taskRemove = function( taskId ){
        jQuery('.js-task[data-task-id="' + taskId + '"]').remove();

        // Update badges
        badgesUpdate();

        // Remove the task based on your database setup
        // ..
    };

    // Star a task
    var taskStarAdd = function( taskId ){
        var task = jQuery('.js-task[data-task-id="' + taskId + '"]');

        // Check if exists and update accordignly the markup
        if ( task.length > 0 ) {
            task.attr('data-task-starred', true);
            task.find('.js-task-star > i').toggleClass('fa-star fa-star-o');

            if ( task.attr('data-task-completed') === 'false') {
                task.prependTo(taskListStarred);
            }

            // Update badges
            badgesUpdate();

            // Star the task based on your database setup
            // ..
        }
    };

    // Unstar a task
    var taskStarRemove = function( taskId ){
        var task = jQuery('.js-task[data-task-id="' + taskId + '"]');

        // Check if exists and update accordignly the markup
        if ( task.length > 0 ) {
            task.attr('data-task-starred', false);
            task.find('.js-task-star > i').toggleClass('fa-star fa-star-o');

            if ( task.attr('data-task-completed') === 'false') {
                task.prependTo(taskList);
            }

            // Update badges
            badgesUpdate();

            // Unstar the task based on your database setup
            // ..
        }
    };

    // Set a task to active
    var taskSetActive = function( taskId ){
        var task = jQuery('.js-task[data-task-id="' + taskId + '"]');

        // Check if exists and update accordignly
        if ( task.length > 0 ) {
            task.attr('data-task-completed', false);
            task.find('.table').toggleClass('bg-body-light');
            task.find('.js-task-status > input').prop('checked', false);
            task.find('.js-task-content > del').contents().unwrap();

            if ( task.attr('data-task-starred') === 'true') {
                task.prependTo(taskListStarred);
            } else {
                task.prependTo(taskList);
            }

            // Update badges
            badgesUpdate();

            // Update task status based on your database setup
            // ..
        }
    };

    // Set a task to completed
    var taskSetCompleted = function( taskId ){
        var task = jQuery('.js-task[data-task-id="' + taskId + '"]');

        // Check if exists and update accordignly
        if ( task.length > 0 ) {
            task.attr('data-task-completed', true);
            task.find('.table').toggleClass('bg-body-light');
            task.find('.js-task-status > input').prop('checked', true);
            task.find('.js-task-content').wrapInner('<del></del>');
            task.prependTo(taskListCompleted);

            // Update badges
            badgesUpdate();

            // Update task status based on your database setup
            // ..
        }
    };

    return {
        init: function () {
            // Init Tasks
            initTasks();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BeTasks.init(); });