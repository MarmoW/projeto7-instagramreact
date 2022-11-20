const ItensSugestoes = [{nome: "bad.vibes.memes",foto:"assets/img/bad.vibes.memes.svg",razao:"Segue você"}, {nome: "chibirdart",foto:"assets/img/chibirdart.svg",razao:"Segue você"},
{nome: "razoesparaacreditar",foto:"assets/img/razoesparaacreditar.svg",razao:"Novo no Instagram"},{nome:"adorable_animals",foto:"assets/img/adorable_animals.svg",razao:"Segue você"},
{nome:"smallcutecats" ,foto: "assets/img/smallcutecats.svg",razao:"Segue você"}]

export default function Sugestoes() {
    return (
        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {ItensSugestoes.map((sugest) => <Sugestao nome={sugest.nome} foto={sugest.foto} razao={sugest.razao}/>)}
          <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                 Hashtags • Idioma
          </div>

          <div className="copyright">
                 © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    );
}
function Sugestao(props) {
  return(
    <div className="sugestao">
            <div className="usuario">
              <img src={props.foto} />
              <div className="texto">
                <div className="nome">{props.nome}</div>
                <div className="razao">{props.razao}</div>
              </div>
            </div>
            <div className="seguir">Seguir</div>
     </div>

  )
}