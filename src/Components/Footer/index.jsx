import './index.css'
import logoHorizontalNegative from '../../assets/logo_horizontal_negative.png'

function Footer() {

    return (
        <>
            <footer className="social-footer">
                <div className="social-footer-left">
                    <a href="#"><img className="logo-footer" src={logoHorizontalNegative}/></a>
                </div>
                <div className="social-footer-icons">
                    <ul className="menu simple">
                    <li><a href="https://www.instagram.com/mentoriabare/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="https://twitter.com/?lang=en"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="https://github.com/"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer