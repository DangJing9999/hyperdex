import React from 'react';
import Chart from 'react-apexcharts';

const options = {
    chart: {
        type: 'area',
        height: 400,
        zoom: { enabled: false },
        toolbar: { show: false },
    },
    colors: ['#ff9966'],
    fill: { colors: ['#9966cc'] }, // 5d01be
    dataLabels: { 
        enabled: false,
        style: {
            colors: ['#ffffff']
        } 
    },
    stroke: { curve: 'smooth' },
    xaxis: { 
        type: 'datetime', 
        labels: {
            style: {
                colors: '#ffffff',
            }
        }
    },
    yaxis: { 
        opposite: false,
        labels: {
            style: {
                colors: '#ffffff'
            }
        }
    },
    legend: { horizontalAlign: 'left' },
};

function AreaChart(props) {
    const series = [{ name: "AUM", data: props.data || [] }];
    return (
        <div id="area-chart">
            <Chart options={options} series={series} type="area" height="100%" />
        </div>
    )
}

export default AreaChart;