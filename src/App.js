import './index.css'
import  './styles.scss'
import  './style.js'
//import {v4 as uuidv4} from 'uuid' 
import Footer from './components/Footer'
import Form from './components/Form'
import About from './pages/About'
import Navbar from './layout/Navbar'
import ContactList from './components/ContactList'
//import Contacts from './data/contacts'
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState, useEffect } from 'react'


//main app component 
function App() {
  const [contacts, setContact] = useState([])
  
  useEffect(() => {
    fetchContact()
  }, [])
    
 //fetching backend data
 const fetchContact = async () => {
   const response = await fetch(`/contact?_sort=id&_order=desc`)
   const data = await response.json()

   setContact(data)
 }   
 
 //making request to server(backend)
  const handleAddContact = async (newContact) => {
    const response = await fetch(`/contact?_sort=id&_order=desc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    })

    const data = await response.json()

    //newContact.id = uuidv4()
    setContact([data, ...contacts])  
    //console.log(newContact)
  }
  

  //Deleting from server
  const deleteContact = async (id) => {
    if (window.confirm("Are you sure that you would like to DELETE this contact from your contact list?")){
      await fetch(`contact/${id}`, { method: 'DELETE'})
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
         <Route path='/mycontact' element={<ContactList  contacts={contacts} handleDelete={deleteContact} />}/>
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
