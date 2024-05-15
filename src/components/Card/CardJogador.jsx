function Jogadores({ jogador }) {

    return (
        <>
            <div className="card-jogador">
                <p><b>Nome do Jogador:</b> {jogador.playername}</p>
                <p>Pé Dominante:<b></b> {jogador.foot}</p>
                <p><b>Posição:</b> {jogador.playerposition}</p>
                <p><b>OVR:</b> {jogador.ovr}</p>
            </div>
        </>
    );
}

export default Jogadores