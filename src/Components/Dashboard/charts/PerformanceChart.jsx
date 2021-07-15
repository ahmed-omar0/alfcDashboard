import { Bar } from 'react-chartjs-2';

const PerformanceChart = () => {
    const data = {
        labels: ['jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Sales of 2021 (Thousand)',
            data: [20, 30, 35, 45, 50, 45, 55, 76, 70, 77, 80, 82],
            backgroundColor: ['#9a1e1e'],
            borderColor: ['#ffff006b'],
            borderWidth: 1
        }]  
    }
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Performance Chart',
                color : 'blue',
                font: {
                    weight: 'light',
                    size: 30
                }
            }
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 90,
                        stepSize: 10,
                    }
                }
            ]
        },
        maintainAspectRatio: false 
    }
    return (
        <Bar
            height = {'300px'}
            data = {data}
            options={options}
        />
    )

}
export default PerformanceChart