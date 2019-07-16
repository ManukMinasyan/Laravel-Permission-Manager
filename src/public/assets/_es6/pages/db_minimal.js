/*
 *  Document   : db_minimal.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Minimal Dashboard Page
 */

// Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
class DbMinimal {
    /*
     * Init Charts
     *
     */
    static initMinimalChartJS() {
        // Set Global Chart.js configuration
        Chart.defaults.global.defaultFontColor              = '#7c7c7c';
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
        let chartMinimalLinesCon  = jQuery('.js-chartjs-minimal-lines');
        let chartMinimalLinesCon2 = jQuery('.js-chartjs-minimal-lines2');

        // Chart Variables
        let chartMinimalLines, chartMinimalLines2;

        // Lines Charts Data
        let chartMinimalLinesData = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(92,85,75,.1)',
                    borderColor: 'rgba(92,85,75,.4)',
                    pointBackgroundColor: 'rgba(92,85,75,.4)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(92,85,75,.4)',
                    data: [39, 15, 25, 32, 38, 10, 45]
                }
            ]
        };

        let chartMinimalLinesOptions = {
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

        let chartMinimalLinesData2 = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(146,170,90,.1)',
                    borderColor: 'rgba(146,170,90,.4)',
                    pointBackgroundColor: 'rgba(146,170,90,.4)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(146,170,90,.4)',
                    data: [345, 190, 220, 290, 380, 230, 455]
                }
            ]
        };

        let chartMinimalLinesOptions2 = {
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
        if (chartMinimalLinesCon.length) {
            chartMinimalLines  = new Chart(chartMinimalLinesCon, { type: 'line', data: chartMinimalLinesData, options: chartMinimalLinesOptions });
        }

        if (chartMinimalLinesCon2.length) {
            chartMinimalLines2 = new Chart(chartMinimalLinesCon2, { type: 'line', data: chartMinimalLinesData2, options: chartMinimalLinesOptions2 });
        }
    }

    /*
     * Init functionality
     *
     */
    static init() {
        this.initMinimalChartJS();
    }
}

// Initialize when page loads
jQuery(() => { DbMinimal.init(); });
