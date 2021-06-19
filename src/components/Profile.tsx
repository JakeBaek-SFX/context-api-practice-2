import { FC, useContext } from 'react'
import { LogInContext } from '../contexts/LogInContext';

const Profile: FC = () => {

    const {username}: any = useContext(LogInContext);

    return (
        <div>
            <h1>Profile</h1>
            <h2>Username: {username} </h2>
        </div>
    )
}

export default Profile;
