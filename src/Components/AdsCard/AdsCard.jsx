import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCategory, setSubCategory } from "../../Redux/Features/ProuctListingSlice";

const AdsCard = ({ card }) => {
    const disPatch=useDispatch()
    return (
        <div className="overflow-hidden rounded-lg">
            <Link to='listing' state={card?.categoryName}>            <img onClick={() => {
                disPatch(setCategory(card?.categoryName))
                disPatch(setSubCategory(card?.subCategoryName?card?.subCategoryName:''))
            }} className="h-40 rounded-lg shadow-md border-2 hover:scale-110 transition-all duration-500 cursor-pointer" src={card?.bannerImg} alt="" />
            </Link>
        </div>
    );
};

export default AdsCard;