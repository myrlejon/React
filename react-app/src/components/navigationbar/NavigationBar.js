import './NavigationBar.css';
import Logo from '../../shared/images/fishing.svg';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../shared/global/provider/UserProvider';
import { Profile } from '../profile/Profile';
import RoutingPath from '../../routes/RoutingPath';

export const NavigationBar = () => {
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const displayUserIfAuthenticated = () => {
        return (authenticatedUser)
         ? <div className="profile"> <Profile /> </div>
         : <span onClick = {() => history.push(RoutingPath.signInView)} className="signIn">Sign In</span>
    }

    return(
        <div className="navigationBarWrapper">
            <img onClick = {() => history.push(RoutingPath.homeView)}
                className="logo"
                src={Logo} 
                alt="Error"/>
            {displayUserIfAuthenticated()}
        </div>
    )
}