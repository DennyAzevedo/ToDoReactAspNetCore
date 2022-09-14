import {
	Navbar,
	Container,
	Nav,
	NavDropdown
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function menu() {
	return (
		<Navbar className="navbar-dark" bg="primary" expand="lg" >
			<Container>
				<Navbar.Brand as={NavLink} to="/">Ativy</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							activeClassName='active'
							as={NavLink}
							to="/cliente/lista"
						>
							Clientes
						</Nav.Link>
						<Nav.Link
							activeClassName='active'
							as={NavLink}
							to="/atividade/lista"
						>
							Atividades
						</Nav.Link>
					</Nav>
					<Nav>
						<NavDropdown
							align="end"
							title="Denny"
							id="basic-nav-dropdown"
						>
							<NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Configurações</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
						</NavDropdown>
					</Nav>	
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
