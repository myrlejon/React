import { useState } from 'react'
import PokemonService from '../shared/api/service/PokemonService'

export const HomeView = () => {
    const [data, setData] = useState()
    const [search, setSearch] = useState("")

    const fetchDataFromExternalAPI = () => {
        PokemonService.searchForPokemon(search.toLowerCase())
            .then((response) => setData(response.data))
            .catch((error) => console.log(error))
    }

    
// Gjorde om arrayen så att den returnerar med .map() funktionen
// La till console.log(map), ett API anropp görs varje gång en bokstav läggs till

const displayData = () => {

    if(data) {
        const array = [data.sprites.front_default, data.name, data.id, data.weight, data.height, data.types[0].type.name]
        const map = array.map(x => x)
        console.log(map)

        return (
            <ul>
                <img src={array[0]} />
                {array.map((element, i) =>
                    <li key={i}>{element}</li>
                )}
            </ul>
        )
        
        // Kommenterade bort det visuellt snyggare sättet att returnera en array eftersom uppgiften handlar om funktionalitet.

        /*<div>
            <h3>name: {array[1]}</h3>
            <h3>id: {array[2]}</h3>
            <h3>weight: {array[3]}</h3>
            <h3>height: {array[4]}</h3>
            <h3>type: {array[5]}</h3>
        </div>
        */
    }
}



    return (
        <div>
            <span>Search for pokemon: </span>
            <input onChange={(event) => setSearch(event.target.value)}/>

            <br />
            <button onClick={() => fetchDataFromExternalAPI()}>API call</button>
            {displayData()}
        </div>
    )
}