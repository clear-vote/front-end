import { useState } from 'react'
import './App.css'
import Routing from './Routing.tsx'
import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/500.css'
import '@fontsource/ibm-plex-sans/600.css'
// import { createTheme } from '@mui/material'
// import { MyButton } from './components/inputs/MyButton.tsx'

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#9c27b0",
//     }
//   }
// });

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sandbox">Sandbox</Link></li>
        </ul>
      </nav> */}
      <Routing/>

      {/* <img src={chilis} alt="hi and welcome to chilis" />
      <h1 className="my-8">Hi, welcome to chilis</h1>
      <Button variant="contained" href="https://www.youtube.com/watch?v=bs53JQTuEc0" target="_blank">Yabba dabba doo</Button> */}

      {/* <MyButton>helloo</MyButton> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
