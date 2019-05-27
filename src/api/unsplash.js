import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ba566d10aa8d81856b3274170494f2e442f01291539fcb409970cac59faa9dd8'
    }
})