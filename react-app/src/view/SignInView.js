import { useState, useContext } from 'react';
import { UserContext } from '../shared/global/provider/UserProvider';
import { useHistory } from 'react-router-dom';

export const SignInView = () => {
    const history = useHistory()
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const login = () => {
        setAuthenticatedUser(username)
        localStorage.setItem("username", username)
        history.push("/")
    }

    return(
        <div>
            <span>Username: </span><input onChange={event => setUserName(event.target.value)}/> <br/>
            <span>Password: </span><input type="password" onChange={event => setPassword(event.target.value)}/> <br/>
            <button onClick={() => login()}>Login</button>
        </div>
    )
}