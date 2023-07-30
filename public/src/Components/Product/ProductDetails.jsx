import { Carousel } from 'react-responsive-carousel';

const ProductDetails = ({ prodId, title, img, price, qty, category }) => {
    const HandleAddToCart = (e) => {
        const user_id = localStorage.getItem('user_id');
        const prodDetails = {
            prodId: prodId,
            prodTitle: title,
            prodImg: img,
            prodPrice: price,
            prodQty: qty,
            prodCategory: category,
        }
        fetch('http://localhost:5000/add_to_cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prodDetails)
        }).then(resp => {
            console.log(resp);
            return resp.json();
        }).then(
            console.log("success")
        )
    }
    return (
        <div className='flex-col mx-2 mt-3 gap-[1rem] h-[50vh]'>
            <div>
                <Carousel
                    emulateTouch={true}
                    showStatus={false}
                    useKeyboardArrows={true}
                    autoFocus={true}
                    showThumbs={false}
                >
                    <img src="https://random.imagecdn.app/500/261" alt="random" loading='lazy' />
                    <img src="https://random.imagecdn.app/500/261" alt="shoes" />
                    <img src="https://random.imagecdn.app/500/260" alt="random" loading='lazy' />
                    <img src="https://random.imagecdn.app/500/262" alt="random" loading='lazy' />
                </Carousel>
            </div>
            <div className='flex-col h-[100%] text-slate-900'>
                <h3 className='uppercase tracking-wider'>cars</h3>
                <p className='mt-2'> Description:</p>
                <p className='line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem doloremque provident itaque? Ullam, amet numquam? Rerum animi minima enim ratione, nisi libero numquam ipsam, pariatur optio unde suscipit dolore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem doloremque provident itaque? Ullam, amet numquam? Rerum animi minima enim ratione, nisi libero numquam ipsam, pariatur optio unde suscipit dolore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem doloremque provident itaque? Ullam, amet numquam? Rerum animi minima enim ratione, nisi libero numquam ipsam, pariatur optio unde suscipit dolore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem doloremque provident itaque? Ullam, amet numquam? Rerum animi minima enim ratione, nisi libero numquam ipsam, pariatur optio unde suscipit dolore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem doloremque provident itaque? Ullam, amet numquam? Rerum animi minima enim ratione, nisi libero numquam ipsam, pariatur optio unde suscipit dolore!</p>
                <h4 className='mt-2 mb-3'>Price: Rs.200</h4>
                <div className='w-[100%] flex justify-evenly items-center'>
                    <button className='bg-rose-500 text-slate-100 px-2 rounded-md' onClick={(e) => HandleAddToCart(e)}>Add to cart</button>
                    <button className='ml-5 bg-rose-500 text-slate-100 px-2 rounded-md'>Add to wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails