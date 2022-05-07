import React, {useState} from 'react';
import {
    Modal,
    Tabs,
    Tab,
  } from "react-bootstrap";
import Login from './Login';
import Registro from './Registro';

const ModalLoginRegistro = (props) => {
  const [key, setKey] = useState("login");
    return (
        <Modal show={props.mostrar} onHide={props.handleCerrar}>
        <Modal.Header closeButton>Login/Registro de Administrador</Modal.Header>
        <Tabs id="tab" activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab
            eventKey="login"
            title="Iniciar sesión"
            className="bg-transparent fw-medium border-0"
          >
            <Modal.Body className="card-body py-4">
            <Login></Login>
            </Modal.Body>
          </Tab>
          <Tab
            eventKey="signup"
            title="Regístrate"
            className="bg-transparent fw-medium border-0"
          >
            <Modal.Body className="card-body py-4">
            <Registro></Registro>
            </Modal.Body>
          </Tab>
        </Tabs>
      </Modal>
    );
};

export default ModalLoginRegistro;