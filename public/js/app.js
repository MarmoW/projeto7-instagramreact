import ReactDOM from "react-dom";
import Navbar from "./navbar.js"

function App() {
    return(
        <>
            <Navbar />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));