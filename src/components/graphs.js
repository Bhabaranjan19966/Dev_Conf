import React from 'react'
import { Divider, Grid, Image, Segment } from 'semantic-ui-react';
import GraphMap from './heatMap';
import BarGraph from './barGraph';
import '../css/graph.css'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Ideas vs Rating', render: () => <Tab.Pane><BarGraph/></Tab.Pane> },
  { menuItem: 'Heat Map', render: () => <Tab.Pane> <GraphMap/> </Tab.Pane> },
  
]

const TabExampleDefaultActiveIndex = () => <Tab panes={panes} defaultActiveIndex={0} />

export default TabExampleDefaultActiveIndex
