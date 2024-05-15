import './Netflix.module.css';
import NavBar from '../../components/NavBar';
import { useEffect, useState } from 'react';
import NetflixRequests from '../../Fetch/NetflixRequests';
import CardConteudo from '../../components/Card/CardConteudo';

function CardNetflix() {

    const [conteudos, setConteudos] = useState(null);

    // Função para formatar a data no formato "DD/MM/AAAA"
    const formatarData = (data) => {
        const dataObj = new Date(data);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
        const ano = dataObj.getFullYear();
        return `${dia}/${mes}/${ano}`;
    };

    useEffect(() => {
        // função para fazer o fetch (busca) das informações na API
        const fetchData = async () => {
            setConteudos(await NetflixRequests.listarConteudo());
        }
        fetchData();
    }, []) 

    return (
        <>
            <NavBar />
            <h1>Card Netflix</h1>
            <div className='ctn-jogadores'>
                {conteudos ? (
                    // Renderize o seu componente para cada item da lista
                    conteudos.map((conteudo) => (
                        <CardConteudo 
                            key={conteudo.show_id} 
                            conteudo={{
                                ...conteudo,
                                date_added: formatarData(conteudo.date_added) // Formatar a data
                            }} 
                        />
                    ))
                ) : (
                    <p>Carregando... Verifique se o servidor está funcionando</p>
                )}
            </div>
        </>
    );
}

export default CardNetflix;
