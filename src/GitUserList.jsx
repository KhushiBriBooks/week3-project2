import { useState } from 'react'
import SearchUser from './components/SearchUser'
import GitUserCard from './components/GitUserCard';
import SpinnerLightMode from './assets/spinner-light.gif';
import SpinnerDarkMode from './assets/spinner-dark.gif';
import { useTheme } from './ThemeContext';
import './App.css';
import { FaMoon, FaSun } from 'react-icons/fa';

const GitUserList = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleSearch = async (username) => { //function to be passed as props
    setUser('');
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || 'Unknown error');
      }
      const data = await res.json();
      setUser(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }

  return (
    <div className='d-flex flex-column align-items-center gap-1 m-4 mt-0 main-container'>
      <button onClick={toggleTheme} className='d-flex align-items-center gap-2 mt-4 mb-0 p-0 toggle-btn'>
        {theme === 'light' ? (
          <>
            <span>Dark</span>
            <FaMoon />
          </>
        ) : (
          <>
            <span>Light</span>
            <FaSun />
          </>
        )}
      </button>
      <SearchUser onSearch={handleSearch} />
      {loading && (
        <img
          src={theme === 'light' ? SpinnerLightMode : SpinnerDarkMode}
          className='spinner'
          alt='Loading...'
        />
      )}
      <GitUserCard user={user} error={error} />
    </div>
  )
}

export default GitUserList