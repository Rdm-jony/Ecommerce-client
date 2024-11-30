import { Link } from "react-router-dom";

const ListingTitle = () => {
    return (
        <div className="bg-indigo-100 p-5 px-10 rounded-xl">
            <h2 className="font-bold text-3xl mb-3">Fashion</h2>
            <div className="space-x-3">
                <Link className="text-xl">Home</Link>
                <Link className="text-xl">Fashion</Link>
                <Link className="text-xl">Man</Link>
            </div>
        </div>
    );
};

export default ListingTitle;