import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap'
import ResponsiveAppBar from './navbar'
import {database, storage} from '../firebase'
import {ref, push, child, update, getDatabase, onValue, query, orderByChild, limitToLast} from "firebase/database";
import MovieCard from './moviecard';
import { List } from '@mui/material';

export default function Movielist() {
	const [moviesList, setMoviesList] = useState([]);

	const getMovies = () =>{
		const db = getDatabase();
		const recentMoviesRef = query(ref(db, 'movies'), limitToLast(5));/* TODO: use the query() method */
		onValue(recentMoviesRef, (snapshot) => {
			snapshot.forEach((childSnapshot) => {
			setMoviesList((movies) => [...movies, childSnapshot.val()]);
			});
		}, {
		onlyOnce: true
		});
	};
	
	useEffect(() => {
		getMovies();
	}, [])

	return (
        <div> 
          <Container className='mt-4'>
            <Row md={5} xs={5} lg={5} className="g-4">
              {
                moviesList.map((movies) => (
                    <MovieCard key={movies.key} title={movies.Name} imageUrl={movies.Poster}/>
                  )
                )}              
            </Row>  
          </Container>
        
        </div>
        
    )
}

