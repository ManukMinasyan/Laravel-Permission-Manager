/*
 *  Document   : db_dark.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Dark Dashboard Page
 */

// Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
class DbDark {
    /*
     * Init Charts
     *
     */
    static initDarkChartJS() {
        // Set Global Chart.js configuration
        Chart.defaults.global.defaultFontColor              = '#ccc';
        Chart.defaults.scale.gridLines.color                = "transparent";
        Chart.defaults.scale.gridLines.zeroLineColor        = "transparent";
        Chart.defaults.scale.display                        = false;
        Chart.defaults.scale.ticks.beginAtZero              = true;
        Chart.defaults.global.elements.line.borderWidth     = 2;
        Chart.defaults.global.elements.point.radius         = 3;
        Chart.defaults.global.elements.point.hoverRadius    = 5;
        Chart.defaults.global.tooltips.cornerRadius         = 3;
        Chart.defaults.global.legend.display                = false;

        // Chart Containers
        let chartDarkLinesCon  = jQuery('.js-chartjs-dark-lines');
        let chartDarkLinesCon2 = jQuery('.js-chartjs-dark-lines2');

        // Chart Variables
        let chartDarkLines, chartDarkLines2;

        // Lines Charts Data
        let chartDarkLinesData = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.4)',
                    pointBackgroundColor: 'rgba(255,255,255,.4)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,255,255,.4)',
                    data: [39, 15, 25, 32, 38, 10, 45]
                }
            ]
        };

        let chartDarkLinesOptions = {
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

        let chartDarkLinesData2 = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.4)',
                    pointBackgroundColor: 'rgba(255,255,255,.4)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,255,255,.4)',
                    data: [345, 190, 220, 290, 380, 230, 455]
                }
            ]
        };

        let chartDarkLinesOptions2 = {
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
        if (chartDarkLinesCon.length) {
            chartDarkLines  = new Chart(chartDarkLinesCon, { type: 'line', data: chartDarkLinesData, options: chartDarkLinesOptions });
        }

        if (chartDarkLinesCon2.length) {
            chartDarkLines2 = new Chart(chartDarkLinesCon2, { type: 'line', data: chartDarkLinesData2, options: chartDarkLinesOptions2 });
        }
    }

    /*
     * Init functionality
     *
     */
    static init() {
        this.initDarkChartJS();
    }
}

// Initialize when page loads
jQuery(() => { DbDark.init(); });
