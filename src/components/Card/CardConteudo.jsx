function Conteudos({ conteudo }) {

    return (
        <>
            <div className="card-conteudo">
                <p><b>Tipo:</b> {conteudo.tipo}</p>
                <p>Título:<b></b> {conteudo.titulo}</p>
                <p><b>País:</b> {conteudo.pais}</p>
                <p><b>Ano de Lançamento:</b> {conteudo.ano_lancamento}</p>
            </div>
        </>
    );
}

export default Conteudos;