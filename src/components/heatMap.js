import React from 'react';
import HeatMap from 'react-heatmap-grid';

class GraphMap extends React.Component{

    constructor(props){
        super(props);
        this.state  = {
            xLabel:[],
            yLabel:[],
            data:[],
            call: true,
        }
        this.netWorkCallHandler = this.netWorkCallHandler.bind(this);
    }

    netWorkCallHandler(){
        let x = ["1","2","3","4"] ;
        let y = ["a","b"];
        let x_y = [[7,8,0,1] , [8,9,2,5]];
        let val = false;

        this.setState({
            xLabel:x,
            yLabel:y,
            data:x_y,
            call:val
        })
    }

    render(){
        if(this.state.call) this.netWorkCallHandler();
        return (

            <div>
             <h3 style={{color:"grey", fontFamily:"sans", marginLeft:"18vw"}}> Idea vs user ratings</h3>

            <HeatMap
            xLabels={this.state.xLabel}
            yLabels={this.state.yLabel}
            data={this.state.data}
          />
       
          </div>
        );
    }
}


export default GraphMap;