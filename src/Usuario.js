let Username = [{user:"catanacomics", nome:"Catana",pfp:"assets/img/catanacomics.svg"}]

export default function Usuario(){
    return(
        <div className="usuario">
          {Username.map((userinfo) => <User user={userinfo.user} nome={userinfo.nome} pfp={userinfo.pfp}/>)}
        </div>
    );
}
function User(props) {
  return (
    <>
      <img src={props.pfp} />
      <div className="texto">
            <strong>{props.user}</strong>
            <span>
            {props.nome}
            <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </>

  );
}