import { useState } from 'react';

import { AiOutlineDelete } from 'react-icons/ai';

const Card = ({ imgSrc, imgAlt, price, title }) => {
    const [qty, setQty] = useState(1);
    const IncreaseQty = () => {
        setQty(prevQty => prevQty + 1);
    }
    const DecreaseQty = () => {
        setQty(prevQty => prevQty - 1);
    }
    const HandleRemoveFromCart = () => {
        console.log('clicked');
    }
    const HandleCartClick = () => {
        console.log('cart clicked')
    }
    return (
        <div className='h-[25vh] flex gap-4 p-2 cursor-pointer ' onClick={HandleCartClick}>
            <div className='max-w-[65%] max-h-[65%]'>
                <img src={imgSrc} alt={imgAlt} className='w-[100%] h-[100%] object-cover mb-2' />
                <div>
                    <button onClick={IncreaseQty} className='bg-rose-400 w-[25%] text-slate-100 '>+</button>
                    <span className='mx-2 w-[50%]'>Qty: {qty}</span>
                    {qty > 1 && <button onClick={DecreaseQty} className='bg-rose-400 w-[25%] text-slate-100'>-</button>}
                </div>
            </div>
            <div>
                <div className='uppercase tracking-widest'>{title}</div>
                <h6>Price: Rs.{price}</h6>
                <button className='bg-rose-400 w-[100%] h-[30px] mt-2 flex items-center justify-evenly text-slate-100' onClick={HandleRemoveFromCart}>
                    <AiOutlineDelete />
                    Remove
                </button>
            </div>
        </div>
    )
}

export default Card