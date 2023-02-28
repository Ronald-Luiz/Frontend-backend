import ListaFuncionalidades from "../components/ListaFuncionalidades"
import Container from 'react-bootstrap/Container'

import Banners from '../components/Banners'
import Botaoconexao from '../components/Botaoconexao.jsx'

import { useEffect, useState } from "react"
import CmsApi from '../api/CmsApi'

function Funcionalidades() {
    const [funcionalidades, setFuncionalidades] = useState([])

    useEffect(() => {
        async function fetchFuncionalidades() {
            const response = await CmsApi().getFuncionalidades()
            if(!response.ok) {
                alert('Erro ao carregar funcionalidades')
                return
            }
            const funcionalidades = await response.json()
            setFuncionalidades(funcionalidades.data)
        }

        fetchFuncionalidades()
    }, [])

    return (
        <>
        <Container className="conteudo-margin">
            <Banners />
            <Botaoconexao />
            <h1>Serviços</h1>
            <ListaFuncionalidades funcionalidades={funcionalidades} />
        </Container>
        </>
    );
}

export default Funcionalidades