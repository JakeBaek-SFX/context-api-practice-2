import { useState } from 'react';
import LogIn from './components/LogIn';
import Profile from './components/Profile';
import { LogInContext } from './contexts/LogInContext';
import './App.css';


function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  
  return (
    <div className="App">
      <LogInContext.Provider value={{username, setUsername, setShowProfile}}>
        {showProfile ? <Profile /> : <LogIn />}
      </LogInContext.Provider>
    </div>
  );
}

export default App;
