//contact card component
import img from '../assets/img_avatar.png'

import {FaTimes} from 'react-icons/fa'

const ContactCard = ({contact, handleDelete}) => {


    return (
      <div className="chip">
        <div className='card-text'>
          <img src={img} alt="Person" width="96" height="96"/>
          <p>Name: {contact.firstname}  {contact.lastname} </p>
          <p id= 'chiptext'>Email: {contact.email}</p>
        </div>
  
        <div className='btn-container'>
        
          <button className='btn' onClick={() => handleDelete(contact.id)}><FaTimes color='#ff0081'/>Delete</button>
        </div>
       
      </div>
    )
  }

export default ContactCard