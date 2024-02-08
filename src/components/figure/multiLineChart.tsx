import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

type ChartData = {
    labels: string[];
    datasets: Array<{
        label: string;
        data: number[];
        borderColor: string;
        borderWidth: number;
        borderDash?: number[];
        tension: number;
    }>;
};

type ApiResponse = {
    chartData: ChartData;
};

const defaultChartData: ChartData = {
    labels: [],
    datasets: []
};

export default function MultiLineChart() {
    const [chartData, setChartData] = useState<ChartData>(defaultChartData);

    useEffect(() => {
        fetch('../../lib/endpoints/chart-data')
            .then(response => response.json())
            .then((data: ApiResponse) => {
                setChartData(data.chartData);
            })
            .catch(error => console.error('Error fetching chart data:', error));
    }, []);

    // Options pour Chart.js
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    };

    return <Line data={chartData} options={options} />;
}
