import axios from 'axios'; 

const API_URL = '/api/users'; 


// register user 
const register = async(userData:any) => {
	const response = await axios.post(API_URL, userData); 
	if(response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}
	return response.data
}

//logout user 
const logout = () => localStorage.removeItem('user')

// login user 
const login = async(userData :any) => {
	const response = await axios.post(`${API_URL}/login`, userData);
	if(response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}
	return response.data
}

const authService = {
	register,
	logout,
	login,
}

export default authService; 