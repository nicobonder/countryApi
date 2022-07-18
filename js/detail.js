const banderas = document.getElementById('banderas')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all') //en lugar de api.json ahi puedo pegar la url de la api
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

        const subregionC = function(item) {
            if(item.subregion === undefined) {
                return 'N/A'
            }
            return item.subregion   
        }

        const currenciesC = function(item) {
            if(item.currencies === undefined) {
                return 'No official currencies'
            }
            return item.currencies[Object.keys(item.currencies)[0]].name 

           
        }

        const languagesC = function(item) {
            if(item.languages === null) {
                return 'N/A'}    
            if(item.languages === undefined) {
                return 'No official languages'}  

            if(item.languages.value !== null) {
                return Object.values(item.languages).toString().split(',').join(', ')
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
                    ${item.population.toLocaleString("es-ES")}
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
                    ${subregionC(item)}
                </p>
                <p>
                <b>Languages: </b>
                    ${languagesC(item)}
                </p>
                <p>
                    <b>Currency: </b>
                    ${currenciesC(item)}
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

/*
     <p>
        <b>Languages: </b>
        ${Object.values(item.languages).toString().split(',').join(', ')}
    </p>
                    <p>
                    <b>Currency: </b>
                    ${item.currencies[Object.keys(item.currencies)].name}
                    
                </p>


    */

