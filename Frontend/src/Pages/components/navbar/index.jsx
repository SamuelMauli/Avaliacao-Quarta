import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { FaHome, FaShoppingCart, FaCreditCard, FaSignOutAlt } from 'react-icons/fa';
import styles from './styles.module.scss';

export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg" className={styles.navBar}>
                <Container>
                    <Navbar.Brand href="/home">Mercadinho</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home" className={styles.navItem}>
                                <FaHome className={styles.icon} /> Home
                            </Nav.Link>
                            <Nav.Link href="/cart" className={styles.navItem}>
                                <FaShoppingCart className={styles.icon} /> Carrinho
                            </Nav.Link>
                            <Nav.Link href="/payment" className={styles.navItem}>
                                <FaCreditCard className={styles.icon} /> Pagamento
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button
                        variant="danger"
                        className={styles.logoutButton}
                        onClick={() => window.location.href = 'http://localhost:5173/'}>
                        <FaSignOutAlt /> Sair
                    </Button>
                </Container>
            </Navbar>
        </>
    );
}
