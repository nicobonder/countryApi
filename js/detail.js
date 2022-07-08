const banderas = document.getElementById('banderas')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json') //en lugar de api.json ahi puedo pegar la url de la api
        const data = await res.json()

        const dataFiltered = data.filter(item => item.name.common === params)

        banderillas(dataFiltered)
        
    } catch (error) {
        console.log(error)
    }
}

const banderillas = data => {
    let elementos = ''
    data.forEach(item => { 
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
                    ${item.capital}
                </p>
                <p>
                    <b>Region: </b>
                    ${item.region}
                </p>
                <p>
                    <b>Subregion: </b>
                    ${item.subregion}
                </p>
                <p>
                    <b>Currency: </b>
                    ${item.currencies}
                </p>
                <p>
                    <b>Languages: </b>
                    ${item.languages}
                </p>
                <b>
                    <a target="_blank" href="${item.maps.googleMaps}">Map</a>
                </b>
                
            </div>
        </article>
        `
    });
    banderas.innerHTML = elementos
}