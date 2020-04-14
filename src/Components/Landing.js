import  React   from 'react'
import {Grid,Cell} from 'react-mdl'
import img from '../Media/mypic.jpg'
class Landing extends React.Component {
    
    constructor(){
        super()
        this.state={

        }
    }


    render(){
        return(
          <div style={{width:'100%' ,margin:'auto'}}>
                <Grid className="landing-grid  ">
                        <Cell className="col-container" col={12}>
                            <div className='img-container'>
                                    <img  
                                    className="avatar-img"
                                    alt="avatar"
                                    src={img}/>
                            </div>
                            <div className="header-box">
                                <h3 className="header-title">Front-end Web Developer</h3>
                                <hr className="header-hr" />
                                <p className='header-skills'>HTML/CSS | JavaScript | React.Js | Sass </p>
                                <ul className="header-list">
                                    <li className="header-item"> 
                                       <a className="header-link" href='https://www.linkedin.com/in/hariz-fakhriddine-958a9638/' target='_blank' rel="noopener noreferrer">
                                        <i  className="fa fa-linkedin-square" aria-hidden="true"/></a> 
                                    </li>
                                    <li className="header-item"> 
                                         <a className="header-link" href='https://github.com/Stein-Hakase' target='_blank' rel="noopener noreferrer">
                                        <i  className="fa fa-github-square" aria-hidden="true"/></a>
                                     </li>
                                    <li className="header-item"> 
                                         <a className="header-link" href='https://www.freecodecamp.org/fccee340832-fa44-42c4-b33c-92756ba692ed' target='_blank' rel="noopener noreferrer">
                                        <i  className="fa fa-free-code-camp" aria-hidden="true" /></a>
                                    </li>
                                    <li className="header-item"> 
                                        <a className="header-link" href='https:\\facebook.com\fakhriddine.hariz' target='_blank' rel="noopener noreferrer">
                                        <i  className="fa fa-facebook-square" aria-hidden="true"/></a> 
                                    </li>
                               </ul>
                        </div>
                        </Cell>
                       
                        
                       
                 </Grid>
          </div>            
        
        )
    }
        
}
export  default Landing