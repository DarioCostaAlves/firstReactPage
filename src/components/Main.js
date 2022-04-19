/**
Challenge: Build the main section!

Skip 2 aspects of the design for now:
1. The colored bullets in the list
2. The larger React logo on the side

Those will be separate challenges coming up.
*/

import React from "react"

export default function Main() {
    return (
        <main>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>)
}