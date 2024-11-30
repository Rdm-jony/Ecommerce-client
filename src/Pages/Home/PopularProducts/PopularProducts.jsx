import ProductsCard from "../../../Components/ProductsCard/ProductsCard";

const PopularProducts = () => {
    return (
        <div >
            <h2 className="text-3xl font-semibold my-5">Popular Products</h2>
            <div className="grid grid-cols-4 gap-3">
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
            </div>
        </div>
    );
};

export default PopularProducts;