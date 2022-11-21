import React from "react";
import Post from "./Post.js";

export default function Posts() {
  const InfoPosts = [
    {pfpquempostou:"assets/img/meowed.svg",user:"meowed",imgpost:"assets/img/gato-telefone.svg",
    nomecurtiu:"respondeai",pfpcurtiu:"assets/img/respondeai.svg",numcurtidas:"101523"},
    {pfpquempostou:"assets/img/barked.svg",user:"barked",imgpost:"assets/img/dog.svg",
    nomecurtiu:"adorable_animals",pfpcurtiu:"assets/img/adorable_animals.svg",numcurtidas:"99159"}];
 
  
  
  return(
        <div className="posts">
          {InfoPosts.map((infos) => <Post p1={infos.pfpquempostou} p2={infos.user} p3={infos.imgpost} p4={infos.nomecurtiu} p5={infos.pfpcurtiu} p6={infos.numcurtidas}/>)}
        </div>
    );
}
