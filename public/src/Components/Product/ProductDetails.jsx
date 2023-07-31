import { useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';
import { useQuery } from 'react-query';
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    // const HandleAddToCart = (e) => {
    //     const user_id = localStorage.getItem('user_id');
    //     const prodDetails = {
    //         prodId: prodId,
    //         prodTitle: title,
    //         prodImg: img,
    //         prodPrice: price,
    //         prodQty: qty,
    //         prodCategory: category,
    //     }
    //     fetch('http://localhost:5000/add_to_cart', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(prodDetails)
    //     }).then(resp => {
    //         console.log(resp);
    //         return resp.json();
    //     }).then(
    //         console.log("success")
    //     )
    // }
    const { id } = useParams();
    const fetchProductDetails = async () => {
        const response = await fetch(`http://localhost:5000/product/details/${id}`)
        if (!response) console.log('error');
        return response.json();
    };
    const { data, isLoading, error, refetch } = useQuery('prod', fetchProductDetails);

    if (isLoading) return <p>loading...</p>
    if (error) console.log(error);

    // useEffect(() => {
    //     refetch();
    // }, [prod_id]);
    return (
        <div className='flex-col mx-2 mt-3 gap-[1rem] h-[50vh]'>
            <div className=''>
                <Carousel emulateTouch={true}
                    showStatus={false}
                    useKeyboardArrows={true}
                    autoFocus={true}
                    showThumbs={false}
                >
                    <img src="https://random.imagecdn.app/500/250" alt="random" />
                    <img src="https://random.imagecdn.app/500/250" alt="random" />
                    <img src="https://random.imagecdn.app/500/250" alt="random" />
                </Carousel>
            </div>
            <div>
                <h1 className='uppercase tracking-wider font-bold'>{data?.title}</h1>
                <p className=''>Price: Rs.{data?.price}</p>
                <h2>Colors: {data?.variant.color}</h2>
                <h2>Sizes: {data?.variant.sizes}</h2>
                <h2>Category: {data?.category}</h2>
                <p>{data?.description}</p>
                <p>{data?.short_description}</p>
                <h1>{data?.inStock}</h1>
                <h1>{data?.qty_in_stock}</h1>
                <p>{data?.manufacturer}</p>
            </div>
            <div className='flex gap-5 text-slate-100 w-full justify-evenly'>
                <button className='bg-rose-500 p-3 rounded-md w-[50%] flex items-center justify-evenly'>
                    <AiOutlineHeart />
                    wishlist
                </button>
                <button className='bg-rose-500 p-3 rounded-md w-[50%] flex items-center justify-evenly'>
                    <BsCartPlus size={20} />
                    Add to cart
                </button>
            </div>
        </div >
    )
}

export default ProductDetails