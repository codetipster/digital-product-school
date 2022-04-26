import './index.css'
import  './styles.scss'
import  './style.js'
import img from './assets/img_avatar.png'
import {FaTimes, FaEdit} from 'react-icons/fa'
import Contacts from './data/contacts'
import { useState } from 'react'


//import PropTypes from 'prop-types'

const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <div className='footer'> 
      <p>Copyright &copy; {footerYear} Samuel Nzekwe.</p>
    </div>
  )
}

//button component
const Button = (props) => {
  return(
    <div>
      <button className='bubbly-button'>{props.label}</button>
    </div>
  )

  
}

//navbar component
const Navbar = () => {
  return (
    <div className="nav-container">

      <div className="logo">
        <h1>iKontact</h1>
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


//contact card component

const ContactCard = ({contact}) => {
  
  return (
    <div className="chip">
      <div className='card-text'>
        <img src={img} alt="Person" width="96" height="96"/>
        <p>Name: {contact.firstname}  {contact.lastname} </p>
        <p id= 'chiptext'>Email: {contact.email}</p>
      </div>

      <div className='btn-container'>
      <button className='btn'><FaEdit color='#ff0081'/>Edith</button>
        <button className='btn'><FaTimes color='#ff0081'/>Delete</button>
      </div>
     
    </div>
  )
}


const ContactList = ({contacts}) => {
  if(!contacts || contacts.length <= 0){
    return <p>You do not have any contacts yet!</p>
  } else {
  return (
    <div className="contact-list">
      <h3>My Contacts</h3>
        {contacts.map(contact => <ContactCard key={contact.id} contact={contact} /> )}     
    </div>
  )
}}

//form component

const Form = ({contacts, onClick}) => {

  return (
    <div>
      <h1>Add New Contact</h1>
      <form>
        <div>
          firstname: <input />
        </div>
        <div>
          lastname: <input />
        </div>
        <div>
          email: <input />
        </div>
        <div>
          <button type="submit" onClick={onClick}>add</button>
        </div>
      </form>
    </div>
  )
}

//main app component
function App() {
  const [contacts, setContact] = useState(Contacts)

  const handleClick = () => {
    console.log('clicked')
  }
  
  return (
    <div className="container">
      <Navbar />
      
      <ContactList  contacts={contacts}/>
      <Form contacts={contacts} onClick={handleClick}/>
      <Footer />
    </div>
  );
}

export default App;
