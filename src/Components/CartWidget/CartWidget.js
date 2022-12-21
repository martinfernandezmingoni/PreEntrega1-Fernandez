import './style.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from '../../logo.svg';

function CartWidget({ numberOfProducts: nroProducts = 0 }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ver Store
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Store de Gaia</Modal.Title>
        </Modal.Header>
        <Modal.Body>El Numero de Productos actualmente es de {nroProducts}
        <img>{logo}</img></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Gracias
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
render (< CartWidget />);

