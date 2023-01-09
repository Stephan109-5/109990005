import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import {database, storage} from '../firebase'
import {ref, push, child, update, getDatabase, onValue, query, orderByChild, limitToLast} from "firebase/database";
import { Input } from '@mui/material';
import { ref as refI, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { ref } from "firebase/storage";

export default function UploadForm(){
    const [name, setName] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [imageUpload, setImageUpload] = useState(null);
    var imageUrl;

    const uploadImage = () =>{
        if (imageUpload == null) return;
        const imageRef = refI(storage, `images/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                  imageUrl = url;
                });
            });
    }

    const handleSubmit = () =>{
        uploadImage();
        // console.log(imageUrl);
        let obj = {"Name" : name, "Synopsis" : synopsis, "Poster" : imageUrl}
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/movies/' + newPostKey] = obj;
        update(ref(database), updates);
        
    }

    return (
        <div style={{padding: '20px'}}>
            <TextField
                required
                id="movie-name"
                label="Movie Name"
                onChange={(e) => setName(e.target.value)}   
            />
            <TextField
                required
                id="movie-synopsis"
                label="Movie Synopsis"
                onChange={(e) => setSynopsis(e.target.value)}
            />
            <Input type="file" 
                onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                }}
            />
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}
