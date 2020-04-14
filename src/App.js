import React from 'react';
import './App.css';
import {Header ,Navigation ,Drawer ,Content , Layout} from 'react-mdl'
import Main from '../src/Components/Main'
import {Link} from 'react-router-dom'

function App() {
  return (
<div className="demo-big-content">
    <Layout>
        
        <Header className="header-color" title={<Link style={{textDecoration:'none' , color:'white'}} to="/">Fakhreddine Hariz</Link>} scroll  >
            
           
            <Navigation>
                <Link to="Resume">Resume</Link>
                <Link to="Projects">Projects</Link>
                <Link to="About-me">About Me</Link>
                <Link to="Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'#757575'}} to="/">Fakhreddine Hariz</Link> }>
            <Navigation>
            
                <Link to="Resume">Resume</Link>
                <Link to="Projects">Projects</Link>
                <Link to="About-me">About Me</Link>
                <Link to="Contact">Contact</Link>
           
            </Navigation>
        </Drawer>
        <Content>

            <Main  className="page-content"/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
