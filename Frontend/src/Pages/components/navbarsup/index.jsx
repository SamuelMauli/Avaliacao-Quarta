import { Container, Navbar, Button } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import styles from './styles.module.scss';

export default function NavBarSup() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg" className={styles.navBar}>
                <Container>
                    <Navbar.Brand>Fornecedor Mercadinho</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* Nav vazio para o fornecedor */}
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
