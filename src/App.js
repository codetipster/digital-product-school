import './index.css'
import  './styles.scss'
import  './style.js'
import {v4 as uuidv4} from 'uuid' 
import Footer from './components/Footer'
import Form from './components/Form'
import About from './pages/About'
import Navbar from './layout/Navbar'
import ContactList from './components/ContactList'
import Contacts from './data/contacts'
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
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
    <Router>
    <div className="container">
      <Navbar />
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/about' element={<About />}/>
         <Route path='/add' element={<Form contacts={contacts} handleAddContact={handleAddContact}/>}/>
         <Route path='/mycontact' element={<ContactList  contacts={contacts} handleDelete={deleteContact}/>}/>
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
