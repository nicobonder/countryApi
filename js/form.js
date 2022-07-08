const formulario = document.getElementById('formulario');
const inputFormulario = document.getElementById('inputFormulario');

const clientForm = data => {
     formulario.addEventListener('keyup', e => { 
        e.preventDefault()
        const letraCliente = inputFormulario.value.toLowerCase() 
         
        const arrayFiltrado = data.filter(item => {
            return item.name.common.toLowerCase().includes(letraCliente)
        })
        banderillas(arrayFiltrado)
    })
}  //Capturo la data en app.js y le paso esa info al form

/*
const form = document.getElementById('form');
const inputForm = document.getElementById('inputForm');

const clientForm = data => {
     form.addEventListener('keyup', e => { //prevenir que se reinicie la pagina cada vez que el usuario hsuelta la tecla
        e.preventDefault()
        const letraCliente = inputForm.value.toLowerCase() //sirve para guardar la letra que presiono el usuario
        //console.log(letraCliente)        toLowerCase es pa que todo este en minuscula y no tener problemas cdo el usuario pone una mayuscula
        const arrayFiltered = data.filter(item => {  //va a ser una array en la que se van a guardar los elem que contengan las letras q escribio el usuario
            const letraApi = item.name.toLowerCase()       //y devuelve lo q escribio el cli pero solo lo q coincida con lo que viene de la api
            if (apiKey.indexOf(clientKey) !== -1) {  //si lo que esta en la api contiene a lo que pide el cliente devuelve el item. Si da -1 el item no esta en la array
                return item
            }
        })
        console.log(arrayFiltered)   
    })
}  //Capturo la data en app.js y le paso esa info al form

*/