import React from "react";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import { GiRead } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import LineChart from "../common/LineChart";
import DonutChart from "../common/DonutChart";
import DonutChart2 from "../common/DonutChart2";

const Dashboard = () => {
   
  return (
    <>
      <section className="mb-2 mb-lg-3">
        <div className="row">
          <div className="mb-4 col-xl-3 col-md-6">
            <Card className="h-100 bg-primary-light card">
              <Card.Body className="d-flex justify-content-between align-items-center card-body">
                <div>
                  <h6>Marcadores</h6>
                  <h3 className="mb-0 text-primary">985</h3>
                </div>
                <BsJournalBookmarkFill className="text-primary fs-1"></BsJournalBookmarkFill>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-4 col-xl-3 col-md-6">
            <Card className="h-100 bg-blue-light card">
              <div className="d-flex justify-content-between align-items-center card-body">
                <div>
                  <h6>Lectores</h6>
                  <h3 className="mb-0 text-blue">8.760</h3>
                </div>
                <FiBookOpen className="text-blue fs-1"></FiBookOpen>
              </div>
            </Card>
          </div>
          <div className="mb-4 col-xl-3 col-md-6">
            <div className="h-100 bg-green-light card">
              <Card.Body className="d-flex justify-content-between align-items-center card-body">
                <div>
                  <h6>Visitas</h6>
                  <h3 className="mb-0 text-green">35.100</h3>
                </div>
                <GiRead className="text-green fs-1"></GiRead>
              </Card.Body>
            </div>
          </div>
          <div className="mb-4 col-xl-3 col-md-6">
            <Card className="h-100 bg-danger-light card">
              <Card.Body className="d-flex justify-content-between align-items-center card-body">
                <div>
                  <h6>Suscriptores</h6>
                  <h3 className="mb-0 text-danger">10.500</h3>
                </div>
                <FaUser className="text-danger fs-1"></FaUser>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      <section className="my-4 my-lg-4">
      <div className="row">
                <div className="mb-4 mb-lg-0 col-lg-7">
                  <div className="h-auto card">
                    <div className="card-header">
                      <h4 className="card-heading">Visitas anuales</h4>
                    </div>
                    <div className="card-body">
                      <div className="chart-holder">
                      <LineChart className="w-100"></LineChart>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4 mb-lg-0 col-lg-5">
                  <div className="h-50 pb-3 pb-lg-2">
                    <div className="h-100 card">
                      <div className="d-flex card-body">
                        <div className="w-100 align-items-center row">
                          <div className="mb-4 mb-sm-0 col-sm-5">
                            <h2 className="mb-0 d-flex align-items-center">
                              <span>86%</span
                              ><span
                                className="dot bg-green d-inline-block ms-3"
                              ></span>
                            </h2>
                            <span className="text-muted text-uppercase small"
                              >Objetivo</span
                            >
                            <hr />
                            <small className="text-muted"
                              >Nuevos suscriptores</small
                            >
                          </div>
                          <div className="col-sm-7 pb-5">
                          <DonutChart width="437" height="218" style={{display: 'block', boxSizing: 'border-box', height: '218px', width: '437px'}}></DonutChart>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-50 pt-lg-1">
                    <div className="h-100 card">
                      <div className="d-flex card-body">
                        <div className="w-100 align-items-center row">
                          <div className="mb-3 mb-sm-0 col-sm-5">
                            <h2 className="mb-0 d-flex align-items-center">
                              <span>$116.250</span
                              ><span
                                className="dot bg-indigo d-inline-block ms-3"
                              ></span>
                            </h2>
                            <span className="text-muted text-uppercase small"
                              >Objetivo $155.000</span
                            >
                            <hr />
                            <small className="text-muted"
                              >Ganancia con anuncios</small
                            >
                          </div>
                          <div className="col-sm-7">
                          <DonutChart2 width="437" height="218" style={{display: 'block', boxSizing: 'border-box', height: '218px', width: '437px'}}></DonutChart2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </section>
    </>
  );
};

export default Dashboard;
