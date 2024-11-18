//Load
import {Component} from 'react'
//Import CSS HERE


class Header extends Component {
    render() {
        return (
            <nav id="navigation">
                <ul id="navbar">
                    <li id="about">
                        <a href="#">About</a>
                    </li>
                    <li id="degrees">
                        <a href="#">Degrees</a>
                    </li>
                    <li id="employment">
                        <a href="#">Employment</a>
                    </li>
                    <li id="minors">
                        <a href="#">Minors</a>
                    </li>
                    <li id="people">
                        <a href="#">People</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header