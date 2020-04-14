import React from 'react'
import { Grid ,Cell } from 'react-mdl'

class Experience extends React.Component{
    constructor(props){
        super(props)
        this.state={
                syear:props.syear,
                eyear:props.eyear,
                jobName:props.jobName,
                jobDescription:props.jobDescription
        }
    }
    render(){
        return(
            <Grid>
                < Cell Col={4}>
                    <p >{this.props.syear}-{this.props.eyear}</p>
                </Cell>
                <Cell col={8}>
                <h4 style={{marginTop:'0'}}>{this.props.jobName}</h4>
                <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}


export default Experience