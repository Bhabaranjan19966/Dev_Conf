import React from 'react'
import { Divider, Grid, Image, Segment } from 'semantic-ui-react';
import GraphMap from './heatMap';
import BarGraph from './barGraph';
import '../css/graph.css'
const DividerExampleVertical = () => (
  <Segment>
    <Grid columns={2} relaxed='very' className="bargraph">

   

      <Grid.Column >
      <BarGraph/>
      </Grid.Column>

      <Grid.Column>
        <GraphMap/>
      </Grid.Column>

    </Grid>

    <Divider vertical>And</Divider>
  </Segment>
)

export default DividerExampleVertical