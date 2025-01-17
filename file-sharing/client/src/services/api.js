import axios from 'axios';

const API_URI = 'http://localhost:8001';

export const uploadFile = async (data) => {
    try {
        let response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}