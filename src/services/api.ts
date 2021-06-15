import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://wft-geo-db.p.rapidapi.com/v1/geo',
})
