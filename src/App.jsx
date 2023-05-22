import './App.css'
import SiadBar from './components/SiadBar/SiadBar'
import TopBar from './components/Topbar/TopBar'
import Home from './components/pages/Home'


function App() {

  return (
    <div>
    <TopBar/>
    <div className='flex'>
      <SiadBar/>
      <Home/>
      </div>
    </div>
  )
}

export default App
