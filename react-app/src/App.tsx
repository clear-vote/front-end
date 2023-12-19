import './App.css'
import Routing from './Routing.tsx'
import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/500.css'
import '@fontsource/ibm-plex-sans/600.css'
import '@fontsource/ibm-plex-mono/600.css'
import Nav from './components/Nav.tsx'

function App() {

  return (
    <main>
      <Nav />
      <Routing/>
    </main>
  )
}

export default App
