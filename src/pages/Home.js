import Button from "../components/Button"
import {Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
        <h1>Welcome to my contact app homepage</h1>
        <p>To begin, please <Link to='/add'><Button label= 'Add New Contact'/></Link></p>
    </div>
  )
}

export default Home