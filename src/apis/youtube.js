import axios from 'axios';
const KEY='AIzaSyBVvFRdzlqq4GiCLuSq7tFu2bC6uqYDbto';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResult:5,
        key:KEY
    }
});