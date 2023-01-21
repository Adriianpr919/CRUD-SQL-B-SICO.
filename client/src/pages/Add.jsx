import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBInput,
  MDBBtn,
  MDBContainer,
  MDBNavbar,
  MDBIcon,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';

const Add = () => {
  const [product, setProduct] = useState({
    name: "",
    slug: "",
    category: "",
    sizes: "",
    colorsOne: "",
    colorsTwo: "",
    image: "",
    price: null,
    brand: "",
    countInStock: null,
    description: "",
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/products", product);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(product)
  return (
    <>
      <MDBContainer breakpoint="md">
        <MDBNavbar expand='lg' light bgColor='light' className='mp-4'>
          <MDBContainer fluid>
            <nav aria-label='breadcrumb'>
              <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                  <Link to='/'>
                    <MDBIcon fas icon="globe" /> Inicio.
                  </Link>
                </MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </nav>
          </MDBContainer>
        </MDBNavbar>
        <br />
        <div className="panel panel-default">
          <div className="panel-heading">
            <MDBIcon fas icon="plus-circle" /> AGREGAR PRODUCTO.
          </div>
          <div className="panel-body">
            <fieldset className="col-md-12">
              <div className="panel panel-default mb-4">
                <div className="panel-body">
                  <p>
                    <form className='mb-4'>
                      <MDBInput wrapperClass='mb-4' id='name' name='name' label='NOMBRE DEL PRODUCTO. :*' onChange={handleChange} />
                      <MDBInput wrapperClass='mb-4' id='slug' name='slug' label='SLUG. :*' onChange={handleChange} />
                      <div className="panel panel-default mb-4">
                        <div className="panel-heading">CATEGORÍAS. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend>
                              <label htmlFor="cat">
                                <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <i className="fa-solid fa-filter"></i> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"(Hombres), (Mujeres), (Niños) y (Niñas)"</code></b></span>.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <MDBInput wrapperClass='mb-4' id='category' name='category' label='CATEGORÍAS. :*' onChange={handleChange} />
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <div className="panel panel-default mb-4">
                        <div className="panel-heading">SUB-CATEGORÍAS. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend>
                              <label htmlFor="scat">
                                <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <i className="fa-solid fa-filter"></i> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"(Nuevos) y (Destacados)"</code></b></span>.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <MDBInput wrapperClass='mb-4' id='brand' name='brand' label='SUB-CATEGORÍAS. :*' onChange={handleChange} />
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <div className="panel panel-default mb-4">
                        <div className="panel-heading">TALLA 📏. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <MDBInput wrapperClass='mb-4' id='sizes' name='sizes' label='TALLA. :*' onChange={handleChange} />
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <div className="panel panel-default mb-4">
                        <div className="panel-heading">COLOR DE ORO 🖌️. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <MDBInput wrapperClass='mb-4' id='colorsOne' name='colorsOne' label='COLOR DE ORO. :*' onChange={handleChange} />
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <div className="panel panel-default mb-4">
                        <div className="panel-heading">COLOR DE PIEDRA 🖌️. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <MDBInput wrapperClass='mb-4' id='colorsTwo' name='colorsTwo' label='COLOR DE PIEDRA. :*' onChange={handleChange} />
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <div className="panel panel-default mb-4">
                        <div className="panel-heading">PRECIO. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend>
                              <label htmlFor="price">
                                <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <MDBIcon fas icon="dollar-sign" /> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"SIN PUNTO SEQUIDO Y SIN COMA (. Y ,)"</code></b></span>.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <MDBInput wrapperClass='mb-4' id='price' name='price' label='PRECIO. :*' onChange={handleChange} />
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <div className="panel panel-default mb-4">
                        <div className="panel-heading">CANTIDAD. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend>
                              <label htmlFor="price">
                                <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <MDBIcon fas icon="list-ol" /> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"SIN PUNTO SEQUIDO (.)"</code></b></span>.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <MDBInput wrapperClass='mb-4' id='countInStock' name='countInStock' label='CANTIDAD. :*' onChange={handleChange} />
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <MDBInput wrapperClass='mb-4' textarea id='description' name='description' rows={10} label='DESCRIPCIÓN. :*' onChange={handleChange} />
                      <div className="panel panel-default mb-4">
                        <div className="panel-heading">IMAGEN 1 📸. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend>
                              <label htmlFor="image">
                                <span class="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <i className='fas fa-camera-retro'></i> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"(.png) y (.jpg)"</code></b></span> Sin Mayuscula con Solo El Link De Enlace Con URL <MDBIcon fas icon="angle-double-right" style={{ fontSize: "15px" }} /> <a className='badge rounded-pill badge-soft-secondary' style={{ fontSize: "15px" }} href="https://imgbb.com/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                                <MDBIcon fas icon="globe" style={{ fontSize: "15px", color: "blue" }} /> Haz Clic Aquí.
                              </a>.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <MDBInput wrapperClass='mb-4' id='image' name='image' label='IMAGEN 1. :*' onChange={handleChange} />
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <div className="panel panel-default mb-4">
                        <div className="panel-heading">IMAGEN 2 📸. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend>
                              <label htmlFor="image">
                                <span class="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <i className='fas fa-camera-retro'></i> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"(.png) y (.jpg)"</code></b></span> Sin Mayuscula con Solo El Link De Enlace Con URL <MDBIcon fas icon="angle-double-right" style={{ fontSize: "15px" }} /> <a className='badge rounded-pill badge-soft-secondary' style={{ fontSize: "15px" }} href="https://imgbb.com/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                                <MDBIcon fas icon="globe" style={{ fontSize: "15px", color: "blue" }} /> Haz Clic Aquí.
                              </a>.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <MDBInput wrapperClass='mb-4' id='cover' name='cover' label='IMAGEN 2. :*' onChange={handleChange} />
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <MDBBtn className='mb-4' type='submit' block onClick={handleClick}>
                        <MDBIcon fas icon="plus-square" /> GUARDAR.
                      </MDBBtn>
                    </form>
                  </p>
                </div>
              </div>
            </fieldset>
            <div className="clearfix" />
          </div>
        </div>
      </MDBContainer>
    </>
  );
}

export default Add;