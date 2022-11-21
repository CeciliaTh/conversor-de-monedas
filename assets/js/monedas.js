
async function getMonedas() {
    try {
        const monedas = await fetch("https://mindicador.cl/api");
        const datosMonedas = await monedas.json();
        // return datosMonedas;
        // console.log(datosMonedas); para ver si cargaba bien el arreglo desde la API

        // Carga de elementos en el select 
        let selectMonedas = document.querySelector('#selectMonedas')
        selectMonedas.innerHTML =
            `<option value="${datosMonedas.uf.valor}"> ${datosMonedas.uf.nombre}</option>` +
            `<option value="${datosMonedas.dolar.valor}"> ${datosMonedas.dolar.nombre}</option>` +
            `<option value="${datosMonedas.utm.valor}"> ${datosMonedas.utm.nombre}</option>` +
            `<option value="${datosMonedas.euro.valor}"> ${datosMonedas.euro.nombre}</option>`;

        //Accion del boton para convertir
        let btnConvertir = document.querySelector('#conversor')
        btnConvertir.addEventListener('click', function () {
            let resultado = document.querySelector('#resultado')
            let inputMonedas = Number(document.querySelector('#inputMonedas').value)
            let tipoMoneda = parseInt(selectMonedas.value)
            console.log(tipoMoneda)
            console.log(inputMonedas)
            if (inputMonedas != '') {
                convertido = inputMonedas * tipoMoneda
                resultado.innerHTML = convertido
            } else {
                alert('Debe ingresar un valor numérico para calcular')

            }
        })
        inputMonedas.value = ''


    } catch (e) {
        alert(e.message);
    }
}

getMonedas();

//Cargando gráfico con los elementos del arreglo

// async function getMonedasParaGrafico() {

//     const endPoint = 'https://mindicador.cl/api';
//     const monedasGrafico = await fetch(endPoint);
//     const datosMonedasGrafico = await monedasGrafico.json();


//     function crearGraficoMonedas(monedasG) {

//         // Creamos las variables necesarias para el objeto de configuración
//         const tipoDeGrafica = "line";
//         const nombresDeLasMonedas = monedasG.map((monedaG) => monedaG.nombre);
//         const titulo = "Monedas";
//         const colorDeLinea = "green";
//         const valores = monedasG.map((monedaG) => {
//             const valor = monedaG.valor.replace(",", ".");
//             return Number(valor);
//         });


//         const config = {
//             type: tipoDeGrafica,
//             data: {
//                 labels: nombresDeLasMonedas,
//                 datasets: [{
//                     label: titulo,
//                     backgroundColor: colorDeLinea,
//                     data: valores
//                 }]
//             }
//         };
//         return config;
//     }
// }


// async function renderGrafica() {
//     const monedasG = await getMonedasParaGrafico();
//     const config = crearGraficoMonedas(monedasG);
//     const chartDOM = document.querySelector('#graficoMonedas')
//     new Chart(chartDOM, config)
// }
// renderGrafica();

//de la guía
// async function getMonedas() {
//     const endpoint = "https://api.gael.cloud/general/public/monedas";
//     const res = await fetch(endpoint);
//     const monedas = await res.json();
//     return monedas;
//     }  

// function prepararConfiguracionParaLaGrafica(monedas) {
//     // Creamos las variables necesarias para el objeto de configuración
//     const tipoDeGrafica = "line";
//     const nombresDeLasMonedas = monedas.map((moneda) => moneda.Codigo);
//     const titulo = "Monedas";
//     const colorDeLinea = "red";
//     const valores = monedas.map((moneda) => {
//     const valor = moneda.Valor.replace(",", ".");
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