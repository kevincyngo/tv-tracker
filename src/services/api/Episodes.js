import axios from 'axios'

const searchURL = "search/shows?q="

export default {
    getShows(query) {
        return axios.get(searchURL + query).then(response => {
            return response.data;
        })
    },
    getEpisode(url) {
        return axios.get(url).then(response => {
            return response.data;
        })
    }

}