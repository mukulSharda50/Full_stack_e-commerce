import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { ShowErrorToast, ShowSuccessToast } from '../Toast';

const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) throw new Error("Network error.");
                return response.json();
            })
            .then(returnedData => {
                ShowSuccessToast("Success");
                localStorage.setItem("_TOKEN", returnedData.token);
                navigate('/');
            })
            .catch(error => {
                ShowErrorToast(`Error ${error}`);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 place-items-center my-2 mt-[2rem]'>
                <div>
                    <div>
                        <label>Username</label>
                        <input {...register('username', { required: true, maxLength: 255 })}
                            placeholder='john_doe'
                            className='placeholder:italic placeholder:text-slate-400 block w-[100%]  border-slate-300 rounded-md py-1 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm border' />
                        {
                            errors.username && <p className='text-red-500 '>Username is required</p>
                        }
                    </div>

                    <div>
                        <label>Password</label>
                        <input {...register('password', { required: true, maxLength: 255 })} type="password" className='placeholder:italic placeholder:text-slate-400 block bg-white w-[100%] border-slate-300 rounded-md py-1 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm border'
                            placeholder='********' />
                        {
                            errors.password && <p className='text-red-500 '>Password is required</p>
                        }
                    </div>
                    <input type="submit" value="Submit" className='bg-rose-400 w-[100%] py-1 px-3 rounded-md text-slate-100 mt-2' />
                </div>
                <span className='flex items-center mt-1 gap-1'>
                    <p>Not a member?</p>
                    <Link to='/signup' className='underline'>
                        Sign up
                    </Link>
                </span>
            </form>

            <Toaster
                toastOptions={{
                    success: {
                        style: {
                            background: 'green',
                        },
                    },
                    error: {
                        style: {
                            background: 'red',
                        },
                    },
                }}
            />
        </div>
    );
};

export default Login;
