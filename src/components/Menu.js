import { useState } from 'react';

const Menu = () => {

    const [connect,setConnect] = useState(false);
    const [product,setProduct] = useState(false);
    const [company,setCompany] = useState(false);

  return (
    <div className="navmenu">
        <div className="navmenu__container">
            <ul>
                <li onClick={() => setProduct(!product)}>Product <img style={ product ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} src='/images/icon-arrow-dark.svg' alt="arrow" />
                    {product && 
                    <ul className="submenu">
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                    }
                </li>
                <li onClick={() => setCompany(!company)}>Company <img style={ company ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} src='/images/icon-arrow-dark.svg' alt="arrow" />
                    {company && 
                    <ul className="submenu">
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                    }
                </li>
                <li onClick={() => setConnect(!connect)}>Connect <img style={ connect ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} src='/images/icon-arrow-dark.svg' alt="arrow" />
                    {connect && 
                    <ul className="submenu">
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>LinkedIn</li>
                    </ul>
                    }
                </li>
            </ul>
            <div className="navmenu__auth">
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Menu