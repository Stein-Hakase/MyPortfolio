import React from 'react'
import { Route , Switch } from 'react-router-dom'
import Landing from './Landing'
import Resume from './Resume'
import Projects from './Projects'
import Aboutme from './Aboutme'
import Contact from './Contact'


const Main= ()=>(
    <Switch>
        <Route exact path="/MyPortfolio/" component={Landing}/>
        <Route exact path="/MyPortfolio/Resume" component={Resume}/>
        <Route exact path="/MyPortfolio/Projects" component={Projects}/>
        <Route exact path="/MyPortfolio/About-me" component={Aboutme}/>
        <Route exact path="/MyPortfolio/Contact" component={Contact}/>
        
    </Switch>
)
export default Main