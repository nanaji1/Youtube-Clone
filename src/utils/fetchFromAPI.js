import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': "3bf15660f9msh12e3eeeb1ee9c81p1a25d1jsn990a2f8f33da",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async(url)=>{
const {data} = await axios.get(`${BASE_URL}/${url}`, options);

return data;
}