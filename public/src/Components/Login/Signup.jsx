import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
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
	const onSubmit = (data) => console.log(data);

	return (
		<Container>
			<LoginForm onSubmit={handleSubmit(onSubmit)}>
				<FormTitle>sign up</FormTitle>
				<FormContainer>
					<InputFieldContainer>
						{
							errors.firstName?.type === "required" ? showErrorToast("First Name is required") : ''
						}
						<label>First Name</label>
						<Input {...register('firstName', { required: 'First Name is required!!', maxLength: 255 })} />
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
	margin-top: 5rem;
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
	background-color: #F1F6F9;
	box-shadow: 1px 2px 8px rgba(33, 42, 62, 0.1);
	width: 80%;
	height: 100%;
	gap: 1rem;
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
	// border: 2px solid black;
`;

const SubmitBtn = styled.input.attrs({
	type: 'submit',
	value: 'Submit'
})`
	border: none;
	outline: none;
	box-shadow: none;
	margin-bottom: 20px;
	height: 40px;
	width: 40%;
	cursor: pointer;
	font-size: 1rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	background-color: #212A3E;
	color: #F1F6F9;
	border-radius: 5px;
	&:hover{
		background-color: #F1F6F9;
		color: #212A3E;
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

export default Login;
