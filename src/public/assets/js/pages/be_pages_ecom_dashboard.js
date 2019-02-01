/*
 *  Document   : be_pages_ecom_dashboard.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in e-Commerce Dashboard Page
 */

var BePagesEcomDashboard = function() {
    // Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
    var initEcomChartJS = function () {
        // Set Global Chart.js configuration
        Chart.defaults.global.defaultFontColor              = '#555555';
        Chart.defaults.scale.gridLines.color                = "transparent";
        Chart.defaults.scale.gridLines.zeroLineColor        = "transparent";
        Chart.defaults.scale.display                        = false;
        Chart.defaults.scale.ticks.beginAtZero              = true;
        Chart.defaults.scale.ticks.suggestedMax             = 4300;
        Chart.defaults.global.elements.line.borderWidth     = 2;
        Chart.defaults.global.elements.point.radius         = 5;
        Chart.defaults.global.elements.point.hoverRadius    = 7;
        Chart.defaults.global.tooltips.cornerRadius         = 3;
        Chart.defaults.global.legend.display                = false;

        // Chart Containers
        var chartEcomEarningsCon    = jQuery('.js-chartjs-ecom-dashboard-earnings');
        var chartEcomOrdersCon      = jQuery('.js-chartjs-ecom-dashboard-orders');

        // Charts Variables
        var chartEcomOrders, chartEcomEarnings;

        // Charts Data
        var chartEcomEarningsData = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'Earnings',
                    fill: true,
                    backgroundColor: 'rgba(188,38,211,.25)',
                    borderColor: 'rgba(188,38,211,1)',
                    pointBackgroundColor: 'rgba(188,38,211,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(188,38,211,1)',
                    data: [1780, 2440, 3252, 2109, 1892, 3890, 1820]
                }
            ]
        };

        var chartEcomOrdersData = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'Orders',
                    fill: true,
                    backgroundColor: 'rgba(112,178,156,.25)',
                    borderColor: 'rgba(112,178,156,1)',
                    pointBackgroundColor: 'rgba(112,178,156,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(112,178,156,1)',
                    data: [20, 27, 40, 19, 23, 38, 16]
                }
            ]
        };

        // Init Charts
        if (chartEcomEarningsCon.length ) {
            chartEcomEarnings = new Chart(chartEcomEarningsCon, { type: 'line', data: chartEcomEarningsData, options: {
                tooltips: {
                    callbacks: {
                        label: function(tooltipItems, data) {
                            return data.datasets[tooltipItems.datasetIndex].label +': $' + tooltipItems.yLabel;
                        }
                    }

                }
            }});
        }

        if (chartEcomOrdersCon.length ) {
            Chart.defaults.scale.ticks.suggestedMax = 60;

            chartEcomOrders  = new Chart(chartEcomOrdersCon, { type: 'line', data: chartEcomOrdersData});
        }
    };

    return {
        init: function () {
            // Init Chart.js Charts
            initEcomChartJS();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BePagesEcomDashboard.init(); });