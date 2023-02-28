import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import foto from '../img/l.png'

function Depoimentos() {
    return (
        <>
        <h2 className='mt-3'>Depoimentos</h2>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src={foto}  alt="Foto do depoimento" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Luís Henrique</strong>
                <p>
                    "o Internet Carioca revolucionou minha vida, eu não tinha acesso a internet, e agora alem de conseguir usar na rua de graça, também consegui botar em casa pois o valor é acessivel, agora só falta comprar um monitor."
                </p>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="https://via.placeholder.com/100/ffd000" alt="Foto do depoimento 2" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Depoimento 2</strong>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus at voluptate voluptatibus illo ad vel ut numquam, quas sunt hic esse, dolore recusandae est vero quod minima eius repellat."
                </p>
            </Col>
        </Row>        
        </>
    )
}

export default Depoimentos