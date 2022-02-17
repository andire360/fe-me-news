import React from 'react';
import './styles.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ducks from '../../ducks'

export const Page = ({ children, isDarkTheme }) => {
    const className = isDarkTheme ? 'page page-dark' : 'page';
    return   (
        <div className={className}>
            {children}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isDarkTheme: ducks.ui.selectors.isDarkTheme(state)
    }  
}

export default withRouter(connect(mapStateToProps, null)(Page));
