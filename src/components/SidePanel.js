import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/SidePanel.css'; 

const SidePanel = ({ onLoginClick }) => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate(); 
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleHomeClick = () => {
      handleClose(); 
      navigate('/home');
    };
    const handleLoginClick = () => {
      handleClose();
      navigate('/login'); 
    };
  
    return (
      <>
        <Button variant="primary" className="burger-menu custom-burger" onClick={handleShow}>
        <i className="fas fa-ellipsis-v"></i>
        </Button>
  
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column p-0"> 
            <Button variant="link" className="text-start" onClick={handleHomeClick}> Home </Button> 
            <Button variant="link" className="text-start" onClick={handleLoginClick}> Login </Button> 
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  };
  
  export default SidePanel;