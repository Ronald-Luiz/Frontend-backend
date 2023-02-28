import Container from 'react-bootstrap/Container'
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'

import Banners from '../components/Banners'
import Botaoconexao from '../components/Botaoconexao.jsx'

function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect (() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return (
        <Container className='conteudo-margin'>
            <Banners />
            <Botaoconexao />
            <h1>Sobre</h1>
            <p>{sobre.text}</p>
        </Container>
    );
}

export default Sobre