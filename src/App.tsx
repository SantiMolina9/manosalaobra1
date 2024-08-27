import './App.css'

function App() {
  return (
    <>
    <div className = 'contenedor'>
      <h1 className = 'encabezado'>Lista de Tareas de Santiago</h1>
      <div className = 'contenedor-input'>
      <input type = 'text' id = 'input' className= 'input' placeholder = 'Ingrese una tarea'></input>
      <button className = 'boton'>ADD</button>
      </div>
      <div className = 'contenedor-tareas'>
        <ul className = "lista-tareas">
          <li className = "lista-item">
            <input type = "checkbox" className = "checkbox-tarea"/>
            <span className = "texto-tarea">Tarea N</span>
            <button className = "boton-borrar-tarea">🗑️</button>
          </li>
          <li className = "lista-item">
            <input type = "checkbox" className = "checkbox-tarea"/>
            <span className = "texto-tarea">Tarea N-1</span>
            <button className = "boton-borrar-tarea">🗑️</button>
          </li>
          <li className = 'lista-item'>
            <input type = "checkbox" className = "checkbox-tarea" />
            <span id = "tarea-completada" className = "texto-tarea">Tarea Completada 2</span>
            <button className = "boton-borrar-tarea">🗑️</button>
          </li>
          <li className = "lista-item">
            <input type = "checkbox" className = "checkbox-tarea"/>
            <span className = "texto-tarea">Tarea K</span>
            <button className = "boton-borrar-tarea">🗑️</button>
          </li>
          <li className = "lista-item">
            <input type = "checkbox" className = "checkbox-tarea"/>
            <span className = "texto-tarea">Tarea 2</span>
            <button className = "boton-borrar-tarea">🗑️</button>
          </li>
          <li className = 'lista-item'>
            <input type = "checkbox" className = "checkbox-tarea" />
            <span id = "tarea-completada" className = "texto-tarea">Tarea Completada 1</span>
            <button className = "boton-borrar-tarea">🗑️</button>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default App
