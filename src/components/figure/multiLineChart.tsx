'use client';

import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
        {
            label: '1',
            data: [20, 23, 22, 20, 20, 19, 19, 19, 19, 22, 23, 24], // Exemple de données pour Dataset 1
            borderColor: '#d000ff',
            borderWidth: 2,
            borderDash: [5, 5],
            tension: 0.4
        },
        {
            label: '2',
            data: [5, 12, 10, 18, 25, 22, 22, 23, 17, 18, 18, 27], // Exemple de données pour Dataset 2
            borderColor: '#2dd087',
            borderWidth: 2,
            tension: 0.4
        }
    ]
};

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

export default function MultiLineChart() {
    return <Line data={data} options={options} />;
}
