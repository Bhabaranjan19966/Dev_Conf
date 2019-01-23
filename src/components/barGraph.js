import React, { Fragment } from  'react';
import {BarChart} from 'react-d3-components';
import {Loader, Segment} from 'semantic-ui-react'

class BarGraph extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showLoader:true,
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

    renderGrpah =()=>{
        setTimeout(()=>{
            console.log("setting the state");
            this.setState({
                showLoader:false
            })
        },2000)
    }


    render(){

        return (
            <Fragment>
            { this.state.showLoader ? 
              <Segment style={{width:"inherit",height:"20vh"}} >
              {this.renderGrpah()}
              <Loader content="Preparing Graphs for you" active />
            </Segment>
                 : 
          (  <div>
            <h3 style={{color:"grey", fontFamily:"sans", marginLeft:"18vw"}}> Idea vs ratings</h3>
            <BarChart
            data={this.state.data}
            width={400}
            height={400}
            margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
            </div>)
        }
        </Fragment>
        );
    }
}


export default BarGraph;