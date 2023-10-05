import React from "react"

export default function Header() {
    return(
        <header className="header">
            <div className="img-wrapper">
                <img src="./img/edgar01.png" />
            </div>
            <h2 className="header--title">Edgar Brenes</h2>
            <p className="header--occupation">Frontend Developer</p>
            <small>edgarbrenes.website</small>
            <div className="btn-container">
                <a href="mailto:ebc1993@outlook.com" className="header-btn email-btn">
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </a>
                <a href="https://www.linkedin.com/in/edgarbc93/" target="_blank" className="header-btn linkedIn-btn">
                    <i className="fa-brands fa-linkedin"></i>
                    LinkedIn
                </a>
            </div>
        </header>
    )
}