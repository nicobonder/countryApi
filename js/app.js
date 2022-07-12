const banderas = document.getElementById('banderas')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json') //en lugar de api.json ahi puedo pegar la url de la api
        const data = await res.json()
        //console.log(data)
        banderillas(data)
        clientForm(data) //es para poder usar la func creada en form.js y que tome la data
        filters(data)
    } catch (error) {
        console.log(error)
    }
}

const banderillas = data => {
    let elementos = ''
    data.forEach(item => {
        const capitalC = function(item) {
            if(item.capital === undefined) {
                return 'No capital city'
            }
            return item.capital
        }
        elementos += `
        <article class="card"> 
            <img src="${item.flags.svg}" alt="" class="img-fluid">
            <div class="card-content">
                <h3>${item.name.common}</h3>  
                <p>
                    <b>Population: </b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital: </b>
                    ${capitalC(item)}
                </p>
                <p>
                    <b>Region: </b>
                    ${item.region}
                </p>
              
                <b>
                    <a target="_blank" href="${item.maps.googleMaps}">Map</a>
                </b>
                <p>
                    <b>
                        <a href="country.html?name=${item.name.common}">Read More</a>
                    </b>
                </p>
                
            </div>
        </article>
        `
    });
    banderas.innerHTML = elementos
}

//forEach ejecuta la function 1 vez por cada item
//como ya tengo acceso a esos item de la data, los pinto y le digo que a cada elemento le concatene lo que tenia article en HTML
//como tengo acceso a item de data puedo reemplazar el contenido que tenia en HTML y hacerlo dinamico