const banderas = document.getElementById('banderas')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all') //en lugar de api.json ahi puedo pegar la url de la api
        const data = await res.json()
        //console.log(data)
        function SortArray(x, y) {
            if(x.name.common < y.name.common) {return -1}
            if(x.name.common > y.name.common) {return 1}
            return 0
        }
        var sorted = data.sort(SortArray);
        console.log(sorted);
        banderillas(sorted)
        clientForm(sorted) //es para poder usar la func creada en form.js y que tome la data
        filters(sorted)
    } catch (error) {
        console.log(error)
    }
}

const banderillas = sorted => {
    let elementos = ''
    sorted.forEach(item => {
        const capitalC = function(item) {
            if(item.capital === undefined) {
                return 'No capital city'
            }
            return item.capital
        }
        elementos += `
        <article class="card"> 
            <div class="card-img">
                <img src="${item.flags.svg}" alt="" class="img-fluid ">
            </div>
            <div class="card-content">
                <div><h3>${item.name.common}</h3></div>
                <div><p>
                    <b>Population: </b>
                    ${item.population}
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
                        <a href="country.html?name=${item.name.common}">Read More</a>
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