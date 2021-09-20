import { useEffect, useState } from "react"

export const HomeView = () => {
    const [count, setcount] = useState(0)

    useEffect(() => {
        alert("component is beign rendered")
        return () => {
            alert("component is being removed")
        }
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setcount(count + 1)}>Incriment with 1</button>
        </div>
    )
}