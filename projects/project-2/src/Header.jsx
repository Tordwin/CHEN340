//Load
import {Component} from 'react'

class Header extends Component {
    render() {
        return (
            <div id='header'>
                <nav id="navigation">
                    <ul id="navbar">
                        <li id="title">
                            <h1><a href='/home'>Welcome to ISchool</a></h1>
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
            </div>
        )
    }
}

export default Header