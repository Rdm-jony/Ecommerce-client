import axios from 'axios';

const imageUpload = async (formData) => {
    try {
        const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGDB_API}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (data?.success) {
            return data?.data.display_url;
        }
    } catch (er) {
        console.log(er)
      
    }
};

export default imageUpload;