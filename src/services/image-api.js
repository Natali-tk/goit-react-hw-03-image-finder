import axios from 'axios';

const key='21726262-6f53751bde553225c4af8487e';
const url='https://pixabay.com/api/';

 function fetchImages({ searchQuery, page}){
    return  axios
    .get(
        `${url}?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(response=>response.data.hits)
};


const Api={
    fetchImages,
}
export default Api;