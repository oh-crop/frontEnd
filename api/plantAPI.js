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

  getAllGardenPlants: () =>
  connection.get('/garden'),

  getGardenPlantById: (id) => 
  connection.get(`/garden/plants/${id}`),

  deleteGardenPlant: (id) => 
  connection.delete(`/garden/plants/${id}`),

  waterPlant: (id) => 
  connection.put(`/garden/water?garden_plant_id=${id}`),

  practice: () =>
  axios.get('https://jsonplaceholder.typicode.com/photos')

}
