import fashionImg from '../../../assets/category/fashion.webp'
import electronicImg from '../../../assets/category/electronics.webp'
import bagImg from '../../../assets/category/bags.webp'
import footImg from '../../../assets/category/footwear.webp'
import groceryImg from '../../../assets/category/groceries.webp'
import beautyImg from '../../../assets/category/beauty.webp'
import wellImg from '../../../assets/category/wellness.webp'
import jwlleryImg from '../../../assets/category/jwellery.webp'

const Category = () => {
    const categoryImages = [
        {
            image: fashionImg,
            name: 'Fashion',
            bgColor: '#ECFFEC'
        },
        {
            image: electronicImg,
            name: 'Electronics',
            bgColor: '#FEEFEA'
        },
        {

            image: bagImg,
            name: 'Bags',
            bgColor: '#FDF0FF'
        },
        {
            image: footImg,
            name: 'Footwear',
            bgColor: '#DEF3FF'
        },
        {
            image: groceryImg,
            name: 'Groceries',
            bgColor: '#FFE8F8'
        },
        {
            image: beautyImg,
            name: "Beauty",
            bgColor: '#E3FFFA'
        },
        {
            image: wellImg,
            name: 'Wellness',
            bgColor: '#FFF3FF'
        },
        {
            image: jwlleryImg,
            name: "Jewellery",
            bgColor: '#D3FFD9'
        }
    ]

    return (
        <div>
            <h2 className="text-3xl font-semibold">Featured Categories
            </h2>
            <div className='flex justify-between mt-5'>
                {
                    categoryImages.map((cat, idx) => <div key={idx}>
                        <div style={{ backgroundColor: cat.bgColor }} className={`rounded-full hover:scale-110  hover:shadow-xl hover:border-4  transition-all duration-500 border-2 p-5 w-28 h-28 shadow-lg flex justify-center items-center`}>
                            <img src={cat.image} alt="" />
                        </div>
                        <p className='text-center mt-5 font-semibold'>{cat.name}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;