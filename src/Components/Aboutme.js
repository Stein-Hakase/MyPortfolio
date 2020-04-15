import React  from 'react'
import mypic2 from '../Media/mypic2.jpg'
import {Grid, Cell } from 'react-mdl'

class Aboutme extends React.Component {

    render(){
        return(
            
            
            
           
            <Grid  >
                           <Cell col={12} className="grid-about">
                                <img className="about-img" src={mypic2} alt="about"></img>

                       

                            <p className="about-desc" >
                            <p>My name is Fakhreddine Hariz from Tunisia and living in Russia.
                            I have a degree in computer science since 2013.
                            I am very passionate about programming, for many reasons,
                            I did not find a job in an IT company after my diploma and 
                            one of the reasons our country was in revolution at that time ... 
                            </p>
                            <p>Anyway, I started to try other ways to make different careers but I kept my passion for programming inside and I always tried to be updated with new technologies, hoping that one day I could come back and do what I really love as a job!
                            Now the opportunity shows up and here I am creating my own portfolio as a 
                            front-end developer and im able to create websites using HTML/CSS/JS.</p>
                            <p> Now i feel like a beast  about learning i spend more 
                            than 7 hours in a day just watching tutorials and learning . I want to make 
                            up for the time spent !</p>
                            </p>


                            </Cell>
        </Grid>
        )
    }

}
export  default Aboutme