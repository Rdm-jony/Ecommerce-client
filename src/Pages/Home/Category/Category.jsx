
import useGetDataPublic from '../../../Hooks/useGetDataPublic'
import BtnLoader from '../../../Components/BtnLoader/BtnLoader'
import { Link, useNavigate } from 'react-router-dom';
import { setCategory, setSubCategory } from '../../../Redux/Features/ProuctListingSlice';
import { useDispatch } from 'react-redux';

const Category = () => {
    const dispath = useDispatch()
    const [data, loading] = useGetDataPublic('category', '/category', [])
    if (loading) {
        return <BtnLoader></BtnLoader>
    }

    return (
        <div>
            <h2 className="text-3xl font-semibold">Featured Categories
            </h2>
            <div className='flex justify-between mt-5'>
                {
                    data?.map((cat, idx) => <div key={idx}>

                        <Link to='listing' state={cat}>
                            <div onClick={() => {
                                dispath(setCategory(cat?.categoryName))
                                dispath(setSubCategory(''))
                            }} style={{ backgroundColor: cat?.categoryColor }} className={`rounded-full hover:scale-110  hover:shadow-xl hover:border-4  transition-all duration-500 border-2 p-5 w-28 h-28 shadow-lg flex justify-center items-center`}>
                                <img src={cat?.categoryImg} alt="" />
                            </div>
                        </Link>

                        <p className='text-center mt-5 font-semibold uppercase'>{cat?.categoryName}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;