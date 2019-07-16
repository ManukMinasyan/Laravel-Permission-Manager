/*
 *  Document   : be_pages_crypto_dashboard.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Crypto Dashboard Page
 */

class BePagesCryptoDashboard {
    /*
     * Crypto Charts, for more examples you can check out http://www.chartjs.org/docs
     *
     */
    static initChartsCrypto() {
        // Set Global Chart.js configuration
        Chart.defaults.global.defaultFontColor              = '#555555';
        Chart.defaults.scale.gridLines.color                = "transparent";
        Chart.defaults.global.elements.point.radius         = 5;
        Chart.defaults.global.elements.point.hoverRadius    = 7;
        Chart.defaults.global.tooltips.cornerRadius         = 3;
        Chart.defaults.global.legend.labels.boxWidth        = 15;
        Chart.defaults.global.legend.display                = false;

        // Get Chart Containers
        let chartBitcoinCon  = jQuery('.js-chartjs-bitcoin');
        let chartEthereumCon = jQuery('.js-chartjs-ethereum');
        let chartLitecoinCon = jQuery('.js-chartjs-litecoin');

        // Helper Classes
        let chartBitcoin, chartEthereum, chartLitecoin;

        // Set up labels
        let chartCryptolabels = [];
        for (i = 0; i < 30; i++) {
            chartCryptolabels[i] = (i === 29) ? '1 day ago' : (30 - i) + ' days ago';
        }

        // Cryto Data
        let chartBitcoinData  = [10500, 10400, 9500, 8268, 10218, 8250, 8707, 9284, 9718, 9950, 9879, 10147, 10883, 11071, 11332, 11584, 11878, 13540, 16501, 16007, 15142, 14869, 16762, 17276, 16808, 16678, 16771, 12900, 13100, 14000];
        let chartEthereumData = [500, 525, 584, 485, 470, 320, 380, 580, 620, 785, 795, 801, 799, 750, 900, 920, 930, 1300, 1250, 1150, 1365, 1258, 980, 870, 860, 925, 999, 1050, 1090, 1100];
        let chartLitecoinData = [300, 320, 330, 331, 335, 340, 358, 310, 220, 180, 190, 195, 203, 187, 198, 258, 270, 340, 356, 309, 218, 230, 242, 243, 250, 210, 205, 226, 214, 250];

        // Init Bitcoin Chart on Tab Shown
        jQuery('a[href="#crypto-coins-btc"]', 'ul#crypto-tabs').on('shown.bs.tab', e => {
            // if already exists destroy it
            if (chartBitcoin) {
                chartBitcoin.destroy();
            }

            // Init Chart
            chartBitcoin = new Chart(chartBitcoinCon, {
                type: 'line',
                data: {
                    labels: chartCryptolabels,
                    datasets: [
                        {
                            label: 'Bitcoin Price',
                            fill: true,
                            backgroundColor: 'rgba(255,193,7,.25)',
                            borderColor: 'rgba(255,193,7,1)',
                            pointBackgroundColor: 'rgba(255,193,7,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(255,193,7,1)',
                            data: chartBitcoinData
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMin: 6000,
                                suggestedMax: 20000
                            }
                        }]
                    },
                    tooltips: {
                        intersect: false,
                        callbacks: {
                            label: function(tooltipItems, data) {
                                return ' $' + tooltipItems.yLabel;
                            }
                        }
                    }
                }
            });
        });

        // Init Ethereum Chart on Tab Shown
        jQuery('a[href="#crypto-coins-eth"]', 'ul#crypto-tabs').on('shown.bs.tab', e => {
            // if already exists destroy it
            if (chartEthereum) {
                chartEthereum.destroy();
            }

            // Init Chart
            chartEthereum = new Chart(chartEthereumCon, {
                type: 'line',
                data: {
                    labels: chartCryptolabels,
                    datasets: [
                        {
                            label: 'Ethereum Price',
                            fill: true,
                            backgroundColor: 'rgba(111,124,186, .25)',
                            borderColor: 'rgba(111,124,186, 1)',
                            pointBackgroundColor: 'rgba(111,124,186, 1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(111,124,186, 1)',
                            data: chartEthereumData
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 1500
                            }
                        }]
                    },
                    tooltips: {
                        intersect: false,
                        callbacks: {
                            label: function(tooltipItems, data) {
                                return ' $' + tooltipItems.yLabel;
                            }
                        }
                    }
                }
            });
        });

        // Init Litecoin Chart on Tab Shown
        jQuery('a[href="#crypto-coins-ltc"]', 'ul#crypto-tabs').on('shown.bs.tab', e => {
            // if already exists destroy it
            if (chartLitecoin) {
                chartLitecoin.destroy();
            }

            // Init Chart
            chartLitecoin = new Chart(chartLitecoinCon, {
                type: 'line',
                data: {
                    labels: chartCryptolabels,
                    datasets: [
                        {
                            label: 'Litecoin Price',
                            fill: true,
                            backgroundColor: 'rgba(181,181,181,.25)',
                            borderColor: 'rgba(181,181,181,1)',
                            pointBackgroundColor: 'rgba(181,181,181,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(181,181,181,1)',
                            data: chartLitecoinData
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 400
                            }
                        }]
                    },
                    tooltips: {
                        intersect: false,
                        callbacks: {
                            label: function(tooltipItems, data) {
                                return ' $' + tooltipItems.yLabel;
                            }
                        }
                    }
                }
            });
        });

        // Shown Bitcoin Tab which will trigger the first init of the chart
        jQuery('a[href="#crypto-coins-btc"]', 'ul#crypto-tabs').tab('show');
    }

    /*
     * Init functionality
     *
     */
    static init() {
        this.initChartsCrypto();
    }
}

// Initialize when page loads
jQuery(() => { BePagesCryptoDashboard.init(); });
