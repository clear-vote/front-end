import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import chilis from '../assets/chilis.gif'

export const HomePage = () => {
  return (
    <>
      <img src={chilis} alt="hi and welcome to chilis" />
      <h1 className="my-8">Hi, welcome to chilis</h1>
      <Button variant="contained" href="https://www.youtube.com/watch?v=bs53JQTuEc0" target="_blank">Yabba dabba doo</Button>
      <Button><Link to="/sandbox">Go to sandbox</Link></Button>
    </>
  );
}