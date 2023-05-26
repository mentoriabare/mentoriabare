import main_logo from '../assets/main_logo.svg'
import main_sandwich from '../assets/main_sandwich.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='relative flex items-center justify-between object-contain min-w-full sm:px-10 pt-6 sm:pt-8 z-20'>
            <Link to="/">
                <img className="sm:w-[12rem] object-contain ml-1" src={main_logo}/>
            </Link>
            <img className="w-[2rem] sm:hidden mr-6" src={main_sandwich}/>

            <nav className='hidden sm:flex sm:items-center sm:justify-between font-raleway text-black'>
                <Link to="/" className='px-4 hover:text-[#FF1C00]'>Quem somos</Link>
                <Link to="/mentoria" className='px-4 hover:text-[#FF1C00]'>Mentoria</Link>
                <Link to="/mentores" className='px-4 hover:text-[#FF1C00]'>Mentores</Link>
                <Link to="/comunidade" className='px-4 hover:text-[#FF1C00]'>Comunidade</Link>
                <Link to="/principios" className='px-4 hover:text-[#FF1C00]'>Princípios</Link>
                <Link to="/como-participar" className='px-4 hover:text-[#FF1C00]'>Como participar</Link>
                <Link to="/fale-conosco" className='px-4 hover:text-[#FF1C00]'>Fale Conosco</Link>
            </nav>
        </header>
    )
}

export default Header
