/*
 *  Document   : db_corporate.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Corporate Dashboard Page
 */

// Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
class DbCorporate {
    /*
     * Init Charts
     *
     */
    static initCorporateChartJS() {
        // Set Global Chart.js configuration
        Chart.defaults.global.defaultFontColor              = '#7c7c7c';
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
        let chartCorporateLinesCon  = jQuery('.js-chartjs-corporate-lines');
        let chartCorporateLinesCon2 = jQuery('.js-chartjs-corporate-lines2');

        // Chart Variables
        let chartCorporateLines, chartCorporateLines2;

        // Lines Charts Data
        let chartCorporateLinesData = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(38,198,218,.1)',
                    borderColor: 'rgba(38,198,218,.5)',
                    pointBackgroundColor: 'rgba(38,198,218,.5)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(38,198,218,.5)',
                    data: [39, 27, 23, 34, 42, 46, 31]
                }
            ]
        };

        let chartCorporateLinesOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMax: 50
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    label: (tooltipItems, data) => {
                        return ' ' + tooltipItems.yLabel + ' Sales';
                    }
                }
            }
        };

        let chartCorporateLinesData2 = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(156,204,101,.1)',
                    borderColor: 'rgba(156,204,101,.5)',
                    pointBackgroundColor: 'rgba(156,204,101,.5)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(156,204,101,.5)',
                    data: [325, 290, 209, 290, 410, 384, 425]
                }
            ]
        };

        let chartCorporateLinesOptions2 = {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMax: 480
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    label: (tooltipItems, data) => {
                        return ' $ ' + tooltipItems.yLabel;
                    }
                }
            }
        };

        // Init Charts
        if (chartCorporateLinesCon.length) {
            chartCorporateLines  = new Chart(chartCorporateLinesCon, { type: 'line', data: chartCorporateLinesData, options: chartCorporateLinesOptions });
        }

        if (chartCorporateLinesCon2.length) {
            chartCorporateLines2 = new Chart(chartCorporateLinesCon2, { type: 'line', data: chartCorporateLinesData2, options: chartCorporateLinesOptions2 });
        }
    }

    /*
     * Init functionality
     *
     */
    static init() {
        this.initCorporateChartJS();
    }
}

// Initialize when page loads
jQuery(() => { DbCorporate.init(); });
