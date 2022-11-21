
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
            
          
    } catch (e) {
    alert(e.message);
    }
    }

    getMonedas();

    //Cargando gráfico con los elementos del arreglo

    async function getMonedasParaGrafico() {  
        const monedasGrafico = await fetch("https://mindicador.cl/api");
        const datosMonedasGrafico = await monedasGrafico.json();
        return datosMonedasGrafico;
    }

        function crearGraficoMonedas (monedasG) {
     
            // Creamos las variables necesarias para el objeto de configuración
            const tipoDeGrafica = "line";
            const nombresDeLasMonedas = monedasG.map((monedaG) => monedaG.codigo);
            const titulo = "Monedas";
            const colorDeLinea = "green";
            const valores = monedasG.map((monedaG) => {
            const valor = monedaG.valor.replace(",", ".");
            return Number(valor);
            });
            const config = {
                type: tipoDeGrafica,
                data: {
                labels: nombresDeLasMonedas,
                datasets: [{
                label: titulo,
                backgroundColor: colorDeLinea,
                data: valores
                }]}
                };
                return config;
                }
                async function renderGrafica() {
                    const monedasG = await getMonedasParaGrafico();
                    const config = crearGraficoMonedas(monedasG);
                    const chartDOM = document.querySelector('#graficoMonedas')
                    new Chart(chartDOM, config)
                    }
                    renderGrafica();
   
       
  