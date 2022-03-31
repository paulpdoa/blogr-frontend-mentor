
const Footer = () => {
  return (
    <footer className="content foot--bg">
        <div className="max-content foot">
            <img className="foot__logo" src="/images/logo.svg" alt="logo" />
            <div className="foot__nav">
              <span>Product</span>
              <ul>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Marketplace</li>
                <li>Features</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div className="foot__nav">
              <span>Company</span>
              <ul>
                <li>About</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="foot__nav">
              <span>Connect</span>
              <ul>
                <li>Contact</li>
                <li>Newsletter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer