import React, { useState, useEffect } from "react";
import "../css/admin.css";
import { Nav, Container } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";



import Main from "./Main";

const AdminNav = () => {
  const [clicked, setClicked] = useState(false);
  //verifico si el usuario esta logueado
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigation = useNavigate();

  useEffect(() => {
    const user =  localStorage.getItem('accessToken');
   //console.log(user);
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logout = ()=>{
    localStorage.removeItem('accessToken');
    navigation("/");
  }

  const handleToggle = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <header>
        <Nav
          className="
          px-4
          py-2
          shadow
          navbar navbar-expand-lg
          bg-white
          overflow-hidden
         
        "
        >
          <Container className="d-flex justify-content-between aling-items-center">
            <button
              className="btn p-0 "
              onClick={() => handleToggle()}
            >
              <box-icon name={(clicked) ? "menu" : "menu-alt-left"} id="btn"></box-icon>
            </button>
            <Link to="admin/" className="navbar-brand fs-5 fw-bold" >
              ADMIN PANEL
            </Link>
            <button
              className="btn"
              type="button"
              onClick={logout}
            >
              <box-icon name="log-out"></box-icon>
            </button>
          </Container>
        </Nav>
      </header>
      <Main clicked={clicked}></Main>
    </>
  );
};

export default AdminNav;
