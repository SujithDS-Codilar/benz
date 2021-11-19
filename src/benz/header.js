import Logo from "./logo";
import Menu from "./menu";
import './header.css';

function Header() {
    return (
        <div className="header">
            <Logo />
            <Menu />
        </div>
    );
}

export default Header;