import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f24504f25996778212b6bbaed0452c85a1f8bdb26b5e0f78a466db716093a167'
    }
});