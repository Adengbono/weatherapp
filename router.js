import React from 'react'
import Pages from './Pages'
import {Route, Switch} from 'react-router-dom'
//import weather from 'Component'
const Router = () => {
    return(
        <React.Suspense fallback={<h6>Loading...</h6>}>
            <Switch>
                <Route path='/login' component={Pages.Login}/>
                <Route path='/signup' component={Pages.SignUp}/>
                <Route path='/post' component={Pages.Post}/>
                <Route path='/app' component={Pages.bouUp}/>
                
            </Switch>
        </React.Suspense>
    )
}

export default Router;