import AdsCard from "../../../Components/AdsCard/AdsCard";
import cardImg1 from '../../../assets/ads/card1.webp'
import cardImg2 from '../../../assets/ads/card2.webp'
import cardImg3 from '../../../assets/ads/card3.webp'
import cardImg4 from '../../../assets/ads/card4.webp'

const AdsCards = () => {
    const cards = [cardImg1, cardImg2, cardImg3, cardImg4]
    return (
        <div className="flex gap-5">
            {

                cards.map((card, idx) => <AdsCard key={idx} image={card}></AdsCard>)
            }

        </div>
    );
};

export default AdsCards;