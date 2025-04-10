import './App.css'
import { Outlet, Link } from 'react-router-dom'

function App() {

  return (
   <>
    <Link to="/">Home</Link>&nbsp
    <div><Outlet/></div>
   </>
  )
}

export default App
