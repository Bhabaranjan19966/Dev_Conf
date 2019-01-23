import React, { Component, Fragment } from "react";
import "../css/graph.css";
import Navbar from "./navbar";
import DisplayGraph from "./graphs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/styles/hljs";
import { Container, Card, Form } from "semantic-ui-react";
export default class Graph extends Component {
  componentWillMount() {
    this.setState({
      options: [
        {
          id: "1",
          value:
            "import SyntaxHighlighter from 'react-syntax-highlighter';\nimport { docco } from 'react-syntax-highlighter/dist/styles/hljs';\nconst Component = () => {\nconst codeString = '(num) => num + 1';\nreturn <SyntaxHighlighter language='javascript' style={docco}>{codeString}</SyntaxHighlighter>;  \n}",
          text: "Java"
        },
        {
          id: "2",
          value:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n The point of using \nLorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \n'Content here, content here', making it look like readable English.\n Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, \nand a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, \nsometimes on purpose (injected humour and the like)",
          text: "Javascript"
        },
        {
          id: "3",
          value:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\n If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. \nAll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, \nmaking this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, \n combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. \n The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
          text: "HTML"
        }
      ],
      selected: ["1"],
      displayGraph: false
    });
  }
  selectedFile = (event, { value }) => {
    this.setState({
      displayContent: true,
      content: value,
      displayGraph: false
    });
  };
  displayGraph = () => {
    this.setState({
      displayLoader: true,
      displayGraph: false
    });
    setTimeout(() => {
      this.setState({
        displayLoader: false,
        displayGraph: true
      });
    }, 2000);
  };
  render() {
    return (
      <Fragment>
        <Navbar />
        <Container className="process">
          <Card>
            <Form onSubmit={this.handleFormSubmit}>
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
            <div class="ui container">
              <SyntaxHighlighter
                language="javascript"
                showLineNumbers="true"
                style={docco}
              >
                {this.state.content}
              </SyntaxHighlighter>
              <button
                className="ui button raised primary right floated"
                onClick={this.displayGraph}
              >
                Deploy
              </button>
            </div>
          ) : (
            ""
          )}

          {this.state.displayGraph === true ? (
            <div className="bargraph">
            <DisplayGraph/>
            </div>
          ) : this.state.displayLoader === true ? (
            <div class="loader-bg">
              <div class="ui active inverted dimmer">
                <div class="ui medium text loader">
                  Preparing your graphs for you.
                </div>
              </div>
              <p />
            </div>
          ) : (
            ""
          )}
        </Container>
      </Fragment>
    );
  }
}
