
async function getMonedas() {
    try {
        const monedas = await fetch("https://mindicador.cl/api");
        const datosMonedas = await monedas.json();
        // return datosMonedas;
        // console.log(datosMonedas); para ver si cargaba bien el arreglo desde la API

        // Carga de elementos en el select 
        let selectMonedas = document.querySelector('#selectMonedas')
        selectMonedas.innerHTML =
        `<option value="uf"> ${datosMonedas.uf.nombre}</option>` +
        `<option value="dolar"> ${datosMonedas.dolar.nombre}</option>` +
        `<option value="utm"> ${datosMonedas.utm.nombre}</option>` +
        `<option value="euro"> ${datosMonedas.euro.nombre}</option>`;


        //Accion del boton para convertir
        let btnConvertir = document.querySelector('#conversor')
        btnConvertir.addEventListener('click', function () {
            let seleccionado = selectMonedas.value
            let resultado = document.querySelector('#resultado')
            let inputMonedas = document.querySelector('#inputMonedas').value
            if (seleccionado == 'uf' && inputMonedas != ''){
                let valorUF = Number(datosMonedas.uf.valor)
                let total =  Number(inputMonedas) / Number(valorUF)
                resultado.innerHTML = 'Tus $'+ inputMonedas+ ' pesos equivalen a: $'+total.toFixed(2).replace(".", ",") + ' ' +  datosMonedas.uf.nombre + ' (Valor actual: $' + valorUF +')'
            } else if (seleccionado == 'dolar' && inputMonedas != ''){
                let valorDolar = Number(datosMonedas.dolar.valor)
                let total = Number(inputMonedas) / Number(valorDolar)
                resultado.innerHTML = 'Tus $'+ inputMonedas+ ' pesos equivalen a: $'+total.toFixed(2).replace(".", ",") + ' ' +  datosMonedas.dolar.nombre + ' (Valor actual: $' + valorDolar +')'
            } else if (seleccionado == 'utm' && inputMonedas != ''){
                let valorUTM = Number(datosMonedas.utm.valor)
                let total = Number(inputMonedas) /  Number(valorUTM)
                resultado.innerHTML = 'Tus $'+ inputMonedas+ ' pesos equivalen a: $'+total.toFixed(2).replace(".", ",") + ' ' +  datosMonedas.utm.nombre + ' (Valor actual: $' + valorUTM +')'
            }else if (seleccionado == 'euro' && inputMonedas != ''){
                let valorEuro = Number(datosMonedas.euro.valor)
                let total = Number(inputMonedas) / Number(valorEuro)
                resultado.innerHTML = 'Tus $'+ inputMonedas+ ' pesos equivalen a: $'+total.toFixed(2).replace(".", ",") + ' ' +  datosMonedas.euro.nombre + ' (Valor actual: $' + valorEuro +')'
            } else {
            alert('Debe ingresar un valor numérico para calcular')
            resultado.innerHTML = ''
        }
    })
    inputMonedas.value = ''

    } catch (e) {
        alert(e.message);
    }
}

getMonedas();

//Cargando gráfico con los elementos del arreglo

//de la guía
// async function getMonedas() {
//     const endPoint = "https://mindicador.cl/api";
//     const resultado = await fetch(endPoint);
//     const monedas2 = await resultado.json();
//     return monedas2;
//     }  

// function prepararConfiguracionParaLaGrafica(monedas2) {
//     // Creamos las variables necesarias para el objeto de configuración
//     const tipoDeGrafica = "line";
//     const nombresDeLasMonedas = monedas2.map((moneda) => moneda.codigo);
//     const titulo = "Monedas";
//     const colorDeLinea = "red";
//     const valores = monedas2.map((moneda) => {
//     const valor = moneda.valor.replace(",", ".");
//     return Number(valor);
//     });

// Creamos el objeto de configuración usando las variables anteriores
// const config = {
//     type: tipoDeGrafica,
//     data: {
//         labels: nombresDeLasMonedas,
//         datasets: [
// {
    //     label: titulo,
    //     backgroundColor: colorDeLinea,
    //     data: valores
    //     }
    //     ]
    //     }
    //     };
    //     return config;
    //     }

    // async function renderGrafica() {
    //     const monedas = await getMonedas();
    //     const config = prepararConfiguracionParaLaGrafica(monedas);
    //     const chartDOM = document.getElementById("myChart");
    //     new Chart(chartDOM, config);
    //     } r
    //     enderGrafica();

    // async function getAndCreateDataToChart() {
    //     const endPoint = "https://mindicador.cl/api";
    //     const resultado = await fetch(endPoint);
    //     // const sismos = await resultado.json();
    //     const monedasG = await resultado.json();
    
    
    //     const labels = monedasG.map((monedaG => {
    //         return monedaG.codigo;
    //     });

    //     const data = monedasG.map((sismo) => {
    //         const magnitud = sismo.Magnitud.split(" ")[0];
    //         return Number(magnitud);
    //     });
    //     const datasets = [
    //         {
    //             label: "Sismo",
    //             borderColor: "rgb(255, 99, 132)",
    //             data
    //         }
    //     ];
    //     return { labels, datasets };
    // }
    // async function renderGrafica() {
    //     const data = await getAndCreateDataToChart();
    //     const config = {
    //     type: "line",
    //     data
    //     };
    //     const myChart = document.getElementById("myChart");
    //     myChart.style.backgroundColor = "white";
    //     new Chart(myChart, config);
    //     } 
    //     renderGrafica();

    //de Alfonso
    // function getChart(){  
        // chart = new Chart(ctx, { 
        //     type: 'line', 
        //     data: { datasets:[{ 
        //         label: cod.charAt(0).toUpperCase() + cod.slice(1), 
        //         data: serie, borderColor: '#0d6efd', 
        //         backgroundColor: '#0d6efd', }] }, 
        //         options: { scales: { x: { 
        //             ticks: { callback: function(v, i, ticks) { 
        //                 let date = new Date(serie[i].fecha); 
        //                 return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; 
        //             } } } }, 
        //             parsing: { 
        //                 xAxisKey: 'fecha', 
        //                 yAxisKey: 'valor' } } });}
