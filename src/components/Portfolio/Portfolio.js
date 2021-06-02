import React from 'react'
import Case from '../Case/index'
import './portfolio.scss'

const Portfolio = () => {
    return (
        <div className="port-wrapper full-screen">
            <div className="top-section">
                <div className="top-inner">
                    <div className="square"></div>
                </div>
            </div>
            <div className="bottom-section">
                <Case />
                <Case />
                <Case />
            </div>
        </div>
    )
}

export default Portfolio
