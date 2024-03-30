import './App.css';
import 'remixicon/fonts/remixicon.css'
import SideBar from './components/NavBar';
import Main from './components/HomePage';
import { useState } from 'react';

function App() {
  const menuBar = [
    {logo: 'ri-dashboard-fill', content: 'Dashboard'},
    {logo: 'ri-bar-chart-fill', content: 'Auctions'},
    {logo: 'ri-calendar-fill', content: 'Calendar'}
  ]

  const [getTitle, setGetTitle] = useState('Dashboard')

  const handleTitle = title => {
    setGetTitle(title)
  }

  return (
    <div className="App w-screen h-screen">
      <SideBar getMenuBar={menuBar} getTitle={handleTitle} />
      <Main getTitle={getTitle} />
    </div>
  );
}

export default App;
