import axios from 'axios'

const connection = axios.create({
  baseURL: 'http://oh-crop-be.herokuapp.com/api/v1'
})

export default {
  getAllPlants: () =>
  connection.get('/plants'),

  getRandomPlant: () =>
  connection.get('/plants/meet'),

  getPlantById: (id) =>
  connection.get(`/plants/${id}`),

  getPlantsBySearch: (query) =>
  connection.get('/plants/search',{
    params: { q: query }
  }),

  addToMyGarden: (id, name) => 
  connection.post(`/garden?plant_id=${id}&plant_name=${name}`),
  

  practice: () =>
  axios.get('https://jsonplaceholder.typicode.com/photos')

}
