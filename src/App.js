import './index.css'
import  './styles.scss'
import  './style.js'
import {v4 as uuidv4} from 'uuid' 
import Footer from './components/Footer'
import Form from './components/Form'
import Navbar from './layout/Navbar'
import ContactStats from './components/ContactStats'
import ContactList from './components/ContactList'
import Contacts from './data/contacts'
import { useState } from 'react'


//main app component 
function App() {
  const [contacts, setContact] = useState(Contacts)

  const handleAddContact = (newContact) => {
    newContact.id = uuidv4()
    setContact([newContact, ...contacts])
    console.log(newContact)
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
      <Form contacts={contacts} handleAddContact={handleAddContact}/>
      <Footer />
    </div>
  );
}

export default App;
