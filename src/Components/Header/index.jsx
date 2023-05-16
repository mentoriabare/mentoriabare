import logoHorizontalNegative from '../../assets/logo_horizontal_negative.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='flex items-center justify-between w-full object-contain bg-red-600 sm:px-4 px-2 py-2 border-b'>
            <a href="#"><img className="w-[9.5rem] object-contain" src={logoHorizontalNegative}/></a>
            <ul className="flex flex-row space-x-8 items-center">
                <li className='font-bold text-white hover:text-slate-500'><Link to="/">Quem Somos</Link></li>
                <li className='font-bold text-white hover:text-slate-500'><Link to="/mentoria">Mentoria</Link></li>
                <li className='font-bold text-white hover:text-slate-500'><Link to="/mentores">Mentores</Link></li>
                <li className='font-bold text-white hover:text-slate-500'><Link to="/comunidade">Comunidade</Link></li>
                <li className='font-bold text-white hover:text-slate-500'><Link to="/principios">Princípios</Link></li>
                <li className='font-bold text-white hover:text-slate-500'><Link to="/como-participar">Como participar</Link></li>
                <li className='font-bold text-white hover:text-slate-500'><Link to="/fale-conosco">Fale Conosco</Link></li>
            </ul>
        </header>
    )
}

export default Header