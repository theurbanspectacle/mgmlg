import React from 'react';
import './Header.css';
import logo from './logo.png';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img className="logo" src={logo} alt="Yeehaw" />
                <div className="logo-text">
                    <div>&#60;yeehaw&#62;</div>
                    <div className="subtext">Moon Guard, US</div>
                </div>
                    <div className="coming-soon">WIP / COMING SOON</div>
                    <div className="footer">made w/ love from Lavenderism</div>
            </div>
        );
    }
}