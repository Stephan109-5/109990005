import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import SearchBox from './components/searchbox';
import CommentBox from './components/commentbox';
import Home from "./components/home"
import SignUp from "./components/signuppage";
import UserHome from "./components/user_home";
import AdminHome from "./components/admin_home";

function App() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('')
	let navigate = useNavigate();

	const handleAction = (id) => {
		const authentication = getAuth();

		if (id == 1) {
			createUserWithEmailAndPassword(authentication, email, password)
		  	.then((response) => {
				sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)

				
				navigate('/userhome')
			})
			.catch((error) => {
				alert(error)
			})
		}

		if (id === 2) {
			signInWithEmailAndPassword(authentication, email, password)
			  .then((response) => {
				sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
				if (email == "stephanchia09@gmail.com"){
					navigate('/admin')
				}
				navigate('/userhome')
			})
			  .catch((error) => {
				alert(error)
			})
		  }
	}



	useEffect(() => {
		let authToken = sessionStorage.getItem('Auth Token')
	
		const authentication = getAuth();
		if (authToken) {
			onAuthStateChanged(authentication, (user) => {
				if (user.email == "stephanchia09@gmail.com") {
					navigate('/admin')
				}
				else {
					navigate('/userhome')
				}
			})  
		  	
		}
	  }, [])
	  
	return (
		<div className="App">
		<Routes>
			<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="signup" 
				element={<SignUp title="Sign Up" 
				setEmail={setEmail} 
				setPassword={setPassword} 
				handleAction={() => handleAction(1)}
			/>}/>
			<Route path="login" 
				element={<SignUp title="Login" 
				setEmail={setEmail} 
				setPassword={setPassword}
				handleAction={() => handleAction(2)}
			/>}/>
			<Route path="userhome" element={<UserHome/>}/>
			<Route path="admin" element={<AdminHome/>} />
			</Route>
			
		</Routes>
		</div>
	);
}


function Layout() {
	return (
		<div>
			<div className="layoutbox">
			<Outlet />
			<CommentBox/>
			</div>	
		</div>
		
	);
}

export default App;
