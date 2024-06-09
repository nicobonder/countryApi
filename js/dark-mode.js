const btnDark = document.querySelector('#btn-dark-mode'); //selecciona el boton de dark mode

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');//capturo el body y le agrego la clase togle, con los estilos de la clase dark-mode.
    
    if(document.body.className === 'dark-mode'){ //si el body tiene la clase dark-mode que esta en body.dark-mode
        btnDark.innerHTML = //entonces el boton debe cambiar de texto a light mode y cambia el icono
        ` 
        <i class="fa-regular fa-sun"></i>
        Light Mode
        `
    } else { // y si está en light mode
        btnDark.innerHTML = //le digo que el cuerpo del boton vuelva a esto
        `
        <i class="fa-regular fa-moon"></i>  
        Dark Mode
        `
    }
    /*Persistencia de la configuracion del dark mode---ACA USA SET*/
    if(document.body.classList.contains('dark-mode')){ //si el body tiene la clase dark-mode
        localStorage.setItem('darkMode', 'true'); //entonces guardo en localStorage la clave darkMode con el valor true. 
    } else {
        localStorage.setItem('darkMode', 'false'); //si no, guardo en localStorage la clave darkMode con el valor false
    }
});
/*Obtenemos el modo actual ---ACA USA EL GET*/
if(localStorage.getItem('darkMode') === 'true'){ //cuidado: true tiene que estar entre comillas, porque lo toma como una cadena y no un booleano
    document.body.classList.add('dark-mode'); //si el localStorage tiene la clave darkMode con el valor true, agrega la clase dark-mode al body
    btnDark.innerHTML = //el boton debe cambiar de texto a light mode y cambia el icono
        ` 
        <i class="fa-regular fa-sun"></i>
        Light Mode
        `
} else {
    document.body.classList.remove('dark-mode'); //si el localstorage no tiene el dark-mode, quita la clase dark-mode del body
    btnDark.innerHTML =
        `
        <i class="fa-regular fa-moon"></i>
        Dark Mode
        `
}

