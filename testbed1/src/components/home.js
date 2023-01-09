import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap'
import ResponsiveAppBar from './navbar'
import {database, storage} from '../firebase'
import {ref, push, child, update, getDatabase, onValue, query, orderByChild, limitToLast} from "firebase/database";
import MovieCard from './moviecard';
import { getAuth, onAuthStateChanged} from 'firebase/auth'
import { List } from '@mui/material';
import Movielist from './movielist';

export default function Home() {
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

  }, [])

      return (
        <div> 
          <ResponsiveAppBar/>
          <Movielist/>
        
        </div>
        
      )
    }

