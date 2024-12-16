import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { deconnexion } from '../redux/action'
import store from '../redux/store'
import { useEffect } from 'react'

/**
 * an element Header HTML
 * with connected or not change visual
 * @component
 */
function Header() {
  const connected = useSelector((state) => state.connected)
  const prenom = useSelector((state) => state.user.prenom)

  useEffect(() => {
    const divConnected = document.getElementsByClassName('connected')[0]
    const aNotConnected = document.getElementsByClassName('notConnected')[0]

    if (divConnected !== undefined || aNotConnected !== undefined) {
      if (connected) {
        divConnected.style.display = 'flex'
        aNotConnected.style.display = 'none'
      } else {
        divConnected.style.display = 'none'
        aNotConnected.style.display = 'flex'
      }
    }
  }, [connected])

  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="Argent Bank Logo" />
        </Link>
        <Link to="/Login" className="notConnected">
          <i className="fa fa-2x fa-user-circle" />
        </Link>
        
        <div className="connected">
          <Link to="/Profile">
            <i className="fa-solid fa-2x fa-circle-user" />
            <p> {prenom} </p>
          </Link>
          <Link to="/" className='notConnected'>
          <i className="fa-solid  fa-2x fa-gear" />
        </Link>
          <Link
            to=""
            onClick={(e) => {
              store.dispatch(deconnexion())
            }}
          >
            <i className="fa-solid fa-2x fa-arrow-right-from-bracket" />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header