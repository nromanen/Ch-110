import React from 'react'

const Footer = ({ text }) => {
    return (
        <div className="footer">
            <div className="wrapper-container">
                <div className="footer__row">
                    <div className="footer__text">
                        { text }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer