import { FC, useContext } from 'react'
import { LogInContext } from '../contexts/LogInContext';

const LogIn: FC = () => {

    const {setUsername, setShowProfile}: any = useContext(LogInContext);

    return (
        <div className="log-in">
            <form>
                <label htmlFor="user-name"></label>
                <input type="text" id="user-name" name="user-name" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
                <label htmlFor="password"></label>
                <input type="password" id="password" name="password" placeholder="Password"/>
                <button onClick={()=>setShowProfile(true)}>Log In</button>
            </form>
        </div>
    )
}

export default LogIn;
