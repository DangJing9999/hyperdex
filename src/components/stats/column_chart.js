import React from 'react';
import Chart from 'react-apexcharts';

class ColumnChart extends React.Component {
    render() {
        let options = {};
        let series = [];

        if (this.props.data) {
            series = [{ name: '', data: this.props.data.values ? this.props.data.values : [] }];
            let categories = this.props.data.categories ? this.props.data.categories : [];

            options = {
                chart: {
                    type: 'bar',
                    height: 400,
                    zoom: { enabled: false },
                    toolbar: { show: false }
                },
                plotOptions: {
                    bar: {
                        colors: {
                            ranges: [{
                                from: 0,
                                to: 10000,
                                color: '#33ff99'
                            }, {
                                from: -10000,
                                to: 0,
                                color: '#996633'
                            }]
                        },
                        columnWidth: '80%',
                    }
                },
                dataLabels: { enabled: false, },
                yaxis: {
                    labels: {
                        formatter: function (y) {
                            return y.toFixed(0);
                        },
                        style: {
                            colors: '#ffffff'
                        }
                    }
                },
                xaxis: {
                    type: 'datetime',
                    categories: categories,
                    labels: {
                        rotate: -90,
                        style: {
                            colors: '#ffffff',
                        }
                    }
                }
            };
        };

        return (
            <div id="column-chart">
                <Chart options={options} series={series} type="bar" height="100%" />
            </div>
        )
    }
}

export default ColumnChart;