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

const ContactStats = ({totalContacts}) => {

  if(totalContacts.length < 2 && totalContacts.length !== 0){
    return <p className='stats'>{`You have a total of ${totalContacts.length} contacts. 
    Networking is as powerful as power itself, why not try making new acquaintances today`}</p>
  } else {
  return (
    <div className='stats'>
      <p>{`You have a total of ${totalContacts.length} contacts`}</p>
    </div>
  )
}
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

const ContactCard = ({contact, handleDelete}) => {


  return (
    <div className="chip">
      <div className='card-text'>
        <img src={img} alt="Person" width="96" height="96"/>
        <p>Name: {contact.firstname}  {contact.lastname} </p>
        <p id= 'chiptext'>Email: {contact.email}</p>
      </div>

      <div className='btn-container'>
      <button className='btn'><FaEdit color='#ff0081'/>Edith</button>
        <button className='btn' onClick={() => handleDelete(contact.id)}><FaTimes color='#ff0081'/>Delete</button>
      </div>
     
    </div>
  )
}


const ContactList = ({contacts, handleDelete}) => {
  if(!contacts || contacts.length <= 0){
    return <p className='stats'>You do not have any contacts yet, Go and make friends!</p>
  } else {
  return (
    <div className="contact-list">
      <h3>My Contacts</h3>
        {contacts.map(contact => <ContactCard key={contact.id} contact={contact} handleDelete={handleDelete}/> )}     
    </div>
  )
}}

//form component

const Form = ({contacts}) => {
const [data, setContacts] = useState(contacts)
const [newFirstname, setNewFirstname] = useState("")
const [newLastname, setNewLastname] = useState("")
const [newEmail, setNewEmail] = useState("")

//handles form submit 
const addContact = (e) => {
  e.preventDefault()
  const newNameObject = {
    firstname: newFirstname,
    lastname: newLastname,
    email: newEmail,
    id: data.length + 1,
  }
  setContacts(data.concat(newNameObject))
  console.log('improved data', data)
  setNewFirstname("")
  setNewLastname("")
  setNewEmail("")
}

const handleFirstnameChange = (e) => {
  setNewFirstname(e.target.value)
}

const handleLastnameChange = (e) => {
  setNewLastname(e.target.value)
}

const handleEmailChange = (e) => {
  setNewEmail(e.target.value)
}

  return (
    <div>
      <h1>Add New Contact</h1>
      <form onSubmit={addContact}>
        <div>
          firstname: <input value={newFirstname} onChange={handleFirstnameChange}/>
        </div>
        <div>
          lastname: <input value={newLastname} onChange={handleLastnameChange}/>
        </div>
        <div>
          email: <input value={newEmail} onChange={handleEmailChange}/>
        </div>
        <div>
          <button type="submit" >Add Contact</button>
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
  
  const deleteContact = (id) => {
    if (window.confirm("Are you sure that you would like to DELETE this contact from your contact list?")){
      setContact(contacts.filter((contact) => contact.id !== id))
    }
    
  }


  return (
    <div className="container">
      <Navbar />
      <ContactStats totalContacts={contacts}/>
      <ContactList  contacts={contacts} handleDelete={deleteContact}/>
      <Form contacts={contacts} onClick={handleClick}/>
      <Footer />
    </div>
  );
}

export default App;
