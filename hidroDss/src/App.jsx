import './App.css'
import Header from './components/header/header'
import Body from './components/body/body'
import Sidebar from './components/sidebar/sidebar'

function App() {

  return (
    <>
      <div className=" main-content">
        <Sidebar />
        <Header />
        <Body />
      </div>

    </>
  )
}

export default App
