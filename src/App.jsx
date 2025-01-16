import languages from "./assets/languages.js"
import {useState} from "react";

function App() {

  const [langSelected, setLangSelected] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("Nessun linguaggio selezionato");

  function descUpdater(id) {
    const language = languages.find(language => language.id === id);
    setLangSelected(language.id);
    setTitle(language.title);
    setDescription(language.description);
  }

  return (
    <section>
      <h1>Learn Web Development</h1>
      <div className="buttons-container">
        {languages.map(language => (
              <button 
              key={language.id} 
              className={language.id === langSelected ? "btn-active" : "btn"} 
              onClick={() => descUpdater(language.id)}
              >
              {language.title}
              </button>
        ))}
      </div>
      <div className="response-container">
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default App;


