import { useEffect, useState } from "react";
import { Button, Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";

function ClientNavbar() {
    const [categoriesList, setCategoriesList] = useState([]);
    const abortController = new AbortController();
    const signal = abortController.signal;
    useEffect(() => {
        async function fetchCategoriesList() {
            const requestUrl = 'http://localhost:3001/api/get4Categories'
            const response = await fetch(requestUrl, { signal: signal });
            const responseJSON = await response.json();
            setCategoriesList(responseJSON)
        }
        fetchCategoriesList().catch(err => { })
        return function cleanUp() {
            abortController.abort();
        }
    }, [categoriesList]);
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid style={{ margin: 0 }}>
                <Navbar.Brand href="/home">INSCRYPT</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/aboutUs">about us</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="categories"
                        menuVariant="dark"
                    >
                        {
                            categoriesList.map((category) => {
                                const link = '/category/' + category._id;
                                return (
                                    <NavDropdown.Item key={category._id} href={link} >{category.nom}</NavDropdown.Item>
                                )
                            })
                        }
                        <NavDropdown.Item  href="/categoriesFilter" >other</NavDropdown.Item>

                    </NavDropdown> </Nav>
                    <Nav>
                    <Nav.Link className="justify-content-end" href="/search">Search</Nav.Link>
                    <Nav.Link className="justify-content-end" href="/search">All categories</Nav.Link>
               </Nav>

            </Container>
        </Navbar>
    )
}
export default ClientNavbar;