import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";

const Cotizaciones = () => {
  const [resp, setResp] = useState([]);
  const [dolarOficialCompra, setDolarOfCompra] = useState("");
  const [dolarOficialVenta, setDolarOfVenta] = useState("");
  const [dolarBlueCompra, setDolarBlueCompra] = useState("");
  const [dolarBlueVenta, setDolarBlueVenta] = useState("");
  const [euroCompra, setEuroCompra] = useState("");
  const [euroVenta, setEuroVenta] = useState("");
  const [realCompra, setRealCompra] = useState("");
  const [realVenta, setRealVenta] = useState("");
  const [error, setError] = useState(false);

  const getCotizaciones = async () => {
    // arreglo de URL para llamar a la API para cada moneda
    const endPoints = [
      "https://www.dolarsi.com/api/api.php?type=valoresprincipales",
      "https://www.dolarsi.com/api/api.php?type=euro",
      "https://www.dolarsi.com/api/api.php?type=real",
    ];
   
    const apiCall1 = await fetch(endPoints[0]);
    const apiCall2 = await fetch(endPoints[1]);
    const apiCall3 = await fetch(endPoints[2]);
    const res1 = await apiCall1.json();
    const res2 = await apiCall2.json();
    const res3 = await apiCall3.json();
    setResp([res1, res2, res3]);
    
    try {
      if (resp.length !== 0) {
        setError(false);
        getDivisa(resp[0], resp[1], resp[2]);
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getDivisa = async (dolar, euro, real) => {
    let dolarOficialCompra = await dolar[0].casa.compra;
    let dolarOficialVenta = await dolar[0].casa.venta;
    let dolarBlueCompra = await dolar[1].casa.compra;
    let dolarBlueVenta = await dolar[1].casa.venta;
    let euroCompra = await euro[11].casa.compra;
    let euroVenta = await euro[11].casa.venta;
    let realCompra = await real[6].casa.compra;
    let realVenta = await real[6].casa.venta;

    setDolarOfCompra(dolarOficialCompra);
    setDolarOfVenta(dolarOficialVenta);
    setDolarBlueCompra(dolarBlueCompra);
    setDolarBlueVenta(dolarBlueVenta);
    setEuroCompra(euroCompra);
    setEuroVenta(euroVenta);
    setRealCompra(realCompra);
    setRealVenta(realVenta);
  };

  useEffect(() => {
    getCotizaciones(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <>
      {!error ? (
        <>
          <Navbar.Text className="fw-bold text-center">
            <span className="text-danger">Dólar: </span>
            <span className="text-primary me-2">BNA:</span>
            <span>
              ${dolarOficialCompra}/${dolarOficialVenta}
            </span>
            <span className="text-primary mx-2">Blue:</span>
            <span>
              ${dolarBlueCompra}/${dolarBlueVenta}
            </span>
          </Navbar.Text>
          <Navbar.Text className="fw-bold text-center">
            <span className="text-danger mx-2">Euro Oficial: </span>
            <span>
              ${euroCompra}/${euroVenta}
            </span>
          </Navbar.Text>
          <Navbar.Text className="fw-bold text-center">
            <span className="text-danger mx-2">Real Oficial: </span>
            <span>
              ${realCompra}/${realVenta}
            </span>
          </Navbar.Text>
        </>
      ) : null}
    </>
  );
};

export default Cotizaciones;
