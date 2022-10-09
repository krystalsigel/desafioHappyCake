import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

function Navigation() {
return (
<div>
    <Navbar bg="dark" variant="dark">
        <Container className="justify-content-start">
            <Navbar.Brand className="me-5 pe-5">Happy Cake 🎂</Navbar.Brand>
                <Link to="/" className="text-white ms-3 text-decoration-none">
                Home 🏡
                </Link>
                <Link to="/planes" className="text-white ms-3 text-decoration-none">
                Contacto 🐱‍🏍
                </Link>
        </Container>
    </Navbar>
</div>
);
}
export default Navigation;