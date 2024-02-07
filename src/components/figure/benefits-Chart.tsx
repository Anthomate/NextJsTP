'use client';

import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
    labels: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [
        {
            label: '',
            data: [3, 6, 4, 6, 7, 5, 6, 7, 8],
            fill: true,
            backgroundColor: (context:any) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.clientWidth, 0);
                gradient.addColorStop(0, 'rgba(210,241,253, 0.8)');
                gradient.addColorStop(0.25, 'rgba(229, 221, 253, 0.8)');
                gradient.addColorStop(0.5, 'rgba(255,156,220, 0.8)');
                gradient.addColorStop(0.75, 'rgba(255,212,201, 0.8)');
                gradient.addColorStop(1, 'rgba(252,227,152, 0.8)');
                return gradient;
            },
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.4,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 2,
            }
        },
    },
};

export default function BenefitsChart() {
    return <Line data={data} options={options} />;
}
