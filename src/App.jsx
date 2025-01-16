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
        <h2>Nome del linguaggio</h2>
        <p>Descrizione del linguaggio</p>
      </div>
    </section>
  )
}

export default App;
