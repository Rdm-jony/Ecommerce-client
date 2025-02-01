import { FaCloudUploadAlt } from "react-icons/fa";
import BtnLoader from "../../BtnLoader/BtnLoader";

const AdminButton = ({ loading }) => {
    return (
        <button type="submit" className={`w-full my-5 uppercase bg-primary btn text-lg text-white ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>{
            loading ? <span><BtnLoader> Loading...</BtnLoader></span> : <><FaCloudUploadAlt /> <span>Publish and view</span></>
        } </button>
    );
};

export default AdminButton;