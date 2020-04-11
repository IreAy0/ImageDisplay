import axios from 'axios'

export default  axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID PtvnIUOYlothKDt0v93uDrG5t_yGf_5zfi3jgmnreJo'
      }
});
