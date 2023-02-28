import Container from 'react-bootstrap/Container'
import Destaques from '../components/Destaques'
import Depoimentos from '../components/Depoimentos'
import Banners from '../components/Banners'
import Botaoconexao from '../components/Botaoconexao.jsx'
import ApresentacaoHomeGrid6040 from '../components/Apresentacaohome.jsx'

function Home() {
    return (
        <>
            <Container>
                <Banners />
                <Botaoconexao />
                <ApresentacaoHomeGrid6040 />
                <Destaques />
                <Depoimentos />
            </Container>
        </>
    );
}

export default Home;