class AmazonRequests {

    constructor() {   
        this.serverUrl = 'http://10.90.2.119:3333';
        this.routeListarLivros = '/vendas';
        this.routeATualizarLivros = '/atualizar/livros';
    }

    async listarLivros() {
        try {
            // Faz a busca e armazena o resultado em response
            const response = await fetch(`${this.serverUrl}${this.routeListarLivros}`);
            // verifica se o estado da response (ok) é falso
            if (!response.ok) {
                // caso seja falso, houve algum erro na requisição, e o erro é lançado
                throw new Error('Erro ao buscar servidor');
            }
            // caso a busca seja bem sucedida, o resultado é convertido em um JSON e armazenado
            // na variável tabelaAmazon
            return await response.json();
        } catch (error) {
            // escreve o erro no console
            console.error('Erro: ', error);
        }
    }
}

export default new AmazonRequests