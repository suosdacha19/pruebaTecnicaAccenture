import axios from 'axios';
export default (offset = 0,limit = 20) =>
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
