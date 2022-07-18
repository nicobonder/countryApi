const btnDark = document.querySelector('#btn-dark-mode');

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');//capturo el body y le agrego la clase togle, con los estilos de la clase dark-mode.
    
    if(document.body.className === 'dark-mode'){ //si el body tiene la clase dark-mode que esta en body.dark-mode
        btnDark.innerHTML =
        ` 
        <i class="fa-regular fa-sun"></i>
        Light Mode
        `
    } else {
        btnDark.innerHTML = //le digo que el cuerpo del boton cambie y sea esto
        `
        <i class="fa-regular fa-moon"></i>  
        Dark Mode
        `     
    }
    /*Persistencia de la configuracion del dark mode*/
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('darkMode', 'true');
    } else {
        localStorage.setItem('darkMode', 'false');
    }
});
/*Obtenemos el modo actual*/
if(localStorage.getItem('darkMode') === 'true'){ //cuidado: true tiene que estar entre comillas, porque lo toma como una cadena y no un booleano
    document.body.classList.add('dark-mode');
    btnDark.innerHTML =
        ` 
        <i class="fa-regular fa-sun"></i>
        Light Mode
        `
} else {
    document.body.classList.remove('dark-mode');
    btnDark.innerHTML =
        `
        <i class="fa-regular fa-moon"></i>
        Dark Mode
        `
}

