import React from 'react';
import ReactDOM from 'react-dom';


import Menu from './menu';
import Aboutus from './components/aboutus';
import Contact from './components/contactus';
import Footer from './components/footer';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {

return (
    <BrowserRouter>
<div>
  <Menu />
  <Route path="/" exact component={Home} />
  <Route path="/aboutus" component={Aboutus} />
  <Route path="/contactus" component={Contact} />

</div>
<Footer />
</BrowserRouter>

  );
}

 const Home =()=>{
     return(
         <div>

<hgroup>
  <h1>HOME</h1>
  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

</hgroup>
         </div>
     )
 }
export default App;
