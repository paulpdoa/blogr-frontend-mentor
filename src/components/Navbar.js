
const Navbar = () => {
  return (
    <nav className="content">
        <div className="max-content navbar">
            <div className="navbar__navs">
                <img className="navbar__logo" src="/images/logo.svg" alt="logo" />
                <ul className="navbar__btns">
                    <li className="nav__btn">Product <img src="/images/icon-arrow-light.svg" alt="arrow light" /></li>
                    <li className="nav__btn">Company <img src="/images/icon-arrow-light.svg" alt="arrow light" /></li>
                    <li className="nav__btn">Connect <img src="/images/icon-arrow-light.svg" alt="arrow light" /></li>
                </ul>
            </div>
            <div className="navbar__auth">
                <button className="navbar__login">Login</button>
                <button className="navbar__signup">Sign Up</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar