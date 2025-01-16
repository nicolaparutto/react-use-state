import languages from "./assets/languages.js"



function App() {
  return (
    <section>
      <h1>Learn Web Development</h1>
      <div className="buttons-container">
        <button>Linguaggio 1</button>
        <button>Linguaggio 2</button>
        <button>Linguaggio 3</button>
      </div>
      <div className="response-container">
        <span>Nome del linguaggio</span>
        <p>Descrizione del linguaggio</p>
      </div>
    </section>
  )
}

export default App;
