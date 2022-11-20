import Navbar from "./Navbar.js";
import Stories from "./Stories.js";
import Posts from "./Posts.js";
import Usuario from "./Usuario.js";
import Sugestoes from "./Sugestoes.js";


export default function App() {
    return(
        <>
            <Navbar />
            <div className="corpo">
                <div className="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <div className="sidebar">
                    <Usuario />
                    <Sugestoes />
                </div>
            </div>
            <div className="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </>
    )
}

//ReactDOM.render(App, document.querySelector(".root"));