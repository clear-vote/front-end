import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { Button } from './ui/button.tsx';

export default function Nav() {
  return(
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <Link to="/">
              <img src={logo} alt="ClearVote logo" width="48" height="48"/>
              </Link>
          </li>
          <li>
            <Button>
              <Link to="/sandbox">Go to sandbox</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>


  )
}