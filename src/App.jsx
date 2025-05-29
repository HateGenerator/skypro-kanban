import './App.css'
import Header from './components/Header/Header'
import PopNewCard from './components/popups/PopNewCard'
import PopUser from './components/popups/PopUser'
import PopBrowse from './components/popups/PopBrowse'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="wrapper">
      <PopNewCard />
      <PopUser />
      <PopBrowse />
      <Header />
      <Main />
    </div>
  )
}

export default App