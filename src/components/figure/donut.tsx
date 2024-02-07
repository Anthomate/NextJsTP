'use client';

import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart } from "chart.js";

const getGradient = (ctx:any, chartArea:any) => {
    const {left, right, top, bottom, width, height} = chartArea;
    let gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        width / 2
    );
    gradient.addColorStop(0, '#F0FF72');
    gradient.addColorStop(1, '#41F7A1');

    return gradient;
};

const data = {
    labels: ['NFT Assets', 'Stocks', 'Crypto'],
    datasets: [
        {
            label: '# of Votes',
            data: [17, 25, 58],
            backgroundColor: [
                '#F0FF72',
                '#F589F3',
                '#41F7A1',
            ],
            borderColor: [
                'rgba(255,99,132,0)',
                'rgba(54,162,235,0)',
                'rgba(255,206,86,0)',
            ],
            borderWidth: 1,
            cutout: '50%',
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right' as const,
        },
        title: {
            display: true,
            text: 'Capacities',
            position: 'bottom' as const,
        },
    },
};

Chart.register({
    id: 'centerText',
    afterDraw: function (chart) {
        const ctx = chart.ctx;
        const width = chart.width;
        const height = chart.height;

        ctx.restore();
        // Style pour "TOTAL"
        const totalFontSize = (height / 400).toFixed(2);
        ctx.font = totalFontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        const totalText = "TOTAL";
        const totalTextX = Math.round((width - ctx.measureText(totalText).width) / 3.2);
        const totalTextY = height / 2 - (parseInt(totalFontSize) * 24);
        ctx.fillText(totalText, totalTextX, totalTextY);

        // Style pour "$1,776"
        const amountFontSize = (height / 200).toFixed(2);
        ctx.font = "bold " + amountFontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        const amountText = "$1,776";
        const amountTextX = Math.round((width - ctx.measureText(amountText).width) / 3.5);
        const amountTextY = totalTextY + (parseInt(totalFontSize) * 24);
        ctx.fillText(amountText, amountTextX, amountTextY);

        ctx.save();
    }
});



export default function Donut() {
    const chartStyles = {
        maxWidth: '400px',
        maxHeight: '400px',
    };
    return (
        <div style={chartStyles}>
            <Doughnut data={data} options={options} />
        </div>
    );
};