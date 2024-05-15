import './Amazon.module.css';
import NavBar from '../../components/NavBar';
import { useEffect, useState } from 'react';
import AmazonRequests from '../../Fetch/AmazonRequests';
import CardLivro from '../../components/Card/CardLivro';


function CardAmazon() {

    const[livros, setLivros] = useState(null);

    useEffect(() => {
        // função para fazer o fetch (busca) das informações na API
        const fetchData = async () => {
            setLivros(await AmazonRequests.listarLivros());
        }
        fetchData();
    }, []) 

    return (
        <>
            <NavBar />
            <h1>Card Amazon</h1>
            <div className='ctn-livros'>
                {livros ? (
                    // Renderize o seu componente para cada item da lista
                    livros.map((livro) => (
                        <CardLivro key={livro.id_livro} livro={livro} />
                    ))
                ) : (
                    <p>Carregando... Verifique se o servidor está funcionando</p>
                )}
            </div>
        </>
    );
}

export default CardAmazon;