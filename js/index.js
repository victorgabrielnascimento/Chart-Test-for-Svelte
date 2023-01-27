let ctx = document.getElementById('chart').getContext('2D');
let chart = new Chart(ctx, {
    type:'horizontalBar',
    data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgba(255, 99, 132',
            borderColor:'rgba(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },
    options: {}
})