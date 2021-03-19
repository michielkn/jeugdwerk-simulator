import React, {Component} from 'react';
import './Navbar.css'
import jquery from 'jquery';

export default class Navbar extends Component {

    componentDidMount(){
        jquery('[data-curtain-menu-button]').click(function(){
            jquery('body').toggleClass('curtain-menu-open');
        })
    }
    
    render(){
        return (
            <div>
                <div className="curtain-menu-button" data-curtain-menu-button>
                    <div className="curtain-menu-button-toggle">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                    </div>
                </div>

            <div className="curtain-menu">
                <div className="curtain"></div>
                <div className="curtain"></div>
                <div className="curtain"></div>
                <div className="curtain-menu-wrapper">
                    <ul className="curtain-menu-list menu vertical">
                        <li><a href="/">Tijdslijn</a></li>
                        <li><a href="/animatoren">Animatoren</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
    }
}