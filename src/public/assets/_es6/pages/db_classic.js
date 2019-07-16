/*
 *  Document   : db_classic.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Classic Dashboard Page
 */

// Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
class DbClassic {
    /*
     * Init Charts
     *
     */
    static initClassicChartJS() {
        // Set Global Chart.js configuration
        Chart.defaults.global.defaultFontColor              = '#7c7c7c';
        Chart.defaults.scale.gridLines.color                = "#f5f5f5";
        Chart.defaults.scale.gridLines.zeroLineColor        = "#f5f5f5";
        Chart.defaults.scale.display                        = true;
        Chart.defaults.scale.ticks.beginAtZero              = true;
        Chart.defaults.global.elements.line.borderWidth     = 2;
        Chart.defaults.global.elements.point.radius         = 5;
        Chart.defaults.global.elements.point.hoverRadius    = 7;
        Chart.defaults.global.tooltips.cornerRadius         = 3;
        Chart.defaults.global.legend.display                = false;

        // Chart Containers
        let chartClassicLinesCon  = jQuery('.js-chartjs-classic-lines');
        let chartClassicLinesCon2 = jQuery('.js-chartjs-classic-lines2');

        // Chart Variables
        let chartClassicLines, chartClassicLines2;

        // Lines Charts Data
        let chartClassicLinesData = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(114,102,186,.15)',
                    borderColor: 'rgba(114,102,186,.5)',
                    pointBackgroundColor: 'rgba(114,102,186,.5)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(114,102,186,.5)',
                    data: [39, 27, 23, 34, 42, 46, 31]
                }
            ]
        };

        let chartClassicLinesOptions = {
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

        let chartClassicLinesData2 = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(247,93,129,.15)',
                    borderColor: 'rgba(247,93,129,.5)',
                    pointBackgroundColor: 'rgba(247,93,129,.5)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(247,93,129,.5)',
                    data: [325, 290, 209, 290, 410, 384, 425]
                }
            ]
        };

        let chartClassicLinesOptions2 = {
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
        if (chartClassicLinesCon.length) {
            chartClassicLines  = new Chart(chartClassicLinesCon, { type: 'line', data: chartClassicLinesData, options: chartClassicLinesOptions });
        }

        if (chartClassicLinesCon2.length) {
            chartClassicLines2 = new Chart(chartClassicLinesCon2, { type: 'line', data: chartClassicLinesData2, options: chartClassicLinesOptions2 });
        }
    }

    /*
     * Init functionality
     *
     */
    static init() {
        this.initClassicChartJS();
    }
}

// Initialize when page loads
jQuery(() => { DbClassic.init(); });
