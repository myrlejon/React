import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import RoutingPath from "../routes/RoutingPath"

export const SettingsView = () => {
    let location = useLocation();
    return (
        <div>
            <h1>{location.state}</h1>
        </div>
    )
}