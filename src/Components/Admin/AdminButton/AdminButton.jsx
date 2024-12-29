import { FaCloudUploadAlt } from "react-icons/fa";
import BtnLoader from "../../BtnLoader/BtnLoader";

const AdminButton = ({ loading }) => {
    return (
        <button type="submit" disabled={loading ? true : false} className="w-full uppercase bg-primary btn text-lg text-white">{
            loading ? <BtnLoader></BtnLoader> : <><FaCloudUploadAlt /> <span>Publish and view</span></>
        } </button>
    );
};

export default AdminButton;