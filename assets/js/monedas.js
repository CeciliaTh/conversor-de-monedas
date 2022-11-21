
async function getMonedas() {
    try {
    const monedas = await fetch("https://mindicador.cl/api");
    const datosMonedas = await monedas.json();
    // return datosMonedas;
    // console.log(datosMonedas); para ver si cargaba bien el arreglo desde la API

    // Carga de elementos en el select 
        let selectMonedas = document.querySelector('#selectMonedas')
       selectMonedas.innerHTML= 
       `<option value="${datosMonedas.uf.valor}"> ${datosMonedas.uf.nombre}</option>`+
       `<option value="${datosMonedas.dolar.valor}"> ${datosMonedas.dolar.nombre}</option>`+
       `<option value="${datosMonedas.utm.valor}"> ${datosMonedas.utm.nombre}</option>`+
       `<option value="${datosMonedas.euro.valor}"> ${datosMonedas.euro.nombre}</option>`;

        //Accion del boton para convertir
       let btnConvertir = document.querySelector('#conversor')
       btnConvertir.addEventListener('click', function(){
        let resultado = document.querySelector('#resultado')
        let inputMonedas = Number(document.querySelector('#inputMonedas').value)
        let tipoMoneda = parseInt(selectMonedas.value)
        console.log(tipoMoneda)
        console.log(inputMonedas)
        if (inputMonedas != '') {
            convertido = inputMonedas * tipoMoneda
            resultado.innerHTML = convertido 
        }else{
            alert('Debe ingresar un valor numérico para calcular')
           
             }
        })
        inputMonedas.value = ''      
            
      
       
    //    //Cargando gráfico con los elementos del arreglo
      
    //    function crearGraficoMonedas (datosMonedas) {
     
    //     // Creamos las variables necesarias para el objeto de configuración
    //     const tipoDeGrafica = "line";
    //     const nombresDeLasMonedas = datosMonedas.map((moneda) => moneda.Codigo);
    //     const titulo = "Monedas";
    //     const colorDeLinea = "green";
    //     const valores = datosMonedas.map((moneda) => {
    //     const valor = moneda.Valor.replace(",", ".");
    //     return Number(valor);
    //     });
    //     const config = {
    //         type: tipoDeGrafica,
    //         data: {
    //         labels: nombresDeLasMonedas,
    //         datasets: [{
    //         label: titulo,
    //         backgroundColor: colorDeLinea,
    //         data: valores
    //         } ] }
    //         };
    //         return config;
    //         }
    //         async function renderGrafica() {
    //             const monedas = await getMonedas();
    //             const config = crearGraficoMonedas(datosMonedas);
    //             const chartDOM = document.querySelector("#graficoMonedas");
    //             new Chart(chartDOM, config);
    //             }

    //             renderGrafica();       
    } catch (e) {
    alert(e.message);
    }
    }

    getMonedas();

