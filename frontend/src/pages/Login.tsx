import { FaSignInAlt } from 'react-icons/fa';
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import {login} from '../features/auth/authSlice'; 
import { AppDispatch, RootState} from '../app/store';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '', 
		password :''
	}); 

	const dispatch: AppDispatch = useDispatch(); 
	const {user, isLoading, isSuccess, message} = useSelector((state: RootState)=> state.auth)


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

	const onChange = (e: { target : {name :string, value: string}}) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name] : e.target.value
		}))
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