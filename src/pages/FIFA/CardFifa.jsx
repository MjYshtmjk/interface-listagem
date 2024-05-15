import './FIFA.module.css';
import NavBar from '../../components/NavBar';
import { useEffect, useState } from 'react';
import FifaRequests from '../../Fetch/FifaRequests';
import CardJogador from '../../components/Card/CardJogador';

function CardFifa() {

    const[jogadores, setJogadores] = useState(null);

    useEffect(() => {
        // função para fazer o fetch (busca) das informações na API
        const fetchData = async () => {
            setJogadores(await FifaRequests.listarJogadores());
        }
        fetchData();
    }, []) 

    return (
        <>
            <NavBar />
            <h1>Card FIFA</h1>
            <div className='ctn-jogadores'>
                {jogadores ? (
                    // Renderize o seu componente para cada item da lista
                    jogadores.map((jogador) => (
                        <CardJogador key={jogador.playerid} jogador={jogador} />
                    ))
                ) : (
                    <p>Carregando... Verifique se o servidor está funcionando</p>
                )}
            </div>
        </>
    );
}

export default CardFifa;