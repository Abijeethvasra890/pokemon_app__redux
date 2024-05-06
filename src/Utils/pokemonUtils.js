import axios from "axios";

export const getImageURL = (id) => {
    const paddedId = id > 9 ? `0${id}` : `00${id}`;
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`;
  };
 
export async function fetchData(apiURL) {
    try {
        const response = await axios.get(apiURL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
}