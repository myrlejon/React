import { UserContext } from '../../shared/global/provider/UserProvider'
import { useContext } from 'react'
import './Profile.css'

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    
    return(
        <div className="profileWrapper">
            <img className="profileImg" src={"https://thispersondoesnotexist.com/image"} alt="" />
            <span className="displayedUsername">{authenticatedUser}</span>
        </div>
    )
}