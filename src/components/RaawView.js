import React from 'react'
import { useLocation } from 'react-router'

export default function RaawView(jsonData) {
    const loc = useLocation()
    return (
        <div>
            {JSON.stringify(loc.state.jsonData)}
        </div>
    )
}
