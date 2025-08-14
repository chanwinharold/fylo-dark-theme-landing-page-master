import "../styles/Header.css"

import logoUrl from "../assets/images/logo.svg"

function Header() {
    return (
        <header className="container">
            <img src={logoUrl} alt="Fylo"/>
            <nav>
                <a href="#">Features</a>
                <a href="#">Team</a>
                <a href="#">Sign In</a>
            </nav>
        </header>
    );
}

export default Header;