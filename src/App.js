import './index.css'

const Footer = () => {
  return (
    <div>
      <h1>This is my footer</h1>
    </div>
  )
}

const Button = (props) => {
  return(
    <div>
      <button>{props.label}</button>
    </div>
  )
}



const Navbar = () => {
  return (
    <div>
      <h1>I am the Navbar Component</h1>
      <Button label='Login' />
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hello! This is from the App component of the contacts app project</h1>
      <Footer />
    </div>
  );
}

export default App;
