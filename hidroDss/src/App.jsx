import './App.css'
import Header from './components/header/header'
import Body from './components/body/body'
import Sidebar from './components/sidebar/sidebar'
import { useState } from 'react'
import Upper from './components/Upper/upper'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className={isOpen ? "main-content sidebar-open" : "main-content"}>

        <Header onToggleSidebar={() => setIsOpen(!isOpen)} />
        <Upper />
        <Body />
      </div>

    </>
  )
}

export default App
