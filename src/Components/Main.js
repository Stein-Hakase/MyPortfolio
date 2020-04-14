import React from 'react'
import { Route , Switch } from 'react-router-dom'
import Landing from './Landing'
import Resume from './Resume'
import Projects from './Projects'
import Aboutme from './Aboutme'
import Contact from './Contact'


const Main= ()=>(
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/Resume" component={Resume}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/About-me" component={Aboutme}/>
        <Route path="/Contact" component={Contact}/>
        
    </Switch>
)
export default Main