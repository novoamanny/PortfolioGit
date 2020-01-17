import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Routes from '../../Routes/Routes';



import Navigation from './Navigation/Navigation';
import Bio from './Bio/Bio';

const Layout = () =>{

    

    return(
        <Router>
            <div className='Layout'>
            <Navigation/>
                <Switch>
                
                    <Route exact path='/' component={Bio}/>
                    <Route component={Routes}/>
                </Switch>
            </div>
        </Router>
    )
}


export default Layout;