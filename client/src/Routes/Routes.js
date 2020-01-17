import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Bio from '../components/Layout/Bio/Bio';

import Edu from '../components/Layout/Edu/Edu';
import Exp from '../components/Layout/Exp/Exp';
import Portfolio from '../components/Layout/Portfolio/Portfolio';


const Routes = () =>{
    return(
        <section>
            <Switch>
                <Route exact path='/edu' component={Edu}/>
                <Route exact path='/exp' component={Exp}/>
                <Route exact path='/portfolio/archive' component={Portfolio}/>
                
            </Switch>
        </section>
    )
}

export default Routes;