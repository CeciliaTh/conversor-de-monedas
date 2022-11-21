async function getMonedas() {
    try {
    const monedas = await fetch("https://mindicador.cl/api");
    const datosMonedas = await monedas.json();
    console.log(datosMonedas);
        let selectMonedas = document.querySelector('#selectMonedas')
       selectMonedas.innerHTML= `
       <option value="${datosMonedas.uf.valor}"> ${datosMonedas.uf.nombre}</option>`+
       `<option value="${datosMonedas.dolar.valor}"> ${datosMonedas.dolar.nombre}</option>`+
       `<option value="${datosMonedas.utm.valor}"> ${datosMonedas.utm.nombre}</option>`+
       `<option value="${datosMonedas.euro.valor}"> ${datosMonedas.euro.nombre}</option>`;
    
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

