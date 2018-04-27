import React from 'react';
import './styles.css';

export const Menu = ({ links }) => (
    <ul className="unstyle menu">
        {links.map(item => (
            <li className="unstyle menu__item">
                <a key={item.url} href={item.url} > {item.text} </a>
            </li>
        ))}
    </ul>
)