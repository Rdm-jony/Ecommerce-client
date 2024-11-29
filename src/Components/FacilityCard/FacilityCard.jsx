
const FacilityCard = ({ image, title }) => {
    return (
        <div className="flex gap-5 p-5 rounded-lg group bg-gray-100">
            <img className="w-10 group-hover:mb-3 transition-all duration-500" src={image} alt="" />
            <div>
                <p className="font-semibold">{title}</p>
                <p className="font-semibold text-gray-400 mt-2">Orders $50 or more</p>
            </div>
        </div>
    );
};

export default FacilityCard;