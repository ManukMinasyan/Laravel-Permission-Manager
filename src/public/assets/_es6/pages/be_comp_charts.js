/*
 *  Document   : be_comp_charts.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Charts Page
 */

class BeCompCharts {
    /*
     * Randomize Easy Pie Chart values
     *
     */
    static initRandomEasyPieChart() {
        jQuery('.js-pie-randomize').on('click', e => {
            jQuery(e.currentTarget)
                .parents('.block')
                .find('.pie-chart')
                .each((index, element) => {
                    jQuery(element).data('easyPieChart').update(Math.floor((Math.random() * 100) + 1));
                });
        });
    }

    /*
     * jQuery Sparkline Charts, for more examples you can check out http://omnipotent.net/jquery.sparkline/#s-docs
     *
     */
    static initChartsSparkline() {
        // Chart Containers
        let slcLine1        = jQuery('.js-slc-line1');
        let slcLine2        = jQuery('.js-slc-line2');
        let slcLine3        = jQuery('.js-slc-line3');
        let slcBar1         = jQuery('.js-slc-bar1');
        let slcBar2         = jQuery('.js-slc-bar2');
        let slcBar3         = jQuery('.js-slc-bar3');
        let slcPie1         = jQuery('.js-slc-pie1');
        let slcPie2         = jQuery('.js-slc-pie2');
        let slcPie3         = jQuery('.js-slc-pie3');
        let slcTristate1    = jQuery('.js-slc-tristate1');
        let slcTristate2    = jQuery('.js-slc-tristate2');
        let slcTristate3    = jQuery('.js-slc-tristate3');


        // Line Charts
        let lineOptions = {
            type: 'line',
            width: '120px',
            height: '80px',
            tooltipOffsetX: -25,
            tooltipOffsetY: 20,
            lineColor: '#ffca28',
            fillColor: '#ffca28',
            spotColor: '#555',
            minSpotColor: '#555',
            maxSpotColor: '#555',
            highlightSpotColor: '#555',
            highlightLineColor: '#555',
            spotRadius: 2,
            tooltipPrefix: '',
            tooltipSuffix: ' Tickets',
            tooltipFormat: '{{prefix}}{{y}}{{suffix}}'
        };

        if (slcLine1.length) {
            slcLine1.sparkline('html', lineOptions);
        }

        lineOptions['lineColor']       = '#9ccc65';
        lineOptions['fillColor']       = '#9ccc65';
        lineOptions['tooltipPrefix']   = '$ ';
        lineOptions['tooltipSuffix']   = '';

        if (slcLine2.length) {
            slcLine2.sparkline('html', lineOptions);
        }

        lineOptions['lineColor']       = '#42a5f5';
        lineOptions['fillColor']       = '#42a5f5';
        lineOptions['tooltipPrefix']   = '';
        lineOptions['tooltipSuffix']   = ' Sales';

        if (slcLine3.length) {
            slcLine3.sparkline('html', lineOptions);
        }

        // Bar Charts
        let barOptions = {
            type: 'bar',
            barWidth: 8,
            barSpacing: 6,
            height: '80px',
            barColor: '#ffca28',
            tooltipPrefix: '',
            tooltipSuffix: ' Tickets',
            tooltipFormat: '{{prefix}}{{value}}{{suffix}}'
        };

        if (slcBar1.length) {
            slcBar1.sparkline('html', barOptions);
        }

        barOptions['barColor']         = '#9ccc65';
        barOptions['tooltipPrefix']    = '$ ';
        barOptions['tooltipSuffix']    = '';

        if (slcBar2.length) {
            slcBar2.sparkline('html', barOptions);
        }

        barOptions['barColor']         = '#42a5f5';
        barOptions['tooltipPrefix']    = '';
        barOptions['tooltipSuffix']    = ' Sales';

        if (slcBar3.length) {
            slcBar3.sparkline('html', barOptions);
        }

        // Pie Charts
        let pieCharts = {
            type: 'pie',
            width: '80px',
            height: '80px',
            sliceColors: ['#ffca28','#9ccc65', '#42a5f5','#ef5350'],
            highlightLighten: 1.1,
            tooltipPrefix: '',
            tooltipSuffix: ' Tickets',
            tooltipFormat: '{{prefix}}{{value}}{{suffix}}'
        };

        if (slcPie1.length) {
            slcPie1.sparkline('html', pieCharts);
        }

        pieCharts['tooltipPrefix'] = '$ ';
        pieCharts['tooltipSuffix'] = '';

        if (slcPie2.length) {
            slcPie2.sparkline('html', pieCharts);
        }

        pieCharts['tooltipPrefix'] = '';
        pieCharts['tooltipSuffix'] = ' Sales';

        if (slcPie3.length) {
            slcPie3.sparkline('html', pieCharts);
        }

        // Tristate Charts
        let tristateOptions = {
            type: 'tristate',
            barWidth: 8,
            barSpacing: 6,
            height: '110px',
            posBarColor: '#9ccc65',
            negBarColor: '#ef5350'
        };

        if (slcTristate1.length) {
            slcTristate1.sparkline('html', tristateOptions);
        }

        if (slcTristate2.length) {
            slcTristate2.sparkline('html', tristateOptions);
        }

        if (slcTristate3.length) {
            slcTristate3.sparkline('html', tristateOptions);
        }
    }

    /*
     * Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
     *
     */
    static initChartsChartJS() {
        // Set Global Chart.js configuration
        Chart.defaults.global.defaultFontColor              = '#555555';
        Chart.defaults.scale.gridLines.color                = "rgba(0,0,0,.04)";
        Chart.defaults.scale.gridLines.zeroLineColor        = "rgba(0,0,0,.1)";
        Chart.defaults.scale.ticks.beginAtZero              = true;
        Chart.defaults.global.elements.line.borderWidth     = 2;
        Chart.defaults.global.elements.point.radius         = 5;
        Chart.defaults.global.elements.point.hoverRadius    = 7;
        Chart.defaults.global.tooltips.cornerRadius         = 3;
        Chart.defaults.global.legend.labels.boxWidth        = 12;

        // Get Chart Containers
        let chartLinesCon  = jQuery('.js-chartjs-lines');
        let chartBarsCon   = jQuery('.js-chartjs-bars');
        let chartRadarCon  = jQuery('.js-chartjs-radar');
        let chartPolarCon  = jQuery('.js-chartjs-polar');
        let chartPieCon    = jQuery('.js-chartjs-pie');
        let chartDonutCon  = jQuery('.js-chartjs-donut');

        // Lines/Bar/Radar Chart Data
        let chartLinesBarsRadarData = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(66,165,245,.75)',
                    borderColor: 'rgba(66,165,245,1)',
                    pointBackgroundColor: 'rgba(66,165,245,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(66,165,245,1)',
                    data: [25, 38, 62, 45, 90, 115, 130]
                },
                {
                    label: 'Last Week',
                    fill: true,
                    backgroundColor: 'rgba(66,165,245,.25)',
                    borderColor: 'rgba(66,165,245,1)',
                    pointBackgroundColor: 'rgba(66,165,245,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(66,165,245,1)',
                    data: [112, 90, 142, 130, 170, 188, 196]
                }
            ]
        };

        // Polar/Pie/Donut Data
        let chartPolarPieDonutData = {
            labels: [
                'Earnings',
                'Sales',
                'Tickets'
            ],
            datasets: [{
                data: [
                    50,
                    25,
                    25
                ],
                backgroundColor: [
                    'rgba(156,204,101,1)',
                    'rgba(255,202,40,1)',
                    'rgba(239,83,80,1)'
                ],
                hoverBackgroundColor: [
                    'rgba(156,204,101,.5)',
                    'rgba(255,202,40,.5)',
                    'rgba(239,83,80,.5)'
                ]
            }]
        };

        // Init Charts
        let chartLines, chartBars, chartRadar, chartPolar, chartPie, chartDonut;

        if (chartLinesCon.length) {
            chartLines = new Chart(chartLinesCon, { type: 'line', data: chartLinesBarsRadarData });
        }

        if (chartBarsCon.length) {
            chartBars  = new Chart(chartBarsCon, { type: 'bar', data: chartLinesBarsRadarData });
        }

        if (chartRadarCon.length) {
            chartRadar = new Chart(chartRadarCon, { type: 'radar', data: chartLinesBarsRadarData });
        }

        if (chartPolarCon.length) {
            chartPolar = new Chart(chartPolarCon, { type: 'polarArea', data: chartPolarPieDonutData });
        }

        if (chartPieCon.length) {
            chartPie   = new Chart(chartPieCon, { type: 'pie', data: chartPolarPieDonutData });
        }

        if (chartDonutCon.length) {
            chartDonut = new Chart(chartDonutCon, { type: 'doughnut', data: chartPolarPieDonutData });
        }
    }

    /*
     * Flot charts, for more examples you can check out http://www.flotcharts.org/flot/examples/
     *
     */
    static initChartsFlot() {
        // Get the elements where we will attach the charts
        let flotLive       = jQuery('.js-flot-live');
        let flotLines      = jQuery('.js-flot-lines');
        let flotStacked    = jQuery('.js-flot-stacked');
        let flotPie        = jQuery('.js-flot-pie');
        let flotBars       = jQuery('.js-flot-bars');

        // Demo Data
        let dataEarnings    = [[1, 1500], [2, 1700], [3, 1400], [4, 1900], [5, 2500], [6, 2300], [7, 2700], [8, 3200], [9, 3500], [10, 3260], [11, 4100], [12, 4600]];
        let dataSales       = [[1, 500], [2, 600], [3, 400], [4, 750], [5, 1150], [6, 950], [7, 1400], [8, 1700], [9, 1800], [10, 1300], [11, 1750], [12, 2900]];

        let dataSalesBefore = [[1, 500], [4, 600], [7, 1000], [10, 600], [13, 800], [16, 1200], [19, 1500], [22, 1600], [25, 2500], [28, 2700], [31, 3500], [34, 4500]];
        let dataSalesAfter  = [[2, 900], [5, 1200], [8, 2000], [11, 1200], [14, 1600], [17, 2400], [20, 3000], [23, 3200], [26, 5000], [29, 5400], [32, 7000], [35, 9000]];

        let dataMonths      = [[1, 'Jan'], [2, 'Feb'], [3, 'Mar'], [4, 'Apr'], [5, 'May'], [6, 'Jun'], [7, 'Jul'], [8, 'Aug'], [9, 'Sep'], [10, 'Oct'], [11, 'Nov'], [12, 'Dec']];
        let dataMonthsBars  = [[2, 'Jan'], [5, 'Feb'], [8, 'Mar'], [11, 'Apr'], [14, 'May'], [17, 'Jun'], [20, 'Jul'], [23, 'Aug'], [26, 'Sep'], [29, 'Oct'], [32, 'Nov'], [35, 'Dec']];

        // Live Chart
        let dataLive = [], y = 0, chartLive;

        function getRandomData() { // Random data generator
            if (dataLive.length > 0)
                dataLive = dataLive.slice(1);

            while (dataLive.length < 300) {
                let prev = dataLive.length > 0 ? dataLive[dataLive.length - 1] : 50;
                let y = prev + Math.random() * 10 - 5;
                if (y < 0)
                    y = 0;
                if (y > 100)
                    y = 100;
                dataLive.push(y);
            }

            let res = [];
            for (let i = 0; i < dataLive.length; ++i) {
                res.push([i, dataLive[i]]);
            }

            jQuery('.js-flot-live-info').html(y.toFixed(0) + '%'); // Show live chart info

            return res;
        }

        function updateChartLive() { // Update live chart
            chartLive.setData([getRandomData()]);
            chartLive.draw();
            setTimeout(updateChartLive, 100);
        }

        if (flotLive.length) {
            chartLive = jQuery.plot(flotLive, // Init live chart
                [{ data: getRandomData() }],
                {
                    series: {
                        shadowSize: 0
                    },
                    lines: {
                        show: true,
                        lineWidth: 1,
                        fill: true,
                        fillColor: {
                            colors: [{opacity: 1}, {opacity: .5}]
                        }
                    },
                    colors: ['#42a5f5'],
                    grid: {
                        borderWidth: 0,
                        color: '#cccccc'
                    },
                    yaxis: {
                        show: true,
                        min: 0,
                        max: 100
                    },
                    xaxis: {
                        show: false
                    }
                }
            );

            updateChartLive(); // Start getting new data
        }

        // Init lines chart
        if (flotLines.length) {
            jQuery.plot(flotLines,
                [
                    {
                        label: 'Earnings',
                        data: dataEarnings,
                        lines: {
                            show: true,
                            fill: true,
                            fillColor: {
                                colors: [{opacity: .7}, {opacity: .7}]
                            }
                        },
                        points: {
                            show: true,
                            radius: 5
                        }
                    },
                    {
                        label: 'Sales',
                        data: dataSales,
                        lines: {
                            show: true,
                            fill: true,
                            fillColor: {
                                colors: [{opacity: .5}, {opacity: .5}]
                            }
                        },
                        points: {
                            show: true,
                            radius: 5
                        }
                    }
                ],
                {
                    colors: ['#ffca28', '#555555'],
                    legend: {
                        show: true,
                        position: 'nw',
                        backgroundOpacity: 0
                    },
                    grid: {
                        borderWidth: 0,
                        hoverable: true,
                        clickable: true
                    },
                    yaxis: {
                        tickColor: '#ffffff',
                        ticks: 3
                    },
                    xaxis: {
                        ticks: dataMonths,
                        tickColor: '#f5f5f5'
                    }
                }
            );

            // Creating and attaching a tooltip to the classic chart
            let previousPoint = null, ttlabel = null;
            flotLines.bind('plothover', (event, pos, item) => {
                if (item) {
                    if (previousPoint !== item.dataIndex) {
                        previousPoint = item.dataIndex;

                        jQuery('.js-flot-tooltip').remove();
                        let x = item.datapoint[0], y = item.datapoint[1];

                        if (item.seriesIndex === 0) {
                            ttlabel = '$ <strong>' + y + '</strong>';
                        } else if (item.seriesIndex === 1) {
                            ttlabel = '<strong>' + y + '</strong> sales';
                        } else {
                            ttlabel = '<strong>' + y + '</strong> tickets';
                        }

                        jQuery('<div class="js-flot-tooltip flot-tooltip">' + ttlabel + '</div>')
                            .css({top: item.pageY - 45, left: item.pageX + 5}).appendTo("body").show();
                    }
                }
                else {
                    jQuery('.js-flot-tooltip').remove();
                    previousPoint = null;
                }
            });
        }

        // Stacked Chart
        if (flotStacked.length) {
            jQuery.plot(flotStacked,
                [
                    {
                        label: 'Sales',
                        data: dataSales
                    },
                    {
                        label: 'Earnings',
                        data: dataEarnings
                    }
                ],
                {
                    colors: ['#555555', '#26c6da'],
                    series: {
                        stack: true,
                        lines: {
                            show: true,
                            fill: true
                        }
                    },
                    lines: {show: true,
                        lineWidth: 0,
                        fill: true,
                        fillColor: {
                            colors: [{opacity: 1}, {opacity: 1}]
                        }
                    },
                    legend: {
                        show: true,
                        position: 'nw',
                        sorted: true,
                        backgroundOpacity: 0
                    },
                    grid: {
                        borderWidth: 0
                    },
                    yaxis: {
                        tickColor: '#ffffff',
                        ticks: 3
                    },
                    xaxis: {
                        ticks: dataMonths,
                        tickColor: '#f5f5f5'
                    }
                }
            );
        }

        // Bars Chart
        if (flotBars.length) {
            jQuery.plot(flotBars,
                [
                    {
                        label: 'Sales Before Release',
                        data: dataSalesBefore,
                        bars: {
                            show: true,
                            lineWidth: 0,
                            fillColor: {
                                colors: [{opacity: .75}, {opacity: .75}]
                            }
                        }
                    },
                    {
                        label: 'Sales After Release',
                        data: dataSalesAfter,
                        bars: {
                            show: true,
                            lineWidth: 0,
                            fillColor: {
                                colors: [{opacity: .75}, {opacity: .75}]
                            }
                        }
                    }
                ],
                {
                    colors: ['#ef5350', '#9ccc65'],
                    legend: {
                        show: true,
                        position: 'nw',
                        backgroundOpacity: 0
                    },
                    grid: {
                        borderWidth: 0
                    },
                    yaxis: {
                        ticks: 3,
                        tickColor: '#f5f5f5'
                    },
                    xaxis: {
                        ticks: dataMonthsBars,
                        tickColor: '#f5f5f5'
                    }
                }
            );
        }

        // Pie Chart
        if (flotPie.length) {
            jQuery.plot(flotPie,
                [
                    {
                        label: 'Sales',
                        data: 15
                    },
                    {
                        label: 'Tickets',
                        data: 12
                    },
                    {
                        label: 'Earnings',
                        data: 73
                    }
                ],
                {
                    colors: ['#26c6da', '#ffca28', '#9ccc65'],
                    legend: {show: false},
                    series: {
                        pie: {
                            show: true,
                            radius: 1,
                            label: {
                                show: true,
                                radius: 2/3,
                                formatter: (label, pieSeries) => {
                                    return '<div class="flot-pie-label">' + label + '<br>' + Math.round(pieSeries.percent) + '%</div>';
                                },
                                background: {
                                    opacity: .75,
                                    color: '#000000'
                                }
                            }
                        }
                    }
                }
            );
        }
    }

    /*
     * Init functionality
     *
     */
    static init() {
        this.initRandomEasyPieChart();
        this.initChartsSparkline();
        this.initChartsChartJS();
        this.initChartsFlot();
    }
}

// Initialize when page loads
jQuery(() => { BeCompCharts.init(); });
