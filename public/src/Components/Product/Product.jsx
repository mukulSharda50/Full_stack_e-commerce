import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

const Product = () => {
    const { gender } = useParams();
    const fetchProducts = async () => {
        const response = await fetch(`http://localhost:5000/product/${gender}`);
        if (!response.ok) console.log(response);
        return response.json();
    }
    const { data, isLoading, error, refetch } = useQuery('products', fetchProducts);
    useEffect(() => {
        refetch();
    }, [gender]);

    if (isLoading) return <p>loading...</p>
    if (error) return <p>error</p>
    return (
        <div className='min-h-[100vh] my-3 px-4'>
            <p className=''>
                <span className='underline tracking-wider'>/<Link to='/products'>products</Link>/{gender}</span>
            </p>
            <div className='flex-col'>
                {data?.map(item => (
                    <div className='flex-col mb-5 border-3 bg-slate-300 cursor-pointer' key={item.title}>
                        <p>{item._id}</p>
                        <Link to={`/products/details/${item._id}`}>
                            <div className=''>
                                <img src="https://random.imagecdn.app/500/250" alt="random" />
                            </div>
                            <div className='px-2'>
                                <h2>{item.title}</h2>
                                <h2>Price: {item.price}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product