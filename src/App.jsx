import './App.css'
import GitUserList from './GitUserList'
import { ThemeProvider } from './ThemeContext'

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
