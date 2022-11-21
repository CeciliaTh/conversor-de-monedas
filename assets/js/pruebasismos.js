async function getAndCreateDataToChart() {
    const res = await fetch("https://api.gael.cloud/general/public/sismos");
    const sismos = await res.json();

    
    const labels = sismos.map((sismo) => {
        return sismo.Fecha;
    });
    const data = sismos.map((sismo) => {
        const magnitud = sismo.Magnitud.split(" ")[0];
        return Number(magnitud);
    });
    const datasets = [
        {
            label: "Sismo",
            borderColor: "rgb(255, 99, 132)",
            data
        }
    ];
    return { labels, datasets };
}
async function renderGrafica() {
    const data = await getAndCreateDataToChart();
    const config = {
    type: "line",
    data
    };
    const myChart = document.getElementById("myChart");
    myChart.style.backgroundColor = "white";
    new Chart(myChart, config);
    } 
    renderGrafica();