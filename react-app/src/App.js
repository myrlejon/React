import { MyFirstComponent } from './components/myfirstcomponent/MyFirstComponent'
import { Routing } from './routes/Routing'

function App() {
  return (
    <Routing>
      <h1>React Test</h1>
      < MyFirstComponent name="Nils" age = "22" />
    </Routing>
  )
}

export default App;