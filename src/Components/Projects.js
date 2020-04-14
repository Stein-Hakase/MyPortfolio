import React   from 'react'
import {Grid ,Tabs, Tab, Cell, Card,CardTitle, CardActions, CardMenu,CardText, Button, IconButton } from 'react-mdl'

class Projects extends React.Component {
    constructor(){
        super()
        this.state={
            activeTab : 0
        }
     

    }
    toggleCategories (){
      
        switch (this.state.activeTab) {
            case 1:
                    return(
                        <div className="project-content">
                        <Card className='project-card' shadow={5} style={{minWidth:'450' ,margin:'auto'}}>
                               <CardTitle style={{color:'#fff', height:'11rem' , 
                                   background:'url(https://evondev.com/wp-content/uploads/2019/03/mixin-in-sass.jpg) center/cover '
                                   
                                   }}>
                                   First Sass Project
                               </CardTitle>
                            <CardText>
                                this is my first Sass js project this used this and this and this also, followign this and trying to be this
                            </CardText>
                               <CardActions border>
                                   <Button colored>GitHub</Button>
                                   <Button colored>CodePen</Button>
                                   <Button colored>Live Demo</Button>
                               </CardActions>
                           <CardMenu style={{color: '#fff'}}>
                           <IconButton name="share" />
                           </CardMenu>
                        </Card>
          
                 
                   
                </div>
                    )
          
           default :
                 return(
                 <div className="project-content">
                     <Card className='project-card' shadow={5} style={{minWidth:'450' }}>
                            <CardTitle style={{color:'#fff', height:'11rem' , 
                                background:'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center/cover '
                                }}>
                                First React Project
                            </CardTitle>
                         <CardText>
                             this is my first react js project this used this and this and this also, followign this and trying to be this
                         </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                        </CardMenu>
                     </Card>
                     <Card className='project-card' shadow={5} style={{minWidth:'450' }}>
                    <CardTitle style={{color:'#fff', height:'11rem' , 
                        background:'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center/cover '}}>
                        Second React Project #2
                    </CardTitle>
                 <CardText>
                     this is my Second react js project used this and this and this also, followign this and trying to be this
                 </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
             </Card>
                     <Card className='project-card' shadow={5} style={{minWidth:'450' }}>
                    <CardTitle style={{color:'#fff', height:'11rem' , 
                        background:'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center/cover '}}>
                        Third React Project #3
                    </CardTitle>
                 <CardText>
                     this is my Third react js project used this and this and this also, followign this and trying to be this
                 </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
             </Card>
             </div>
                   )     
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})}>
                    <Tab>React Projects</Tab>
                    <Tab>Projects with Sass</Tab>
          
                </Tabs>
                <section className="projects-grid">
                   <Grid className="projects-grid">
                       <Cell col={12}>
                           {this.toggleCategories()}
                       
                       </Cell>
                   </Grid>

                </section>
            </div>
        )
    }

}
export  default Projects