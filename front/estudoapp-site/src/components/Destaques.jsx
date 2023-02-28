import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import foto from '../img/l.png'
import foto2 from '../img/internetcarioca.png'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src={foto2} />
                    <Card.Body>
                        <Card.Title>Conheça nossos planos:</Card.Title>
                        <Card.Text>
                            Temos planos para todas as familias, das que menos utilizam internet até as mais conectadas, com os melhores e mais variados valores do mercado.
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Acessar o EstudoApp</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://prefeitura.rio/wp-content/uploads/2020/02/49515301258_0c34ad635f_5k-360x240.jpg" />
                    <Card.Body>
                        <Card.Title>Inernet grátis:</Card.Title>
                        <Card.Text>
                        Internet gratis para estudantes da rede pública em escolas, hospitais e locais públicos, cadastre-se...
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Conheça mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" className='foto1' src="https://www.minhaoperadora.com.br/wp-content/uploads/2022/07/EUA-aprovam-uso-da-internet-via-satelite-da-Starlink-em-veiculos.jpg" />
                    <Card.Body>
                        <Card.Title>Entenda nossa parceria com a STARLINK:</Card.Title>
                        <Card.Text>
                            Nossa parceria com o Elon Musk, visando recolucionar a qualidade da internet carioca e dar acessibilidade aos estudantes das escolas públicas cariocas!
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;