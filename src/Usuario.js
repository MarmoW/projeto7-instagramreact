import React from "react";

export default function Usuario(){
  const [nome, setNome] = React.useState("Catana");
  const [pfp, setPfp] = React.useState("assets/img/catanacomics.svg");
  let Username = [{user:"catanacomics", nome:{nome} ,pfp:{pfp}}]

  function MudarFoto(){
    let novaPfp = prompt("Digite o link da sua nova foto de perfil.");
    novaPfp ? setPfp(novaPfp) : null;
    
  }
  function MudarNome(){
    let novoNome = prompt("Para qual nome gostaria de mudar?");
    novoNome ? setNome(novoNome) : null;
  }
  function User(props) {
    return (
      <>
        <img onClick={MudarFoto} src={pfp ? pfp : "assets/img/catanacomics.svg"}/>
        <div className="texto">
              <strong>{props.user}</strong>
              <span>
              {nome ? nome : "Catana"}
              <ion-icon name="pencil" onClick={MudarNome}></ion-icon>
          </span>
        </div>
      </>
  
    );
  }
  return(
        <div className="usuario">
          {Username.map((userinfo) => <User user={userinfo.user} nome={userinfo.nome} pfp={userinfo.pfp}/>)}
        </div>
  );
}



//