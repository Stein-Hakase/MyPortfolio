import React from 'react'
import { Grid ,Cell,ProgressBar} from 'react-mdl'

class Skills extends React.Component{
    constructor(props){
        super(props)
        this.state={
            progress:props.progress,
            skill:props.skill,
             
        }
    }
    render(){
        return(
            <Grid >
                < Cell Col={12} style={{ width:'100%'}} >
                    <div style={{display:'flex', alignItems:'center' , width:'100%'}}>
                    <p style={{ margin:'0', width:'30%'}}>{this.props.skill} </p>
                    <ProgressBar  style={{width:'70%'}} progress={this.props.progress} buffer={35}  />

                    </div>
                </Cell>
               

            </Grid>
        )
    }
}


export default Skills