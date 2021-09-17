import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AboutView } from '../view/AboutView'
import { HomeView } from '../view/HomeView'

export const Routing = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/about" component={AboutView} />
                <Route component={HomeView} />
            </Switch>
        </Router>
    )
}