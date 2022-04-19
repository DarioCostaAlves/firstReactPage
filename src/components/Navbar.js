/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react"
import Logo from "../../src/images/Group.png"

export default function Navbar() {
    return (
        <nav>
            <img className="nav--icon" src={Logo} />
            <h1 className="nav--logo_text">ReactFacts</h1>
            <h3 className="nav--title">ReactCourse - Project 1</h3>
        </nav>
    )
}