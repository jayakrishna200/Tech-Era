import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav>
    <Link to="/" className="link-element-header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
  </nav>
)

export default Header
