
const AdsCard = ({ image }) => {
    return (
        <div className="overflow-hidden rounded-lg ">
            <img className="h-40 rounded-lg shadow-md border-2 hover:scale-110 transition-all duration-500" src={image} alt="" />
        </div>
    );
};

export default AdsCard;