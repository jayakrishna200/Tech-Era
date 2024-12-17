import './index.css'
import Header from '../Header'

const NotFoundRoute = () => (
  <div className="not-found-main-bg">
    <Header />
    <div className="not-found-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-head">Page Not Found</h1>
      <p className="not-found-desc">
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </div>
)
export default NotFoundRoute
