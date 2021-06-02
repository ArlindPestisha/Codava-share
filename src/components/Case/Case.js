import React from 'react'
import { Link } from 'gatsby'
import './case.scss'

const Case = () => {
    return (
        <div className="case">
            <div className="case-img">
                <div></div>
            </div>
            <div className="text-wrapper">
                <h2>Portfolio Case</h2>
                <Link to="/">See more</Link>
            </div>
        </div>
    )
}

export default Case
