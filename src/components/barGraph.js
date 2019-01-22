import React from  'react';
import {BarChart} from 'react-d3-components';

class BarGraph extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data :[{
                label: 'somethingA',
                values: [{x: 'SomgA', y: 10}, {x: 'SomethingB', y: 4.5}, {x: 'SomethingC', y: 3}]
            }]
        }

        this.networkCallHandler = this.networkCallHandler.bind(this);

    }

    networkCallHandler(){


        this.setState({
            
        })
    }

    render(){

        return (
        <div>
        <h3 style={{color:"grey", fontFamily:"sans", marginLeft:"18vw"}}> Idea vs ratings</h3>
        <BarChart
        data={this.state.data}
        width={400}
        height={400}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
        </div>
        );
    }
}


export default BarGraph;