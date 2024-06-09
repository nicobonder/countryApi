const banderas = document.getElementById('banderas') //tomo el main del index.html

document.addEventListener("DOMContentLoaded", e => {
    fetchData() //es un event listener que hace que se dispare el fetch cdo se carga el dom
})

const fetchData = async () => {
    try {
        //const res = await fetch('https://restcountries.com/v3.1/all') //en lugar de api.json uso la url de la api
        const res = await fetch('./api.json')
        const data = await res.json()
        //console.log(data)
        function SortArray(x, y) { //function que ordene a los paises por el nombre comun de A a Z
            if(x.name.common < y.name.common) {return -1}
            if(x.name.common > y.name.common) {return 1}
            return 0
        }
        var sorted = data.sort(SortArray); //Le digo que use la function esa para ordenar la data que viene de la respuesta de la api
        console.log(sorted);
        banderillas(sorted) // Uso sorted para ordenar banderillas, que es donde se acumulan los elementos
        clientForm(sorted) //es para poder usar la func creada en form.js y que tome la data
        filters(sorted) //viene de custom-select.js
    } catch (error) {
        console.log(error)
    }
}

const banderillas = sorted => { // banderillas toma a sorted como parametro y se crean los elementos
    let elementos = '' //primero se hace un elem vacio
    sorted.forEach(item => { //se recorre sorted y si el eleme de la data no tiene capital, devuelve
        const capitalC = function(item) { //no capital
            if(item.capital === undefined) { 
                return 'No capital city'
            }
            return item.capital //si tiene, devuelve el nombre de la capital
        }
        elementos += ` <!--Al elem vació le concateno todo esto-->
        <article class="card"> 
            <div class="card-img">
                <img src="${item.flags.svg}" alt="" class="img-fluid ">
            </div>
            <div class="card-content">
                <div><h3>${item.name.common}</h3></div>
                <div><p>
                    <b>Population: </b>
                    ${item.population.toLocaleString("es-ES")} <!--toLocalString permite dar formato a los numeros-->
                </p></div>
                <div><p>
                    <b>Capital: </b>
                    ${capitalC(item)}
                </p></div>
                <div><p>
                    <b>Region: </b>
                    ${item.region}
                </p></div>
            
                <div><b>
                    <a target="_blank" href="${item.maps.googleMaps}">Map</a>
                </b></div>
                <div><p>
                    <b>
                        <a href="country.html?name=${item.name.common}"></a>
                    </b>
                </p></div>
                
            </div>
        </article>

        
       
        `
    });
    banderas.innerHTML = elementos
}



//forEach ejecuta la function 1 vez por cada item
//como ya tengo acceso a esos item de la data, los pinto y le digo que a cada elemento le concatene lo que tenia article en HTML
//como tengo acceso a item de data puedo reemplazar el contenido que tenia en HTML y hacerlo dinamico