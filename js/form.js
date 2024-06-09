const formulario = document.getElementById('formulario'); //formulario es el id del form en index.html
const inputFormulario = document.getElementById('inputFormulario'); //es el input del html

const clientForm = data => {
     formulario.addEventListener('keyup', e => { //prevenir que se reinicie la pagina cada vez que el usuario suelta la tecla
        e.preventDefault()
        const letraCliente = inputFormulario.value.toLowerCase() //sirve para guardar la letra que presiono el usuario
         
        const arrayFiltrado = data.filter(item => { //va a ser una array en la que se van a guardar los elem que contengan las letras q escribio el usuario
            return item.name.common.toLowerCase().includes(letraCliente) // toLowerCase es pa que todo este en minuscula y no tener problemas cdo el usuario pone una mayuscula
        })
        banderillas(arrayFiltrado)
    })
}  //Capturo la data en app.js y le paso esa info al form

