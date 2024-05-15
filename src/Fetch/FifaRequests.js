class FifaRequests {

    constructor() {   
        this.serverUrl = 'http://10.90.2.119:3333';
        this.routeListarJogador = '/playercards';
        this.routeATualizarJogador = '/atualizar/jogador';
    }

    async listarJogadores() {
        try {
            // Faz a busca e armazena o resultado em response
            const response = await fetch(`${this.serverUrl}${this.routeListarJogador}`);
            // verifica se o estado da response (ok) é falso
            if (!response.ok) {
                // caso seja falso, houve algum erro na requisição, e o erro é lançado
                throw new Error('Erro ao buscar servidor');
            }
            // caso a busca seja bem sucedida, o resultado é convertido em um JSON e armazenado
            // na variável tabelaFifa
            return await response.json();
        } catch (error) {
            // escreve o erro no console
            console.error('Erro: ', error);
        }
    }
}

export default new FifaRequests

