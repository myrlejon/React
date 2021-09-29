import { useHistory } from "react-router-dom"
import { useState } from "react";
import RoutingPath from "../routes/RoutingPath";

export const ProfileView = () => {
    const [count, setCount] = useState();
    const history = useHistory()

    const sendValue = () => {
        setCount(count + 1)
        history.push(RoutingPath.settingsView, [count])
    }

    return (
        <div>
            <span>Set value: </span><input onChange={event => setCount(event.target.value)}/> <br/>
            <h1>{count}</h1>
            <button onClick={() => sendValue()}>Click to send value</button>
        </div>
    )
}