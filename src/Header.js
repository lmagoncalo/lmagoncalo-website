import React, { Component } from 'react'
import {Link} from 'react-scroll'

export default class Header extends Component {
    render() {
        return (
            <ul style={{display: 'flex'}}>
                <li><Link  to="about" spy={true} smooth={true}>Home</Link></li>
                <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
                <li><Link  to="about" spy={true} smooth={true}>Contact</Link></li>
                <li><Link  to="about" spy={true} smooth={true}>Service</Link></li>
            </ul>
        )
    }
}