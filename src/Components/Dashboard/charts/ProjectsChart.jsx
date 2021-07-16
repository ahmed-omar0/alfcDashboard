import React from 'react'
import { Line } from 'react-chartjs-2';

export default function ProjectsChart() {
    const data = {
        labels: ['jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Projects of 2021',
            data: [30, 40, 45, 35, 50, 45, 55, 76, 70, 77, 80, 78],
            borderColor: ['#2dce89'],
            pointBackgroundColor: 'red',
            pointBorderColor: 'red',
        }]  
    }
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Projects Chart',
                color : 'blue',
                font: {
                    weight: 'light',
                    size: 30
                }
            },
        },
        scales: {
            yAxes: 
                {
                    beginAtZero: true,
                    ticks: {
                        min: 0,
                        max: 80,
                    }
                }
        },
        maintainAspectRatio: false 
    }
    return (
        <Line
            height = {'340px'}
            data = {data}
            options = {options}
        />
    )
}
