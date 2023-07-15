// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-logo-button-link-container">
      <img
        className="nav-logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />

      <button className="nav-log-out-button" type="button">
        <img
          className="button-logo-log-out"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
        />
      </button>

      <ul className="nav-un-order-list-text-container">
        <li className="nav-list-text">
          <Link className="nav-link-tex" to="/">
            Home
          </Link>
        </li>
        <li className="nav-list-text">
          <Link to="/products" className="nav-link-tex">
            Products
          </Link>
        </li>
        <li className="nav-list-text">
          <Link className="nav-link-tex" to="cart">
            Cart
          </Link>
        </li>
        <li className="nav-list-text">
          <button className="logout-text-button" type="button">
            Logout
          </button>
        </li>
      </ul>
    </div>

    <ul className="un-order-list-logo-container">
      <li>
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-link-logo"
          />
        </Link>
      </li>

      <li>
        <Link to="/products">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav-link-logo"
          />
        </Link>
      </li>

      <li>
        <Link to="cart">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-link-logo"
          />
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
