import React from 'react'
import { Grid ,Cell } from 'react-mdl'

class Education extends React.Component{
    constructor(props){
        super(props)
        this.state={
                syear:props.syear,
                eyear:props.eyear,
                schoolName:props.schoolName,
                schoolDescription:props.schoolDescription
        }
    }
    render(){
        return(
            <Grid>
                < Cell Col={4}>
                    <p >{this.props.syear}-{this.props.eyear}</p>
                </Cell>
                <Cell col={8}>
                <h4 style={{marginTop:'0'}}>{this.props.schoolName}</h4>
                <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
    }
}


export default Education