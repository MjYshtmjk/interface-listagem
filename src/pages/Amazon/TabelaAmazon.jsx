import { FaTrash, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NavBar from "../../components/NavBar";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import AmazonRequests from '../../Fetch/AmazonRequests';
import './Amazon.module.css';

function ListaLivros() {
    const [livros, setLivros] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(16); // Definindo o número de itens por página

    // Recupera a lista de todos os livros do servidor
    useEffect(() => {
        // Função para fazer o fetch (busca) das informações na API
        const fetchData = async () => {
            setLivros(await AmazonRequests.listarLivros());
        }
        fetchData();
    }, []);

    // Função para formatar a data no formato "DD/MM/AAAA"
    const formatarData = (data) => {
        const dataObj = new Date(data);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
        const ano = dataObj.getFullYear();
        return `${dia}/${mes}/${ano}`;
    };

    // Lógica para exibir itens limitados por página
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = livros ? livros.slice(indexOfFirstItem, indexOfLastItem) : null;

    // Função para deletar livro
    const deletarLivro = (idLivro) => {
        // Implemente sua lógica de deletar o livro aqui
    };

    return (
        <>
            <NavBar />
            <h1>Tabela Amazon</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Data de Venda</th>
                        <th>Nome do Livro</th>
                        <th>Edição</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems ? (
                        // Renderize o seu componente para cada item da lista
                        currentItems.map(livro => (
                            <tr key={livro.id_livro}>
                                <td>{livro.id_livro}</td>
                                <td>{formatarData(livro.data_venda)}</td> {/* Formatar a data */}
                                <td>{livro.nome_produto}</td>
                                <td>{livro.edicao}</td>
                                <td onClick={() => deletarLivro(livro.id_livro)}><FaTrash /></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Carregando... Verifique se o servidor está funcionando</td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* Botões de navegação para páginas */}
            <div>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    <FaChevronLeft />
                </button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={livros && currentItems && currentItems.length < itemsPerPage}>
                    <FaChevronRight />
                </button>
            </div>
        </>
    );
}

export default ListaLivros;
