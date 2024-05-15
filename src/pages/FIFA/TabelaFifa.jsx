import { FaTrash } from "react-icons/fa";
import NavBar from "../../components/NavBar";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import FifaRequests from '../../Fetch/FifaRequests';
import './FIFA.module.css'

function ListaJogador() {

    const [jogador, setJogador] = useState(null);

    // Recupera a lista de todos os jogadores do servidor
    useEffect(() => {
        // função para fazer o fetch (busca) das informações na API
        const fetchData = async () => {
            setJogador(await FifaRequests.listarJogadores());
        }
        fetchData();
    }, [])

    return (
        <>
            <NavBar />
            <h1>Tabela FIFA</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome do Jogador</th>
                        <th>Pé Dominante</th>
                        <th>Posição</th>
                        <th>OVR</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {jogador ? (
                        // Renderize o seu componente para cada item da lista
                        jogador.map(jogadores => (
                            <tr>
                                <td>{jogadores.playerid}</td>
                                <td>{jogadores.playername}</td>
                                <td>{jogadores.foot}</td>
                                <td>{jogadores.playerposition}</td>
                                <td>{jogadores.ovr}</td>
                                <td onClick={() => deletarJogador(jogadores.playerid)}><FaTrash /></td>
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

export default ListaJogador;