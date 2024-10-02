import React from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import '../styles/LoginForm.css'; 

const LoginForm = () => {
    return (
        <>
        <div className="login-form"> 
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="password-label">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className='login-button'>
                    Login
                </Button>
            </Form>
        </div>
        </>
    );
};

export default LoginForm;
