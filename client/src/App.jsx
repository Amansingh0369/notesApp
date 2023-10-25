import './App.css'
import {BrowserRouter as  Router,Routes,Route} from "react-router-dom";
import Landing from "../components/Landing.jsx";
import Signup from "../components/Signup.jsx";
import Login from "../components/Login.jsx";
import Notes from "../components/Notes.jsx";
import Bar from "../components/Bar.jsx";

const App = () => {

  return (

     <Router>
         <Bar></Bar>
       <Routes>
           <Route path='/' element={<Landing/>}/>
           <Route path='/signup' element={<Signup/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/notes' element={<Notes/>}/>
       </Routes>

     </Router>
  )
}

export default App
