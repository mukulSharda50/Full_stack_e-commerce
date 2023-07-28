import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
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
                showSuccessToast("Success");
                localStorage.setItem("_TOKEN", returnedData.token);
                navigate('/');
            })
            .catch(error => {
                showErrorToast(`Error ${error}`);
            })
    }

    return (
        <Container>
            <LoginForm onSubmit={handleSubmit(onSubmit)}>
                <FormTitle>Log in</FormTitle>
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
                            errors.password?.type === "required" ? showErrorToast("Password is required") : ''
                        }
                        <label>Password</label>
                        <Input {...register('password', { required: true })} type="password" />
                    </InputFieldContainer>
                </FormContainer>
                <SubmitBtn type="submit" value="Submit" />
                <Span>
                    <p>Not a member?</p>
                    <LoginLink to='/signup'>
                        Sign up
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
	background-color: #F5F5F5;
	// box-shadow: 1px 2px 8px rgba(33, 42, 62, 0.1);
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
		// color: #212A3E;
        
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
