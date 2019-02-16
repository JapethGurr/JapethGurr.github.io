import * as React from "react";
import { Header, Icon, Grid } from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const NotFoundPage = () =>
    <Grid centered verticalAlign="middle"
      style={{
        minHeight: "700px",
        }}
      >
      <Grid.Column>
        <Grid.Row style={{textAlign: "center"}}>
          <Icon name="exclamation triangle" size="huge"/>
          <Header as="h1">Not Found (404)</Header>
          <Header as="h2">Turn back, there's nothing for you here.</Header>
        </Grid.Row>
      </Grid.Column>
    </Grid>;

export default withLayout(NotFoundPage);
