import React from 'react';
import HeatMap from 'react-heatmap-grid';
import '../css/HeatMap.css'

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
        let x = new Array(33).fill(0).map((_, i) => `${i}`);
        let y = new Array(20).fill(0).map((_,i)=> `${i}`)
        let x_y = new Array(y.length)
                    .fill(0)
                    .map(()=> new Array(x.length)
                    .fill(0)
                    .map( ()=> Math.floor(Math.random() * 10)));
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
            squares={true}
            onClick={(x, y) => alert(`user ${x} has given a rating of ${this.state.data[y][x]} to idea ${y} `)}
            xLabels={this.state.xLabel}
            yLabels={this.state.yLabel}
            data={this.state.data}
            className="HeatMap"
          />
       
          </div>
        );
    }
}


export default GraphMap;