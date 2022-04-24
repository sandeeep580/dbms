import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState } from 'react';


function App() {
  const [signin, setSignin] = useState(true);
  const [login, setLogin] = useState(false);
  const [homepage, sethomepage] = useState(false);
  return (

    <div className="App">
      {signin && <SignUp setSignin = {setSignin} setLogin = {setLogin} sethomepage = {sethomepage}/>}
      {login && <Login setSignin = {setSignin} setLogin = {setLogin} sethomepage = {sethomepage}/>}
      {homepage && <Home setSignin = {setSignin} setLogin = {setLogin} sethomepage = {sethomepage}/>}
    </div>
    
  );
}

export default App;
