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

export default ContactStats
