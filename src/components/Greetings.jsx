import './Greetings.css';

// Vamos criar essa função e atribuir duas variáveis: nome e mensagem. Neste caso, estamos atribuindo um texto fixo para mensagem e a variável nome vai receber outro valor, vamos definir posteriormente.
function Greetings({nome, mensagem = "Seja bem vind@!"}) {
    return(
        <div className="greeting">
            <span className="greeting__eyebrow">→ React: Primeiros Passos</span>
                <h1>{nome}, {mensagem}</h1>
                    <p className="greeting p"> Estamos começando a trabalhar com o react, seus primeiros passos. Boa sorte!</p>
        </div>
    );
}
export default Greetings;