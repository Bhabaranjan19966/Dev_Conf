import React, { Component, Fragment } from "react";
import "../css/graph.css";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import {
  Container,
  Dropdown,
  Header,
  Card,
  Divider,
  Form
} from "semantic-ui-react";

export default class Graph extends Component {
  componentWillMount() {
    this.setState({
      options: [
        {
          id: "1",
          value:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          text: "All"
        },
        { id: "2", value: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)", text: "VW Beetle 1971" },
        { id: "3", value: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", text: "Ford Mustang" }
      ],
      selected: ["1"]
    });
  }
  selectedFile = (event, { value }) => {
    this.setState({
      displayContent: true,
      content: value
    });
  };
  displayGraph = () => {
    this.setState({
      displaygraph: true
    });
  };
  render() {
    return (
      <Fragment>
        <Navbar />
        <Container>
          <Divider hidden />
          <Card>
          <Form onSubmit={this.handleFormSubmit} >
            <Form.Dropdown
              placeholder="select option"
              // defaultValue={this.state.selected}
              options={this.state.options}
              renderLabel={({ text }) => 1}
              onChange={this.selectedFile}
            />
          </Form>
          </Card>
         
        
          {this.state.displayContent ? (
             <div className="ui grid">
              <div className="six wide column">
            <code
              id="content"
              className="ui raised very padded text container segment"
            >
              {this.state.content}
              <button
                className="ui button raised primary right floated"
                onClick={this.displayGraph}
              >
                process
              </button>

              {this.state.displaygraph === true ? "graph" : ""}
            </code>
            </div>
  
            </div>
          ) : (
            ""
          )}
        
        </Container>
      </Fragment>
    );
  }
}
