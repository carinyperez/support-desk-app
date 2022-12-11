import {useState} from 'react'; 
import { FaUser } from 'react-icons/fa';


const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const {name, email, password, confirmPassword} = formData; 

	return (
		<>
		<section className='heading' >
			<h1>
				<FaUser/> Register 
			</h1>
			<p>Please create an account</p>
		</section>
		</>
	)
}

export default Register; 