const banderas = document.getElementById('banderas')
const query = new URLSearchParams(window.location.search) //para obtener el parametro de la url desde la barra de busqueda. Toma lo que vendría después del "?"
const params = query.get('name') //obtengo el parametro de la url a traves del parametro "name"
console.log(params)

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all') // la url de la api
        const data = await res.json()

        const dataFiltered = data.filter(item => item.name.common === params) // filtro los datos por el name.common de la data

        banderillas(dataFiltered)
        
    } catch (error) {
        console.log(error)
    }
}



const banderillas = data => {
    
    let elementos = '' //crea un elemento vacio
    data.forEach(item => {  //recorre la data y le agrega toda esta info al elemento vacio
        const giniC = function(item) { //como hay paises que no tienen toda la info
            if(item.gini === undefined) { //tengo que hacer estas condicionales para que no salte error
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


