import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'; 

export interface AuthState { 
	user: null | string;
	isError: boolean; 
	isSuccess: boolean; 
	isLoading: false;
	message: string;
}

const initialState : AuthState = {
	user: null, 
	isError: false,
	isSuccess :false, 
	isLoading: false,
	message: '', 
}

export const authSlice = createSlice({
	name: 'auth',
	initialState, 
	reducers: {}, 
	extraReducers : (builder) => {

	}
})

export default authSlice.reducer; 

