//navbar component
import Button from "../components/Button"

const Navbar = () => {
    return (
      <div className="nav-container">
  
        <div className="logo">
          <h3>iKontact</h3>
        </div>
  
        <div className="links">
          <ul>
            <li>
              <Button label='Home' />
            </li>
            <li>
              <Button label='About' />
            </li>
            <li>
              <Button label='My Contact List' />
            </li>
          </ul>
        </div>
      </div>
    )
  }

export default Navbar  