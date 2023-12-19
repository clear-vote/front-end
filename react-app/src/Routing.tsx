import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { SandboxPage } from './pages/SandboxPage'


function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/sandbox" element={ <SandboxPage /> } />
      </ Routes>
    </>
  );
}

export default Routing