import React from 'react';
import { Menu } from '../';
import { Link } from 'react-router-dom';
import './styles.css';
import { connect } from 'react-redux';
import * as ducks from '../../ducks';

const mainMenu = [
    { text: 'New', url: 'https://news.ycombinator.com/newest' },
    { text: 'Show', url: 'https://news.ycombinator.com/show' },
    { text: 'Submit', url: 'https://news.ycombinator.com/submit' },
];

export const Header = (props) => (
    <div className="header">
        <Link className="header__logo" to="/">
            <img src="https://news.ycombinator.com/y18.gif" alt="React news logo" />
            React News
        </Link>
        <div className="header__menu">
            <Menu links={mainMenu} />
        </div>
        <button onClick={e => { props.toggleTheme}}>
            Toggle theme
        </button>
    </div>
)

const mapDispatchToProps = {
    toggleTheme: ducks.ui.toggleTheme,
}

export default connect(null,mapDispatchToProps)(Header);
