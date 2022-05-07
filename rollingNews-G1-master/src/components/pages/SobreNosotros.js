import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import ceodiario from "../img/ceodiario.jpg";
import editores from "../img/editores.jpg";
import sobrenosotros from "../img/sobrenosotros.jpg";
import garciaAndy from "../img/garciaAndy.png";
import alanizJuan from "../img/alanizJuan.png";
import cordobaAbel from "../img/cordobaAbel.png";
import marquezEsteban from "../img/marquezEsteban.jpg";
import barazzuttiGuillermo from "../img/barazzuttiGuillermo.png";
import { BiHomeCircle } from "react-icons/bi";

const SobreNosotros = () => {
  return (
    <>
      <section className="mb-5 pt-4 bg-light shadow">
        <Container>
          <div className="row">
            <div className="col-12">
              <Card
                className="card bg-dark-overlay-4 overflow-hidden card-bg-scale h-500 mt-5 mb-4 text-center"
                style={{
                  backgroundImage: `url(${editores})`,
                  backgroundPosition: "center left",
                  backgroundSize: "cover",
                  borderRadius: "10px",
                }}
              >
                <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div className="w-100 my-auto">
                    <Card.Title className="text-white display-4">
                      ¿Quienes somos?
                    </Card.Title>
                    <nav
                      className="d-flex justify-content-center"
                      aria-label="breadcrumb"
                    >
                      <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/">
                            <BiHomeCircle></BiHomeCircle> Inicio
                          </Link>
                        </li>
                        <li className="breadcrumb-item active">Acerca de nosotros</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
        <section className="pt-4 pb-0">
          <Container>
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h2 className="text-primary mb-4">Algo sobre nosotros</h2>
                <p className="lead">
                  <span className="text-danger fw-bold">ROLLINGNEWS</span>
                  {", "}{" "}
                  <span className="fw-bold">
                    rigor tradicional e innovación constante
                  </span>
                  , es un medio online que ofrece información actualizada en
                  tiempo real y de manera permanente las 24 horas, todos los
                  días del año, con contenidos digitales que pueden ser
                  consultados a través de internet desde cualquier ordenador o
                  mediante dispositivos móviles como smartphones o tabletas.
                </p>
                <p>
                  El equipo de profesionales integrado por periodistas,
                  diseñadores, técnicos y comerciales, tiene a su cargo la
                  elaboración de noticias de última hora, entrevistas,
                  reportajes, narraciones minuto a minuto de eventos en directo,
                  columnas de opinión y decenas de blogs especializados.
                </p>
                <p>
                  El sitio cuenta con numerosas áreas de participación de los
                  usuarios y dispone de una amplia oferta informativa multimedia
                  que abarca desde la cobertura de noticias y videorreportajes,
                  hasta la producción propia de programas de divulgación y
                  entretenimiento. En RollingNews los usuarios pueden consultar
                  contenidos informativos en cualquier formato: texto, imágenes,
                  vídeos, gráficos o interactivos. Adicionalmente, ofrecemos una
                  amplia gama de servicios prácticos como la información del
                  clima local, la bolsa de valores y cotización de monedas.
                </p>
                <div className="mb-3">
                  <img
                    src={ceodiario}
                    alt="ceo del diario Rolling News"
                    class="w-100 h-auto"
                  />
                </div>
                <h3 className="text-primary mt-4">Principios y valores</h3>
                <ul>
                  <li>
                    <strong className="text-danger">ROLLINGNEWS</strong> cree en asumir
                    cotidianamente el compromiso de brindar una comunicación
                    honesta e independiente, ejercida con responsabilidad
                    profesional, ofreciendo a su público una visión completa y
                    actualizada de la realidad.
                  </li>
                  <li>
                    Promover el debate y la comunicación entre los distintos
                    sectores de la sociedad.
                  </li>
                  <li>
                    Procurar utilizar la más avanzada tecnología para ampliar la
                    gama de opciones informativas, culturales y de
                    entretenimiento, así como promover y difundir el talento
                    argentino en el contexto de un mundo globalizado.
                  </li>
                  <li>
                    El respeto por su público, el servicio a la comunidad y el
                    compromiso con la creatividad productiva son valores básicos
                    que impulsan la estrategia de{"  "}
                    <strong className="text-danger">ROLLINGNEWS</strong>.
                  </li>
                </ul>
                <div className="mb-3">
                  <img
                    src={sobrenosotros}
                    alt="ceo del diario Rolling News"
                    class="w-100 h-auto"
                  />
                </div>
                <h3 className="text-primary mt-4">Nuestros objetivos</h3>
                <p>
                  Trabajar para el lector y comunicar la noticia de manera
                  clara, rápida, atractiva y eficaz como tarea fundamental del
                  periodismo, en general, y de la edición periodística, en
                  particular.
                </p>
                <p>
                  Desarrollar la máxima información en el menor espacio posible
                  y con el mayor impacto comunicativo. Y si es con ese plus
                  mágico de la belleza, mucho mejor. Nuestra misión es poner
                  todo nuestro talento, profesionalidad y experiencia a su
                  servicio. Cuanto más cerca estemos del lector, más lejos
                  estaremos de equivocarnos.
                </p>
                <hr className="text-danger" />
                <h3 className="text-danger text-center my-4">
                  Nuestros editores
                </h3>
                <div className="row g-4">
                  <div className="col-sm-6 col-lg-3">
                    <div className="text-center">
                      <div className="avatar avatar-xxl mb-2">
                        <img
                          className="avatar-img rounded-circle border"
                          src={cordobaAbel}
                          alt="avatar"
                        />
                      </div>
                      <h5>Abel Córdoba González</h5>
                      <p className="m-0">Editor en Jefe</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="text-center">
                      <div className="avatar avatar-xxl mb-2">
                        <img
                          className="avatar-img rounded-circle border"
                          src={garciaAndy}
                          alt="avatar"
                        />
                      </div>
                      <h5>Andrés Uriel Garcia</h5>
                      <p className="m-0">Editor Gerente</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="text-center">
                      <div className="avatar avatar-xxl mb-2">
                        <img
                          className="avatar-img rounded-circle border"
                          src={alanizJuan}
                          alt="avatar"
                        />
                      </div>
                      <h5>Juan José Alaniz</h5>
                      <p className="m-0">Editor General</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="text-center">
                      <div className="avatar avatar-xxl mb-2">
                        <img
                          className="avatar-img rounded-circle border"
                          src={barazzuttiGuillermo}
                          alt="avatar"
                        />
                      </div>
                      <h5>Guillermo E. Barazzutti</h5>
                      <p className="m-0">Editor de contenido</p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-12">
                    <div className="text-center">
                      <div className="avatar avatar-xxl mb-2">
                        <img
                          className="avatar-img rounded-circle border"
                          src={marquezEsteban}
                          alt="avatar"
                        />
                      </div>
                      <h5>Esteban Márquez</h5>
                      <p className="m-0">Editor, Reportero</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </section>
    </>
  );
};

export default SobreNosotros;
