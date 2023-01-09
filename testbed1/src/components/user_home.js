import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap'
import { getAuth, onAuthStateChanged} from 'firebase/auth'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import ResponsiveAppBar from './user_navbar';
import Movielist from './movielist';

export default function UserHome() {
  let navigate = useNavigate();
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

    if (!authToken) {
        navigate('/login')
    }
  }, [])

  const movie_name = "https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Template-Movie-Credits-StudioBinder.jpg";
      return (
        <>
          <ResponsiveAppBar/>
          User Home
          <Movielist/>
        
        </>
      )
    }

