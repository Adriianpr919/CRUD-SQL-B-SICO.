import React, { useState, useEffect } from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBBadge,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBreadcrumbItem,
    MDBNavbarToggler,
    MDBContainer,
    MDBNavbarBrand,
    MDBBreadcrumb,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
    const [showBasic, setShowBasic] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/products");
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);

    const handleDelete = async (idproducts) => {
        try {
            await axios.delete("http://localhost:8800/products/" + idproducts)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    };
    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light' className="mb-4">
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>CRUD APP.</MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='/'>
                                    <MDBIcon fas icon="globe" /> Inicio.
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>

                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <main>
                <MDBNavbar expand='lg' light bgColor='light' className='mb-4'>
                    <MDBContainer fluid>
                        <nav aria-label='breadcrumb'>
                            <MDBBreadcrumb>
                                <MDBBreadcrumbItem>
                                    <Link to='/add' className="btn btn-secondary">
                                        <MDBIcon fas icon="plus-circle" /> AGREGAR PRODUCTO.
                                    </Link>
                                </MDBBreadcrumbItem>
                            </MDBBreadcrumb>
                        </nav>
                    </MDBContainer>
                </MDBNavbar>
                <MDBTable responsive align='middle'>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>ARTICULO</th>
                            <th scope='col'>CATEGORÍA</th>
                            <th scope='col'>SUB-CATEGORÍA</th>
                            <th scope='col'>TALLA</th>
                            <th scope='col'>COLOR DE ORO</th>
                            <th scope='col'>COLOR DE PIEDRA</th>
                            <th scope='col'>CANTIDAD</th>
                            <th scope='col'>DESCRIPCIÓN</th>
                            <th scope='col'>IMAGEN 2</th>
                            <th scope='col'>PRECIO</th>
                            <th scope='col'>ACCIÓNES</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {products.map((product) => (
                            <tr key={product.idproducts} className="border-b">
                                <td>
                                    <div className='d-flex align-items-center'>
                                        {product.image &&
                                            <img src={product.image} alt='' style={{ width: '45px', height: '45px' }}
                                                className='rounded-circle' />
                                        }
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>
                                                {product.name}
                                            </p>
                                            <p className='text-muted mb-0'>
                                                {product.slug}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <MDBBadge color='secondary' pill>
                                        {product.category}
                                    </MDBBadge>
                                </td>
                                <td>
                                    <MDBBadge color='secondary' pill>
                                        {product.brand}
                                    </MDBBadge>
                                </td>
                                <td>{product.sizes}</td>
                                <td>{product.colorsOne}</td>
                                <td>{product.colorsTwo}</td>
                                <td>
                                    <MDBBadge color='warning' pill>
                                        {product.countInStock}
                                    </MDBBadge>
                                </td>
                                <td>{product.description}</td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        {product.cover &&
                                            <img src={product.cover} alt='' style={{ width: '45px', height: '45px' }}
                                                className='rounded-circle' />
                                        }
                                    </div>
                                </td>
                                <td>
                                    <MDBBadge color='success' pill>
                                        &#36; {(product.price).toLocaleString('es-ES', {
                                            style: 'currency',
                                            currency: 'COP',
                                        })}
                                    </MDBBadge>
                                </td>
                                <td>
                                    <Link to={`/update/${product.idproducts}`} className="btn btn-success">
                                        <MDBIcon fas icon="edit" /> EDITAR.
                                    </Link>
                                    <button className="btn btn-danger" onClick={() => handleDelete(product.idproducts)}>
                                        <MDBIcon fas icon="trash" /> BORRAR.
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </MDBTableBody>
                </MDBTable>
            </main>
        </>
    );
}

export default Products;