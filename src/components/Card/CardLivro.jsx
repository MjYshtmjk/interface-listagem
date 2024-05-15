function Livros({ livro }) {
    // Função para formatar a data no formato "DD/MM/AAAA"
    const formatarData = (data) => {
        const dataObj = new Date(data);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
        const ano = dataObj.getFullYear();
        return `${dia}/${mes}/${ano}`;
    };

    return (
        <>
            <div className="card-livros">
                <p><b>Data de Venda:</b> {formatarData(livro.data_venda)}</p> {/* Formatar a data */}
                <p><b>Nome do Livro:</b> {livro.nome_produto}</p>
                <p><b>Edição:</b> {livro.edicao}</p>
            </div>
        </>
    );
}

export default Livros;
