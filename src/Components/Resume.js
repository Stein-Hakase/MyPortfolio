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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         It has survived not only five centuries, but also the leap into electronic typesetting, 
                         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets c
                         ontaining Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                        <p>underconstruction.com</p>
                        <hr style={{borderTop:'3px solid #833fb2' ,width:'50%'}}></hr>


                

                </Cell>
                <Cell className="resume-right"col={8} >
                <h2>Education</h2>

                        <Education 
                        syear='2009' 
                        eyear='2013'
                        schoolDescription='Institue superieur de l informatique et du multimedia'
                        schoolName='Isims'
                        />
                        <Education 
                        syear='2009' 
                        eyear='2013'
                        schoolDescription='Institue superieur de l informatique et du multimedia'
                        schoolName='Isims'
                        />
                        <Education 
                        syear='2009' 
                        eyear='2013'
                        schoolDescription='Institue superieur de l informatique et du multimedia'
                        schoolName='Isims'
                        />
                    
                <hr style={{borderTop:'3px solid #e22947', width:'80%'}}/>
          
                <h2>Experience</h2>

                        <Experience 
                        syear='2009' 
                        eyear='2013'
                        jobDescription='Institue superieur de l informatique et du multimedia'
                        jobName='Isims'
                        />
                         <Experience 
                        syear='2009' 
                        eyear='2013'
                        jobDescription='Institue superieur de l informatique et du multimedia'
                        jobName='Isims'
                        />
                    <hr style={{borderTop:'3px solid #e22947', width:'80%'}}/>
          
                      <h2>Skills</h2>
                      <Skills skill='HTML5' progress='90'/>
                      <Skills skill='CSS 3' progress='70'/>
                      <Skills skill='JavaScript' progress='50'/>
                      <Skills skill='React JS' progress='65'/>
                      <Skills skill='Sass' progress='85'/>
                      <Skills skill='Responsive Web design' progress='70'/>
                      


                      

                        
               
              </Cell>
            </Grid>
        )
    }

}
export  default Resume