var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Stolen Sandwiches', 'Sidewalks Vandalized', 'Empty Lots Set on Fire', 'Crimes Committed by Squirrels', 'Pidgeons'],
        datasets: [{
            label: 'KC Crime Stats',
            data: [150, 1443, 5159, 7099, 3070],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 3,
        }]
    },
    options: {
        animations: {
            animateRotate: true
        },
        title: {
            display: true,
            text: 'KANSAS CITY CRIME STATISTICS',
            fontColor: 'rgba(255, 255, 255, 1)',
            fontSize: 50
        }
    }
});