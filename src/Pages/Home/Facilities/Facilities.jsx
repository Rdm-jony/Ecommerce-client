import FacilityCard from "../../../Components/FacilityCard/FacilityCard";
import offerImg from '../../../assets/deal/order.svg'
import deliveryImg from '../../../assets/deal/delivery.svg'
import dealImg from '../../../assets/deal/deal.svg'
import wideImg from '../../../assets/deal/wide.svg'
import returnImg from '../../../assets/deal/return.svg'


const Facilities = () => {
    return (
        <div className="flex justify-between">
            <FacilityCard title='Best prices & offers' image={offerImg}></FacilityCard>
            <FacilityCard title='
            Free delivery' image={deliveryImg}></FacilityCard>
            <FacilityCard title='Great daily deal' image={dealImg}></FacilityCard>
            <FacilityCard title='Wide assortment' image={wideImg}></FacilityCard>
            <FacilityCard title='Easy returns' image={returnImg}></FacilityCard>
        </div>
    );
};

export default Facilities;