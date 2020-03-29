// external dependencies
import axios from 'axios';

// internal dependencies
import { API_URL } from '../Constants';

class SpacesDataService {

    createSpace(space) {
        return axios.post(`${API_URL}/spaces`, space)
    }

    getAllSpaces() {
        return axios.get(`${API_URL}/spaces`)
    }

    deleteSpace(externalId) {
        return axios.delete(`${API_URL}/spaces/${externalId}`)
    }

}

export default new SpacesDataService();