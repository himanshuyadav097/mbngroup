import React from 'react';
import ReactDOM from 'react-dom';

/* import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
 */  

import logo from './logo.svg';
import './App.css';
import Aboutus from './components/aboutus';

function App() {

  return (

<header>
  <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">Admissions</a></li>
  <li><a href="#news">Learning</a></li>
  <li><a href="#aboutus">About Us</a></li>
  <li><a href="#news">Gallery</a></li>
  <li><a href="#news">Contact Us</a></li>
  {/* <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </li> */}
</ul>

{/* <h3>Dropdown Menu inside a Navigation Bar</h3>
<p>Hover over the "Dropdown" link to see the dropdown menu.</p> */}
</header>


  );


  
}

export default App;
