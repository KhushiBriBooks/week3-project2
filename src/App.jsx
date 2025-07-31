import './App.css'
import GitUserList from './components/Git/index'
import { ThemeProvider } from './library/ThemeContext'

function App() {

  return (
    <>
      <ThemeProvider>
        <GitUserList />
      </ThemeProvider>
    </>
  )
}

export default App
