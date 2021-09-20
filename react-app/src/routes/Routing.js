import { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AboutView } from '../view/AboutView'
import { HomeView } from '../view/HomeView'
import { SignInView } from '../view/SignInView'
import { UserContext } from '../shared/global/provider/UserProvider'


export const Routing = (props) => {
    
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const checkIfUserIsAuthenticatedInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem("username"))
    }

    useEffect(() => {
        checkIfUserIsAuthenticatedInBrowser()
    }, [])

    return(
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/about" component={AboutView} />
                <Route exath path="/signin" component={SignInView} />
                <Route component={HomeView} />
            </Switch>
        </Router>
    )
}