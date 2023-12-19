import { Link } from 'react-router-dom'
import chilis from '../assets/chilis.gif'
import { Button } from '../components/ui/button.tsx';

export const HomePage = () => {
  return (
    <section className="flex flex-col items-center pt-16">
      <div className="max-w-lg">
        <img src={chilis} alt="hi and welcome to chilis" />
        <h1 className="text-3xl font-semibold my-8">Hi, welcome to chilis</h1>
        <Button>
          <a href="https://www.youtube.com/watch?v=bs53JQTuEc0" target="_blank">Yabba dabba doo</a>
        </Button>
      </div>
    </section>
  );
}