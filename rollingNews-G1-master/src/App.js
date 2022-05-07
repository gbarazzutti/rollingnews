import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminPage from "./components/pages/AdminPage";
import Inicio from "./components/common/Inicio";
import PrivateRoute from "./components/common/PrivateRoute";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route exact path="/*" index element={<Inicio></Inicio>}></Route>
          </Route>
          <Route>
            <Route
              path="rn/*"
              element={<PrivateRoute><AdminPage></AdminPage></PrivateRoute>}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
