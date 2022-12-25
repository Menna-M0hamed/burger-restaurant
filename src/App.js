import React, {useState} from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Desert from './Pages/Desert';
import Burger from './Pages/Burger';
import FullMenu from './Pages/FullMenu';
import Contact from './Pages/Contact';




function App() {

  const [isOpen, setisOpen] = useState(false);

  const toggle = () =>{
      setisOpen(!isOpen);
  }

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" component={Main} exact/>
        <Route path="/burger" component={Burger} exact/>
        <Route path="/desert" component={Desert} exact/>
        <Route path="/full menu" component={FullMenu} exact/>
        <Route path="/contact" component={Contact} exact/>
      </Switch>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
