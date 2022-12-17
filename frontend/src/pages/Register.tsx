import {useEffect, useState} from 'react'; 
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import {useSelector, useDispatch} from 'react-redux'; 
import {register, reset} from '../features/auth/authSlice'; 
import { RootState, AppDispatch} from '../app/store'; 
import {useNavigate} from 'react-router-dom'; 
import Spinner from '../components/Spinner'; 

const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const {name, email, password, confirmPassword} = formData; 

	const dispatch : AppDispatch = useDispatch();
	const navigate = useNavigate(); 

	const {user, isLoading, isSuccess, isError, message} = useSelector((state: RootState)=> state.auth)

	useEffect(() => {
		if(isError) {
			//@ts-ignore
			toast.error(message)
		}
		// redirect when logged in 
		if(isSuccess || user){
			navigate('/')
		}
		dispatch(reset())
	}, [isError, isSuccess, user, message, navigate, dispatch])

	const onChange = (e: { target: { name: string; value: any; }; }) => {
		setFormData((prevState) => ({
			...prevState,
			// name, email 
			[e.target.name] :e.target.value,
		}))
	}

	const onSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		if(password !== confirmPassword) {
			toast.error('Passwords do not match', {
				position: toast.POSITION.TOP_RIGHT
			})
		} else {
			const userData = {
				name, 
				email, 
				password
			}
             //@ts-ignore  
			dispatch(register(userData))
		}
	}

	if(isLoading) {
		return <Spinner/>
	}
	return (
		<>
		<section className='heading' >
			<h1>
				<FaUser/> Register {user}
			</h1>
			<p>Please create an account</p>
		</section>
		<section className='form'>
			<form onSubmit={onSubmit}>
				<div className='form-group'> 
					<input 
					type='text' 
					className='form-control' 
					id='name'
					name='name'
					value={name}
					onChange={onChange}
					placeholder = 'Enter your name'
					required
					/>
				</div>
				<div className='form-group'> 
					<input 
					type='email' 
					className='form-control' 
					id='email'
					name='email'
					value={email}
					onChange={onChange}
					placeholder = 'Enter your email'
					required 
					/>
				</div>
				<div className='form-group'> 
					<input 
					type='password' 
					className='form-control' 
					id='password'
					name='password'
					autoComplete='on'
					value={password}
					onChange={onChange}
					placeholder = 'Enter your password'
					required 
					/>
				</div>
				<div className='form-group'> 
					<input 
					type='password' 
					className='form-control' 
					id='confirmPassword'
					name='confirmPassword'
					autoComplete='on'
					value={confirmPassword}
					onChange={onChange}
					placeholder = 'Confirm your password'
					required 
					/>
				</div>
				<div className='form-group'>
					<button className='btn btn-block'>Submit</button>
				</div>
			</form>
		</section>
		</>
	)
}

export default Register; 