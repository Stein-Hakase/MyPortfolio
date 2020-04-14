import React  from 'react'
import { Grid, Cell  } from 'react-mdl'
import img from '../Media/mypic.jpg'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
class Resume extends React.Component {

    render(){
        return(
            <Grid>
                <Cell className="resume-left" col={4}>
                    <div style={{textAlign:'center'}}>
                        <img src={img} alt="manavatar" style={{height:'12rem', width:'12rem' , borderRadius:'50%'}}></img>
                        </div>
                    <h3 style={{paddingTop:'2rem'}}>Fakhreddine Hariz</h3>
                    <h4 style={{color:'grey'}}>Programmer</h4>
                    <hr style={{borderTop:'3px solid #833fb2' ,width:'50%'}}></hr>
                    <p style={{textAlign:'justify'}}> Junior Front-end developer capable of creating user 
                    interfaces (UI) with the JavaScript library "React.Js". I acquired a lot of
                     skills during my learning period like CSS3, HTML5, JS6, Responsive web design ... and 
                     I followed a front-end developer training on Udemy.com with certification. Learning is my hobby especially on programming, which is why I have a ton of YouTube channels and websites only on modern development 
                    and my favorites is https://www.freecodecamp.org/.
                
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2' ,width:'50%'}}></hr>
                        <h5>Adresse: </h5>
                        <p>Novosibirsk,Russia,630132</p>
                        <hr style={{borderTop:'1px solid #833fb2' ,width:'100%'}}></hr>

                        <h5>Phone: </h5>
                        <p>+7 (913) 724-9422</p>
                        <hr style={{borderTop:'1px solid #833fb2' ,width:'100%'}}></hr>

                        <h5>E-Mail: </h5>
                        <p>Fakhriddine.Hariz@gmail.com</p>
                        <hr style={{borderTop:'1px solid #833fb2' ,width:'100%'}}></hr>

                        <h5>Website: </h5>
                        <p><a 
                        style={{textDecoration:'none'}}                        
                        href='https://stein-hakase.github.io/MyPortfolio/'>My Portfolio</a></p>
                        <hr style={{borderTop:'3px solid #833fb2' ,width:'50%'}}></hr>


                

                </Cell>
                <Cell className="resume-right"col={8} >
                <h2>Education</h2>

                        <Education 
                        syear='mar 2020'
                        eyear='feb 2020'
                        schoolDescription='Modern Web Development || Zero To Front End'
                        schoolName='Udemy'
                        />
                        
                        <Education 
                        syear='2009' 
                        eyear='2013'
                        schoolDescription='Higher Institute of Computer Science and Multimedia '
                        schoolName='Isims'
                        />
                    
                <hr style={{borderTop:'3px solid #e22947', width:'80%'}}/>
          
                <h2>Experience</h2>

                        <Experience 
                        syear='2020' 
                        eyear='Today'
                        jobDescription='Front-end development '
                        jobName='FreeLance '
                        />
                         <Experience 
                        syear='2020' 
                        eyear='2019'
                        jobDescription='International Sales manager '
                        jobName='RusTehMash'
                        />
                    <hr style={{borderTop:'3px solid #e22947', width:'80%'}}/>
          
                      <h2>Skills</h2>
                      <Skills skill='HTML5' progress='90'/>
                      <Skills skill='CSS 3' progress='70'/>
                      <Skills skill='JavaScript' progress='59'/>
                      <Skills skill='React JS' progress='65'/>
                      <Skills skill='Sass' progress='85'/>
                      <Skills skill='Responsive Web design' progress='70'/>
                      <Skills skill='Arabic' progress='90'/>
                      <Skills skill='French' progress='85'/>
                      <Skills skill='English' progress='80'/>
                      <Skills skill='Russian' progress='40'/>


                      


                      

                        
               
              </Cell>
            </Grid>
        )
    }

}
export  default Resume