import React from "react";

export default function Post(props){
    const [bookmark, setBookmark] = React.useState("bookmark-outline");  
    const [like, setLike] = React.useState("heart-outline");
    const [corlike, setCorlike] = React.useState("dark");
    let curtiu = "heart";
    let descurtiu = "heart-outline";
    const [numlikes, setnumlikes] = React.useState(Number(props.p6));
  
    function guardarPost() {
        let marcado = "bookmark";
        let desmarcado = "bookmark-outline"
        if(bookmark === "bookmark"){
          setBookmark(desmarcado);
          
        }
        else {
          setBookmark(marcado);
          
        }
      }
    
      function darLike(){
        if(like === curtiu){}
        else{
          setLike(curtiu);
          setCorlike("danger");
          console.log(numlikes.toString());
          setnumlikes(numlikes + 1);
          
              }
      }
    
      function tirarLike() {
        if(like === curtiu){    
          setLike(descurtiu);
          setCorlike("dark");
          setnumlikes(numlikes - 1);
          
          
        }
        else {
          setLike(curtiu);
          setCorlike("danger");
          setnumlikes(numlikes + 1);
          
        
        }
    }
  

    return(
    <div className="post" data-test="post">
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
      <img src={props.p3} onClick={darLike} data-test="post-image"/>
    </div>
  
    <div className="fundo">
      <div className="acoes">
        <div>
          <ion-icon name={like} onClick={tirarLike} color={corlike} data-test="like-post"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name={bookmark} onClick={guardarPost} data-test="save-post" ></ion-icon>
        </div>
      </div>
  
      <div className="curtidas">
        <img src={props.p5} />
        <div className="texto">
          Curtido por <strong>{props.p4}</strong> e <strong data-test="likes-number">outras {numlikes.toLocaleString()} pessoas</strong>
        </div>
      </div>
    </div>
  </div>);
  }

 