import React from "react";
import Button from 'react-bootstrap/Button';
import './button.modules.css'

const ButtonComponent = () => {

    return (
        // <Button variant="contained" href="#main" style={{backgroundColor:'#4620ce', padding:'10px 35px', fontSize:'16px'}}>
        //     Discover
        // </Button>

        <Button variant="secondary" href="#main" size="lg">Discover</Button>
    )
}


export default ButtonComponent