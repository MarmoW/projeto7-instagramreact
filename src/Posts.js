const InfoPosts = [{pfpquempostou:"assets/img/meowed.svg",user:"meowed",imgpost:"assets/img/gato-telefone.svg",nomecurtiu:"respondeai",pfpcurtiu:"assets/img/respondeai.svg",numcurtidas:"101.523"},{pfpquempostou:"assets/img/barked.svg",user:"barked",imgpost:"assets/img/dog.svg",nomecurtiu:"adorable_animals",pfpcurtiu:"assets/img/adorable_animals.svg",numcurtidas:"99.159"}];

export default function Posts() {
    return(
        <div className="posts">
          {InfoPosts.map((infos) => <Post p1={infos.pfpquempostou} p2={infos.user} p3={infos.imgpost} p4={infos.nomecurtiu} p5={infos.pfpcurtiu} p6={infos.numcurtidas}/>)}
        </div>
    );
}
function Post(props){
  return(<div className="post">
  <div className="topo">
    <div className="usuario">
      <img src={props.p1} />
      {props.p2}
    </div>
    <div className="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  </div>

  <div className="conteudo">
    <img src={props.p3} />
  </div>

  <div className="fundo">
    <div className="acoes">
      <div>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>

    <div className="curtidas">
      <img src={props.p5} />
      <div className="texto">
        Curtido por <strong>{props.p4}</strong> e <strong>outras {props.p6} pessoas</strong>
      </div>
    </div>
  </div>
</div>);
}