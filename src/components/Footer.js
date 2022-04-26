
const Footer = () => {
    const footerYear = new Date().getFullYear()
    return (
      <div className='footer'> 
        <p>Copyright &copy; {footerYear} Samuel Nzekwe.</p>
      </div>
    )
  }

export default Footer  