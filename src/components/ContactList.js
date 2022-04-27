import ContactCard from "./ContactCard"
import ContactStats from "./ContactStats"

const ContactList = ({contacts, handleDelete}) => {
    if(!contacts || contacts.length <= 0){
      return <p className='stats'>You do not have any contacts yet, Go and make friends!</p>
    } else {
    return (
      <div className='form'>
       <h4>My Contact</h4>
       <ContactStats totalContacts={contacts}/>
        <hr/>
      <div className="contact-list">
        
          {contacts.map((contact) => <ContactCard key={contact.id} contact={contact} handleDelete={handleDelete}/>)} 
             
      </div>
      </div>
    )
  }}

export default ContactList  