import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap'
import ResponsiveAppBar from './user_navbar'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import UploadForm from './admin_upload';

export default function AdminHome() {

    return (
        <>
        <ResponsiveAppBar/>
        Welcome Admin
        <UploadForm/>
        </>
    )
}

