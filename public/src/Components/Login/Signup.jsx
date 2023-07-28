import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Signup = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const showErrorToast = (msg) => {
		toast.error(msg, {
			position: 'bottom-right',
			duration: 2000,
			ariaProps: {
				role: 'alert',
				'aria-live': 'error',
			}
		});
	};
	const showSuccessToast = (msg) => {
		toast.success(msg, {
			position: 'bottom-right',
			duration: 2000,
			ariaProps: {
				role: 'alert',
				'aria-live': 'sucess',
			}
		});
	};
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
				showSuccessToast("success");
				localStorage.setItem('_TOKEN', JSON.stringify(returnedData.token));
				navigate('/');
			})
			.catch((error) => {
				// Handle errors, e.g., display an error message
				showErrorToast(`Error when processing.${error}`);
			});
	};

	return (
		<Container>
			<LoginForm onSubmit={handleSubmit(onSubmit)}>
				<FormTitle>sign up</FormTitle>
				<FormContainer>
					<InputFieldContainer>
						{
							errors.username?.type === "required" ? showErrorToast("Username is required") : ''
						}
						<label>Username</label>
						<Input {...register('username', { required: true, maxLength: 255 })} />
					</InputFieldContainer>

					<InputFieldContainer>
						{
							errors.firstName?.type === "required" ? showErrorToast("First Name is required") : ''
						}
						<label>First Name</label>
						<Input {...register('firstName', { required: true, maxLength: 255 })} />
					</InputFieldContainer>

					<InputFieldContainer>
						{
							errors.lastName?.type === "required" ? showErrorToast("Last Name is required") : ''
						}
						<label>Last Name</label>
						<Input {...register('lastName', { required: true })} />
					</InputFieldContainer>

					<InputFieldContainer>
						{
							errors.email?.type === "required" ? showErrorToast("Email-id is required") : ''
						}
						<label>Email-Id</label>
						<Input {...register('email', { required: true })} />
					</InputFieldContainer>
					<InputFieldContainer>
						{
							errors.phone?.type === "required" ? showErrorToast("Phone is required") : ''
						}
						{
							errors.phone?.type === "maxLength" ? showErrorToast("Phone number exceeds 10 digits") : ''
						}
						{
							errors.phone?.type === "minLength" ? showErrorToast("Phone number less than 10 digits") : ''
						}
						<label>Phone Number</label>
						<Input {...register('phone', { required: true, maxLength: 10, minLength: 10 })} type="number" />
					</InputFieldContainer>
					<InputFieldContainer>
						{
							errors.password?.type === "required" ? showErrorToast("Password is required") : ''
						}
						<label>Password</label>
						<Input {...register('password', { required: true, maxLength: 255 })} type="password" />
					</InputFieldContainer>

				</FormContainer>
				<SubmitBtn type="submit" value="Submit" />
				<Span>
					<p>Already a member?</p>
					<LoginLink to='/login'>
						Log in
					</LoginLink>
				</Span>
			</LoginForm>

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
		</Container>
	);
};

const Container = styled.div`
	color: black;
	margin-top: 1rem;
	margin-inline: 15rem;
	height: 50vh;
	min-width: 50vw;
	display: grid;
	place-items: center;
`;

const LoginForm = styled.form`
	color: inherit;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	width: 80%;
	height: 100%;
	gap: 0.6rem;
	// border: 2px solid black;
`;

const InputFieldContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	gap: 2px;
	// border: 1px solid pink;
`;

const Input = styled.input`
	outline: none;
	border: none;
	border-radius: 7px;
	height: 40px;
	width: 100%;
	border: 1px solid lightgray;
	background-color: #F1F6F9;
	// box-shadow: inset 0 0 10px #000000;
`;

const FormTitle = styled.p`
	margin-top: 1.2rem;
	color:#212A3E;
	text-transform: uppercase;
	font-size: 1.5rem;
`;

const FormContainer = styled.div`
	display: grid;
	place-items: center;
	width: 50%;
	gap: 0.7rem;
	// border: 2px solid black;
`;

const SubmitBtn = styled.input.attrs({
	type: 'submit',
	value: 'Submit'
})`
	border: none;
	outline: none;
	box-shadow: none;
	margin-bottom: 5px;
	height: 40px;
	width: 40%;
	cursor: pointer;
	font-size: 1rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	background-color: #212A3E;
	color: #F1F6F9;
	border-radius: 5px;
	transition: all 0.3s;
	&:hover{
		background: #bdc3c7;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
`;

const Span = styled.span`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 5px;
`;

const LoginLink = styled(Link)`
	text-decoration: underline;
	color: inherit;
`;

export default Signup;
