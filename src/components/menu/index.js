import React from 'react';

/*

props= {
links:

}
*/

export const Menu = ( {links} ) => (
    <ul>
        {links.map(item => (
            <li>
            <a key={item.url} href={item.url} > {item.text} </a>
            </li>
        ))}
    </ul>
)