import AdsCard from "../../../Components/AdsCard/AdsCard";
import { useGetHomeBannerQuery } from "../../../Redux/api/baseApi";

const AdsCards = () => {
    const { data: homeBanner } = useGetHomeBannerQuery()
    console.log(homeBanner)
    return (
        <div className="flex justify-center gap-5">
            {

                homeBanner?.map((card, idx) => <AdsCard key={idx} card={card}></AdsCard>)
            }

        </div>
    );
};

export default AdsCards;