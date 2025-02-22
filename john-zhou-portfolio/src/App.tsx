import AppBar from "./components/AppBar"
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import React, {useState} from 'react';


function App() {
  const [activeTab, setActiveTab] = useState('home');
  const pages = [
    {name: 'Home', value: 'home'},
    {name: 'About', value: 'about'},
    {name: 'Portfolio', value: 'portfolio'},
    {name: 'Contact', value: 'contact'},

];

  return (
    <>
      <AppBar />
      <HomePage />
      {/* <TabBar /> */}
    </>
  )
}

export default App
