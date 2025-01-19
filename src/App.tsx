import { useState } from "react";
import { messages } from "./utils/utils";
import { Modal } from "./components/Modal";
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 212, left: 200 });
  const [modal, setModal] = useState(false)

  const handleYesClick = () => {
    setModal(true)
    setMessage("Obrigado, minha Princesa!!!");
  };

  

  const handleNoClick = () => {
    const randomTop = Math.floor(Math.random() * 300); 
    const randomLeft = Math.floor(Math.random() * 300); 
    setNoButtonPosition({ top: randomTop, left: randomLeft });
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
  };

  console.log(message)

  return (
    <>
      <div>
        <h1 style={{ color: "red", fontSize: "2rem" }}>
          Aceita minhas desculpas, Princesa?
        </h1>
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            position: "relative",
            height: "400px",
          }}
        >
         
          {!modal ? (
            <>
          <button style={{
            marginLeft: "-100px"
          }} onClick={handleYesClick}>Sim</button>
          <button
            onClick={handleNoClick}
            style={{
              position: "absolute",
              top: `${noButtonPosition.top}px`,
              left: `${noButtonPosition.left}px`,
              transition: "top 0.3s, left 0.3s",
            }}
          >
            Não
          </button>
            </>

          ): null}

          {modal ? <Modal/> : null}
        </div>
        <div style={{ marginTop: "-1rem", fontSize: "1.5rem", color: "red", fontWeight: "bold" }}>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
}

export default App;