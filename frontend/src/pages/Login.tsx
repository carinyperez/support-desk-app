import { FaSignInAlt } from 'react-icons/fa';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import {login, reset} from '../features/auth/authSlice'; 
import { AppDispatch, RootState} from '../app/store';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '', 
		password :''
	}); 

	const dispatch: AppDispatch = useDispatch(); 
	const {user, isLoading, isSuccess, isError, message} = useSelector((state: RootState)=> state.auth);
	const navigate = useNavigate();

	const {email, password} = formData;

	const onSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		const userData = {
			email, 
			password
		}
		//@ts-ignore
		dispatch(login(userData))
	}

	useEffect(() => {
		if(isError) {
			// @ts-ignore
			toast.error(message)
		}
		// redirect when logged in 
		if(isSuccess || user) {
			navigate('/')
		}
		dispatch(reset())
	}, [isError, isSuccess, user, message, navigate, dispatch])

	const onChange = (e: { target : {name :string, value: string}}) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name] : e.target.value
		}))
	}

	if(isLoading) {
		return <Spinner/>
	}

	return (
		<>
		<section className='heading'>
			<h1>
				<FaSignInAlt/> Login 
				<p>Please sign in to get support</p>
			</h1>
		</section>
		<section className='form'>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<input
						type='email'
						className='form-control'
						id='email'
						name='email'
						value={email}
						onChange={onChange}
						placeholder='Enter your email'
						required
					/>
					<input
						type='password'
						className='form-control'
						id='password'
						name='password'
						value={password}
						onChange={onChange}
						placeholder='Enter password'
						required
					/>
					<button type='submit' className='btn btn-block'>Submit</button>
				</div>

			</form>

		</section>
		
		</>
	)
}

export default Login; 