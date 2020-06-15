import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Experience extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        {this.props.startYear} - {this.props.endYear}
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{ marginTop: '0px' }}>{this.props.companyName}</h4>
                        <p>{this.props.details}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Experience
