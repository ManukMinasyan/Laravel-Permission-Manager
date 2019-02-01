/*
 *  Document   : be_blocks_widgets_stats.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Widgets Stats Page
 */

var BeBlocksWidgetsStats = function() {
    // Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
    var initWidgetsChartJS = function () {
        // Set Global Chart.js configuration
        Chart.defaults.global.defaultFontColor              = '#555555';
        Chart.defaults.scale.gridLines.color                = "transparent";
        Chart.defaults.scale.gridLines.zeroLineColor        = "transparent";
        Chart.defaults.scale.display                        = false;
        Chart.defaults.scale.ticks.beginAtZero              = true;
        Chart.defaults.scale.ticks.suggestedMax             = 11;
        Chart.defaults.global.elements.line.borderWidth     = 2;
        Chart.defaults.global.elements.point.radius         = 5;
        Chart.defaults.global.elements.point.hoverRadius    = 7;
        Chart.defaults.global.tooltips.cornerRadius         = 3;
        Chart.defaults.global.legend.display                = false;

        // Chart Containers
        var chartWidgetLinesCon  = jQuery('.js-chartjs-widget-lines');
        var chartWidgetLinesCon2 = jQuery('.js-chartjs-widget-lines2');
        var chartWidgetLinesCon3 = jQuery('.js-chartjs-widget-lines3');
        var chartWidgetLinesCon4 = jQuery('.js-chartjs-widget-lines4');

        // Charts Variables
        var chartWidgetLines, chartWidgetLines2, chartWidgetLines3, chartWidgetLines4;

        // Lines Charts Data
        var chartWidgetLinesData = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(66,165,245,.25)',
                    borderColor: 'rgba(66,165,245,1)',
                    pointBackgroundColor: 'rgba(66,165,245,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(66,165,245,1)',
                    data: [5, 7, 4, 5, 6, 8, 4]
                }
            ]
        };

        var chartWidgetLinesData2 = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(255,202,40,.25)',
                    borderColor: 'rgba(255,202,40,1)',
                    pointBackgroundColor: 'rgba(255,202,40,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,202,40,1)',
                    data: [6, 9, 5, 6, 9, 7, 10]
                }
            ]
        };

        var chartWidgetLinesData3 = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(1,229,148,.25)',
                    borderColor: 'rgba(1,229,148,1)',
                    pointBackgroundColor: 'rgba(1,229,148,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(1,229,148,1)',
                    data: [6, 9, 5, 6, 9, 7, 10]
                }
            ]
        };

        var chartWidgetLinesData4 = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(237,83,80,.25)',
                    borderColor: 'rgba(237,83,80,1)',
                    pointBackgroundColor: 'rgba(237,83,80,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(237,83,80,1)',
                    data: [5, 7, 4, 5, 6, 8, 4]
                }
            ]
        };

        // Init Charts
        if (chartWidgetLinesCon.length ) {
            chartWidgetLines  = new Chart(chartWidgetLinesCon, { type: 'line', data: chartWidgetLinesData });
        }

        if (chartWidgetLinesCon2.length ) {
            chartWidgetLines2 = new Chart(chartWidgetLinesCon2, { type: 'line', data: chartWidgetLinesData2 });
        }

        if (chartWidgetLinesCon3.length ) {
            chartWidgetLines3 = new Chart(chartWidgetLinesCon3, { type: 'line', data: chartWidgetLinesData3 });
        }

        if (chartWidgetLinesCon4.length ) {
            chartWidgetLines4 = new Chart(chartWidgetLinesCon4, { type: 'line', data: chartWidgetLinesData4 });
        }
    };

    return {
        init: function () {
            // Init Chart.js Charts
            initWidgetsChartJS();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BeBlocksWidgetsStats.init(); });