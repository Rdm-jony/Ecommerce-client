import axios from "axios";

const instance = axios.create({
    baseURL: 'https://ecommerce-server-flax-eight.vercel.app',

});
const useAxiosPublic = () => {

    return instance;
};

export default useAxiosPublic;