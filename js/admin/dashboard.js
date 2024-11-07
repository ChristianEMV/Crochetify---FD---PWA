document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('ingresosChart').getContext('2d');
    const ingresosChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [
                {
                    label: 'Ingresos 2023',
                    data: [12000, 15000, 8000, 18000, 22000, 25000, 30000, 28000, 32000, 35000, 37000, 40000],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Ingresos 2022',
                    data: [10000, 14000, 9000, 16000, 21000, 24000, 29000, 27000, 31000, 34000, 36000, 39000],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});