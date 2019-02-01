/*
 *  Document   : be_pages_dahboard.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Dashboard Page
 */

var BePagesDashboard = function() {
    // Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
    var initDashboardChartJS = function () {
        // Set Global Chart.js configuration
        Chart.defaults.global.defaultFontColor              = '#555555';
        Chart.defaults.scale.gridLines.color                = "transparent";
        Chart.defaults.scale.gridLines.zeroLineColor        = "transparent";
        Chart.defaults.scale.display                        = false;
        Chart.defaults.scale.ticks.beginAtZero              = true;
        Chart.defaults.global.elements.line.borderWidth     = 2;
        Chart.defaults.global.elements.point.radius         = 5;
        Chart.defaults.global.elements.point.hoverRadius    = 7;
        Chart.defaults.global.tooltips.cornerRadius         = 3;
        Chart.defaults.global.legend.display                = false;

        // Chart Containers
        var chartDashboardLinesCon  = jQuery('.js-chartjs-dashboard-lines');
        var chartDashboardLinesCon2 = jQuery('.js-chartjs-dashboard-lines2');

        // Chart Variables
        var chartDashboardLines, chartDashboardLines2;

        // Lines Charts Data
        var chartDashboardLinesData = {
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
                    data: [25, 21, 23, 38, 36, 35, 39]
                }
            ]
        };

        var chartDashboardLinesOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMax: 50
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItems, data) {
                        return ' ' + tooltipItems.yLabel + ' Sales';
                    }
                }
            }
        };

        var chartDashboardLinesData2 = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(156,204,101,.25)',
                    borderColor: 'rgba(156,204,101,1)',
                    pointBackgroundColor: 'rgba(156,204,101,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(156,204,101,1)',
                    data: [190, 219, 235, 320, 360, 354, 390]
                }
            ]
        };

        var chartDashboardLinesOptions2 = {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMax: 480
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItems, data) {
                        return ' $ ' + tooltipItems.yLabel;
                    }
                }
            }
        };

        // Init Charts
        if ( chartDashboardLinesCon.length ) {
            chartDashboardLines  = new Chart(chartDashboardLinesCon, { type: 'line', data: chartDashboardLinesData, options: chartDashboardLinesOptions });
        }

        if ( chartDashboardLinesCon2.length ) {
            chartDashboardLines2 = new Chart(chartDashboardLinesCon2, { type: 'line', data: chartDashboardLinesData2, options: chartDashboardLinesOptions2 });
        }
    };

    return {
        init: function () {
            // Init Chart.js Charts
            initDashboardChartJS();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BePagesDashboard.init(); });