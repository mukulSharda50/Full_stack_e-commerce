import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { ShowErrorToast, ShowSuccessToast } from '../Toast';

const Signup = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		fetch('http://localhost:5000/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => {
				if (!response.ok) {
					throw new Error("Network error.");
				}
				return response.json();
			})
			.then((returnedData) => {
				// Handle the response from the backend, e.g., show a success message, redirect, etc.
				<ShowSuccessToast msg={"success"} />
				localStorage.setItem('_TOKEN', JSON.stringify(returnedData.token));
				navigate('/');
			})
			.catch((error) => {
				// Handle errors, e.g., display an error message
				return ShowErrorToast(`Error when processing.${error}`);
			});
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 place-items-center my-2 mt-[2rem]'>
				<div className='w-[50%] grid place-items-center gap-3'>
					<div>
						<label>Username</label>
						<input {...register('username', { required: true, maxLength: 255 })}
							placeholder='john_doe'
							className='placeholder:italic placeholder:text-slate-400 block bg-white w-[100%]  border-slate-300 rounded-md py-1 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' />
						{
							errors.username && <p className='text-red-500 '>Username is required</p>
						}
					</div>
					<div>
						<label>Name</label>
						<input {...register('name', { required: true, maxLength: 255 })} placeholder='john'
							className='placeholder:italic placeholder:text-slate-400 block bg-white w-[100%] border-slate-300 rounded-md py-1 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' />
						{
							errors.name && <p className='text-red-500 '>Name is required</p>
						}
					</div>

					<div>
						<label>Email-id</label>
						<input {...register('email', { required: true })}
							placeholder='john_doe@email.com' className='placeholder:italic placeholder:text-slate-400 block bg-white w-[100%] border-slate-300 rounded-md py-1 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' />
						{
							errors.email && <p className='text-red-500 '>Email is required</p>
						}
					</div>

					<div>

						<label>Phone No.</label>
						<input {...register('phone', { required: true })} type="91384-58692" placeholder='john_doe'
							className='placeholder:italic placeholder:text-slate-400 block bg-white w-[100%] border-slate-300 rounded-md py-1 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' />
						{
							errors.phone && <p className='text-red-500 '>Phone is required</p>
						}
					</div>

					<div>
						<label>Password</label>
						<input {...register('password', { required: true, maxLength: 255 })} type="password" className='placeholder:italic placeholder:text-slate-400 block bg-white w-[100%] border-slate-300 rounded-md py-1 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
							placeholder='********' />
						{
							errors.password && <p className='text-red-500 '>Password is required</p>
						}
					</div>
					<input
						type="submit"
						value="Submit"
						className='bg-rose-400 w-[100%] py-1 px-3 rounded-md text-slate-100 mt-2' />
				</div>
				<span className='flex items-center mt-1 gap-1'>
					<p>Already a member?</p>
					<Link to='/login' className='underline'>
						Log in
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
		</>
	);
};

export default Signup;
