import { useState } from 'react';

const Navbar = () => {

  const [product,setProduct] = useState(false);
  const [company,setCompany] = useState(false); 
  const [connect,setConnect]= useState(false);
    
  return (
    <nav className="content">
        <div className="max-content navbar">
            <div className="navbar__navs">
                <img className="navbar__logo" src="/images/logo.svg" alt="logo" />
                <ul className="navbar__btns">
                    <li onMouseEnter={() => setProduct(true)} onMouseLeave={() => setProduct(false)} className="nav__btn">
                        { !product ? 
                            <>
                                <span>Product</span> <img src="/images/icon-arrow-light.svg" alt="arrow light" />
                            </> : 
                            <>
                                <u>Product</u> <img className="icon-up" src="/images/icon-arrow-light.svg" alt="arrow light" />
                                <div className="menu">
                                    <ul>
                                        <li>Overview</li>
                                        <li>Pricing</li>
                                        <li>Marketplace</li>
                                        <li>Features</li>
                                        <li>Integrations</li>
                                    </ul>
                                </div>
                            </>
                        }
                    </li>
                    <li onMouseEnter={() => setCompany(true)} onMouseLeave={() => setCompany(false)} className="nav__btn">
                        { !company ? 
                            <>
                                <span>Company</span> <img src="/images/icon-arrow-light.svg" alt="arrow light" />
                            </> : 
                            <>
                                <u>Company</u> <img className="icon-up" src="/images/icon-arrow-light.svg" alt="arrow light" />
                                <div className="menu">
                                    <ul>
                                        <li>About</li>
                                        <li>Team</li>
                                        <li>Blog</li>
                                        <li>Careers</li>
                                    </ul>
                                </div>
                            </>
                        }
                    </li>
                    <li onMouseEnter={() => setConnect(true)} onMouseLeave={() => setConnect(false)} className="nav__btn">
                        { !connect ? 
                            <>
                                <span>Connect</span> <img src="/images/icon-arrow-light.svg" alt="arrow light" />
                            </> : 
                            <>
                                <u>Connect</u> <img className="icon-up" src="/images/icon-arrow-light.svg" alt="arrow light" />
                                <div className="menu">
                                    <ul>
                                        <li>Test</li>
                                        <li>Newsletter</li>
                                        <li>LinkedIn    </li>
                                    </ul>
                                </div>
                            </>
                        }
                    </li>
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