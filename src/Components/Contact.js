import React  from 'react'
import { Grid, Cell,List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends React.Component {

    render(){
        return(
            <div className="contact-container">
                <Grid className="contact-grid"> 
                    <Cell  className="grid-left" col={6}>
                         <h2 className="left-name">Fakhreddine Hariz</h2>
                         <img  style={{height:"12rem"}} alt="avatar" src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"></img>
                         <p className="letf-text" style={{widh:'70%', margin:'auto',paddingTop:'2rem'}}>
                             Localisation : Novosibirsk, Russia, 630132 . 
                             <hr/>
                             WhatAapp available with my phone number
                             <hr/>
                           
                             I'm open to any fun projects and volunteering. If you think I'm a good fit, feel free to contact me.
                             
                             </p> 
                    
                    </Cell>

                    <Cell  className="grid-right" col={6}> 
                    <h2 className="left-name">Contact me</h2>
                    <hr/>
                    <div className="contact-list">
                        
                                   <List>
                                        <ListItem>
                                            <ListItemContent style={{fontSize:'1.8rem', fontFamily:'Anton'}}>
                                                <i className="fa fa-phone-square" aria-hidden='true'/>
                                                +7 (913) 724-9422</ListItemContent>

                                        </ListItem>

                                    <ListItem>
                                        <ListItemContent style={{fontSize:'1.8rem', fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope-square" aria-hidden='true'/>
                                                Fakhriddine.hariz@gmail.com
                                        </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent  style={{fontSize:'1.8rem', fontFamily:'Anton'}}>
                                        <i className="fa fa-telegram" aria-hidden='true'/>
                                                @Fakhreddine_Hariz</ListItemContent>
                                    </ListItem>
                                    </List>
                    </div>
                
                </Cell>

                </Grid>
            </div>
        )
    }

}
export  default Contact