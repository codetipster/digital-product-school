//form component
import { useState } from "react"

const Form = ({handleAddContact}) => {

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
      }
    
      handleAddContact(newNameObject)
      
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
        <div className='form'>
          <h4>Add New Contact</h4>
          
          <hr/>
          <form onSubmit={addContact}>
            <div>
              
              firstname: <input type='text' value={newFirstname} onChange={handleFirstnameChange}/>
            </div>
            <div>
              lastname: <input type='text' value={newLastname} onChange={handleLastnameChange}/>
            </div>
            <div>
              email: <input type='email' value={newEmail} onChange={handleEmailChange}/>
            </div>
            <div>
              <button className='registerbtn' type="submit" >Add Contact</button>
            </div>
          </form>
        </div>
      )
    }
export default Form    