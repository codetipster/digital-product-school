//navbar component
import Button from "../components/Button"
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
      <div className="nav-container">
  
        <div className="logo">
          <h3>iKontact</h3>
        </div>
  
        <div className="links">
          <ul>
            <li>
             <Link to='/'>
              <Button label='Home' />
            </Link>
            </li>
            <li>
            <Link to='/about'>
              <Button label='About' />
            </Link>  
            </li>
            <li>
              <Link to='/mycontact'>
              <Button label='My Contact List' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }

export default Navbar  