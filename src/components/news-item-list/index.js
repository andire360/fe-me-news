import React from 'react';
import { NewsItem } from '../';
import Link from 'react-router-dom';

export const NewsItemList = ( {ids} ) =>  {
    return(
        <ol>
            {ids.map(id => (
                <li key={id}> 
                    <NewsItem id={id} /> 
                </li>
            ))}
        </ol>

    )
    

}