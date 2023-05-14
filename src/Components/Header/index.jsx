import './index.css'
import logoHorizontalNegative from '../../assets/logo_horizontal_negative.png'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <>
            <header className="subnav-hero-section">
                <a href="#"><img className="logo-header" src={logoHorizontalNegative}/></a>
                <ul className="subnav-hero-subnav">
                    <li><Link to="/">Quem Somos</Link></li>
                    <li><Link to="/mentoria">Mentoria?</Link></li>
                    <li><Link to="/mentores">Mentores</Link></li>
                    <li><Link to="/comunidade">Comunidade</Link></li>
                    <li><Link to="/principios">Princípios</Link></li>
                    <li><Link to="/como-participar">Como participar</Link></li>
                    <li><Link to="/fale-conosco">Fale Conosco</Link></li>
                </ul>
            </header>
        </>
    )
}

export default Header