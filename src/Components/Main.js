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
        <Route path="/MyPortfolio/Resume" component={Resume}/>
        <Route path="/MyPortfolio/Projects" component={Projects}/>
        <Route path="/MyPortfolio/About-me" component={Aboutme}/>
        <Route path="/MyPortfolio/Contact" component={Contact}/>
        
    </Switch>
)
export default Main