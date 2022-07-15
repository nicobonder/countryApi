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
        const giniC = function(item) {
            if(item.gini === undefined) {
                return 'N/A'}    

            if(item.gini.value !== "") {
                return item.gini[Object.keys(item.gini)]
            }
        }
        const capitalC = function(item) {
            if(item.capital === undefined) {
                return 'No capital city'
            }
            return item.capital
        }
        elementos += `
        <article class="card"> 
            <img src="${item.flags.svg}" alt="" class="img-fluid">
            <div class="card-content detail">
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
                <p>
                    <b>Subregion: </b>
                    ${item.subregion}
                </p>
                <p>
                    <b>Currency: </b>
                    ${item.currencies[Object.keys(item.currencies)].name}
                </p>
                <p>
                    <b>Languages: </b>
                    ${Object.values(item.languages).toString().split(',').join(', ')}
                </p>
                <p>
                    <b>Gini: </b>
                    ${giniC(item)}
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

/*<p>
    <b>Gini: </b>
    ${item.gini[Object.keys(item.gini)]}
    </p>
                <p>
                    <b>Languages: </b>
                    ${item.languages[Object.keys(item.languages)[0]]}, ${item.languages[Object.keys(item.languages)[1]]}
                </p>


    */

