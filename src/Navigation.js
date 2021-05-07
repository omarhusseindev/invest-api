import React from "react";
import "./Navigation.css";

function Navigation() {
    return (
        <div>
            <div className="navContainer">
                    <nav>
                        <ul className="nav">
                            <li className="active"><a href="/">Home</a></li>
                        </ul>
                    </nav>
            </div>
        </div>
    )
}

export default Navigation