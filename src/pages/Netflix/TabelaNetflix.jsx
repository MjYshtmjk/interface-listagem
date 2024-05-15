import { FaTrash } from "react-icons/fa";
import NavBar from "../../components/NavBar";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import NetflixRequests from '../../Fetch/NetflixRequests';
import './Netflix.module.css'

function ListaConteudo() {

    const [conteudo, setConteudo] = useState(null);

    // Recupera a lista de todos os conteudos do servidor
    useEffect(() => {
        // função para fazer o fetch (busca) das informações na API
        const fetchData = async () => {
            setConteudo(await NetflixRequests.listarConteudo());
        }
        fetchData();
    }, [])

    return (
        <>
            <NavBar />
            <h1>Tabela Netflix</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tipo</th>
                        <th>Título</th>
                        <th>País</th>
                        <th>Ano de Lançamento</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {conteudo ? (
                        // Renderize o seu componente para cada item da lista
                        conteudo.map(conteudos => (
                            <tr>
                                <td>{conteudos.show_id}</td>
                                <td>{conteudos.tipo}</td>
                                <td>{conteudos.titulo}</td>
                                <td>{conteudos.pais}</td>
                                <td>{conteudos.ano_lancamento}</td>
                                <td onClick={() => deletarConteudo(conteudo.show_id)}><FaTrash /></td>
                            </tr>
                        ))
                    ) : (
                        <p>Carregando... Verifique se o servidor está funcionando</p>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default ListaConteudo; 