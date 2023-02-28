import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Swal from 'sweetalert2';

function Menu() {

  function handleButtonClick() {
    Swal.fire({
      title: 'Login',
      html:
        '<input type="text" id="username" class="swal2-input" placeholder="Username">' +
        '<input type="password" id="password" class="swal2-input" placeholder="Password">',
      focusConfirm: false,
      preConfirm: () => {
        const username = Swal.getPopup().querySelector('#username').value;
        const password = Swal.getPopup().querySelector('#password').value;
  
        if (!username || !password) {
          Swal.showValidationMessage('Por favor, entre com seu login e senha');
        }
  
        // Check if username and password are correct
        const isUserValid = checkUserCredentials(username, password);
  
        if (!isUserValid) {
          Swal.showValidationMessage('Login e/ou senha inválidos!');
        }
  
        return { username, password };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Logado com sucesso!',
          text: `Bem vindo, ${result.value.username}`,
          icon: 'success',
        });
      }
    });

  }


  function checkUserCredentials(username, password) {
    // Replace with your own authentication logic
    return username === 'usuario' && password === '123';
  }
  
  function App() {
    return (
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" style={{ backgroundColor: '#3C89D6' }}>
      <Container>


        <div className='conexaoHeader'>
          <LinkContainer to='/'>
            <Nav.Link onClick={handleButtonClick}><img className='iconeConexaoHeader' src='../src/img/logo/svg/iconebranco.svg' />Conectar com login</Nav.Link>
          </LinkContainer>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/funcionalidades">
              <Nav.Link>Planos</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/sobre">
              <Nav.Link>Sobre</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contato">
              <Nav.Link>Contato</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;