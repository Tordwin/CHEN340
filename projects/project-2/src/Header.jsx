//Load
import {Component} from 'react'
//Import CSS HERE

class Header extends Component {
    render() {
        return (
            <nav id="navigation">
                <ul id="navbar">
                    <li id="about">
                        <a href="/about">About</a>
                    </li>
                    <li id="degrees">
                        <a href="/degrees">Degrees</a>
                    </li>
                    <li id="employment">
                        <a href="/employment">Employment</a>
                    </li>
                    <li id="minors">
                        <a href="/minors">Minors</a>
                    </li>
                    <li id="people">
                        <a href="/people">People</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header