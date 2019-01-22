import React from 'react'
import { Divider, Grid, Image, Segment } from 'semantic-ui-react';
import GraphMap from './heatMap';
import BarGraph from './barGraph';

const DividerExampleVertical = () => (
  <Segment>
    <Grid columns={2} relaxed='very'>

      <Grid.Column>
        <GraphMap/>
      </Grid.Column>

      <Grid.Column>
      <BarGraph/>
      </Grid.Column>

    </Grid>

    <Divider vertical>And</Divider>
  </Segment>
)

export default DividerExampleVertical