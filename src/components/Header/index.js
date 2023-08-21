import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <Link className="nav-link" to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <div>
      <Popup
        modal
        trigger={
          <button type="button" data-testid="hamburgerIconButton">
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <ul className="modal-popup">
            <button
              type="button"
              className="popup-header"
              data-testid="closeButton"
            >
              <IoMdClose onClick={() => close()} className="close-btn" />
            </button>
            <div className="popup-cont">
              <li className="list">
                <Link className="nav-item" to="/" onClick={() => close()}>
                  <AiFillHome />
                  <h1>Home</h1>
                </Link>
              </li>
              <li className="list">
                <Link className="nav-item" to="/about" onClick={() => close()}>
                  <BsInfoCircleFill />
                  <h1> About </h1>
                </Link>
              </li>
            </div>
          </ul>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
